import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { site } from "@/data/content";

const links = [
  { href: site.socials.github, label: "GitHub", Icon: GitHubIcon },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: `mailto:${site.socials.email}`, label: "Email", Icon: MailIcon },
];

export default function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-zinc-200 py-8 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <div className="flex items-center gap-5">
        {links.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            {...(href.startsWith("mailto:")
              ? {}
              : { target: "_blank", rel: "noopener noreferrer" })}
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </footer>
  );
}
