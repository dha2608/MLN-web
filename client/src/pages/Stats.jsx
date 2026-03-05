import { useEffect, useState } from 'react';
import { stats as statsApi } from '../api';

export default function Stats() {
  const [overview, setOverview] = useState(null);
  const [topPhilosophers, setTopPhilosophers] = useState([]);
  const [hotQuestions, setHotQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      statsApi.overview(),
      statsApi.topPhilosophers(),
      statsApi.hotQuestions()
    ]).then(([o, p, q]) => {
      setOverview(o);
      setTopPhilosophers(p.topics || []);
      setHotQuestions(q.questions || []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="page page--narrow">
      <div className="loading-wrap"><div className="loading-spinner" aria-label="Đang tải" /><span className="loading-text">Đang tải thống kê...</span></div>
    </div>
  );

  const maxCount = topPhilosophers.length > 0
    ? Math.max(...topPhilosophers.map(t => t.count))
    : 1;

  return (
    <div className="page page--narrow stats-page">
      <div className="stats-header stagger-1">
        <span className="stats-icon" aria-hidden="true">#</span>
        <h1 className="page-title">Thống kê thú vị</h1>
        <p className="page-desc">Dữ liệu từ câu hỏi và tương tác với chatbot (chỉ dùng cho phân tích nội bộ).</p>
      </div>

      {/* Overview cards */}
      {overview && (
        <div className="stats-overview stagger-2">
          <div className="stat-card">
            <div className="stat-card-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <span className="stat-card-value">{overview.totalUsers ?? 0}</span>
            <span className="stat-card-label">Nguoi dung</span>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r="0.5"/></svg>
            </div>
            <span className="stat-card-value">{overview.totalQuestions ?? 0}</span>
            <span className="stat-card-label">Cau hoi da dat</span>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
            </div>
            <span className="stat-card-value">{overview.totalSessions ?? 0}</span>
            <span className="stat-card-label">Phien truy cap</span>
          </div>
        </div>
      )}

      {/* Top Philosophers with bar chart */}
      <section className="stats-section stagger-3">
        <h2 className="section-title">Triết gia / chủ đề được hỏi nhiều nhất</h2>
        {topPhilosophers.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon" aria-hidden="true">#</div>
            <p>Chưa có dữ liệu.</p>
          </div>
        ) : (
          <div className="stat-bars">
            {topPhilosophers.map((t, i) => (
              <div key={i} className="stat-bar-row">
                <div className="stat-bar-info">
                  <span className="stat-bar-rank">{i + 1}</span>
                  <span className="stat-bar-name">{t.name}</span>
                  <span className="stat-bar-count">{t.count}</span>
                </div>
                <div className="stat-bar-track">
                  <div
                    className="stat-bar-fill"
                    style={{ width: `${(t.count / maxCount) * 100}%`, animationDelay: `${i * 0.08}s` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Hot Questions */}
      <section className="stats-section stagger-4">
        <h2 className="section-title">Câu hỏi có nhiều tương tác</h2>
        {hotQuestions.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon" aria-hidden="true">?</div>
            <p>Chưa có dữ liệu.</p>
          </div>
        ) : (
          <div className="stat-question-list">
            {hotQuestions.map((q, i) => (
              <div key={i} className="stat-question-card">
                <div className="stat-question-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <span className="stat-question-text">&ldquo;{q.text}&rdquo;</span>
                <span className="stat-question-count">{q.count} lần</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <style>{`
        .stats-page .page-title { margin-bottom: 0.35rem; }

        /* Header */
        .stats-header { text-align: center; margin-bottom: 2rem; }
        .stats-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: var(--radius-lg);
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .stats-header .page-desc { margin-left: auto; margin-right: auto; text-align: center; }

        /* Overview */
        .stats-overview {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          transition: all var(--transition-slow);
        }
        .stat-card:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow);
          transform: translateY(-2px);
        }
        .stat-card-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: var(--radius);
          margin-bottom: 0.25rem;
        }
        .stat-card-value {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 700;
          color: var(--text);
          line-height: 1.1;
        }
        .stat-card-label {
          font-size: 0.8rem;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        /* Bar chart */
        .stats-section { margin-bottom: 2.5rem; }
        .stat-bars { display: flex; flex-direction: column; gap: 0.75rem; }
        .stat-bar-row {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius);
          padding: 0.85rem 1rem;
          transition: all var(--transition);
        }
        .stat-bar-row:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow-xs);
        }
        .stat-bar-info {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.5rem;
        }
        .stat-bar-rank {
          font-family: var(--font-serif);
          font-size: 1rem;
          font-weight: 700;
          color: var(--accent);
          opacity: 0.4;
          min-width: 22px;
        }
        .stat-bar-name {
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--text);
          flex: 1;
        }
        .stat-bar-count {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .stat-bar-track {
          height: 6px;
          background: var(--border-light);
          border-radius: 99px;
          overflow: hidden;
        }
        .stat-bar-fill {
          height: 100%;
          background: var(--gradient-accent);
          border-radius: 99px;
          animation: barGrow 0.6s ease-out both;
        }
        @keyframes barGrow {
          from { width: 0 !important; }
        }

        /* Questions */
        .stat-question-list { display: flex; flex-direction: column; gap: 0.65rem; }
        .stat-question-card {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius);
          padding: 0.85rem 1rem;
          transition: all var(--transition);
        }
        .stat-question-card:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow-xs);
        }
        .stat-question-icon {
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: var(--radius-sm);
        }
        .stat-question-text {
          flex: 1;
          font-size: 0.9rem;
          font-style: italic;
          color: var(--text);
          line-height: 1.5;
        }
        .stat-question-count {
          font-size: 0.82rem;
          color: var(--text-muted);
          white-space: nowrap;
          flex-shrink: 0;
          font-weight: 500;
        }

        @media (max-width: 480px) {
          .stats-overview { grid-template-columns: 1fr; }
          .stat-card { flex-direction: row; text-align: left; padding: 1rem; }
          .stat-card-icon { margin-bottom: 0; }
          .stat-card-value { font-size: 1.5rem; }
        }
      `}</style>
    </div>
  );
}
