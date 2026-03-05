import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { quote as quoteApi } from '../api';

const PHILOSOPHY_FACTS = [
  'Socrates không viết bất kỳ tác phẩm nào — toàn bộ tư tưởng được truyền qua miệng.',
  'Plato sáng lập Học viện Athens — trường đại học đầu tiên của phương Tây.',
  'Aristotle là thầy dạy của Alexander Đại đế khi ông mới 13 tuổi.',
  'Kant sống cả đời ở Königsberg và chưa bao giờ rời thành phố quá 80km.',
  'Marcus Aurelius viết Suy ngẫm cho chính mình, không có ý xuất bản.',
  'Nietzsche sáng tác Zarathustra chỉ trong 10 ngày cho mỗi phần.',
  'Khổng Tử có hơn 3.000 đệ tử, trong đó 72 người thông thạo lục nghệ.',
  'Từ "triết học" (philosophy) có nghĩa gốc Hy Lạp là "tình yêu trí tuệ".',
  'Aristotle đặt nền móng cho hơn 20 lĩnh vực khoa học khác nhau.',
  'Học viện Athens của Plato tồn tại gần 900 năm (387 TCN – 529 SCN).',
  'Lão Tử theo truyền thuyết đã cưỡi trâu đi về phía tây và viết Đạo Đức Kinh trước khi biến mất.',
  'Đạo Đức Kinh chỉ có khoảng 5.000 chữ Hán nhưng là một trong những sách được dịch nhiều nhất thế giới.',
  'Descartes nảy ra ý tưởng "Cogito ergo sum" khi nằm trong phòng ấm vào một buổi sáng mùa đông.',
  'Sartre từ chối giải Nobel Văn học năm 1964 — một trong rất ít người từ chối giải thưởng này.',
  'Descartes phát minh hệ tọa độ Descartes khi quan sát một con ruồi bay trên trần nhà.'
];

