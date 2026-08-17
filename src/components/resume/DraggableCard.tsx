"use client";

import type { ReactNode, RefObject } from "react";
import { useDraggable } from "@/hooks/useDraggable";

export default function DraggableCard({
  initial,
  boundsRef,
  children,
}: {
  initial: { x: number; y: number };
  boundsRef: RefObject<HTMLElement | null>;
  children: ReactNode;
}) {
  const { elRef, position, dragging, handlers } = useDraggable(initial, boundsRef);

  return (
    <div
      ref={elRef}
      {...handlers}
      className={`absolute top-0 left-0 touch-none select-none ${
        dragging ? "z-10 cursor-grabbing" : "cursor-grab"
      }`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {children}
    </div>
  );
}
