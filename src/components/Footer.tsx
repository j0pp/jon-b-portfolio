import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-zinc-200 py-8 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <div className="flex items-center gap-5">
        <a
          href={site.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          <GitHubIcon className="h-5 w-5" />
        </a>
        <a
          href={site.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          <LinkedInIcon className="h-5 w-5" />
        </a>
        <a
          href={`mailto:${site.socials.email}`}
          aria-label="Email"
          className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          <MailIcon className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}
