import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { stats as statsApi } from '../api';

export default function Stats() {
  const [tab, setTab] = useState('users');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    Promise.all([
      statsApi.overview(),
      statsApi.engagement(),
      statsApi.quizDistribution(),
      statsApi.chatActivity(),
      statsApi.topPhilosophers(),
      statsApi.hotQuestions(),
      statsApi.recentActivity(),
      statsApi.schoolDistribution(),
      statsApi.eraDistribution(),
      statsApi.philosopherRichness(),
      statsApi.visitorActivity(),
      statsApi.topPages(),
    ]).then(([overview, engagement, quiz, chatAct, topP, hotQ, recent, schoolD, eraD, richness, visitorAct, topPages]) => {
      setData({ overview, engagement, quiz, chatAct, topP, hotQ, recent, schoolD, eraD, richness, visitorAct, topPages });
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="page page--narrow">
      <div className="loading-wrap"><div className="loading-spinner" aria-label="Đang tải" /><span className="loading-text">Đang tải thống kê...</span></div>
    </div>
  );

  const { overview, engagement, quiz, chatAct, topP, hotQ, recent, schoolD, eraD, richness, visitorAct, topPages } = data;

  return (
    <div className="page page--narrow stats-page">
      {/* Header */}
      <div className="stats-header stagger-1">
        <span className="stats-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
        </span>
        <h1 className="page-title">Thống kê</h1>
      </div>

      {/* Tabs */}
      <div className="stats-tabs stagger-2">
        <button type="button" className={`stats-tab ${tab === 'users' ? 'active' : ''}`} onClick={() => setTab('users')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Người dùng
        </button>
        <button type="button" className={`stats-tab ${tab === 'knowledge' ? 'active' : ''}`} onClick={() => setTab('knowledge')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          Kho tri thức
        </button>
      </div>

      {tab === 'users' ? (
        <UsersTab engagement={engagement} overview={overview} quiz={quiz} chatAct={chatAct} topP={topP} hotQ={hotQ} recent={recent} visitorAct={visitorAct} topPages={topPages} />
      ) : (
        <KnowledgeTab overview={overview} schoolD={schoolD} eraD={eraD} richness={richness} />
      )}

      <style>{STYLES}</style>
    </div>
  );
}

// Human-readable page names for Vietnamese paths
const PAGE_NAMES = {
  '/': 'Trang chủ',
  '/triet-gia': 'Danh sách triết gia',
  '/khai-niem': 'Khái niệm',
  '/bai-hoc': 'Bài học',
  '/dashboard': 'Dashboard',
  '/trac-nghiem': 'Trắc nghiệm',
  '/so-sanh': 'So sánh triết gia',
  '/thong-ke': 'Thống kê',
};

/* ========================= TAB: NGƯỜI DÙNG ========================= */
function UsersTab({ engagement, overview, quiz, chatAct, topP, hotQ, recent, visitorAct, topPages }) {
  const maxTopCount = topP?.topics?.length > 0 ? Math.max(...topP.topics.map(t => t.count)) : 1;
  const maxQuiz = quiz?.distribution?.length > 0 ? Math.max(...quiz.distribution.map(d => d.count)) : 1;
  const maxPageViews = topPages?.pages?.length > 0 ? Math.max(...topPages.pages.map(p => p.views)) : 1;

  return (
    <div className="stats-tab-content">
      {/* Visitor Overview - NEW */}
      {overview && (
        <div className="stats-overview stagger-3">
          <div className="stat-card stat-card--visitor">
            <span className="stat-card-value">{overview.totalPageViews ?? 0}</span>
            <span className="stat-card-label">Tổng lượt xem</span>
          </div>
          <div className="stat-card stat-card--visitor">
            <span className="stat-card-value">{overview.uniqueVisitorsTotal ?? 0}</span>
            <span className="stat-card-label">Khách truy cập</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-value">{overview.uniqueVisitorsToday ?? 0}</span>
            <span className="stat-card-label">Khách hôm nay</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-value">{overview.todayPageViews ?? 0}</span>
            <span className="stat-card-label">Lượt xem hôm nay</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-value">{overview.uniqueVisitorsWeek ?? 0}</span>
            <span className="stat-card-label">Khách 7 ngày</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-value">{overview.weekPageViews ?? 0}</span>
            <span className="stat-card-label">Lượt xem 7 ngày</span>
          </div>
        </div>
      )}

      {/* Engagement overview */}
      {engagement && (
        <div className="stats-overview stagger-4">
          <div className="stat-card stat-card--accent">
            <span className="stat-card-value">{engagement.totalUsers}</span>
            <span className="stat-card-label">Tài khoản đăng ký</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-value">{engagement.activeToday}</span>
            <span className="stat-card-label">Đăng nhập hôm nay</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-value">{engagement.activeWeek}</span>
            <span className="stat-card-label">Đăng nhập 7 ngày</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-value">{overview?.totalQuestions ?? 0}</span>
            <span className="stat-card-label">Câu hỏi chatbot</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-value">{overview?.totalSessions ?? 0}</span>
            <span className="stat-card-label">Tổng phiên</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-value">{engagement.avgVisits}</span>
            <span className="stat-card-label">TB lượt truy cập</span>
          </div>
        </div>
      )}

      {/* Visitor Activity Timeline - NEW */}
      {visitorAct?.activity?.length > 0 && (
        <section className="stats-section stagger-5">
          <h2 className="section-title">Lượt truy cập — 30 ngày gần nhất</h2>
          <div className="chat-activity-chart">
            {visitorAct.activity.map((a, i) => {
              const max = Math.max(...visitorAct.activity.map(x => x.views));
              const h = max > 0 ? (a.views / max) * 100 : 0;
              return (
                <div key={i} className="chat-bar-col" title={`${a.date}: ${a.views} lượt xem, ${a.visitors} khách`}>
                  <div className="chat-bar chat-bar--visitor" style={{ height: `${Math.max(h, 4)}%`, animationDelay: `${i * 0.03}s` }} />
                  {i % 5 === 0 && <span className="chat-bar-label">{a.date.slice(5)}</span>}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Top Pages - NEW */}
      {topPages?.pages?.length > 0 && (
        <section className="stats-section stagger-6">
          <h2 className="section-title">Trang được xem nhiều nhất</h2>
          <div className="stat-bars">
            {topPages.pages.map((p, i) => (
              <div key={i} className="stat-bar-row">
                <div className="stat-bar-info">
                  <span className="stat-bar-rank">{i + 1}</span>
                  <span className="stat-bar-name">{PAGE_NAMES[p.page] || p.page}</span>
                  <span className="stat-bar-count">{p.views} lượt xem · {p.visitors} khách</span>
                </div>
                <div className="stat-bar-track">
                  <div className="stat-bar-fill stat-bar-fill--visitor" style={{ width: `${(p.views / maxPageViews) * 100}%`, animationDelay: `${i * 0.08}s` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Quiz Distribution */}
      {quiz && quiz.totalQuizzes > 0 && (
        <section className="stats-section stagger-4">
          <h2 className="section-title">Kết quả trắc nghiệm — Trường phái phổ biến</h2>
          <p className="stats-section-desc">Phân bố trường phái triết học qua {quiz.totalQuizzes} lượt làm bài.</p>
          <div className="quiz-dist-grid">
            {quiz.distribution.map((d, i) => (
              <div key={i} className="quiz-dist-card">
                <div className="quiz-dist-header">
                  <span className="quiz-dist-name">{d.school}</span>
                  <span className="quiz-dist-pct">{d.percent}%</span>
                </div>
                <div className="stat-bar-track">
                  <div className="stat-bar-fill stat-bar-fill--quiz" style={{ width: `${(d.count / maxQuiz) * 100}%`, animationDelay: `${i * 0.08}s` }} />
                </div>
                <span className="quiz-dist-count">{d.count} lượt</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Chat Activity Timeline */}
      {chatAct?.activity?.length > 0 && (
        <section className="stats-section stagger-5">
          <h2 className="section-title">Hoạt động chatbot — 30 ngày gần nhất</h2>
          <div className="chat-activity-chart">
            {chatAct.activity.map((a, i) => {
              const max = Math.max(...chatAct.activity.map(x => x.count));
              const h = max > 0 ? (a.count / max) * 100 : 0;
              return (
                <div key={i} className="chat-bar-col" title={`${a.date}: ${a.count} câu hỏi`}>
                  <div className="chat-bar" style={{ height: `${Math.max(h, 4)}%`, animationDelay: `${i * 0.03}s` }} />
                  {i % 5 === 0 && <span className="chat-bar-label">{a.date.slice(5)}</span>}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Top Philosophers from Chat */}
      {topP?.topics?.length > 0 && (
        <section className="stats-section stagger-6">
          <h2 className="section-title">Triết gia được hỏi nhiều nhất</h2>
          <div className="stat-bars">
            {topP.topics.map((t, i) => (
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

      {/* Hot Questions */}
      {hotQ?.questions?.length > 0 && (
        <section className="stats-section stagger-7">
          <h2 className="section-title">Câu hỏi thịnh hành</h2>
          <div className="stat-question-list">
            {hotQ.questions.map((q, i) => (
              <div key={i} className="stat-question-card">
                <span className="stat-question-rank">{i + 1}</span>
                <span className="stat-question-text">&ldquo;{q.text}&rdquo;</span>
                <span className="stat-question-count">{q.count} lần</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Top chatters */}
      {engagement?.topChatters?.length > 0 && (
        <section className="stats-section stagger-8">
          <h2 className="section-title">Người dùng tích cực nhất</h2>
          <div className="top-chatters">
            {engagement.topChatters.map((u, i) => (
              <div key={i} className="chatter-row">
                <span className="chatter-rank">{i + 1}</span>
                <img src={u.avatar || '/avatar.svg'} alt={u.name} className="chatter-avatar" />
                <span className="chatter-name">{u.name}</span>
                <span className="chatter-count">{u.count} câu hỏi</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Recent Activity */}
      {recent && (recent.recentUsers?.length > 0 || recent.recentMessages?.length > 0) && (
        <section className="stats-section stagger-9">
          <h2 className="section-title">Hoạt động gần đây</h2>
          <div className="recent-grid">
            {recent.recentUsers?.length > 0 && (
              <div className="recent-col">
                <h3 className="recent-col-title">Đăng nhập gần đây</h3>
                {recent.recentUsers.map((u, i) => (
                  <div key={i} className="recent-user-row">
                    <img src={u.avatar || '/avatar.svg'} alt={u.name} className="recent-avatar" />
                    <div>
                      <span className="recent-user-name">{u.name}</span>
                      <span className="recent-user-time">
                        {u.lastLoginAt ? new Date(u.lastLoginAt).toLocaleDateString('vi-VN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : ''}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {recent.recentMessages?.length > 0 && (
              <div className="recent-col">
                <h3 className="recent-col-title">Câu hỏi mới nhất</h3>
                {recent.recentMessages.map((m, i) => (
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

      {/* Empty state khi chưa có data */}
      {(!engagement || engagement.totalUsers === 0) && (!topP?.topics?.length) && (!quiz?.totalQuizzes) && (
        <div className="empty-state stagger-3">
          <div className="empty-icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          </div>
          <h3>Chưa có nhiều dữ liệu</h3>
          <p>Hãy đăng nhập, chat với trợ lý triết học và làm trắc nghiệm để thấy thống kê tại đây!</p>
          <div className="empty-actions">
            <Link to="/trac-nghiem" className="btn btn-primary">Làm trắc nghiệm</Link>
          </div>
        </div>
      )}
    </div>
  );
}

/* ========================= TAB: KHO TRI THỨC ========================= */
function KnowledgeTab({ overview, schoolD, eraD, richness }) {
  const maxRichness = richness?.richness?.length > 0 ? Math.max(...richness.richness.map(r => r.total)) : 1;
  const maxSchool = schoolD?.distribution?.length > 0 ? Math.max(...schoolD.distribution.map(s => s.count)) : 1;
  const items = richness?.richness || [];
  const schools = schoolD?.distribution || [];
  const eras = eraD?.eras || [];

  return (
    <div className="stats-tab-content">
      {/* Content Overview */}
      {overview && (
        <div className="stats-overview stagger-3">
          <div className="stat-card stat-card--accent">
            <span className="stat-card-value">{overview.totalPhilosophers}</span>
            <span className="stat-card-label">Triết gia</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-value">{overview.totalSchools}</span>
            <span className="stat-card-label">Trường phái</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-value">{overview.totalConcepts}</span>
            <span className="stat-card-label">Khái niệm</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-value">{overview.totalQuotes}</span>
            <span className="stat-card-label">Trích dẫn</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-value">{overview.totalWorks}</span>
            <span className="stat-card-label">Tác phẩm</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-value">{overview.totalTimelineEvents}</span>
            <span className="stat-card-label">Sự kiện lịch sử</span>
          </div>
        </div>
      )}

      {/* Philosopher Richness */}
      {items.length > 0 && (
        <section className="stats-section stagger-4">
          <h2 className="section-title">Độ phong phú tri thức theo triết gia</h2>
          <p className="stats-section-desc">Tổng khái niệm, trích dẫn và tác phẩm trong kho dữ liệu.</p>
          <div className="stat-bars">
            {items.map((p, i) => (
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
        </section>
      )}

      {/* School Distribution */}
      {schools.length > 0 && (
        <section className="stats-section stagger-5">
          <h2 className="section-title">Phân bố trường phái triết học</h2>
          <div className="school-dist-grid">
            {schools.map((s, i) => (
              <div key={i} className="school-dist-card">
                <div className="school-dist-header">
                  <span className="school-dist-icon" aria-hidden="true">{s.icon}</span>
                  <div>
                    <h3 className="school-dist-name">{s.name}</h3>
                    <span className="school-dist-era">{s.era}</span>
                  </div>
                  <span className="school-dist-count">{s.count}</span>
                </div>
                <div className="stat-bar-track" style={{ marginBottom: '0.5rem' }}>
                  <div className="stat-bar-fill" style={{ width: `${(s.count / maxSchool) * 100}%`, animationDelay: `${i * 0.08}s` }} />
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
      )}

      {/* Era Distribution */}
      {eras.length > 0 && (
        <section className="stats-section stagger-6">
          <h2 className="section-title">Sự kiện theo thời kỳ</h2>
          <div className="era-grid">
            {eras.map((era, i) => {
              const colors = ['var(--accent)', '#e67e22', '#27ae60'];
              return (
                <div key={i} className="era-card">
                  <div className="era-card-header">
                    <span className="era-card-label" style={{ borderColor: colors[i % 3] }}>{era.era}</span>
                    <span className="era-card-count" style={{ color: colors[i % 3] }}>{era.count} sự kiện</span>
                  </div>
                  <div className="era-card-events">
                    {era.events.slice(0, 4).map((e, j) => (
                      <div key={j} className="era-event">
                        <span className="era-event-year">{e.year}</span>
                        <span className="era-event-text">{e.event}</span>
                      </div>
                    ))}
                    {era.events.length > 4 && <span className="era-event-more">+{era.events.length - 4} sự kiện khác</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

/* ========================= STYLES ========================= */
const STYLES = `
  .stats-page .page-title { margin-bottom: 0.35rem; }
  .stats-header { text-align: center; margin-bottom: 1.25rem; }
  .stats-icon {
    display: inline-flex; align-items: center; justify-content: center;
    width: 56px; height: 56px; background: var(--accent-light); color: var(--accent);
    border-radius: var(--radius-lg); margin-bottom: 1rem;
  }
  .stats-section-desc { font-size: 0.86rem; color: var(--text-muted); margin: -0.5rem 0 1.25rem; }

  /* === Tabs === */
  .stats-tabs {
    display: flex; gap: 0.5rem; margin-bottom: 2rem;
    border-bottom: 2px solid var(--border-light); padding-bottom: 0;
  }
  .stats-tab {
    display: inline-flex; align-items: center; gap: 0.45rem;
    padding: 0.65rem 1.25rem; border: none; background: none;
    font-family: inherit; font-size: 0.92rem; font-weight: 500;
    color: var(--text-muted); cursor: pointer;
    border-bottom: 2px solid transparent; margin-bottom: -2px;
    transition: all var(--transition);
  }
  .stats-tab:hover { color: var(--accent); }
  .stats-tab.active {
    color: var(--accent); font-weight: 600;
    border-bottom-color: var(--accent);
  }
  .stats-tab svg { flex-shrink: 0; }

  /* === Overview Cards === */
  .stats-overview {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem; margin-bottom: 2.5rem;
  }
  .stat-card {
    background: var(--bg-card); border: 1px solid var(--border-light);
    border-radius: var(--radius-lg); padding: 1.1rem; text-align: center;
    display: flex; flex-direction: column; align-items: center; gap: 0.2rem;
    transition: all var(--transition-slow);
  }
  .stat-card:hover { border-color: var(--accent); box-shadow: var(--shadow); transform: translateY(-2px); }
  .stat-card--accent { background: var(--gradient-warm); border-color: rgba(197,165,90,0.2); }
  .stat-card--visitor { background: linear-gradient(135deg, #e0f2fe, #f0f9ff); border-color: rgba(56,189,248,0.2); }
  .stat-bar-fill--visitor { background: linear-gradient(135deg, #0ea5e9, #38bdf8); }
  .chat-bar--visitor { background: linear-gradient(to top, #0ea5e9, #38bdf8) !important; }
  .stat-card-value { font-family: var(--font-serif); font-size: 1.75rem; font-weight: 700; color: var(--text); line-height: 1.1; }
  .stat-card-label { font-size: 0.72rem; color: var(--text-light); text-transform: uppercase; letter-spacing: 0.04em; }

  /* === Bar Charts === */
  .stats-section { margin-bottom: 2.5rem; }
  .stat-bars { display: flex; flex-direction: column; gap: 0.55rem; }
  .stat-bar-row {
    background: var(--bg-card); border: 1px solid var(--border-light);
    border-radius: var(--radius); padding: 0.7rem 0.9rem; transition: all var(--transition);
  }
  .stat-bar-row:hover { border-color: var(--accent); box-shadow: var(--shadow-xs); }
  .stat-bar-row--link { cursor: pointer; text-decoration: none; color: inherit; display: block; }
  .stat-bar-row--link:hover { transform: translateX(3px); }
  .stat-bar-info { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem; }
  .stat-bar-rank { font-family: var(--font-serif); font-size: 0.9rem; font-weight: 700; color: var(--accent); opacity: 0.4; min-width: 18px; }
  .stat-bar-name { font-weight: 600; font-size: 0.88rem; color: var(--text); flex: 1; }
  .stat-bar-count { font-size: 0.78rem; color: var(--text-muted); font-weight: 500; }
  .stat-bar-badges { display: flex; gap: 0.3rem; }
  .stat-badge { font-size: 0.68rem; padding: 0.1rem 0.35rem; border-radius: var(--radius-sm); background: var(--accent-light); color: var(--accent); font-weight: 600; }
  .stat-badge--gold { background: #fef3c7; color: #92400e; }
  .stat-badge--blue { background: #dbeafe; color: #1e40af; }
  .stat-bar-track { height: 5px; background: var(--border-light); border-radius: 99px; overflow: hidden; }
  .stat-bar-fill { height: 100%; background: var(--gradient-accent); border-radius: 99px; animation: barGrow 0.6s ease-out both; }
  .stat-bar-fill--quiz { background: linear-gradient(135deg, #667eea, #764ba2); }
  @keyframes barGrow { from { width: 0 !important; } }

  /* === Quiz Distribution === */
  .quiz-dist-grid { display: flex; flex-direction: column; gap: 0.6rem; }
  .quiz-dist-card {
    background: var(--bg-card); border: 1px solid var(--border-light);
    border-radius: var(--radius); padding: 0.75rem 0.9rem; transition: all var(--transition);
  }
  .quiz-dist-card:hover { border-color: var(--accent); }
  .quiz-dist-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem; }
  .quiz-dist-name { font-weight: 600; font-size: 0.9rem; }
  .quiz-dist-pct { font-family: var(--font-serif); font-weight: 700; font-size: 1.1rem; color: #764ba2; }
  .quiz-dist-count { font-size: 0.75rem; color: var(--text-light); margin-top: 0.25rem; }

  /* === Chat Activity Chart === */
  .chat-activity-chart {
    display: flex; align-items: flex-end; gap: 2px; height: 120px;
    background: var(--bg-card); border: 1px solid var(--border-light);
    border-radius: var(--radius-lg); padding: 1rem 0.75rem 1.75rem;
    overflow-x: auto;
  }
  .chat-bar-col { flex: 1; min-width: 8px; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%; position: relative; }
  .chat-bar {
    width: 100%; background: var(--gradient-accent); border-radius: 3px 3px 0 0;
    min-height: 2px; animation: barGrow 0.4s ease-out both;
  }
  .chat-bar-label {
    position: absolute; bottom: -18px; font-size: 0.6rem; color: var(--text-light);
    white-space: nowrap; transform: rotate(-30deg); transform-origin: top left;
  }

  /* === School Distribution === */
  .school-dist-grid { display: flex; flex-direction: column; gap: 0.7rem; }
  .school-dist-card {
    background: var(--bg-card); border: 1px solid var(--border-light);
    border-radius: var(--radius); padding: 0.9rem; transition: all var(--transition);
  }
  .school-dist-card:hover { border-color: var(--accent); box-shadow: var(--shadow-xs); }
  .school-dist-header { display: flex; align-items: center; gap: 0.7rem; margin-bottom: 0.5rem; }
  .school-dist-icon {
    width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;
    background: var(--accent-light); color: var(--accent); border-radius: var(--radius-sm);
    font-size: 1.1rem; flex-shrink: 0;
  }
  .school-dist-name { font-weight: 600; font-size: 0.9rem; margin: 0; line-height: 1.3; }
  .school-dist-era { font-size: 0.72rem; color: var(--text-light); }
  .school-dist-count { margin-left: auto; font-family: var(--font-serif); font-size: 1.2rem; font-weight: 700; color: var(--accent); }
  .school-dist-philosophers { display: flex; flex-wrap: wrap; gap: 0.3rem; }
  .school-dist-tag { font-size: 0.72rem; padding: 0.15rem 0.45rem; background: var(--bg-subtle); border: 1px solid var(--border-light); border-radius: var(--radius-sm); color: var(--text-muted); }

  /* === Era Distribution === */
  .era-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.9rem; }
  .era-card { background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 1rem; transition: all var(--transition); }
  .era-card:hover { border-color: var(--accent); box-shadow: var(--shadow-xs); }
  .era-card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; }
  .era-card-label { font-family: var(--font-serif); font-weight: 700; font-size: 0.95rem; border-left: 3px solid; padding-left: 0.5rem; }
  .era-card-count { font-size: 0.8rem; font-weight: 600; }
  .era-card-events { display: flex; flex-direction: column; gap: 0.4rem; }
  .era-event { display: flex; gap: 0.5rem; align-items: flex-start; }
  .era-event-year { font-size: 0.7rem; font-weight: 700; color: var(--accent); min-width: 65px; flex-shrink: 0; }
  .era-event-text { font-size: 0.8rem; color: var(--text-muted); line-height: 1.35; }
  .era-event-more { font-size: 0.75rem; color: var(--text-light); font-style: italic; padding-left: 71px; }

  /* === Top Chatters === */
  .top-chatters { display: flex; flex-direction: column; gap: 0.5rem; }
  .chatter-row {
    display: flex; align-items: center; gap: 0.65rem;
    background: var(--bg-card); border: 1px solid var(--border-light);
    border-radius: var(--radius); padding: 0.65rem 0.85rem; transition: all var(--transition);
  }
  .chatter-row:hover { border-color: var(--accent); }
  .chatter-rank { font-family: var(--font-serif); font-weight: 700; color: var(--accent); opacity: 0.5; min-width: 18px; }
  .chatter-avatar { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-light); flex-shrink: 0; }
  .chatter-name { font-weight: 500; font-size: 0.9rem; flex: 1; }
  .chatter-count { font-size: 0.8rem; color: var(--text-muted); font-weight: 500; }

  /* === Questions === */
  .stat-question-list { display: flex; flex-direction: column; gap: 0.5rem; }
  .stat-question-card {
    display: flex; align-items: flex-start; gap: 0.6rem;
    background: var(--bg-card); border: 1px solid var(--border-light);
    border-radius: var(--radius); padding: 0.75rem 0.9rem; transition: all var(--transition);
  }
  .stat-question-card:hover { border-color: var(--accent); }
  .stat-question-rank { font-family: var(--font-serif); font-weight: 700; color: var(--accent); opacity: 0.4; min-width: 18px; flex-shrink: 0; }
  .stat-question-text { flex: 1; font-size: 0.86rem; font-style: italic; color: var(--text); line-height: 1.45; }
  .stat-question-count { font-size: 0.78rem; color: var(--text-muted); white-space: nowrap; flex-shrink: 0; font-weight: 500; }

  /* === Recent Activity === */
  .recent-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
  .recent-col-title { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-light); font-weight: 600; margin-bottom: 0.6rem; }
  .recent-user-row { display: flex; align-items: center; gap: 0.6rem; padding: 0.45rem 0; border-bottom: 1px solid var(--border-light); }
  .recent-user-row:last-child { border-bottom: none; }
  .recent-avatar { width: 30px; height: 30px; border-radius: 50%; object-fit: cover; flex-shrink: 0; border: 2px solid var(--border-light); }
  .recent-user-name { display: block; font-size: 0.86rem; font-weight: 500; }
  .recent-user-time { display: block; font-size: 0.72rem; color: var(--text-light); }
  .recent-msg-row { padding: 0.45rem 0; border-bottom: 1px solid var(--border-light); display: flex; align-items: center; gap: 0.45rem; }
  .recent-msg-row:last-child { border-bottom: none; }
  .recent-msg-text { font-size: 0.83rem; font-style: italic; color: var(--text-muted); flex: 1; line-height: 1.35; }
  .recent-msg-topic { font-size: 0.68rem; padding: 0.12rem 0.4rem; background: var(--accent-light); color: var(--accent); border-radius: var(--radius-sm); font-weight: 600; flex-shrink: 0; }

  /* === Empty State === */
  .empty-state { text-align: center; padding: 3rem 1rem; }
  .empty-state h3 { font-family: var(--font-serif); margin: 0.75rem 0 0.35rem; }
  .empty-state p { color: var(--text-muted); margin-bottom: 1.25rem; }
  .empty-actions { display: flex; justify-content: center; gap: 0.75rem; }

  /* === Responsive === */
  @media (max-width: 640px) {
    .stats-overview { grid-template-columns: repeat(2, 1fr); }
    .recent-grid { grid-template-columns: 1fr; }
    .era-grid { grid-template-columns: 1fr; }
    .stat-bar-badges { display: none; }
    .stats-tabs { gap: 0; }
    .stats-tab { padding: 0.55rem 0.85rem; font-size: 0.85rem; }
  }
  @media (max-width: 380px) {
    .stats-overview { grid-template-columns: 1fr; }
  }
`;
