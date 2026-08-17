"use client";

import { useCallback, useRef, useState } from "react";
import type { PointerEvent, RefObject } from "react";

type Point = { x: number; y: number };

/**
 * Makes an element draggable within the bounds of a container.
 * Position is relative to the container's top-left corner and is applied
 * by the consumer via `transform: translate(...)`.
 */
export function useDraggable(
  initial: Point,
  boundsRef: RefObject<HTMLElement | null>
) {
  const elRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initial);
  const [dragging, setDragging] = useState(false);
  const grabOffset = useRef<Point>({ x: 0, y: 0 });

  const onPointerDown = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      grabOffset.current = { x: e.clientX - position.x, y: e.clientY - position.y };
      setDragging(true);
    },
    [position]
  );

  const onPointerMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
      let x = e.clientX - grabOffset.current.x;
      let y = e.clientY - grabOffset.current.y;
      const bounds = boundsRef.current;
      const el = elRef.current;
      if (bounds && el) {
        x = Math.min(Math.max(0, x), Math.max(0, bounds.clientWidth - el.offsetWidth));
        y = Math.min(Math.max(0, y), Math.max(0, bounds.clientHeight - el.offsetHeight));
      }
      setPosition({ x, y });
    },
    [boundsRef]
  );

  const onPointerUp = useCallback((e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    setDragging(false);
  }, []);

  return {
    elRef,
    position,
    dragging,
    handlers: { onPointerDown, onPointerMove, onPointerUp },
  };
}
