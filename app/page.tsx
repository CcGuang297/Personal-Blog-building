import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { getAllProjects } from "@/lib/projects";

const featuredProjects = getAllProjects().slice(0, 2).map((project) => ({
  slug: project.slug,
  title: project.title,
  description: project.description,
  meta: project.tags.slice(0, 2).join(" / "),
  image: project.image,
}));

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "2-digit",
  year: "numeric",
});

const latestPosts = getAllPosts().slice(0, 3);

export default function Home() {
  return (
    <>
      <section className="shell hero-section">
        <div className="hero-copy">
          <div className="hero-tags">
            <span className="micro-chip">Personal Blog</span>
            <span className="micro-chip micro-chip--muted">Project Journal</span>
          </div>

          <h1 className="hero-title">
            collecting,
            <br />
            creating,
            <br />
            growing.
          </h1>

          <p className="hero-description">
            我在这里记录 AI Agent、前端开发、项目实践和学习过程，也把思考与复盘认真留下来。
          </p>

          <div className="hero-actions">
            <Link href="/blog" className="primary-button">
              查看文章
            </Link>
            <Link href="/about" className="secondary-button">
              关于我 <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="projects" className="section-block">
        <div className="shell">
          <div className="section-heading">
            <h2 className="section-title">Featured Projects</h2>
            <Link href="/projects" className="section-link">
              View All
            </Link>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article key={project.title} className="project-card">
                <div
                  className="project-card__image-wrap project-card__image"
                  role="img"
                  aria-label={project.title}
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="project-card__content">
                  <p className="project-card__meta">{project.meta}</p>
                  <h3 className="project-card__title">
                    <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <p className="project-card__description">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <div className="section-heading">
            <h2 className="section-title">Latest Writing</h2>
            <Link href="/blog" className="section-link">
              All Posts
            </Link>
          </div>

          <div className="writing-list">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="writing-item">
                <div className="writing-item__copy">
                  <p className="writing-item__date">{dateFormatter.format(new Date(post.date))}</p>
                  <h3 className="writing-item__title">{post.title}</h3>
                </div>
                <div className="writing-item__cta">
                  <span>Read Full Article</span>
                  <span aria-hidden="true">-&gt;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
