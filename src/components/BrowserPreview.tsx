/* eslint-disable @next/next/no-img-element */

/** A screenshot framed in minimal browser chrome, like a tab-hover preview. */
export default function BrowserPreview({
  src,
  url,
  alt,
}: {
  src: string;
  url: string;
  alt: string;
}) {
  const host = new URL(url).host;
  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-xl dark:border-zinc-700 dark:bg-zinc-900">
      <div className="flex items-center gap-1.5 border-b border-zinc-200 bg-zinc-100 px-3 py-1.5 dark:border-zinc-700 dark:bg-zinc-800">
        <span className="h-2 w-2 rounded-full bg-rose-400" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="ml-2 truncate rounded bg-white px-2 py-0.5 text-[10px] text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
          {host}
        </span>
      </div>
      <img src={src} alt={alt} className="w-full" />
    </div>
  );
}
