import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { philosophers as api } from '../api';

export default function PhilosopherDetail({ user }) {
  const { slug } = useParams();
  const [philosopher, setPhilosopher] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(slug).then(({ philosopher: p }) => {
      setPhilosopher(p);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [slug]);

  if (loading) return (
    <div className="page page--narrow">
      <div className="loading-wrap"><div className="loading-spinner" aria-label="Đang tải" /><span className="loading-text">Đang tải thông tin...</span></div>
    </div>
  );
  if (!philosopher) return (
    <div className="page page--narrow">
      <div className="empty-state">
        <div className="empty-icon" aria-hidden="true">?</div>
        <p>Không tìm thấy triết gia này.</p>
        <Link to="/triet-gia" className="btn btn-secondary btn-sm">Quay lại danh sách</Link>
      </div>
    </div>
  );

  const hasImage = philosopher.imageUrl;
  const imageCaption = philosopher.imageCaption || `Chân dung hoặc tượng ${philosopher.name}`;
  const imageSource = philosopher.imageSource || 'Nguồn chưa cung cấp';
  const imageSourceUrl = philosopher.imageSourceUrl || '#';
  const quotes = philosopher.quotes || [];
  const works = philosopher.works || [];
  const influences = philosopher.influences || [];
  const influencedBy = philosopher.influencedBy || [];

  return (
    <div className="page page--narrow pd-page">
      <Link to="/triet-gia" className="back-link">&larr; Triết gia</Link>

      <article className="pd-article">
        {/* Hero Header */}
        <header className="pd-hero">
          <div className="pd-hero-bg" aria-hidden="true" />
          <div className="pd-hero-content">
            <div className="pd-figure-wrap">
              {hasImage ? (
                <figure className="pd-figure">
                  <img
                    src={philosopher.imageUrl}
                    alt={philosopher.imageAlt || imageCaption}
                    loading="lazy"
                  />
                </figure>
              ) : (
                <div className="pd-avatar-large" aria-hidden="true">
                  {philosopher.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="pd-header-text">
              <div className="pd-header-badges">
                <span className="badge badge-school">{philosopher.school}</span>
                {philosopher.era && <span className="badge badge-gold">{philosopher.era}</span>}
              </div>
              <h1>{philosopher.name}</h1>
              {philosopher.nameVi && philosopher.nameVi !== philosopher.name && (
                <p className="pd-name-vi">{philosopher.nameVi}</p>
              )}
              <p className="pd-meta">{philosopher.birthDeath}</p>
              <p className="pd-summary">{philosopher.summary}</p>
            </div>
          </div>
        </header>

        {/* Image credit */}
        {hasImage && (
          <div className="pd-img-credit">
            <span>{imageCaption}</span>
            <span className="pd-img-source">
              Nguồn: <a href={imageSourceUrl} target="_blank" rel="noopener noreferrer">{imageSource}</a>
            </span>
          </div>
        )}
        {!hasImage && (
          <div className="pd-img-credit">
            <span>Minh họa chữ cái đầu — ảnh chân dung có thể bổ sung với nguồn rõ ràng.</span>
            <span className="pd-img-source">Nguồn: Minh họa nội bộ</span>
          </div>
        )}

        {/* Concepts */}
        {philosopher.concepts && philosopher.concepts.length > 0 && (
          <section className="pd-section stagger-1">
            <h2 className="section-title">Tư tưởng chính</h2>
            <div className="pd-concept-grid">
              {philosopher.concepts.map((c, i) => (
                <div key={i} className={`pd-concept-card stagger-${(i % 5) + 2}`}>
                  <span className="pd-concept-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <p className="pd-concept-text">{c}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Quotes */}
        {quotes.length > 0 && (
          <section className="pd-section stagger-2">
            <h2 className="section-title">Câu nói nổi tiếng</h2>
            <div className="pd-quotes-grid">
              {quotes.map((q, i) => (
                <div key={i} className={`pd-quote-card stagger-${(i % 4) + 2}`}>
                  <span className="pd-quote-mark" aria-hidden="true">&ldquo;</span>
                  <p className="pd-quote-text">{q.text}</p>
                  <span className="pd-quote-source">{q.source}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Works */}
        {works.length > 0 && (
          <section className="pd-section stagger-3">
            <h2 className="section-title">Tác phẩm tiêu biểu</h2>
            <div className="pd-works-list">
              {works.map((w, i) => (
                <div key={i} className={`pd-work-card stagger-${(i % 4) + 2}`}>
                  <div className="pd-work-header">
                    <span className="pd-work-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                    </span>
                    <div>
                      <h4 className="pd-work-title">{w.title}</h4>
                      {w.year && <span className="pd-work-year">{w.year}</span>}
                    </div>
                  </div>
                  <p className="pd-work-desc">{w.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Influences */}
        {(influences.length > 0 || influencedBy.length > 0) && (
          <section className="pd-section stagger-4">
            <h2 className="section-title">Ảnh hưởng</h2>
            <div className="pd-influence-grid">
              {influences.length > 0 && (
                <div className="pd-influence-col">
                  <span className="pd-influence-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                    Chịu ảnh hưởng từ
                  </span>
                  <div className="pd-influence-tags">
                    {influences.map(name => (
                      <span key={name} className="pd-influence-tag">{name}</span>
                    ))}
                  </div>
                </div>
              )}
              {influencedBy.length > 0 && (
                <div className="pd-influence-col">
                  <span className="pd-influence-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                    Đã ảnh hưởng đến
                  </span>
                  <div className="pd-influence-tags">
                    {influencedBy.map(name => (
                      <span key={name} className="pd-influence-tag pd-influence-tag-out">{name}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="pd-cta stagger-5">
          <div className="pd-cta-inner">
            <p>Muốn tìm hiểu thêm? Hãy hỏi chatbot triết học bên góc phải.</p>
            <div className="pd-cta-actions">
              <Link to="/so-sanh" className="btn btn-outline btn-sm">So sánh với triết gia khác</Link>
              <Link to="/triet-gia" className="btn btn-ghost btn-sm">Xem tất cả triết gia</Link>
            </div>
          </div>
        </div>
      </article>

      <style>{`
        .pd-page { padding-top: 1.5rem; }

        /* Sections */
        .pd-section { margin-bottom: 2.5rem; }

        /* Hero */
        .pd-hero {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          margin-bottom: 1rem;
        }
        .pd-hero-bg {
          position: absolute;
          inset: 0;
          background: var(--gradient-hero);
          z-index: 0;
        }
        .pd-hero-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2.5rem 2rem 2rem;
          gap: 1.5rem;
        }

        /* Figure */
        .pd-figure-wrap { flex-shrink: 0; }
        .pd-figure {
          margin: 0;
          width: 180px;
          height: 180px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 4px solid rgba(255,255,255,0.8);
        }
        .pd-figure img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pd-avatar-large {
          width: 180px;
          height: 180px;
          background: var(--gradient-accent);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-serif);
          font-size: 5rem;
          font-weight: 600;
          color: white;
          box-shadow: var(--shadow-lg);
        }

        /* Header text */
        .pd-header-text {
          text-align: center;
        }
        .pd-header-badges {
          display: flex;
          gap: 0.4rem;
          justify-content: center;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
        }
        .pd-header-text h1 {
          font-family: var(--font-serif);
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 600;
          margin: 0 0 0.25rem;
          line-height: 1.15;
          color: var(--text);
        }
        .pd-name-vi {
          color: var(--text-light);
          font-size: 1rem;
          margin: 0 0 0.25rem;
          font-style: italic;
        }
        .pd-meta {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin: 0 0 1rem;
        }
        .pd-summary {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text);
          max-width: 560px;
          margin: 0 auto;
        }

        /* Image credit */
        .pd-img-credit {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          background: var(--bg-alt);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--text-light);
          margin-bottom: 2.5rem;
        }
        .pd-img-source a { color: var(--accent-gold); }
        .pd-img-source a:hover { color: var(--accent); }

        /* Concepts */
        .pd-concept-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }
        .pd-concept-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.15rem 1.25rem;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius);
          transition: all var(--transition-slow);
        }
        .pd-concept-card:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow);
          transform: translateX(4px);
        }
        .pd-concept-num {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent);
          opacity: 0.35;
          line-height: 1;
          flex-shrink: 0;
          min-width: 30px;
        }
        .pd-concept-text {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text);
        }

        /* ---- Quotes ---- */
        .pd-quotes-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .pd-quote-card {
          position: relative;
          background: var(--gradient-warm);
          border: 1px solid rgba(197,165,90,0.15);
          border-radius: var(--radius);
          padding: 1.25rem 1.25rem 1rem 2.25rem;
          transition: all var(--transition-slow);
        }
        .pd-quote-card:hover {
          box-shadow: var(--shadow);
          transform: translateY(-2px);
        }
        .pd-quote-mark {
          position: absolute;
          top: 0.35rem;
          left: 0.65rem;
          font-family: var(--font-serif);
          font-size: 2.5rem;
          color: var(--accent-gold);
          opacity: 0.3;
          line-height: 1;
          user-select: none;
        }
        .pd-quote-text {
          margin: 0;
          font-size: 0.92rem;
          font-style: italic;
          color: var(--text);
          line-height: 1.6;
        }
        .pd-quote-source {
          display: block;
          margin-top: 0.5rem;
          font-size: 0.78rem;
          color: var(--accent-gold);
          font-weight: 500;
        }

        /* ---- Works ---- */
        .pd-works-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .pd-work-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius);
          padding: 1.15rem 1.25rem;
          transition: all var(--transition-slow);
        }
        .pd-work-card:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow);
          transform: translateX(4px);
        }
        .pd-work-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }
        .pd-work-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: var(--radius-sm);
          flex-shrink: 0;
        }
        .pd-work-title {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text);
          line-height: 1.25;
        }
        .pd-work-year {
          font-size: 0.78rem;
          color: var(--accent-gold);
          font-weight: 500;
        }
        .pd-work-desc {
          margin: 0;
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* ---- Influences ---- */
        .pd-influence-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .pd-influence-col {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius);
          padding: 1.15rem;
        }
        .pd-influence-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-muted);
          margin-bottom: 0.65rem;
        }
        .pd-influence-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .pd-influence-tag {
          display: inline-block;
          padding: 0.2rem 0.6rem;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: 99px;
          font-size: 0.78rem;
          font-weight: 500;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: default;
        }
        .pd-influence-tag:hover { transform: translateY(-1px); box-shadow: 0 2px 8px rgba(44,82,130,0.12); }
        .pd-influence-tag-out {
          background: var(--accent-gold-light);
          color: var(--accent-gold);
        }

        /* CTA */
        .pd-cta {
          margin-top: 1rem;
        }
        .pd-cta-inner {
          background: var(--gradient-warm);
          border: 1px solid rgba(197,165,90,0.15);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          text-align: center;
        }
        .pd-cta-inner p {
          margin: 0 0 1rem;
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .pd-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }

        @media (min-width: 640px) {
          .pd-hero-content {
            flex-direction: row;
            align-items: flex-start;
            text-align: left;
            padding: 2.5rem;
          }
          .pd-header-text { text-align: left; }
          .pd-header-badges { justify-content: flex-start; }
          .pd-summary { margin: 0; }
        }
        @media (max-width: 640px) {
          .pd-hero-content { padding: 1.75rem 1.25rem 1.5rem; }
          .pd-figure, .pd-avatar-large { width: 140px; height: 140px; }
          .pd-quotes-grid { grid-template-columns: 1fr; }
          .pd-influence-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
