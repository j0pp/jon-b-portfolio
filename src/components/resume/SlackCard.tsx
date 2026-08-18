/* eslint-disable @next/next/no-img-element */
import { resumeCards } from "@/data/content";

export default function SlackCard() {
  const { channel, messages } = resumeCards.slack;
  const unread = messages.length;
  return (
    <div className="w-80 rounded-xl border border-zinc-200 bg-stone-50 text-zinc-900 shadow-xl sm:w-96 dark:border-zinc-800 dark:bg-black dark:text-zinc-100">
      <div className="flex h-9 items-center rounded-t-xl bg-zinc-200 px-2 dark:bg-zinc-900">
        <img
          src="/images/Slack_Mark.svg"
          alt="Slack logo"
          width={28}
          height={28}
          loading="lazy"
          decoding="async"
          className="h-7 w-7"
        />
        <span className="ml-2 grow text-sm font-bold">{channel}</span>
        <span className="flex h-4 w-6 items-center justify-center rounded-full bg-rose-700 text-xs text-stone-50">
          {unread}
        </span>
      </div>
      <div className="divide-y divide-zinc-200 px-3 py-1 dark:divide-zinc-800">
        {messages.map((message) => (
          <div key={message.text} className="flex items-center gap-2 py-2">
            <img
              src={message.avatar}
              alt={message.author}
              width={36}
              height={36}
              loading="lazy"
              decoding="async"
              className="h-9 w-9 rounded-full"
            />
            <div>
              <p className="text-sm font-bold">{message.text}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {message.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
