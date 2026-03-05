/**
 * Nội dung triết học cho chatbot - chỉ trả lời trong phạm vi này.
 * Từ chối lịch sự câu hỏi ngoài triết học.
 */

export const PHILOSOPHERS = {
  socrates: {
    name: 'Socrates',
    nameVi: 'Socrates',
    birthDeath: 'k. 470–399 TCN',
    era: 'Cổ đại',
    school: 'Triết học Hy Lạp cổ đại',
    summary: 'Socrates (k. 470–399 TCN) là triết gia Athens, được coi là một trong những người sáng lập triết học phương Tây. Ông không để lại bất kỳ tác phẩm viết nào — toàn bộ tư tưởng được biết đến qua các đối thoại của Plato và ghi chép của Xenophon. Phương pháp đối thoại Socrates (Socratic method) — đặt câu hỏi liên tiếp để buộc đối phương tự phát hiện mâu thuẫn — là di sản triết học lớn nhất của ông. Socrates bị xử tử bằng thuốc độc năm 399 TCN vì bị kết tội "bại hoại thanh niên và không tôn kính các thần", nhưng cái chết của ông trở thành biểu tượng cho lòng can đảm trí thức và sự trung thành với chân lý.',
    imageUrl: 'https://imgs.search.brave.com/vU4mGKg6PEAbCKZYeNJwLGqeAVQ_IO7pB-L78dGenWw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2JjL1Nv/Y3JhdGVfZHVfTG91/dnJlLmpwZy81MTJw/eC1Tb2NyYXRlX2R1/X0xvdXZyZS5qcGc',
    imageAlt: 'Tượng bán thân Socrates bằng đá cẩm thạch, Bảo tàng Louvre',
    imageCaption: 'Tượng bán thân Socrates bằng đá cẩm thạch tại Bảo tàng Louvre, Paris',
    imageSource: 'Wikimedia Commons — Public Domain',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Socrate_du_Louvre.jpg',
    concepts: [
      'Phương pháp đối thoại (Socratic method): đặt câu hỏi liên tiếp để đối phương tự phát hiện mâu thuẫn và đi tới định nghĩa rõ ràng.',
      '"Tôi biết rằng tôi không biết gì" – nhấn mạnh sự khiêm tốn nhận thức.',
      'Đức hạnh là tri thức; ai hiểu đúng sẽ hành động đúng.',
      'Sống không suy xét không đáng sống.',
      'Irony của Socrates: giả vờ không biết để khuyến khích người khác tự suy nghĩ — một công cụ giáo dục và triết học tinh tế.',
      'Daimonion — tiếng nói nội tâm: Socrates tin rằng có một "dấu hiệu thần linh" bên trong cảnh báo ông khi sắp làm điều sai.'
    ],
    quotes: [
      { text: 'Cuộc sống không được khảo sát thì không đáng sống.', source: 'Biện hộ (Apology)' },
      { text: 'Tôi biết rằng tôi không biết gì.', source: 'Biện hộ (Apology)' },
      { text: 'Hãy mạnh mẽ trong tâm trí, dịu dàng trong cách cư xử.', source: 'Qua Plato' },
      { text: 'Giáo dục là thắp lên ngọn lửa, không phải đổ đầy bình.', source: 'Qua Plutarch' },
      { text: 'Hãy biết chính mình.', source: 'Philebus — qua Plato (ghi trên đền Delphi)' },
      { text: 'Cái chết có thể là điều tốt nhất xảy đến với con người, nhưng mọi người sợ nó như thể biết chắc đó là điều tồi tệ nhất.', source: 'Biện hộ (Apology)' }
    ],
    works: [
      { title: 'Không có tác phẩm viết', year: '', description: 'Tư tưởng được truyền miệng, ghi lại qua các đối thoại của Plato và ghi chép của Xenophon.' }
    ],
    influences: ['Parmenides', 'Heraclitus', 'Anaxagoras'],
    influencedBy: ['Plato', 'Xenophon', 'Aristotle', 'Triết học phương Tây']
  },
  plato: {
    name: 'Plato',
    nameVi: 'Plato',
    birthDeath: 'k. 428–348 TCN',
    era: 'Cổ đại',
    school: 'Triết học Hy Lạp cổ đại',
    summary: 'Plato (k. 428–348 TCN) là học trò xuất sắc nhất của Socrates và là người sáng lập Học viện Athens — trường đại học đầu tiên trong lịch sử phương Tây. Ông để lại khoảng 36 đối thoại triết học, trong đó nổi tiếng nhất là Cộng hòa (Republic) với ẩn dụ hang động và thuyết ý niệm. Plato cho rằng thế giới vật chất chỉ là bóng mờ của thế giới ý niệm vĩnh cửu, bất biến — và nhiệm vụ của triết gia là hướng tới cái Thiện tối cao. Ảnh hưởng của ông đối với triết học phương Tây là không thể đo lường — Alfred North Whitehead từng nói toàn bộ triết học phương Tây chỉ là "chú thích cho Plato".',
    imageUrl: 'https://imgs.search.brave.com/nPCNj5fViCbnTq-l5Hh1d7X9_5XSvPAUj4Pex--5vCU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9wbGF0b2Fu/Y2llbnQtZ3JlZWst/cGhpbG9zb3BoZXIt/MjYwbnctMTYwMzgy/ODIyLmpwZw',
    imageAlt: 'Tượng bán thân Plato, bản sao La Mã theo nguyên bản của Silanion',
    imageCaption: 'Tượng bán thân Plato – bản sao La Mã theo nguyên bản của Silanion, Bảo tàng Capitolini',
    imageSource: 'Wikimedia Commons — Public Domain',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Plato_Silanion_Musei_Capitolini_MC1377.jpg',
    concepts: [
      'Thuyết ý niệm (Theory of Forms): thế giới cảm tính chỉ là bóng của thế giới ý niệm vĩnh cửu, bất biến.',
      'Con người có linh hồn bất tử, từng "thấy" các ý niệm trước khi nhập thể.',
      'Nhà nước lý tưởng do triết gia cai trị; ba phần linh hồn (lý trí, ý chí, dục vọng) tương ứng ba đẳng cấp.',
      'Công bằng là mỗi phần làm đúng chức năng của mình.',
      'Ẩn dụ hang động (Allegory of the Cave): con người sống như tù nhân trong hang, chỉ thấy bóng tối — triết gia là người thoát ra ánh sáng và nhận ra thực tại đích thực.',
      'Eros triết học: tình yêu (Eros) không chỉ là đam mê thể xác mà là khao khát hướng tới cái Đẹp, cái Thiện tối cao.'
    ],
    quotes: [
      { text: 'Kẻ thù lớn nhất của tri thức không phải là sự dốt nát, mà là ảo tưởng rằng mình có tri thức.', source: 'Cộng hòa (Republic)' },
      { text: 'Người thông thái nói vì có điều cần nói; kẻ ngu nói vì phải nói điều gì đó.', source: 'Qua truyền thống' },
      { text: 'Hãy tử tế với mọi người, vì ai cũng đang chiến đấu một trận chiến khó khăn.', source: 'Qua truyền thống' },
      { text: 'Âm nhạc mang lại linh hồn cho vũ trụ, đôi cánh cho tâm trí, chuyến bay cho trí tưởng tượng.', source: 'Qua truyền thống' },
      { text: 'Chúng ta dễ dàng tha thứ cho đứa trẻ sợ bóng tối. Bi kịch thực sự là khi người lớn sợ ánh sáng.', source: 'Cộng hòa (Republic)' }
    ],
    works: [
      { title: 'Cộng hòa (Republic)', year: 'k. 375 TCN', description: 'Đối thoại về công bằng, nhà nước lý tưởng và thuyết ý niệm. Chứa ẩn dụ hang động nổi tiếng.' },
      { title: 'Symposium (Bữa tiệc)', year: 'k. 385 TCN', description: 'Đối thoại về bản chất của tình yêu (Eros) qua nhiều bài diễn thuyết.' },
      { title: 'Phaedo', year: 'k. 360 TCN', description: 'Kể lại những giờ cuối của Socrates, bàn về sự bất tử của linh hồn.' },
      { title: 'Timaeus', year: 'k. 360 TCN', description: 'Vũ trụ luận của Plato, bàn về nguồn gốc vũ trụ và vật chất.' }
    ],
    influences: ['Socrates', 'Pythagoras', 'Parmenides', 'Heraclitus'],
    influencedBy: ['Aristotle', 'Plotinus', 'Augustine', 'Toàn bộ triết học phương Tây']
  },
  aristotle: {
    name: 'Aristotle',
    nameVi: 'Aristotle',
    birthDeath: '384–322 TCN',
    era: 'Cổ đại',
    school: 'Triết học Hy Lạp cổ đại',
    summary: 'Aristotle (384–322 TCN) là học trò của Plato và sau này trở thành thầy dạy của Alexander Đại đế. Ông được coi là "cha đẻ" của nhiều lĩnh vực: logic học, sinh học, vật lý học, siêu hình học và khoa học chính trị. Khác với Plato, Aristotle coi trọng quan sát thực nghiệm và tin rằng tri thức bắt đầu từ kinh nghiệm giác quan. Ông sáng lập trường Lyceum tại Athens và để lại một hệ thống triết học đồ sộ bao quát hầu hết mọi lĩnh vực tri thức thời cổ đại. Ảnh hưởng của Aristotle kéo dài suốt hơn 2.000 năm, từ triết học Hồi giáo trung cổ đến thần học Kitô giáo và nền tảng khoa học hiện đại.',
    imageUrl: 'https://imgs.search.brave.com/IC56IzRbok0aVwogIsr8t23OgVE8YGryfMe40eLT__A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2MyLyhWZW5pY2Up/X0FyaXN0b3RlbGVf/YnlfRnJhbmNlc2Nv/X0hheWV6X2luX2dh/bGxlcmllX0FjY2Fk/ZW1pYV9WZW5pY2Uu/anBn',
    imageAlt: 'Tượng bán thân Aristotle, bản sao La Mã theo nguyên bản Hy Lạp của Lysippos',
    imageCaption: 'Tượng bán thân Aristotle – bản sao La Mã theo nguyên bản của Lysippos, Palazzo Altemps',
    imageSource: 'Wikimedia Commons — Public Domain',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Aristotle_Altemps_Inv8575.jpg',
    concepts: [
      'Logic học: tam đoạn luận (syllogism), phạm trù, định nghĩa – nền tảng tư duy khoa học.',
      'Siêu hình học: thể (substance) và hình thái (form); nguyên nhân bốn loại (chất liệu, hình thái, tác nhân, mục đích).',
      'Đạo đức học: đức hạnh là thói quen; trung đạo (tránh thái quá và bất cập).',
      'Con người là động vật có lý tính; hạnh phúc (eudaimonia) là hoạt động của linh hồn theo đức hạnh.',
      'Phronesis (trí khôn thực tiễn): năng lực phán đoán đúng đắn trong tình huống cụ thể — khác với tri thức lý thuyết.',
      'Catharsis (thanh lọc cảm xúc): qua bi kịch nghệ thuật, khán giả trải nghiệm sợ hãi và thương cảm để thanh lọc tâm hồn.'
    ],
    quotes: [
      { text: 'Chúng ta là những gì chúng ta lặp đi lặp lại. Vì vậy, sự xuất sắc không phải là một hành động mà là một thói quen.', source: 'Đạo đức học Nicomachus' },
      { text: 'Hạnh phúc là hoạt động của linh hồn phù hợp với đức hạnh.', source: 'Đạo đức học Nicomachus, Quyển I' },
      { text: 'Gốc rễ của giáo dục thì đắng, nhưng quả ngọt.', source: 'Qua Diogenes Laërtius' },
      { text: 'Con người là động vật chính trị.', source: 'Chính trị học (Politics)' },
      { text: 'Bạn bè tốt là tấm gương phản chiếu bản thân ta.', source: 'Đạo đức học Nicomachus, Quyển IX' }
    ],
    works: [
      { title: 'Đạo đức học Nicomachus', year: 'k. 340 TCN', description: 'Tác phẩm đạo đức học quan trọng nhất, bàn về đức hạnh, trung đạo và eudaimonia.' },
      { title: 'Chính trị học (Politics)', year: 'k. 350 TCN', description: 'Nghiên cứu về nhà nước, hiến pháp và tổ chức xã hội.' },
      { title: 'Siêu hình học (Metaphysics)', year: 'k. 350 TCN', description: 'Nghiên cứu về bản thể, nguyên nhân và bản chất thực tại.' },
      { title: 'Organon', year: 'k. 350 TCN', description: 'Bộ công trình về logic học, gồm tam đoạn luận và phạm trù.' }
    ],
    influences: ['Plato', 'Socrates', 'Heraclitus', 'Democritus'],
    influencedBy: ['Thomas Aquinas', 'Averroes', 'Khoa học phương Tây', 'Logic học hiện đại']
  },
  kant: {
    name: 'Immanuel Kant',
    nameVi: 'Immanuel Kant',
    birthDeath: '1724–1804',
    era: 'Cận đại',
    school: 'Khai sáng Đức, Chủ nghĩa duy tâm siêu nghiệm',
    summary: 'Immanuel Kant (1724–1804) là triết gia Đức, được coi là một trong những nhà tư tưởng có ảnh hưởng nhất trong lịch sử triết học. Ông thực hiện cuộc "cách mạng Copernicus" trong triết học khi chứng minh rằng tâm trí con người không chỉ tiếp nhận thụ động mà còn tích cực kiến tạo kinh nghiệm qua các phạm trù và hình thức trực quan. Ba tác phẩm Phê phán (Lý tính Thuần túy, Lý tính Thực hành, Năng lực Phán đoán) tạo nên hệ thống triết học toàn diện về nhận thức, đạo đức và thẩm mỹ. Đạo đức học bổn phận của Kant — với mệnh lệnh nhất quyết — vẫn là nền tảng của triết học đạo đức hiện đại. Suốt đời ông sống tại Königsberg và nổi tiếng với lối sống kỷ luật đến mức người dân dùng giờ đi dạo của ông để chỉnh đồng hồ.',
    imageUrl: 'https://imgs.search.brave.com/6GLM9m0HxzfrFKFszbWPKEXDu2NMSFOndxJk4RsvCcw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi83Lzc5L0lt/bWFudWVsX0thbnRf/LV9HZW1hZWxkZV8x/LmpwZy81MTJweC1J/bW1hbnVlbF9LYW50/Xy1fR2VtYWVsZGVf/MS5qcGc',
    imageAlt: 'Chân dung Immanuel Kant, tranh sơn dầu khoảng năm 1790',
    imageCaption: 'Chân dung Immanuel Kant – tranh sơn dầu khoảng năm 1790',
    imageSource: 'Wikimedia Commons — Public Domain',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Kant_gemaelde_3.jpg',
    concepts: [
      'Đạo đức học bổn phận: hành động có giá trị đạo đức khi xuất phát từ bổn phận, không từ lợi ích hay cảm xúc.',
      'Mệnh lệnh nhất quyết (Categorical Imperative): "Hãy hành động chỉ theo châm ngôn mà bạn có thể muốn nó trở thành quy luật phổ quát."',
      'Con người là cứu cánh, không phải phương tiện.',
      'Khoa học và tri thức khả thể nhờ các phạm trù và không-thời gian như hình thức của trực quan.',
      'Phán đoán tổng hợp tiên nghiệm: tri thức vừa mở rộng hiểu biết (tổng hợp) vừa độc lập với kinh nghiệm (tiên nghiệm) — nền tảng cho toán học và khoa học.',
      'Tự chủ đạo đức: con người có khả năng tự đặt ra quy luật đạo đức cho chính mình thông qua lý tính, không cần quyền lực bên ngoài.'
    ],
    quotes: [
      { text: 'Hai thứ đầy tâm hồn tôi bằng sự ngưỡng mộ và kính sợ không ngừng: bầu trời đầy sao phía trên tôi và quy luật đạo đức trong tôi.', source: 'Phê phán Lý tính Thực hành' },
      { text: 'Hãy hành động chỉ theo châm ngôn mà bạn có thể đồng thời muốn nó trở thành quy luật phổ quát.', source: 'Nền tảng Siêu hình học Đạo đức' },
      { text: 'Khoa học là tri thức có tổ chức. Trí tuệ là cuộc sống có tổ chức.', source: 'Phê phán Lý tính Thuần túy' },
      { text: 'Dám biết! Hãy có can đảm sử dụng lý trí của chính mình.', source: 'Trả lời câu hỏi: Khai sáng là gì? (1784)' },
      { text: 'Khai sáng là sự thoát ra khỏi tình trạng chưa trưởng thành do chính mình gây nên.', source: 'Trả lời câu hỏi: Khai sáng là gì? (1784)' }
    ],
    works: [
      { title: 'Phê phán Lý tính Thuần túy', year: '1781', description: 'Xem xét giới hạn và khả năng của lý tính con người trong nhận thức.' },
      { title: 'Phê phán Lý tính Thực hành', year: '1788', description: 'Bàn về đạo đức, tự do ý chí và mệnh lệnh nhất quyết.' },
      { title: 'Phê phán Năng lực Phán đoán', year: '1790', description: 'Nghiên cứu thẩm mỹ và mục đích luận trong tự nhiên.' },
      { title: 'Nền tảng Siêu hình học Đạo đức', year: '1785', description: 'Trình bày nền tảng lý thuyết cho đạo đức học bổn phận.' }
    ],
    influences: ['David Hume', 'Jean-Jacques Rousseau', 'Gottfried Leibniz', 'Isaac Newton'],
    influencedBy: ['Hegel', 'Schopenhauer', 'Triết học đạo đức hiện đại', 'Chủ nghĩa duy tâm Đức']
  },
  nietzsche: {
    name: 'Friedrich Nietzsche',
    nameVi: 'Friedrich Nietzsche',
    birthDeath: '1844–1900',
    era: 'Cận đại',
    school: 'Triết học lục địa, Hiện sinh',
    summary: 'Friedrich Nietzsche (1844–1900) là triết gia Đức, nhà ngữ văn học và nhà phê bình văn hóa — một trong những nhà tư tưởng gây tranh cãi và có ảnh hưởng nhất thế kỷ 19. Ông tuyên bố "Chúa đã chết" để chỉ sự sụp đổ của nền tảng đạo đức truyền thống, đồng thời đề xuất con người phải tự sáng tạo giá trị thông qua ý chí quyền lực. Khái niệm Siêu nhân (Übermensch) và Vĩnh hồi quay trở lại là hai trụ cột trong triết học Nietzsche. Ông phê phán mạnh mẽ đạo đức Kitô giáo, chủ nghĩa hư vô và sự bầy đàn trong xã hội. Dù sức khỏe suy sụp và sống trong cô đơn, Nietzsche để lại di sản tư tưởng đồ sộ ảnh hưởng sâu sắc đến chủ nghĩa hiện sinh, hậu hiện đại, tâm lý học và nghệ thuật.',
    imageUrl: 'https://imgs.search.brave.com/HiV10vvGCYNXFYm8ZkcpsrwmFCoJ5MmPM12gPa08i6U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8xLzFiL05p/ZXR6c2NoZTE4N2Eu/anBnLzUxMnB4LU5p/ZXR6c2NoZTE4N2Eu/anBn',
    imageAlt: 'Chân dung Friedrich Nietzsche, ảnh chụp khoảng năm 1875',
    imageCaption: 'Chân dung Friedrich Nietzsche – ảnh chụp khoảng năm 1875 bởi Friedrich Hartmann',
    imageSource: 'Wikimedia Commons — Public Domain',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Nietzsche187a.jpg',
    concepts: [
      'Siêu nhân (Übermensch): con người vượt lên giá trị cũ, sáng tạo giá trị mới, chấp nhận "vĩnh hồi quay trở lại".',
      'Ý chí quyền lực: động lực nền tảng của hành vi; không chỉ tồn tại mà vươn tới quyền lực và sáng tạo.',
      '"Chúa đã chết" – con người phải tự đặt giá trị thay vì dựa vào tôn giáo.',
      'Đạo đức chủ-nô vs đạo đức nô-lệ; đạo đức hiện tại là đạo đức của kẻ yếu.',
      'Chủ nghĩa hư vô (Nihilism): khi mọi giá trị truyền thống sụp đổ — Nietzsche không cổ vũ hư vô mà kêu gọi vượt qua nó bằng cách sáng tạo giá trị mới.',
      'Amor fati (yêu số phận): chấp nhận và yêu thương mọi khoảnh khắc của cuộc đời, kể cả đau khổ, như thể ta muốn sống lại nó vĩnh viễn.'
    ],
    quotes: [
      { text: 'Kẻ nào chiến đấu với quái vật hãy cẩn thận kẻo tự mình trở thành quái vật.', source: 'Bên kia Thiện Ác, Cách ngôn 146' },
      { text: 'Không có sự kiện, chỉ có những cách diễn giải.', source: 'Di cảo (Notebooks), 1886–1887' },
      { text: 'Cái gì không giết được ta sẽ làm ta mạnh hơn.', source: 'Hoàng hôn của các Thần tượng (1888)' },
      { text: 'Bạn phải mang trong mình hỗn mang để sinh ra một vì sao nhảy múa.', source: 'Zarathustra đã nói như thế' },
      { text: 'Khi bạn nhìn lâu vào vực thẳm, vực thẳm cũng nhìn lại bạn.', source: 'Bên kia Thiện Ác, Cách ngôn 146' },
      { text: 'Cuối cùng, người ta chỉ yêu khao khát của mình, chứ không yêu đối tượng khao khát.', source: 'Bên kia Thiện Ác, Cách ngôn 175' }
    ],
    works: [
      { title: 'Zarathustra đã nói như thế', year: '1883–1885', description: 'Tiểu thuyết triết học trình bày tư tưởng siêu nhân và vĩnh hồi quay trở lại.' },
      { title: 'Bên kia Thiện Ác', year: '1886', description: 'Phê phán triết học truyền thống và đạo đức chủ-nô.' },
      { title: 'Phả hệ học đạo đức', year: '1887', description: 'Truy tìm nguồn gốc các giá trị đạo đức "tốt" và "xấu".' },
      { title: 'Hoàng hôn của các Thần tượng', year: '1889', description: 'Phê phán các "thần tượng" tư tưởng phương Tây từ Socrates đến hiện đại.' }
    ],
    influences: ['Schopenhauer', 'Goethe', 'Heraclitus', 'Wagner'],
    influencedBy: ['Heidegger', 'Camus', 'Foucault', 'Chủ nghĩa hiện sinh']
  },
  marcus_aurelius: {
    name: 'Marcus Aurelius',
    nameVi: 'Marcus Aurelius',
    birthDeath: '121–180',
    era: 'Cổ đại',
    school: 'Khắc kỷ (Stoicism)',
    summary: 'Marcus Aurelius (121–180) là hoàng đế La Mã và triết gia khắc kỷ — được mệnh danh là "vị hoàng đế triết gia" cuối cùng và vĩ đại nhất. Tác phẩm Suy ngẫm (Meditations) được viết như nhật ký cá nhân trong những năm chinh chiến, không nhằm xuất bản, nhưng trở thành một trong những văn bản triết học thực hành được đọc nhiều nhất mọi thời đại. Marcus Aurelius nhấn mạnh việc kiểm soát nội tâm, chấp nhận số phận và sống theo đức hạnh — những nguyên tắc cốt lõi của triết học Khắc kỷ. Dù đối mặt với chiến tranh, dịch bệnh và phản bội, ông vẫn kiên trì thực hành triết học trong cuộc sống hàng ngày. Tư tưởng của ông có ảnh hưởng lớn đến tâm lý trị liệu hiện đại, đặc biệt là liệu pháp nhận thức hành vi (CBT) và phong trào Khắc kỷ đương đại.',
    imageUrl: 'https://imgs.search.brave.com/fbCg3w-C892IwTdFWztPTeZvJdYXnxMtQ0oNLN90BbQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9lL2VjL01T/Ui1yYS02MS1iLTEt/RE0uanBnLzUxMnB4/LU1TUi1yYS02MS1i/LTEtRE0uanBn',
    imageAlt: 'Tượng bán thân Hoàng đế Marcus Aurelius bằng đá cẩm thạch',
    imageCaption: 'Tượng bán thân Marcus Aurelius – đá cẩm thạch, thế kỷ 2',
    imageSource: 'Wikimedia Commons — Public Domain',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:MSR-ra-61-b-1-DM.jpg',
    concepts: [
      'Chỉ làm chủ được tư tưởng và phản ứng của mình; ngoại cảnh nằm ngoài kiểm soát.',
      'Chấp nhận số phận (amor fati); sống theo tự nhiên và lý tính.',
      'Tự nhắc nhở về cái chết và sự nhỏ bé để sống đúng đắn từng ngày.',
      'Memento Mori (nhớ rằng bạn sẽ chết): ý thức về cái chết không để sợ hãi mà để trân trọng từng khoảnh khắc và sống có ý nghĩa.',
      'Cosmopolitanism (công dân thế giới): Marcus Aurelius xem mình là công dân của vũ trụ, không chỉ của La Mã — mọi người đều có liên kết với nhau qua lý tính.'
    ],
    quotes: [
      { text: 'Bạn có quyền lực với tâm trí của mình — không phải với các sự kiện bên ngoài. Nhận ra điều này, và bạn sẽ tìm thấy sức mạnh.', source: 'Suy ngẫm, Quyển VI' },
      { text: 'Đừng lãng phí thời gian tranh cãi về việc một người tốt nên là gì. Hãy là một người tốt.', source: 'Suy ngẫm, Quyển X' },
      { text: 'Sự giàu có thực sự không phải là có nhiều tài sản mà là có ít ham muốn.', source: 'Suy ngẫm, Quyển IX' },
      { text: 'Hãy suy nghĩ về sự rộng lớn của thời gian và không gian, và cuộc đời ngắn ngủi của bạn chỉ là một điểm trong vũ trụ.', source: 'Suy ngẫm, Quyển IV' },
      { text: 'Hạnh phúc trong cuộc đời của bạn phụ thuộc vào chất lượng suy nghĩ của bạn.', source: 'Suy ngẫm, Quyển V' },
      { text: 'Trở ngại trên con đường trở thành con đường.', source: 'Suy ngẫm, Quyển V' }
    ],
    works: [
      { title: 'Suy ngẫm (Meditations)', year: 'k. 170–180', description: 'Nhật ký triết học cá nhân viết trong chiến trận, 12 quyển suy tư về đức hạnh và bổn phận.' }
    ],
    influences: ['Epictetus', 'Seneca', 'Zeno xứ Citium', 'Heraclitus'],
    influencedBy: ['Triết học tự lực', 'Tâm lý trị liệu CBT', 'Ryan Holiday', 'Văn hóa Khắc kỷ hiện đại']
  },
  confucius: {
    name: 'Confucius',
    nameVi: 'Khổng Tử',
    birthDeath: '551–479 TCN',
    era: 'Cổ đại',
    school: 'Nho giáo',
    summary: 'Khổng Tử (551–479 TCN) là nhà tư tưởng, nhà giáo dục và triết gia Trung Hoa — người sáng lập Nho giáo, hệ tư tưởng có ảnh hưởng sâu rộng nhất trong lịch sử Đông Á. Ông nhấn mạnh đức hạnh cá nhân (Nhân, Lễ, Nghĩa, Trí, Tín), mối quan hệ xã hội hài hòa và giáo dục như con đường tu dưỡng bản thân. Lý tưởng "Quân tử" — người có đức hạnh toàn diện — là mẫu hình con người mà Khổng Tử hướng tới. Ông tin rằng ổn định xã hội bắt đầu từ tu thân, sau đó mở rộng ra gia đình, quốc gia và thiên hạ (tu thân, tề gia, trị quốc, bình thiên hạ). Luận ngữ — tập hợp lời dạy và đối thoại do đệ tử ghi lại — vẫn là sách giáo khoa đạo đức quan trọng tại nhiều quốc gia Đông Á, bao gồm Việt Nam.',
    imageUrl: 'https://imgs.search.brave.com/iimN2kS5LE0Xl58jKnnHb82Enc9skJow2AyIIzN0irY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aWVu/Z3RydW5nYW5oZHVv/bmcuY29tL2ltYWdl/cy8yMDIwMDcva2hv/bmctdHUtMDEwNzIw/L2tob25nLXR1LTAx/MDcyMC5qcGc',
    imageAlt: 'Tranh chân dung Khổng Tử thời nhà Đường',
    imageCaption: 'Chân dung Khổng Tử – tranh vẽ theo phong cách đời Đường',
    imageSource: 'Wikimedia Commons — Public Domain',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Confucius_Tang_Dynasty.jpg',
    concepts: [
      'Nhân, Lễ, Nghĩa, Trí, Tín – các đức căn bản.',
      '"Kỷ sở bất dục, vật thi ư nhân" – điều mình không muốn thì đừng làm cho người.',
      'Quân tử và tiểu nhân; tu thân, tề gia, trị quốc, bình thiên hạ.',
      'Chính danh (正名): mỗi người phải thực hiện đúng vai trò và trách nhiệm của mình — vua phải ra vua, bề tôi phải ra bề tôi.',
      'Ngũ luân (五倫): năm mối quan hệ nền tảng của xã hội — vua-bề tôi, cha-con, chồng-vợ, anh-em, bạn bè — mỗi bên có bổn phận riêng.'
    ],
    quotes: [
      { text: 'Kỷ sở bất dục, vật thi ư nhân.', source: 'Luận ngữ — Nhan Uyên thiên' },
      { text: 'Học mà không suy nghĩ thì vô ích; suy nghĩ mà không học thì nguy hiểm.', source: 'Luận ngữ — Vi Chính thiên' },
      { text: 'Người quân tử cầu ở mình, kẻ tiểu nhân cầu ở người.', source: 'Luận ngữ — Vệ Linh Công thiên' },
      { text: 'Ba người cùng đi, tất có người làm thầy ta.', source: 'Luận ngữ — Thuật Nhi thiên' },
      { text: 'Biết thì nói là biết, không biết thì nói là không biết — đó mới là biết.', source: 'Luận ngữ — Vi Chính thiên' },
      { text: 'Đức không cô, tất hữu lân. Người có đức không bao giờ cô đơn, ắt có người láng giềng.', source: 'Luận ngữ — Lý Nhân thiên' }
    ],
    works: [
      { title: 'Luận ngữ (Analerta)', year: 'k. 475–220 TCN', description: 'Tập hợp lời dạy và đối thoại của Khổng Tử, do đệ tử ghi lại.' },
      { title: 'Xuân Thu (Spring and Autumn Annals)', year: 'k. 480 TCN', description: 'Biên niên sử nước Lỗ, truyền thống cho rằng do Khổng Tử soạn.' }
    ],
    influences: ['Chu Công', 'Văn hóa nhà Chu', 'Kinh Dịch'],
    influencedBy: ['Mạnh Tử', 'Tuân Tử', 'Nho giáo Đông Á', 'Hệ thống giáo dục Trung Hoa']
  },
  lao_tzu: {
    name: 'Lão Tử',
    nameVi: 'Lão Tử',
    birthDeath: 'k. thế kỷ 6 TCN',
    era: 'Cổ đại',
    school: 'Đạo giáo (Taoism)',
    summary: 'Lão Tử là nhà tư tưởng huyền thoại Trung Hoa cổ đại, được coi là người sáng lập Đạo giáo và tác giả Đạo Đức Kinh — một trong những văn bản triết học có ảnh hưởng nhất thế giới. Tư tưởng của ông nhấn mạnh sự hòa hợp với tự nhiên, nguyên lý vô vi (hành động không cưỡng ép), và sự khiêm nhường trước quy luật vũ trụ. Lão Tử phê phán sự can thiệp nhân tạo, coi trọng sự giản dị, mềm mại và tĩnh lặng như nguồn sức mạnh thực sự. Lịch sử về ông vẫn còn nhiều tranh luận — nhiều học giả cho rằng Lão Tử có thể là hình tượng tổng hợp của nhiều nhà tư tưởng. Dù vậy, ảnh hưởng của ông đối với triết học, tôn giáo và văn hóa Đông Á là vô cùng sâu rộng, đặc biệt tại Việt Nam, Trung Quốc, Nhật Bản và Hàn Quốc.',
    imageUrl: 'https://imgs.search.brave.com/KHoVVyMSuW0PAUF0TKClEbE1wU_oCCNp5iDamaqeSow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYWZl/Yml6LmNhZmViaXpj/ZG4udm4vMTYyMTIz/MzEwMjU0MDAyMTc2/LzIwMjIvMTIvMzAv/MDk1YzFlZjUyNjBh/MTZhOGYzYTc2YzEz/NzY3N2E2MTYtMTY3/MjMwNjk4Mzc1NTE1/Nzg2OTg0NTYtMTY3/MjM2NDE1NDQyNC0x/NjcyMzY0MTU0NDk2/MTQzMjkxMzI2NC5q/cGc',
    imageAlt: 'Tranh Lão Tử cưỡi trâu, họa sĩ Trương Lộ thời Minh',
    imageCaption: 'Tranh Lão Tử cưỡi trâu — Trương Lộ, thời nhà Minh',
    imageSource: 'Wikimedia Commons — Public Domain',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Zhang_Lu-Laozi_Riding_an_Ox.jpg',
    concepts: [
      'Đạo (道): nguyên lý nền tảng của vũ trụ, không thể diễn đạt trọn vẹn bằng lời — là nguồn gốc và quy luật của vạn vật.',
      'Vô vi (無為): hành động không cưỡng ép, thuận theo tự nhiên; "không làm gì" mà không có gì không thành.',
      'Âm Dương: hai lực đối lập bổ sung nhau, tạo nên sự cân bằng và vận động của vũ trụ.',
      'Nhu thắng cương: cái mềm mại thắng cái cứng rắn — như nước chảy mài mòn đá. Sự khiêm nhường là sức mạnh.',
      'Phác (朴 — sự giản dị): trở về với bản tính nguyên sơ, không trang trí, không giả tạo; sống thuận theo tự nhiên.'
    ],
    quotes: [
      { text: 'Đạo mà có thể diễn đạt bằng lời thì không phải Đạo thường hằng. Tên mà có thể gọi thì không phải tên thường hằng.', source: 'Đạo Đức Kinh, Chương 1' },
      { text: 'Không gì trên đời mềm mại và yếu ớt hơn nước, nhưng không gì có thể thắng được nước khi công phá cái cứng rắn.', source: 'Đạo Đức Kinh, Chương 78' },
      { text: 'Hành trình ngàn dặm bắt đầu từ một bước chân.', source: 'Đạo Đức Kinh, Chương 64' },
      { text: 'Tri nhân giả trí, tự tri giả minh. Thắng nhân giả hữu lực, tự thắng giả cường.', source: 'Đạo Đức Kinh, Chương 33' },
      { text: 'Khi ta buông bỏ những gì ta là, ta trở thành những gì ta có thể là.', source: 'Đạo Đức Kinh, Chương 22' }
    ],
    works: [
      { title: 'Đạo Đức Kinh (道德經)', year: 'k. thế kỷ 6–4 TCN', description: 'Văn bản nền tảng của Đạo giáo, gồm 81 chương ngắn gọn về Đạo, đức và cách sống thuận tự nhiên. Là một trong những tác phẩm được dịch nhiều nhất thế giới.' },
      { title: 'Truyền thuyết và tư tưởng truyền miệng', year: '', description: 'Ngoài Đạo Đức Kinh, nhiều câu chuyện và lời dạy được truyền miệng qua các thế hệ đạo sĩ và học giả.' }
    ],
    influences: ['Văn hóa cổ đại Trung Hoa', 'Kinh Dịch', 'Truyền thống ẩn sĩ'],
    influencedBy: ['Trang Tử', 'Đạo giáo tôn giáo', 'Thiền tông', 'Văn hóa Đông Á', 'Triết học môi trường hiện đại']
  },
  descartes: {
    name: 'René Descartes',
    nameVi: 'René Descartes',
    birthDeath: '1596–1650',
    era: 'Cận đại',
    school: 'Duy lý luận (Rationalism)',
    summary: 'René Descartes là triết gia, nhà toán học và khoa học người Pháp, được coi là "cha đẻ của triết học hiện đại" và là người sáng lập chủ nghĩa duy lý. Câu nói nổi tiếng "Cogito, ergo sum" (Tôi suy nghĩ, vậy tôi tồn tại) đánh dấu bước ngoặt trong lịch sử triết học phương Tây — lấy tư duy cá nhân làm nền tảng cho mọi tri thức. Ông phát triển phương pháp hoài nghi có hệ thống, nhị nguyên luận tâm-thể (phân biệt giữa tinh thần và vật chất), và đặt nền móng cho hình học giải tích. Descartes tin rằng lý tính — chứ không phải kinh nghiệm cảm giác — là nguồn gốc đáng tin cậy duy nhất của tri thức. Ảnh hưởng của ông trải rộng từ triết học, toán học đến khoa học tự nhiên, định hình tư tưởng phương Tây suốt nhiều thế kỷ.',
    imageUrl: 'https://imgs.search.brave.com/OW6DkPYYfdn4XT1mnaM89Q_c3wMhzZB-lCxh4C1PMUw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG44/LmZ1dHVyYS1zY2ll/bmNlcy5jb20vczQ4/MC9pbWFnZXMvc2Np/ZW50aXN0L3BlcnNv/djYvRGVzY2FydGVz/LTEwMDAuanBn',
    imageAlt: 'Chân dung René Descartes, tranh của Frans Hals',
    imageCaption: 'Chân dung René Descartes — tranh Frans Hals, khoảng năm 1649–1700',
    imageSource: 'Wikimedia Commons — Public Domain',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg',
    concepts: [
      'Cogito, ergo sum (Tôi suy nghĩ, vậy tôi tồn tại): nền tảng bất khả nghi duy nhất — ngay cả khi hoài nghi tất cả, sự tồn tại của chủ thể đang suy nghĩ là chắc chắn.',
      'Hoài nghi phương pháp (Methodical Doubt): đặt mọi niềm tin vào vòng nghi ngờ có hệ thống để tìm ra tri thức chắc chắn tuyệt đối.',
      'Nhị nguyên tâm-thể (Mind-Body Dualism): tâm trí (res cogitans) và thể xác (res extensa) là hai thực thể hoàn toàn khác biệt.',
      'Ý tưởng bẩm sinh (Innate Ideas): một số ý tưởng (như khái niệm về Thượng đế, toán học) không đến từ kinh nghiệm mà có sẵn trong tâm trí.',
      'Lý tính là nguồn gốc tri thức: chỉ có lý tính — chứ không phải giác quan — mới mang lại tri thức đáng tin cậy và phổ quát.'
    ],
    quotes: [
      { text: 'Tôi suy nghĩ, vậy tôi tồn tại.', source: 'Các nguyên lý triết học (Principia Philosophiae), Phần I' },
      { text: 'Để tìm kiếm chân lý, mỗi người cần phải hoài nghi tất cả những gì có thể hoài nghi, ít nhất một lần trong đời.', source: 'Các nguyên lý triết học, Phần I' },
      { text: 'Chưa đủ khi chỉ sở hữu trí tuệ tốt; điều quan trọng nhất là sử dụng nó đúng đắn.', source: 'Phương pháp luận (Discours de la méthode), Phần I' },
      { text: 'Đọc sách hay giống như trò chuyện với những bộ óc vĩ đại nhất của các thế kỷ trước.', source: 'Phương pháp luận (Discours de la méthode), Phần I' },
      { text: 'Tôi chỉ thừa nhận là đúng những gì tôi nhận biết rõ ràng là đúng, tránh mọi sự vội vàng và thành kiến.', source: 'Phương pháp luận, Phần II' }
    ],
    works: [
      { title: 'Phương pháp luận (Discours de la méthode)', year: '1637', description: 'Tác phẩm trình bày phương pháp tư duy khoa học và chứa câu nổi tiếng "Cogito, ergo sum". Một trong những văn bản triết học quan trọng nhất thời hiện đại.' },
      { title: 'Suy ngẫm về Triết học Đệ nhất (Meditationes de Prima Philosophia)', year: '1641', description: 'Sáu bài suy ngẫm về sự tồn tại của Thượng đế, bản chất tâm trí và cơ sở tri thức. Phát triển hoài nghi phương pháp và nhị nguyên luận.' },
      { title: 'Các nguyên lý triết học (Principia Philosophiae)', year: '1644', description: 'Trình bày hệ thống triết học toàn diện của Descartes, từ nhận thức luận đến vật lý học.' },
      { title: 'Hình học (La Géométrie)', year: '1637', description: 'Đặt nền móng cho hình học giải tích — kết hợp đại số và hình học, mở đường cho toán học hiện đại.' }
    ],
    influences: ['Triết học kinh viện', 'Toán học Hy Lạp', 'Augustine', 'Aristotle'],
    influencedBy: ['Spinoza', 'Leibniz', 'Locke', 'Triết học hiện đại phương Tây', 'Khoa học tự nhiên']
  },
  sartre: {
    name: 'Jean-Paul Sartre',
    nameVi: 'Jean-Paul Sartre',
    birthDeath: '1905–1980',
    era: 'Hiện đại',
    school: 'Chủ nghĩa Hiện sinh',
    summary: 'Jean-Paul Sartre là triết gia, tiểu thuyết gia và kịch tác gia người Pháp — nhân vật trung tâm của chủ nghĩa hiện sinh thế kỷ 20. Luận điểm cốt lõi "Tồn tại có trước bản chất" (l\'existence précède l\'essence) khẳng định rằng con người không có bản chất định sẵn mà tự kiến tạo chính mình qua hành động và lựa chọn. Sartre nhấn mạnh tự do tuyệt đối và trách nhiệm cá nhân — con người "bị kết án phải tự do" và không thể trốn tránh việc lựa chọn. Ông phát triển triết học hiện tượng luận về ý thức, phân tích các khái niệm như "sự tự lừa dối" (mauvaise foi) và "cái nhìn của tha nhân" (le regard). Sartre từ chối giải Nobel Văn học năm 1964 — hành động thể hiện sự nhất quán giữa triết học và cuộc sống. Ông cùng Simone de Beauvoir tạo nên một trong những cặp trí thức có ảnh hưởng nhất thế kỷ 20.',
    imageUrl: 'https://imgs.search.brave.com/rFc8BnQvQQO3k-MBR-tcG5_S1uuVph6Cw9DEX4F-BLo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9lL2U5L0pl/YW5fUGF1bF9TYXJ0/cmVfMTk2NS5qcGcv/NTEycHgtSmVhbl9Q/YXVsX1NhcnRyZV8x/OTY1LmpwZw',
    imageAlt: 'Chân dung Jean-Paul Sartre, ảnh chụp năm 1967',
    imageCaption: 'Chân dung Jean-Paul Sartre — ảnh chụp năm 1967',
    imageSource: 'Wikimedia Commons — Public Domain',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Sartre_1967_crop.jpg',
    concepts: [
      'Tồn tại có trước bản chất (Existence precedes essence): con người không có bản chất định sẵn — trước hết ta tồn tại, sau đó tự định nghĩa mình qua hành động.',
      'Tự do tuyệt đối và trách nhiệm: con người "bị kết án phải tự do" — mọi lựa chọn đều là của ta, không thể đổ lỗi cho hoàn cảnh hay bản chất.',
      'Sự tự lừa dối (Mauvaise foi / Bad faith): khi con người phủ nhận tự do của mình, giả vờ bị ràng buộc bởi vai trò xã hội hoặc bản chất cố định.',
      'Cái nhìn của tha nhân (Le Regard / The Look): ý thức về sự hiện diện của người khác biến ta thành đối tượng — "Địa ngục chính là những người khác."',
      'Tính xác thực (Authenticité): sống thật với tự do của mình, chấp nhận trách nhiệm thay vì trốn tránh vào sự tự lừa dối.'
    ],
    quotes: [
      { text: 'Tồn tại có trước bản chất.', source: 'Chủ nghĩa hiện sinh là chủ nghĩa nhân bản (L\'existentialisme est un humanisme), 1946' },
      { text: 'Con người bị kết án phải tự do; bởi vì một khi đã bị ném vào thế giới, anh ta chịu trách nhiệm cho tất cả những gì anh ta làm.', source: 'Tồn tại và Hư vô (L\'Être et le Néant), 1943' },
      { text: 'Địa ngục chính là những người khác.', source: 'Kín (Huis Clos), 1944' },
      { text: 'Mọi thứ đã được khám phá ngoại trừ cách sống.', source: 'Buồn nôn (La Nausée), 1938' },
      { text: 'Tự do không phải là khả năng thực hiện ý muốn; tự do là ý muốn thực hiện điều có thể.', source: 'Chủ nghĩa hiện sinh là chủ nghĩa nhân bản, 1946' }
    ],
    works: [
      { title: 'Tồn tại và Hư vô (L\'Être et le Néant)', year: '1943', description: 'Tác phẩm triết học chính của Sartre, phân tích ý thức, tự do, sự tự lừa dối và mối quan hệ với tha nhân. Nền tảng của chủ nghĩa hiện sinh.' },
      { title: 'Buồn nôn (La Nausée)', year: '1938', description: 'Tiểu thuyết triết học kể về trải nghiệm "buồn nôn" trước sự phi lý của tồn tại — tác phẩm văn học đầu tiên của Sartre.' },
      { title: 'Kín (Huis Clos)', year: '1944', description: 'Vở kịch nổi tiếng với câu "Địa ngục chính là những người khác" — ba nhân vật bị nhốt cùng nhau trong địa ngục.' },
      { title: 'Chủ nghĩa hiện sinh là chủ nghĩa nhân bản', year: '1946', description: 'Bài giảng phổ biến nhất của Sartre, trình bày ngắn gọn triết học hiện sinh cho đại chúng.' }
    ],
    influences: ['Husserl', 'Heidegger', 'Kierkegaard', 'Nietzsche', 'Marx'],
    influencedBy: ['Simone de Beauvoir', 'Albert Camus', 'Frantz Fanon', 'Triết học hậu hiện đại', 'Phong trào giải phóng']
  }
};

