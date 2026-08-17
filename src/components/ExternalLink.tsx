import type { ReactNode } from "react";
import { ExternalLinkIcon } from "@/components/icons";

export default function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 text-teal-700 transition-colors hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300 ${className}`}
    >
      {children}
      <ExternalLinkIcon className="h-3 w-3" />
    </a>
  );
}
