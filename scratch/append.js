const fs = require('fs');
let code = fs.readFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'utf8');
code = code.replace('window.questionsData =', 'global.questionsData =');
eval(code);

const newQuestions = [
  {
    "id": "q41",
    "question": "The chicken ran away.",
    "options": { "A": "S-V", "B": "S-V-O-C", "C": "S-V-C", "D": "S-V-O" },
    "correct_answer": "A",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Động từ 'ran' (chạy) là một nội động từ, không cần tân ngữ (Object) theo sau. 'away' đóng vai trò cung cấp thêm thông tin phụ trợ (Adverb).",
    "explanation_grammar": "Cấu trúc S-V: S (Chủ ngữ) + V (Nội động từ). Có thể có trạng ngữ đi kèm nhưng không làm thay đổi cấu trúc S-V.",
    "translation": "Con gà đã chạy đi mất.",
    "core_vocabulary": [ { "word": "run away", "type": "v.", "meaning": "chạy trốn, chạy đi mất" } ]
  },
  {
    "id": "q42",
    "question": "She sang beautifully.",
    "options": { "A": "S-V", "B": "S-V-O", "C": "S-V-C", "D": "S-V-O-C" },
    "correct_answer": "A",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Giống như câu trước, hành động 'sang' (hát) không trực tiếp tác động lên vật nào, 'beautifully' là trạng từ chỉ thể hiện cách thức diễn ra của động từ nên cấu trúc vẫn là S-V.",
    "explanation_grammar": "Cấu trúc S-V (Chủ ngữ - Động từ). Trạng từ (Adverb) bổ nghĩa không làm thay đổi cấu trúc cốt lõi.",
    "translation": "Cô ấy đã hát rất hay.",
    "core_vocabulary": [ { "word": "beautifully", "type": "adv.", "meaning": "một cách hay, đẹp đẽ" } ]
  },
  {
    "id": "q43",
    "question": "The car looks expensive.",
    "options": { "A": "S-V", "B": "S-V-O", "C": "S-V-C", "D": "S-V-O-C" },
    "correct_answer": "C",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "'looks' (trông có vẻ) là động từ liên kết (linking verb), nó nối chủ ngữ với tính từ bổ ngữ 'expensive'.",
    "explanation_grammar": "Cấu trúc S-V-C: Chủ ngữ + Động từ liên kết (be, seem, look, feel, become...) + Bổ ngữ (C - Complement).",
    "translation": "Chiếc xe hơi trông có vẻ đắt tiền.",
    "core_vocabulary": [ { "word": "expensive", "type": "adj.", "meaning": "đắt tiền" } ]
  },
  {
    "id": "q44",
    "question": "Lucy became a teacher.",
    "options": { "A": "S-V", "B": "S-V-O", "C": "S-V-C", "D": "S-V-O-C" },
    "correct_answer": "C",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Động từ 'became' (trở thành) là linking verb kết nối chủ ngữ với bổ ngữ 'a teacher' nhằm đinh danh cho chủ ngữ Lucy.",
    "explanation_grammar": "Cấu trúc S-V-C: S + Linking Verb (become/get/seem...) + Noun (Bổ ngữ cung cấp thông tin cho chủ ngữ).",
    "translation": "Lucy đã trở thành một giáo viên.",
    "core_vocabulary": [ { "word": "become", "type": "v.", "meaning": "trở nên, trở thành" } ]
  },
  {
    "id": "q45",
    "question": "He wants some tea.",
    "options": { "A": "S-V", "B": "S-V-C", "C": "S-V-O-C", "D": "S-V-O" },
    "correct_answer": "D",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Động từ 'wants' (muốn) là ngoại động từ tác động trực tiếp vào một tân ngữ 'some tea'. Dạng này thuộc cấu trúc S-V-O.",
    "explanation_grammar": "Cấu trúc S-V-O: S + Ngoại động từ (Transitive Verb) + O (Tân ngữ - Đối tượng bị tác động).",
    "translation": "Anh ấy muốn một chút trà.",
    "core_vocabulary": [ { "word": "want", "type": "v.", "meaning": "muốn" } ]
  },
  {
    "id": "q46",
    "question": "I picked up the phone.",
    "options": { "A": "S-V-C", "B": "S-V-O", "C": "S-V-O-C", "D": "S-V" },
    "correct_answer": "B",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Hành động 'picked up' (nhấc lên) tác động trực tiếp vào đối tượng 'the phone' (cái điện thoại) đóng vai trò là tân ngữ (Object). Vì vậy là cấu trúc S-V-O.",
    "explanation_grammar": "Cấu trúc S-V-O. Chú ý ngoại động từ có thể ở dạng cụm động từ (Phrasal verb) đi kèm giới từ.",
    "translation": "Tôi đã nhấc điện thoại lên.",
    "core_vocabulary": [ { "word": "pick up", "type": "v.", "meaning": "nhấc lên, nhặt lên" } ]
  },
  {
    "id": "q47",
    "question": "Ms. Brown bought her son some bread.",
    "options": { "A": "S-V-C", "B": "S-V-O", "C": "S-V-O-O", "D": "S-V" },
    "correct_answer": "C",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Động từ 'bought' (mua) lấy hai tân ngữ: 'her son' (tân ngữ gián tiếp - người nhận) và 'some bread' (tân ngữ trực tiếp - vật được mua). Đây là cấu trúc có 2 tân ngữ S-V-O-O.",
    "explanation_grammar": "Cấu trúc S-V-O-O: S + V (give, send, buy, make...) + Tân ngữ gián tiếp (O1) + Tân ngữ trực tiếp (O2).",
    "translation": "Bà Brown đã mua cho cậu con trai một ít bánh mì.",
    "core_vocabulary": [ { "word": "buy", "type": "v.", "meaning": "mua" } ]
  },
  {
    "id": "q48",
    "question": "You make me happy.",
    "options": { "A": "S-V-C", "B": "S-V-O-C", "C": "S-V", "D": "S-V-O" },
    "correct_answer": "B",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Câu có tân ngữ 'me' và theo sau là tính từ 'happy' mô tả trạng thái cho tân ngữ này (khiến tôi TRỞ NÊN như thế nào). Do đó, 'happy' là Object Complement (C).",
    "explanation_grammar": "Cấu trúc S-V-O-C: S + V (make/find/keep/call...) + O + C (Tính từ/Danh từ bổ trợ ý nghĩa cho tân ngữ).",
    "translation": "Bạn làm tôi thấy vui vẻ.",
    "core_vocabulary": [ { "word": "make", "type": "v.", "meaning": "làm cho, khiến cho" } ]
  },
  {
    "id": "q49",
    "question": "They found the girl honest.",
    "options": { "A": "S-V-C", "B": "S-V-O-C", "C": "S-V", "D": "S-V-O" },
    "correct_answer": "B",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "'the girl' là tân ngữ, 'honest' (trung thực) là tính từ nhận xét cho tân ngữ này đóng vai trò thành Bổ ngữ (C). Đây là dạng S-V-O-C.",
    "explanation_grammar": "Cấu trúc đánh giá S-V-O-C: Chủ ngữ + find/consider.. + Tân ngữ + Tính từ bổ ngữ (Thấy thứ gì đó như thế nào).",
    "translation": "Họ nhận thấy cô gái đó là người trung thực.",
    "core_vocabulary": [ { "word": "honest", "type": "adj.", "meaning": "thực thà, trung thực" } ]
  },
  {
    "id": "q50",
    "question": "Because it rained a lot, we stayed at home.",
    "options": { "A": "S-V-O-C", "B": "S-V-C", "C": "S-V-O", "D": "S-V" },
    "correct_answer": "D",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Mệnh đề chính là 'we stayed at home'. Cụm 'at home' là trạng ngữ chỉ nơi chốn; 'Because...' chỉ là trạng ngữ phụ. Nên đây là cấu trúc cơ bản S-V.",
    "explanation_grammar": "Cấu trúc S-V cơ bản, đi kèm với các cụm/trạng từ ở nhiều vị trí nhưng cốt lõi vẫn chỉ là S và V diễn ra độc lập.",
    "translation": "Bởi vì trời mưa quá lớn, chúng tôi đã ở nhà.",
    "core_vocabulary": [ { "word": "stay", "type": "v.", "meaning": "ở lại" } ]
  },
  {
    "id": "q51",
    "question": "All employees must wear a uniform.",
    "options": { "A": "S-V-C", "B": "S-V", "C": "S-V-O-C", "D": "S-V-O" },
    "correct_answer": "D",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "'must wear' là ngoại động từ sinh ra tác động lên 'a uniform' (đồng phục) tạo thành hệ thống ngoại Tân ngữ (Object). Cấu trúc: S-V-O.",
    "explanation_grammar": "S-V-O: Ngoại động từ bắt buộc phải được gắn kèm tân ngữ để người nghe hiểu đầy đủ ý nghĩa (Mặc cái gì?).",
    "translation": "Tất cả nhân viên phải mặc đồng phục.",
    "core_vocabulary": [ { "word": "wear", "type": "v.", "meaning": "mặc, đội, đeo" } ]
  },
  {
    "id": "q52",
    "question": "The flight to Tokyo was delayed.",
    "options": { "A": "S-V-C", "B": "S-V-O", "C": "S-V-O-C", "D": "S-V" },
    "correct_answer": "D",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "'was delayed' (bị hoãn) là cụm động từ bị động đứng im làm vị ngữ, hoàn toàn không cần thêm tân ngữ. Nên cấu trúc của câu chỉ là S-V dạng bị động.",
    "explanation_grammar": "Các câu chia ở thể bị động đầy đủ (không tính bổ ngữ bởi By Object) đều gói gọn lại trên phương thức Chủ ngữ (Subject) và Động từ dạng bị động (Verb).",
    "translation": "Chuyến bay tới Tokyo đã bị trì hoãn.",
    "core_vocabulary": [ { "word": "delay", "type": "v.", "meaning": "trì hoãn, làm chậm trễ" } ]
  },
  {
    "id": "q53",
    "question": "Mobile phones are very useful.",
    "options": { "A": "S-V-C", "B": "S-V", "C": "S-V-O-C", "D": "S-V-O" },
    "correct_answer": "A",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "'are' là động từ liên kết nối chủ ngữ với Tính từ 'useful' (Làm Complement). Đây là một cấu trúc S-V-C.",
    "explanation_grammar": "S-V-C: Chủ ngữ bao giờ cũng đi kề cận với Tobe và một tính từ giải thích tính chất cho chủ ngữ đó.",
    "translation": "Điện thoại di động rất hữu ích.",
    "core_vocabulary": [ { "word": "useful", "type": "adj.", "meaning": "hữu ích, có ích" } ]
  },
  {
    "id": "q54",
    "question": "We replaced the fax machine.",
    "options": { "A": "S-V-O-C", "B": "S-V", "C": "S-V-C", "D": "S-V-O" },
    "correct_answer": "D",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Hành động 'replaced' tác động trức tiếp lên một tân ngữ đứng sau nó (the fax machine) để chỉ rõ định hướng S-V-O.",
    "explanation_grammar": "Mô hình kinh điển S-V-O dành cho mọi động từ mang tính chất thay đổi một chủ thể khác.",
    "translation": "Chúng tôi đã thay thế máy fax.",
    "core_vocabulary": [ { "word": "replace", "type": "v.", "meaning": "thay thế" } ]
  },
  {
    "id": "q55",
    "question": "The office building is large.",
    "options": { "A": "S-V", "B": "S-V-O", "C": "S-V-O-C", "D": "S-V-C" },
    "correct_answer": "D",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Động từ tobe 'is' đóng vai trò Linking verb dẫn đường đến Complement 'large'. Đây là mẫu câu S-V-C.",
    "explanation_grammar": "Cấu trúc Tobe truyền thống (Subject + Linking verb + Noun/Adjective: C).",
    "translation": "Tòa nhà văn phòng đó thì lớn.",
    "core_vocabulary": [ { "word": "office building", "type": "n.", "meaning": "tòa nhà làm việc, cao ốc" } ]
  }
];

global.questionsData = global.questionsData.concat(newQuestions);

const newCode = 'window.questionsData = ' + JSON.stringify(global.questionsData, null, 2) + ';';
fs.writeFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', newCode);
