import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { user as userApi, auth } from '../api';

export default function Dashboard({ user }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    userApi.profile().then(p => {
      setProfile(p);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [user]);

  if (!user) {
    return (
      <div className="page page--narrow">
        <div className="dash-login-prompt">
          <div className="dash-login-icon" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h2>Chào mừng bạn!</h2>
          <p>Vui lòng đăng nhập để xem dashboard cá nhân.</p>
          <a href={auth.loginUrl()} className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Đăng nhập bằng Google
          </a>
        </div>
      </div>
    );
  }

  const QUICK_ACTIONS = [
    { to: '/triet-gia', icon: '\u03A6', title: 'Triết gia', desc: 'Khám phá các triết gia vĩ đại' },
    { to: '/khai-niem', icon: '\u2234', title: 'Khái niệm', desc: 'Tìm hiểu khái niệm triết học' },
    { to: '/trac-nghiem', icon: '?', title: 'Trắc nghiệm', desc: 'Bạn thuộc trường phái nào?' },
    { to: '/so-sanh', icon: '\u21C4', title: 'So sánh', desc: 'So sánh hai triết gia' },
  ];

  return (
    <div className="page page--narrow dash-page">
      {/* Profile header card */}
      <div className="dash-profile stagger-1">
        <div className="dash-profile-bg" aria-hidden="true" />
        <div className="dash-profile-content">
          <div className="dash-avatar-wrap">
            <img src={user.avatar || '/avatar.svg'} alt={user.name} className="dash-avatar" />
            <span className="dash-avatar-badge" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
            </span>
          </div>
          <div className="dash-user-info">
            <h1>{user.name}</h1>
            {profile && profile.email && <p className="dash-email">{profile.email}</p>}
          </div>
        </div>
      </div>

      {loading && (
        <div className="loading-wrap" style={{ minHeight: '120px' }}><div className="loading-spinner" aria-label="Đang tải" /></div>
      )}

      {/* Stats row */}
      {profile && (
        <div className="dash-stats stagger-2">
          <div className="dash-stat">
            <span className="dash-stat-value">{profile.visitCount ?? 0}</span>
            <span className="dash-stat-label">Lần truy cập</span>
          </div>
          <div className="dash-stat">
            <span className="dash-stat-value">{profile.sessionCount ?? 0}</span>
            <span className="dash-stat-label">Phiên hoạt động</span>
          </div>
          <div className="dash-stat">
            <span className="dash-stat-value">
              {profile.lastLoginAt ? new Date(profile.lastLoginAt).toLocaleDateString('vi-VN') : '--'}
            </span>
            <span className="dash-stat-label">Đăng nhập gần nhất</span>
          </div>
        </div>
      )}

      {/* Quick actions */}
      <section className="dash-actions stagger-3">
        <h2 className="section-title">Khám phá nhanh</h2>
        <div className="dash-action-grid">
          {QUICK_ACTIONS.map((item, i) => (
            <Link key={item.to} to={item.to} className={`dash-action-card stagger-${i + 3}`}>
              <span className="dash-action-icon" aria-hidden="true">{item.icon}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <span className="dash-action-arrow" aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .dash-page { padding-top: 1.5rem; }

        /* Login prompt */
        .dash-login-prompt {
          text-align: center;
          padding: 3.5rem 1.5rem;
          background: var(--gradient-warm);
          border-radius: var(--radius-xl);
          border: 1px solid rgba(197,165,90,0.15);
        }
        .dash-login-icon {
          width: 72px;
          height: 72px;
          margin: 0 auto 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: 50%;
        }
        .dash-login-prompt h2 {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          margin: 0 0 0.5rem;
        }
        .dash-login-prompt p {
          color: var(--text-muted);
          margin: 0 0 1.5rem;
        }

        /* Profile card */
        .dash-profile {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          margin-bottom: 1.75rem;
        }
        .dash-profile-bg {
          position: absolute;
          inset: 0;
          background: var(--gradient-hero);
          z-index: 0;
        }
        .dash-profile-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 2rem;
        }

        /* Avatar */
        .dash-avatar-wrap { position: relative; flex-shrink: 0; }
        .dash-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid rgba(255,255,255,0.8);
          box-shadow: var(--shadow-md);
        }
        .dash-avatar-badge {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 22px;
          height: 22px;
          background: #48bb78;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
        }

        .dash-user-info h1 {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 0.15rem;
          color: var(--text);
        }
        .dash-email {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin: 0;
        }

        /* Stats row */
        .dash-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }
        .dash-stat {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius);
          padding: 1rem;
          text-align: center;
          transition: all var(--transition);
        }
        .dash-stat:hover { border-color: var(--accent); box-shadow: var(--shadow-xs); }
        .dash-stat-value {
          display: block;
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 0.15rem;
        }
        .dash-stat-label {
          font-size: 0.78rem;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        /* Quick actions */
        .dash-actions { margin-top: 0.5rem; }
        .dash-action-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
        }
        .dash-action-card {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius);
          padding: 1rem 1.15rem;
          color: var(--text);
          transition: all var(--transition-slow);
        }
        .dash-action-card:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow);
          transform: translateY(-2px);
          text-decoration: none;
        }
        .dash-action-card:hover .dash-action-arrow { transform: translateX(3px); opacity: 1; }
        .dash-action-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: var(--radius-sm);
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 600;
        }
        .dash-action-card h3 {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 600;
        }
        .dash-action-card p {
          margin: 0;
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.35;
        }
        .dash-action-arrow {
          margin-left: auto;
          color: var(--accent);
          opacity: 0;
          transition: all var(--transition);
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .dash-profile-content { flex-direction: column; text-align: center; padding: 1.5rem; }
          .dash-stats { grid-template-columns: 1fr; }
          .dash-action-grid { grid-template-columns: 1fr; }
          .dash-avatar { width: 64px; height: 64px; }
        }
      `}</style>
    </div>
  );
}
