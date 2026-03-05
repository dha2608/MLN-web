import { Router } from 'express';

const router = Router();

const QUOTES = [
  { text: 'Bạn có quyền lực với tâm trí của mình — không phải với các sự kiện bên ngoài. Nhận ra điều này, và bạn sẽ tìm thấy sức mạnh.', author: 'Marcus Aurelius', source: 'Suy ngẫm (Meditations), Quyển VI', sourceUrl: 'https://en.wikipedia.org/wiki/Meditations' },
  { text: 'Sự giàu có thực sự không phải là có nhiều tài sản mà là có ít ham muốn.', author: 'Marcus Aurelius', source: 'Suy ngẫm (Meditations), Quyển IX', sourceUrl: 'https://en.wikipedia.org/wiki/Meditations' },
  { text: 'Kỷ sở bất dục, vật thi ư nhân.', author: 'Khổng Tử', source: 'Luận ngữ — Nhan Uyên thiên', sourceUrl: 'https://vi.wikipedia.org/wiki/Lu%E1%BA%ADn_ng%E1%BB%AF' },
  { text: 'Học mà không suy nghĩ thì vô ích; suy nghĩ mà không học thì nguy hiểm.', author: 'Khổng Tử', source: 'Luận ngữ — Vi Chính thiên', sourceUrl: 'https://vi.wikipedia.org/wiki/Lu%E1%BA%ADn_ng%E1%BB%AF' },
  { text: 'Đừng lãng phí thời gian tranh cãi về việc một người tốt nên là gì. Hãy là một người tốt.', author: 'Marcus Aurelius', source: 'Suy ngẫm (Meditations), Quyển X', sourceUrl: 'https://en.wikipedia.org/wiki/Meditations' },
  { text: 'Cuộc sống không được khảo sát thì không đáng sống.', author: 'Socrates', source: 'Biện hộ (Apology) — qua Plato', sourceUrl: 'https://vi.wikipedia.org/wiki/Bi%E1%BB%87n_h%E1%BB%99_(Plato)' },
  { text: 'Tôi biết rằng tôi không biết gì.', author: 'Socrates', source: 'Biện hộ (Apology) — qua Plato', sourceUrl: 'https://vi.wikipedia.org/wiki/Bi%E1%BB%87n_h%E1%BB%99_(Plato)' },
  { text: 'Chúng ta là những gì chúng ta lặp đi lặp lại. Vì vậy, sự xuất sắc không phải là một hành động mà là một thói quen.', author: 'Aristotle', source: 'Đạo đức học Nicomachus, Quyển II', sourceUrl: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BA%A1o_%C4%91%E1%BB%A9c_h%E1%BB%8Dc_Nicomachus' },
  { text: 'Kẻ nào chiến đấu với quái vật hãy cẩn thận kẻo tự mình trở thành quái vật.', author: 'Friedrich Nietzsche', source: 'Bên kia Thiện Ác (Beyond Good and Evil), Cách ngôn 146', sourceUrl: 'https://vi.wikipedia.org/wiki/B%C3%AAn_kia_Thi%E1%BB%87n_%C3%81c' },
  { text: 'Hai thứ đầy tâm hồn tôi bằng sự ngưỡng mộ và kính sợ không ngừng: bầu trời đầy sao phía trên tôi và quy luật đạo đức trong tôi.', author: 'Immanuel Kant', source: 'Phê phán Lý tính Thực hành — Kết luận', sourceUrl: 'https://vi.wikipedia.org/wiki/Ph%C3%AA_ph%C3%A1n_l%C3%BD_t%C3%ADnh_th%E1%BB%B1c_h%C3%A0nh' },
  { text: 'Hãy hành động chỉ theo châm ngôn mà bạn có thể đồng thời muốn nó trở thành quy luật phổ quát.', author: 'Immanuel Kant', source: 'Nền tảng Siêu hình học Đạo đức', sourceUrl: 'https://vi.wikipedia.org/wiki/N%E1%BB%81n_t%E1%BA%A3ng_si%C3%AAu_h%C3%ACnh_h%E1%BB%8Dc_%C4%91%E1%BA%A1o_%C4%91%E1%BB%A9c' },
  { text: 'Không có sự kiện, chỉ có những cách diễn giải.', author: 'Friedrich Nietzsche', source: 'Di cảo (Notebooks), 1886–1887', sourceUrl: 'https://vi.wikipedia.org/wiki/Friedrich_Nietzsche' },
  { text: 'Hạnh phúc là hoạt động của linh hồn phù hợp với đức hạnh.', author: 'Aristotle', source: 'Đạo đức học Nicomachus, Quyển I', sourceUrl: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BA%A1o_%C4%91%E1%BB%A9c_h%E1%BB%8Dc_Nicomachus' },
  { text: 'Người quân tử cầu ở mình, kẻ tiểu nhân cầu ở người.', author: 'Khổng Tử', source: 'Luận ngữ — Vệ Linh Công thiên', sourceUrl: 'https://vi.wikipedia.org/wiki/Lu%E1%BA%ADn_ng%E1%BB%AF' },
  { text: 'Hãy suy nghĩ về sự rộng lớn của thời gian và không gian, và cuộc đời ngắn ngủi của bạn chỉ là một điểm trong vũ trụ.', author: 'Marcus Aurelius', source: 'Suy ngẫm (Meditations), Quyển IV', sourceUrl: 'https://en.wikipedia.org/wiki/Meditations' },

  // Lão Tử — Đạo Đức Kinh
  { text: 'Đạo khả đạo, phi thường đạo — Đạo mà có thể diễn đạt bằng lời thì không phải là Đạo vĩnh hằng bất biến.', author: 'Lão Tử', source: 'Đạo Đức Kinh, Chương 1', sourceUrl: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BA%A1o_%C4%90%E1%BB%A9c_Kinh' },
  { text: 'Vô vi nhi vô bất vi — Không cưỡng cầu, không tranh giành, mà không gì là không được thành tựu.', author: 'Lão Tử', source: 'Đạo Đức Kinh, Chương 48', sourceUrl: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BA%A1o_%C4%90%E1%BB%A9c_Kinh' },
  { text: 'Không gì trên thế gian mềm mại và nhu thuận hơn nước, thế mà chính nước lại xói mòn và chinh phục được đá cứng nhất.', author: 'Lão Tử', source: 'Đạo Đức Kinh, Chương 78', sourceUrl: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BA%A1o_%C4%90%E1%BB%A9c_Kinh' },
  { text: 'Tri nhân giả trí, tự tri giả minh — Hiểu được người khác là trí tuệ; hiểu được chính mình mới là giác ngộ thực sự.', author: 'Lão Tử', source: 'Đạo Đức Kinh, Chương 33', sourceUrl: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BA%A1o_%C4%90%E1%BB%A9c_Kinh' },

  // René Descartes
  { text: 'Cogito, ergo sum — Tôi suy nghĩ, vậy tôi tồn tại.', author: 'René Descartes', source: 'Nguyên lý Triết học (Principia Philosophiae), Phần I, §7', sourceUrl: 'https://vi.wikipedia.org/wiki/Ren%C3%A9_Descartes' },
  { text: 'Nếu muốn tìm kiếm chân lý, ít nhất một lần trong đời chúng ta phải đặt tất cả mọi thứ vào vòng nghi ngờ một cách triệt để nhất có thể.', author: 'René Descartes', source: 'Nguyên lý Triết học (Principia Philosophiae), Phần I', sourceUrl: 'https://vi.wikipedia.org/wiki/Ren%C3%A9_Descartes' },
  { text: 'Chưa đủ khi chỉ sở hữu một trí tuệ tốt; điều quan trọng hơn là phải vận dụng nó một cách đúng đắn.', author: 'René Descartes', source: 'Phương pháp luận (Discours de la méthode), Phần I', sourceUrl: 'https://vi.wikipedia.org/wiki/Ren%C3%A9_Descartes' },

  // Jean-Paul Sartre
  { text: 'Hiện sinh có trước bản chất — Con người trước tiên tồn tại, rồi sau đó mới tự định nghĩa và tạo ra bản thân mình.', author: 'Jean-Paul Sartre', source: 'Chủ nghĩa hiện sinh là một chủ nghĩa nhân văn (L\'existentialisme est un humanisme)', sourceUrl: 'https://vi.wikipedia.org/wiki/Jean-Paul_Sartre' },
  { text: 'Con người bị kết án phải tự do — kể từ khi được ném vào thế giới, anh ta hoàn toàn chịu trách nhiệm về mọi hành động của mình.', author: 'Jean-Paul Sartre', source: 'Hữu thể và Hư vô (L\'Être et le Néant)', sourceUrl: 'https://vi.wikipedia.org/wiki/Jean-Paul_Sartre' },
  { text: 'Địa ngục chính là những người khác — không phải vì họ xấu xa, mà vì ánh mắt phán xét của họ khiến ta mất đi tự do định nghĩa chính mình.', author: 'Jean-Paul Sartre', source: 'Không lối thoát (Huis Clos)', sourceUrl: 'https://vi.wikipedia.org/wiki/Jean-Paul_Sartre' },

  // Thêm từ các triết gia hiện có
  { text: 'Hãy biết chính mình — đây là nền tảng của mọi trí tuệ và là khởi đầu của con đường triết học.', author: 'Socrates', source: 'Philebus — ghi lại qua Plato', sourceUrl: 'https://vi.wikipedia.org/wiki/Bi%E1%BB%87n_h%E1%BB%99_(Plato)' },
  { text: 'Những gì chúng ta nhìn thấy bằng mắt thường chỉ là bóng của thực tại — chân lý đích thực tồn tại trong thế giới của các ý niệm vĩnh hằng.', author: 'Plato', source: 'Cộng hòa (The Republic), Quyển VII — Ẩn dụ hang động', sourceUrl: 'https://vi.wikipedia.org/wiki/N%C6%B0%E1%BB%9Bc_C%E1%BB%99ng_h%C3%B2a_(Plato)' },
  { text: 'Con người theo bản chất là một sinh vật chính trị — chỉ trong cộng đồng, con người mới có thể sống trọn vẹn và đạt đến đức hạnh.', author: 'Aristotle', source: 'Chính trị học (Politics), Quyển I, Chương 2', sourceUrl: 'https://vi.wikipedia.org/wiki/Aristotle' },
  { text: 'Khai sáng là sự thoát ra của con người khỏi trạng thái chưa trưởng thành do chính họ tạo ra — hãy dám dùng trí tuệ của chính mình!', author: 'Immanuel Kant', source: 'Khai sáng là gì? (Was ist Aufklärung?, 1784)', sourceUrl: 'https://vi.wikipedia.org/wiki/Immanuel_Kant' },
  { text: 'Điều không giết được tôi sẽ làm tôi mạnh mẽ hơn.', author: 'Friedrich Nietzsche', source: 'Chạng vạng của những thần tượng (Götzen-Dämmerung), Châm ngôn 8', sourceUrl: 'https://vi.wikipedia.org/wiki/Friedrich_Nietzsche' }
];

function getDailyQuote() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (24 * 60 * 60 * 1000));
  return QUOTES[dayOfYear % QUOTES.length];
}

router.get('/daily', (req, res) => {
  res.json({ quote: getDailyQuote() });
});

export default router;
