"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SearchEmptyClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim() || "undefined";

  return (
    <section className="search-empty-shell">
      <div className="search-empty-bg-word" aria-hidden="true">
        NULL_POINTER
      </div>

      <div className="search-empty-card">
        <div className="search-empty-card__corners" aria-hidden="true" />

        <div className="search-empty-card__head">
          <div className="search-empty-card__notice">
            <span>WARNING</span>
            <span>System Notice</span>
          </div>
          <div className="search-empty-card__code">ERR_CODE: 404</div>
        </div>

        <div className="search-empty-card__body">
          <div className="search-empty-card__icon">!</div>
          <h1 className="search-empty-card__title">当前查询没有找到对应内容</h1>
          <p className="search-empty-card__text">
            这次请求没有返回结果。你可以换一个关键词重新搜索，或者先回到首页浏览最近的文章与项目。
          </p>

          <div className="search-empty-card__terminal">
            <span className="search-empty-card__terminal-label">Query Executed</span>
            <code>&gt; SELECT * FROM objects WHERE id = &#39;{query}&#39;</code>
          </div>

          <div className="search-empty-card__actions">
            <Link href="/" className="primary-button">
              Return Home <span aria-hidden="true">&gt;</span>
            </Link>
          </div>
        </div>

        <div className="search-empty-card__bar" aria-hidden="true" />
      </div>
    </section>
  );
}