/** Dòng thời gian triết học */
export const TIMELINE = [
  { year: 'k. thế kỷ 6 TCN', event: 'Lão Tử sinh (truyền thuyết) — sáng lập Đạo giáo', philosopher: 'Lão Tử', era: 'Cổ đại' },
  { year: '551 TCN', event: 'Khổng Tử sinh tại nước Lỗ, Trung Hoa', philosopher: 'Confucius', era: 'Cổ đại' },
  { year: 'k. thế kỷ 5 TCN', event: 'Đạo Đức Kinh được viết — văn bản nền tảng Đạo giáo', philosopher: 'Lão Tử', era: 'Cổ đại' },
  { year: '470 TCN', event: 'Socrates sinh tại Athens, Hy Lạp', philosopher: 'Socrates', era: 'Cổ đại' },
  { year: '428 TCN', event: 'Plato sinh — sẽ sáng lập Học viện Athens', philosopher: 'Plato', era: 'Cổ đại' },
  { year: '399 TCN', event: 'Socrates bị xử tử bằng thuốc độc tại Athens', philosopher: 'Socrates', era: 'Cổ đại' },
  { year: '384 TCN', event: 'Aristotle sinh tại Stageira, Hy Lạp', philosopher: 'Aristotle', era: 'Cổ đại' },
  { year: '375 TCN', event: 'Plato viết Cộng hòa (Republic) — ẩn dụ hang động', philosopher: 'Plato', era: 'Cổ đại' },
  { year: '335 TCN', event: 'Aristotle mở trường Lyceum, đặt nền móng logic học', philosopher: 'Aristotle', era: 'Cổ đại' },
  { year: '121', event: 'Marcus Aurelius sinh — hoàng đế triết gia', philosopher: 'Marcus Aurelius', era: 'Cổ đại' },
  { year: '170', event: 'Marcus Aurelius viết Suy ngẫm (Meditations)', philosopher: 'Marcus Aurelius', era: 'Cổ đại' },
  { year: '1596', event: 'René Descartes sinh tại La Haye en Touraine, Pháp', philosopher: 'Descartes', era: 'Cận đại' },
  { year: '1637', event: 'Descartes xuất bản Phương pháp luận — "Cogito, ergo sum"', philosopher: 'Descartes', era: 'Cận đại' },
  { year: '1641', event: 'Descartes xuất bản Suy ngẫm về Triết học Đệ nhất', philosopher: 'Descartes', era: 'Cận đại' },
  { year: '1724', event: 'Immanuel Kant sinh tại Königsberg, Phổ', philosopher: 'Kant', era: 'Cận đại' },
  { year: '1781', event: 'Kant xuất bản Phê phán Lý tính Thuần túy', philosopher: 'Kant', era: 'Cận đại' },
  { year: '1844', event: 'Friedrich Nietzsche sinh tại Röcken, Phổ', philosopher: 'Nietzsche', era: 'Cận đại' },
  { year: '1883', event: 'Nietzsche bắt đầu viết Zarathustra đã nói như thế', philosopher: 'Nietzsche', era: 'Cận đại' },
  { year: '1905', event: 'Jean-Paul Sartre sinh tại Paris, Pháp', philosopher: 'Sartre', era: 'Hiện đại' },
  { year: '1943', event: 'Sartre xuất bản Tồn tại và Hư vô — kiệt tác hiện sinh', philosopher: 'Sartre', era: 'Hiện đại' },
  { year: '1964', event: 'Sartre từ chối giải Nobel Văn học', philosopher: 'Sartre', era: 'Hiện đại' }
];

