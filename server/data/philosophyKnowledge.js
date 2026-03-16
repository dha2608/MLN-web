/**
 * Nội dung kinh tế chính trị & triết học cho chatbot.
 * Chủ đạo: Kinh tế chính trị Mác-Lênin (Marx, Engels, Lenin).
 * Bổ sung: Triết học cổ điển (Socrates, Plato, Aristotle, Kant, Nietzsche, v.v.)
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
    imageUrl: 'https://imgs.search.brave.com/5fOOEdKD4izy9CHabQBhbByuWC5olG24hQKf69-_d1E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ldGhp/Y3Mub3JnLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzAz/L0FyaXN0b3RsZV9o/ZWFkZXIuanBn',
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
  },
  karl_marx: {
    name: 'Karl Marx',
    nameVi: 'Các Mác',
    birthDeath: '1818–1883',
    era: 'Cận đại',
    school: 'Chủ nghĩa Mác (Marxism)',
    summary: 'Karl Marx (1818–1883) là nhà triết học, nhà kinh tế chính trị, nhà xã hội học và nhà cách mạng người Đức — người sáng lập chủ nghĩa Mác, một trong những hệ tư tưởng có ảnh hưởng sâu rộng nhất trong lịch sử nhân loại. Marx phát triển chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử — coi lịch sử xã hội là lịch sử đấu tranh giai cấp. Tác phẩm Tư bản (Das Kapital) phân tích cơ chế bóc lột giá trị thặng dư trong chủ nghĩa tư bản, chỉ ra mâu thuẫn nội tại dẫn đến sự sụp đổ tất yếu của nó. Cùng với Friedrich Engels, ông viết Tuyên ngôn của Đảng Cộng sản (1848) — văn kiện chính trị có ảnh hưởng nhất thế kỷ 19. Marx không chỉ giải thích thế giới mà kêu gọi cải tạo thế giới. Tư tưởng của ông là nền tảng lý luận của phong trào công nhân quốc tế, Cách mạng Tháng Mười Nga, và hệ thống xã hội chủ nghĩa trên toàn thế giới.',
    imageUrl: 'https://imgs.search.brave.com/eCIdAI5EHsge38M8_wsU0jiOufbbaBNMIa_dyFwyPds/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9mL2YzL0th/cmxfTWFyeF9ieV9K/b2huX0phYmV6X0Vk/d2luX01heWFsbF8x/ODc1Xy1fUmVzdG9y/ZWRfJTI2X0FkanVz/dGVkXyUyODN4NF9j/cm9wcGVkX2IlMjku/cG5nLzUxMnB4LUth/cmxfTWFyeF9ieV9K/b2huX0phYmV6X0Vk/d2luX01heWFsbF8x/ODc1Xy1fUmVzdG9y/ZWRfJTI2X0FkanVz/dGVkXyUyODN4NF9j/cm9wcGVkX2IlMjku/cG5n',
    imageAlt: 'Chân dung Karl Marx, ảnh chụp năm 1875',
    imageCaption: 'Chân dung Karl Marx — ảnh chụp bởi John Jabez Edwin Mayal, 1875',
    imageSource: 'Wikimedia Commons — Public Domain',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Karl_Marx_001.jpg',
    concepts: [
      'Chủ nghĩa duy vật biện chứng: vận dụng phép biện chứng của Hegel trên nền tảng duy vật — mâu thuẫn nội tại là động lực phát triển của tự nhiên, xã hội và tư duy.',
      'Chủ nghĩa duy vật lịch sử: tồn tại xã hội quyết định ý thức xã hội; lực lượng sản xuất và quan hệ sản xuất là nền tảng (hạ tầng cơ sở) quyết định kiến trúc thượng tầng (chính trị, pháp luật, tư tưởng).',
      'Giá trị thặng dư: phần giá trị do lao động tạo ra vượt quá tiền lương nhận được — nguồn gốc lợi nhuận tư bản, cốt lõi của sự bóc lột.',
      'Đấu tranh giai cấp: lịch sử loài người là lịch sử đấu tranh giữa các giai cấp có lợi ích đối kháng — chủ nô vs nô lệ, phong kiến vs nông nô, tư sản vs vô sản.',
      'Sự tha hóa lao động (Alienation): trong chủ nghĩa tư bản, công nhân bị tha hóa khỏi sản phẩm lao động, quá trình lao động, bản chất con người và đồng loại.',
      'Hàng hóa và tính chất hai mặt: mọi hàng hóa có giá trị sử dụng (thỏa mãn nhu cầu) và giá trị (lao động xã hội kết tinh) — mâu thuẫn cơ bản của sản xuất hàng hóa.'
    ],
    quotes: [
      { text: 'Các nhà triết học đã chỉ giải thích thế giới bằng nhiều cách khác nhau; vấn đề là cải tạo thế giới.', source: 'Luận cương về Feuerbach (1845), Luận điểm 11' },
      { text: 'Lịch sử tất cả các xã hội tồn tại từ trước đến nay là lịch sử đấu tranh giai cấp.', source: 'Tuyên ngôn của Đảng Cộng sản (1848)' },
      { text: 'Vô sản tất cả các nước, đoàn kết lại!', source: 'Tuyên ngôn của Đảng Cộng sản (1848)' },
      { text: 'Không phải ý thức con người quyết định tồn tại của họ, mà ngược lại, tồn tại xã hội quyết định ý thức của họ.', source: 'Góp phần phê phán kinh tế chính trị (1859)' },
      { text: 'Tư bản ra đời, từ đầu đến chân, từ mọi lỗ chân lông, đều rỉ máu và bùn nhơ.', source: 'Tư bản, Quyển I (1867)' },
      { text: 'Tôn giáo là thuốc phiện của nhân dân.', source: 'Góp phần phê phán triết học pháp quyền của Hegel (1844)' }
    ],
    works: [
      { title: 'Tư bản (Das Kapital)', year: '1867–1894', description: 'Kiệt tác kinh tế chính trị phân tích quy luật vận động của chủ nghĩa tư bản: hàng hóa, giá trị, giá trị thặng dư, tích lũy tư bản và mâu thuẫn nội tại. Quyển I xuất bản năm 1867, Quyển II–III do Engels biên tập và xuất bản sau khi Marx mất.' },
      { title: 'Tuyên ngôn của Đảng Cộng sản', year: '1848', description: 'Văn kiện chính trị viết cùng Engels, trình bày lý luận đấu tranh giai cấp, phê phán chủ nghĩa tư bản và kêu gọi cách mạng vô sản. Một trong những văn bản có ảnh hưởng nhất lịch sử.' },
      { title: 'Bản thảo Kinh tế-Triết học 1844', year: '1844', description: 'Phân tích sự tha hóa lao động trong chủ nghĩa tư bản và mối quan hệ giữa triết học, kinh tế và xã hội.' },
      { title: 'Hệ tư tưởng Đức (Die Deutsche Ideologie)', year: '1846', description: 'Viết cùng Engels, trình bày chủ nghĩa duy vật lịch sử lần đầu tiên một cách có hệ thống.' },
      { title: 'Góp phần phê phán kinh tế chính trị', year: '1859', description: 'Trình bày nền tảng phương pháp luận cho Tư bản, gồm lý luận về hàng hóa và tiền tệ.' }
    ],
    influences: ['Hegel', 'Ludwig Feuerbach', 'Adam Smith', 'David Ricardo', 'Triết học Khai sáng Pháp'],
    influencedBy: ['Friedrich Engels', 'V.I. Lenin', 'Hồ Chí Minh', 'Phong trào cộng sản quốc tế', 'Xã hội học hiện đại']
  },
  friedrich_engels: {
    name: 'Friedrich Engels',
    nameVi: 'Phriđơrich Ăngghen',
    birthDeath: '1820–1895',
    era: 'Cận đại',
    school: 'Chủ nghĩa Mác (Marxism)',
    summary: 'Friedrich Engels (1820–1895) là nhà triết học, nhà kinh tế chính trị và nhà cách mạng người Đức — người bạn chiến đấu thân thiết nhất và đồng sáng lập chủ nghĩa Mác cùng Karl Marx. Engels không chỉ hỗ trợ tài chính cho Marx suốt đời mà còn có những đóng góp lý luận độc lập quan trọng. Ông phát triển phép biện chứng của tự nhiên, phân tích nguồn gốc gia đình, chế độ tư hữu và nhà nước, đồng thời hệ thống hóa chủ nghĩa xã hội khoa học trong tác phẩm Chống Đuy-rinh. Sau khi Marx mất (1883), Engels biên tập và xuất bản Quyển II–III của Tư bản, bảo vệ và phổ biến di sản tư tưởng Mác. Ông là nhà lý luận bậc thầy về phép biện chứng duy vật ứng dụng vào tự nhiên và xã hội.',
    imageUrl: 'https://imgs.search.brave.com/gPbG9nNndB9I2YochV3okVwuH1iuW9ff1Nd4p0GTAz8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTI5/MDExNDA1L3Bob3Rv/L2ZyaWVkcmljaC1l/bmdlbHMtZ2VybWFu/LXNvY2lhbGlzdC1h/bmQtY29sbGFib3Jh/dG9yLWFuZC1zdXBw/b3J0ZXItb2Yta2Fy/bC1tYXJ4LTE4Nzkt/ZW5nZWxzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1GVkY3/TzQ4YWR4U2pjWndl/SHhGNnZuVlk4SVdf/TnBScG50ZlgxaTBu/ek8wPQ',
    imageAlt: 'Chân dung Friedrich Engels',
    imageCaption: 'Chân dung Friedrich Engels — ảnh chụp khoảng năm 1870',
    imageSource: 'Wikimedia Commons — Public Domain',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Friedrich_Engels_portrait_(cropped).jpg',
    concepts: [
      'Phép biện chứng của tự nhiên: ba quy luật cơ bản — quy luật thống nhất và đấu tranh của các mặt đối lập, quy luật chuyển hóa từ lượng sang chất, quy luật phủ định của phủ định.',
      'Chủ nghĩa xã hội khoa học: phân biệt với chủ nghĩa xã hội không tưởng (utopian); xây dựng trên nền tảng duy vật lịch sử và kinh tế chính trị.',
      'Nguồn gốc gia đình, chế độ tư hữu và nhà nước: gia đình, tư hữu và nhà nước không phải vĩnh cửu mà là sản phẩm lịch sử, ra đời cùng sự phân chia giai cấp.',
      'Lao động tạo ra con người: quá trình lao động sản xuất là nhân tố quyết định trong sự tiến hóa từ vượn thành người.',
      'Vai trò của bạo lực trong lịch sử: bạo lực là "bà đỡ" của lịch sử — đóng vai trò cách mạng khi quan hệ sản xuất cũ kìm hãm lực lượng sản xuất mới.'
    ],
    quotes: [
      { text: 'Lao động là điều kiện cơ bản đầu tiên của toàn bộ đời sống loài người, đến mức mà, theo một nghĩa nào đó, chúng ta phải nói: lao động đã tạo ra con người.', source: 'Vai trò của lao động trong quá trình chuyển biến từ vượn thành người (1876)' },
      { text: 'Tự do là nhận thức được tất yếu.', source: 'Chống Đuy-rinh (Anti-Dühring, 1878)' },
      { text: 'Một ounce hành động có giá trị hơn hàng tấn lý thuyết.', source: 'Thư gửi F. Kelley-Wischnewetzky (1887)' },
      { text: 'Nhà nước không phải là cái gì khác ngoài bộ máy trấn áp của một giai cấp đối với giai cấp khác.', source: 'Nguồn gốc gia đình, chế độ tư hữu và nhà nước (1884)' }
    ],
    works: [
      { title: 'Chống Đuy-rinh (Anti-Dühring)', year: '1878', description: 'Trình bày có hệ thống ba bộ phận cấu thành chủ nghĩa Mác: triết học (duy vật biện chứng), kinh tế chính trị và chủ nghĩa xã hội khoa học.' },
      { title: 'Biện chứng của tự nhiên (Dialektik der Natur)', year: '1883', description: 'Áp dụng phép biện chứng duy vật vào các khoa học tự nhiên, chứng minh tự nhiên vận động theo quy luật biện chứng.' },
      { title: 'Nguồn gốc gia đình, chế độ tư hữu và nhà nước', year: '1884', description: 'Phân tích sự hình thành gia đình, tư hữu và nhà nước từ góc nhìn duy vật lịch sử.' },
      { title: 'Tình cảnh giai cấp công nhân Anh', year: '1845', description: 'Nghiên cứu thực địa đầu tiên về điều kiện sống và lao động của giai cấp công nhân trong cách mạng công nghiệp.' },
      { title: 'Ludwig Feuerbach và sự cáo chung của triết học cổ điển Đức', year: '1886', description: 'Tổng kết quá trình phát triển từ triết học Hegel qua Feuerbach đến chủ nghĩa duy vật biện chứng.' }
    ],
    influences: ['Karl Marx', 'Hegel', 'Ludwig Feuerbach', 'Charles Darwin', 'Kinh tế chính trị cổ điển Anh'],
    influencedBy: ['V.I. Lenin', 'Rosa Luxemburg', 'Chủ nghĩa Mác-Lênin', 'Phong trào công nhân quốc tế']
  },
  lenin: {
    name: 'Vladimir Ilyich Lenin',
    nameVi: 'V.I. Lênin',
    birthDeath: '1870–1924',
    era: 'Hiện đại',
    school: 'Chủ nghĩa Mác-Lênin',
    summary: 'Vladimir Ilyich Lenin (1870–1924) là nhà lý luận chính trị, nhà cách mạng và lãnh tụ của Cách mạng xã hội chủ nghĩa Tháng Mười Nga 1917 — sự kiện mở ra thời đại mới trong lịch sử nhân loại. Lenin phát triển chủ nghĩa Mác thành chủ nghĩa Mác-Lênin, bổ sung lý luận về chủ nghĩa đế quốc là giai đoạn tột cùng của chủ nghĩa tư bản, vai trò đảng tiên phong của giai cấp vô sản, nguyên tắc tập trung dân chủ và nhà nước chuyên chính vô sản. Tác phẩm "Chủ nghĩa đế quốc, giai đoạn tột cùng của chủ nghĩa tư bản" (1917) phân tích sự chuyển biến từ tư bản tự do cạnh tranh sang tư bản độc quyền. Lenin chứng minh cách mạng vô sản có thể thắng lợi ở một nước riêng lẻ — khâu yếu nhất trong chuỗi đế quốc. Tư tưởng của ông là nền tảng lý luận cho Liên Xô và phong trào giải phóng dân tộc trên toàn thế giới, bao gồm cách mạng Việt Nam.',
    imageUrl: 'https://imgs.search.brave.com/EaoQuTmNNc91AV5C7KLMYw4wDGMqjkTOkP1jyHzGqKA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi82LzZjL0xl/bmluX2luXzE5MjBf/JTI4cm90YXRlX2Ny/b3BwZWQlMjkuanBn/LzUxMnB4LUxlbmlu/X2luXzE5MjBfJTI4/cm90YXRlX2Nyb3Bw/ZWQlMjkuanBn',
    imageAlt: 'Chân dung V.I. Lenin, ảnh chụp năm 1920',
    imageCaption: 'Chân dung V.I. Lenin — ảnh chụp tại Moskva, 1920',
    imageSource: 'Wikimedia Commons — Public Domain',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Lenin_1920_(cropped).jpg',
    concepts: [
      'Chủ nghĩa đế quốc là giai đoạn tột cùng của chủ nghĩa tư bản: tư bản phát triển đến giai đoạn độc quyền, xuất khẩu tư bản, phân chia thế giới giữa các cường quốc — tạo điều kiện cho cách mạng vô sản.',
      'Đảng tiên phong (Vanguard Party): giai cấp công nhân cần một đảng cách mạng có tổ chức chặt chẽ, được vũ trang bằng lý luận Mác-xít, để lãnh đạo cuộc đấu tranh.',
      'Tập trung dân chủ: nguyên tắc tổ chức đảng — tự do thảo luận, thống nhất hành động; thiểu số phục tùng đa số, cấp dưới phục tùng cấp trên.',
      'Nhà nước và cách mạng: nhà nước là công cụ thống trị giai cấp; cách mạng vô sản đập tan bộ máy nhà nước tư sản, thiết lập chuyên chính vô sản.',
      'Lý luận phản ánh (Theory of Reflection): nhận thức là sự phản ánh thế giới khách quan vào ý thức con người — vật chất có trước, ý thức có sau.',
      'Cách mạng ở khâu yếu nhất: cách mạng vô sản không nhất thiết nổ ra ở nước tư bản phát triển nhất mà ở nơi mâu thuẫn tập trung gay gắt nhất.'
    ],
    quotes: [
      { text: 'Không có lý luận cách mạng thì không có phong trào cách mạng.', source: 'Làm gì? (Chto delat?, 1902)' },
      { text: 'Học, học nữa, học mãi.', source: 'Qua truyền thống, thường được gán cho Lenin' },
      { text: 'Chủ nghĩa đế quốc là giai đoạn tột cùng của chủ nghĩa tư bản.', source: 'Chủ nghĩa đế quốc, giai đoạn tột cùng của chủ nghĩa tư bản (1917)' },
      { text: 'Trong khi nhà nước tồn tại thì không có tự do. Khi có tự do thì sẽ không còn nhà nước.', source: 'Nhà nước và cách mạng (1917)' },
      { text: 'Thực tiễn là tiêu chuẩn của chân lý.', source: 'Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán (1909)' },
      { text: 'Chính trị là biểu hiện tập trung nhất của kinh tế.', source: 'Bệnh ấu trĩ "tả khuynh" trong phong trào cộng sản (1920)' }
    ],
    works: [
      { title: 'Chủ nghĩa đế quốc, giai đoạn tột cùng của chủ nghĩa tư bản', year: '1917', description: 'Phân tích sự chuyển biến từ tư bản tự do cạnh tranh sang tư bản độc quyền, năm đặc điểm kinh tế của chủ nghĩa đế quốc.' },
      { title: 'Nhà nước và cách mạng (Gosudarstvo i revolyutsiya)', year: '1917', description: 'Phân tích bản chất giai cấp của nhà nước, luận giải sự cần thiết của chuyên chính vô sản và sự tiêu vong của nhà nước.' },
      { title: 'Làm gì? (Chto delat?)', year: '1902', description: 'Trình bày lý luận về đảng cách mạng kiểu mới — đảng tiên phong của giai cấp công nhân.' },
      { title: 'Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán', year: '1909', description: 'Bảo vệ triết học duy vật biện chứng, phê phán chủ nghĩa duy tâm chủ quan và thuyết bất khả tri.' },
      { title: 'Bút ký triết học', year: '1914–1916', description: 'Ghi chép nghiên cứu logic biện chứng của Hegel, phát triển phép biện chứng duy vật.' }
    ],
    influences: ['Karl Marx', 'Friedrich Engels', 'Hegel', 'Chernyshevsky', 'Plekhanov'],
    influencedBy: ['Hồ Chí Minh', 'Mao Trạch Đông', 'Fidel Castro', 'Phong trào giải phóng dân tộc', 'Hệ thống xã hội chủ nghĩa thế giới']
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
  { year: '1818', event: 'Karl Marx sinh tại Trier, Phổ', philosopher: 'Karl Marx', era: 'Cận đại' },
  { year: '1820', event: 'Friedrich Engels sinh tại Barmen, Phổ', philosopher: 'Friedrich Engels', era: 'Cận đại' },
  { year: '1844', event: 'Friedrich Nietzsche sinh tại Röcken, Phổ', philosopher: 'Nietzsche', era: 'Cận đại' },
  { year: '1845', event: 'Marx viết Luận cương về Feuerbach — "Vấn đề là cải tạo thế giới"', philosopher: 'Karl Marx', era: 'Cận đại' },
  { year: '1848', event: 'Marx và Engels xuất bản Tuyên ngôn của Đảng Cộng sản', philosopher: 'Karl Marx', era: 'Cận đại' },
  { year: '1867', event: 'Marx xuất bản Tư bản Quyển I — phân tích giá trị thặng dư', philosopher: 'Karl Marx', era: 'Cận đại' },
  { year: '1870', event: 'V.I. Lenin sinh tại Simbirsk, Nga', philosopher: 'V.I. Lenin', era: 'Hiện đại' },
  { year: '1878', event: 'Engels xuất bản Chống Đuy-rinh — hệ thống hóa chủ nghĩa Mác', philosopher: 'Friedrich Engels', era: 'Cận đại' },
  { year: '1883', event: 'Marx mất tại London; Engels bắt đầu biên tập Tư bản Quyển II–III', philosopher: 'Karl Marx', era: 'Cận đại' },
  { year: '1884', event: 'Engels xuất bản Nguồn gốc gia đình, chế độ tư hữu và nhà nước', philosopher: 'Friedrich Engels', era: 'Cận đại' },
  { year: '1883', event: 'Nietzsche bắt đầu viết Zarathustra đã nói như thế', philosopher: 'Nietzsche', era: 'Cận đại' },
  { year: '1902', event: 'Lenin viết Làm gì? — lý luận đảng tiên phong', philosopher: 'V.I. Lenin', era: 'Hiện đại' },
  { year: '1905', event: 'Jean-Paul Sartre sinh tại Paris, Pháp', philosopher: 'Sartre', era: 'Hiện đại' },
  { year: '1917', event: 'Lenin xuất bản Chủ nghĩa đế quốc, giai đoạn tột cùng của CNTB', philosopher: 'V.I. Lenin', era: 'Hiện đại' },
  { year: '1917', event: 'Cách mạng Tháng Mười Nga thắng lợi — mở ra thời đại mới', philosopher: 'V.I. Lenin', era: 'Hiện đại' },
  { year: '1943', event: 'Sartre xuất bản Tồn tại và Hư vô — kiệt tác hiện sinh', philosopher: 'Sartre', era: 'Hiện đại' },
  { year: '1964', event: 'Sartre từ chối giải Nobel Văn học', philosopher: 'Sartre', era: 'Hiện đại' }
];

/** Chi tiết các trường phái */
export const SCHOOLS_DETAIL = {
  'Chủ nghĩa Mác (Marxism)': {
    name: 'Chủ nghĩa Mác (Marxism)',
    era: 'Thế kỷ 19 – nay',
    description: 'Hệ thống lý luận do Karl Marx và Friedrich Engels sáng lập, bao gồm ba bộ phận: triết học Mác-xít (chủ nghĩa duy vật biện chứng và duy vật lịch sử), kinh tế chính trị Mác-xít (lý luận giá trị thặng dư), và chủ nghĩa xã hội khoa học. Chủ nghĩa Mác là vũ khí lý luận của giai cấp công nhân trong cuộc đấu tranh xóa bỏ áp bức, bóc lột.',
    keyIdeas: ['Chủ nghĩa duy vật biện chứng', 'Chủ nghĩa duy vật lịch sử', 'Giá trị thặng dư', 'Đấu tranh giai cấp', 'Chủ nghĩa xã hội khoa học'],
    philosophers: ['Karl Marx', 'Friedrich Engels'],
    icon: '\u2692'
  },
  'Chủ nghĩa Mác-Lênin': {
    name: 'Chủ nghĩa Mác-Lênin',
    era: 'Thế kỷ 20 – nay',
    description: 'Sự phát triển sáng tạo chủ nghĩa Mác bởi V.I. Lenin trong điều kiện chủ nghĩa đế quốc và cách mạng vô sản. Bổ sung lý luận về đảng tiên phong, chủ nghĩa đế quốc, chuyên chính vô sản, tập trung dân chủ và khả năng thắng lợi của cách mạng ở một nước riêng lẻ. Là nền tảng tư tưởng của Đảng Cộng sản Việt Nam.',
    keyIdeas: ['Chủ nghĩa đế quốc', 'Đảng tiên phong', 'Tập trung dân chủ', 'Chuyên chính vô sản', 'Cách mạng ở khâu yếu nhất'],
    philosophers: ['V.I. Lenin', 'Karl Marx', 'Friedrich Engels'],
    icon: '\u2605'
  },
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
  'chủ nghĩa mác': 'Chủ nghĩa Mác (Marxism): Karl Marx, Friedrich Engels – chủ nghĩa duy vật biện chứng, duy vật lịch sử, giá trị thặng dư, đấu tranh giai cấp, chủ nghĩa xã hội khoa học.',
  'chủ nghĩa mác-lênin': 'Chủ nghĩa Mác-Lênin: Lenin phát triển sáng tạo chủ nghĩa Mác – lý luận chủ nghĩa đế quốc, đảng tiên phong, tập trung dân chủ, chuyên chính vô sản.',
  'marxism': 'Marxism: Karl Marx, Friedrich Engels – dialectical materialism, historical materialism, surplus value, class struggle.',
  'kinh tế chính trị': 'Kinh tế chính trị Mác-xít: nghiên cứu quan hệ sản xuất, quy luật kinh tế khách quan của xã hội – hàng hóa, giá trị, giá trị thặng dư, tích lũy tư bản.',
  'hy lạp cổ đại': 'Triết học Hy Lạp cổ đại: Socrates, Plato, Aristotle – tập trung vào đạo đức, siêu hình học, logic.',
  'khắc kỷ': 'Khắc kỷ (Stoicism): Marcus Aurelius, Epictetus, Seneca – chấp nhận số phận, kiểm soát cảm xúc, sống theo lý tính.',
  'khai sáng': 'Khai sáng Đức: Kant – lý tính, đạo đức bổn phận, phê phán tri thức.',
  'hiện sinh': 'Hiện sinh: Nietzsche, Kierkegaard, Sartre – tồn tại trước bản chất, tự do, trách nhiệm.',
  'nho giáo': 'Nho giáo: Khổng Tử, Mạnh Tử – đức hạnh, quan hệ xã hội, giáo dục.',
  'đạo giáo': 'Đạo giáo (Taoism): Lão Tử, Trang Tử – Đạo, vô vi, hòa hợp tự nhiên, âm dương.',
  'duy lý luận': 'Duy lý luận (Rationalism): Descartes, Spinoza, Leibniz – lý tính là nguồn gốc tri thức, hoài nghi phương pháp, ý tưởng bẩm sinh.'
};

