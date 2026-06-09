import type { Metadata } from "next";
import Link from "next/link";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "CcGuang",
    template: "%s | CcGuang",
  },
  description: "CcGuang 的个人博客。",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

const repoUrl = "https://github.com/CcGuang297/Personal-Blog-building-";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${displayFont.variable} ${monoFont.variable}`}>
      <body>
        <header className="topbar">
          <div className="shell topbar__inner">
            <Link href="/" className="brand">
              CcGuang
            </Link>

            <div className="topbar__navwrap">
              <nav className="topbar__nav" aria-label="Primary">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="nav-item">
                    {item.label}
                  </Link>
                ))}
                <a href={repoUrl} target="_blank" rel="noreferrer" className="nav-item">
                  GitHub
                </a>
              </nav>

              <div className="topbar__divider" />

              <Link href="/search" className="nav-item nav-item--search">
                <span>Q.</span>
                <span>Search</span>
              </Link>
            </div>
          </div>
        </header>

        <main className="page-frame">{children}</main>

        <footer className="site-footer">
          <div className="shell site-footer__grid">
            <div className="site-footer__block">
              <p className="site-footer__brand">CcGuang</p>
              <p className="site-footer__copy">
                专注于技术沉淀与项目实践的个人博客。在这里，每一行代码和文字都承载着思考。
              </p>
              <p className="site-footer__meta">© 2026 CcGuang. All rights reserved.</p>
            </div>

            <div className="site-footer__block">
              <p className="footer-label">Navigation</p>
              <div className="site-footer__links">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="nav-item">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="site-footer__block">
              <p className="footer-label">Connect</p>
              <div className="site-footer__links">
                <a href={repoUrl} target="_blank" rel="noreferrer" className="nav-item">
                  GitHub
                </a>
                <a href="mailto:hello@ccguang.dev" className="nav-item">
                  Email
                </a>
                <a href="https://github.com/CcGuang297" target="_blank" rel="noreferrer" className="nav-item">
                  Profile
                </a>
              </div>
            </div>

            <div className="site-footer__action">
              <Link href="/subscribe" className="subscribe-button">
                Subscribe
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
