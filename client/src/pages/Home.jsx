import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { quote, philosophers as philApi, schools as schoolsApi, timeline as timelineApi } from '../api';

const FEATURES = [
  { to: '/triet-gia', title: 'Triết gia', desc: 'Socrates, Plato, Aristotle, Kant, Nietzsche, Marcus Aurelius, Khổng Tử, Lão Tử, Descartes, Sartre...', icon: '\u03A6' },
  { to: '/khai-niem', title: 'Khái niệm', desc: 'Ý niệm, đối thoại, logic, bổn phận, siêu nhân, trung đạo, cogito, vô vi, đạo...', icon: '\u2234' },
  { to: '/trac-nghiem', title: 'Trắc nghiệm', desc: '"Bạn thuộc trường phái nào?" — khám phá tính cách triết học.', icon: '?' },
  { to: '/so-sanh', title: 'So sánh tư tưởng', desc: 'Chọn hai triết gia để so sánh quan điểm.', icon: '\u21C4' },
  { to: '/thong-ke', title: 'Thống kê thú vị', desc: 'Triết gia được hỏi nhiều nhất, chủ đề hot...', icon: '#' },
];

const PHILOSOPHER_NAMES = ['Socrates', 'Plato', 'Aristotle', 'Kant', 'Nietzsche', 'Marcus Aurelius', 'Khổng Tử', 'Lão Tử', 'Descartes', 'Sartre'];

const SCHOOL_ICONS = {
  'Triết học Hy Lạp cổ đại': '\u03A6',
  'Khắc kỷ (Stoicism)': '\u2694',
  'Khai sáng Đức': '\u2261',
  'Hiện sinh': '\u221E',
  'Nho giáo': '\u2609',
  'Đạo giáo (Taoism)': '\u262F',
  'Duy lý luận (Rationalism)': '\u222B',
  'Chủ nghĩa Hiện sinh': '\u221E',
};

