import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { philosophers as api } from '../api';

export default function Compare() {
  const [list, setList] = useState([]);
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [comparison, setComparison] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comparing, setComparing] = useState(false);

  useEffect(() => {
    api.list().then(({ philosophers }) => {
      setList(philosophers || []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const handleCompare = () => {
    if (!a || !b) return;
    setComparing(true);
    Promise.all([api.get(a), api.get(b)]).then(([r1, r2]) => {
      const p1 = r1.philosopher;
      const p2 = r2.philosopher;
      setComparison({
        p1: { name: p1.name, school: p1.school, summary: p1.summary, concepts: p1.concepts || [], imageUrl: p1.imageUrl, slug: p1.slug },
        p2: { name: p2.name, school: p2.school, summary: p2.summary, concepts: p2.concepts || [], imageUrl: p2.imageUrl, slug: p2.slug }
      });
      setComparing(false);
    }).catch(() => { setComparison(null); setComparing(false); });
  };

  if (loading) return (
    <div className="page">
      <div className="loading-wrap"><div className="loading-spinner" aria-label="Đang tải" /><span className="loading-text">Đang tải danh sách...</span></div>
    </div>
  );

  return (
    <div className="page cmp-page">
      <div className="cmp-header stagger-1">
        <span className="cmp-icon" aria-hidden="true">⚖</span>
        <h1 className="page-title">So sánh tư tưởng</h1>
        <p className="page-desc">Chọn hai triết gia để so sánh quan điểm và tư tưởng chính.</p>
      </div>

      {/* Selection form */}
      <div className="cmp-form stagger-2">
        <div className="cmp-select-group">
          <div className="cmp-select-wrap">
            <label className="cmp-label">Triết gia 1</label>
            <select value={a} onChange={(e) => setA(e.target.value)} className="cmp-select">
              <option value="">-- Chọn --</option>
              {list.map((p) => (
                <option key={p._id} value={p.slug} disabled={p.slug === b}>{p.name}</option>
              ))}
            </select>
          </div>

          <div className="cmp-vs" aria-hidden="true">VS</div>

          <div className="cmp-select-wrap">
            <label className="cmp-label">Triết gia 2</label>
            <select value={b} onChange={(e) => setB(e.target.value)} className="cmp-select">
              <option value="">-- Chọn --</option>
              {list.map((p) => (
                <option key={p._id} value={p.slug} disabled={p.slug === a}>{p.name}</option>
              ))}
            </select>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleCompare} disabled={!a || !b || a === b || comparing}>
          {comparing ? 'Đang so sánh...' : 'So sánh'}
        </button>
      </div>

      {/* Result */}
      {comparison && (
        <div className="cmp-result stagger-3">
          <div className="cmp-cols">
            {[comparison.p1, comparison.p2].map((p, idx) => (
              <div key={idx} className="cmp-col">
                <div className="cmp-col-avatar">
                  {p.imageUrl ? (
                    <img src={p.imageUrl} alt={p.name} />
                  ) : (
                    <span className="cmp-col-initial" aria-hidden="true">{p.name.charAt(0)}</span>
                  )}
                </div>
                <h3 className="cmp-col-name">{p.name}</h3>
                <span className="badge badge-school">{p.school}</span>
                <p className="cmp-col-summary">{p.summary}</p>
                <div className="cmp-col-concepts">
                  <h4>Tư tưởng chính</h4>
                  <ul>
                    {p.concepts.slice(0, 4).map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>
                <Link to={`/triet-gia/${p.slug}`} className="btn btn-ghost btn-sm">Xem chi tiết &rarr;</Link>
              </div>
            ))}
          </div>

          {/* Divider with VS */}
          <div className="cmp-center-vs" aria-hidden="true">VS</div>

          {/* Tip */}
          <div className="cmp-tip">
            <p>Bạn có thể hỏi chatbot: &ldquo;So sánh {comparison.p1.name} và {comparison.p2.name}&rdquo; để có thêm phân tích chi tiết.</p>
          </div>
        </div>
      )}

      {!comparison && !comparing && (
        <div className="cmp-empty stagger-3">
          <div className="empty-state">
            <div className="empty-icon" aria-hidden="true">⚖</div>
            <p>Chọn hai triết gia ở trên để bắt đầu so sánh.</p>
          </div>
        </div>
      )}

      <style>{`
        .cmp-page .page-title { margin-bottom: 0.35rem; }

        /* Header */
        .cmp-header { text-align: center; margin-bottom: 2rem; }
        .cmp-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: var(--radius-lg);
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .cmp-header .page-desc { margin-left: auto; margin-right: auto; text-align: center; }

        /* Form */
        .cmp-form {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 1.75rem;
          margin-bottom: 2rem;
          text-align: center;
        }
        .cmp-select-group {
          display: flex;
          align-items: flex-end;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }
        .cmp-select-wrap { flex: 1; min-width: 160px; max-width: 240px; }
        .cmp-label {
          display: block;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-muted);
          margin-bottom: 0.35rem;
          text-align: left;
        }
        .cmp-select {
          width: 100%;
          padding: 0.6rem 0.85rem;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          font-family: inherit;
          font-size: 0.9rem;
          background: var(--bg);
          color: var(--text);
          cursor: pointer;
          transition: border-color var(--transition);
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364647c' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          padding-right: 2.5rem;
        }
        .cmp-select:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(44,82,130,0.1); outline: none; }
        .cmp-vs {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--accent-gold);
          background: var(--accent-gold-light);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: 0.15rem;
        }

        /* Result */
        .cmp-result {
          position: relative;
          animation: fadeInUp 0.5s ease-out;
        }
        .cmp-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .cmp-col {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 1.75rem 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          transition: all var(--transition-slow);
        }
        .cmp-col:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow-md);
        }

        /* Avatar */
        .cmp-col-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--border-light);
          margin-bottom: 0.25rem;
          flex-shrink: 0;
        }
        .cmp-col-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .cmp-col-initial {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-light);
          color: var(--accent);
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 600;
        }

        .cmp-col-name {
          margin: 0;
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text);
        }
        .cmp-col .badge { margin-bottom: 0.25rem; }
        .cmp-col-summary {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 0;
        }
        .cmp-col-concepts {
          width: 100%;
          text-align: left;
          margin-top: 0.5rem;
        }
        .cmp-col-concepts h4 {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 0.4rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .cmp-col-concepts ul {
          padding-left: 1.25rem;
          margin: 0;
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .cmp-col-concepts li { margin-bottom: 0.25rem; }
        .cmp-col .btn { margin-top: auto; }

        /* Center VS badge */
        .cmp-center-vs {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 48px;
          height: 48px;
          background: var(--gradient-accent);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-serif);
          font-size: 0.9rem;
          font-weight: 700;
          box-shadow: var(--shadow-md);
          border: 3px solid var(--bg);
          z-index: 2;
        }

        /* Tip */
        .cmp-tip {
          margin-top: 1.5rem;
          padding: 1rem 1.25rem;
          background: var(--accent-gold-light);
          border: 1px solid rgba(197,165,90,0.15);
          border-radius: var(--radius);
          text-align: center;
        }
        .cmp-tip p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        /* Empty */
        .cmp-empty { margin-top: 1rem; }

        @media (max-width: 640px) {
          .cmp-cols { grid-template-columns: 1fr; }
          .cmp-center-vs { display: none; }
          .cmp-select-group { flex-direction: column; align-items: center; }
          .cmp-select-wrap { max-width: 100%; }
          .cmp-vs { margin: 0; }
        }
      `}</style>
    </div>
  );
}
