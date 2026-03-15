import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { lessons, lessonQuizzes } from '../data/lessonsData';

export default function LessonQuiz() {
  const { slug } = useParams();
  const lesson = lessons.find((l) => l.slug === slug);
  const quizData = lessonQuizzes[slug];

  const [answers, setAnswers] = useState({});

  if (!lesson || !quizData) {
    return (
      <div className="page page--quiz">
        <div className="empty-state">
          <div className="empty-icon" aria-hidden="true">?</div>
          <p>Không tìm thấy bài trắc nghiệm này.</p>
          <Link to="/bai-hoc" className="btn btn-secondary btn-sm">
            Quay lại bài học
          </Link>
        </div>
      </div>
    );
  }

  const { questions, passingScore } = quizData;
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === totalQuestions;

  const handleSelect = (questionId, optionId) => {
    // Đã chọn rồi thì không cho đổi
    if (answers[questionId]) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleReset = () => {
    setAnswers({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate score (tính theo các câu đã trả lời)
  const score = questions.reduce(
    (acc, q) => acc + (answers[q.id] === q.correctAnswer ? 1 : 0),
    0
  );
  const passed = allAnswered && score >= passingScore;
  const percentage = allAnswered ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <div className="page page--quiz lq-page">
      <Link to={`/bai-hoc/${slug}`} className="back-link">
        &larr; {lesson.title}
      </Link>

      {/* Header */}
      <header className="lq-header stagger-1">
        <h1 className="page-title">{quizData.title}</h1>
        <p className="page-desc">{quizData.description}</p>
      </header>

      {/* Result Banner — hiện khi trả lời hết */}
      {allAnswered && (
        <div className={`lq-result stagger-1 ${passed ? 'lq-result--pass' : 'lq-result--fail'}`}>
          <div className="lq-result-score">
            <span className="lq-result-number">{score}/{totalQuestions}</span>
            <span className="lq-result-pct">{percentage}%</span>
          </div>
          <div className="lq-result-text">
            <h2>{passed ? 'Tuyệt vời! Bạn đã vượt qua!' : 'Chưa đạt — hãy thử lại!'}</h2>
            <p>
              {passed
                ? `Bạn đã trả lời đúng ${score}/${totalQuestions} câu hỏi. Kiến thức về độc quyền của bạn rất tốt!`
                : `Bạn đã trả lời đúng ${score}/${totalQuestions} câu hỏi. Cần đúng ít nhất ${passingScore} câu để đạt. Hãy đọc lại bài học và thử lại!`}
            </p>
          </div>
          <div className="lq-result-actions">
            <button type="button" className="btn btn-primary btn-sm" onClick={handleReset}>
              Làm lại
            </button>
            <Link to={`/bai-hoc/${slug}`} className="btn btn-outline btn-sm">
              Đọc lại bài học
            </Link>
          </div>
        </div>
      )}

      {/* Progress */}
      {!allAnswered && (
        <div className="lq-progress stagger-2">
          <div className="lq-progress-bar">
            <div
              className="lq-progress-fill"
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            />
          </div>
          <span className="lq-progress-text">
            {answeredCount}/{totalQuestions} câu đã trả lời
          </span>
        </div>
      )}

      {/* Questions */}
      <div className="lq-questions">
        {questions.map((q, i) => {
          const userAnswer = answers[q.id];
          const isAnswered = !!userAnswer;
          const isCorrect = userAnswer === q.correctAnswer;

          return (
            <div
              key={q.id}
              className={`lq-question card stagger-${Math.min(i + 2, 7)} ${
                isAnswered
                  ? isCorrect
                    ? 'lq-question--correct'
                    : 'lq-question--wrong'
                  : ''
              }`}
            >
              <h3 className="lq-question-title">
                <span className="lq-question-num">Câu {q.id}</span>
                {q.question}
              </h3>

              <div className="lq-options">
                {q.options.map((opt) => {
                  const isSelected = userAnswer === opt.id;
                  const isCorrectOpt = isAnswered && opt.id === q.correctAnswer;
                  const isWrongSelected =
                    isAnswered && isSelected && !isCorrect;

                  let optClass = 'lq-option';
                  if (isSelected && !isAnswered) optClass += ' lq-option--selected';
                  if (isCorrectOpt) optClass += ' lq-option--correct';
                  if (isWrongSelected) optClass += ' lq-option--wrong';

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      className={optClass}
                      onClick={() => handleSelect(q.id, opt.id)}
                      disabled={isAnswered}
                    >
                      <span className="lq-option-letter">{opt.id.toUpperCase()}</span>
                      <span className="lq-option-text">{opt.text}</span>
                      {isCorrectOpt && (
                        <span className="lq-option-icon" aria-label="Đúng">{'\u2713'}</span>
                      )}
                      {isWrongSelected && (
                        <span className="lq-option-icon" aria-label="Sai">{'\u2717'}</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Hiển thị giải thích ngay khi chọn */}
              {isAnswered && (
                <div className="lq-explanation-wrap lq-explanation-instant">
                  <div className={`lq-feedback ${isCorrect ? 'lq-feedback--correct' : 'lq-feedback--wrong'}`}>
                    {isCorrect ? '✓ Chính xác!' : '✗ Chưa đúng!'}
                  </div>
                  <p className="lq-explanation">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        .lq-page { padding-bottom: 3rem; }

        /* Progress */
        .lq-progress {
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .lq-progress-bar {
          flex: 1;
          height: 6px;
          background: var(--border-light);
          border-radius: 99px;
          overflow: hidden;
        }
        .lq-progress-fill {
          height: 100%;
          background: var(--gradient-accent);
          border-radius: 99px;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .lq-progress-text {
          font-size: 0.82rem;
          color: var(--text-light);
          white-space: nowrap;
          font-weight: 500;
        }

        /* Result Banner */
        .lq-result {
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          margin-bottom: 2rem;
          text-align: center;
        }
        .lq-result--pass {
          background: var(--accent-green-light);
          border: 1px solid var(--accent-green);
        }
        .lq-result--fail {
          background: #fef2f2;
          border: 1px solid #f87171;
        }
        .lq-result-score {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .lq-result-number {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text);
        }
        .lq-result-pct {
          font-size: 1.1rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .lq-result-text h2 {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          margin: 0 0 0.5rem;
          color: var(--text);
        }
        .lq-result-text p {
          color: var(--text-muted);
          font-size: 0.92rem;
          margin: 0;
          line-height: 1.6;
        }
        .lq-result-actions {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 1.25rem;
          flex-wrap: wrap;
        }

        /* Questions */
        .lq-questions {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        .lq-question { padding: 1.5rem; }
        .lq-question--correct { border-color: var(--accent-green); }
        .lq-question--wrong { border-color: #f87171; }

        .lq-question-title {
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 1rem;
          color: var(--text);
          line-height: 1.5;
          display: flex;
          gap: 0.5rem;
        }
        .lq-question-num {
          color: var(--accent);
          font-weight: 700;
          white-space: nowrap;
        }

        /* Options */
        .lq-options {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .lq-option {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border: 1.5px solid var(--border-light);
          border-radius: var(--radius);
          background: var(--bg-card);
          cursor: pointer;
          font-family: inherit;
          font-size: 0.92rem;
          text-align: left;
          transition: all var(--transition);
          color: var(--text);
          width: 100%;
        }
        .lq-option:hover:not(:disabled) {
          border-color: var(--accent);
          background: var(--accent-light);
        }
        .lq-option--selected {
          border-color: var(--accent);
          background: var(--accent-light);
        }
        .lq-option--correct {
          border-color: var(--accent-green) !important;
          background: var(--accent-green-light) !important;
        }
        .lq-option--wrong {
          border-color: #f87171 !important;
          background: #fef2f2 !important;
        }
        .lq-option:disabled { cursor: default; }

        .lq-option-letter {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--bg-alt);
          font-weight: 600;
          font-size: 0.82rem;
          flex-shrink: 0;
          color: var(--text-muted);
          transition: all var(--transition);
        }
        .lq-option--selected .lq-option-letter {
          background: var(--accent);
          color: white;
        }
        .lq-option--correct .lq-option-letter {
          background: var(--accent-green);
          color: white;
        }
        .lq-option--wrong .lq-option-letter {
          background: #f87171;
          color: white;
        }
        .lq-option-text { flex: 1; line-height: 1.5; padding-top: 0.15rem; }
        .lq-option-icon {
          font-size: 1.1rem;
          font-weight: 700;
          flex-shrink: 0;
          align-self: center;
        }
        .lq-option--correct .lq-option-icon { color: var(--accent-green); }
        .lq-option--wrong .lq-option-icon { color: #f87171; }

        /* Explanation — instant feedback */
        .lq-explanation-wrap {
          margin-top: 1rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-light);
        }
        .lq-explanation-instant {
          animation: lq-fadeIn 0.3s ease;
        }
        @keyframes lq-fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .lq-feedback {
          font-weight: 600;
          font-size: 0.92rem;
          margin-bottom: 0.5rem;
        }
        .lq-feedback--correct { color: var(--accent-green); }
        .lq-feedback--wrong { color: #f87171; }
        .lq-explanation {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.65;
          background: var(--bg-alt);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
        }

        @media (max-width: 640px) {
          .lq-question { padding: 1.25rem; }
          .lq-option { padding: 0.6rem 0.75rem; }
          .lq-result { padding: 1.25rem; }
          .lq-result-number { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
}
