import { NytIcon } from "@/components/icons";
import { resumeCards } from "@/data/content";

export default function NytCard() {
  const { masthead, kicker, headline, body } = resumeCards.nyt;
  return (
    <div className="w-80 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 shadow-xl sm:w-96 dark:border-zinc-800 dark:bg-black dark:text-zinc-100">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-nyt text-lg">{masthead}</p>
        <NytIcon className="h-6 w-5" />
      </div>
      <p className="text-sm font-bold text-rose-600">{kicker}</p>
      <p className="font-nyt text-base leading-snug">{headline}</p>
      <hr className="my-2 border-zinc-200 dark:border-zinc-800" />
      <p className="font-serif text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {body}
      </p>
    </div>
  );
}
