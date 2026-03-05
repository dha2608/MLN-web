# Website triết học hiện đại

Website triết học với chatbot giới hạn nội dung, đăng nhập Google, thu thập dữ liệu hành vi và giao diện sáng, trí tuệ.

## Tính năng

- **Mini chatbot**: Chỉ trả lời trong phạm vi triết học (triết gia, trường phái, khái niệm). Từ chối lịch sự câu hỏi ngoài phạm vi.
- **Đăng nhập Google**: OAuth, lấy tên, email, ảnh đại diện; tự tạo user trong DB, lưu visitCount, sessions.
- **Thu thập dữ liệu**: Câu hỏi đã đặt, chủ đề, thời gian/số phiên, nội dung đã xem (phục vụ phân tích, không export CSV).
- **Hình ảnh**: Có alt, caption, nguồn (và link nguồn nếu online).
- **Sáng tạo**: Trắc nghiệm "Bạn thuộc trường phái nào?", So sánh 2 triết gia, Daily Quote (Marcus Aurelius, Khổng Tử), Bảng thống kê (triết gia/chủ đề hot, câu hỏi nhiều tương tác).

## Công nghệ

- **Frontend**: React (Vite), React Router, React Markdown. Theme: nền sáng (kem/trắng), accent xanh lam, font Cormorant Garamond + Outfit.
- **Backend**: Node.js, Express, MongoDB (Mongoose), Passport Google OAuth 2.0, session.

## Cài đặt & chạy

### 1. Backend

```bash
cd server
npm install
cp .env.example .env
# Chỉnh .env: MONGODB_URI, SESSION_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, FRONTEND_URL=http://localhost:5173
```

**Google OAuth**: Tạo project trên [Google Cloud Console](https://console.cloud.google.com/), bật Google+ API / People API, tạo OAuth 2.0 Client ID (Web application).  
- Authorized JavaScript origins: `http://localhost:5173` (và domain production nếu có).  
- **Authorized redirect URIs**:  
  - Khi chạy dev với Vite proxy: `http://localhost:5173/api/auth/google/callback`  
  - Nếu gọi backend trực tiếp: `http://localhost:4000/api/auth/google/callback`

Chạy MongoDB (local hoặc Atlas), rồi:

```bash
npm run dev
```

Backend chạy tại `http://localhost:4000`.

### 2. Frontend

```bash
cd client
npm install
npm run dev
```

Frontend chạy tại `http://localhost:5173`. Request `/api/*` được proxy tới backend (xem `client/vite.config.js`).

### 3. Production build

```bash
cd client && npm run build
# Serve thư mục client/dist qua cùng domain với API (để session cookie hoạt động), hoặc cấu hình CORS + cookie domain phù hợp.
```

## Cấu trúc thư mục

- `server/`: Express, auth, API chat/philosophers/concepts/quiz/quote/stats, models User/ChatMessage/Philosopher/Concept.
- `server/data/philosophyKnowledge.js`: Nội dung triết học cho chatbot (phạm vi trả lời + từ chối off-topic).
- `client/src/`: App, Layout, ChatBox, PrivacyBanner, các trang Home, Triết gia, Khái niệm, Dashboard, Quiz, So sánh, Thống kê.

## Quyền riêng tư

Có banner thông báo thu thập dữ liệu (đăng nhập, câu hỏi, nội dung xem) để phân tích và cải thiện; không bán dữ liệu. Người dùng có thể đóng banner sau khi đọc.

## Hình ảnh

Ảnh triết gia có thể thêm qua model Philosopher (imageUrl, imageAlt, imageCaption, imageSource, imageSourceUrl). Ví dụ nguồn: Wikimedia Commons – Public Domain, kèm link. Hiện tại dùng placeholder chữ cái đầu với caption/nguồn minh họa nội bộ.
