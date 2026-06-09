import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "关于 CcGuang。",
};

const sections = [
  {
    title: "个人介绍",
    content:
      "我是 CcGuang。这个博客不是展示模板，而是一张长期公开的工作台。这里会留下我在前端开发、AI Agent 和项目推进中的想法、实验与复盘。",
  },
  {
    title: "学习方向",
    content:
      "我正在持续学习更稳定的工程习惯、信息结构设计、页面视觉判断，以及如何把想法真正做成可运行、可维护、可继续迭代的产品。",
  },
  {
    title: "项目状态",
    content:
      "当前博客仍然处在逐步打磨阶段。我希望它先保持轻量和清楚，再慢慢补上项目展示、文章体系和更完整的发布流程。",
  },
];

export default function AboutPage() {
  return (
    <section className="section-block section-block--first">
      <div className="shell">
        <div className="section-heading section-heading--stack">
          <p className="micro-chip">About</p>
          <h1 className="section-title section-title--page">Working Notes</h1>
          <p className="section-description">
            这一页不放头像，也不做额外装饰，只保留最核心的个人介绍、学习方向和项目状态。
          </p>
        </div>

        <div className="about-grid">
          {sections.map((section, index) => (
            <article key={section.title} className="about-card">
              <p className="project-card__meta">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="about-card__title">{section.title}</h2>
              <p className="about-card__body">{section.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
