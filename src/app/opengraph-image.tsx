import { ImageResponse } from "next/og";
import { site } from "@/data/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.title;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          backgroundColor: "#09090b",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            width: 72,
            height: 8,
            borderRadius: 4,
            backgroundColor: "#2dd4bf",
            marginBottom: 40,
          }}
        />
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: "-0.02em" }}>
          {site.name}
        </div>
        <div style={{ fontSize: 40, color: "#a1a1aa", marginTop: 16 }}>
          {site.role}
        </div>
        <div style={{ fontSize: 28, color: "#2dd4bf", marginTop: 48 }}>
          jonbeaubien.dev
        </div>
      </div>
    ),
    size
  );
}
