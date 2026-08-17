import ExternalLink from "@/components/ExternalLink";
import BrowserPreview from "@/components/BrowserPreview";
import type { ReactNode } from "react";

/**
 * An external link that shows a live browser preview of its target in a
 * small popup while the link itself is hovered.
 */
export default function PreviewLink({
  href,
  alt,
  poster,
  className,
  children,
}: {
  href: string;
  alt: string;
  poster?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span className="group/preview relative inline-block">
      <ExternalLink href={href} className={className}>
        {children}
      </ExternalLink>
      {/* pb-2 (not margin) keeps the hover area contiguous, so the card
          stays open while the cursor moves from the link onto it. */}
      <span className="invisible absolute bottom-full left-0 z-20 block w-80 pb-2 opacity-0 transition-opacity duration-200 group-hover/preview:visible group-hover/preview:opacity-100">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          tabIndex={-1}
          aria-hidden
        >
          <BrowserPreview url={href} poster={poster} alt={alt} zoom={4} />
        </a>
      </span>
    </span>
  );
}
