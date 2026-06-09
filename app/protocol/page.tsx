import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Protocol",
  description: "部署协议占位页。",
};

export default function ProtocolPage() {
  return (
    <section className="simple-placeholder">
      <div className="shell simple-placeholder__inner">
        <p className="project-card__meta">Placeholder</p>
        <h1 className="section-title section-title--page">Deployment Protocol</h1>
        <p className="section-description">
          这里之后会补成完整的部署说明、运行要求和交付协议。现在先作为可访问占位页，保证项目详情按钮已接通。
        </p>
        <Link href="/projects" className="primary-button">
          Back To Projects
        </Link>
      </div>
    </section>
  );
}
