import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { concepts as api } from '../api';

const CONCEPT_ICONS = {
  'Nhận thức luận': '\u2318',
  'Siêu hình học': '\u2734',
  'Đạo đức học': '\u2261',
  'Logic học': '\u2234',
  'Triết học chính trị': '\u2694',
  'Mỹ học': '\u2605',
};

export default function Concepts() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.list().then(({ concepts: c }) => {
      setList(c || []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="page page--narrow">
      <div className="loading-wrap"><div className="loading-spinner" aria-label="Đang tải" /><span className="loading-text">Đang tải khái niệm...</span></div>
    </div>
  );

  return (
    <div className="page concepts-page">
      <div className="concepts-header stagger-1">
        <span className="concepts-icon" aria-hidden="true">{'\u2234'}</span>
        <h1 className="page-title">Khái niệm triết học</h1>
        <p className="page-desc">Các khái niệm nền tảng trong triết học phương Đông và phương Tây.</p>
      </div>

      {list.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon" aria-hidden="true">{'\u2234'}</div>
          <p>Chưa có khái niệm nào.</p>
        </div>
      ) : (
        <div className="concepts-grid">
          {list.map((c, i) => (
            <Link key={c._id} to={`/khai-niem/${c.slug}`} className={`concept-card stagger-${(i % 6) + 1}`}>
              <div className="concept-card-icon" aria-hidden="true">
                {CONCEPT_ICONS[c.school] || '\u2022'}
              </div>
              <div className="concept-card-body">
                <h3>{c.title}</h3>
                {c.school && <span className="badge badge-school">{c.school}</span>}
                {c.description && (
                  <p className="concept-card-desc">{c.description.slice(0, 100)}{c.description.length > 100 ? '...' : ''}</p>
                )}
              </div>
              <span className="concept-card-arrow" aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .concepts-page { max-width: 900px; }
        .concepts-page .page-title { margin-bottom: 0.35rem; }

        /* Header */
        .concepts-header { text-align: center; margin-bottom: 2rem; }
        .concepts-icon {
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
        .concepts-header .page-desc { margin-left: auto; margin-right: auto; text-align: center; }

        /* Grid */
        .concepts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }

        /* Card */
        .concept-card {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          color: var(--text);
          transition: all var(--transition-slow);
          text-decoration: none;
        }
        .concept-card:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow);
          transform: translateY(-3px);
          text-decoration: none;
        }
        .concept-card:hover .concept-card-arrow { transform: translateX(3px); opacity: 1; }

        .concept-card-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: var(--radius);
          font-size: 1.15rem;
          font-weight: 600;
        }

        .concept-card-body { flex: 1; min-width: 0; }
        .concept-card-body h3 {
          margin: 0 0 0.35rem;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text);
          line-height: 1.3;
        }
        .concept-card-body .badge { margin-bottom: 0.35rem; }
        .concept-card-desc {
          margin: 0;
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .concept-card-arrow {
          color: var(--accent);
          opacity: 0;
          transition: all var(--transition);
          flex-shrink: 0;
          align-self: center;
          font-size: 1.1rem;
        }

        @media (max-width: 480px) {
          .concepts-grid { grid-template-columns: 1fr; }
          .concept-card { padding: 1rem; }
        }
      `}</style>
    </div>
  );
}
