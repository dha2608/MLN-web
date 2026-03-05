import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { stats as statsApi } from '../api';

export default function Stats() {
  const [overview, setOverview] = useState(null);
  const [schoolDist, setSchoolDist] = useState([]);
  const [eraDist, setEraDist] = useState([]);
  const [richness, setRichness] = useState([]);
  const [topPhilosophers, setTopPhilosophers] = useState([]);
  const [hotQuestions, setHotQuestions] = useState([]);
  const [recentActivity, setRecentActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      statsApi.overview(),
      statsApi.schoolDistribution(),
      statsApi.eraDistribution(),
      statsApi.philosopherRichness(),
      statsApi.topPhilosophers(),
      statsApi.hotQuestions(),
      statsApi.recentActivity()
    ]).then(([o, sd, ed, r, tp, hq, ra]) => {
      setOverview(o);
      setSchoolDist(sd.distribution || []);
      setEraDist(ed.eras || []);
      setRichness(r.richness || []);
      setTopPhilosophers(tp.topics || []);
      setHotQuestions(hq.questions || []);
      setRecentActivity(ra);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="page page--narrow">
      <div className="loading-wrap"><div className="loading-spinner" aria-label="Đang tải" /><span className="loading-text">Đang tải thống kê...</span></div>
    </div>
  );

  const maxRichness = richness.length > 0 ? Math.max(...richness.map(r => r.total)) : 1;
  const maxSchool = schoolDist.length > 0 ? Math.max(...schoolDist.map(s => s.count)) : 1;
  const maxTopCount = topPhilosophers.length > 0 ? Math.max(...topPhilosophers.map(t => t.count)) : 1;

  return (
    <div className="page page--narrow stats-page">
      {/* Header */}
      <div className="stats-header stagger-1">
        <span className="stats-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
        </span>
        <h1 className="page-title">Thống kê & Dữ liệu</h1>
        <p className="page-desc">Tổng quan về kho tri thức triết học và hoạt động trên trang web.</p>
      </div>

      {/* === SECTION 1: Knowledge Base Overview === */}
      {overview && (
        <div className="stats-overview stagger-2">
          <div className="stat-card stat-card--accent">
            <div className="stat-card-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            </div>
            <span className="stat-card-value">{overview.totalPhilosophers}</span>
            <span className="stat-card-label">Triết gia</span>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <span className="stat-card-value">{overview.totalSchools}</span>
            <span className="stat-card-label">Trường phái</span>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <span className="stat-card-value">{overview.totalConcepts}</span>
            <span className="stat-card-label">Khái niệm</span>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <span className="stat-card-value">{overview.totalQuotes}</span>
            <span className="stat-card-label">Trích dẫn</span>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            <span className="stat-card-value">{overview.totalWorks}</span>
            <span className="stat-card-label">Tác phẩm</span>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <span className="stat-card-value">{overview.totalTimelineEvents}</span>
            <span className="stat-card-label">Sự kiện lịch sử</span>
          </div>
        </div>
      )}

      {/* === SECTION 2: Philosopher Knowledge Richness === */}
      <section className="stats-section stagger-3">
        <h2 className="section-title">Độ phong phú tri thức theo triết gia</h2>
        <p className="stats-section-desc">Tổng số khái niệm, trích dẫn và tác phẩm của mỗi triết gia trong kho dữ liệu.</p>
        {richness.length > 0 && (
          <div className="stat-bars">
            {richness.map((p, i) => (
              <Link to={`/triet-gia/${p.slug}`} key={p.slug} className="stat-bar-row stat-bar-row--link">
                <div className="stat-bar-info">
                  <span className="stat-bar-rank">{i + 1}</span>
                  <span className="stat-bar-name">{p.name}</span>
                  <span className="stat-bar-badges">
                    <span className="stat-badge" title="Khái niệm">{p.concepts} kn</span>
                    <span className="stat-badge stat-badge--gold" title="Trích dẫn">{p.quotes} td</span>
                    <span className="stat-badge stat-badge--blue" title="Tác phẩm">{p.works} tp</span>
                  </span>
                </div>
                <div className="stat-bar-track">
                  <div className="stat-bar-fill" style={{ width: `${(p.total / maxRichness) * 100}%`, animationDelay: `${i * 0.06}s` }} />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* === SECTION 3: School Distribution === */}
      <section className="stats-section stagger-4">
        <h2 className="section-title">Phân bố trường phái triết học</h2>
        <div className="school-dist-grid">
          {schoolDist.map((s, i) => (
            <div key={i} className="school-dist-card">
              <div className="school-dist-header">
                <span className="school-dist-icon" aria-hidden="true">{s.icon}</span>
                <div>
                  <h3 className="school-dist-name">{s.name}</h3>
                  <span className="school-dist-era">{s.era}</span>
                </div>
                <span className="school-dist-count">{s.count}</span>
              </div>
              <div className="school-dist-bar-track">
                <div className="school-dist-bar-fill" style={{ width: `${(s.count / maxSchool) * 100}%`, animationDelay: `${i * 0.08}s` }} />
              </div>
              <div className="school-dist-philosophers">
                {s.philosophers.map((p, j) => (
                  <span key={j} className="school-dist-tag">{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === SECTION 4: Era Distribution === */}
      <section className="stats-section stagger-5">
        <h2 className="section-title">Sự kiện theo thời kỳ</h2>
        <div className="era-grid">
          {eraDist.map((era, i) => {
            const colors = ['var(--accent)', '#e67e22', '#27ae60'];
            const color = colors[i % colors.length];
            return (
              <div key={i} className="era-card">
                <div className="era-card-header">
                  <span className="era-card-label" style={{ borderColor: color }}>{era.era}</span>
                  <span className="era-card-count" style={{ color }}>{era.count} sự kiện</span>
                </div>
                <div className="era-card-events">
                  {era.events.slice(0, 4).map((e, j) => (
                    <div key={j} className="era-event">
                      <span className="era-event-year">{e.year}</span>
                      <span className="era-event-text">{e.event}</span>
                    </div>
                  ))}
                  {era.events.length > 4 && (
                    <span className="era-event-more">+{era.events.length - 4} sự kiện khác</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* === SECTION 5: Community Stats === */}
      {overview && (overview.totalUsers > 0 || overview.totalQuestions > 0) && (
        <section className="stats-section stagger-6">
          <h2 className="section-title">Cộng đồng</h2>
          <div className="community-cards">
            <div className="community-card">
              <span className="community-value">{overview.totalUsers}</span>
              <span className="community-label">Người dùng</span>
            </div>
            <div className="community-card">
              <span className="community-value">{overview.totalQuestions}</span>
              <span className="community-label">Câu hỏi chatbot</span>
            </div>
            <div className="community-card">
              <span className="community-value">{overview.totalSessions}</span>
              <span className="community-label">Phiên truy cập</span>
            </div>
          </div>
        </section>
      )}

      {/* === SECTION 6: Top Philosophers from Chat === */}
      {topPhilosophers.length > 0 && (
        <section className="stats-section stagger-7">
          <h2 className="section-title">Triết gia được hỏi nhiều nhất</h2>
          <div className="stat-bars">
            {topPhilosophers.map((t, i) => (
              <div key={i} className="stat-bar-row">
                <div className="stat-bar-info">
                  <span className="stat-bar-rank">{i + 1}</span>
                  <span className="stat-bar-name">{t.name}</span>
                  <span className="stat-bar-count">{t.count} lượt</span>
                </div>
                <div className="stat-bar-track">
                  <div className="stat-bar-fill" style={{ width: `${(t.count / maxTopCount) * 100}%`, animationDelay: `${i * 0.08}s` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* === SECTION 7: Hot Questions === */}
      {hotQuestions.length > 0 && (
        <section className="stats-section stagger-8">
          <h2 className="section-title">Câu hỏi thịnh hành</h2>
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
        </section>
      )}

      {/* === SECTION 8: Recent Activity === */}
      {recentActivity && (recentActivity.recentUsers?.length > 0 || recentActivity.recentMessages?.length > 0) && (
        <section className="stats-section stagger-9">
          <h2 className="section-title">Hoạt động gần đây</h2>
          <div className="recent-grid">
            {recentActivity.recentUsers?.length > 0 && (
              <div className="recent-col">
                <h3 className="recent-col-title">Người dùng mới</h3>
                {recentActivity.recentUsers.map((u, i) => (
                  <div key={i} className="recent-user-row">
                    <img src={u.avatar || '/avatar.svg'} alt={u.name} className="recent-avatar" />
                    <div>
                      <span className="recent-user-name">{u.name}</span>
                      <span className="recent-user-time">
                        {u.lastLoginAt ? new Date(u.lastLoginAt).toLocaleDateString('vi-VN', { day: 'numeric', month: 'short', year: 'numeric' }) : ''}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {recentActivity.recentMessages?.length > 0 && (
              <div className="recent-col">
                <h3 className="recent-col-title">Câu hỏi mới nhất</h3>
                {recentActivity.recentMessages.map((m, i) => (
                  <div key={i} className="recent-msg-row">
                    <span className="recent-msg-text">&ldquo;{m.content}&rdquo;</span>
                    {m.topic && <span className="recent-msg-topic">{m.topic}</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

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
          margin-bottom: 1rem;
        }
        .stats-header .page-desc { margin-left: auto; margin-right: auto; text-align: center; }
        .stats-section-desc { font-size: 0.88rem; color: var(--text-muted); margin: -0.5rem 0 1.25rem; }

        /* === Overview Cards === */
        .stats-overview {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
          margin-bottom: 2.5rem;
        }
        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.15rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          transition: all var(--transition-slow);
        }
        .stat-card:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow);
          transform: translateY(-2px);
        }
        .stat-card--accent {
          background: var(--gradient-warm);
          border-color: rgba(197,165,90,0.2);
        }
        .stat-card-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: var(--radius);
          margin-bottom: 0.15rem;
        }
        .stat-card-value {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text);
          line-height: 1.1;
        }
        .stat-card-label {
          font-size: 0.75rem;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        /* === Bar Charts === */
        .stats-section { margin-bottom: 2.5rem; }
        .stat-bars { display: flex; flex-direction: column; gap: 0.6rem; }
        .stat-bar-row {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius);
          padding: 0.75rem 1rem;
          transition: all var(--transition);
        }
        .stat-bar-row:hover { border-color: var(--accent); box-shadow: var(--shadow-xs); }
        .stat-bar-row--link { cursor: pointer; text-decoration: none; color: inherit; display: block; }
        .stat-bar-row--link:hover { transform: translateX(3px); }
        .stat-bar-info {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.4rem;
        }
        .stat-bar-rank {
          font-family: var(--font-serif);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--accent);
          opacity: 0.4;
          min-width: 20px;
        }
        .stat-bar-name { font-weight: 600; font-size: 0.9rem; color: var(--text); flex: 1; }
        .stat-bar-count { font-size: 0.8rem; color: var(--text-muted); font-weight: 500; }
        .stat-bar-badges { display: flex; gap: 0.35rem; }
        .stat-badge {
          font-size: 0.7rem;
          padding: 0.15rem 0.4rem;
          border-radius: var(--radius-sm);
          background: var(--accent-light);
          color: var(--accent);
          font-weight: 600;
        }
        .stat-badge--gold { background: #fef3c7; color: #92400e; }
        .stat-badge--blue { background: #dbeafe; color: #1e40af; }
        .stat-bar-track {
          height: 5px;
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
        @keyframes barGrow { from { width: 0 !important; } }

        /* === School Distribution === */
        .school-dist-grid { display: flex; flex-direction: column; gap: 0.75rem; }
        .school-dist-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius);
          padding: 1rem;
          transition: all var(--transition);
        }
        .school-dist-card:hover { border-color: var(--accent); box-shadow: var(--shadow-xs); }
        .school-dist-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.6rem; }
        .school-dist-icon {
          width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          background: var(--accent-light); color: var(--accent);
          border-radius: var(--radius-sm);
          font-size: 1.15rem; flex-shrink: 0;
        }
        .school-dist-name { font-weight: 600; font-size: 0.92rem; margin: 0; line-height: 1.3; }
        .school-dist-era { font-size: 0.75rem; color: var(--text-light); }
        .school-dist-count {
          margin-left: auto; font-family: var(--font-serif);
          font-size: 1.25rem; font-weight: 700; color: var(--accent);
        }
        .school-dist-bar-track { height: 4px; background: var(--border-light); border-radius: 99px; overflow: hidden; margin-bottom: 0.6rem; }
        .school-dist-bar-fill { height: 100%; background: var(--gradient-accent); border-radius: 99px; animation: barGrow 0.6s ease-out both; }
        .school-dist-philosophers { display: flex; flex-wrap: wrap; gap: 0.35rem; }
        .school-dist-tag {
          font-size: 0.75rem; padding: 0.2rem 0.55rem;
          background: var(--bg-subtle); border: 1px solid var(--border-light);
          border-radius: var(--radius-sm); color: var(--text-muted);
        }

        /* === Era Distribution === */
        .era-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; }
        .era-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.15rem;
          transition: all var(--transition);
        }
        .era-card:hover { border-color: var(--accent); box-shadow: var(--shadow-xs); }
        .era-card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.85rem; }
        .era-card-label {
          font-family: var(--font-serif); font-weight: 700; font-size: 1rem;
          border-left: 3px solid; padding-left: 0.6rem;
        }
        .era-card-count { font-size: 0.82rem; font-weight: 600; }
        .era-card-events { display: flex; flex-direction: column; gap: 0.5rem; }
        .era-event { display: flex; gap: 0.6rem; align-items: flex-start; }
        .era-event-year {
          font-size: 0.72rem; font-weight: 700; color: var(--accent);
          min-width: 70px; flex-shrink: 0; padding-top: 0.1rem;
        }
        .era-event-text { font-size: 0.82rem; color: var(--text-muted); line-height: 1.4; }
        .era-event-more { font-size: 0.78rem; color: var(--text-light); font-style: italic; padding-left: 76px; }

        /* === Community === */
        .community-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.85rem; }
        .community-card {
          background: var(--bg-card); border: 1px solid var(--border-light);
          border-radius: var(--radius-lg); padding: 1.25rem; text-align: center;
          transition: all var(--transition);
        }
        .community-card:hover { border-color: var(--accent); transform: translateY(-2px); box-shadow: var(--shadow); }
        .community-value {
          display: block; font-family: var(--font-serif);
          font-size: 2rem; font-weight: 700; color: var(--accent);
        }
        .community-label { font-size: 0.78rem; color: var(--text-light); text-transform: uppercase; letter-spacing: 0.04em; }

        /* === Questions === */
        .stat-question-list { display: flex; flex-direction: column; gap: 0.6rem; }
        .stat-question-card {
          display: flex; align-items: flex-start; gap: 0.75rem;
          background: var(--bg-card); border: 1px solid var(--border-light);
          border-radius: var(--radius); padding: 0.8rem 1rem;
          transition: all var(--transition);
        }
        .stat-question-card:hover { border-color: var(--accent); box-shadow: var(--shadow-xs); }
        .stat-question-icon {
          width: 28px; height: 28px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: var(--accent-light); color: var(--accent);
          border-radius: var(--radius-sm);
        }
        .stat-question-text { flex: 1; font-size: 0.88rem; font-style: italic; color: var(--text); line-height: 1.5; }
        .stat-question-count { font-size: 0.8rem; color: var(--text-muted); white-space: nowrap; flex-shrink: 0; font-weight: 500; }

        /* === Recent Activity === */
        .recent-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .recent-col-title {
          font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em;
          color: var(--text-light); font-weight: 600; margin-bottom: 0.75rem;
        }
        .recent-user-row {
          display: flex; align-items: center; gap: 0.65rem;
          padding: 0.5rem 0; border-bottom: 1px solid var(--border-light);
        }
        .recent-user-row:last-child { border-bottom: none; }
        .recent-avatar { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; flex-shrink: 0; border: 2px solid var(--border-light); }
        .recent-user-name { display: block; font-size: 0.88rem; font-weight: 500; }
        .recent-user-time { display: block; font-size: 0.75rem; color: var(--text-light); }
        .recent-msg-row {
          padding: 0.5rem 0; border-bottom: 1px solid var(--border-light);
          display: flex; align-items: center; gap: 0.5rem;
        }
        .recent-msg-row:last-child { border-bottom: none; }
        .recent-msg-text { font-size: 0.85rem; font-style: italic; color: var(--text-muted); flex: 1; line-height: 1.4; }
        .recent-msg-topic {
          font-size: 0.7rem; padding: 0.15rem 0.45rem;
          background: var(--accent-light); color: var(--accent);
          border-radius: var(--radius-sm); font-weight: 600; flex-shrink: 0;
        }

        /* === Responsive === */
        @media (max-width: 640px) {
          .stats-overview { grid-template-columns: repeat(2, 1fr); }
          .community-cards { grid-template-columns: 1fr; }
          .recent-grid { grid-template-columns: 1fr; }
          .era-grid { grid-template-columns: 1fr; }
          .stat-bar-badges { display: none; }
        }
        @media (max-width: 380px) {
          .stats-overview { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
