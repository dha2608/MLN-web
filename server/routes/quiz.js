import { Router } from 'express';
import QuizResult from '../models/QuizResult.js';
import { optionalAuth } from '../middleware/auth.js';

const router = Router();

const QUIZ_QUESTIONS = [
  {
    id: '1',
    question: 'Bạn tin rằng con người nên hành động thế nào?',
    options: [
      { id: 'a', text: 'Theo bổn phận và quy luật phổ quát', school: 'Kant' },
      { id: 'b', text: 'Vượt lên giá trị cũ, sáng tạo giá trị mới', school: 'Nietzsche' },
      { id: 'c', text: 'Theo đức hạnh và trung đạo', school: 'Aristotle' },
      { id: 'd', text: 'Chấp nhận số phận, kiểm soát phản ứng', school: 'Khắc kỷ' }
    ]
  },
  {
    id: '2',
    question: 'Nguồn gốc tri thức quan trọng nhất là gì?',
    options: [
      { id: 'a', text: 'Đối thoại và chất vấn để tự phát hiện chân lý', school: 'Socrates' },
      { id: 'b', text: 'Lý tính và các phạm trù', school: 'Kant' },
      { id: 'c', text: 'Ý niệm bất biến vượt trên cảm giác', school: 'Plato' },
      { id: 'd', text: 'Quan sát và logic quy nạp', school: 'Aristotle' }
    ]
  },
  {
    id: '3',
    question: 'Đối với những điều không kiểm soát được, bạn thường:',
    options: [
      { id: 'a', text: 'Chấp nhận và tập trung vào điều mình kiểm soát được', school: 'Khắc kỷ' },
      { id: 'b', text: 'Cố gắng vượt lên và biến nó thành sức mạnh', school: 'Nietzsche' },
      { id: 'c', text: 'Suy xét theo lý tính và bổn phận', school: 'Kant' },
      { id: 'd', text: 'Tìm trung đạo trong cảm xúc và hành vi', school: 'Aristotle' }
    ]
  },
  {
    id: '4',
    question: 'Khi gặp bất đồng quan điểm, bạn thường làm gì?',
    options: [
      { id: 'a', text: 'Đặt câu hỏi để cùng nhau tìm ra sự thật', school: 'Socrates' },
      { id: 'b', text: 'Tìm điểm chung qua đạo đức và lễ nghĩa', school: 'Khổng Tử' },
      { id: 'c', text: 'Giữ bình tĩnh và chấp nhận khác biệt', school: 'Khắc kỷ' },
      { id: 'd', text: 'Phân tích logic để tìm ra ai đúng', school: 'Aristotle' }
    ]
  },
  {
    id: '5',
    question: 'Điều gì quan trọng nhất trong cuộc sống?',
    options: [
      { id: 'a', text: 'Sống có đức hạnh, giữ mối quan hệ tốt đẹp', school: 'Khổng Tử' },
      { id: 'b', text: 'Tìm kiếm sự thật và hiểu chính mình', school: 'Socrates' },
      { id: 'c', text: 'Tự do sáng tạo và vượt qua giới hạn', school: 'Nietzsche' },
      { id: 'd', text: 'Hướng tới thế giới lý tưởng và cái đẹp', school: 'Plato' }
    ]
  },
  {
    id: '6',
    question: 'Bạn nghĩ thế nào về đạo đức?',
    options: [
      { id: 'a', text: 'Đạo đức là bổn phận phổ quát, ai cũng phải tuân theo', school: 'Kant' },
      { id: 'b', text: 'Đạo đức là thói quen rèn luyện theo đức hạnh', school: 'Aristotle' },
      { id: 'c', text: 'Đạo đức do kẻ mạnh sáng tạo, không phải bất biến', school: 'Nietzsche' },
      { id: 'd', text: 'Đạo đức bắt đầu từ gia đình và mối quan hệ', school: 'Khổng Tử' }
    ]
  },
  {
    id: '7',
    question: 'Bạn phản ứng thế nào khi đối mặt khó khăn?',
    options: [
      { id: 'a', text: 'Xem khó khăn là cơ hội rèn nội tâm', school: 'Khắc kỷ' },
      { id: 'b', text: 'Phân tích vấn đề một cách logic và hệ thống', school: 'Aristotle' },
      { id: 'c', text: 'Tự hỏi "mình thật sự biết gì về vấn đề này?"', school: 'Socrates' },
      { id: 'd', text: 'Biến đau khổ thành động lực để mạnh mẽ hơn', school: 'Nietzsche' }
    ]
  },
  {
    id: '8',
    question: 'Theo bạn, bản chất của thực tại là gì?',
    options: [
      { id: 'a', text: 'Thực tại đích thực là thế giới ý niệm vĩnh cửu, vượt trên vật chất', school: 'Plato' },
      { id: 'b', text: 'Thực tại gồm hai thực thể tách biệt: tư duy và vật chất', school: 'Descartes' },
      { id: 'c', text: 'Thực tại tối cao là Đạo — vô hình nhưng vận hành vạn vật', school: 'Lão Tử' },
      { id: 'd', text: 'Thực tại là vật chất cụ thể có hình thức và mục đích', school: 'Aristotle' }
    ]
  },
  {
    id: '9',
    question: 'Tự do thật sự có nghĩa là gì với bạn?',
    options: [
      { id: 'a', text: 'Con người hoàn toàn tự do và phải chịu trách nhiệm tuyệt đối cho lựa chọn của mình', school: 'Sartre' },
      { id: 'b', text: 'Tự do thật sự là tuân theo lý tính và bổn phận đạo đức', school: 'Kant' },
      { id: 'c', text: 'Tự do là khả năng tự vượt qua giới hạn và sáng tạo giá trị của chính mình', school: 'Nietzsche' },
      { id: 'd', text: 'Tự do nằm ở việc kiểm soát phản ứng nội tâm, không phải hoàn cảnh bên ngoài', school: 'Khắc kỷ' }
    ]
  },
  {
    id: '10',
    question: 'Khi đối diện với đau khổ và nghịch cảnh, bạn nghĩ ta nên:',
    options: [
      { id: 'a', text: 'Thuận theo tự nhiên, không cưỡng cầu — nước mềm nhưng thắng đá cứng', school: 'Lão Tử' },
      { id: 'b', text: 'Đón nhận gian khó như bài tập rèn luyện đức hạnh và nghị lực', school: 'Khắc kỷ' },
      { id: 'c', text: '"Điều không giết được tôi sẽ làm tôi mạnh mẽ hơn"', school: 'Nietzsche' },
      { id: 'd', text: 'Đau khổ là trạng thái ta lựa chọn — ta hoàn toàn tự do để nhìn nhận nó khác đi', school: 'Sartre' }
    ]
  },
  {
    id: '11',
    question: 'Phương pháp học hỏi và tìm kiếm tri thức lý tưởng nhất là gì?',
    options: [
      { id: 'a', text: 'Nhận ra mình không biết gì — đó là khởi đầu của tri thức chân thật', school: 'Socrates' },
      { id: 'b', text: 'Hoài nghi triệt để mọi thứ cho đến khi tìm được chân lý không thể phủ nhận', school: 'Descartes' },
      { id: 'c', text: 'Học phải gắn liền với thực hành và tu dưỡng đạo đức từng ngày', school: 'Khổng Tử' },
      { id: 'd', text: 'Tri thức đến từ quan sát thực nghiệm và phân loại có hệ thống', school: 'Aristotle' }
    ]
  },
  {
    id: '12',
    question: 'Theo bạn, mối quan hệ với người khác nên được xây dựng như thế nào?',
    options: [
      { id: 'a', text: 'Qua lễ nghĩa, nhân ái và ý thức về trách nhiệm trong từng vai trò xã hội', school: 'Khổng Tử' },
      { id: 'b', text: 'Người khác là "địa ngục" — nhưng cũng là gương để ta nhận ra chính mình', school: 'Sartre' },
      { id: 'c', text: 'Quan hệ tốt đẹp khi thuận tự nhiên, không cưỡng ép hay kiểm soát lẫn nhau', school: 'Lão Tử' },
      { id: 'd', text: 'Luôn đối xử với người khác như mục đích tự thân, không phải phương tiện', school: 'Kant' }
    ]
  }
];