/** Chi tiết các trường phái */
export const SCHOOLS_DETAIL = {
  'Triết học Hy Lạp cổ đại': {
    name: 'Triết học Hy Lạp cổ đại',
    era: 'Thế kỷ 6–3 TCN',
    description: 'Nền tảng của toàn bộ triết học phương Tây. Tập trung vào đạo đức, siêu hình học, nhận thức luận và logic học.',
    keyIdeas: ['Ý niệm (Forms)', 'Đối thoại Socrates', 'Tam đoạn luận', 'Trung đạo', 'Eudaimonia'],
    philosophers: ['Socrates', 'Plato', 'Aristotle'],
    icon: '\u03A6'
  },
  'Khắc kỷ (Stoicism)': {
    name: 'Khắc kỷ (Stoicism)',
    era: 'Thế kỷ 3 TCN – Thế kỷ 2',
    description: 'Triết học thực hành nhấn mạnh kiểm soát nội tâm, chấp nhận số phận, và sống theo lý tính và tự nhiên.',
    keyIdeas: ['Kiểm soát nội tâm', 'Amor Fati', 'Sống theo tự nhiên', 'Memento Mori', 'Đức hạnh là hạnh phúc'],
    philosophers: ['Marcus Aurelius', 'Epictetus', 'Seneca'],
    icon: '\u2694'
  },
  'Khai sáng Đức': {
    name: 'Khai sáng Đức',
    era: 'Thế kỷ 18',
    description: 'Phong trào trí thức đề cao lý tính, tự do tư duy và đạo đức phổ quát. Kant là đại diện tiêu biểu.',
    keyIdeas: ['Mệnh lệnh nhất quyết', 'Bổn phận đạo đức', 'Lý tính thuần túy', 'Dám biết (Sapere aude)', 'Tự do và nhân phẩm'],
    philosophers: ['Immanuel Kant'],
    icon: '\u2261'
  },
  'Hiện sinh': {
    name: 'Chủ nghĩa Hiện sinh',
    era: 'Thế kỷ 19–20',
    description: 'Triết học tập trung vào cá nhân, tự do, trách nhiệm và ý nghĩa cuộc sống. Nietzsche là tiền bối quan trọng.',
    keyIdeas: ['Siêu nhân (Übermensch)', 'Ý chí quyền lực', 'Vĩnh hồi quay trở lại', 'Tồn tại trước bản chất', 'Tự do tuyệt đối'],
    philosophers: ['Friedrich Nietzsche', 'Kierkegaard', 'Jean-Paul Sartre', 'Albert Camus'],
    icon: '\u221E'
  },
  'Nho giáo': {
    name: 'Nho giáo',
    era: 'Thế kỷ 6 TCN – nay',
    description: 'Hệ tư tưởng Trung Hoa nhấn mạnh đức hạnh, lễ nghĩa, quan hệ xã hội và giáo dục. Ảnh hưởng sâu rộng tại Đông Á.',
    keyIdeas: ['Nhân – Lễ – Nghĩa – Trí – Tín', 'Tu thân tề gia trị quốc', 'Quân tử', 'Ngũ luân (Năm mối quan hệ)', 'Giáo dục và tự tu dưỡng'],
    philosophers: ['Khổng Tử', 'Mạnh Tử', 'Tuân Tử'],
    icon: '\u2609'
  },
  'Đạo giáo (Taoism)': {
    name: 'Đạo giáo (Taoism)',
    era: 'Thế kỷ 6 TCN – nay',
    description: 'Triết học Trung Hoa dựa trên Đạo — nguyên lý nền tảng của vũ trụ. Nhấn mạnh sự hòa hợp với tự nhiên, vô vi (hành động không cưỡng ép), sự giản dị và cân bằng âm dương. Đạo giáo có ảnh hưởng sâu sắc đến văn hóa, y học, nghệ thuật và tâm linh Đông Á.',
    keyIdeas: ['Đạo (Con đường)', 'Vô vi (Không cưỡng ép)', 'Âm Dương', 'Tự nhiên (Tzu-jan)', 'Nhu thắng cương', 'Phác (Sự giản dị)'],
    philosophers: ['Lão Tử', 'Trang Tử', 'Liệt Tử'],
    icon: '\u262F'
  },
  'Duy lý luận (Rationalism)': {
    name: 'Duy lý luận (Rationalism)',
    era: 'Thế kỷ 17–18',
    description: 'Trường phái triết học coi lý tính — không phải kinh nghiệm giác quan — là nguồn gốc chính của tri thức. Các nhà duy lý tin rằng có những ý tưởng bẩm sinh và chân lý có thể nhận biết chỉ qua tư duy thuần túy, như toán học. Descartes là người sáng lập chính.',
    keyIdeas: ['Cogito ergo sum', 'Hoài nghi phương pháp', 'Nhị nguyên tâm-thể', 'Ý tưởng bẩm sinh', 'Lý tính thuần túy'],
    philosophers: ['René Descartes', 'Baruch Spinoza', 'Gottfried Leibniz'],
    icon: '\u222B'
  }
};

