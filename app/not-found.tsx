import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found-shell">
      <div className="not-found-grid" aria-hidden="true" />

      <div className="not-found-panel">
        <div className="not-found-corners not-found-corners--tl" />
        <div className="not-found-corners not-found-corners--tr" />
        <div className="not-found-corners not-found-corners--bl" />
        <div className="not-found-corners not-found-corners--br" />

        <div className="not-found-code-wrap">
          <h1 className="not-found-code">404</h1>
          <div className="not-found-flags">
            <span className="not-found-flag not-found-flag--solid">CRITICAL_ERR</span>
            <span className="not-found-flag">VER: 2.0.4</span>
          </div>
        </div>

        <div className="not-found-copy">
          <h2 className="not-found-title">RESOURCE_NOT_FOUND</h2>
          <p className="not-found-text">
            The requested sequence could not be located within the current data cluster. System integrity remains stable, but the specific node is unreachable.
          </p>
          <div className="not-found-terminal">
            <span>ERROR_TYPE:</span>
            <span className="not-found-terminal__accent">NULL_POINTER_EXCEPTION</span>
            <span>|</span>
            <span>ADDR:</span>
            <span className="not-found-terminal__strong">0xFD32</span>
          </div>
        </div>

        <div className="not-found-actions">
          <Link href="/" className="primary-button">
            Return Home <span aria-hidden="true">&gt;&gt;</span>
          </Link>
          <Link href="/blog" className="secondary-button">
            Previous State
          </Link>
        </div>

        <div className="not-found-metrics">
          <div className="not-found-metric">
            <span className="not-found-dot" />
            <span className="footer-label">Protocol</span>
            <span className="site-footer__copy">Hyper-Transport-04</span>
          </div>
          <div className="not-found-metric">
            <span className="not-found-dot not-found-dot--accent" />
            <span className="footer-label">Latency</span>
            <span className="site-footer__copy">0.0004ms (SYN)</span>
          </div>
          <div className="not-found-metric">
            <span className="not-found-dot" />
            <span className="footer-label">System</span>
            <span className="site-footer__copy">Kinetic Logic OS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
