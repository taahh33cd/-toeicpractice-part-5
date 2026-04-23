const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "id": "q1071",
    "question": "The community picnic will be held ______ the park behind the Seltzer Public Library.",
    "options": {
      "A": "for",
      "B": "in",
      "C": "here",
      "D": "all"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'in' dùng để chỉ vị trí bên trong một không gian (công viên).",
    "explanation_grammar": "Preposition of Place.",
    "translation": "Buổi dã ngoại cộng đồng sẽ được tổ chức tại công viên phía sau Thư viện Công cộng Seltzer.",
    "core_vocabulary": [
      { "word": "picnic", "type": "n.", "meaning": "buổi dã ngoại" },
      { "word": "behind", "type": "prep.", "meaning": "phía sau" }
    ]
  },
  {
    "id": "q1072",
    "question": "The new Kitsuna video camera is currently on sale for $375, not ______ tax.",
    "options": {
      "A": "including",
      "B": "alongside",
      "C": "excepting",
      "D": "within"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "'Including' được dùng như một giới từ có nghĩa là 'bao gồm'.",
    "explanation_grammar": "Preposition 'including'.",
    "translation": "Máy quay video Kitsuna mới hiện đang được giảm giá còn 375 đô la, chưa bao gồm thuế.",
    "core_vocabulary": [
      { "word": "currently", "type": "adv.", "meaning": "hiện tại" },
      { "word": "on sale", "type": "adj.phr.", "meaning": "đang giảm giá" }
    ]
  },
  {
    "id": "q1073",
    "question": "PKTM's regional managers serve ______ the direction of the vice president.",
    "options": {
      "A": "under",
      "B": "behind",
      "C": "among",
      "D": "opposite"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cụm 'under the direction' (dưới sự chỉ đạo/hướng dẫn của) là một cách kết hợp từ cố định.",
    "explanation_grammar": "Prepositional Phrase.",
    "translation": "Các quản lý khu vực của PKTM làm việc dưới sự chỉ đạo của phó chủ tịch.",
    "core_vocabulary": [
      { "word": "regional", "type": "adj.", "meaning": "thuộc về khu vực" },
      { "word": "direction", "type": "n.", "meaning": "sự chỉ đạo, phương hướng" }
    ]
  },
  {
    "id": "q1074",
    "question": "______ a recent surge in demand, Vanita's Catering is hiring four additional servers.",
    "options": {
      "A": "In total",
      "B": "Everywhere",
      "C": "Possibly",
      "D": "Owing to"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "'Owing to' là một giới từ phức hợp nghĩa là 'bởi vì / do'.",
    "explanation_grammar": "Complex Preposition.",
    "translation": "Do nhu cầu tăng mạnh gần đây, Vanita's Catering đang thuê thêm bốn nhân viên phục vụ.",
    "core_vocabulary": [
      { "word": "surge", "type": "n.", "meaning": "sự tăng mạnh" },
      { "word": "owing to", "type": "prep.", "meaning": "do, bởi vì" }
    ]
  },
  {
    "id": "q1075",
    "question": "Mr. Barrientos has worked at the company ______ six years.",
    "options": {
      "A": "lately",
      "B": "since",
      "C": "for",
      "D": "with"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'for' dùng để chỉ một khoảng thời gian (sáu năm).",
    "explanation_grammar": "Preposition of Time (Duration).",
    "translation": "Ông Barrientos đã làm việc tại công ty được sáu năm.",
    "core_vocabulary": [
      { "word": "six years", "type": "n.phr.", "meaning": "6 năm" }
    ]
  },
  {
    "id": "q1076",
    "question": "Mr. Louden was offered a full-time position at Fortelio Corporation ______ a division manager.",
    "options": {
      "A": "as",
      "B": "around",
      "C": "about",
      "D": "after"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'as' dùng để chỉ vai trò hoặc vị trí công việc.",
    "explanation_grammar": "Preposition 'as'.",
    "translation": "Ông Louden đã được mời làm vị trí toàn thời gian tại Tập đoàn Fortelio với tư cách là quản lý bộ phận.",
    "core_vocabulary": [
      { "word": "position", "type": "n.", "meaning": "vị trí, chức vụ" },
      { "word": "division", "type": "n.", "meaning": "bộ phận" }
    ]
  },
  {
    "id": "q1077",
    "question": "Ms. Najjar is going to give a presentation ______ workplace regulations at noon.",
    "options": {
      "A": "on",
      "B": "past",
      "C": "to",
      "D": "near"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'on' dùng sau 'presentation' để chỉ chủ đề của bài thuyết trình.",
    "explanation_grammar": "Preposition of Topic.",
    "translation": "Bà Najjar sẽ có bài thuyết trình về các quy định tại nơi làm việc vào buổi trưa.",
    "core_vocabulary": [
      { "word": "regulation", "type": "n.", "meaning": "quy định" },
      { "word": "noon", "type": "n.", "meaning": "buổi trưa" }
    ]
  },
  {
    "id": "q1078",
    "question": "Please log on to your online checking account ______ the next 30 days in order to keep it active.",
    "options": {
      "A": "how",
      "B": "whether",
      "C": "and",
      "D": "within"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'within' dùng để chỉ một khoảng thời gian mà hành động phải xảy ra.",
    "explanation_grammar": "Preposition of Time (Within).",
    "translation": "Vui lòng đăng nhập vào tài khoản vãng lai trực tuyến của bạn trong vòng 30 ngày tới để duy trì hoạt động của tài khoản.",
    "core_vocabulary": [
      { "word": "log on", "type": "v.phr.", "meaning": "đăng nhập" },
      { "word": "within", "type": "prep.", "meaning": "trong vòng" }
    ]
  },
  {
    "id": "q1079",
    "question": "______ the event organizers' best efforts, they have been unable to attract enough volunteers this spring.",
    "options": {
      "A": "Behind",
      "B": "Versus",
      "C": "Despite",
      "D": "Among"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'Despite' (mặc dù) dùng để chỉ sự nhượng bộ, trái ngược.",
    "explanation_grammar": "Preposition of Concession.",
    "translation": "Bất chấp những nỗ lực tốt nhất của những người tổ chức sự kiện, họ vẫn không thể thu hút đủ tình nguyện viên trong mùa xuân này.",
    "core_vocabulary": [
      { "word": "organizer", "type": "n.", "meaning": "người tổ chức" },
      { "word": "despite", "type": "prep.", "meaning": "mặc dù" }
    ]
  },
  {
    "id": "q1080",
    "question": "The programmers have a list of changes ______ the next software update.",
    "options": {
      "A": "between",
      "B": "of",
      "C": "above",
      "D": "for"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'for' dùng để chỉ mục đích hoặc đối tượng hướng tới (cho bản cập nhật).",
    "explanation_grammar": "Preposition of Purpose/Target.",
    "translation": "Các lập trình viên có một danh sách các thay đổi cho bản cập nhật phần mềm tiếp theo.",
    "core_vocabulary": [
      { "word": "programmer", "type": "n.", "meaning": "lập trình viên" },
      { "word": "update", "type": "n.", "meaning": "bản cập nhật" }
    ]
  },
  {
    "id": "q1081",
    "question": "Custom furniture orders require a 50 percent deposit ______ the time of the order.",
    "options": {
      "A": "off",
      "B": "at",
      "C": "into",
      "D": "as"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'at' dùng để chỉ một thời điểm cụ thể.",
    "explanation_grammar": "Preposition of Time (Point).",
    "translation": "Các đơn đặt hàng nội thất theo yêu cầu đòi hỏi phải đặt cọc 50% tại thời điểm đặt hàng.",
    "core_vocabulary": [
      { "word": "furniture", "type": "n.", "meaning": "đồ nội thất" },
      { "word": "deposit", "type": "n.", "meaning": "tiền đặt cọc" }
    ]
  },
  {
    "id": "q1082",
    "question": "The board of trustees debated for hours ______ the revised hiring policies.",
    "options": {
      "A": "over",
      "B": "above",
      "C": "across",
      "D": "during"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'over' dùng sau 'debate' để chỉ chủ đề đang được tranh luận.",
    "explanation_grammar": "Preposition after 'debate'.",
    "translation": "Hội đồng quản trị đã tranh luận hàng giờ về các chính sách tuyển dụng đã được sửa đổi.",
    "core_vocabulary": [
      { "word": "trustee", "type": "n.", "meaning": "thành viên hội đồng quản trị / người ủy thác" },
      { "word": "revised", "type": "adj.", "meaning": "đã được sửa đổi" }
    ]
  },
  {
    "id": "q1083",
    "question": "Based on last year's data, Paik Company increased its sales projections ______ the current year.",
    "options": {
      "A": "when",
      "B": "for",
      "C": "if",
      "D": "or"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'for' dùng để chỉ khoảng thời gian hoặc đối tượng mà mục tiêu hướng tới (cho năm hiện tại).",
    "explanation_grammar": "Preposition 'for'.",
    "translation": "Dựa trên dữ liệu năm ngoái, Công ty Paik đã tăng dự báo doanh số bán hàng cho năm hiện tại.",
    "core_vocabulary": [
      { "word": "projection", "type": "n.", "meaning": "sự dự báo, kế hoạch" },
      { "word": "current", "type": "adj.", "meaning": "hiện tại" }
    ]
  },
  {
    "id": "q1084",
    "question": "Harbison's Department store interviews applicants ______ standard business hours.",
    "options": {
      "A": "beside",
      "B": "among",
      "C": "during",
      "D": "onto"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'during' dùng để chỉ một khoảng thời gian mà hành động diễn ra.",
    "explanation_grammar": "Preposition of Time (During).",
    "translation": "Cửa hàng bách hóa Harbison phỏng vấn các ứng viên trong giờ làm việc tiêu chuẩn.",
    "core_vocabulary": [
      { "word": "applicant", "type": "n.", "meaning": "người nộp đơn, ứng viên" },
      { "word": "standard", "type": "adj.", "meaning": "tiêu chuẩn" }
    ]
  },
  {
    "id": "q1085",
    "question": "Although the housing market slowed ______ the summer months, sales began to pick up again in the autumn.",
    "options": {
      "A": "over",
      "B": "only",
      "C": "even",
      "D": "apart"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'over' dùng để chỉ một giai đoạn thời gian.",
    "explanation_grammar": "Preposition of Time (Over).",
    "translation": "Mặc dù thị trường nhà đất chậm lại trong các tháng hè, doanh số bán hàng đã bắt đầu tăng trở lại vào mùa thu.",
    "core_vocabulary": [
      { "word": "housing market", "type": "n.phr.", "meaning": "thị trường nhà đất" },
      { "word": "pick up", "type": "v.phr.", "meaning": "tăng lên, cải thiện" }
    ]
  },
  {
    "id": "q1086",
    "question": "______ best sellers, Booksters offers a wide selection of classics and biographies.",
    "options": {
      "A": "Somewhat",
      "B": "Besides",
      "C": "Becoming",
      "D": "Whose"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'Besides' có nghĩa là 'ngoài ra, bên cạnh đó'.",
    "explanation_grammar": "Preposition 'besides'.",
    "translation": "Ngoài những cuốn sách bán chạy nhất, Booksters còn cung cấp nhiều lựa chọn sách kinh điển và tiểu sử.",
    "core_vocabulary": [
      { "word": "selection", "type": "n.", "meaning": "sự lựa chọn" },
      { "word": "besides", "type": "prep.", "meaning": "ngoài ra" }
    ]
  },
  {
    "id": "q1087",
    "question": "Each Genutria snack bar contains as much protein as two eggs, with none ______ fat and cholesterol.",
    "options": {
      "A": "out",
      "B": "minus",
      "C": "by",
      "D": "of"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cấu trúc 'none of [noun/pronoun]' dùng để chỉ không có cái gì trong số đó.",
    "explanation_grammar": "Pronoun 'none' with preposition 'of'.",
    "translation": "Mỗi thanh đồ ăn nhẹ Genutria chứa lượng protein tương đương với hai quả trứng, và không chứa chất béo hay cholesterol nào.",
    "core_vocabulary": [
      { "word": "protein", "type": "n.", "meaning": "chất đạm" },
      { "word": "cholesterol", "type": "n.", "meaning": "cholesterol (một loại chất béo)" }
    ]
  },
  {
    "id": "q1088",
    "question": "The committee expects to be finished with the negotiations ______ 4:00 P.M.",
    "options": {
      "A": "on",
      "B": "over",
      "C": "until",
      "D": "by"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'by' dùng để chỉ một thời hạn chót (trước hoặc tại thời điểm đó).",
    "explanation_grammar": "Preposition of Time (Deadline).",
    "translation": "Ủy ban dự kiến sẽ hoàn thành các cuộc đàm phán trước 4 giờ chiều.",
    "core_vocabulary": [
      { "word": "negotiations", "type": "n.", "meaning": "các cuộc đàm phán" },
      { "word": "by", "type": "prep.", "meaning": "trước (thời hạn)" }
    ]
  },
  {
    "id": "q1089",
    "question": "______ the cost of travel, the cost of attending the conference is reasonable.",
    "options": {
      "A": "Along",
      "B": "Even if",
      "C": "Because",
      "D": "Aside from"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'Aside from' có nghĩa là 'ngoài ra, ngoại trừ'.",
    "explanation_grammar": "Complex Preposition 'aside from'.",
    "translation": "Ngoài chi phí đi lại, chi phí tham dự hội nghị là hợp lý.",
    "core_vocabulary": [
      { "word": "reasonable", "type": "adj.", "meaning": "hợp lý" },
      { "word": "aside from", "type": "prep.", "meaning": "ngoài ra" }
    ]
  },
  {
    "id": "q1090",
    "question": "Gateway Electronics will cancel any orders that have not been picked up ______ five days.",
    "options": {
      "A": "within",
      "B": "during",
      "C": "from",
      "D": "about"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'within' dùng để chỉ một giới hạn về thời gian.",
    "explanation_grammar": "Preposition of Time (Within).",
    "translation": "Gateway Electronics sẽ hủy bất kỳ đơn hàng nào không được nhận trong vòng năm ngày.",
    "core_vocabulary": [
      { "word": "pick up", "type": "v.phr.", "meaning": "nhận (hàng), đón" },
      { "word": "within", "type": "prep.", "meaning": "trong vòng" }
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
