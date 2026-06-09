import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "2-digit",
  year: "numeric",
});

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section-block section-block--first">
      <div className="shell">
        <header className="post-hero">
          <p className="writing-item__date">{dateFormatter.format(new Date(post.date))}</p>
          <h1 className="section-title section-title--post">{post.title}</h1>
          <p className="section-description section-description--post">{post.summary}</p>
          <div className="tag-row">
            {post.tags.map((tag) => (
              <span key={tag} className="micro-chip">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="post-body">
          <div className="markdown" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </div>
      </div>
    </article>
  );
}
