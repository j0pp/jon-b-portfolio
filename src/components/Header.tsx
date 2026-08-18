import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/data/content";

export default function Header() {
  return (
    <header className="flex items-center justify-between pt-8 pb-2">
      <div>
        <h1 className="text-lg font-semibold tracking-tight">
          <Link href="/" className="text-zinc-900 dark:text-zinc-100">
            {site.name}
          </Link>
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{site.role}</p>
      </div>
      <ThemeToggle />
    </header>
  );
}
