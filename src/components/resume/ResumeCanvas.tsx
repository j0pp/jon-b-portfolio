"use client";

import { useRef } from "react";
import DraggableCard from "@/components/resume/DraggableCard";
import NytCard from "@/components/resume/NytCard";
import SlackCard from "@/components/resume/SlackCard";
import TwitterCard from "@/components/resume/TwitterCard";

export default function ResumeCanvas() {
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Small screens: static stack — dragging fights with touch scrolling. */}
      <div className="mt-8 flex flex-col items-center gap-6 md:hidden">
        <NytCard />
        <SlackCard />
        <TwitterCard />
      </div>

      {/* md and up: free-floating draggable cards. */}
      <div
        ref={canvasRef}
        className="relative mt-8 hidden h-[52rem] overflow-hidden rounded-xl border border-dashed border-zinc-300 md:block dark:border-zinc-700"
      >
        <DraggableCard initial={{ x: 24, y: 24 }} boundsRef={canvasRef}>
          <NytCard />
        </DraggableCard>
        <DraggableCard initial={{ x: 180, y: 320 }} boundsRef={canvasRef}>
          <SlackCard />
        </DraggableCard>
        <DraggableCard initial={{ x: 64, y: 620 }} boundsRef={canvasRef}>
          <TwitterCard />
        </DraggableCard>
      </div>
    </>
  );
}
