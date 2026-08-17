"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { HeartIcon, RetweetIcon } from "@/components/icons";
import { resumeCards } from "@/data/content";

export default function TwitterCard() {
  const { heading, author, handle, avatar, tweet, retweets, likes } =
    resumeCards.twitter;
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="w-72 rounded-xl border border-sky-500 bg-sky-400 px-4 py-3 text-slate-50 shadow-xl sm:w-80 dark:border-zinc-800 dark:bg-gray-900">
      <h3 className="mb-2 flex items-center gap-1.5 text-sm dark:text-sky-500">
        <span className="text-xl font-bold">#</span>
        <span>{heading}</span>
      </h3>
      <div className="mb-2 flex items-center gap-2">
        <img src={avatar} alt={author} className="h-12 w-12 rounded-full" />
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-sm text-sky-100 dark:text-zinc-400">{handle}</p>
        </div>
      </div>
      <p className="mb-3">{tweet}</p>
      <div className="flex justify-evenly text-sky-800 dark:text-sky-400">
        <div className="flex items-center gap-2">
          <RetweetIcon className="h-4 w-4" />
          <span>{retweets}</span>
        </div>
        <button
          type="button"
          aria-pressed={isLiked}
          onClick={() => setIsLiked((liked) => !liked)}
          className="flex cursor-pointer items-center gap-2"
        >
          <HeartIcon className={`h-4 w-4 ${isLiked ? "text-rose-500" : ""}`} />
          <span>
            {likes}
            {isLiked && " + 1"}
          </span>
        </button>
      </div>
    </div>
  );
}
