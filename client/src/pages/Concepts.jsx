import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { concepts as api } from '../api';

const CONCEPT_ICONS = {
  'Kinh tế chính trị': '⚒',
  'Nhận thức luận': '🔎',
  'Siêu hình học': '🌀',
  'Đạo đức học': '⚖',
  'Logic học': '💡',
  'Triết học chính trị': '🏛',
  'Mỹ học': '🎨',
};

function isKtctConcept(c) {
  return (c.school || '').startsWith('Kinh tế chính trị');
}

export default function Concepts() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.list().then(({ concepts: c }) => {
      setList(c || []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const ktctList = list.filter(isKtctConcept);
  const otherList = list.filter(c => !isKtctConcept(c));

  if (loading) return (
    <div className="page page--narrow">
      <div className="loading-wrap"><div className="loading-spinner" aria-label="Đang tải" /><span className="loading-text">Đang tải khái niệm...</span></div>
    </div>
  );

  return (
    <div className="page concepts-page">
      <div className="concepts-header stagger-1">
        <span className="concepts-icon" aria-hidden="true">{'\u2692'}</span>
        <h1 className="page-title">Khái niệm</h1>
        <p className="page-desc">Các khái niệm nền tảng trong kinh tế chính trị Mác-Lênin và triết học.</p>
      </div>

      {list.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon" aria-hidden="true">💡</div>
          <p>Chưa có khái niệm nào.</p>
        </div>
      ) : (
        <>
          {/* KTCT - Phần chính */}
          {ktctList.length > 0 && (
            <div className="concepts-section">
              <div className="concepts-section-header">
                <span className="concepts-section-badge">Phần chính</span>
                <h2 className="concepts-section-title">Kinh tế chính trị Mác-Lênin</h2>
              </div>
              <div className="concepts-grid">
                {ktctList.map((c, i) => (
                  <Link key={c._id} to={`/khai-niem/${c.slug}`} className={`concept-card concept-card--ktct stagger-${(i % 6) + 1}`}>
                    <div className="concept-card-icon" aria-hidden="true">{'\u2692'}</div>
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
            </div>
          )}

          {/* Triết học - Mở rộng */}
          {otherList.length > 0 && (
            <div className="concepts-section concepts-section--ext">
              <div className="concepts-section-header">
                <span className="concepts-section-badge concepts-section-badge--ext">Mở rộng</span>
                <h2 className="concepts-section-title">Triết học</h2>
              </div>
              <div className="concepts-grid">
                {otherList.map((c, i) => (
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
            </div>
          )}
        </>
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

        /* Sections */
        .concepts-section { margin-bottom: 2.5rem; }
        .concepts-section--ext { margin-bottom: 1rem; }
        .concepts-section-header { margin-bottom: 1.25rem; }
        .concepts-section-badge {
          display: inline-block;
          padding: 0.2rem 0.6rem;
          background: #c53030;
          color: white;
          border-radius: 99px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }
        .concepts-section-badge--ext { background: var(--accent); }
        .concepts-section-title {
          margin: 0;
          font-size: 1.3rem;
          font-weight: 600;
          font-family: var(--font-serif);
          color: var(--text);
        }
        .concept-card--ktct {
          border-color: rgba(197,48,48,0.2);
        }
        .concept-card--ktct:hover {
          border-color: #c53030;
          box-shadow: 0 6px 20px rgba(197,48,48,0.12);
        }

        @media (max-width: 480px) {
          .concepts-grid { grid-template-columns: 1fr; }
          .concept-card { padding: 1rem; }
        }
      `}</style>
    </div>
  );
}