const SCHOOL_DESCRIPTIONS = {
  'Socrates': 'Bạn có xu hướng triết học Socrates: coi trọng đối thoại, chất vấn và "biết rằng mình không biết gì".',
  'Plato': 'Bạn gần với tư tưởng Plato: tin vào ý niệm, lý tính và cấu trúc lý tưởng.',
  'Aristotle': 'Bạn thiên về Aristotle: trung đạo, đức hạnh thực hành và logic.',
  'Kant': 'Bạn gần với Kant: đạo đức bổn phận và mệnh lệnh nhất quyết.',
  'Nietzsche': 'Bạn có nét Nietzsche: ý chí quyền lực, siêu nhân và sáng tạo giá trị.',
  'Khắc kỷ': 'Bạn gần với Khắc kỷ: chấp nhận số phận, kiểm soát nội tâm.',
  'Khổng Tử': 'Bạn gần với Khổng Tử: coi trọng đức hạnh, lễ nghĩa, mối quan hệ xã hội hài hòa.',
  'Lão Tử': 'Bạn gần với tư tưởng Lão Tử và Đạo giáo: tin vào vô vi, thuận theo tự nhiên và sức mạnh tiềm ẩn của sự mềm mại, không cưỡng cầu.',
  'Descartes': 'Bạn thiên về Descartes và Duy lý luận: đặt lý tính và tư duy làm nền tảng, hoài nghi có phương pháp để tìm đến chân lý vững chắc.',
  'Sartre': 'Bạn gần với Sartre và triết học Hiện sinh: đề cao tự do tuyệt đối, trách nhiệm cá nhân và việc tự kiến tạo ý nghĩa cho cuộc đời mình.'
};

router.get('/questions', (req, res) => {
  res.json({ questions: QUIZ_QUESTIONS });
});

router.post('/submit', optionalAuth, async (req, res) => {
  const { answers } = req.body; // { "1": "a", "2": "c", "3": "a" }
  if (!answers || typeof answers !== 'object') {
    return res.status(400).json({ error: 'answers required' });
  }
  const counts = {};
  for (const q of QUIZ_QUESTIONS) {
    const choiceId = answers[q.id];
    const opt = q.options.find(o => o.id === choiceId);
    if (opt) counts[opt.school] = (counts[opt.school] || 0) + 1;
  }
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const top = sorted[0];
  const result = {
    primarySchool: top?.[0] || 'Khắc kỷ',
    score: counts,
    description: top ? SCHOOL_DESCRIPTIONS[top[0]] || 'Bạn có sự pha trộn nhiều trường phái.' : 'Hãy thử lại với đầy đủ câu trả lời.'
  };

  // Save quiz result to DB
  try {
    await QuizResult.create({
      user: req.user?._id || null,
      primarySchool: result.primarySchool,
      score: counts,
    });
  } catch { /* non-blocking */ }

  res.json(result);
});

export default router;