export const SCHOOLS = {
  'hy lạp cổ đại': 'Triết học Hy Lạp cổ đại: Socrates, Plato, Aristotle – tập trung vào đạo đức, siêu hình học, logic.',
  'khắc kỷ': 'Khắc kỷ (Stoicism): Marcus Aurelius, Epictetus, Seneca – chấp nhận số phận, kiểm soát cảm xúc, sống theo lý tính.',
  'khai sáng': 'Khai sáng Đức: Kant – lý tính, đạo đức bổn phận, phê phán tri thức.',
  'hiện sinh': 'Hiện sinh: Nietzsche, Kierkegaard, Sartre – tồn tại trước bản chất, tự do, trách nhiệm.',
  'nho giáo': 'Nho giáo: Khổng Tử, Mạnh Tử – đức hạnh, quan hệ xã hội, giáo dục.',
  'đạo giáo': 'Đạo giáo (Taoism): Lão Tử, Trang Tử – Đạo, vô vi, hòa hợp tự nhiên, âm dương.',
  'duy lý luận': 'Duy lý luận (Rationalism): Descartes, Spinoza, Leibniz – lý tính là nguồn gốc tri thức, hoài nghi phương pháp, ý tưởng bẩm sinh.'
};

export const CONCEPTS = {
  'ý niệm': 'Thuyết ý niệm (Plato): các ý niệm là thực tại đích thực, bất biến; thế giới cảm tính chỉ là bản sao không hoàn hảo.',
  'đối thoại': 'Phương pháp đối thoại Socrates: đặt câu hỏi để đối phương tự phát hiện mâu thuẫn và đi tới định nghĩa.',
  'logic': 'Logic học Aristotle: tam đoạn luận, phạm trù; nền tảng cho tư duy có hệ thống.',
  'bổn phận': 'Đạo đức bổn phận (Kant): hành động đạo đức xuất phát từ bổn phận và mệnh lệnh nhất quyết.',
  'siêu nhân': 'Siêu nhân (Nietzsche): con người vượt lên giá trị cũ, sáng tạo giá trị mới.',
  'ý chí quyền lực': 'Ý chí quyền lực (Nietzsche): động lực nền tảng của hành vi – vươn tới quyền lực và sáng tạo.',
  'trung đạo': 'Trung đạo (Aristotle): đức hạnh là điểm giữa giữa hai thái cực (ví dụ: can đảm giữa hèn nhát và liều lĩnh).',
  'eudaimonia': 'Eudaimonia (Aristotle): hạnh phúc hay "sống tốt" là hoạt động của linh hồn theo đức hạnh.',
  'mệnh lệnh nhất quyết': 'Mệnh lệnh nhất quyết (Kant): hành động chỉ theo châm ngôn mà bạn có thể muốn nó trở thành quy luật phổ quát.',
  'cogito': 'Cogito, ergo sum (Descartes): "Tôi suy nghĩ, vậy tôi tồn tại" — nền tảng bất khả nghi duy nhất; dù hoài nghi tất cả, sự tồn tại của chủ thể suy nghĩ là chắc chắn.',
  'nhị nguyên luận': 'Nhị nguyên tâm-thể (Descartes): tâm trí (res cogitans) và thể xác (res extensa) là hai thực thể hoàn toàn khác biệt, đặt ra câu hỏi về mối quan hệ giữa ý thức và vật chất.',
  'hoài nghi phương pháp': 'Hoài nghi phương pháp (Descartes): đặt mọi niềm tin vào vòng nghi ngờ có hệ thống để tìm ra tri thức chắc chắn tuyệt đối — không phải hoài nghi vì hoài nghi mà vì mục đích tìm chân lý.',
  'đạo': 'Đạo (Lão Tử): nguyên lý nền tảng của vũ trụ, không thể diễn đạt trọn vẹn bằng lời — là nguồn gốc, quy luật và đích đến của vạn vật.',
  'vô vi': 'Vô vi (Lão Tử): hành động không cưỡng ép, thuận theo tự nhiên — "không làm gì" mà không có gì không thành. Đây không phải sự lười biếng mà là hành động thuận theo dòng chảy tự nhiên.',
  'tồn tại trước bản chất': 'Tồn tại có trước bản chất (Sartre): con người không có bản chất định sẵn — trước hết ta tồn tại, sau đó tự định nghĩa mình qua hành động và lựa chọn.',
  'phi lý': 'Sự phi lý (Chủ nghĩa hiện sinh): nhận thức rằng thế giới không có ý nghĩa nội tại — con người phải đối mặt với sự vô nghĩa và tự tạo ra ý nghĩa cho cuộc sống.'
};

