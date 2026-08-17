import type { Metadata } from "next";
import ResumeCanvas from "@/components/resume/ResumeCanvas";
import { DownloadIcon } from "@/components/icons";
import { resumeCards, site } from "@/data/content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Jonathan Beaubien's resume, reimagined as a set of playful, draggable widgets — plus the traditional PDF.",
};

export default function ResumePage() {
  return (
    <>
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        Resume
      </h1>
      <p className="mt-4 leading-relaxed">
        {resumeCards.disclaimer}{" "}
        <a
          href={site.resumePdf}
          download
          className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
        >
          resume PDF
          <DownloadIcon className="h-3.5 w-3.5" />
        </a>
      </p>
      <p className="mt-2 hidden text-sm text-zinc-500 md:block dark:text-zinc-400">
        Tip: the cards are draggable.
      </p>
      <ResumeCanvas />
    </>
  );
}
