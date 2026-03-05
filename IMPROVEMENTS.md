# Kế hoạch cải tiến và mở rộng — Triết học

Tiêu chí: **sáng tạo**, **thiết kế đẹp**, trải nghiệm người dùng tốt hơn.

---

## 1. Kế hoạch cải tiến (Plan)

### 1.1 Design system & giao diện toàn cục
- [x] Mở rộng biến CSS (gradient, radius, transition, shadow) để giao diện thống nhất và dễ bảo trì.
- [x] Thêm utility classes dùng chung: `.page`, `.page-title`, `.btn`, `.card` trong `index.css` để giảm lặp inline style.
- [x] Animation nhẹ: fade-in khi vào trang, stagger cho danh sách thẻ (cards).
- [x] Loading state: spinner thống nhất thay cho chữ "Đang tải...".

### 1.2 Header & điều hướng
- [x] Menu mobile: hamburger + drawer khi màn hình nhỏ.
- [x] Header: tinh chỉnh khoảng cách, hover rõ ràng, logo kèm subtitle "Tư duy & Khám phá".
- [x] Footer: thêm footer với link nhanh (Trang chủ, Triết gia, Khái niệm, Trắc nghiệm, So sánh, Thống kê) và bản quyền.

### 1.3 Trang chủ (Home)
- [x] Hero: nền gradient nhẹ (kem → xanh nhạt), typography nổi bật, CTA rõ ràng.
- [x] Khối quote: viền trái trang trí, nền tách biệt, font chữ dễ đọc.
- [x] Feature cards: hover nâng nhẹ (lift), shadow đẹp, số thứ tự trang trí (01–04).

### 1.4 ChatBox & Privacy
- [x] ChatBox: bóng đổ mềm hơn, animation mở/đóng mượt (scale + translate).
- [x] Privacy banner: dùng style global, nút "Tôi hiểu" rõ ràng.

### 1.5 Các trang nội dung
- [x] Triết gia / Khái niệm: dùng design system chung, card hover thống nhất, loading spinner.
- [x] Trắc nghiệm: dùng class .btn global, kết quả có visual rõ ràng.
- [x] Chi tiết triết gia/khái niệm: layout ảnh + chữ cân đối, back link rõ ràng, loading spinner.
- [x] So sánh, Thống kê, Dashboard: loading spinner, bỏ style trùng lặp.

### 1.6 Mở rộng (optional / sau này)
- [ ] Dark mode (toggle theme).
- [ ] Trang "Giới thiệu" / "Về chúng tôi".
- [ ] Breadcrumb trên trang con.

---

## 2. Tiến trình thực hiện (Progress)

*Cập nhật khi hoàn thành từng hạng mục.*

| Hạng mục | Trạng thái | Ghi chú |
|----------|------------|--------|
| Design system (CSS variables, animations, utilities) | ✅ Hoàn thành | `index.css`: --gradient-hero, --radius, .page, .btn, .card, .loading-spinner, .stagger-*, pageFadeIn |
| Layout: menu mobile + footer | ✅ Hoàn thành | Hamburger < 768px, drawer mở/đóng, footer nav + copyright |
| Home: hero, quote, feature cards | ✅ Hoàn thành | Hero gradient, quote viền trái, cards số 01–04, hover lift |
| ChatBox & PrivacyBanner polish | ✅ Hoàn thành | ChatBox scale/translate animation, shadow-lg; Privacy dùng global style |
| Đồng bộ style các trang | ✅ Hoàn thành | Spinner thay "Đang tải...", .page--narrow / .page--quiz, bỏ style trùng |

---

## 3. Tóm tắt thay đổi (Summary)

- **client/src/index.css**: Biến mới (--gradient-hero, --shadow-md/lg, --radius-*, --transition), utility .page / .page-title / .page-desc, .btn / .card, .loading-wrap / .loading-spinner, .back-link, animation pageFadeIn + fadeInUp + stagger-1..6, style .privacy-banner.
- **client/src/components/Layout.jsx**: Logo + subtitle, nav desktop/mobile, nút hamburger, drawer nav-mobile, footer với link + copyright.
- **client/src/pages/Home.jsx**: Hero có .hero-bg gradient, daily quote viền trái, feature cards với .feature-num và stagger.
- **client/src/components/ChatBox.jsx**: Border-radius và shadow dùng biến, animation mở/đóng mượt hơn.
- **Các trang**: Loading dùng .loading-wrap + .loading-spinner; dùng .page--narrow / .page--quiz; Philosophers dùng .card + stagger; bỏ khối style trùng .page / .page-title / .page-desc ở từng trang.

*Tài liệu này sẽ được cập nhật sau mỗi đợt cải tiến.*
