const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "id": "q1091",
    "question": "Ms. Arisawa will be out of the office ______ next Monday.",
    "options": {
      "A": "within",
      "B": "until",
      "C": "while",
      "D": "during"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'until' dùng để chỉ một hành động hoặc trạng thái kéo dài cho đến một thời điểm nhất định.",
    "explanation_grammar": "Preposition of Time (Until).",
    "translation": "Bà Arisawa sẽ vắng mặt tại văn phòng cho đến thứ Hai tới.",
    "core_vocabulary": [
      { "word": "out of the office", "type": "adj.phr.", "meaning": "vắng mặt tại văn phòng" },
      { "word": "until", "type": "prep.", "meaning": "cho đến khi" }
    ]
  },
  {
    "id": "q1092",
    "question": "The marketing team is meeting ______ the conference room on the third floor.",
    "options": {
      "A": "at",
      "B": "on",
      "C": "in",
      "D": "to"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'in' dùng để chỉ vị trí bên trong một căn phòng hoặc tòa nhà.",
    "explanation_grammar": "Preposition of Place.",
    "translation": "Nhóm tiếp thị đang họp tại phòng hội nghị trên tầng ba.",
    "core_vocabulary": [
      { "word": "conference room", "type": "n.phr.", "meaning": "phòng hội nghị" }
    ]
  },
  {
    "id": "q1093",
    "question": "______ the heavy rain, the outdoor concert at Benson Park was canceled.",
    "options": {
      "A": "Since",
      "B": "Because",
      "C": "As",
      "D": "Due to"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "'Due to' là một giới từ phức hợp dùng để chỉ nguyên nhân (đứng trước một danh từ/cụm danh từ).",
    "explanation_grammar": "Preposition of Cause (Due to).",
    "translation": "Do trời mưa to, buổi hòa nhạc ngoài trời tại Công viên Benson đã bị hủy bỏ.",
    "core_vocabulary": [
      { "word": "due to", "type": "prep.", "meaning": "do, bởi vì" },
      { "word": "canceled", "type": "adj.", "meaning": "bị hủy bỏ" }
    ]
  },
  {
    "id": "q1094",
    "question": "The new printer from LexoCorp is compatible ______ most operating systems.",
    "options": {
      "A": "with",
      "B": "for",
      "C": "to",
      "D": "about"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Tính từ 'compatible' luôn đi kèm với giới từ 'with' (tương thích với).",
    "explanation_grammar": "Adjective + Preposition.",
    "translation": "Máy in mới của LexoCorp tương thích với hầu hết các hệ điều hành.",
    "core_vocabulary": [
      { "word": "compatible", "type": "adj.", "meaning": "tương thích" },
      { "word": "operating system", "type": "n.phr.", "meaning": "hệ điều hành" }
    ]
  },
  {
    "id": "q1095",
    "question": "Mr. Henderson has been the lead designer ______ the past ten years.",
    "options": {
      "A": "for",
      "B": "since",
      "C": "during",
      "D": "while"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'for' dùng để chỉ một khoảng thời gian (10 năm).",
    "explanation_grammar": "Preposition of Time (Duration).",
    "translation": "Ông Henderson đã là nhà thiết kế chính trong mười năm qua.",
    "core_vocabulary": [
      { "word": "lead designer", "type": "n.phr.", "meaning": "nhà thiết kế chính" }
    ]
  },
  {
    "id": "q1096",
    "question": "Please submit your travel expense reports ______ the end of the week.",
    "options": {
      "A": "to",
      "B": "at",
      "C": "on",
      "D": "by"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'by' dùng để chỉ một thời hạn chót (trước hoặc tại thời điểm đó).",
    "explanation_grammar": "Preposition of Time (Deadline).",
    "translation": "Vui lòng nộp báo cáo chi phí đi lại của bạn trước cuối tuần.",
    "core_vocabulary": [
      { "word": "submit", "type": "v.", "meaning": "nộp" },
      { "word": "expense", "type": "n.", "meaning": "chi phí" }
    ]
  },
  {
    "id": "q1097",
    "question": "Employees at Gable Inc. are eligible for a bonus ______ their performance.",
    "options": {
      "A": "depending on",
      "B": "as for",
      "C": "instead of",
      "D": "in spite of"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "'Depending on' (tùy thuộc vào) là một giới từ phức hợp dùng để chỉ sự phụ thuộc.",
    "explanation_grammar": "Complex Preposition.",
    "translation": "Nhân viên tại Gable Inc. đủ điều kiện nhận tiền thưởng tùy thuộc vào hiệu suất làm việc của họ.",
    "core_vocabulary": [
      { "word": "eligible", "type": "adj.", "meaning": "đủ điều kiện" },
      { "word": "performance", "type": "n.", "meaning": "hiệu suất, thành tích" }
    ]
  },
  {
    "id": "q1098",
    "question": "The technician is currently working ______ the server in the basement.",
    "options": {
      "A": "for",
      "B": "with",
      "C": "on",
      "D": "at"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cụm 'work on something' có nghĩa là đang sửa chữa hoặc thực hiện một việc gì đó.",
    "explanation_grammar": "Verb + Preposition.",
    "translation": "Kỹ thuật viên hiện đang làm việc với máy chủ trong tầng hầm.",
    "core_vocabulary": [
      { "word": "technician", "type": "n.", "meaning": "kỹ thuật viên" },
      { "word": "basement", "type": "n.", "meaning": "tầng hầm" }
    ]
  },
  {
    "id": "q1099",
    "question": "______ receiving the signed contract, we will begin the renovation.",
    "options": {
      "A": "Upon",
      "B": "Throughout",
      "C": "Among",
      "D": "Between"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'Upon' đứng trước một danh động từ (V-ing) có nghĩa là 'ngay sau khi'.",
    "explanation_grammar": "Preposition 'Upon' + V-ing.",
    "translation": "Ngay sau khi nhận được hợp đồng đã ký, chúng tôi sẽ bắt đầu công việc cải tạo.",
    "core_vocabulary": [
      { "word": "upon", "type": "prep.", "meaning": "ngay sau khi" },
      { "word": "renovation", "type": "n.", "meaning": "sự cải tạo, tu sửa" }
    ]
  },
  {
    "id": "q1100",
    "question": "The shuttle bus to the airport departs ______ the main entrance every thirty minutes.",
    "options": {
      "A": "from",
      "B": "to",
      "C": "at",
      "D": "by"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Động từ 'depart' (khởi hành) đi kèm với giới từ 'from' để chỉ điểm xuất phát.",
    "explanation_grammar": "Verb + Preposition.",
    "translation": "Xe đưa đón đến sân bay khởi hành từ cổng chính cứ sau mỗi ba mươi phút.",
    "core_vocabulary": [
      { "word": "shuttle bus", "type": "n.phr.", "meaning": "xe buýt đưa đón" },
      { "word": "depart", "type": "v.", "meaning": "khởi hành" }
    ]
  },
  {
    "id": "q1101",
    "question": "All visitors must sign in at the front desk ______ entering the building.",
    "options": {
      "A": "during",
      "B": "until",
      "C": "before",
      "D": "since"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'before' đứng trước một danh động từ để chỉ trình tự thời gian (trước khi làm gì).",
    "explanation_grammar": "Preposition of Time (Before).",
    "translation": "Tất cả khách tham quan phải ký tên tại quầy lễ tân trước khi vào tòa nhà.",
    "core_vocabulary": [
      { "word": "sign in", "type": "v.phr.", "meaning": "ký tên, đăng ký vào" },
      { "word": "front desk", "type": "n.phr.", "meaning": "quầy lễ tân" }
    ]
  },
  {
    "id": "q1102",
    "question": "Mr. Kim was promoted to senior manager ______ his exceptional leadership skills.",
    "options": {
      "A": "because of",
      "B": "even though",
      "C": "in case of",
      "D": "as long as"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "'Because of' là một giới từ phức hợp dùng để chỉ nguyên nhân.",
    "explanation_grammar": "Preposition of Cause (Because of).",
    "translation": "Ông Kim đã được thăng chức lên quản lý cấp cao nhờ vào kỹ năng lãnh đạo xuất sắc của mình.",
    "core_vocabulary": [
      { "word": "exceptional", "type": "adj.", "meaning": "xuất sắc, ngoại lệ" },
      { "word": "leadership", "type": "n.", "meaning": "khả năng lãnh đạo" }
    ]
  },
  {
    "id": "q1103",
    "question": "The workshop on digital security will be held ______ July 15.",
    "options": {
      "A": "on",
      "B": "for",
      "C": "at",
      "D": "in"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'on' dùng để chỉ ngày cụ thể trong tháng.",
    "explanation_grammar": "Preposition of Time (Days/Dates).",
    "translation": "Buổi hội thảo về bảo mật kỹ thuật số sẽ được tổ chức vào ngày 15 tháng 7.",
    "core_vocabulary": [
      { "word": "digital security", "type": "n.phr.", "meaning": "bảo mật kỹ thuật số" }
    ]
  },
  {
    "id": "q1104",
    "question": "NetStar Solutions provides technical support ______ all of its clients.",
    "options": {
      "A": "for",
      "B": "at",
      "C": "to",
      "D": "with"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cụm 'provide something to someone' (cung cấp cái gì cho ai) là cách dùng phổ biến, nhấn mạnh hướng đến đối tượng.",
    "explanation_grammar": "Verb + Object + Preposition.",
    "translation": "NetStar Solutions cung cấp hỗ trợ kỹ thuật cho tất cả các khách hàng của mình.",
    "core_vocabulary": [
      { "word": "technical support", "type": "n.phr.", "meaning": "hỗ trợ kỹ thuật" }
    ]
  },
  {
    "id": "q1105",
    "question": "We are looking for a candidate ______ at least five years of experience in sales.",
    "options": {
      "A": "for",
      "B": "about",
      "C": "with",
      "D": "by"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'with' dùng để chỉ đặc điểm hoặc sở hữu (có ít nhất 5 năm kinh nghiệm).",
    "explanation_grammar": "Preposition 'with' (Characteristics).",
    "translation": "Chúng tôi đang tìm kiếm một ứng viên có ít nhất năm năm kinh nghiệm trong lĩnh vực bán hàng.",
    "core_vocabulary": [
      { "word": "sales", "type": "n.", "meaning": "bán hàng" }
    ]
  },
  {
    "id": "q1106",
    "question": "The annual report is available ______ the company's internal website.",
    "options": {
      "A": "in",
      "B": "to",
      "C": "on",
      "D": "at"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'on' dùng cho các bề mặt hoặc phương tiện truyền thông như trang web.",
    "explanation_grammar": "Preposition of Place (Media/Surfaces).",
    "translation": "Báo cáo thường niên có sẵn trên trang web nội bộ của công ty.",
    "core_vocabulary": [
      { "word": "internal", "type": "adj.", "meaning": "nội bộ" }
    ]
  },
  {
    "id": "q1107",
    "question": "______ the merger, many employees were worried about their job security.",
    "options": {
      "A": "Following",
      "B": "Between",
      "C": "Across",
      "D": "Into"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "'Following' đóng vai trò như một giới từ có nghĩa là 'sau khi'.",
    "explanation_grammar": "Preposition 'Following'.",
    "translation": "Sau vụ sáp nhập, nhiều nhân viên đã lo lắng về sự ổn định công việc của họ.",
    "core_vocabulary": [
      { "word": "merger", "type": "n.", "meaning": "sáp nhập" },
      { "word": "job security", "type": "n.phr.", "meaning": "sự ổn định công việc" }
    ]
  },
  {
    "id": "q1108",
    "question": "The price of the tour includes breakfast, but ______ lunch or dinner.",
    "options": {
      "A": "none",
      "B": "not",
      "C": "neither",
      "D": "without"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Dùng 'not' để phủ định thành phần trong cấu trúc liệt kê.",
    "explanation_grammar": "Negation in phrases.",
    "translation": "Giá của chuyến tham quan bao gồm bữa sáng, nhưng không bao gồm bữa trưa hoặc bữa tối.",
    "core_vocabulary": [
      { "word": "include", "type": "v.", "meaning": "bao gồm" }
    ]
  },
  {
    "id": "q1109",
    "question": "Mr. Sato will be attending the conference in London ______ Mr. Miller.",
    "options": {
      "A": "except for",
      "B": "regardless of",
      "C": "instead of",
      "D": "in addition to"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Dựa vào ngữ cảnh, 'instead of' (thay vì/thay cho) là lựa chọn hợp lý nhất.",
    "explanation_grammar": "Compound Preposition.",
    "translation": "Ông Sato sẽ tham dự hội nghị tại London thay cho ông Miller.",
    "core_vocabulary": [
      { "word": "instead of", "type": "prep.", "meaning": "thay vì" }
    ]
  },
  {
    "id": "q1110",
    "question": "The store will remain closed ______ further notice.",
    "options": {
      "A": "since",
      "B": "while",
      "C": "during",
      "D": "until"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cụm 'until further notice' (cho đến khi có thông báo mới) là một cách kết hợp cố định.",
    "explanation_grammar": "Fixed Prepositional Phrase.",
    "translation": "Cửa hàng sẽ tiếp tục đóng cửa cho đến khi có thông báo mới.",
    "core_vocabulary": [
      { "word": "further notice", "type": "n.phr.", "meaning": "thông báo thêm/mới" }
    ]
  },
  {
    "id": "q1111",
    "question": "Please keep your receipts ______ you need to request a refund.",
    "options": {
      "A": "in case",
      "B": "unless",
      "C": "although",
      "D": "so that"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "'In case' (phòng khi) dẫn đầu một mệnh đề trạng ngữ chỉ mục đích/phòng ngừa.",
    "explanation_grammar": "Conjunction (loosely grouped under prepositions in some contexts).",
    "translation": "Vui lòng giữ lại biên lai phòng khi bạn cần yêu cầu hoàn tiền.",
    "core_vocabulary": [
      { "word": "receipt", "type": "n.", "meaning": "biên lai" },
      { "word": "refund", "type": "n.", "meaning": "hoàn tiền" }
    ]
  },
  {
    "id": "q1112",
    "question": "The office is located ______ the post office and the central bank.",
    "options": {
      "A": "beside",
      "B": "along",
      "C": "between",
      "D": "among"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'between' đi kèm với cấu trúc 'A and B'.",
    "explanation_grammar": "Preposition of Place (Between).",
    "translation": "Văn phòng nằm ở giữa bưu điện và ngân hàng trung ương.",
    "core_vocabulary": [
      { "word": "post office", "type": "n.phr.", "meaning": "bưu điện" }
    ]
  },
  {
    "id": "q1113",
    "question": "Employees are encouraged to provide feedback ______ the new policy.",
    "options": {
      "A": "through",
      "B": "around",
      "C": "regarding",
      "D": "across"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "'Regarding' đóng vai trò là một giới từ có nghĩa là 'về/liên quan đến'.",
    "explanation_grammar": "Preposition 'Regarding'.",
    "translation": "Nhân viên được khuyến khích cung cấp phản hồi liên quan đến chính sách mới.",
    "core_vocabulary": [
      { "word": "regarding", "type": "prep.", "meaning": "về, liên quan đến" },
      { "word": "policy", "type": "n.", "meaning": "chính sách" }
    ]
  },
  {
    "id": "q1114",
    "question": "______ her busy schedule, Ms. Rodriguez managed to finish the report on time.",
    "options": {
      "A": "Despite",
      "B": "Even",
      "C": "However",
      "D": "Although"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'Despite' (mặc dù) đứng trước một cụm danh từ.",
    "explanation_grammar": "Preposition of Concession.",
    "translation": "Bất chấp lịch trình bận rộn của mình, bà Rodriguez đã cố gắng hoàn thành báo cáo đúng hạn.",
    "core_vocabulary": [
      { "word": "despite", "type": "prep.", "meaning": "mặc dù" },
      { "word": "schedule", "type": "n.", "meaning": "lịch trình" }
    ]
  },
  {
    "id": "q1115",
    "question": "The presentation will start ______ 9:00 A.M. sharp.",
    "options": {
      "A": "at",
      "B": "on",
      "C": "by",
      "D": "in"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'at' dùng để chỉ một mốc thời gian cụ thể.",
    "explanation_grammar": "Preposition of Time (Point).",
    "translation": "Bài thuyết trình sẽ bắt đầu lúc đúng 9 giờ sáng.",
    "core_vocabulary": [
      { "word": "sharp", "type": "adv.", "meaning": "đúng (giờ giấc)" }
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
