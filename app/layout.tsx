import type { Metadata } from "next";
import Link from "next/link";
import { Noto_Sans_SC, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_SC({
  variable: "--font-body",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "My Blog",
    template: "%s | My Blog",
  },
  description: "A simple personal blog built with Next.js and Markdown.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSans.variable} ${sourceCodePro.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-stone-100 text-stone-900">
        <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-8 sm:px-10">
          <header className="mb-10 flex flex-col gap-4 border-b border-stone-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              My Blog
            </Link>
            <nav className="flex flex-wrap gap-5 text-sm text-stone-600">
              <Link href="/" className="transition hover:text-stone-900">
                首页
              </Link>
              <Link href="/posts" className="transition hover:text-stone-900">
                文章列表
              </Link>
              <Link href="/about" className="transition hover:text-stone-900">
                关于我
              </Link>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-12 border-t border-stone-200 pt-6 text-sm text-stone-500">
            Built with Next.js, Tailwind CSS and Markdown.
          </footer>
        </div>
      </body>
    </html>
  );
}
