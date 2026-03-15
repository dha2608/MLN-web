import { Link } from 'react-router-dom';
import { lessons } from '../data/lessonsData';

export default function Lessons() {
  return (
    <div className="page lessons-page">
      <div className="lessons-header stagger-1">
        <span className="lessons-header-icon" aria-hidden="true">{'\u{1F4DA}'}</span>
        <h1 className="page-title">Bài học</h1>
        <p className="page-desc">
          Các bài học chuyên sâu về Kinh tế chính trị Mác - Lênin, giúp bạn nắm vững lý luận và liên hệ thực tiễn.
        </p>
      </div>

      {lessons.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon" aria-hidden="true">{'\u{1F4DA}'}</div>
          <p>Chưa có bài học nào.</p>
        </div>
      ) : (
        <div className="lessons-grid">
          {lessons.map((lesson, i) => (
            <Link
              key={lesson.id}
              to={`/bai-hoc/${lesson.slug}`}
              className={`lesson-card card stagger-${(i % 6) + 1}`}
            >
              <div className="lesson-card-icon" aria-hidden="true">
                {lesson.icon}
              </div>
              <div className="lesson-card-body">
                <span className="badge badge-school">{lesson.category}</span>
                <h3 className="lesson-card-title">{lesson.title}</h3>
                <p className="lesson-card-desc">{lesson.description}</p>
                <div className="lesson-card-meta">
                  <span className="lesson-card-sections">
                    {lesson.sections.length} phần
                  </span>
                  <span className="lesson-card-arrow" aria-hidden="true">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .lessons-page { max-width: 900px; }
        .lessons-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .lessons-header-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 0.75rem;
        }
        .lessons-header .page-desc {
          margin-left: auto;
          margin-right: auto;
        }

        .lessons-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        .lesson-card {
          display: flex;
          gap: 1.25rem;
          padding: 1.5rem;
          text-decoration: none;
          color: inherit;
        }
        .lesson-card:hover { text-decoration: none; }

        .lesson-card-icon {
          font-size: 2.2rem;
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-light);
          border-radius: var(--radius);
        }

        .lesson-card-body {
          flex: 1;
          min-width: 0;
        }
        .lesson-card-body .badge { margin-bottom: 0.5rem; }

        .lesson-card-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0 0 0.5rem;
          color: var(--text);
          line-height: 1.3;
        }

        .lesson-card-desc {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.55;
          margin: 0 0 0.75rem;
        }

        .lesson-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .lesson-card-sections {
          font-size: 0.82rem;
          color: var(--text-light);
          font-weight: 500;
        }
        .lesson-card-arrow {
          color: var(--accent);
          font-size: 1.1rem;
          transition: transform var(--transition);
        }
        .lesson-card:hover .lesson-card-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 640px) {
          .lesson-card {
            flex-direction: column;
            gap: 1rem;
          }
          .lesson-card-icon {
            width: 48px;
            height: 48px;
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}
