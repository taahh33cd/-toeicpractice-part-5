const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "id": "q1116",
    "question": "The new espresso machine from Kaffea is guaranteed ______ two years.",
    "options": {
      "A": "since",
      "B": "during",
      "C": "in",
      "D": "for"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'for' dùng để chỉ một khoảng thời gian (2 năm).",
    "explanation_grammar": "Preposition of Time (Duration).",
    "translation": "Máy pha cà phê espresso mới của Kaffea được bảo hành trong hai năm.",
    "core_vocabulary": [
      { "word": "guaranteed", "type": "adj.", "meaning": "được bảo hành, đảm bảo" }
    ]
  },
  {
    "id": "q1117",
    "question": "Ms. Jenkins will present the quarterly financial report ______ the board members.",
    "options": {
      "A": "with",
      "B": "about",
      "C": "to",
      "D": "at"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cấu trúc 'present something to someone' (trình bày cái gì cho ai).",
    "explanation_grammar": "Verb + Object + Preposition.",
    "translation": "Bà Jenkins sẽ trình bày báo cáo tài chính hàng quý cho các thành viên hội đồng quản trị.",
    "core_vocabulary": [
      { "word": "quarterly", "type": "adj.", "meaning": "hàng quý" },
      { "word": "board member", "type": "n.phr.", "meaning": "thành viên hội đồng quản trị" }
    ]
  },
  {
    "id": "q1118",
    "question": "______ the annual charity gala, attendees can participate in a silent auction.",
    "options": {
      "A": "Among",
      "B": "During",
      "C": "Between",
      "D": "While"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'During' dùng để chỉ một khoảng thời gian diễn ra sự kiện.",
    "explanation_grammar": "Preposition of Time (During).",
    "translation": "Trong bữa tiệc từ thiện hàng năm, những người tham dự có thể tham gia vào một cuộc đấu giá im lặng.",
    "core_vocabulary": [
      { "word": "charity gala", "type": "n.phr.", "meaning": "bữa tiệc từ thiện" },
      { "word": "silent auction", "type": "n.phr.", "meaning": "đấu giá im lặng" }
    ]
  },
  {
    "id": "q1119",
    "question": "The human resources department is located ______ the second floor of the Nexus Building.",
    "options": {
      "A": "at",
      "B": "in",
      "C": "on",
      "D": "to"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'on' dùng để chỉ vị trí trên một tầng của tòa nhà.",
    "explanation_grammar": "Preposition of Place (Floors).",
    "translation": "Phòng nhân sự nằm ở tầng hai của Tòa nhà Nexus.",
    "core_vocabulary": [
      { "word": "located", "type": "adj.", "meaning": "nằm ở, tọa lạc" }
    ]
  },
  {
    "id": "q1120",
    "question": "The outdoor seating area at Bella's Cafe is closed ______ the freezing temperatures.",
    "options": {
      "A": "because",
      "B": "since",
      "C": "due to",
      "D": "as"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ phức hợp 'due to' đứng trước cụm danh từ để chỉ nguyên nhân.",
    "explanation_grammar": "Preposition of Cause (Due to).",
    "translation": "Khu vực chỗ ngồi ngoài trời tại Bella's Cafe bị đóng cửa do nhiệt độ đóng băng.",
    "core_vocabulary": [
      { "word": "freezing", "type": "adj.", "meaning": "đóng băng, rất lạnh" },
      { "word": "temperature", "type": "n.", "meaning": "nhiệt độ" }
    ]
  },
  {
    "id": "q1121",
    "question": "All software update requests must be submitted to the IT desk ______ Friday noon.",
    "options": {
      "A": "by",
      "B": "until",
      "C": "for",
      "D": "within"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'by' để chỉ thời hạn chót (deadline).",
    "explanation_grammar": "Preposition of Time (By).",
    "translation": "Tất cả các yêu cầu cập nhật phần mềm phải được nộp cho bàn CNTT trước trưa thứ Sáu.",
    "core_vocabulary": [
      { "word": "noon", "type": "n.", "meaning": "buổi trưa" }
    ]
  },
  {
    "id": "q1122",
    "question": "A new branch of the Apex Bank recently opened ______ the central subway station.",
    "options": {
      "A": "near",
      "B": "along",
      "C": "onto",
      "D": "through"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'near' chỉ vị trí gần một địa điểm.",
    "explanation_grammar": "Preposition of Place (Near).",
    "translation": "Một chi nhánh mới của Ngân hàng Apex vừa mới mở gần ga tàu điện ngầm trung tâm.",
    "core_vocabulary": [
      { "word": "branch", "type": "n.", "meaning": "chi nhánh" }
    ]
  },
  {
    "id": "q1123",
    "question": "______ a limited advertising budget, the Orion smartphone sold exceptionally well.",
    "options": {
      "A": "Despite",
      "B": "Although",
      "C": "Even",
      "D": "However"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'Despite' (mặc dù) đứng trước cụm danh từ.",
    "explanation_grammar": "Preposition of Concession.",
    "translation": "Bất chấp ngân sách quảng cáo hạn hẹp, điện thoại thông minh Orion vẫn bán chạy một cách đặc biệt.",
    "core_vocabulary": [
      { "word": "limited", "type": "adj.", "meaning": "hạn chế" },
      { "word": "exceptionally", "type": "adv.", "meaning": "một cách đặc biệt" }
    ]
  },
  {
    "id": "q1124",
    "question": "The fitness center membership at CoreGym costs $40 a month, not ______ the initiation fee.",
    "options": {
      "A": "adding",
      "B": "within",
      "C": "including",
      "D": "excepting"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "'Including' được dùng như giới từ nghĩa là 'bao gồm'.",
    "explanation_grammar": "Preposition 'including'.",
    "translation": "Phí thành viên trung tâm thể dục tại CoreGym có giá 40 đô la một tháng, chưa bao gồm phí gia nhập.",
    "core_vocabulary": [
      { "word": "initiation fee", "type": "n.phr.", "meaning": "phí gia nhập" }
    ]
  },
  {
    "id": "q1125",
    "question": "Mr. Tanaka has been the director of public relations ______ 2018.",
    "options": {
      "A": "since",
      "B": "for",
      "C": "from",
      "D": "in"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'since' dùng để chỉ một mốc thời gian bắt đầu hành động kéo dài đến hiện tại.",
    "explanation_grammar": "Preposition of Time (Since).",
    "translation": "Ông Tanaka đã là giám đốc quan hệ công chúng từ năm 2018.",
    "core_vocabulary": [
      { "word": "public relations", "type": "n.phr.", "meaning": "quan hệ công chúng" }
    ]
  },
  {
    "id": "q1126",
    "question": "The design team operates ______ the supervision of the creative director, Ms. Lewis.",
    "options": {
      "A": "below",
      "B": "behind",
      "C": "under",
      "D": "beneath"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cụm 'under the supervision of' (dưới sự giám sát của) là cấu trúc cố định.",
    "explanation_grammar": "Prepositional Phrase.",
    "translation": "Nhóm thiết kế làm việc dưới sự giám sát của giám đốc sáng tạo, bà Lewis.",
    "core_vocabulary": [
      { "word": "supervision", "type": "n.", "meaning": "sự giám sát" },
      { "word": "creative", "type": "adj.", "meaning": "sáng tạo" }
    ]
  },
  {
    "id": "q1127",
    "question": "The proposal from Vertex Solutions was the most cost-effective ______ the three bids we received.",
    "options": {
      "A": "between",
      "B": "inside",
      "C": "among",
      "D": "around"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'among' dùng cho nhóm từ ba người/vật trở lên.",
    "explanation_grammar": "Preposition 'Among'.",
    "translation": "Đề xuất từ Vertex Solutions là đề xuất hiệu quả về chi phí nhất trong số ba gói thầu chúng tôi nhận được.",
    "core_vocabulary": [
      { "word": "bid", "type": "n.", "meaning": "gói thầu, giá thầu" },
      { "word": "cost-effective", "type": "adj.", "meaning": "hiệu quả về chi phí" }
    ]
  },
  {
    "id": "q1128",
    "question": "Mr. Patel will lead the orientation session for new hires ______ Ms. Garcia, who is on leave.",
    "options": {
      "A": "in addition to",
      "B": "next to",
      "C": "because of",
      "D": "instead of"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Dựa trên ngữ cảnh 'who is on leave' (người đang nghỉ phép), chọn 'instead of' (thay cho).",
    "explanation_grammar": "Compound Preposition.",
    "translation": "Ông Patel sẽ dẫn dắt buổi định hướng cho nhân viên mới thay cho bà Garcia, người đang xin nghỉ phép.",
    "core_vocabulary": [
      { "word": "on leave", "type": "adj.phr.", "meaning": "đang nghỉ phép" },
      { "word": "instead of", "type": "prep.", "meaning": "thay vì" }
    ]
  },
  {
    "id": "q1129",
    "question": "Please bring an umbrella with you ______ it rains during the outdoor facility tour.",
    "options": {
      "A": "in case",
      "B": "even if",
      "C": "unless",
      "D": "so that"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "'In case' (phòng khi) dùng để chuẩn bị cho một khả năng có thể xảy ra.",
    "explanation_grammar": "Conjunction (Adverbial Clause of Condition).",
    "translation": "Vui lòng mang theo ô phòng khi trời mưa trong chuyến tham quan cơ sở vật chất ngoài trời.",
    "core_vocabulary": [
      { "word": "facility", "type": "n.", "meaning": "cơ sở vật chất" }
    ]
  },
  {
    "id": "q1130",
    "question": "______ reviewing the applicant's resume, the manager decided to schedule an interview.",
    "options": {
      "A": "Until",
      "B": "Behind",
      "C": "Within",
      "D": "After"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'After' đứng trước danh động từ chỉ thứ tự hành động (Sau khi xem xét).",
    "explanation_grammar": "Preposition of Time (After).",
    "translation": "Sau khi xem xét sơ yếu lý lịch của ứng viên, người quản lý đã quyết định lên lịch phỏng vấn.",
    "core_vocabulary": [
      { "word": "resume", "type": "n.", "meaning": "sơ yếu lý lịch" }
    ]
  },
  {
    "id": "q1131",
    "question": "The complimentary shuttle service runs directly from the Grand Hotel ______ the convention center.",
    "options": {
      "A": "with",
      "B": "for",
      "C": "at",
      "D": "to"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cấu trúc 'from [place] to [place]'.",
    "explanation_grammar": "Preposition from...to...",
    "translation": "Dịch vụ đưa đón miễn phí chạy thẳng từ Khách sạn Grand đến trung tâm hội nghị.",
    "core_vocabulary": [
      { "word": "complimentary", "type": "adj.", "meaning": "miễn phí, mời" },
      { "word": "convention center", "type": "n.phr.", "meaning": "trung tâm hội nghị" }
    ]
  },
  {
    "id": "q1132",
    "question": "The city council voted unanimously ______ the proposal to renovate the public park.",
    "options": {
      "A": "to",
      "B": "for",
      "C": "about",
      "D": "with"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cụm 'vote for' nghĩa là bỏ phiếu ủng hộ một cái gì đó.",
    "explanation_grammar": "Verb + Preposition.",
    "translation": "Hội đồng thành phố đã nhất trí bỏ phiếu ủng hộ đề xuất cải tạo công viên công cộng.",
    "core_vocabulary": [
      { "word": "unanimously", "type": "adv.", "meaning": "nhất trí" },
      { "word": "proposal", "type": "n.", "meaning": "đề xuất" }
    ]
  },
  {
    "id": "q1133",
    "question": "All employees must attend the safety workshop, ______ those who have already completed the online module.",
    "options": {
      "A": "except",
      "B": "instead",
      "C": "without",
      "D": "besides"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'except' (ngoại trừ) dùng để chỉ sự loại trừ.",
    "explanation_grammar": "Preposition 'Except'.",
    "translation": "Tất cả nhân viên phải tham gia hội thảo an toàn, ngoại trừ những người đã hoàn thành học phần trực tuyến.",
    "core_vocabulary": [
      { "word": "attend", "type": "v.", "meaning": "tham gia, tham dự" }
    ]
  },
  {
    "id": "q1134",
    "question": "The cafeteria will be closed for remodeling ______ the month of August.",
    "options": {
      "A": "while",
      "B": "throughout",
      "C": "between",
      "D": "along"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'throughout' có nghĩa là toàn bộ thời gian của một giai đoạn.",
    "explanation_grammar": "Preposition of Time (Throughout).",
    "translation": "Nhà ăn sẽ đóng cửa để tu sửa trong suốt cả tháng Tám.",
    "core_vocabulary": [
      { "word": "remodeling", "type": "n.", "meaning": "sự tu sửa, làm mới" }
    ]
  },
  {
    "id": "q1135",
    "question": "Customers who purchase a laptop will receive a free wireless mouse ______ their order.",
    "options": {
      "A": "by",
      "B": "with",
      "C": "at",
      "D": "for"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'with' dùng để chỉ sự đi kèm cùng với vật gì đó.",
    "explanation_grammar": "Preposition 'with'.",
    "translation": "Khách hàng mua máy tính xách tay sẽ nhận được một chuột không dây miễn phí kèm theo đơn đặt hàng của họ.",
    "core_vocabulary": [
      { "word": "purchase", "type": "v.", "meaning": "mua" }
    ]
  },
  {
    "id": "q1136",
    "question": "Please place the signed documents ______ the tray on the receptionist's desk.",
    "options": {
      "A": "to",
      "B": "over",
      "C": "at",
      "D": "in"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'in' dùng để chỉ vị trí bên trong (trong khay).",
    "explanation_grammar": "Preposition of Place.",
    "translation": "Vui lòng đặt các tài liệu đã ký vào khay trên bàn của lễ tân.",
    "core_vocabulary": [
      { "word": "tray", "type": "n.", "meaning": "cái khay" },
      { "word": "receptionist", "type": "n.", "meaning": "lễ tân" }
    ]
  },
  {
    "id": "q1137",
    "question": "Many local businesses sponsor the summer festival ______ the excellent community exposure.",
    "options": {
      "A": "as long as",
      "B": "because of",
      "C": "now that",
      "D": "in spite of"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cần một giới từ chỉ lý do trước cụm danh từ phía sau.",
    "explanation_grammar": "Preposition of Cause.",
    "translation": "Nhiều doanh nghiệp địa phương tài trợ cho lễ hội mùa hè vì sự quảng bá cộng đồng tuyệt vời mà nó mang lại.",
    "core_vocabulary": [
      { "word": "sponsor", "type": "v.", "meaning": "tài trợ" },
      { "word": "exposure", "type": "n.", "meaning": "sự quảng bá, phơi bày" }
    ]
  },
  {
    "id": "q1138",
    "question": "The updated employee handbook was distributed ______ the entire organization yesterday.",
    "options": {
      "A": "onto",
      "B": "across",
      "C": "between",
      "D": "into"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'across' dùng để chỉ sự lan rộng hoặc phân bố trên toàn bộ một phạm vi.",
    "explanation_grammar": "Preposition 'Across'.",
    "translation": "Sổ tay nhân viên đã cập nhật được phân phát trong toàn bộ tổ chức vào ngày hôm qua.",
    "core_vocabulary": [
      { "word": "handbook", "type": "n.", "meaning": "sổ tay hướng dẫn" }
    ]
  },
  {
    "id": "q1139",
    "question": "Dr. Evans is working closely ______ researchers from the state university on this study.",
    "options": {
      "A": "by",
      "B": "with",
      "C": "among",
      "D": "for"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cụm 'work with someone' là cấu trúc thông dụng.",
    "explanation_grammar": "Verb + Preposition.",
    "translation": "Tiến sĩ Evans đang làm việc chặt chẽ với các nhà nghiên cứu từ đại học bang về nghiên cứu này.",
    "core_vocabulary": [
      { "word": "researcher", "type": "n.", "meaning": "nhà nghiên cứu" }
    ]
  },
  {
    "id": "q1140",
    "question": "The special discount code for the online bookstore is only valid ______ three days.",
    "options": {
      "A": "until",
      "B": "for",
      "C": "in",
      "D": "during"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'for' dùng để chỉ một khoảng thời gian hiệu lực.",
    "explanation_grammar": "Preposition of Time (Duration).",
    "translation": "Mã giảm giá đặc biệt cho hiệu sách trực tuyến chỉ có giá trị trong ba ngày.",
    "core_vocabulary": [
      { "word": "valid", "type": "adj.", "meaning": "có giá trị, có hiệu lực" }
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