export const CONCEPTS = {
  'giá trị thặng dư': 'Giá trị thặng dư (Karl Marx): phần giá trị do công nhân tạo ra vượt quá giá trị sức lao động (tiền lương) — nguồn gốc lợi nhuận của nhà tư bản, cốt lõi của sự bóc lột trong chủ nghĩa tư bản. Đây là phát kiến vĩ đại nhất của Marx trong kinh tế chính trị.',
  'đấu tranh giai cấp': 'Đấu tranh giai cấp (Marx-Engels): lịch sử loài người là lịch sử đấu tranh giữa các giai cấp có lợi ích đối kháng — chủ nô vs nô lệ, phong kiến vs nông nô, tư sản vs vô sản. Đấu tranh giai cấp là động lực phát triển xã hội có giai cấp.',
  'duy vật biện chứng': 'Chủ nghĩa duy vật biện chứng (Marx-Engels): thế giới quan và phương pháp luận khoa học — vật chất có trước ý thức, thế giới vận động theo quy luật biện chứng (thống nhất đối lập, lượng-chất, phủ định của phủ định).',
  'duy vật lịch sử': 'Chủ nghĩa duy vật lịch sử (Marx): tồn tại xã hội quyết định ý thức xã hội; lực lượng sản xuất và quan hệ sản xuất (hạ tầng cơ sở) quyết định kiến trúc thượng tầng (chính trị, pháp luật, tư tưởng).',
  'tư liệu sản xuất': 'Tư liệu sản xuất (Marx): tổng thể các yếu tố vật chất mà con người sử dụng để sản xuất — gồm đối tượng lao động và tư liệu lao động. Ai sở hữu tư liệu sản xuất, người đó nắm quyền lực kinh tế.',
  'hàng hóa': 'Hàng hóa (Marx): sản phẩm của lao động có thể trao đổi trên thị trường, có hai thuộc tính — giá trị sử dụng (thỏa mãn nhu cầu) và giá trị (lao động xã hội cần thiết kết tinh). Đây là tế bào kinh tế của chủ nghĩa tư bản.',
  'chủ nghĩa đế quốc': 'Chủ nghĩa đế quốc (Lenin): giai đoạn tột cùng của chủ nghĩa tư bản — tư bản phát triển đến mức độc quyền, xuất khẩu tư bản, phân chia thế giới giữa các cường quốc. Tạo điều kiện cho cách mạng vô sản.',
  'chuyên chính vô sản': 'Chuyên chính vô sản (Marx-Lenin): nhà nước của giai cấp công nhân sau cách mạng — thực hiện dân chủ cho đa số nhân dân lao động, trấn áp thiểu số bóc lột, xây dựng chủ nghĩa xã hội.',
  'tha hóa lao động': 'Sự tha hóa lao động (Marx): trong chủ nghĩa tư bản, công nhân bị tha hóa khỏi sản phẩm lao động, quá trình lao động, bản chất loài của con người và đồng loại — lao động trở thành phương tiện sinh tồn thay vì biểu hiện bản chất sáng tạo.',
  'phép biện chứng': 'Phép biện chứng duy vật (Marx-Engels): phương pháp tư duy nhìn sự vật trong mối liên hệ phổ biến và sự phát triển không ngừng — ba quy luật: thống nhất và đấu tranh các mặt đối lập, chuyển hóa lượng-chất, phủ định của phủ định.',
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
  'bầu cử', 'đảng phái', 'chính phủ hiện tại',
  'đời tư', 'tin tức', 'giải trí', 'thể thao', 'âm nhạc', 'phim',
  'nấu ăn', 'du lịch', 'mua sắm', 'cổ phiếu', 'tiền ảo', 'crypto',
  'game', 'thời tiết', 'bóng đá', 'tiktok', 'youtube'
];