export default function Footer() {
  const [dailyQuote, setDailyQuote] = useState(null);

  useEffect(() => {
    quoteApi.daily().then(({ quote: q }) => setDailyQuote(q)).catch(() => {});
  }, []);

  const fact = PHILOSOPHY_FACTS[new Date().getDate() % PHILOSOPHY_FACTS.length];

  return (
    <footer className="site-footer">
      {/* Quote banner */}
      {dailyQuote && (
        <div className="footer-quote-banner">
          <div className="footer-quote-inner">
            <span className="footer-quote-mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="footer-quote-text">
              {dailyQuote.text}
            </blockquote>
            <cite className="footer-quote-author">— {dailyQuote.author}</cite>
          </div>
        </div>
      )}

      <div className="footer-inner">
        {/* Main grid */}
        <div className="footer-grid">
          {/* Col 1: Brand */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon" aria-hidden="true">{'\u03A6'}</span>
              <div className="footer-logo-text-wrap">
                <span className="footer-logo-text">Triết học</span>
                <span className="footer-logo-sub">Tư duy & Khám phá</span>
              </div>
            </Link>
            <p className="footer-desc">
              Nền tảng học triết học tương tác dành cho sinh viên MLN122. Khám phá tri thức từ Đông sang Tây, từ cổ đại đến hiện đại.
            </p>
            <div className="footer-fact">
              <span className="footer-fact-label">Bạn có biết?</span>
              <p className="footer-fact-text">{fact}</p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-col">
            <span className="footer-col-title">Khám phá</span>
            <nav className="footer-nav-links" aria-label="Footer navigation">
              <Link to="/">Trang chủ</Link>
              <Link to="/triet-gia">Triết gia</Link>
              <Link to="/khai-niem">Khái niệm</Link>
              <Link to="/trac-nghiem">Trắc nghiệm</Link>
              <Link to="/so-sanh">So sánh tư tưởng</Link>
              <Link to="/thong-ke">Thống kê</Link>
            </nav>
          </div>

          {/* Col 3: Features */}
          <div className="footer-col">
            <span className="footer-col-title">Tính năng</span>
            <nav className="footer-nav-links">
              <Link to="/trac-nghiem">
                <span className="footer-link-icon" aria-hidden="true">?</span>
                Bạn thuộc trường phái nào?
              </Link>
              <Link to="/so-sanh">
                <span className="footer-link-icon" aria-hidden="true">{'\u21C4'}</span>
                So sánh triết gia
              </Link>
              <Link to="/thong-ke">
                <span className="footer-link-icon" aria-hidden="true">#</span>
                Thống kê tương tác
              </Link>
              <Link to="/dashboard">
                <span className="footer-link-icon" aria-hidden="true">{'\u03A6'}</span>
                Dashboard cá nhân
              </Link>
            </nav>
          </div>

          {/* Col 4: Info */}
          <div className="footer-col">
            <span className="footer-col-title">Thông tin</span>
            <div className="footer-info-list">
              <div className="footer-info-item">
                <span className="footer-info-label">Môn học</span>
                <span className="footer-info-value">MLN122 — Triết học Mác-Lênin</span>
              </div>
              <div className="footer-info-item">
                <span className="footer-info-label">Triết gia</span>
                <span className="footer-info-value">10 triết gia lớn</span>
              </div>
              <div className="footer-info-item">
                <span className="footer-info-label">Trường phái</span>
                <span className="footer-info-value">7 trường phái chính</span>
              </div>
              <div className="footer-info-item">
                <span className="footer-info-label">Dữ liệu</span>
                <span className="footer-info-value">Chỉ dùng cho giáo dục</span>
              </div>
            </div>
            <div className="footer-badges">
              <span className="footer-badge">React</span>
              <span className="footer-badge">Express</span>
              <span className="footer-badge">MongoDB</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-copy">&copy; {new Date().getFullYear()} Triết học — Tư duy & Khám phá</p>
            <p className="footer-copy-sub">Dữ liệu chỉ dùng cho mục đích giáo dục và phân tích nội bộ.</p>
          </div>
          <div className="footer-bottom-right">
            <span className="footer-tech">MLN122 &middot; {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          flex-shrink: 0;
          margin-top: auto;
          background: var(--bg-card);
          border-top: 1px solid var(--border-light);
          color: var(--text-muted);
          font-size: 0.88rem;
          position: relative;
        }

        /* ---- Quote banner ---- */
        .footer-quote-banner {
          background: var(--gradient-dark);
          color: white;
          padding: 1.75rem 1.5rem;
          text-align: center;
        }
        .footer-quote-inner {
          max-width: 700px;
          margin: 0 auto;
          position: relative;
        }
        .footer-quote-mark {
          position: absolute;
          top: -1.2rem;
          left: -0.5rem;
          font-family: var(--font-serif);
          font-size: 4rem;
          color: var(--accent-gold);
          opacity: 0.3;
          line-height: 1;
          user-select: none;
        }
        .footer-quote-text {
          margin: 0;
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-style: italic;
          line-height: 1.7;
          color: rgba(255,255,255,0.9);
        }
        .footer-quote-author {
          display: block;
          margin-top: 0.75rem;
          font-style: normal;
          font-size: 0.88rem;
          color: var(--accent-gold);
          font-weight: 500;
        }

        /* ---- Inner container ---- */
        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2.5rem 1.5rem 1.5rem;
        }

        /* ---- Grid ---- */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 2.5rem;
        }

        /* ---- Brand column ---- */
        .footer-col-brand {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          color: var(--text);
          text-decoration: none;
        }
        .footer-logo:hover { text-decoration: none; }
        .footer-logo:hover .footer-logo-text { color: var(--accent); }
        .footer-logo-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-accent);
          color: white;
          border-radius: var(--radius-sm);
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-weight: 600;
          flex-shrink: 0;
        }
        .footer-logo-text-wrap { display: flex; flex-direction: column; }
        .footer-logo-text {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.2;
          color: var(--text);
          transition: color var(--transition);
        }
        .footer-logo-sub {
          font-size: 0.62rem;
          color: var(--text-light);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          line-height: 1.2;
        }
        .footer-desc {
          color: var(--text-light);
          font-size: 0.85rem;
          margin: 0;
          line-height: 1.6;
        }
        .footer-fact {
          background: var(--accent-gold-light);
          border: 1px solid rgba(197,165,90,0.15);
          border-radius: var(--radius-sm);
          padding: 0.75rem 0.85rem;
        }
        .footer-fact-label {
          display: block;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--accent-gold);
          margin-bottom: 0.25rem;
        }
        .footer-fact-text {
          margin: 0;
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* ---- Column headers ---- */
        .footer-col-title {
          display: block;
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text);
          margin-bottom: 0.85rem;
        }

        /* ---- Nav links ---- */
        .footer-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .footer-nav-links a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.88rem;
          padding: 0.25rem 0;
          transition: color var(--transition), padding-left var(--transition);
          text-decoration: none;
        }
        .footer-nav-links a:hover {
          color: var(--accent);
          padding-left: 4px;
          text-decoration: none;
        }
        .footer-link-icon {
          width: 20px;
          height: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        /* ---- Info column ---- */
        .footer-info-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 0.85rem;
        }
        .footer-info-item {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }
        .footer-info-label {
          font-size: 0.68rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-light);
        }
        .footer-info-value {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .footer-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .footer-badge {
          display: inline-block;
          padding: 0.15rem 0.5rem;
          background: var(--bg-alt);
          border: 1px solid var(--border-light);
          border-radius: 99px;
          font-size: 0.68rem;
          font-weight: 500;
          color: var(--text-light);
          letter-spacing: 0.02em;
        }

        /* ---- Divider ---- */
        .footer-divider {
          height: 1px;
          background: var(--border-light);
          margin: 2rem 0 1.25rem;
        }

        /* ---- Bottom ---- */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 1rem;
        }
        .footer-copy {
          margin: 0 0 0.2rem;
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .footer-copy-sub {
          margin: 0;
          font-size: 0.75rem;
          color: var(--text-light);
        }
        .footer-tech {
          font-size: 0.75rem;
          color: var(--text-light);
          opacity: 0.7;
          font-weight: 500;
        }

        /* ---- Mobile ---- */
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .footer-col-brand { grid-column: 1 / -1; }
        }

        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }
          .footer-quote-banner { padding: 1.25rem 1rem; }
          .footer-quote-text { font-size: 0.95rem; }
          .footer-inner { padding: 2rem 1.25rem 1.25rem; }
          .footer-nav-links a:hover { padding-left: 0; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  );
}
