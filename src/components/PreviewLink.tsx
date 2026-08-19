"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import ExternalLink from "@/components/ExternalLink";
import BrowserPreview from "@/components/BrowserPreview";
import { BURST, scaledOptions } from "@/components/VhsBurst";
import {
  getPreviewAnim,
  getServerPreviewAnim,
  subscribePreviewAnim,
} from "@/components/previewAnimStore";
import type { ComponentType, ReactNode } from "react";
import type { VHSProps } from "@/components/canvasui/VHS";
import type { GlitchProps } from "@/components/canvasui/Glitch";

const WARM_EVENTS = ["pointermove", "pointerdown", "scroll", "keydown", "touchstart"] as const;

const CARD_WIDTH = 320;
const CARD_HEIGHT_FALLBACK = 244;
const EDGE_MARGIN = 16;

const FX_HOLD_MS = 120;
const FX_TOTAL_MS = 550;

type Fx =
  | { kind: "vhs"; Comp: ComponentType<VHSProps>; seq: number }
  | { kind: "glitch"; Comp: ComponentType<GlitchProps>; seq: number };

let vhsModule: Promise<typeof import("@/components/canvasui/VHS")> | null = null;
let glitchModule: Promise<typeof import("@/components/canvasui/Glitch")> | null = null;

function loadFx(kind: "vhs" | "glitch") {
  if (kind === "vhs") {
    vhsModule ??= import("@/components/canvasui/VHS");
    return vhsModule.then((m) => m.VHS);
  }
  glitchModule ??= import("@/components/canvasui/Glitch");
  return glitchModule.then((m) => m.Glitch);
}

export default function PreviewLink({
  href,
  alt,
  poster,
  className,
  inherit,
  children,
}: {
  href: string;
  alt: string;
  poster?: string;
  className?: string;
  inherit?: boolean;
  children: ReactNode;
}) {
  const [warm, setWarm] = useState(false);
  const [placement, setPlacement] = useState<"above" | "below">("above");
  const [shiftX, setShiftX] = useState(0);
  const [fx, setFx] = useState<Fx | null>(null);
  const [env, setEnv] = useState(1);
  const anchorRef = useRef<HTMLSpanElement>(null);
  const popoverRef = useRef<HTMLSpanElement>(null);
  const fxStartRef = useRef(0);
  const fxSeqRef = useRef(0);
  const anim = useSyncExternalStore(
    subscribePreviewAnim,
    getPreviewAnim,
    getServerPreviewAnim
  );

  const wake = () => {
    setWarm(true);
    const anchor = anchorRef.current;
    if (!anchor) return;
    const rect = anchor.getBoundingClientRect();
    const cardH = popoverRef.current?.offsetHeight || CARD_HEIGHT_FALLBACK;
    setPlacement(rect.top < cardH + 8 ? "below" : "above");
    const maxShift = window.innerWidth - EDGE_MARGIN - CARD_WIDTH - rect.left;
    const minShift = EDGE_MARGIN - rect.left;
    setShiftX(Math.max(minShift, Math.min(0, maxShift)));
    if (
      (anim === "vhs" || anim === "glitch") &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const kind = anim;
      const seq = ++fxSeqRef.current;
      loadFx(kind).then((Comp) => {
        if (fxSeqRef.current !== seq) return;
        fxStartRef.current = performance.now();
        setEnv(1);
        setFx({ kind, Comp, seq } as Fx);
      });
    }
  };

  useEffect(() => {
    if (!fx) return;
    let raf = requestAnimationFrame(function tick(now) {
      const elapsed = now - fxStartRef.current;
      if (elapsed >= FX_TOTAL_MS) {
        setFx(null);
        return;
      }
      const u =
        elapsed <= FX_HOLD_MS
          ? 0
          : (elapsed - FX_HOLD_MS) / (FX_TOTAL_MS - FX_HOLD_MS);
      setEnv(1 - u * u * (3 - 2 * u));
      raf = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [fx]);

  useEffect(() => {
    if (warm) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const onFirstInteraction = () => setWarm(true);
    for (const event of WARM_EVENTS) {
      window.addEventListener(event, onFirstInteraction, { once: true, passive: true });
    }
    return () => {
      for (const event of WARM_EVENTS) {
        window.removeEventListener(event, onFirstInteraction);
      }
    };
  }, [warm]);

  return (
    <span
      ref={anchorRef}
      className="preview-group group/preview relative inline-block"
      onPointerEnter={wake}
      onFocus={wake}
    >
      <ExternalLink href={href} className={className} inherit={inherit}>
        {children}
      </ExternalLink>
      <span
        ref={popoverRef}
        data-anim={anim}
        data-placement={placement}
        style={{ left: shiftX }}
        className={`preview-pop invisible absolute z-20 block w-80 opacity-0 transition-opacity duration-200 group-hover/preview:visible group-hover/preview:opacity-100 ${
          placement === "below" ? "top-full pt-2" : "bottom-full pb-2"
        }`}
      >
        {warm && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block"
            tabIndex={-1}
            aria-hidden
          >
            <span
              className="block"
              style={fx ? { visibility: "hidden" } : undefined}
            >
              <BrowserPreview url={href} poster={poster} alt={alt} zoom={4} />
            </span>
            {fx &&
              (fx.kind === "vhs" ? (
                <fx.Comp
                  {...scaledOptions(BURST.peak, env)}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <BrowserPreview
                    url={href}
                    poster={poster}
                    alt={alt}
                    zoom={4}
                    live={false}
                  />
                </fx.Comp>
              ) : (
                <fx.Comp
                  intensity={1.6 * env}
                  interval={0}
                  shift={36}
                  rgbShift={5}
                  blocks={0.6}
                  noise={0.45}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <BrowserPreview
                    url={href}
                    poster={poster}
                    alt={alt}
                    zoom={4}
                    live={false}
                  />
                </fx.Comp>
              ))}
          </a>
        )}
      </span>
    </span>
  );
}
