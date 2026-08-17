import type { Metadata } from "next";
import Section from "@/components/Section";
import ExternalLink from "@/components/ExternalLink";
import BrowserPreview from "@/components/BrowserPreview";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Side projects by Jonathan Beaubien — Word Trio, DJ Democracy, and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        Projects
      </h1>

      {projects.map((project) => (
        <Section key={project.name} title={project.name}>
          <p className="leading-relaxed">
            {project.description}{" "}
            {project.url && (
              <ExternalLink href={project.url}>Try it out</ExternalLink>
            )}
          </p>
          {project.preview && project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block transition-transform duration-200 hover:-translate-y-0.5"
            >
              <BrowserPreview
                src={project.preview}
                url={project.url}
                alt={`${project.name} landing page`}
              />
            </a>
          )}
          {project.video && (
            <video
              controls
              muted
              playsInline
              preload="none"
              className="mt-4 w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Section>
      ))}
    </>
  );
}
