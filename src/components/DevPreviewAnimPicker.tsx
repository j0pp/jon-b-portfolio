"use client";

import { useSyncExternalStore } from "react";
import {
  PREVIEW_ANIMS,
  getPreviewAnim,
  getServerPreviewAnim,
  setPreviewAnim,
  subscribePreviewAnim,
} from "@/components/previewAnimStore";
import type { CSSProperties } from "react";

const panelStyle: CSSProperties = {
  position: "fixed",
  bottom: 16,
  left: 16,
  zIndex: 60,
  display: "flex",
  gap: 6,
  padding: 12,
  borderRadius: 8,
  background: "rgba(10, 10, 12, 0.92)",
  color: "#e4e4e7",
  fontFamily: "ui-monospace, monospace",
  fontSize: 11,
  lineHeight: 1.4,
};

const buttonStyle: CSSProperties = {
  padding: "3px 8px",
  borderRadius: 4,
  border: "1px solid #52525b",
  background: "#27272a",
  color: "#e4e4e7",
  cursor: "pointer",
  fontSize: 11,
};

export default function DevPreviewAnimPicker() {
  const anim = useSyncExternalStore(
    subscribePreviewAnim,
    getPreviewAnim,
    getServerPreviewAnim
  );

  return (
    <div style={panelStyle}>
      {PREVIEW_ANIMS.map((variant) => (
        <button
          key={variant}
          type="button"
          style={{
            ...buttonStyle,
            background: variant === anim ? "#0d9488" : "#27272a",
          }}
          onClick={() => setPreviewAnim(variant)}
        >
          {variant}
        </button>
      ))}
    </div>
  );
}