function normalize(text) {
  return text.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function isOffTopic(query) {
  const n = normalize(query);
  if (OFF_TOPIC_KEYWORDS.some(k => n.includes(normalize(k)))) return true;
  if (n.length < 4) return true;
  // Kinh tế chính trị + triết học mở rộng
  const philosophyTerms = [
    // Kinh tế chính trị Mác-Lênin (chủ đạo)
    'marx', 'mác', 'mac', 'các mác', 'karl marx',
    'engels', 'ăngghen', 'angghen', 'ăng ghen',
    'lenin', 'lênin', 'le nin',
    'kinh tế chính trị', 'kinh te chinh tri', 'ktct',
    'giá trị thặng dư', 'gia tri thang du', 'thặng dư',
    'đấu tranh giai cấp', 'giai cấp', 'giai cap',
    'tư bản', 'tu ban', 'chủ nghĩa tư bản', 'tư sản', 'vô sản',
    'duy vật biện chứng', 'duy vật lịch sử', 'duy vật',
    'biện chứng', 'bien chung',
    'tư liệu sản xuất', 'quan hệ sản xuất', 'lực lượng sản xuất',
    'hàng hóa', 'hang hoa', 'sức lao động',
    'chủ nghĩa đế quốc', 'đế quốc', 'de quoc',
    'chuyên chính vô sản', 'chuyên chính',
    'cách mạng', 'cach mang', 'cộng sản', 'xã hội chủ nghĩa',
    'tuyên ngôn', 'tuyên ngôn cộng sản',
    'bóc lột', 'boc lot', 'tha hóa', 'tha hoa',
    'hạ tầng cơ sở', 'kiến trúc thượng tầng',
    'tích lũy tư bản', 'tập trung dân chủ',
    'đảng tiên phong', 'nhà nước',
    'chống đuy-rinh', 'chống đuyrinh', 'anti-dühring',
    // Triết học nền tảng
    'triết', 'philosoph', 'socrates', 'plato', 'aristotle', 'kant', 'nietzsche',
    'đạo đức', 'ý niệm', 'logic', 'khắc kỷ', 'nho', 'tư tưởng', 'quan điểm',
    'trường phái', 'triết gia', 'khái niệm', 'siêu hình', 'moral', 'ethics',
    'virtue', 'concept', 'marcus', 'khổng', 'confucius', 'aurelius',
    'lão tử', 'lao tzu', 'đạo giáo', 'taoism', 'descartes', 'cogito',
    'duy lý', 'sartre', 'hiện sinh', 'existential', 'vô vi', 'tồn tại',
    'bản chất', 'tự do', 'bổn phận', 'nhị nguyên', 'hoài nghi',
    // Mở rộng — câu hỏi thông thường về triết gia
    'sinh năm', 'sinh nào', 'mất năm', 'tiểu sử', 'cuộc đời', 'tác phẩm',
    'trích dẫn', 'câu nói', 'ảnh hưởng', 'đóng góp', 'lý thuyết', 'học thuyết',
    'nguyên lý', 'quy luật', 'phương pháp', 'phê phán'
  ];
  const hasPhilosophy = philosophyTerms.some(t => n.includes(normalize(t)));
  if (hasPhilosophy) return false;
  // Nới lỏng: câu dài >= 5 từ cho phép qua (người dùng đang hỏi nghiêm túc)
  if (n.split(/\s+/).length >= 5) return false;
  return true;
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
    return '**Các trường phái** chính: Chủ nghĩa Mác (Marx, Engels), Chủ nghĩa Mác-Lênin (Lenin), Hy Lạp cổ đại (Socrates, Plato, Aristotle), Khắc kỷ (Marcus Aurelius), Khai sáng (Kant), Hiện sinh (Nietzsche, Sartre), Nho giáo (Khổng Tử), Đạo giáo (Lão Tử). Bạn muốn tìm hiểu trường phái nào?';
  }
  if (/khái niệm|concept|định nghĩa/.test(n)) {
    return 'Một số **khái niệm** quan trọng: giá trị thặng dư, đấu tranh giai cấp, duy vật biện chứng, duy vật lịch sử, chủ nghĩa đế quốc, chuyên chính vô sản, tha hóa lao động, ý niệm, mệnh lệnh nhất quyết, cogito, vô vi, siêu nhân. Bạn quan tâm khái niệm nào?';
  }
  if (/triết gia|philosopher|nhà triết|nhà tư tưởng/.test(n)) {
    return 'Các nhà tư tưởng trong hệ thống: **Karl Marx, Friedrich Engels, V.I. Lenin** (kinh tế chính trị), Socrates, Plato, Aristotle, Kant, Nietzsche, Marcus Aurelius, Khổng Tử, Lão Tử, Descartes, Sartre. Bạn muốn hỏi về ai?';
  }

  return 'Câu hỏi của bạn liên quan đến **triết học / kinh tế chính trị** nhưng chưa đủ cụ thể. Bạn có thể hỏi về:\n• **Kinh tế chính trị**: Marx, Engels, Lenin, giá trị thặng dư, đấu tranh giai cấp, duy vật biện chứng\n• **Triết học**: Socrates, Kant, Nietzsche, Khổng Tử, Lão Tử\n• **Trường phái**: Chủ nghĩa Mác, Mác-Lênin, Khắc kỷ, Hiện sinh, Nho giáo\nTôi sẽ cố gắng trả lời trong phạm vi đó.';
}

