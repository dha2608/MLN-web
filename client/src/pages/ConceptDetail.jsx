import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { concepts as api } from '../api';
import { user as userApi } from '../api';

export default function ConceptDetail({ user }) {
  const { slug } = useParams();
  const [concept, setConcept] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(slug).then(({ concept: c }) => {
      setConcept(c);
      setLoading(false);
      if (user && c?._id) userApi.viewContent(c._id).catch(() => {});
    }).catch(() => setLoading(false));
  }, [slug, user]);

  if (loading) return (
    <div className="page page--narrow">
      <div className="loading-wrap"><div className="loading-spinner" aria-label="Đang tải" /><span className="loading-text">Đang tải khái niệm...</span></div>
    </div>
  );
  if (!concept) return (
    <div className="page page--narrow">
      <div className="empty-state">
        <div className="empty-icon" aria-hidden="true">?</div>
        <p>Không tìm thấy khái niệm này.</p>
        <Link to="/khai-niem" className="btn btn-secondary btn-sm">Quay lại danh sách</Link>
      </div>
    </div>
  );

  return (
    <div className="page page--narrow cd-page">
      <Link to="/khai-niem" className="back-link">&larr; Khái niệm</Link>

      <article className="cd-article">
        {/* Header */}
        <header className="cd-header stagger-1">
          <div className="cd-header-icon" aria-hidden="true">{'\u2234'}</div>
          <div className="cd-header-text">
            {concept.school && <span className="badge badge-school">{concept.school}</span>}
            <h1>{concept.title}</h1>
          </div>
        </header>

        {/* Body */}
        <div className="cd-body stagger-2">
          <p>{concept.description}</p>
        </div>

        {/* CTA */}
        <div className="cd-cta stagger-3">
          <div className="cd-cta-inner">
            <p>Muốn tìm hiểu thêm? Hãy hỏi chatbot KTCT bên góc phải.</p>
            <div className="cd-cta-actions">
              <Link to="/khai-niem" className="btn btn-outline btn-sm">Xem khái niệm khác</Link>
              <Link to="/triet-gia" className="btn btn-ghost btn-sm">Khám phá nhà tư tưởng</Link>
            </div>
          </div>
        </div>
      </article>

      <style>{`
        .cd-page { padding-top: 1.5rem; }

        /* Header */
        .cd-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-light);
        }
        .cd-header-icon {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: var(--radius-lg);
          font-size: 1.5rem;
          font-weight: 700;
        }
        .cd-header-text { flex: 1; }
        .cd-header-text .badge { margin-bottom: 0.5rem; }
        .cd-header-text h1 {
          font-family: var(--font-serif);
          font-size: clamp(1.5rem, 4vw, 2.25rem);
          font-weight: 600;
          margin: 0;
          line-height: 1.2;
          color: var(--text);
        }

        /* Body */
        .cd-body {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text);
          margin-bottom: 2.5rem;
        }
        .cd-body p {
          margin: 0 0 1rem;
        }
        .cd-body p:last-child { margin-bottom: 0; }

        /* CTA */
        .cd-cta-inner {
          background: var(--gradient-warm);
          border: 1px solid rgba(197,165,90,0.15);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          text-align: center;
        }
        .cd-cta-inner p {
          margin: 0 0 1rem;
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .cd-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
