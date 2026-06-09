"use client";

import { useState } from "react";

const resultCards = [
  {
    title: "Neural Interface Systems",
    description:
      "Exploring the intersections between human cognition and high-frequency data throughput in modern design environments.",
    id: "0x9928FF",
    label: "ARCHIVE_01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoveDfqZjiRN0CY6ayMB6tqE1JEyYSY97nICjDVZmuj4_qMtWGeDGPcXg-Fzl7SLkYZeSa4v_zeajjuvNSML49tXsNO5QuxLxNUlhNhSXeY3UDHKQaTexlBK_QFXu-R1w8wJ1PdiArcszlDQn-ARBAGUuOAh-9M3Mn5J0B61WY7YbkzkZmJI4FTT35ff9za3XAcvh-isfzNcK_sBVzD8qvwrhqgKPWeEy3s80MMq9nd18tSozcpjALYLn_jl848aWueaFkG_EcqfQ",
  },
  {
    title: "Geometric Alignment",
    description:
      "A technical review of grid-based layout hierarchies and their impact on user cognitive load during complex search tasks.",
    id: "0xFD4412",
    label: "ARCHIVE_02",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBfvMtHtH-mb_b0pWofx_sAsQ-NgwBF86Hb0M4M7m64D641EDBHxJ4YQeYsqvcxVRi9dFpEfcriBkggbHESApz9WH8-ddbLGY5BPS5XMtYnxY0GzZHnBMLah5tJqPui2_EcBSNd3SR_4-x0KUpyjN4GVa10Pql-ELj0Jg4Pzyr9kuaSh1ZTp62HSm1bJ7KZXh2B2oUAAiXFeVMjTGt_u-WBlIXxp_3Ius0odl0syR8LJsttFf6kWk0DPuxgHGm9FaDfyxT3UVLc",
  },
  {
    title: "Developer Workflow Patterns",
    description:
      'git commit -m "Optimize search indexing"\nnpm run build:production\n--status: complete',
    id: "0x8812BC",
    label: "RAW_TEXT",
    image: "",
  },
  {
    title: "Mechanical Precision",
    description:
      "Documenting the physical world's influence on high-fidelity digital interface components.",
    id: "0xAA9010",
    label: "ARCHIVE_03",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARck4nMHVMqza_1Fuvue3p1gDcPNv1l7X_1I_9p7MUhnSdzJBq30DI61bv4BinJYMH-9PBomfsQXzCUQP78ivXMWVvaM8CLvM2312_wVEdG2UxBVGIXTv59pspOZuiaNj1ZE2M6OvUbvQ4fFTcYLHsatitYjo6dP5uVW3Sm75TbZW2v6tWBoSGWPfJWsed8QPOCdlugxee-6GNEOtYJ0ELHrdSgZUWEel6jKVJkQhQ8dZzXZOKzaDwqxLZG7wDO7brReN8LHEuEHc",
  },
];

export default function SearchClient() {
  const [query, setQuery] = useState("");

  return (
    <section className="section-block section-block--first search-surface">
      <div className="shell">
        <form className="search-panel" action="/search/empty">
          <div className="search-panel__top">
            <span className="project-card__meta">System::Input_Interface</span>
            <div className="search-panel__stats">
              <div>
                <span className="search-panel__label">Active Session</span>
                <span className="search-panel__value">XS-992-ALPHA</span>
              </div>
              <div>
                <span className="search-panel__label">Query Type</span>
                <span className="search-panel__value">VECTOR_NEURAL</span>
              </div>
            </div>
          </div>

          <div className="search-input-wrap">
            <input
              className="search-input"
              type="text"
              name="q"
              placeholder="EXECUTE_QUERY_"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && query.trim()) {
                  event.currentTarget.form?.requestSubmit();
                }
              }}
            />
            {!query.trim() ? <span className="search-input__cursor" aria-hidden="true" /> : null}
          </div>

          <div className="search-panel__bottom">
            <div className="search-tag-row">
              <span className="search-pill search-pill--primary">Recent Queries +</span>
              <button type="button" className="search-pill" onClick={() => setQuery("UI_Systems")}>
                UI_Systems
              </button>
              <button type="button" className="search-pill" onClick={() => setQuery("Architecture")}>
                Architecture
              </button>
            </div>
            <span className="search-helper">Press [ENTER] to commit sequence</span>
          </div>

          <button type="submit" hidden aria-hidden="true" tabIndex={-1}>
            Submit search
          </button>
        </form>

        <div className="search-grid">
          <aside className="search-sidebar">
            <div className="search-meta-card">
              <div className="search-meta-badge">META</div>
              <h2 className="search-card-title">Data Parameters</h2>
              <ul className="search-meta-list">
                <li>
                  <span>Latency</span>
                  <span className="search-meta-accent">0.02ms</span>
                </li>
                <li>
                  <span>Clusters</span>
                  <span>12/12</span>
                </li>
                <li>
                  <span>Nodes</span>
                  <span>8.4k</span>
                </li>
              </ul>
            </div>

            <div className="search-meta-card">
              <h2 className="search-card-title">Filter Schema</h2>
              <div className="search-filter-list">
                <div className="search-filter-item search-filter-item--active">
                  <span>All Documents</span>
                  <span>100%</span>
                </div>
                <div className="search-filter-item">
                  <span>Source Code</span>
                  <span>42%</span>
                </div>
                <div className="search-filter-item">
                  <span>Design Specs</span>
                  <span>28%</span>
                </div>
              </div>
            </div>
          </aside>

          <div className="search-results">
            {resultCards.map((card) => (
              <article key={card.id} className="search-result-card">
                {card.image ? (
                  <div
                    className="search-result-card__image"
                    style={{ backgroundImage: `url(${card.image})` }}
                    role="img"
                    aria-label={card.title}
                  >
                    <span className="search-result-card__badge">{card.label}</span>
                  </div>
                ) : (
                  <div className="search-result-card__body search-result-card__body--text">
                    <div className="search-result-card__head">
                      <span className="search-result-card__badge search-result-card__badge--outline">
                        {card.label}
                      </span>
                      <span className="search-result-card__arrow">TERMINAL</span>
                    </div>
                    <h3 className="search-result-card__title">{card.title}</h3>
                    <pre className="search-result-card__terminal">{card.description}</pre>
                    <div className="search-result-card__foot">
                      <span>ID: {card.id}</span>
                      <span>VIEW_DATA &gt;&gt;</span>
                    </div>
                  </div>
                )}

                {card.image ? (
                  <div className="search-result-card__body">
                    <div className="search-result-card__head">
                      <h3 className="search-result-card__title">{card.title}</h3>
                      <span className="search-result-card__arrow">-&gt;</span>
                    </div>
                    <p className="search-result-card__desc">{card.description}</p>
                    <div className="search-result-card__foot">
                      <span>ID: {card.id}</span>
                      <span>VIEW_DATA &gt;&gt;</span>
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
