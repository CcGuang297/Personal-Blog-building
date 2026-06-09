import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type PostFrontmatter = {
  title: string;
  date: string;
  summary: string;
  tags?: string[];
};

export type PostSummary = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

export type PostDetail = PostSummary & {
  contentHtml: string;
};

const postsDirectory = path.join(process.cwd(), "content", "posts");

function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"));
}

function parseFrontmatter(slug: string, fileContents: string) {
  const { data, content } = matter(fileContents);
  const frontmatter = data as Partial<PostFrontmatter>;

  if (!frontmatter.title || !frontmatter.date || !frontmatter.summary) {
    throw new Error(`Post "${slug}" is missing required frontmatter fields.`);
  }

  return {
    frontmatter: {
      title: frontmatter.title,
      date: frontmatter.date,
      summary: frontmatter.summary,
      tags:
        frontmatter.tags && frontmatter.tags.length > 0
          ? frontmatter.tags
          : ["Journal"],
    },
    content,
  };
}

export function getAllPosts(): PostSummary[] {
  return getPostSlugs()
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { frontmatter } = parseFrontmatter(slug, fileContents);

      return {
        slug,
        ...frontmatter,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): PostDetail | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { frontmatter, content } = parseFrontmatter(slug, fileContents);
  const processedContent = remark().use(html).processSync(content);

  return {
    slug,
    ...frontmatter,
    contentHtml: processedContent.toString(),
  };
}
