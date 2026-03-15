import { useParams, Link } from 'react-router-dom';
import { lessons, lessonQuizzes } from '../data/lessonsData';

export default function LessonDetail() {
  const { slug } = useParams();
  const lesson = lessons.find((l) => l.slug === slug);
  const hasQuiz = Boolean(lessonQuizzes[slug]);

  if (!lesson)
    return (
      <div className="page page--narrow">
        <div className="empty-state">
          <div className="empty-icon" aria-hidden="true">?</div>
          <p>Không tìm thấy bài học này.</p>
          <Link to="/bai-hoc" className="btn btn-secondary btn-sm">
            Quay lại danh sách
          </Link>
        </div>
      </div>
    );

  return (
    <div className="page page--narrow ld-page">
      <Link to="/bai-hoc" className="back-link">
        &larr; Bài học
      </Link>

      {/* Header */}
      <header className="ld-header stagger-1">
        <div className="ld-header-icon" aria-hidden="true">
          {lesson.icon}
        </div>
        <div className="ld-header-text">
          <span className="badge badge-school">{lesson.category}</span>
          <h1>{lesson.title}</h1>
          {lesson.subtitle && (
            <p className="ld-subtitle">{lesson.subtitle}</p>
          )}
        </div>
      </header>

      {/* Table of Contents */}
      <nav className="ld-toc stagger-2" aria-label="Mục lục bài học">
        <h2 className="ld-toc-title">Mục lục</h2>
        <ol className="ld-toc-list">
          {lesson.sections.map((sec) => (
            <li key={sec.id}>
              <a href={`#${sec.id}`} className="ld-toc-link">
                {sec.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Sections */}
      <article className="ld-body">
        {lesson.sections.map((sec, i) => (
          <section
            key={sec.id}
            id={sec.id}
            className={`ld-section stagger-${Math.min(i + 2, 7)}`}
          >
            <h2 className="ld-section-title">{sec.title}</h2>
            <div className="ld-section-content">
              <FormattedContent text={sec.content} />
            </div>
          </section>
        ))}
      </article>

      {/* Quiz CTA */}
      <div className="ld-cta stagger-7">
        <div className="ld-cta-inner">
          {hasQuiz ? (
            <>
              <p>Đã đọc xong? Kiểm tra kiến thức của bạn với bài trắc nghiệm!</p>
              <div className="ld-cta-actions">
                <Link
                  to={`/bai-hoc/${slug}/quiz`}
                  className="btn btn-primary"
                >
                  Làm trắc nghiệm
                </Link>
                <Link to="/bai-hoc" className="btn btn-ghost btn-sm">
                  Xem bài học khác
                </Link>
              </div>
            </>
          ) : (
            <>
              <p>Muốn tìm hiểu thêm? Hãy hỏi chatbot triết học bên góc phải.</p>
              <div className="ld-cta-actions">
                <Link to="/bai-hoc" className="btn btn-outline btn-sm">
                  Xem bài học khác
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        .ld-page { padding-bottom: 3rem; }

        /* Header */
        .ld-header {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          margin-bottom: 2rem;
        }
        .ld-header-icon {
          font-size: 2.5rem;
          flex-shrink: 0;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-light);
          border-radius: var(--radius-lg);
        }
        .ld-header-text { flex: 1; min-width: 0; }
        .ld-header-text .badge { margin-bottom: 0.5rem; }
        .ld-header-text h1 {
          font-family: var(--font-serif);
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 600;
          margin: 0;
          line-height: 1.2;
          color: var(--text);
        }
        .ld-subtitle {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin: 0.35rem 0 0;
        }

        /* Table of Contents */
        .ld-toc {
          background: var(--bg-alt);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.25rem 1.5rem;
          margin-bottom: 2.5rem;
        }
        .ld-toc-title {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.75rem;
          color: var(--text);
        }
        .ld-toc-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .ld-toc-list li { counter-increment: none; }
        .ld-toc-link {
          color: var(--accent);
          font-size: 0.92rem;
          font-weight: 500;
          padding: 0.3rem 0.5rem;
          border-radius: var(--radius-sm);
          display: inline-block;
          transition: all var(--transition);
        }
        .ld-toc-link:hover {
          background: var(--accent-light);
          text-decoration: none;
        }

        /* Sections */
        .ld-body { margin-bottom: 2.5rem; }

        .ld-section {
          margin-bottom: 2.5rem;
          scroll-margin-top: 80px;
        }
        .ld-section:last-child { margin-bottom: 0; }

        .ld-section-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--accent-light);
        }

        .ld-section-content {
          color: var(--text);
          font-size: 0.95rem;
          line-height: 1.75;
        }
        .ld-section-content p {
          margin: 0 0 1rem;
        }
        .ld-section-content p:last-child { margin-bottom: 0; }

        .ld-section-content strong {
          color: var(--accent);
          font-weight: 600;
        }

        .ld-section-content em {
          font-style: italic;
          color: var(--text-muted);
        }

        /* Blockquotes */
        .ld-blockquote {
          border-left: 3px solid var(--accent);
          background: var(--accent-light);
          padding: 1rem 1.25rem;
          margin: 1.25rem 0;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          font-style: italic;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* Lists */
        .ld-section-content ul,
        .ld-section-content ol {
          padding-left: 1.5rem;
          margin: 0.75rem 0;
        }
        .ld-section-content li {
          margin-bottom: 0.4rem;
          line-height: 1.65;
        }

        /* Tables */
        .ld-table-wrap {
          overflow-x: auto;
          margin: 1.25rem 0;
          border-radius: var(--radius);
          border: 1px solid var(--border-light);
        }
        .ld-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
        }
        .ld-table th,
        .ld-table td {
          padding: 0.7rem 1rem;
          text-align: left;
          border-bottom: 1px solid var(--border-light);
        }
        .ld-table th {
          background: var(--accent-light);
          color: var(--accent);
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .ld-table tr:last-child td { border-bottom: none; }
        .ld-table tr:hover td { background: var(--bg-alt); }

        /* CTA */
        .ld-cta {
          background: var(--gradient-warm);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          text-align: center;
        }
        .ld-cta p {
          color: var(--text-muted);
          margin: 0 0 1rem;
          font-size: 1rem;
        }
        .ld-cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        @media (max-width: 640px) {
          .ld-header {
            flex-direction: column;
            gap: 1rem;
          }
          .ld-header-icon {
            width: 52px;
            height: 52px;
            font-size: 2rem;
          }
          .ld-toc { padding: 1rem 1.25rem; }
        }
      `}</style>
    </div>
  );
}

/* ---- Markdown-like text formatter ---- */
function FormattedContent({ text }) {
  // Split by double newline into paragraphs/blocks
  const blocks = text.split('\n\n');

  return blocks.map((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    // Blockquote
    if (trimmed.startsWith('> ')) {
      const quote = trimmed
        .split('\n')
        .map((l) => l.replace(/^>\s?/, ''))
        .join(' ');
      return (
        <blockquote key={idx} className="ld-blockquote">
          <InlineFormat text={quote} />
        </blockquote>
      );
    }

    // Table
    if (trimmed.includes('|') && trimmed.split('\n').length >= 3) {
      const lines = trimmed.split('\n').filter((l) => l.trim());
      // Check if it's a markdown table (has separator row with dashes)
      const isMdTable =
        lines.length >= 2 &&
        lines[1].replace(/[\s|:-]/g, '').length === 0;
      if (isMdTable) {
        const headers = lines[0]
          .split('|')
          .map((h) => h.trim())
          .filter(Boolean);
        const rows = lines.slice(2).map((r) =>
          r
            .split('|')
            .map((c) => c.trim())
            .filter(Boolean)
        );
        return (
          <div key={idx} className="ld-table-wrap">
            <table className="ld-table">
              <thead>
                <tr>
                  {headers.map((h, hi) => (
                    <th key={hi}>
                      <InlineFormat text={h} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, ri) => (
                  <tr key={ri}>
                    {r.map((c, ci) => (
                      <td key={ci}>
                        <InlineFormat text={c} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }

    // Unordered list
    if (trimmed.match(/^- /m)) {
      const items = trimmed.split('\n').filter((l) => l.trim().startsWith('- '));
      return (
        <ul key={idx}>
          {items.map((item, ii) => (
            <li key={ii}>
              <InlineFormat text={item.replace(/^- /, '')} />
            </li>
          ))}
        </ul>
      );
    }

    // Ordered list (lines starting with number.)
    if (trimmed.match(/^\d+\.\s/m)) {
      const items = trimmed
        .split('\n')
        .filter((l) => l.trim().match(/^\d+\.\s/));
      return (
        <ol key={idx}>
          {items.map((item, ii) => (
            <li key={ii}>
              <InlineFormat text={item.replace(/^\d+\.\s/, '')} />
            </li>
          ))}
        </ol>
      );
    }

    // Default paragraph
    return (
      <p key={idx}>
        <InlineFormat text={trimmed} />
      </p>
    );
  });
}

/* ---- Inline formatting: **bold**, *italic*, `code` ---- */
function InlineFormat({ text }) {
  // Replace line breaks within a block
  const singleLine = text.replace(/\n/g, ' ');
  // Split by bold, italic, and inline code patterns
  const parts = singleLine.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|—)/g);

  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          style={{
            background: 'var(--bg-alt)',
            padding: '0.1em 0.35em',
            borderRadius: '4px',
            fontSize: '0.88em',
          }}
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part === '—') {
      return <span key={i}>&mdash;</span>;
    }
    return <span key={i}>{part}</span>;
  });
}
