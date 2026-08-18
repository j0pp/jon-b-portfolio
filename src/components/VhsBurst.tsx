"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

type VhsModule = typeof import("@/components/canvasui/VHS");

export type BurstConfig = {
  holdMs: number;
  durationMs: number;
  peak: {
    speed: number;
    wave: number;
    jitter: number;
    crease: number;
    switching: number;
    switchingHeight: number;
    bloom: number;
    aberration: number;
    acBeat: number;
    grain: number;
    scanlines: number;
    vignette: number;
    barrel: number;
    saturation: number;
    exposure: number;
  };
};

const BURST: BurstConfig = {
  holdMs: 400,
  durationMs: 1200,
  peak: {
    speed: 1.5,
    wave: 2.5,
    jitter: 1.5,
    crease: 1.2,
    switching: 1.5,
    switchingHeight: 0,
    bloom: 0.6,
    aberration: 6,
    acBeat: 1.5,
    grain: 0.35,
    scanlines: 0.35,
    vignette: 0,
    barrel: 0,
    saturation: 1,
    exposure: 1,
  },
};

const isDev = process.env.NODE_ENV === "development";

const VhsDevControls = isDev
  ? dynamic(() => import("@/components/VhsDevControls"), { ssr: false })
  : null;

let modulePromise: Promise<VhsModule> | null = null;

function loadVhs() {
  modulePromise ??= import("@/components/canvasui/VHS");
  return modulePromise;
}

function scaledOptions(peak: BurstConfig["peak"], env: number) {
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
    vignette: peak.vignette * env,
    barrel: peak.barrel * env,
    saturation: 1 + (peak.saturation - 1) * env,
    exposure: 1 + (peak.exposure - 1) * env,
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
  const activeRef = useRef(false);
  const hostRef = useRef<HTMLDivElement>(null);
  const [mod, setMod] = useState<VhsModule | null>(null);
  const [native, setNative] = useState(false);
  const [active, setActive] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [env, setEnv] = useState(1);
  const [cfg, setCfg] = useState(BURST);

  const startBurst = useCallback(() => {
    loadVhs().then((loaded) => {
      setMod(loaded);
      setNative(loaded.supportsHtmlInCanvas());
      if (!activeRef.current) scrollYRef.current = window.scrollY;
      activeRef.current = true;
      startRef.current = performance.now();
      setEnv(1);
      setActive(true);
    });
  }, []);

  const stopBurst = useCallback(() => {
    activeRef.current = false;
    setActive(false);
  }, []);

  useEffect(() => {
    if (!resolvedTheme) return;
    if (prevThemeRef.current === null) {
      prevThemeRef.current = resolvedTheme;
      return;
    }
    if (prevThemeRef.current === resolvedTheme) return;
    prevThemeRef.current = resolvedTheme;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    startBurst();
  }, [resolvedTheme, startBurst]);

  useEffect(() => {
    if (!active || pinned) return;
    let raf = requestAnimationFrame(function tick(now) {
      const elapsed = now - startRef.current;
      if (elapsed >= cfg.durationMs) {
        activeRef.current = false;
        setActive(false);
        return;
      }
      const u =
        elapsed <= cfg.holdMs
          ? 0
          : (elapsed - cfg.holdMs) / (cfg.durationMs - cfg.holdMs);
      setEnv(1 - u * u * (3 - 2 * u));
      raf = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [active, pinned, cfg]);

  useLayoutEffect(() => {
    if (!active || !native) return;
    const content = hostRef.current?.querySelector("[data-vhs-content]");
    let removeListener = () => {};
    if (content instanceof HTMLElement) {
      content.scrollTop = scrollYRef.current;
      const onScroll = () => {
        scrollYRef.current = content.scrollTop;
      };
      content.addEventListener("scroll", onScroll, { passive: true });
      removeListener = () =>
        content.removeEventListener("scroll", onScroll);
    }
    return () => {
      removeListener();
      const y = scrollYRef.current;
      requestAnimationFrame(() => window.scrollTo(0, y));
    };
  }, [active, native]);

  const panel = VhsDevControls ? (
    <VhsDevControls
      cfg={cfg}
      pinned={pinned}
      onChange={setCfg}
      onBurst={startBurst}
      onPinToggle={(next: boolean) => {
        setPinned(next);
        if (next) {
          setEnv(1);
          startBurst();
        } else {
          stopBurst();
        }
      }}
      onReset={() => setCfg(BURST)}
    />
  ) : null;

  if (!active || !mod) {
    return (
      <>
        {children}
        {panel}
      </>
    );
  }

  const Vhs = mod.VHS;
  const options = scaledOptions(cfg.peak, pinned ? 1 : env);

  if (native) {
    return (
      <>
        <div ref={hostRef} style={overlayStyle}>
          <Vhs {...options} style={{ position: "absolute", inset: 0 }}>
            {children}
          </Vhs>
        </div>
        {panel}
      </>
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
      {panel}
    </>
  );
}
