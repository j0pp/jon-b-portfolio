"use client";

import type { CSSProperties } from "react";
import type { BurstConfig } from "@/components/VhsBurst";

type PeakKey = keyof BurstConfig["peak"];
type TimingKey = "holdMs" | "durationMs";

const TIMING_SLIDERS: [TimingKey, number, number, number][] = [
  ["holdMs", 0, 3000, 50],
  ["durationMs", 200, 5000, 50],
];

const PEAK_SLIDERS: [PeakKey, number, number, number][] = [
  ["speed", 0, 3, 0.05],
  ["wave", 0, 5, 0.05],
  ["jitter", 0, 5, 0.05],
  ["crease", 0, 5, 0.05],
  ["switching", 0, 5, 0.05],
  ["switchingHeight", 0, 0.3, 0.005],
  ["bloom", 0, 1, 0.01],
  ["aberration", 0, 16, 0.5],
  ["acBeat", 0, 5, 0.05],
  ["grain", 0, 1, 0.01],
  ["scanlines", 0, 1, 0.01],
  ["vignette", 0, 1, 0.01],
  ["barrel", 0, 1, 0.01],
  ["saturation", 0, 2, 0.01],
  ["exposure", 0, 2, 0.01],
];

const panelStyle: CSSProperties = {
  position: "fixed",
  bottom: 16,
  right: 16,
  zIndex: 60,
  width: 250,
  maxHeight: "80vh",
  overflowY: "auto",
  padding: 12,
  borderRadius: 8,
  background: "rgba(10, 10, 12, 0.92)",
  color: "#e4e4e7",
  fontFamily: "ui-monospace, monospace",
  fontSize: 11,
  lineHeight: 1.4,
};

const rowStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  marginTop: 4,
};

const labelStyle: CSSProperties = {
  width: 92,
  flexShrink: 0,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const valueStyle: CSSProperties = {
  width: 38,
  flexShrink: 0,
  textAlign: "right",
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

type Props = {
  cfg: BurstConfig;
  pinned: boolean;
  onChange: (cfg: BurstConfig) => void;
  onBurst: () => void;
  onPinToggle: (pinned: boolean) => void;
  onReset: () => void;
};

export default function VhsDevControls({
  cfg,
  pinned,
  onChange,
  onBurst,
  onPinToggle,
  onReset,
}: Props) {
  return (
    <div style={panelStyle}>
      <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
        <button type="button" style={buttonStyle} onClick={onBurst}>
          Burst
        </button>
        <button
          type="button"
          style={{
            ...buttonStyle,
            background: pinned ? "#0d9488" : "#27272a",
          }}
          onClick={() => onPinToggle(!pinned)}
        >
          {pinned ? "Unpin" : "Pin"}
        </button>
        <button type="button" style={buttonStyle} onClick={onReset}>
          Reset
        </button>
        <button
          type="button"
          style={buttonStyle}
          onClick={() => console.log(JSON.stringify(cfg, null, 2))}
        >
          Log
        </button>
      </div>
      {TIMING_SLIDERS.map(([key, min, max, step]) => (
        <div key={key} style={rowStyle}>
          <span style={labelStyle}>{key}</span>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={cfg[key]}
            style={{ flex: 1, minWidth: 0 }}
            onChange={(e) =>
              onChange({ ...cfg, [key]: Number(e.target.value) })
            }
          />
          <span style={valueStyle}>{cfg[key]}</span>
        </div>
      ))}
      {PEAK_SLIDERS.map(([key, min, max, step]) => (
        <div key={key} style={rowStyle}>
          <span style={labelStyle}>{key}</span>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={cfg.peak[key]}
            style={{ flex: 1, minWidth: 0 }}
            onChange={(e) =>
              onChange({
                ...cfg,
                peak: { ...cfg.peak, [key]: Number(e.target.value) },
              })
            }
          />
          <span style={valueStyle}>{cfg.peak[key]}</span>
        </div>
      ))}
    </div>
  );
}
