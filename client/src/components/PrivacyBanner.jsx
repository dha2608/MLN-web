import { useState, useEffect } from 'react';

const KEY = 'philosophy_privacy_accepted';

export default function PrivacyBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch (_) {}
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(KEY, '1');
    } catch (_) {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="privacy-banner" role="dialog" aria-label="Thông báo quyền riêng tư">
      <div className="privacy-icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </div>
      <span>
        Chúng tôi thu thập dữ liệu đăng nhập (tên, email, ảnh đại diện), câu hỏi bạn đặt với chatbot và nội dung bạn xem để phân tích xu hướng và cải thiện trải nghiệm. Chúng tôi không bán dữ liệu của bạn.
      </span>
      <button type="button" onClick={accept}>Tôi hiểu</button>
    </div>
  );
}
