import Section from "@/components/Section";
import ExternalLink from "@/components/ExternalLink";
import CardCollage from "@/components/resume/CardCollage";
import CompanyLogo from "@/components/CompanyLogo";
import PreviewLink from "@/components/PreviewLink";
import { DownloadIcon, RiffIcon, TrioIcon } from "@/components/icons";
import { bio, education, experience, projects, site, skills } from "@/data/content";

const projectIcons = {
  riff: RiffIcon,
  trio: TrioIcon,
};

function PersonJsonLd() {
  const [locality, region] = site.location.split(", ");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.description,
    url: site.url,
    image: new URL("/images/headshot.png", site.url).toString(),
    email: `mailto:${site.socials.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: locality,
      addressRegion: region,
    },
    worksFor: {
      "@type": "Organization",
      name: experience[0].company,
      url: experience[0].url,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.school,
    },
    knowsAbout: skills.flatMap((skill) => skill.items),
    sameAs: [site.socials.github, site.socials.linkedin],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <PersonJsonLd />

      <section>
        <p className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {bio.greeting}
        </p>
        {bio.paragraphs.map((paragraph, i) => (
          <p key={i} className="mt-4 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </section>

      <CardCollage />

      <Section title="Experience">
        <div className="flex flex-col gap-14">
          {experience.map((job) => (
            <div key={job.company} className="flex gap-4">
              {job.logo && <CompanyLogo logo={job.logo} />}
              <div className="flex-1">
                <h3 className="flex items-center text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {job.url ? (
                    <PreviewLink href={job.url} alt={`${job.company} website`} inherit>
                      {job.company}
                    </PreviewLink>
                  ) : (
                    job.company
                  )}
                </h3>
                {job.blurb && (
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {job.blurb}
                  </p>
                )}
                <div className="mt-6 flex flex-col gap-4">
                  {job.roles.map((role) => (
                    <div
                      key={role.title}
                      className="flex flex-wrap items-baseline justify-between gap-x-4"
                    >
                      <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
                        {role.title}
                      </h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {role.start} – {role.end}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {education.school}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {education.graduated}
          </p>
        </div>
        <p className="mt-1 font-medium text-zinc-900 dark:text-zinc-100">
          {education.degree}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {education.detail}{" "}
          <ExternalLink href={education.portfolioUrl}>
            Applied math portfolio
          </ExternalLink>
          .
        </p>
      </Section>

      <Section title="Skills">
        <dl className="flex flex-col gap-3 text-sm">
          {skills.map(({ group, items }) => (
            <div key={group} className="sm:flex sm:gap-4">
              <dt className="shrink-0 font-medium text-zinc-900 sm:w-44 dark:text-zinc-100">
                {group}
              </dt>
              <dd className="leading-relaxed">{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Projects">
        <div className="flex flex-col gap-8">
          {projects.map((project) => {
            const Icon = projectIcons[project.icon];
            return (
              <div key={project.name} className="flex gap-4">
                <Icon className="h-10 w-10 shrink-0 text-zinc-900 dark:text-zinc-100" />
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                    {project.url ? (
                      <PreviewLink
                        href={project.url}
                        poster={project.preview}
                        alt={`${project.name} landing page`}
                        inherit
                      >
                        {project.name}
                      </PreviewLink>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section title="Resume">
        <p className="leading-relaxed">
          Want the traditional version? Grab the{" "}
          <a
            href={site.resumePdf}
            download
            className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
          >
            PDF
            <DownloadIcon className="h-3.5 w-3.5" />
          </a>
          .
        </p>
      </Section>
    </>
  );
}
