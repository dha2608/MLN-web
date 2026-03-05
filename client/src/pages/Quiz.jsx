import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { quiz as quizApi } from '../api';

const SCHOOL_ICONS = {
  'Chủ nghĩa duy lý': '\u2261',
  'Chủ nghĩa duy tâm': '\u2734',
  'Chủ nghĩa kinh nghiệm': '\u2318',
  'Chủ nghĩa hiện sinh': '\u221E',
  'Chủ nghĩa khắc kỷ': '\u2694',
  'Nho giáo': '\u2609',
};

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentQ, setCurrentQ] = useState(0);

  useEffect(() => {
    quizApi.questions().then(({ questions: q }) => {
      setQuestions(q || []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const handleChange = (questionId, optionId) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const submit = () => {
    quizApi.submit(answers).then(setResult);
  };

  const answeredCount = Object.keys(answers).length;
  const totalCount = questions.length;
  const progress = totalCount > 0 ? (answeredCount / totalCount) * 100 : 0;

  if (loading) return (
    <div className="page page--quiz">
      <div className="loading-wrap"><div className="loading-spinner" aria-label="Đang tải" /><span className="loading-text">Chuẩn bị câu hỏi...</span></div>
    </div>
  );

  return (
    <div className="page page--quiz quiz-page">
      {/* Header */}
      <div className="quiz-header stagger-1">
        <span className="quiz-icon" aria-hidden="true">?</span>
        <h1 className="page-title">Bạn thuộc trường phái nào?</h1>
        <p className="page-desc">Trắc nghiệm ngắn dựa trên tư tưởng triết học. Chọn câu trả lời gần với quan điểm của bạn.</p>
      </div>

      {!result ? (
        <>
          {/* Progress bar */}
          <div className="quiz-progress stagger-2">
            <div className="quiz-progress-info">
              <span>Tiến độ</span>
              <span className="quiz-progress-count">{answeredCount}/{totalCount}</span>
            </div>
            <div className="quiz-progress-bar">
              <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Questions */}
          <div className="quiz-questions">
            {questions.map((q, qi) => (
              <div key={q.id} className={`quiz-q stagger-${(qi % 5) + 2}`}>
                <div className="quiz-q-header">
                  <span className="quiz-q-num">{String(qi + 1).padStart(2, '0')}</span>
                  <h3>{q.question}</h3>
                </div>
                <div className="quiz-options">
                  {q.options.map((opt) => (
                    <label key={opt.id} className={`quiz-option ${answers[q.id] === opt.id ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name={q.id}
                        value={opt.id}
                        checked={answers[q.id] === opt.id}
                        onChange={() => handleChange(q.id, opt.id)}
                      />
                      <span className="quiz-option-radio" aria-hidden="true" />
                      <span className="quiz-option-text">{opt.text}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="quiz-submit">
            <button type="button" className="btn btn-primary btn-lg" onClick={submit} disabled={answeredCount < totalCount}>
              {answeredCount < totalCount
                ? `Còn ${totalCount - answeredCount} câu chưa trả lời`
                : 'Xem kết quả'}
            </button>
          </div>
        </>
      ) : (
        <div className="quiz-result stagger-1">
          <div className="quiz-result-icon" aria-hidden="true">
            {SCHOOL_ICONS[result.primarySchool] || '\u2605'}
          </div>
          <span className="badge badge-gold">Kết quả của bạn</span>
          <h2 className="quiz-result-school">{result.primarySchool}</h2>
          <p className="quiz-result-desc">{result.description}</p>
          <hr className="divider" />
          <div className="quiz-result-actions">
            <Link to="/triet-gia" className="btn btn-primary">Khám phá triết gia</Link>
            <button type="button" className="btn btn-outline" onClick={() => { setResult(null); setAnswers({}); }}>Làm lại</button>
          </div>
        </div>
      )}

      <style>{`
        .quiz-page .page-title { margin-bottom: 0.35rem; }

        /* Header */
        .quiz-header { text-align: center; margin-bottom: 2rem; }
        .quiz-icon {
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
        .quiz-header .page-desc { margin-left: auto; margin-right: auto; text-align: center; }

        /* Progress */
        .quiz-progress { margin-bottom: 2rem; }
        .quiz-progress-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 0.4rem;
        }
        .quiz-progress-count { font-weight: 600; color: var(--accent); }
        .quiz-progress-bar {
          height: 6px;
          background: var(--border-light);
          border-radius: 99px;
          overflow: hidden;
        }
        .quiz-progress-fill {
          height: 100%;
          background: var(--gradient-accent);
          border-radius: 99px;
          transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        /* Question */
        .quiz-q {
          margin-bottom: 1.75rem;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.25rem 1.5rem;
          transition: border-color var(--transition);
        }
        .quiz-q:hover { border-color: var(--border); }
        .quiz-q-header {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .quiz-q-num {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--accent);
          opacity: 0.3;
          line-height: 1.3;
          flex-shrink: 0;
        }
        .quiz-q h3 {
          font-size: 1.05rem;
          font-weight: 600;
          margin: 0;
          line-height: 1.45;
          color: var(--text);
        }

        /* Options */
        .quiz-options { display: flex; flex-direction: column; gap: 0.5rem; }
        .quiz-option {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          cursor: pointer;
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-light);
          border-radius: var(--radius);
          transition: all var(--transition);
          position: relative;
        }
        .quiz-option:hover { border-color: var(--accent); background: var(--accent-light); }
        .quiz-option.selected {
          border-color: var(--accent);
          background: var(--accent-light);
          box-shadow: 0 0 0 1px var(--accent);
        }
        .quiz-option input { position: absolute; opacity: 0; width: 0; height: 0; }
        .quiz-option-radio {
          width: 18px;
          height: 18px;
          border: 2px solid var(--border);
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 1px;
          transition: all var(--transition);
          position: relative;
        }
        .quiz-option.selected .quiz-option-radio {
          border-color: var(--accent);
        }
        @keyframes radioPop {
          0% { transform: scale(0); }
          70% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .quiz-option.selected .quiz-option-radio::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
          animation: radioPop 0.25s ease-out;
        }
        .quiz-option-text {
          font-size: 0.92rem;
          line-height: 1.5;
          color: var(--text);
        }

        /* Submit */
        .quiz-submit { text-align: center; margin-top: 0.5rem; }
        .quiz-submit .btn { min-width: 240px; }

        /* Result */
        .quiz-result {
          text-align: center;
          background: var(--gradient-warm);
          border: 1px solid rgba(197,165,90,0.15);
          border-radius: var(--radius-xl);
          padding: 2.5rem 2rem;
          animation: scaleIn 0.5s ease-out;
        }
        .quiz-result-icon {
          width: 72px;
          height: 72px;
          margin: 0 auto 1rem;
          background: var(--accent-gold-light);
          border: 2px solid rgba(197,165,90,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: var(--accent-gold);
        }
        .quiz-result .badge { margin-bottom: 0.75rem; }
        .quiz-result-school {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 0.75rem;
        }
        .quiz-result-desc {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 480px;
          margin: 0 auto;
        }
        .quiz-result .divider { margin: 1.5rem auto; max-width: 200px; }
        .quiz-result-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }

        @media (max-width: 480px) {
          .quiz-q { padding: 1rem; }
          .quiz-option { padding: 0.6rem 0.75rem; }
          .quiz-result { padding: 2rem 1.25rem; }
        }
      `}</style>
    </div>
  );
}
