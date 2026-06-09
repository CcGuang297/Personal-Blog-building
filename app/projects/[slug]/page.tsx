import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="section-block section-block--first projects-surface">
      <div className="shell project-detail">
        <div className="project-detail__guides" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} className="project-detail__guide" />
          ))}
        </div>

        <header className="project-detail__header">
          <div className="project-detail__corners project-detail__corners--tl" />
          <div className="project-detail__corners project-detail__corners--tr" />

          <div className="project-detail__header-main">
            <div>
              <span className="project-card__meta">项目 ID: {project.id}</span>
              <h1 className="project-detail__title">{project.title}</h1>
              <p className="project-detail__summary">{project.summary}</p>
            </div>

            <div className="project-detail__header-actions">
              <a
                href="https://github.com/CcGuang297"
                target="_blank"
                rel="noreferrer"
                className="project-detail__button"
              >
                查看源码 <span aria-hidden="true">&gt;_</span>
              </a>
              <Link href="/protocol" className="project-detail__button project-detail__button--accent">
                部署协议 <span aria-hidden="true">+</span>
              </Link>
            </div>
          </div>
        </header>

        <div
          className="project-detail__hero"
          style={{ backgroundImage: `url(${project.image})` }}
          role="img"
          aria-label={project.title}
        >
          <div className="project-detail__corners project-detail__corners--tl" />
          <div className="project-detail__corners project-detail__corners--tr" />
          <div className="project-detail__corners project-detail__corners--bl" />
          <div className="project-detail__corners project-detail__corners--br" />

          <div className="project-detail__hero-badges">
            <span className="project-detail__hero-badge project-detail__hero-badge--solid">实时流</span>
            <span className="project-detail__hero-badge">系统负载: 84%</span>
          </div>

          <div className="project-detail__hero-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="project-detail__meta-grid">
          <article className="project-detail__card">
            <div className="project-detail__card-head">
              <h2 className="search-card-title">任务指派</h2>
              <span>ASSIGN</span>
            </div>
            <div className="project-detail__card-body">
              <div>
                <span className="project-detail__mini-label">委托方 / 实体</span>
                <span className="project-detail__mini-value">{project.assignment.owner}</span>
              </div>
              <div>
                <span className="project-detail__mini-label">核心目标</span>
                <p className="project-detail__mini-text">{project.assignment.objective}</p>
              </div>
            </div>
          </article>

          <article className="project-detail__card project-detail__card--wide">
            <div className="project-detail__card-head">
              <h2 className="search-card-title">技术栈 / 参数</h2>
              <span>STACK</span>
            </div>
            <div className="project-detail__card-body">
              <div className="project-detail__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-detail__tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-detail__metrics">
                <div>
                  <span className="project-detail__mini-label">吞吐量</span>
                  <span className="project-detail__mini-value">{project.techMetrics.throughput}</span>
                </div>
                <div>
                  <span className="project-detail__mini-label">运行时间</span>
                  <span className="project-detail__mini-value">{project.techMetrics.uptime}</span>
                </div>
                <div>
                  <span className="project-detail__mini-label">特性</span>
                  <span className="project-detail__mini-value">{project.techMetrics.custom}</span>
                </div>
              </div>
            </div>
          </article>

          <article className="project-detail__card">
            <div className="project-detail__card-head">
              <h2 className="search-card-title">状态日志</h2>
              <span>LOG</span>
            </div>
            <div className="project-detail__log-list">
              {project.logs.map((log) => (
                <div key={log.code} className={`project-detail__log project-detail__log--${log.level}`}>
                  <span className="project-detail__log-prefix">{log.level === "error" ? ">>" : ">"}</span>
                  <div>
                    <span className="project-detail__mini-value">{log.code}</span>
                    <p className="project-detail__mini-text">{log.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="project-detail__content-grid">
          <div className="project-detail__main">
            <section className="project-detail__section">
              <div className="project-detail__section-head">
                <span className="project-detail__section-index">01</span>
                <h2 className="project-detail__section-title">任务简报</h2>
              </div>
              {project.overview.map((paragraph) => (
                <p key={paragraph} className="project-detail__paragraph">
                  {paragraph}
                </p>
              ))}
            </section>

            <section className="project-detail__section">
              <div className="project-detail__section-head">
                <span className="project-detail__section-index">02</span>
                <h2 className="project-detail__section-title">技术执行</h2>
              </div>

              <div className="project-detail__codebox">
                <div className="project-detail__codebox-label">Rust 核心</div>
                <pre className="project-detail__code">
                  <code>{project.implementation.code}</code>
                </pre>
              </div>

              <p className="project-detail__paragraph">{project.implementation.description}</p>
            </section>
          </div>

          <aside className="project-detail__aside">
            <div className="project-detail__architecture">
              <div className="project-detail__corners project-detail__corners--tl" />
              <div className="project-detail__corners project-detail__corners--tr" />
              <div className="project-detail__corners project-detail__corners--bl" />
              <div className="project-detail__corners project-detail__corners--br" />

              <h2 className="search-card-title">架构示意图</h2>
              <div className="project-detail__diagram">
                {project.architecture.map((step, index) => (
                  <div key={step} className="project-detail__diagram-step">
                    <div
                      className={`project-detail__diagram-box ${
                        index === 1 ? "project-detail__diagram-box--accent" : ""
                      }`}
                    >
                      {step}
                    </div>
                    {index < project.architecture.length - 1 ? (
                      <>
                        <span className="project-detail__diagram-arrow">|</span>
                        <span className="project-detail__diagram-arrow">v</span>
                      </>
                    ) : null}
                  </div>
                ))}
              </div>

              <Link href="/projects" className="project-detail__download">
                返回项目列表
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
