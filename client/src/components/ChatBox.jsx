import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { chat as chatApi } from '../api';

const SAMPLE_QUESTIONS = [
  'Socrates và phương pháp đối thoại là gì?',
  'Plato nói gì về thuyết ý niệm?',
  'Kant và đạo đức học bổn phận',
  'So sánh Plato và Aristotle',
  'Khái niệm trung đạo của Aristotle',
];

export default function ChatBox({ user }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (open && user) {
      chatApi.history().then(({ messages: m }) => setMessages(m || []));
    } else if (!user && open) {
      setMessages([]);
    }
  }, [open, user]);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, thinking]);

  const send = async (text) => {
    const content = (text || input).trim();
    if (!content) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content }]);
    setThinking(true);
    try {
      const { reply } = await chatApi.send(content);
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Xin lỗi, đã có lỗi. Bạn thử lại sau nhé.' }]);
    } finally {
      setThinking(false);
    }
  };

  return (
    <>
      <div className={`chat-box-wrap ${open ? 'open' : ''}`}>
        <div className="chat-box">
          {/* Gradient header */}
          <div className="chat-header">
            <div className="chat-header-left">
              <span className="chat-avatar" aria-hidden="true">{'\u03A6'}</span>
              <div className="chat-header-info">
                <span className="chat-header-title">Trợ lý triết học</span>
                <span className="chat-header-status">
                  <span className="status-dot" aria-hidden="true" />
                  Sẵn sàng
                </span>
              </div>
            </div>
            <button type="button" className="chat-close" onClick={() => setOpen(false)} aria-label="Đóng chat">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          <div className="chat-messages" ref={listRef}>
            {messages.length === 0 && !thinking && (
              <div className="chat-welcome">
                <div className="chat-welcome-icon" aria-hidden="true">{'\u03A6'}</div>
                <p className="chat-welcome-title">Xin chào!</p>
                <p className="chat-welcome-desc">Tôi chỉ trả lời trong phạm vi <strong>triết học</strong>: triết gia, trường phái, khái niệm.</p>
                <p className="chat-samples-label">Gợi ý câu hỏi:</p>
                <div className="chat-samples">
                  {SAMPLE_QUESTIONS.map((q, i) => (
                    <button key={i} type="button" className="sample-pill" onClick={() => send(q)}>{q}</button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.role}`}>
                {m.role === 'assistant' && (
                  <span className="msg-avatar" aria-hidden="true">{'\u03A6'}</span>
                )}
                {m.role === 'assistant' ? (
                  <div className="msg-content markdown"><ReactMarkdown>{m.content}</ReactMarkdown></div>
                ) : (
                  <div className="msg-content">{m.content}</div>
                )}
              </div>
            ))}
            {thinking && (
              <div className="chat-msg assistant">
                <span className="msg-avatar" aria-hidden="true">{'\u03A6'}</span>
                <div className="msg-content thinking">
                  <span className="dot" /> <span className="dot" /> <span className="dot" />
                </div>
              </div>
            )}
          </div>

          <form className="chat-form" onSubmit={(e) => { e.preventDefault(); send(); }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Hỏi về triết gia, trường phái..."
              maxLength={1000}
              aria-label="Tin nhắn"
            />
            <button type="submit" disabled={thinking} aria-label="Gửi tin nhắn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </button>
          </form>
        </div>
      </div>

      {/* Toggle button */}
      <button
        type="button"
        className={`chat-toggle ${open ? 'chat-toggle--active' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Đóng chat' : 'Mở chat'}
        aria-expanded={open}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )}
      </button>

      <style>{`
        .chat-box-wrap {
          position: fixed;
          bottom: 84px;
          right: 20px;
          width: 380px;
          max-width: calc(100vw - 40px);
          height: 520px;
          max-height: 72vh;
          background: var(--bg-card);
          border-radius: var(--radius-xl);
          box-shadow: 0 20px 60px rgba(44,82,130,0.15), 0 0 0 1px var(--border-light);
          transform: translateY(16px) scale(0.96);
          opacity: 0;
          visibility: hidden;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease, visibility 0.3s;
          z-index: 90;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .chat-box-wrap.open {
          transform: translateY(0) scale(1);
          opacity: 1;
          visibility: visible;
        }
        .chat-box { display: flex; flex-direction: column; height: 100%; }

        /* Header */
        .chat-header {
          padding: 0.85rem 1rem;
          background: var(--gradient-accent);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .chat-header-left {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .chat-avatar {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.2);
          border-radius: var(--radius-sm);
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 600;
        }
        .chat-header-info { display: flex; flex-direction: column; gap: 0; }
        .chat-header-title { font-weight: 600; font-size: 0.95rem; line-height: 1.2; }
        .chat-header-status {
          font-size: 0.72rem;
          opacity: 0.8;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #68d391;
          display: inline-block;
        }
        .chat-close {
          background: rgba(255,255,255,0.15);
          border: none;
          color: white;
          cursor: pointer;
          padding: 6px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background var(--transition);
        }
        .chat-close:hover { background: rgba(255,255,255,0.3); }

        /* Messages */
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          background: var(--bg-alt);
        }

        /* Welcome */
        .chat-welcome {
          text-align: center;
          padding: 1rem 0.5rem;
        }
        .chat-welcome-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 0.75rem;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 600;
        }
        .chat-welcome-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 600;
          margin: 0 0 0.35rem;
          color: var(--text);
        }
        .chat-welcome-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0 0 1rem;
          line-height: 1.5;
        }
        .chat-samples-label {
          font-size: 0.78rem;
          color: var(--text-light);
          margin: 0 0 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          font-weight: 500;
        }
        .chat-samples {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          justify-content: center;
        }
        .sample-pill {
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--accent);
          cursor: pointer;
          padding: 0.35rem 0.75rem;
          border-radius: 99px;
          font-family: inherit;
          font-size: 0.78rem;
          transition: all var(--transition);
          text-align: left;
        }
        .sample-pill:hover {
          background: var(--accent-light);
          border-color: var(--accent);
          transform: translateY(-1px);
        }

        /* Message bubbles */
        .chat-msg { display: flex; gap: 0.5rem; align-items: flex-end; }
        .chat-msg.user { justify-content: flex-end; }
        .msg-avatar {
          width: 26px;
          height: 26px;
          flex-shrink: 0;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: var(--radius-xs);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-serif);
          font-size: 0.75rem;
          font-weight: 600;
        }
        .chat-msg.user .msg-content {
          background: var(--gradient-accent);
          color: white;
          margin-left: auto;
          max-width: 82%;
          padding: 0.55rem 0.85rem;
          border-radius: var(--radius) var(--radius) var(--radius-xs) var(--radius);
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .chat-msg.assistant .msg-content {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          padding: 0.55rem 0.85rem;
          border-radius: var(--radius-xs) var(--radius) var(--radius) var(--radius);
          max-width: 90%;
          font-size: 0.88rem;
          line-height: 1.55;
          box-shadow: var(--shadow-xs);
        }
        .chat-msg .markdown p { margin: 0 0 0.4rem 0; }
        .chat-msg .markdown p:last-child { margin-bottom: 0; }
        .chat-msg .markdown strong { color: var(--accent); }
        .chat-msg .markdown ul { margin: 0.4rem 0; padding-left: 1.25rem; }

        /* Thinking dots */
        .thinking .dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          background: var(--accent);
          opacity: 0.4;
          border-radius: 50%;
          animation: chat-dot 1.4s ease-in-out infinite both;
        }
        .thinking .dot:nth-child(2) { animation-delay: 0.2s; }
        .thinking .dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes chat-dot {
          0%,80%,100% { transform: scale(0.6); opacity: 0.3; }
          40% { transform: scale(1); opacity: 1; }
        }

        /* Form */
        .chat-form {
          display: flex;
          gap: 0.5rem;
          padding: 0.75rem;
          border-top: 1px solid var(--border-light);
          background: var(--bg-card);
        }
        .chat-form input {
          flex: 1;
          padding: 0.6rem 0.85rem;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          font-family: inherit;
          font-size: 0.9rem;
          background: var(--bg);
          color: var(--text);
          transition: border-color var(--transition);
        }
        .chat-form input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(44,82,130,0.12); outline: none; }
        .chat-form button {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-accent);
          color: white;
          border: none;
          border-radius: var(--radius);
          cursor: pointer;
          flex-shrink: 0;
          transition: all var(--transition);
        }
        .chat-form button:hover { box-shadow: var(--shadow-accent); transform: scale(1.1); }
        .chat-form button:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }

        /* Toggle */
        .chat-toggle {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--gradient-accent);
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 28px rgba(44,82,130,0.25);
          z-index: 89;
          transition: all var(--transition-bounce);
        }
        .chat-toggle:hover { transform: scale(1.08); box-shadow: 0 10px 36px rgba(44,82,130,0.3); }
        .chat-toggle:active { transform: scale(0.96); }
        .chat-toggle--active { background: var(--text); }

        @media (max-width: 480px) {
          .chat-box-wrap { right: 0; bottom: 0; width: 100vw; max-width: 100vw; height: 85vh; max-height: 85vh; border-radius: var(--radius-xl) var(--radius-xl) 0 0; }
          .chat-toggle { right: 14px; bottom: 14px; width: 52px; height: 52px; }
        }
      `}</style>
    </>
  );
}
