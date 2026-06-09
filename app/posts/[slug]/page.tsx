import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "文章不存在",
    };
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function PostDetailPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white px-6 py-8 shadow-sm shadow-stone-200/40 sm:px-10">
      <p className="text-sm text-stone-500">{post.date}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-4 max-w-2xl text-stone-600">{post.summary}</p>
      <div
        className="markdown mt-8"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
