const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "id": "q0996",
    "question": "The customer service representative handled the angry client very ______.",
    "options": {
      "A": "professionalism",
      "B": "professionally",
      "C": "professional",
      "D": "profession"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho động từ 'handled'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Nhân viên dịch vụ khách hàng đã giải quyết khách hàng đang tức giận một cách rất chuyên nghiệp.",
    "core_vocabulary": [
      { "word": "representative", "type": "n.", "meaning": "người đại diện" },
      { "word": "professionally", "type": "adv.", "meaning": "một cách chuyên nghiệp" }
    ]
  },
  {
    "id": "q0997",
    "question": "The committee found the proposed timeline for the software rollout to be highly ______.",
    "options": {
      "A": "practically",
      "B": "practicality",
      "C": "practice",
      "D": "practical"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'be' và trạng từ 'highly' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Ủy ban nhận thấy mốc thời gian đề xuất cho việc triển khai phần mềm là rất thực tế.",
    "core_vocabulary": [
      { "word": "timeline", "type": "n.", "meaning": "mốc thời gian" },
      { "word": "practical", "type": "adj.", "meaning": "thực tế, thiết thực" }
    ]
  },
  {
    "id": "q0998",
    "question": "All passengers must remain ______ while the aircraft is taxiing to the gate.",
    "options": {
      "A": "seating",
      "B": "seat",
      "C": "seated",
      "D": "seats"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cụm từ 'remain seated' (vẫn ở tư thế ngồi) là một lối diễn đạt phổ biến.",
    "explanation_grammar": "Adjective after Linking Verb (Participial Adjective).",
    "translation": "Tất cả hành khách phải ngồi yên tại chỗ trong khi máy bay đang lăn bánh vào cổng.",
    "core_vocabulary": [
      { "word": "passenger", "type": "n.", "meaning": "hành khách" },
      { "word": "taxiing", "type": "v.ing", "meaning": "lăn bánh trên đường băng" }
    ]
  },
  {
    "id": "q0999",
    "question": "The human resources department is seeking a ______ candidate for the managerial position.",
    "options": {
      "A": "qualification",
      "B": "qualifying",
      "C": "qualified",
      "D": "qualify"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'candidate'. 'Qualified' (có đủ năng lực) là tính từ.",
    "explanation_grammar": "Adjective (Participial) before Noun.",
    "translation": "Phòng nhân sự đang tìm kiếm một ứng viên có đủ năng lực cho vị trí quản lý.",
    "core_vocabulary": [
      { "word": "managerial", "type": "adj.", "meaning": "thuộc về quản lý" },
      { "word": "qualified", "type": "adj.", "meaning": "có đủ năng lực, trình độ" }
    ]
  },
  {
    "id": "q1000",
    "question": "Because of a ______ increase in raw material costs, the factory will raise its prices next month.",
    "options": {
      "A": "substantially",
      "B": "substantial",
      "C": "substance",
      "D": "substantiate"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'increase'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Do chi phí nguyên liệu thô tăng đáng kể, nhà máy sẽ tăng giá vào tháng tới.",
    "core_vocabulary": [
      { "word": "raw material", "type": "n.phr.", "meaning": "nguyên liệu thô" },
      { "word": "substantial", "type": "adj.", "meaning": "đáng kể" }
    ]
  },
  {
    "id": "q1001",
    "question": "The technicians worked ______ to repair the server before the start of the business day.",
    "options": {
      "A": "quickly",
      "B": "quick",
      "C": "quickness",
      "D": "quicken"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ 'worked'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Các kỹ thuật viên đã làm việc nhanh chóng để sửa chữa máy chủ trước khi ngày làm việc bắt đầu.",
    "core_vocabulary": [
      { "word": "technician", "type": "n.", "meaning": "kỹ thuật viên" },
      { "word": "quickly", "type": "adv.", "meaning": "nhanh chóng" }
    ]
  },
  {
    "id": "q1002",
    "question": "Ms. Rodriguez was ______ appointed as the new head of the marketing division.",
    "options": {
      "A": "recency",
      "B": "recentness",
      "C": "recent",
      "D": "recently"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ ở dạng bị động 'was appointed'.",
    "explanation_grammar": "Adverb modifying Passive Verb.",
    "translation": "Bà Rodriguez đã được bổ nhiệm làm người đứng đầu mới của bộ phận tiếp thị gần đây.",
    "core_vocabulary": [
      { "word": "division", "type": "n.", "meaning": "bộ phận, phòng ban" },
      { "word": "recently", "type": "adv.", "meaning": "gần đây" }
    ]
  },
  {
    "id": "q1003",
    "question": "The instructions on the packaging are ______ written and easy for consumers to follow.",
    "options": {
      "A": "clear",
      "B": "clearing",
      "C": "clearness",
      "D": "clearly"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ dạng phân từ (participle) 'written'.",
    "explanation_grammar": "Adverb modifying Participial Adjective.",
    "translation": "Các hướng dẫn trên bao bì được viết rõ ràng và khách hàng dễ dàng làm theo.",
    "core_vocabulary": [
      { "word": "packaging", "type": "n.", "meaning": "bao bì" },
      { "word": "clearly", "type": "adv.", "meaning": "rõ ràng" }
    ]
  },
  {
    "id": "q1004",
    "question": "It is strictly ______ to park in the spaces reserved for executive staff members.",
    "options": {
      "A": "prohibit",
      "B": "prohibitive",
      "C": "prohibited",
      "D": "prohibition"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cấu trúc bị động 'It is [adverb] [past participle]'. 'Prohibited' (bị cấm) là dạng phân từ cột 3.",
    "explanation_grammar": "Passive voice / Participial Adjective.",
    "translation": "Nghiêm cấm đỗ xe trong các vị trí dành riêng cho nhân viên điều hành.",
    "core_vocabulary": [
      { "word": "strictly", "type": "adv.", "meaning": "một cách nghiêm ngặt" },
      { "word": "prohibited", "type": "adj.", "meaning": "bị cấm" }
    ]
  },
  {
    "id": "q1005",
    "question": "The financial advisor provided a ______ overview of the current investment opportunities.",
    "options": {
      "A": "comprehensive",
      "B": "comprehend",
      "C": "comprehension",
      "D": "comprehensively"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'overview'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Cố vấn tài chính đã cung cấp một cái nhìn tổng quan toàn diện về các cơ hội đầu tư hiện tại.",
    "core_vocabulary": [
      { "word": "advisor", "type": "n.", "meaning": "cố vấn" },
      { "word": "comprehensive", "type": "adj.", "meaning": "toàn diện, bao quát" }
    ]
  },
  {
    "id": "q1006",
    "question": "The new security protocol requires all employees to change their passwords ______.",
    "options": {
      "A": "annuity",
      "B": "annually",
      "C": "annual",
      "D": "annuals"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ 'change'. 'Annually' (hàng năm) là trạng từ.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Giao thức bảo mật mới yêu cầu tất cả nhân viên thay đổi mật khẩu của họ hàng năm.",
    "core_vocabulary": [
      { "word": "protocol", "type": "n.", "meaning": "giao thức, quy định" },
      { "word": "annually", "type": "adv.", "meaning": "hàng năm" }
    ]
  },
  {
    "id": "q1007",
    "question": "The organizers were ______ surprised by the large turnout at the annual trade show.",
    "options": {
      "A": "pleasing",
      "B": "pleasure",
      "C": "pleasant",
      "D": "pleasantly"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cụm 'pleasantly surprised' (ngạc nhiên một cách vui sướng) là một lối diễn đạt phổ biến.",
    "explanation_grammar": "Adverb modifying Participial Adjective.",
    "translation": "Các nhà tổ chức đã vô cùng ngạc nhiên và vui mừng trước số lượng người tham dự đông đảo tại hội trợ thương mại hàng năm.",
    "core_vocabulary": [
      { "word": "turnout", "type": "n.", "meaning": "số lượng người tham gia" },
      { "word": "trade show", "type": "n.phr.", "meaning": "hội chợ thương mại" }
    ]
  },
  {
    "id": "q1008",
    "question": "A ______ drafted contract will protect the company from potential legal disputes.",
    "options": {
      "A": "carefully",
      "B": "careful",
      "C": "carefulness",
      "D": "care"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ phân từ 'drafted'.",
    "explanation_grammar": "Adverb modifying Participial Adjective.",
    "translation": "Một hợp đồng được soạn thảo cẩn thận sẽ bảo vệ công ty khỏi những tranh chấp pháp lý tiềm tàng.",
    "core_vocabulary": [
      { "word": "draft", "type": "v.", "meaning": "soạn thảo" },
      { "word": "dispute", "type": "n.", "meaning": "tranh chấp" }
    ]
  },
  {
    "id": "q1009",
    "question": "The restaurant manager apologized ______ for the delay in serving the main course.",
    "options": {
      "A": "profusely",
      "B": "profusion",
      "C": "profuseness",
      "D": "profuse"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ 'apologized'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Quản lý nhà hàng đã xin lỗi rối rít vì sự chậm trễ trong việc phục vụ món chính.",
    "core_vocabulary": [
      { "word": "apologize", "type": "v.", "meaning": "xin lỗi" },
      { "word": "profusely", "type": "adv.", "meaning": "nhiều, dồi dào, rối rít" }
    ]
  },
  {
    "id": "q1010",
    "question": "The findings of the recent market research study are highly ______ to our new product launch.",
    "options": {
      "A": "relevance",
      "B": "relevancies",
      "C": "relevantly",
      "D": "relevant"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'are' và trạng từ 'highly' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Kết quả của nghiên cứu thị trường gần đây rất có liên quan đến việc ra mắt sản phẩm mới của chúng tôi.",
    "core_vocabulary": [
      { "word": "findings", "type": "n.", "meaning": "kết quả nghiên cứu" },
      { "word": "relevant", "type": "adj.", "meaning": "có liên quan" }
    ]
  },
  {
    "id": "q1011",
    "question": "The editorial team reviews all articles ______ to ensure high standards of journalism.",
    "options": {
      "A": "thorough",
      "B": "thoroughly",
      "C": "thoroughness",
      "D": "thoroughs"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ 'reviews'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Nhóm biên tập xem xét tất cả các bài báo một cách thấu đáo để đảm bảo các tiêu chuẩn báo chí cao.",
    "core_vocabulary": [
      { "word": "journalism", "type": "n.", "meaning": "báo chí" },
      { "word": "thoroughly", "type": "adv.", "meaning": "thấu đáo, kỹ lưỡng" }
    ]
  },
  {
    "id": "q1012",
    "question": "The market demand for these imported luxury goods is highly ______.",
    "options": {
      "A": "predict",
      "B": "prediction",
      "C": "predictably",
      "D": "predictable"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'is' và trạng từ 'highly' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Nhu cầu thị trường đối với các mặt hàng xa xỉ nhập khẩu này rất dễ dự đoán.",
    "core_vocabulary": [
      { "word": "predictable", "type": "adj.", "meaning": "có thể dự đoán được" },
      { "word": "luxury", "type": "adj.", "meaning": "xa xỉ, sang trọng" }
    ]
  },
  {
    "id": "q1013",
    "question": "The CEO's speech at the corporate banquet was incredibly ______ and motivating.",
    "options": {
      "A": "inspiringly",
      "B": "inspiring",
      "C": "inspiration",
      "D": "inspire"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đóng vai trò là bổ ngữ sau động từ nối 'was'.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Bài phát biểu của CEO tại bữa tiệc công ty cực kỳ truyền cảm hứng và thúc đẩy tinh thần.",
    "core_vocabulary": [
      { "word": "banquet", "type": "n.", "meaning": "bữa tiệc" },
      { "word": "inspiring", "type": "adj.", "meaning": "truyền cảm hứng" }
    ]
  },
  {
    "id": "q1014",
    "question": "The travel agency offers ______ discounted rates for group bookings of ten or more people.",
    "options": {
      "A": "heaviness",
      "B": "heavies",
      "C": "heavily",
      "D": "heavy"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cụm 'heavily discounted' (được giảm giá sâu) là một cách kết hợp thông dụng.",
    "explanation_grammar": "Adverb modifying Participial Adjective.",
    "translation": "Công ty du lịch cung cấp mức giá chiết khấu mạnh cho các lượt đặt chỗ theo nhóm từ mười người trở lên.",
    "core_vocabulary": [
      { "word": "discounted", "type": "adj.", "meaning": "được chiết khấu" },
      { "word": "heavily", "type": "adv.", "meaning": "nặng nề, sâu sắc, mạnh" }
    ]
  },
  {
    "id": "q1015",
    "question": "All applicants must submit an ______ resume along with three letters of recommendation.",
    "options": {
      "A": "updates",
      "B": "update",
      "C": "updating",
      "D": "updated"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ (dạng quá khứ phân từ) đứng trước danh từ 'resume'.",
    "explanation_grammar": "Participial Adjective before Noun.",
    "translation": "Tất cả các ứng viên phải nộp một bản sơ yếu lý lịch đã được cập nhật cùng với ba thư giới thiệu.",
    "core_vocabulary": [
      { "word": "resume", "type": "n.", "meaning": "sơ yếu lý lịch" },
      { "word": "updated", "type": "adj.", "meaning": "đã được cập nhật" }
    ]
  },
  {
    "id": "q1016",
    "question": "The sales representatives were ______ rewarded for exceeding their quarterly targets.",
    "options": {
      "A": "generous",
      "B": "generosity",
      "C": "generousness",
      "D": "generously"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ ở dạng bị động 'were rewarded'.",
    "explanation_grammar": "Adverb modifying Passive Verb.",
    "translation": "Các đại diện bán hàng đã được khen thưởng hào phóng vì đã vượt mục tiêu hàng quý của họ.",
    "core_vocabulary": [
      { "word": "exceed", "type": "v.", "meaning": "vượt quá" },
      { "word": "generously", "type": "adv.", "meaning": "hào phóng" }
    ]
  },
  {
    "id": "q1017",
    "question": "We are ______ seeking an experienced web developer to join our growing IT department.",
    "options": {
      "A": "action",
      "B": "activeness",
      "C": "active",
      "D": "actively"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ 'seeking'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Chúng tôi hiện đang tích cực tìm kiếm một nhà phát triển web có kinh nghiệm để gia nhập bộ phận CNTT đang phát triển của mình.",
    "core_vocabulary": [
      { "word": "seek", "type": "v.", "meaning": "tìm kiếm" },
      { "word": "actively", "type": "adv.", "meaning": "tích cực, chủ động" }
    ]
  },
  {
    "id": "q1018",
    "question": "The transition to the new accounting software was ______ seamless thanks to the IT team.",
    "options": {
      "A": "relate",
      "B": "relatively",
      "C": "relation",
      "D": "relative"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ 'seamless' (không có lỗi, liền mạch).",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Quá trình chuyển đổi sang phần mềm kế toán mới diễn ra tương đối liền mạch nhờ có đội ngũ CNTT.",
    "core_vocabulary": [
      { "word": "transition", "type": "n.", "meaning": "sự chuyển đổi" },
      { "word": "relatively", "type": "adv.", "meaning": "tương đối" }
    ]
  },
  {
    "id": "q1019",
    "question": "The supervisor noticed a ______ improvement in employee morale after the team-building event.",
    "options": {
      "A": "significantly",
      "B": "significance",
      "C": "signify",
      "D": "significant"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'improvement'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Người giám sát đã nhận thấy một sự cải thiện đáng kể trong tinh thần nhân viên sau sự kiện xây dựng đội ngũ.",
    "core_vocabulary": [
      { "word": "morale", "type": "n.", "meaning": "tinh thần, nhuệ khí" },
      { "word": "significant", "type": "adj.", "meaning": "đáng kể, quan trọng" }
    ]
  },
  {
    "id": "q1020",
    "question": "Please ensure that all confidential client documents are disposed of ______.",
    "options": {
      "A": "properness",
      "B": "property",
      "C": "properly",
      "D": "proper"
    },
    "answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho động từ 'disposed of'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Vui lòng đảm bảo rằng tất cả các tài liệu bảo mật của khách hàng được xử lý đúng cách.",
    "core_vocabulary": [
      { "word": "dispose of", "type": "v.phr.", "meaning": "xử lý, vứt bỏ" },
      { "word": "properly", "type": "adv.", "meaning": "đúng cách, phù hợp" }
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
