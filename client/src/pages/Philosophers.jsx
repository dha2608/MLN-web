import { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { philosophers as api } from '../api';

const KTCT_SCHOOLS = ['Chủ nghĩa Mác (Marxism)', 'Chủ nghĩa Mác-Lênin'];

export default function Philosophers() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const debounceRef = useRef(null);

  useEffect(() => {
    api.list().then(({ philosophers }) => {
      setList(philosophers || []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  // Debounce search input (300ms)
  const handleSearch = useCallback((e) => {
    const val = e.target.value;
    setSearch(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setDebouncedSearch(val), 300);
  }, []);

  // Memoized filtered list
  const filtered = useMemo(() => {
    if (!debouncedSearch.trim()) return list;
    const q = debouncedSearch.toLowerCase();
    return list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      (p.nameVi && p.nameVi.toLowerCase().includes(q)) ||
      (p.school && p.school.toLowerCase().includes(q))
    );
  }, [debouncedSearch, list]);

  // Split into KTCT and others
  const ktctFiltered = useMemo(() => filtered.filter(p => KTCT_SCHOOLS.includes(p.school)), [filtered]);
  const otherFiltered = useMemo(() => filtered.filter(p => !KTCT_SCHOOLS.includes(p.school)), [filtered]);

  if (loading) return (
    <div className="page">
       <div className="loading-wrap"><div className="loading-spinner" aria-label="Đang tải" /><span className="loading-text">Đang tải...</span></div>
    </div>
  );

  return (
    <div className="page phil-page">
      <div className="phil-header stagger-1">
        <div>
          <h1 className="page-title">Nhà tư tưởng</h1>
          <p className="page-desc">Chọn một nhà tư tưởng để xem tiểu sử và tư tưởng chính.</p>
        </div>
        <span className="phil-count">{list.length} nhà tư tưởng</span>
      </div>

      {/* Search */}
      <div className="phil-search stagger-2">
        <div className="phil-search-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        </div>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Tìm theo tên, trường phái..."
          className="phil-search-input"
           aria-label="Tìm kiếm nhà tư tưởng"
        />
        {search && (
          <button type="button" className="phil-search-clear" onClick={() => setSearch('')} aria-label="Xóa tìm kiếm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state stagger-3">
          <div className="empty-icon" aria-hidden="true">{'\u2692'}</div>
          <p>Không tìm thấy nhà tư tưởng nào phù hợp.</p>
        </div>
      ) : (
        <>
          {/* KTCT - Phần chính */}
          {ktctFiltered.length > 0 && (
            <div className="phil-section">
              <div className="phil-section-header">
                <span className="phil-section-badge">Phần chính</span>
                <h2 className="phil-section-title">Kinh tế chính trị Mác-Lênin</h2>
              </div>
              <div className="phil-grid">
                {ktctFiltered.map((p, i) => (
                  <Link key={p._id} to={`/triet-gia/${p.slug}`} className={`phil-card phil-card--ktct stagger-${(i % 7) + 1}`}>
                    <div className="phil-img-wrap">
                      {p.imageUrl ? (
                        <img src={p.imageUrl} alt={p.imageAlt || p.name} loading="lazy" />
                      ) : (
                        <div className="phil-placeholder" aria-hidden="true">{p.name.charAt(0)}</div>
                      )}
                      <div className="phil-img-overlay" />
                    </div>
                    <div className="phil-info">
                      <h3>{p.name}</h3>
                      {p.nameVi && p.nameVi !== p.name && <span className="phil-name-vi">{p.nameVi}</span>}
                      <span className="phil-dates">{p.birthDeath}</span>
                      <span className="badge badge-school">{p.school}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Triết học - Mở rộng */}
          {otherFiltered.length > 0 && (
            <div className="phil-section phil-section--ext">
              <div className="phil-section-header">
                <span className="phil-section-badge phil-section-badge--ext">Mở rộng</span>
                <h2 className="phil-section-title">Triết học</h2>
              </div>
              <div className="phil-grid">
                {otherFiltered.map((p, i) => (
                  <Link key={p._id} to={`/triet-gia/${p.slug}`} className={`phil-card stagger-${(i % 7) + 1}`}>
                    <div className="phil-img-wrap">
                      {p.imageUrl ? (
                        <img src={p.imageUrl} alt={p.imageAlt || p.name} loading="lazy" />
                      ) : (
                        <div className="phil-placeholder" aria-hidden="true">{p.name.charAt(0)}</div>
                      )}
                      <div className="phil-img-overlay" />
                    </div>
                    <div className="phil-info">
                      <h3>{p.name}</h3>
                      {p.nameVi && p.nameVi !== p.name && <span className="phil-name-vi">{p.nameVi}</span>}
                      <span className="phil-dates">{p.birthDeath}</span>
                      <span className="badge badge-school">{p.school}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      <style>{`
        /* Header */
        .phil-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .phil-header .page-desc { margin-bottom: 0; }
        .phil-count {
          flex-shrink: 0;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-light);
          background: var(--bg-alt);
          padding: 0.3rem 0.75rem;
          border-radius: 99px;
          margin-top: 0.5rem;
        }

        /* Search */
        .phil-search {
          position: relative;
          margin-bottom: 1.75rem;
          max-width: 400px;
        }
        .phil-search-icon {
          position: absolute;
          left: 0.85rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-light);
          display: flex;
          pointer-events: none;
        }
        .phil-search-input {
          width: 100%;
          padding: 0.65rem 2.5rem 0.65rem 2.5rem;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          font-family: inherit;
          font-size: 0.9rem;
          background: var(--bg-card);
          color: var(--text);
          transition: border-color var(--transition), box-shadow var(--transition);
        }
        .phil-search-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(44,82,130,0.08);
          outline: none;
        }
        .phil-search-input::placeholder { color: var(--text-light); }
        .phil-search-clear {
          position: absolute;
          right: 0.65rem;
          top: 50%;
          transform: translateY(-50%);
          background: var(--bg-alt);
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-muted);
          transition: all var(--transition);
        }
        .phil-search-clear:hover { background: var(--accent-light); color: var(--accent); }

        /* Grid */
        .phil-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .phil-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          overflow: hidden;
          color: var(--text);
          transition: all var(--transition-slow);
          display: flex;
          flex-direction: column;
        }
        .phil-card:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
          text-decoration: none;
        }

        .phil-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: var(--accent-light);
        }
        .phil-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .phil-card:hover .phil-img-wrap img { transform: scale(1.06); }

        .phil-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(26,26,46,0.6) 100%);
          pointer-events: none;
        }

        .phil-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-serif);
          font-size: 4rem;
          font-weight: 600;
          color: var(--accent);
          background: var(--accent-light);
        }

        .phil-info {
          padding: 1rem 1.25rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .phil-info h3 {
          margin: 0;
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text);
        }
        .phil-name-vi {
          font-size: 0.85rem;
          color: var(--text-light);
        }
        .phil-dates {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.4rem;
        }
        .phil-info .badge {
          align-self: flex-start;
          margin-top: 0.15rem;
        }

        /* Sections */
        .phil-section { margin-bottom: 2.5rem; }
        .phil-section--ext { margin-bottom: 1rem; }
        .phil-section-header { margin-bottom: 1.25rem; }
        .phil-section-badge {
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
        .phil-section-badge--ext { background: var(--accent); }
        .phil-section-title {
          margin: 0;
          font-size: 1.3rem;
          font-weight: 600;
          font-family: var(--font-serif);
          color: var(--text);
        }
        .phil-card--ktct {
          border-color: rgba(197,48,48,0.2);
        }
        .phil-card--ktct:hover {
          border-color: #c53030;
          box-shadow: 0 8px 24px rgba(197,48,48,0.15);
        }

        @media (max-width: 480px) {
          .phil-grid { grid-template-columns: 1fr 1fr; gap: 1rem; }
          .phil-info { padding: 0.75rem 0.9rem 1rem; }
          .phil-info h3 { font-size: 1rem; }
          .phil-header { flex-direction: column; gap: 0.25rem; }
          .phil-search { max-width: 100%; }
        }
      `}</style>
    </div>
  );
}
