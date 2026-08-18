/* eslint-disable @next/next/no-img-element */

/**
 * A live, miniaturized embed of the target site framed in minimal browser
 * chrome, like a tab-hover preview. The real page renders in an iframe
 * sized to `zoom`× the container and scaled back down by 1/`zoom`, so the
 * preview is always current — no screenshots to maintain. An optional
 * poster image shows underneath while the iframe loads.
 *
 * Pick `zoom` so container-width × zoom ≈ 1280 (a desktop viewport).
 */
export default function BrowserPreview({
  url,
  alt,
  poster,
  zoom = 2,
}: {
  url: string;
  alt: string;
  poster?: string;
  zoom?: number;
}) {
  // Strip Netlify deploy-permalink hashes (e.g. "636876cd...--site.netlify.app").
  const host = new URL(url).host.replace(/^[0-9a-f]{24}--/, "");
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
      <div className="relative w-full overflow-hidden bg-zinc-50 aspect-[16/10] dark:bg-zinc-800">
        {poster && (
          <img
            src={poster}
            alt={alt}
            width={1280}
            height={800}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <iframe
          src={url}
          title={alt}
          loading="lazy"
          tabIndex={-1}
          aria-hidden
          scrolling="no"
          className="pointer-events-none absolute top-0 left-0 origin-top-left select-none border-0"
          style={{
            width: `${zoom * 100}%`,
            height: `${zoom * 100}%`,
            transform: `scale(${1 / zoom})`,
          }}
        />
      </div>
    </div>
  );
}
