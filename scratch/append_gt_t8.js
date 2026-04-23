const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "id": "q1191",
    "question": "Ms. Tanaka usually reviews the financial reports ______ the Starburst Cafe on Main Street.",
    "options": {
      "A": "at",
      "B": "on",
      "C": "to",
      "D": "in"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'at' dùng để chỉ một địa điểm cụ thể (tên quán cà phê).",
    "explanation_grammar": "Preposition of Place (At).",
    "translation": "Bà Tanaka thường xem xét các báo cáo tài chính tại quán Cà phê Starburst trên đường Main.",
    "core_vocabulary": [
      { "word": "financial", "type": "adj.", "meaning": "thuộc về tài chính" }
    ]
  },
  {
    "id": "q1192",
    "question": "The marketing team at K-Tech Industries has been working on the campaign ______ three months.",
    "options": {
      "A": "in",
      "B": "during",
      "C": "since",
      "D": "for"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'for' dùng để chỉ một khoảng thời gian (3 tháng).",
    "explanation_grammar": "Preposition of Time (Duration).",
    "translation": "Nhóm tiếp thị tại K-Tech Industries đã thực hiện chiến dịch này trong ba tháng.",
    "core_vocabulary": [
      { "word": "campaign", "type": "n.", "meaning": "chiến dịch" }
    ]
  },
  {
    "id": "q1193",
    "question": "______ the heavy snowfall, Mr. Reynolds decided to work from home on Tuesday.",
    "options": {
      "A": "Even though",
      "B": "Because of",
      "C": "As for",
      "D": "Instead of"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ phức hợp 'Because of' đứng trước cụm danh từ chỉ lý do.",
    "explanation_grammar": "Preposition of Cause.",
    "translation": "Do cơn tuyết rơi dày đặc, ông Reynolds đã quyết định làm việc tại nhà vào thứ Ba.",
    "core_vocabulary": [
      { "word": "snowfall", "type": "n.", "meaning": "trận tuyết, lượng tuyết rơi" }
    ]
  },
  {
    "id": "q1194",
    "question": "The new fitness center is conveniently located ______ the Horizon Plaza shopping mall.",
    "options": {
      "A": "between",
      "B": "among",
      "C": "inside",
      "D": "throughout"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'inside' (bên trong) chỉ vị trí trong một không gian lớn hơn.",
    "explanation_grammar": "Preposition of Place.",
    "translation": "Trung tâm thể dục mới nằm ở vị trí thuận tiện bên trong trung tâm mua sắm Horizon Plaza.",
    "core_vocabulary": [
      { "word": "conveniently", "type": "adv.", "meaning": "một cách thuận tiện" }
    ]
  },
  {
    "id": "q1195",
    "question": "Dr. Singh needs all patient evaluation forms completed ______ the end of the day.",
    "options": {
      "A": "by",
      "B": "in",
      "C": "until",
      "D": "on"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'by' để chỉ thời hạn chót (trước hoặc tại thời điểm đó).",
    "explanation_grammar": "Preposition of Time (By).",
    "translation": "Tiến sĩ Singh cần tất cả các biểu mẫu đánh giá bệnh nhân được hoàn thành trước cuối ngày.",
    "core_vocabulary": [
      { "word": "evaluation", "type": "n.", "meaning": "sự đánh giá" }
    ]
  },
  {
    "id": "q1196",
    "question": "All domestic flights with Stellar Airlines are fully booked, ______ the 8:00 P.M. departure.",
    "options": {
      "A": "except for",
      "B": "prior to",
      "C": "without",
      "D": "according to"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "'Except for' là giới từ phức hợp chỉ sự loại trừ.",
    "explanation_grammar": "Preposition 'Except for'.",
    "translation": "Tất cả các chuyến bay nội địa của Stellar Airlines đã được đặt hết chỗ, ngoại trừ chuyến khởi hành lúc 8 giờ tối.",
    "core_vocabulary": [
      { "word": "domestic flight", "type": "n.phr.", "meaning": "chuyến bay nội địa" },
      { "word": "departure", "type": "n.", "meaning": "giờ khởi hành, sự ra đi" }
    ]
  },
  {
    "id": "q1197",
    "question": "Mr. O'Connor will coordinate the upcoming charity event ______ the public relations department.",
    "options": {
      "A": "by",
      "B": "for",
      "C": "with",
      "D": "to"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cụm 'coordinate with' có nghĩa là phối hợp cùng với ai/bộ phận nào.",
    "explanation_grammar": "Verb + Preposition.",
    "translation": "Ông O'Connor sẽ phối hợp tổ chức sự kiện từ thiện sắp tới cùng với bộ phận quan hệ công chúng.",
    "core_vocabulary": [
      { "word": "coordinate", "type": "v.", "meaning": "phối hợp, điều phối" }
    ]
  },
  {
    "id": "q1198",
    "question": "Please wear your visitor badge at all times ______ your tour of the facility.",
    "options": {
      "A": "while",
      "B": "for",
      "C": "during",
      "D": "until"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'during' chỉ một khoảng thời gian diễn ra sự việc (trong suốt chuyến tham quan).",
    "explanation_grammar": "Preposition of Time (During).",
    "translation": "Vui lòng đeo thẻ khách của bạn mọi lúc trong suốt chuyến tham quan cơ sở vật chất.",
    "core_vocabulary": [
      { "word": "at all times", "type": "adv.phr.", "meaning": "mọi lúc" }
    ]
  },
  {
    "id": "q1199",
    "question": "The customer support team for Nexus Software sits ______ the second floor.",
    "options": {
      "A": "in",
      "B": "on",
      "C": "to",
      "D": "at"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'on' dùng cho vị trí các tầng trong tòa nhà.",
    "explanation_grammar": "Preposition of Place (Floors).",
    "translation": "Nhóm hỗ trợ khách hàng của Nexus Software làm việc ở tầng hai.",
    "core_vocabulary": []
  },
  {
    "id": "q1200",
    "question": "______ her tight schedule, Ms. Dubois attended the retirement party for her colleague.",
    "options": {
      "A": "Even",
      "B": "However",
      "C": "Despite",
      "D": "Although"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'Despite' đứng trước cụm danh từ để chỉ sự nhượng bộ (mặc dù).",
    "explanation_grammar": "Preposition of Concession.",
    "translation": "Bất chấp lịch trình bận rộn, bà Dubois vẫn tham dự bữa tiệc nghỉ hưu của đồng nghiệp mình.",
    "core_vocabulary": [
      { "word": "tight schedule", "type": "n.phr.", "meaning": "lịch trình bận rộn" },
      { "word": "colleague", "type": "n.", "meaning": "đồng nghiệp" }
    ]
  },
  {
    "id": "q1201",
    "question": "Please send the signed tax documents directly ______ the accounting office.",
    "options": {
      "A": "at",
      "B": "in",
      "C": "into",
      "D": "to"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'to' chỉ hướng đến một đối tượng nhận.",
    "explanation_grammar": "Preposition of Direction.",
    "translation": "Vui lòng gửi các tài liệu thuế đã ký trực tiếp đến văn phòng kế toán.",
    "core_vocabulary": [
      { "word": "accounting", "type": "n.", "meaning": "kế toán" }
    ]
  },
  {
    "id": "q1202",
    "question": "Mr. Park was selected for the leadership award ______ his outstanding contribution to the project.",
    "options": {
      "A": "in spite of",
      "B": "as long as",
      "C": "provided that",
      "D": "due to"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ phức hợp 'due to' chỉ lý do (nhờ vào/do).",
    "explanation_grammar": "Preposition of Cause.",
    "translation": "Ông Park đã được chọn cho giải thưởng lãnh đạo nhờ vào đóng góp xuất sắc của ông cho dự án.",
    "core_vocabulary": [
      { "word": "outstanding", "type": "adj.", "meaning": "xuất sắc, nổi bật" },
      { "word": "contribution", "type": "n.", "meaning": "sự đóng góp" }
    ]
  },
  {
    "id": "q1203",
    "question": "The manager received several complaints ______ the confusing layout of the new website.",
    "options": {
      "A": "through",
      "B": "across",
      "C": "regarding",
      "D": "into"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'regarding' có nghĩa là 'về/liên quan đến'.",
    "explanation_grammar": "Preposition 'Regarding'.",
    "translation": "Người quản lý đã nhận được một số phàn nàn liên quan đến bố cục khó hiểu của trang web mới.",
    "core_vocabulary": [
      { "word": "complaint", "type": "n.", "meaning": "phàn nàn" },
      { "word": "layout", "type": "n.", "meaning": "bố cục" }
    ]
  },
  {
    "id": "q1204",
    "question": "Ms. Silva has served as the branch manager ______ the previous director retired.",
    "options": {
      "A": "from",
      "B": "since",
      "C": "during",
      "D": "for"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ/Liên từ 'since' dùng để chỉ mốc thời gian bắt đầu hành động.",
    "explanation_grammar": "Preposition of Time (Since).",
    "translation": "Bà Silva đã giữ chức quản lý chi nhánh kể từ khi giám đốc tiền nhiệm nghỉ hưu.",
    "core_vocabulary": [
      { "word": "previous", "type": "adj.", "meaning": "trước đó, tiền nhiệm" }
    ]
  },
  {
    "id": "q1205",
    "question": "The new branch of Summit Electronics will open ______ the bookstore and the pharmacy.",
    "options": {
      "A": "among",
      "B": "beside",
      "C": "alongside",
      "D": "between"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cấu trúc 'between A and B'.",
    "explanation_grammar": "Preposition 'Between'.",
    "translation": "Chi nhánh mới của Summit Electronics sẽ mở cửa nằm giữa hiệu sách và hiệu thuốc.",
    "core_vocabulary": [
      { "word": "pharmacy", "type": "n.", "meaning": "hiệu thuốc" }
    ]
  },
  {
    "id": "q1206",
    "question": "Mr. Wagner will deliver the welcome speech ______ the company president today.",
    "options": {
      "A": "next to",
      "B": "instead of",
      "C": "regardless of",
      "D": "in addition to"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ phức hợp 'instead of' (thay cho) phù hợp với ngữ cảnh phân công công việc.",
    "explanation_grammar": "Compound Preposition.",
    "translation": "Ông Wagner sẽ thay mặt chủ tịch công ty đọc diễn văn chào mừng vào ngày hôm nay.",
    "core_vocabulary": [
      { "word": "deliver", "type": "v.", "meaning": "đọc/trình bày (diễn văn), giao hàng" }
    ]
  },
  {
    "id": "q1207",
    "question": "The updated safety regulations will be enforced ______ the entire factory starting next week.",
    "options": {
      "A": "between",
      "B": "throughout",
      "C": "into",
      "D": "over"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'throughout' chỉ sự áp dụng trên toàn bộ phạm vi.",
    "explanation_grammar": "Preposition 'Throughout'.",
    "translation": "Các quy định an toàn đã cập nhật sẽ được thực thi trong toàn bộ nhà máy bắt đầu từ tuần tới.",
    "core_vocabulary": [
      { "word": "enforce", "type": "v.", "meaning": "thực thi, bắt buộc" },
      { "word": "regulation", "type": "n.", "meaning": "quy định" }
    ]
  },
  {
    "id": "q1208",
    "question": "Please remember to turn off the lights ______ leaving the conference room.",
    "options": {
      "A": "before",
      "B": "until",
      "C": "since",
      "D": "during"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'before' chỉ trình tự thời gian trước một hành động.",
    "explanation_grammar": "Preposition of Time (Before).",
    "translation": "Vui lòng nhớ tắt đèn trước khi rời khỏi phòng hội nghị.",
    "core_vocabulary": []
  },
  {
    "id": "q1209",
    "question": "______ the company policy, all expense reports must include original receipts.",
    "options": {
      "A": "As well as",
      "B": "Out of",
      "C": "According to",
      "D": "In front of"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ phức hợp 'According to' (theo như) dùng để trích dẫn quy định.",
    "explanation_grammar": "Preposition 'According to'.",
    "translation": "Theo chính sách của công ty, tất cả các báo cáo chi phí phải bao gồm biên lai gốc.",
    "core_vocabulary": [
      { "word": "policy", "type": "n.", "meaning": "chính sách" },
      { "word": "original", "type": "adj.", "meaning": "gốc, ban đầu" }
    ]
  },
  {
    "id": "q1210",
    "question": "Please keep this confirmation email ______ you need to change your reservation details.",
    "options": {
      "A": "so that",
      "B": "in case",
      "C": "although",
      "D": "unless"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "'In case' (phòng khi) dùng để chuẩn bị cho một tình huống có thể xảy ra.",
    "explanation_grammar": "Conjunction (Adverbial Clause of Condition).",
    "translation": "Vui lòng giữ lại email xác nhận này phòng khi bạn cần thay đổi thông tin đặt chỗ.",
    "core_vocabulary": [
      { "word": "confirmation", "type": "n.", "meaning": "sự xác nhận" },
      { "word": "reservation", "type": "n.", "meaning": "sự đặt chỗ" }
    ]
  },
  {
    "id": "q1211",
    "question": "The annual company picnic will be held at the pavilion ______ the main entrance of Green Valley Park.",
    "options": {
      "A": "onto",
      "B": "along",
      "C": "near",
      "D": "through"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'near' chỉ vị trí gần.",
    "explanation_grammar": "Preposition of Place (Near).",
    "translation": "Buổi dã ngoại hàng năm của công ty sẽ được tổ chức tại nhà lều gần cổng chính của Công viên Green Valley.",
    "core_vocabulary": [
      { "word": "pavilion", "type": "n.", "meaning": "nhà lều, gian hàng" }
    ]
  },
  {
    "id": "q1212",
    "question": "______ her role as lead designer, Ms. Bennett also trains the new interns.",
    "options": {
      "A": "Instead of",
      "B": "In addition to",
      "C": "Because of",
      "D": "Except for"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ phức hợp 'In addition to' (ngoài ra/thêm vào đó) chỉ sự bổ sung trách nhiệm.",
    "explanation_grammar": "Preposition 'In addition to'.",
    "translation": "Bên cạnh vai trò là nhà thiết kế chính, bà Bennett còn đào tạo các thực tập sinh mới.",
    "core_vocabulary": [
      { "word": "intern", "type": "n.", "meaning": "thực tập sinh" }
    ]
  },
  {
    "id": "q1213",
    "question": "The registration desk at the Blue Wave Cafe will remain open ______ the final speaker finishes their presentation.",
    "options": {
      "A": "while",
      "B": "until",
      "C": "before",
      "D": "by"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ/Liên từ 'until' chỉ trạng thái kéo dài cho tới khi sự việc khác xảy ra.",
    "explanation_grammar": "Preposition/Conjunction of Time (Until).",
    "translation": "Quầy đăng ký tại quán cà phê Blue Wave sẽ tiếp tục mở cửa cho đến khi diễn giả cuối cùng kết thúc bài thuyết trình.",
    "core_vocabulary": []
  },
  {
    "id": "q1214",
    "question": "Mr. Clark recently transferred to our headquarters ______ the regional office in Chicago.",
    "options": {
      "A": "from",
      "B": "at",
      "C": "by",
      "D": "to"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'from' chỉ điểm xuất phát/nguồn gốc.",
    "explanation_grammar": "Preposition 'From'.",
    "translation": "Ông Clark gần đây đã chuyển đến trụ sở chính của chúng tôi từ văn phòng khu vực ở Chicago.",
    "core_vocabulary": [
      { "word": "headquarters", "type": "n.", "meaning": "trụ sở chính" },
      { "word": "transferred", "type": "v.pp", "meaning": "đã chuyển công tác" }
    ]
  },
  {
    "id": "q1215",
    "question": "The special photography exhibition at the Metro Art Museum will officially open ______ Friday.",
    "options": {
      "A": "on",
      "B": "for",
      "C": "in",
      "D": "at"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'on' dùng cho các ngày trong tuần.",
    "explanation_grammar": "Preposition of Time (On).",
    "translation": "Triển lãm nhiếp ảnh đặc biệt tại Bảo tàng Nghệ thuật Metro sẽ chính thức khai mạc vào thứ Sáu.",
    "core_vocabulary": [
      { "word": "exhibition", "type": "n.", "meaning": "triển lãm" }
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
