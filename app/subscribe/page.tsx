import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subscribe",
  description: "订阅占位页。",
};

export default function SubscribePage() {
  return (
    <section className="simple-placeholder">
      <div className="shell simple-placeholder__inner">
        <p className="project-card__meta">Placeholder</p>
        <h1 className="section-title section-title--page">Subscribe</h1>
        <p className="section-description">
          这里之后会接入真正的订阅能力。当前先保留为简单占位页，方便整站导航和按钮联通验证。
        </p>
        <Link href="/" className="primary-button">
          Return Home
        </Link>
      </div>
    </section>
  );
}
