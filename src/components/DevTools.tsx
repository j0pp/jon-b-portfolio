"use client";

import dynamic from "next/dynamic";

const isDev = process.env.NODE_ENV === "development";

const DevPreviewAnimPicker = isDev
  ? dynamic(() => import("@/components/DevPreviewAnimPicker"), { ssr: false })
  : null;

export default function DevTools() {
  if (!DevPreviewAnimPicker) return null;
  return <DevPreviewAnimPicker />;
}
