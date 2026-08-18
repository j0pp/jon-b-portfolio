"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import ExternalLink from "@/components/ExternalLink";
import BrowserPreview from "@/components/BrowserPreview";
import {
  getPreviewAnim,
  getServerPreviewAnim,
  subscribePreviewAnim,
} from "@/components/previewAnimStore";
import type { ReactNode } from "react";

const WARM_EVENTS = ["pointermove", "pointerdown", "scroll", "keydown", "touchstart"] as const;

const CARD_WIDTH = 320;
const CARD_HEIGHT_FALLBACK = 244;
const EDGE_MARGIN = 16;

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
  const anchorRef = useRef<HTMLSpanElement>(null);
  const popoverRef = useRef<HTMLSpanElement>(null);
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
  };

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
            className="block"
            tabIndex={-1}
            aria-hidden
          >
            <BrowserPreview url={href} poster={poster} alt={alt} zoom={4} />
          </a>
        )}
      </span>
    </span>
  );
}