const OFF_TOPIC_KEYWORDS = [
  'chính trị hiện đại', 'bầu cử', 'đảng phái', 'chính phủ hiện tại',
  'đời tư', 'tin tức', 'giải trí', 'thể thao', 'âm nhạc', 'phim',
  'nấu ăn', 'du lịch', 'mua sắm', 'cổ phiếu', 'tiền ảo', 'crypto'
];

function normalize(text) {
  return text.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function isOffTopic(query) {
  const n = normalize(query);
  if (OFF_TOPIC_KEYWORDS.some(k => n.includes(normalize(k)))) return true;
  if (n.length < 4) return true;
  const philosophyTerms = ['triết', 'philosoph', 'socrates', 'plato', 'aristotle', 'kant', 'nietzsche', 'đạo đức', 'ý niệm', 'logic', 'khắc kỷ', 'nho', 'tư tưởng', 'quan điểm', 'trường phái', 'triết gia', 'khái niệm', 'siêu hình', 'moral', 'ethics', 'virtue', 'concept', 'marcus', 'khổng', 'confucius', 'aurelius', 'lão tử', 'lao tzu', 'đạo giáo', 'taoism', 'descartes', 'cogito', 'duy lý', 'sartre', 'hiện sinh', 'existential', 'vô vi', 'tồn tại', 'bản chất', 'tự do', 'bổn phận', 'nhị nguyên', 'hoài nghi'];
  const hasPhilosophy = philosophyTerms.some(t => n.includes(normalize(t)));
  if (!hasPhilosophy && n.split(/\s+/).length < 3) return true;
  return false;
}

function detectTopic(query) {
  const n = normalize(query);
  for (const [key] of Object.entries(PHILOSOPHERS)) {
    const p = PHILOSOPHERS[key];
    if (n.includes(normalize(p.name)) || n.includes(normalize(p.nameVi)) || n.includes(key.replace('_', ' '))) return p.name;
  }
  for (const [key] of Object.entries(SCHOOLS)) {
    if (n.includes(normalize(key))) return key;
  }
  for (const [key] of Object.entries(CONCEPTS)) {
    if (n.includes(normalize(key))) return key;
  }
  return 'triết học chung';
}

function getPhilosophyReply(query) {
  const n = normalize(query);

  for (const [key, p] of Object.entries(PHILOSOPHERS)) {
    if (n.includes(normalize(p.name)) || n.includes(normalize(p.nameVi)) || n.includes(key.replace('_', ' '))) {
      const isCompare = /so sánh|compare|khác nhau|giống nhau|đối chiếu/.test(n);
      if (isCompare) {
        const others = Object.entries(PHILOSOPHERS).filter(([k]) => k !== key);
        const second = others.find(([k, p2]) => n.includes(normalize(p2.name)) || n.includes(normalize(p2.nameVi)));
        if (second) {
          const [k2, p2] = second;
          return `**So sánh ${p.name} và ${p2.name}:**\n\n` +
            `**${p.name}:** ${p.concepts[0]}\n\n` +
            `**${p2.name}:** ${p2.concepts[0]}\n\n` +
            `Cả hai đều thuộc truyền thống triết học lớn; ${p.name} ${p.school}; ${p2.name} ${p2.school}. Bạn có thể đào sâu từng vị trong mục Triết gia.`;
        }
      }
      let reply = `**${p.name}** (${p.birthDeath}) – ${p.school}\n\n${p.summary}\n\n`;
      reply += '**Một số tư tưởng chính:**\n' + p.concepts.map(c => '• ' + c).join('\n');
      return reply;
    }
  }

  for (const [key, text] of Object.entries(SCHOOLS)) {
    if (n.includes(normalize(key))) return `**Trường phái: ${key}**\n\n${text}`;
  }

  for (const [key, text] of Object.entries(CONCEPTS)) {
    if (n.includes(normalize(key))) return `**Khái niệm: ${key}**\n\n${text}`;
  }

  if (/trường phái|school|phái/.test(n)) {
    return '**Các trường phái triết học** thường gặp: Hy Lạp cổ đại (Socrates, Plato, Aristotle), Khắc kỷ (Marcus Aurelius), Khai sáng (Kant), Hiện sinh (Nietzsche), Nho giáo (Khổng Tử). Bạn muốn tìm hiểu trường phái nào?';
  }
  if (/khái niệm|concept|định nghĩa/.test(n)) {
    return 'Một số **khái niệm triết học** quen thuộc: ý niệm, đối thoại, logic, bổn phận, siêu nhân, ý chí quyền lực, trung đạo, eudaimonia, mệnh lệnh nhất quyết. Bạn quan tâm khái niệm nào?';
  }
  if (/triết gia|philosopher|nhà triết/.test(n)) {
    return 'Trong phạm vi này tôi có thể nói về **Socrates, Plato, Aristotle, Kant, Nietzsche, Marcus Aurelius, Khổng Tử**. Bạn muốn hỏi về ai?';
  }

  return 'Câu hỏi của bạn liên quan đến **triết học** nhưng chưa đủ cụ thể. Bạn có thể hỏi về một triết gia (ví dụ Socrates, Kant), một trường phái (Khắc kỷ, Nho giáo), hoặc khái niệm (ý niệm, bổn phận, siêu nhân). Tôi sẽ cố gắng trả lời trong phạm vi đó.';
}

export function getChatResponse(query, userId) {
  if (isOffTopic(query)) {
    return {
      content: 'Xin lỗi, tôi chỉ được phép trả lời các câu hỏi trong phạm vi **triết học** (triết gia, trường phái, khái niệm, phân tích tư tưởng). Câu hỏi của bạn nằm ngoài phạm vi này. Bạn có muốn hỏi về Socrates, Plato, Kant, Nietzsche, hay một chủ đề triết học nào khác không?',
      topicDetected: 'off-topic',
      rejected: true
    };
  }
  const topicDetected = detectTopic(query);
  const content = getPhilosophyReply(query);
  return { content, topicDetected, rejected: false };
}

export const SAMPLE_QUESTIONS = [
  'Socrates và phương pháp đối thoại là gì?',
  'Plato nói gì về thuyết ý niệm?',
  'Aristotle và logic học',
  'Kant và đạo đức học bổn phận',
  'Nietzsche – siêu nhân và ý chí quyền lực',
  'So sánh Plato và Aristotle',
  'Khắc kỷ là gì?',
  'Khái niệm trung đạo của Aristotle',
  'Lão Tử và Đạo là gì?',
  'Vô vi trong Đạo giáo nghĩa là gì?',
  'Descartes và Cogito ergo sum',
  'Sartre nói gì về tự do?',
  'So sánh Lão Tử và Khổng Tử',
  'Nhị nguyên tâm-thể của Descartes',
  'Tồn tại có trước bản chất nghĩa là gì?'
];
