import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "CcGuang 的文章列表。",
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "2-digit",
  year: "numeric",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="section-block section-block--first">
      <div className="shell">
        <div className="section-heading section-heading--stack">
          <p className="micro-chip">Writing Archive</p>
          <h1 className="section-title section-title--page">Latest Writing</h1>
          <p className="section-description">
            这里收录我关于 AI Agent、前端开发、项目实践和学习过程的记录。页面保持内容优先，只用最少的视觉语言辅助阅读。
          </p>
        </div>

        <div className="writing-list">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="writing-item">
              <div className="writing-item__copy">
                <p className="writing-item__date">{dateFormatter.format(new Date(post.date))}</p>
                <h2 className="writing-item__title">{post.title}</h2>
                <p className="writing-item__summary">{post.summary}</p>
              </div>
              <div className="writing-item__cta">
                <span>Read Full Article</span>
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
