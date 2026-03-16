import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../api';

export default function Layout({ user, loading, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Header shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { to: '/', label: 'Trang chủ' },
    { to: '/triet-gia', label: 'Nhà tư tưởng' },
    { to: '/khai-niem', label: 'Khái niệm' },
    { to: '/bai-hoc', label: 'Bài học' },
    { to: '/trac-nghiem', label: 'Trắc nghiệm' },
    { to: '/so-sanh', label: 'So sánh' },
    { to: '/thong-ke', label: 'Thống kê' },
  ];

  const navLinks = (
    <>
      {navItems.map(item => (
        <Link
          key={item.to}
          to={item.to}
          className={`nav-link ${isActive(item.to) ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          {item.label}
          {isActive(item.to) && <span className="nav-indicator" />}
        </Link>
      ))}
      {user ? (
        <>
          <Link
            to="/dashboard"
            className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
            {isActive('/dashboard') && <span className="nav-indicator" />}
          </Link>
          <div className="user-menu">
            <img src={user.avatar || '/avatar.svg'} alt={user.name} className="avatar-small" />
            <span className="user-name">{user.name}</span>
            <button type="button" className="btn-logout" onClick={() => { onLogout(); setMenuOpen(false); }}>Thoát</button>
          </div>
        </>
      ) : (
        <a href={auth.loginUrl()} className="btn-login">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Đăng nhập
        </a>
      )}
    </>
  );

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <span className="logo-icon" aria-hidden="true">{'\u2692'}</span>
            <div className="logo-text-wrap">
              <span className="logo-text">KTCT Mác-Lênin</span>
              <span className="logo-sub">Kinh tế chính trị & Triết học</span>
            </div>
          </Link>
          <nav className="nav nav-desktop">{navLinks}</nav>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={menuOpen}
          >
            <span className="hamburger" data-open={menuOpen} />
            <span className="hamburger" data-open={menuOpen} />
            <span className="hamburger" data-open={menuOpen} />
          </button>
        </div>
        {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
        <nav className={`nav nav-mobile ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
          {navLinks}
        </nav>
      </header>

      <style>{`
        .site-header {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid transparent;
          position: sticky;
          top: 0;
          z-index: 50;
          transition: border-color var(--transition), box-shadow var(--transition);
        }
        .site-header.scrolled {
          border-bottom-color: var(--border-light);
          box-shadow: 0 4px 20px rgba(44,82,130,0.06);
        }
        .header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.25rem;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        /* Logo */
        .logo {
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-shrink: 0;
        }
        .logo:hover { text-decoration: none; }
        .logo-icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-accent);
          color: white;
          border-radius: var(--radius-sm);
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 600;
          flex-shrink: 0;
          transition: transform var(--transition);
        }
        .logo:hover .logo-icon { transform: scale(1.05); }
        .logo-text-wrap { display: flex; flex-direction: column; gap: 0; }
        .logo-text {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          line-height: 1.2;
          transition: color var(--transition);
        }
        .logo-sub {
          font-size: 0.65rem;
          color: var(--text-light);
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          line-height: 1;
        }
        .logo:hover .logo-text { color: var(--accent); }

        /* Nav */
        .nav { display: flex; align-items: center; gap: 0.25rem; }
        .nav-link {
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.9rem;
          padding: 0.4rem 0.75rem;
          border-radius: var(--radius-sm);
          transition: all var(--transition);
          position: relative;
          white-space: nowrap;
        }
        .nav-link:hover { color: var(--accent); background: var(--accent-light); text-decoration: none; }
        .nav-link.active {
          color: var(--accent);
          background: var(--accent-light);
          font-weight: 600;
        }

        /* Active indicator underline */
        .nav-indicator {
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 2px;
          background: var(--accent);
          border-radius: 99px;
          animation: scaleIn 0.2s ease-out;
        }

        /* User menu */
        .avatar-small {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--border-light);
          flex-shrink: 0;
          transition: border-color var(--transition), transform 0.2s ease, box-shadow 0.2s ease;
        }
        .avatar-small:hover { border-color: var(--accent); transform: scale(1.08); box-shadow: 0 2px 8px rgba(44,82,130,0.2); }
        .user-menu {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding-left: 0.5rem;
          border-left: 1px solid var(--border-light);
          margin-left: 0.25rem;
        }
        .user-name {
          font-size: 0.88rem;
          color: var(--text-muted);
          max-width: 110px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .btn-logout {
          background: none;
          border: 1px solid var(--border);
          color: var(--text-muted);
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-size: 0.8rem;
          font-family: inherit;
          font-weight: 500;
          transition: all var(--transition);
        }
        .btn-logout:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

        /* Login button */
        .btn-login {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--gradient-accent);
          color: white !important;
          padding: 0.45rem 1rem;
          border-radius: var(--radius-sm);
          font-weight: 500;
          font-size: 0.9rem;
          transition: all var(--transition);
          box-shadow: var(--shadow-xs);
          white-space: nowrap;
        }
        .btn-login:hover { box-shadow: var(--shadow-accent); text-decoration: none; transform: translateY(-1px); }
        .btn-login:active { transform: translateY(0) scale(0.98); }
        .btn-login svg { flex-shrink: 0; }

        /* Hamburger */
        .menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 42px;
          height: 42px;
          padding: 0;
          background: none;
          border: none;
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: background var(--transition);
        }
        .menu-toggle:hover { background: var(--accent-light); }
        .hamburger {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--accent);
          border-radius: 2px;
          transition: transform var(--transition-slow), opacity var(--transition);
        }
        .hamburger[data-open="true"]:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger[data-open="true"]:nth-child(2) { opacity: 0; }
        .hamburger[data-open="true"]:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile nav */
        .nav-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.2);
          z-index: 90;
          transition: opacity 0.3s ease;
        }
        .nav-mobile {
          display: none;
          flex-direction: column;
          padding: 0.5rem 1.25rem 1rem;
          gap: 0.15rem;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(16px);
          border-top: 1px solid var(--border-light);
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-slow), padding var(--transition-slow);
          position: relative;
          z-index: 91;
        }
        .nav-mobile.open { max-height: 500px; padding-top: 0.75rem; }
        .nav-mobile .nav-link {
          padding: 0.7rem 0.75rem;
          font-size: 0.95rem;
          border-radius: var(--radius-sm);
        }
        .nav-mobile .nav-indicator { display: none; }
        .nav-mobile .user-menu {
          padding: 0.75rem 0;
          border-left: none;
          margin-left: 0;
          flex-wrap: wrap;
        }
        .nav-mobile .btn-login {
          margin: 0.5rem 0;
          justify-content: center;
          width: 100%;
        }

        @media (max-width: 768px) {
          .nav-desktop { display: none; }
          .menu-toggle { display: flex; }
          .nav-mobile { display: flex; }
          .nav-overlay { display: block; }
        }
        @media (min-width: 769px) {
          .nav-mobile { display: none !important; }
          .nav-overlay { display: none !important; }
        }
      `}</style>
    </>
  );
}