export default function Home({ user }) {
  const [dailyQuote, setDailyQuote] = useState(null);
  const [philosophers, setPhilosophers] = useState([]);
  const [schoolsList, setSchoolsList] = useState([]);
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      quote.daily().catch(() => ({ quote: null })),
      philApi.list().catch(() => ({ philosophers: [] })),
      schoolsApi.list().catch(() => ({ schools: [] })),
      timelineApi.list().catch(() => ({ timeline: [] })),
    ]).then(([quoteRes, philRes, schoolRes, timelineRes]) => {
      setDailyQuote(quoteRes.quote);
      setPhilosophers((philRes.philosophers || []).slice(0, 5));
      setSchoolsList(schoolRes.schools || []);
      setTimelineData(timelineRes.timeline || []);
      setLoading(false);
    });
  }, []);

  if (loading) return (
    <div className="page">
      <div className="loading-wrap"><div className="loading-spinner" aria-label="Đang tải" /><span className="loading-text">Đang tải...</span></div>
    </div>
  );

  return (
    <div className="page page--wide home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </div>
        <div className="hero-inner">
          <span className="hero-badge">Triết học hiện đại</span>
          <h1 className="hero-title">
            Tư duy sâu sắc,<br />Khám phá bản thân
          </h1>
          <p className="hero-subtitle">
            Khám phá các triết gia vĩ đại, trường phái tư tưởng và khái niệm nền tảng. 
            Chatbot của chúng tôi chỉ trả lời trong phạm vi triết học.
          </p>
          <div className="hero-actions">
            <Link to="/triet-gia" className="btn btn-primary btn-lg">Khám phá triết gia</Link>
            <Link to="/trac-nghiem" className="btn btn-outline btn-lg">Bạn thuộc trường phái nào?</Link>
          </div>
          <div className="hero-names" aria-hidden="true">
            {PHILOSOPHER_NAMES.map((n, i) => (
              <span key={n} className="hero-name" style={{ animationDelay: `${i * 0.15}s` }}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="home-stats-strip stagger-1">
        <div className="home-stat-item">
          <span className="home-stat-num">10</span>
          <span className="home-stat-label">Triết gia</span>
        </div>
        <div className="home-stat-divider" />
        <div className="home-stat-item">
          <span className="home-stat-num">7</span>
          <span className="home-stat-label">Trường phái</span>
        </div>
        <div className="home-stat-divider" />
        <div className="home-stat-item">
          <span className="home-stat-num">35+</span>
          <span className="home-stat-label">Khái niệm</span>
        </div>
        <div className="home-stat-divider" />
        <div className="home-stat-item">
          <span className="home-stat-num">2500+</span>
          <span className="home-stat-label">Năm lịch sử</span>
        </div>
      </section>

      {/* Daily Quote */}
      {dailyQuote && (
        <section className="daily-quote stagger-2">
          <div className="quote-deco" aria-hidden="true">&ldquo;</div>
          <blockquote>
            <p className="quote-text">{dailyQuote.text}</p>
            <footer className="quote-footer">
              — <cite>{dailyQuote.author}</cite>
              <span className="quote-source">
                , <a href={dailyQuote.sourceUrl} target="_blank" rel="noopener noreferrer">{dailyQuote.source}</a>
              </span>
            </footer>
          </blockquote>
        </section>
      )}

      {/* Featured Philosophers */}
      {philosophers.length > 0 && (
        <section className="home-philosophers stagger-3">
          <div className="home-phil-header">
            <h2 className="section-title">Triết gia nổi bật</h2>
            <Link to="/triet-gia" className="btn btn-ghost btn-sm">Xem tất cả &rarr;</Link>
          </div>
          <div className="home-phil-grid">
            {philosophers.map((p, i) => (
              <Link key={p._id} to={`/triet-gia/${p.slug}`} className={`home-phil-card stagger-${i + 3}`}>
                <div className="home-phil-avatar">
                  {p.imageUrl ? (
                    <img src={p.imageUrl} alt={p.imageAlt || p.name} loading="lazy" />
                  ) : (
                    <span className="home-phil-initial" aria-hidden="true">{p.name.charAt(0)}</span>
                  )}
                </div>
                <h3>{p.name}</h3>
                <span className="home-phil-school">{p.school}</span>
                <span className="home-phil-dates">{p.birthDeath}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Schools Section */}
      {schoolsList.length > 0 && (
        <section className="home-schools stagger-4">
          <h2 className="section-title">Các trường phái triết học</h2>
          <p className="home-schools-desc">Bảy trường phái tư tưởng chính được trình bày trong hệ thống.</p>
          <div className="home-schools-grid">
            {schoolsList.map((s, i) => (
              <div key={s.name} className={`home-school-card stagger-${i + 4}`}>
                <div className="home-school-top">
                  <span className="home-school-icon" aria-hidden="true">{SCHOOL_ICONS[s.name] || '\u2022'}</span>
                  <div>
                    <h3>{s.name}</h3>
                    <span className="home-school-era">{s.era}</span>
                  </div>
                </div>
                <p className="home-school-desc">{s.description}</p>
                <div className="home-school-ideas">
                  {s.keyIdeas.slice(0, 3).map(idea => (
                    <span key={idea} className="home-school-tag">{idea}</span>
                  ))}
                </div>
                <div className="home-school-phil">
                  {s.philosophers.slice(0, 3).map(p => (
                    <span key={p} className="home-school-phil-name">{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Timeline */}
      {timelineData.length > 0 && (
        <section className="home-timeline stagger-5">
          <h2 className="section-title">Dòng thời gian triết học</h2>
          <p className="home-timeline-desc">Những mốc quan trọng trong lịch sử tư tưởng nhân loại.</p>
          <div className="timeline-container">
            <div className="timeline-line" aria-hidden="true" />
            {timelineData.map((item, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-card">
                  <span className="timeline-year">{item.year}</span>
                  <p className="timeline-event">{item.event}</p>
                  <span className={`timeline-era ${item.era === 'Cổ đại' ? 'era-ancient' : 'era-modern'}`}>{item.era}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Features */}
      <section className="features stagger-6">
        <h2 className="section-title">Khám phá</h2>
        <div className="feature-grid">
          {FEATURES.map((f, i) => (
            <Link key={f.to} to={f.to} className={`card feature-card stagger-${i + 2}`}>
              <div className="feature-icon" aria-hidden="true">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <span className="feature-arrow" aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="home-cta stagger-7">
        <div className="home-cta-inner">
          <div className="home-cta-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <div>
            <h3>Chatbot Triết học</h3>
            <p>Có thắc mắc? Hãy hỏi trợ lý triết học ở góc phải màn hình. Chatbot chỉ trả lời trong phạm vi triết học.</p>
          </div>
        </div>
      </section>

      <style>{`
        .home.page { max-width: 1100px; padding-top: 0; }

        /* ---- Hero ---- */
        .hero {
          position: relative;
          padding: 4.5rem 0 5rem;
          text-align: center;
          overflow: hidden;
          border-radius: 0 0 var(--radius-2xl) var(--radius-2xl);
          margin: 0 -1.25rem 3rem;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: var(--gradient-hero);
          z-index: 0;
        }
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          animation: float 8s ease-in-out infinite;
        }
        .hero-orb-1 { width: 300px; height: 300px; background: #c5a55a; top: -60px; right: -40px; animation-delay: 0s; }
        .hero-orb-2 { width: 250px; height: 250px; background: #2c5282; bottom: -40px; left: -30px; animation-delay: 2s; }
        .hero-orb-3 { width: 200px; height: 200px; background: #e8dcc4; top: 50%; left: 50%; animation-delay: 4s; }
        @keyframes float {
          0%,100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }

        .hero-inner { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 1rem;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          border-radius: 99px;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--accent);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(44,82,130,0.1);
          animation: fadeInUp 0.6s ease-out both;
        }

        .hero-title {
          font-family: var(--font-serif);
          font-size: clamp(2.2rem, 6vw, 3.5rem);
          font-weight: 600;
          color: var(--text);
          margin: 0 0 1.25rem;
          line-height: 1.15;
          letter-spacing: -0.01em;
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 540px;
          margin: 0 auto 2.25rem;
          line-height: 1.7;
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          animation: fadeInUp 0.6s ease-out 0.3s both;
        }
        .hero-actions .btn { transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
        .hero-actions .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(44,82,130,0.25); }

        .hero-names {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem 1.25rem;
          margin-top: 3rem;
          opacity: 0.4;
        }
        .hero-name {
          font-family: var(--font-serif);
          font-size: 0.95rem;
          font-style: italic;
          color: var(--text-muted);
          animation: fadeIn 0.8s ease-out both;
        }

        /* ---- Stats Strip ---- */
        .home-stats-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.75rem;
          padding: 1.25rem 1.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          margin-bottom: 3rem;
          box-shadow: var(--shadow);
        }
        .home-stat-item { text-align: center; transition: transform 0.2s ease; cursor: default; }
        .home-stat-item:hover { transform: scale(1.05); }
        .home-stat-item:hover .home-stat-num { color: var(--accent-hover); }
        .home-stat-num {
          display: block;
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--accent);
          line-height: 1.1;
        }
        .home-stat-label {
          font-size: 0.75rem;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .home-stat-divider {
          width: 1px;
          height: 36px;
          background: var(--border-light);
          flex-shrink: 0;
        }

        /* ---- Daily Quote ---- */
        .daily-quote {
          position: relative;
          background: var(--gradient-warm);
          border-radius: var(--radius-xl);
          padding: 2rem 2.25rem 2rem 3.5rem;
          margin-bottom: 3.5rem;
          border: 1px solid rgba(197,165,90,0.15);
          box-shadow: var(--shadow);
        }
        .quote-deco {
          position: absolute;
          top: 0.5rem;
          left: 1rem;
          font-family: var(--font-serif);
          font-size: 4.5rem;
          color: var(--accent-gold);
          opacity: 0.3;
          line-height: 1;
          user-select: none;
        }
        .quote-text {
          margin: 0;
          font-size: 1.1rem;
          font-style: italic;
          color: var(--text);
          line-height: 1.7;
        }
        .quote-footer {
          margin-top: 1rem;
          font-style: normal;
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .quote-source a { color: var(--accent-gold); }
        .quote-source a:hover { color: var(--accent); }

        /* ---- Featured Philosophers ---- */
        .home-philosophers { margin-bottom: 3.5rem; }
        .home-phil-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }
        .home-phil-header .section-title { margin-bottom: 0; }
        .home-phil-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        .home-phil-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.5rem 1rem;
          color: var(--text);
          transition: all var(--transition-slow);
          gap: 0.3rem;
        }
        .home-phil-card:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow-md);
          transform: translateY(-4px);
          text-decoration: none;
        }
        .home-phil-avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 0.5rem;
          border: 3px solid var(--border-light);
          flex-shrink: 0;
          transition: border-color var(--transition);
        }
        .home-phil-card:hover .home-phil-avatar { border-color: var(--accent); }
        .home-phil-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .home-phil-initial {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-light);
          color: var(--accent);
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 600;
        }
        .home-phil-card h3 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
        }
        .home-phil-school {
          font-size: 0.75rem;
          color: var(--accent);
          background: var(--accent-light);
          padding: 0.15rem 0.5rem;
          border-radius: 99px;
        }
        .home-phil-dates {
          font-size: 0.75rem;
          color: var(--text-light);
        }

        /* ---- Schools Section ---- */
        .home-schools { margin-bottom: 3.5rem; }
        .home-schools-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin: -0.75rem 0 1.5rem 0;
          padding-left: 1.2rem;
        }
        .home-schools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }
        .home-school-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.35rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          transition: all var(--transition-slow);
        }
        .home-school-card:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow-md);
          transform: translateY(-3px);
        }
        .home-school-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .home-school-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: var(--radius);
          font-size: 1.25rem;
          font-weight: 700;
          flex-shrink: 0;
        }
        .home-school-card h3 {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text);
          line-height: 1.25;
        }
        .home-school-era {
          font-size: 0.75rem;
          color: var(--text-light);
        }
        .home-school-desc {
          margin: 0;
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.55;
        }
        .home-school-ideas {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
        }
        .home-school-tag {
          display: inline-block;
          padding: 0.15rem 0.5rem;
          background: var(--accent-gold-light);
          color: var(--accent-gold);
          border-radius: 99px;
          font-size: 0.7rem;
          font-weight: 500;
        }
        .home-school-phil {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-top: auto;
          padding-top: 0.35rem;
          border-top: 1px solid var(--border-light);
        }
        .home-school-phil-name {
          font-size: 0.78rem;
          color: var(--text-light);
          font-weight: 500;
        }

        /* ---- Timeline ---- */
        .home-timeline { margin-bottom: 3.5rem; }
        .home-timeline-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin: -0.75rem 0 2rem 0;
          padding-left: 1.2rem;
        }
        .timeline-container {
          position: relative;
          padding: 1rem 0;
        }
        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: var(--border);
          transform: translateX(-50%);
        }
        .timeline-item {
          position: relative;
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          width: 50%;
        }
        .timeline-left {
          padding-right: 2rem;
          justify-content: flex-end;
          text-align: right;
        }
        .timeline-right {
          margin-left: 50%;
          padding-left: 2rem;
          text-align: left;
        }
        .timeline-dot {
          position: absolute;
          top: 0.6rem;
          width: 12px;
          height: 12px;
          background: var(--accent);
          border: 3px solid var(--bg);
          border-radius: 50%;
          z-index: 2;
          box-shadow: 0 0 0 2px var(--accent);
        }
        .timeline-left .timeline-dot { right: -6px; }
        .timeline-right .timeline-dot { left: -6px; }

        .timeline-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius);
          padding: 0.85rem 1rem;
          max-width: 380px;
          transition: all var(--transition);
        }
        .timeline-card:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow);
        }
        .timeline-year {
          display: inline-block;
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 0.2rem;
        }
        .timeline-event {
          margin: 0;
          font-size: 0.88rem;
          color: var(--text);
          line-height: 1.5;
        }
        .timeline-era {
          display: inline-block;
          margin-top: 0.35rem;
          padding: 0.1rem 0.45rem;
          border-radius: 99px;
          font-size: 0.68rem;
          font-weight: 500;
        }
        .era-ancient { background: var(--accent-light); color: var(--accent); }
        .era-modern { background: var(--accent-gold-light); color: var(--accent-gold); }

        /* ---- Features ---- */
        .features { margin-top: 1rem; }
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
          gap: 1.25rem;
        }
        .feature-card {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1.5rem;
          min-height: 160px;
        }
        .feature-card:hover { transform: translateY(-5px); }
        .feature-card:hover .feature-arrow { transform: translateX(4px); opacity: 1; }

        .feature-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: var(--radius);
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          flex-shrink: 0;
        }
        .feature-card h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text);
        }
        .feature-card p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.55;
          flex: 1;
        }
        .feature-arrow {
          font-size: 1.1rem;
          color: var(--accent);
          opacity: 0;
          transition: all var(--transition);
          align-self: flex-start;
        }

        /* ---- CTA Banner ---- */
        .home-cta { margin-top: 3rem; }
        .home-cta-inner {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: var(--gradient-dark);
          color: white;
          border-radius: var(--radius-xl);
          padding: 1.75rem 2rem;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .home-cta-inner:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(26,26,46,0.25); }
        .home-cta-icon {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.15);
          border-radius: var(--radius);
          color: white;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .home-cta-inner:hover .home-cta-icon { transform: scale(1.1) rotate(5deg); }
        .home-cta-inner h3 {
          margin: 0 0 0.25rem;
          font-size: 1.1rem;
          font-weight: 600;
        }
        .home-cta-inner p {
          margin: 0;
          font-size: 0.9rem;
          opacity: 0.8;
          line-height: 1.5;
        }

        @media (max-width: 640px) {
          .hero { padding: 3rem 1rem 3.5rem; margin: 0 -1rem 2rem; }
          .hero-title { font-size: 2rem; }
          .hero-names { display: none; }
          .daily-quote { padding: 1.5rem 1.5rem 1.5rem 2.75rem; }
          .home-phil-grid { grid-template-columns: 1fr 1fr; gap: 0.85rem; }
          .home-phil-card { padding: 1.25rem 0.75rem; }
          .home-phil-avatar { width: 56px; height: 56px; }
          .feature-grid { grid-template-columns: 1fr; }
          .home-cta-inner { flex-direction: column; text-align: center; padding: 1.5rem; }
          .home-stats-strip { flex-wrap: wrap; gap: 1rem 1.5rem; }
          .home-stat-divider { display: none; }
          .home-schools-grid { grid-template-columns: 1fr; }
          /* Timeline mobile: all items stack left */
          .timeline-line { left: 20px; }
          .timeline-item,
          .timeline-left,
          .timeline-right {
            width: 100%;
            margin-left: 0;
            padding-left: 3rem;
            padding-right: 0;
            text-align: left;
            justify-content: flex-start;
          }
          .timeline-left .timeline-dot,
          .timeline-right .timeline-dot {
            left: 14px;
            right: auto;
          }
          .timeline-card { max-width: 100%; }
        }
      `}</style>
    </div>
  );
}
