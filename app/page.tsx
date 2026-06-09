import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const featuredPosts = getAllPosts().slice(0, 3);

export default function Home() {
  return (
    <section className="space-y-10">
      <div className="space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
          Personal Blog
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          用一个简单、清爽的静态博客，开始记录你的想法和成长。
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-stone-600">
          这是一个基于 Next.js、TypeScript 和 Tailwind CSS 的入门骨架，支持
          Markdown 文章和 GitHub Pages 静态部署。
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            className="rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
            href="/posts"
          >
            查看文章
          </Link>
          <Link
            className="rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
            href="/about"
          >
            关于我
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
          <p className="text-sm text-stone-500">技术栈</p>
          <p className="mt-2 text-xl font-semibold text-stone-900">Next.js App Router</p>
        </div>
        <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
          <p className="text-sm text-stone-500">内容来源</p>
          <p className="mt-2 text-xl font-semibold text-stone-900">content/posts/*.md</p>
        </div>
        <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
          <p className="text-sm text-stone-500">部署方式</p>
          <p className="mt-2 text-xl font-semibold text-stone-900">GitHub Pages 静态导出</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-stone-900">最新文章</h2>
            <p className="mt-1 text-stone-600">先放两篇示例文章，后面你可以继续往里面加。</p>
          </div>
          <Link className="text-sm font-medium text-stone-700 hover:text-stone-900" href="/posts">
            查看全部
          </Link>
        </div>

        <div className="grid gap-4">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm shadow-stone-200/40"
            >
              <p className="text-sm text-stone-500">{post.date}</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                <Link href={`/posts/${post.slug}`} className="hover:text-stone-700">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 text-stone-600">{post.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