export function getChatResponse(query, userId) {
  if (isOffTopic(query)) {
    return {
      content: 'Xin lỗi, tôi chỉ trả lời các câu hỏi trong phạm vi **kinh tế chính trị** và **triết học** (triết gia, trường phái, khái niệm, phân tích tư tưởng). Bạn có thể hỏi về Marx, Engels, Lenin, giá trị thặng dư, đấu tranh giai cấp, hoặc các triết gia như Socrates, Kant, Nietzsche, Khổng Tử.',
      topicDetected: 'off-topic',
      rejected: true
    };
  }
  const topicDetected = detectTopic(query);
  const content = getPhilosophyReply(query);
  return { content, topicDetected, rejected: false };
}

export const SAMPLE_QUESTIONS = [
  'Karl Marx và giá trị thặng dư là gì?',
  'Chủ nghĩa duy vật biện chứng là gì?',
  'Lenin và chủ nghĩa đế quốc',
  'Engels và phép biện chứng của tự nhiên',
  'So sánh Marx và Lenin',
  'Đấu tranh giai cấp là gì?',
  'Tuyên ngôn Đảng Cộng sản nói gì?',
  'Chủ nghĩa duy vật lịch sử khác gì duy vật biện chứng?',
  'Socrates và phương pháp đối thoại',
  'Kant và đạo đức học bổn phận',
  'Nietzsche – siêu nhân và ý chí quyền lực',
  'Lão Tử và Đạo là gì?',
  'So sánh Plato và Aristotle',
  'Sartre nói gì về tự do?',
  'Khổng Tử và Nho giáo'
];
