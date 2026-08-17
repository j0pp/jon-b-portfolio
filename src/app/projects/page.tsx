import type { Metadata } from "next";
import Section from "@/components/Section";
import ExternalLink from "@/components/ExternalLink";
import PreviewLink from "@/components/PreviewLink";
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
            {project.url && project.livePreview ? (
              <PreviewLink
                href={project.url}
                poster={project.preview}
                alt={`${project.name} landing page`}
              >
                Try it out
              </PreviewLink>
            ) : project.url ? (
              <ExternalLink href={project.url}>Try it out</ExternalLink>
            ) : null}
          </p>
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
