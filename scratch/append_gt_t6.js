const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "id": "q1141",
    "question": "The annual leadership conference will be held ______ the newly renovated Grand Horizon Center.",
    "options": {
      "A": "over",
      "B": "to",
      "C": "into",
      "D": "at"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'at' dùng để chỉ một địa điểm cụ thể nơi sự kiện diễn ra.",
    "explanation_grammar": "Preposition of Place (At).",
    "translation": "Hội nghị lãnh đạo hàng năm sẽ được tổ chức tại Trung tâm Grand Horizon mới được cải tạo.",
    "core_vocabulary": [
      { "word": "renovated", "type": "adj.", "meaning": "được cải tạo, làm mới" },
      { "word": "leadership", "type": "n.", "meaning": "khả năng lãnh đạo" }
    ]
  },
  {
    "id": "q1142",
    "question": "______ a scheduling conflict, Ms. Lin had to cancel her afternoon appointments with the clients.",
    "options": {
      "A": "Due to",
      "B": "Because",
      "C": "As",
      "D": "Since"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ phức hợp 'Due to' đứng trước cụm danh từ để chỉ nguyên nhân.",
    "explanation_grammar": "Preposition of Cause (Due to).",
    "translation": "Do sự trùng lặp về lịch trình, bà Lin đã phải hủy bỏ các cuộc hẹn buổi chiều với khách hàng.",
    "core_vocabulary": [
      { "word": "conflict", "type": "n.", "meaning": "sự trùng lặp, xung đột" },
      { "word": "appointment", "type": "n.", "meaning": "cuộc hẹn" }
    ]
  },
  {
    "id": "q1143",
    "question": "All employees must submit their finalized vacation requests ______ the end of the month.",
    "options": {
      "A": "until",
      "B": "since",
      "C": "during",
      "D": "by"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'by' để chỉ thời hạn chót (trước hoặc tại thời điểm đó).",
    "explanation_grammar": "Preposition of Time (Deadline).",
    "translation": "Tất cả nhân viên phải nộp các yêu cầu nghỉ phép đã hoàn tất trước cuối tháng.",
    "core_vocabulary": [
      { "word": "submit", "type": "v.", "meaning": "nộp, gửi" },
      { "word": "vacation", "type": "n.", "meaning": "kỳ nghỉ" }
    ]
  },
  {
    "id": "q1144",
    "question": "The latest smartphone model from TechNova comes ______ a complimentary wireless charger.",
    "options": {
      "A": "with",
      "B": "for",
      "C": "by",
      "D": "about"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'with' chỉ sự đi kèm cùng với vật gì đó.",
    "explanation_grammar": "Preposition 'with'.",
    "translation": "Mẫu điện thoại thông minh mới nhất của TechNova đi kèm với một bộ sạc không dây miễn phí.",
    "core_vocabulary": [
      { "word": "complimentary", "type": "adj.", "meaning": "miễn phí, mời" },
      { "word": "wireless charger", "type": "n.phr.", "meaning": "sạc không dây" }
    ]
  },
  {
    "id": "q1145",
    "question": "Please place all outgoing mail ______ the blue basket on the receptionist's desk.",
    "options": {
      "A": "in",
      "B": "at",
      "C": "to",
      "D": "with"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'in' chỉ vị trí bên trong (trong giỏ).",
    "explanation_grammar": "Preposition of Place.",
    "translation": "Vui lòng đặt tất cả các thư gửi đi vào giỏ màu xanh trên bàn của lễ tân.",
    "core_vocabulary": [
      { "word": "outgoing mail", "type": "n.phr.", "meaning": "thư gửi đi" }
    ]
  },
  {
    "id": "q1146",
    "question": "Mr. Dubois has been the lead architect at BuildCorp ______ the company was founded in 2015.",
    "options": {
      "A": "from",
      "B": "for",
      "C": "in",
      "D": "since"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'since' chỉ mốc thời gian bắt đầu một sự việc kéo dài đến nay.",
    "explanation_grammar": "Preposition of Time (Since).",
    "translation": "Ông Dubois đã là kiến trúc sư trưởng tại BuildCorp kể từ khi công ty được thành lập vào năm 2015.",
    "core_vocabulary": [
      { "word": "architect", "type": "n.", "meaning": "kiến trúc sư" },
      { "word": "founded", "type": "v.pp", "meaning": "được thành lập" }
    ]
  },
  {
    "id": "q1147",
    "question": "______ the heavy traffic on the highway, Mr. Garcia arrived at the board meeting on time.",
    "options": {
      "A": "Despite",
      "B": "Even if",
      "C": "However",
      "D": "Although"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'Despite' (mặc dù) đứng trước cụm danh từ.",
    "explanation_grammar": "Preposition of Concession.",
    "translation": "Bất chấp tình hình giao thông đông đúc trên đường cao tốc, ông Garcia vẫn đến buổi họp hội đồng quản trị đúng giờ.",
    "core_vocabulary": [
      { "word": "on time", "type": "adj.phr.", "meaning": "đúng giờ" },
      { "word": "heavy traffic", "type": "n.phr.", "meaning": "giao thông đông đúc (tắc đường)" }
    ]
  },
  {
    "id": "q1148",
    "question": "A new organic coffee shop, Bean & Leaf, just opened ______ our main office building.",
    "options": {
      "A": "through",
      "B": "near",
      "C": "along",
      "D": "between"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'near' chỉ vị trí gần.",
    "explanation_grammar": "Preposition of Place (Near).",
    "translation": "Một quán cà phê hữu cơ mới, Bean & Leaf, vừa mới mở gần tòa nhà văn phòng chính của chúng tôi.",
    "core_vocabulary": [
      { "word": "organic", "type": "adj.", "meaning": "hữu cơ" }
    ]
  },
  {
    "id": "q1149",
    "question": "Please remember to turn off your mobile phones ______ the training presentation.",
    "options": {
      "A": "for",
      "B": "during",
      "C": "while",
      "D": "as"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'during' chỉ một khoảng thời gian diễn ra sự kiện/hành động khác.",
    "explanation_grammar": "Preposition of Time (During).",
    "translation": "Vui lòng nhớ tắt điện thoại di động của bạn trong suốt bài thuyết trình đào tạo.",
    "core_vocabulary": [
      { "word": "presentation", "type": "n.", "meaning": "bài thuyết trình" }
    ]
  },
  {
    "id": "q1150",
    "question": "The official memo regarding the updated dress code was sent ______ all department heads yesterday.",
    "options": {
      "A": "on",
      "B": "for",
      "C": "at",
      "D": "to"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cấu trúc 'send something to someone' (gửi cái gì cho ai).",
    "explanation_grammar": "Verb + Object + Preposition.",
    "translation": "Bản ghi nhớ chính thức về quy định trang phục đã cập nhật đã được gửi đến tất cả các trưởng bộ phận vào ngày hôm qua.",
    "core_vocabulary": [
      { "word": "dress code", "type": "n.phr.", "meaning": "quy định trang phục" }
    ]
  },
  {
    "id": "q1151",
    "question": "All departments met their quarterly sales targets ______ the retail division.",
    "options": {
      "A": "instead",
      "B": "except",
      "C": "unless",
      "D": "without"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'except' (ngoại trừ) chỉ sự loại trừ khỏi một nhóm.",
    "explanation_grammar": "Preposition 'Except'.",
    "translation": "Tất cả các bộ phận đều đạt được mục tiêu doanh số bán hàng hàng quý ngoại trừ bộ phận bán lẻ.",
    "core_vocabulary": [
      { "word": "retail", "type": "adj./n.", "meaning": "bán lẻ" },
      { "word": "target", "type": "n.", "meaning": "mục tiêu" }
    ]
  },
  {
    "id": "q1152",
    "question": "The project team is currently working ______ the strict supervision of the senior manager, Ms. Patel.",
    "options": {
      "A": "behind",
      "B": "under",
      "C": "below",
      "D": "among"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cụm 'under the supervision of' (dưới sự giám sát của) là cách dùng cố định.",
    "explanation_grammar": "Prepositional Phrase.",
    "translation": "Nhóm dự án hiện đang làm việc dưới sự giám sát chặt chẽ của quản lý cấp cao, bà Patel.",
    "core_vocabulary": [
      { "word": "supervision", "type": "n.", "meaning": "sự giám sát" }
    ]
  },
  {
    "id": "q1153",
    "question": "You can reach the customer service department at NexaMart ______ phone or email.",
    "options": {
      "A": "in",
      "B": "for",
      "C": "by",
      "D": "with"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'by' chỉ phương tiện/cách thức liên lạc.",
    "explanation_grammar": "Preposition of Means.",
    "translation": "Bạn có thể liên hệ với bộ phận dịch vụ khách hàng tại NexaMart qua điện thoại hoặc email.",
    "core_vocabulary": [
      { "word": "reach", "type": "v.", "meaning": "liên hệ, tiếp cận" }
    ]
  },
  {
    "id": "q1154",
    "question": "The construction of the new logistics warehouse in Da Nang will be completed ______ six months.",
    "options": {
      "A": "for",
      "B": "on",
      "C": "in",
      "D": "at"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'in' + khoảng thời gian dùng để chỉ một việc sẽ hoàn thành sau bao nhiêu lâu (trong tương lai).",
    "explanation_grammar": "Preposition of Time (In).",
    "translation": "Việc xây dựng kho hậu cần mới tại Đà Nẵng sẽ được hoàn thành trong sáu tháng nữa.",
    "core_vocabulary": [
      { "word": "warehouse", "type": "n.", "meaning": "kho hàng" },
      { "word": "logistics", "type": "n.", "meaning": "hậu cần" }
    ]
  },
  {
    "id": "q1155",
    "question": "If you have any questions ______ the new accounting software, please contact the IT helpdesk.",
    "options": {
      "A": "about",
      "B": "along",
      "C": "across",
      "D": "into"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'about' thường đi sau 'question' để chỉ chủ đề thắc mắc.",
    "explanation_grammar": "Preposition of Topic/About.",
    "translation": "Nếu bạn có bất kỳ câu hỏi nào về phần mềm kế toán mới, vui lòng liên hệ với bộ phận hỗ trợ CNTT.",
    "core_vocabulary": [
      { "word": "accounting", "type": "n.", "meaning": "kế toán" }
    ]
  },
  {
    "id": "q1156",
    "question": "The CEO of Zenith Corp will be traveling ______ Tokyo next week for a global business summit.",
    "options": {
      "A": "to",
      "B": "in",
      "C": "from",
      "D": "at"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'to' chỉ phương hướng đến một địa điểm.",
    "explanation_grammar": "Preposition of Direction.",
    "translation": "CEO của Zenith Corp sẽ tới Tokyo vào tuần tới để tham dự hội nghị thượng đỉnh kinh doanh toàn cầu.",
    "core_vocabulary": [
      { "word": "summit", "type": "n.", "meaning": "hội nghị thượng đỉnh" }
    ]
  },
  {
    "id": "q1157",
    "question": "Mr. Thompson will attend the marketing seminar in Berlin ______ the regional director.",
    "options": {
      "A": "because of",
      "B": "in addition to",
      "C": "instead of",
      "D": "next to"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'instead of' (thay cho/thay vì) là lựa chọn hợp lý nhất theo ngữ cảnh công việc.",
    "explanation_grammar": "Compound Preposition.",
    "translation": "Ông Thompson sẽ tham dự hội thảo tiếp thị ở Berlin thay mặt cho giám đốc khu vực.",
    "core_vocabulary": [
      { "word": "regional director", "type": "n.phr.", "meaning": "giám đốc khu vực" }
    ]
  },
  {
    "id": "q1158",
    "question": "The contract negotiation ______ Apex Industries and Horizon Group lasted for three hours.",
    "options": {
      "A": "alongside",
      "B": "among",
      "C": "against",
      "D": "between"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'between' dùng để nhắm tới hai đối tượng cụ thể (Apex Industries và Horizon Group).",
    "explanation_grammar": "Preposition 'Between'.",
    "translation": "Cuộc đàm phán hợp đồng giữa Apex Industries và Tập đoàn Horizon đã kéo dài trong ba giờ.",
    "core_vocabulary": [
      { "word": "negotiation", "type": "n.", "meaning": "cuộc đàm phán" }
    ]
  },
  {
    "id": "q1159",
    "question": "The company's outdoor team-building event was postponed ______ the sudden thunderstorm.",
    "options": {
      "A": "because of",
      "B": "now that",
      "C": "even though",
      "D": "in spite of"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ phức hợp 'because of' đứng trước cụm danh từ chỉ lý do.",
    "explanation_grammar": "Preposition of Cause.",
    "translation": "Sự kiện xây dựng đội ngũ ngoài trời của công ty đã bị trì hoãn vì cơn dông đột ngột.",
    "core_vocabulary": [
      { "word": "postponed", "type": "adj./v.pp", "meaning": "bị trì hoãn" },
      { "word": "thunderstorm", "type": "n.", "meaning": "cơn dông (có kèm sấm sét)" }
    ]
  },
  {
    "id": "q1160",
    "question": "______ the terms of the agreement, both parties must approve any schedule changes in writing.",
    "options": {
      "A": "As well as",
      "B": "Prior to",
      "C": "According to",
      "D": "In front of"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'According to' (theo như) đứng đầu câu để trích dẫn nguồn thông tin/quy định.",
    "explanation_grammar": "Preposition 'According to'.",
    "translation": "Theo các điều khoản của thỏa thuận, cả hai bên phải phê duyệt mọi thay đổi lịch trình bằng văn bản.",
    "core_vocabulary": [
      { "word": "approve", "type": "v.", "meaning": "phê duyệt" },
      { "word": "in writing", "type": "adv.phr.", "meaning": "bằng văn bản" }
    ]
  },
  {
    "id": "q1161",
    "question": "Please ensure all confidential files are saved securely ______ shutting down your computer for the day.",
    "options": {
      "A": "since",
      "B": "during",
      "C": "until",
      "D": "before"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'before' chỉ trình tự trước một hành động khác.",
    "explanation_grammar": "Preposition of Time (Before).",
    "translation": "Vui lòng đảm bảo tất cả các tệp bảo mật được lưu an toàn trước khi tắt máy tính của bạn trong ngày.",
    "core_vocabulary": [
      { "word": "confidential", "type": "adj.", "meaning": "bí mật, bảo mật" },
      { "word": "securely", "type": "adv.", "meaning": "một cách an toàn" }
    ]
  },
  {
    "id": "q1162",
    "question": "Ms. Nguyen gave a very detailed presentation ______ the upcoming international expansion strategy.",
    "options": {
      "A": "to",
      "B": "in",
      "C": "on",
      "D": "at"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'on' để chỉ chủ đề (về cái gì).",
    "explanation_grammar": "Preposition of Topic/On.",
    "translation": "Bà Nguyễn đã trình bày một bài thuyết trình rất chi tiết về chiến lược mở rộng quốc tế sắp tới.",
    "core_vocabulary": [
      { "word": "expansion", "type": "n.", "meaning": "sự mở rộng" },
      { "word": "strategy", "type": "n.", "meaning": "chiến lược" }
    ]
  },
  {
    "id": "q1163",
    "question": "There are automatic hand sanitizer stations located ______ the entire manufacturing facility for your safety.",
    "options": {
      "A": "into",
      "B": "throughout",
      "C": "over",
      "D": "between"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'throughout' chỉ sự bao quát toàn bộ một không gian.",
    "explanation_grammar": "Preposition of Place (Throughout).",
    "translation": "Có các trạm rửa tay sát khuẩn tự động nằm khắp cơ sở sản xuất để đảm bảo an toàn cho bạn.",
    "core_vocabulary": [
      { "word": "hand sanitizer", "type": "n.phr.", "meaning": "nước rửa tay sát khuẩn" },
      { "word": "manufacturing facility", "type": "n.phr.", "meaning": "cơ sở sản xuất" }
    ]
  },
  {
    "id": "q1164",
    "question": "The manufacturer's warranty on the Zephyr laptop is valid ______ three consecutive years.",
    "options": {
      "A": "since",
      "B": "during",
      "C": "for",
      "D": "in"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'for' dùng để chỉ khoảng thời gian hiệu lực.",
    "explanation_grammar": "Preposition of Time (Duration).",
    "translation": "Chế độ bảo hành của nhà sản xuất đối với máy tính xách tay Zephyr có giá trị trong ba năm liên tiếp.",
    "core_vocabulary": [
      { "word": "warranty", "type": "n.", "meaning": "bảo hành" },
      { "word": "consecutive", "type": "adj.", "meaning": "liên tiếp" }
    ]
  },
  {
    "id": "q1165",
    "question": "______ a highly competitive salary, the Orion Group offers excellent health and dental benefits.",
    "options": {
      "A": "In addition to",
      "B": "Regardless of",
      "C": "Instead of",
      "D": "Except for"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ phức hợp 'In addition to' (ngoài ra/thêm vào đó) chỉ sự bổ sung.",
    "explanation_grammar": "Preposition 'In addition to'.",
    "translation": "Ngoài mức lương cạnh tranh cao, Tập đoàn Orion còn cung cấp các quyền lợi về y tế và nha khoa tuyệt vời.",
    "core_vocabulary": [
      { "word": "competitive", "type": "adj.", "meaning": "cạnh tranh" },
      { "word": "benefit", "type": "n.", "meaning": "quyền lợi, lợi ích" }
    ]
  }
];

const filePath = path.join(__dirname, '../data/questions.js');
let content = fs.readFileSync(filePath, 'utf8');

const lastBracketIndex = content.lastIndexOf('];');
if (lastBracketIndex !== -1) {
    const questionsString = ',\n' + newQuestions.map(q => JSON.stringify(q, null, 2)).join(',\n');
    content = content.substring(0, lastBracketIndex) + questionsString + '\n' + content.substring(lastBracketIndex);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully added ${newQuestions.length} questions to data/questions.js`);
} else {
    console.error('Could not find the end of the questions array in data/questions.js');
}
