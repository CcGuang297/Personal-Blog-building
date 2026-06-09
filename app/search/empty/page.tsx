import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Search Empty",
  description: "搜索无结果状态页。",
};

export default function SearchEmptyPage() {
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
          <h1 className="search-empty-card__title">系统查询未能定位数据对象</h1>
          <p className="search-empty-card__text">
            请求的参数未返回结果。请验证搜索语法，或确认目标对象存在于当前分区中。
          </p>

          <div className="search-empty-card__terminal">
            <span className="search-empty-card__terminal-label">Query Executed</span>
            <code>&gt; SELECT * FROM objects WHERE id = &#39;undefined&#39;</code>
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
