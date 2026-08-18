"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useTheme } from "next-themes";

type VhsModule = typeof import("@/components/canvasui/VHS");

const BURST = {
  holdMs: 400,
  durationMs: 1200,
  peak: {
    speed: 1.5,
    wave: 2.5,
    jitter: 1.5,
    crease: 1.2,
    switching: 1.5,
    switchingHeight: 0.06,
    bloom: 0.6,
    aberration: 6,
    acBeat: 1.5,
    grain: 0.35,
    scanlines: 0.35,
  },
};

let modulePromise: Promise<VhsModule> | null = null;

function loadVhs() {
  modulePromise ??= import("@/components/canvasui/VHS");
  return modulePromise;
}

function scaledOptions(env: number) {
  const { peak } = BURST;
  return {
    speed: peak.speed,
    wave: peak.wave * env,
    jitter: peak.jitter * env,
    crease: peak.crease * env,
    switching: peak.switching * env,
    switchingHeight: peak.switchingHeight,
    bloom: peak.bloom * env,
    aberration: peak.aberration * env,
    acBeat: peak.acBeat * env,
    grain: peak.grain * env,
    scanlines: peak.scanlines * env,
  };
}

const overlayStyle: CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 50,
};

export default function VhsBurst({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const prevThemeRef = useRef<string | null>(null);
  const startRef = useRef(0);
  const scrollYRef = useRef(0);
  const hostRef = useRef<HTMLDivElement>(null);
  const [mod, setMod] = useState<VhsModule | null>(null);
  const [native, setNative] = useState(false);
  const [active, setActive] = useState(false);
  const [env, setEnv] = useState(1);

  useEffect(() => {
    if (!resolvedTheme) return;
    if (prevThemeRef.current === null) {
      prevThemeRef.current = resolvedTheme;
      return;
    }
    if (prevThemeRef.current === resolvedTheme) return;
    prevThemeRef.current = resolvedTheme;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    loadVhs().then((loaded) => {
      if (cancelled) return;
      setMod(loaded);
      setNative(loaded.supportsHtmlInCanvas());
      scrollYRef.current = window.scrollY;
      startRef.current = performance.now();
      setEnv(1);
      setActive(true);
    });
    return () => {
      cancelled = true;
    };
  }, [resolvedTheme]);

  useEffect(() => {
    if (!active) return;
    let raf = requestAnimationFrame(function tick(now) {
      const elapsed = now - startRef.current;
      if (elapsed >= BURST.durationMs) {
        setActive(false);
        return;
      }
      const u =
        elapsed <= BURST.holdMs
          ? 0
          : (elapsed - BURST.holdMs) / (BURST.durationMs - BURST.holdMs);
      setEnv(1 - u * u * (3 - 2 * u));
      raf = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [active]);

  useLayoutEffect(() => {
    if (!active || !native) return;
    const content = hostRef.current?.querySelector("[data-vhs-content]");
    if (content instanceof HTMLElement) content.scrollTop = scrollYRef.current;
    return () => {
      const y =
        content instanceof HTMLElement ? content.scrollTop : scrollYRef.current;
      window.scrollTo(0, y);
    };
  }, [active, native]);

  if (!active || !mod) {
    return <>{children}</>;
  }

  const Vhs = mod.VHS;
  const options = scaledOptions(env);

  if (native) {
    return (
      <div ref={hostRef} style={overlayStyle}>
        <Vhs {...options} style={{ position: "absolute", inset: 0 }}>
          {children}
        </Vhs>
      </div>
    );
  }

  return (
    <>
      {children}
      <div aria-hidden style={{ ...overlayStyle, pointerEvents: "none" }}>
        <Vhs {...options} style={{ position: "absolute", inset: 0 }}>
          {null}
        </Vhs>
      </div>
    </>
  );
}
