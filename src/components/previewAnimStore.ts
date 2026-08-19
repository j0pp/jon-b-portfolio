export const PREVIEW_ANIMS = ["lift", "scale", "vhs", "glitch", "blur", "tilt"] as const;
export type PreviewAnim = (typeof PREVIEW_ANIMS)[number];

let current: PreviewAnim = "lift";
const listeners = new Set<() => void>();

export function getPreviewAnim() {
  return current;
}

export function getServerPreviewAnim(): PreviewAnim {
  return "lift";
}

export function setPreviewAnim(anim: PreviewAnim) {
  current = anim;
  for (const listener of listeners) listener();
}

export function subscribePreviewAnim(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
