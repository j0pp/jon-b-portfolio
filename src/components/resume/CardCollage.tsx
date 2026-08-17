import NytCard from "@/components/resume/NytCard";
import SlackCard from "@/components/resume/SlackCard";
import TwitterCard from "@/components/resume/TwitterCard";
import { resumeCards } from "@/data/content";

/** Static staggered collage of the fake-brand resume cards. */
export default function CardCollage() {
  return (
    <section className="mt-12">
      <div className="flex flex-col items-center gap-6 sm:block">
        <div className="sm:w-fit sm:-rotate-2">
          <NytCard />
        </div>
        <div className="relative z-10 sm:-mt-10 sm:ml-auto sm:w-fit sm:rotate-1">
          <SlackCard />
        </div>
        <div className="sm:-mt-8 sm:ml-16 sm:w-fit sm:-rotate-1">
          <TwitterCard />
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-zinc-400 dark:text-zinc-500">
        {resumeCards.disclaimer}
      </p>
    </section>
  );
}
