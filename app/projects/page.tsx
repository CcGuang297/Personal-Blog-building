import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "项目列表页。",
};

const specs = [
  {
    title: "Tech Stack Hierarchy",
    description:
      "Built with a commitment to semantic HTML, strict TypeScript, and modular CSS architectures.",
  },
  {
    title: "Grid Philosophy",
    description:
      "Every element is aligned to a rigorous 4px baseline grid to ensure mathematical visual harmony.",
  },
  {
    title: "Open Source",
    description:
      "Documentation and source code for all public projects are available on the GitHub repository.",
  },
];

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="section-block section-block--first projects-surface">
      <div className="shell">
        <div className="projects-hero">
          <div className="projects-hero__bar" />
          <div className="projects-hero__content">
            <p className="project-card__meta">Directory // Selected_Works</p>
            <h1 className="section-title section-title--page">Projects</h1>
            <p className="section-description">
              An archival repository of technical implementations, structural explorations, and computational design systems. Focus on performance, high-density data, and scientific minimalism.
            </p>
          </div>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article key={project.slug} className="project-row">
              <div className="project-row__grid">
                <div className="project-row__index">{project.index}</div>

                <div className="project-row__copy">
                  <div className="project-row__tags">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="project-row__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="project-row__title">{project.title}</h2>
                  <p className="project-row__description">{project.description}</p>
                </div>

                <div
                  className="project-row__image"
                  style={{ backgroundImage: `url(${project.image})` }}
                  role="img"
                  aria-label={project.title}
                />

                <div className="project-row__status">
                  <span className="project-row__status-text">STATUS: {project.status}</span>
                  <Link href={`/projects/${project.slug}`} className="project-row__action">
                    <span>VIEW PROJECT</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="project-specs">
          {specs.map((spec) => (
            <article key={spec.title} className="project-spec">
              <div className="project-spec__bar" />
              <h2 className="search-card-title">{spec.title}</h2>
              <p className="project-spec__desc">{spec.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
