"use client";

import { useState } from "react";
import ExternalLink from "@/components/ExternalLink";
import BrowserPreview from "@/components/BrowserPreview";
import type { ReactNode } from "react";

export default function PreviewLink({
  href,
  alt,
  poster,
  className,
  inherit,
  children,
}: {
  href: string;
  alt: string;
  poster?: string;
  className?: string;
  inherit?: boolean;
  children: ReactNode;
}) {
  const [warm, setWarm] = useState(false);
  const wake = () => setWarm(true);
  return (
    <span
      className="group/preview relative inline-block"
      onPointerEnter={wake}
      onFocus={wake}
    >
      <ExternalLink href={href} className={className} inherit={inherit}>
        {children}
      </ExternalLink>
      <span className="invisible absolute bottom-full left-0 z-20 block w-80 pb-2 opacity-0 transition-opacity duration-200 group-hover/preview:visible group-hover/preview:opacity-100">
        {warm && (
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
        )}
      </span>
    </span>
  );
}
