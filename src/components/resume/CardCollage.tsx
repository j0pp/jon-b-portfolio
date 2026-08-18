import NytCard from "@/components/resume/NytCard";
import SlackCard from "@/components/resume/SlackCard";
import TwitterCard from "@/components/resume/TwitterCard";

export default function CardCollage() {
  return (
    <section className="mt-16">
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
    </section>
  );
}
