import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "文章列表",
  description: "Browse all blog posts.",
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
          Posts
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          文章列表
        </h1>
        <p className="max-w-2xl text-stone-600">
          所有文章都来自 <code>content/posts</code> 目录中的 Markdown 文件。
        </p>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm shadow-stone-200/40"
          >
            <p className="text-sm text-stone-500">{post.date}</p>
            <h2 className="mt-2 text-2xl font-semibold text-stone-900">
              <Link href={`/posts/${post.slug}`} className="hover:text-stone-700">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-stone-600">{post.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
