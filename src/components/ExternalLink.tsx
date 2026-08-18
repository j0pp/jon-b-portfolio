import type { ReactNode } from "react";
import { ExternalLinkIcon } from "@/components/icons";

export default function ExternalLink({
  href,
  children,
  className = "",
  inherit = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  inherit?: boolean;
}) {
  const colors = inherit
    ? "hover:text-teal-700 dark:hover:text-teal-400"
    : "text-teal-700 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 transition-colors ${colors} ${className}`}
    >
      {children}
      <ExternalLinkIcon className="h-3 w-3" />
    </a>
  );
}
