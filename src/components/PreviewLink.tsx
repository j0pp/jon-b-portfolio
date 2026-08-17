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
      <span className="pointer-events-none invisible absolute bottom-full left-0 z-20 mb-2 block w-80 opacity-0 transition-opacity duration-200 group-hover/preview:visible group-hover/preview:opacity-100">
        <BrowserPreview url={href} poster={poster} alt={alt} zoom={4} />
      </span>
    </span>
  );
}
