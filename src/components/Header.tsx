import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/data/content";

export default function Header() {
  return (
    <header className="flex items-center justify-between pt-8 pb-2">
      <div>
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          {site.name}
        </Link>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{site.role}</p>
      </div>
      <ThemeToggle />
    </header>
  );
}
