const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "id": "q1166",
    "question": "The annual staff retreat will take place ______ the Lakeside Hotel this year.",
    "options": {
      "A": "in",
      "B": "to",
      "C": "at",
      "D": "for"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'at' dùng để chỉ một địa điểm cụ thể nơi sự kiện diễn ra.",
    "explanation_grammar": "Preposition of Place (At).",
    "translation": "Chuyến nghỉ dưỡng hàng năm của nhân viên sẽ diễn ra tại Khách sạn Lakeside vào năm nay.",
    "core_vocabulary": [
      { "word": "retreat", "type": "n.", "meaning": "chuyến nghỉ dưỡng, rút lui" },
      { "word": "take place", "type": "v.phr.", "meaning": "diễn ra" }
    ]
  },
  {
    "id": "q1167",
    "question": "______ the recent software update, some users experienced login issues.",
    "options": {
      "A": "Between",
      "B": "Because",
      "C": "Following",
      "D": "Since"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "'Following' đóng vai trò là một giới từ có nghĩa là 'sau khi'.",
    "explanation_grammar": "Preposition 'Following'.",
    "translation": "Sau bản cập nhật phần mềm gần đây, một số người dùng đã gặp phải sự cố đăng nhập.",
    "core_vocabulary": [
      { "word": "recent", "type": "adj.", "meaning": "gần đây" },
      { "word": "issue", "type": "n.", "meaning": "vấn đề, sự cố" }
    ]
  },
  {
    "id": "q1168",
    "question": "Ms. Alvez is responsible for reviewing all contracts ______ they are sent to the client.",
    "options": {
      "A": "within",
      "B": "before",
      "C": "during",
      "D": "until"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'before' dùng để chỉ trình tự thời gian (trước khi).",
    "explanation_grammar": "Preposition of Time (Before).",
    "translation": "Bà Alvez chịu trách nhiệm xem xét tất cả các hợp đồng trước khi chúng được gửi cho khách hàng.",
    "core_vocabulary": [
      { "word": "responsible", "type": "adj.", "meaning": "chịu trách nhiệm" },
      { "word": "review", "type": "v.", "meaning": "xem xét, đánh giá" }
    ]
  },
  {
    "id": "q1169",
    "question": "The cafeteria on the first floor is open ______ 7:00 A.M. and 3:00 P.M.",
    "options": {
      "A": "among",
      "B": "between",
      "C": "from",
      "D": "through"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'between' đi kèm với cấu trúc 'A and B'.",
    "explanation_grammar": "Preposition 'Between'.",
    "translation": "Căng tin ở tầng một mở cửa từ 7 giờ sáng đến 3 giờ chiều.",
    "core_vocabulary": [
      { "word": "cafeteria", "type": "n.", "meaning": "căng tin, quán ăn tự phục vụ" }
    ]
  },
  {
    "id": "q1170",
    "question": "Mr. Chen has been out of town on a business trip ______ last Tuesday.",
    "options": {
      "A": "from",
      "B": "since",
      "C": "in",
      "D": "for"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'since' chỉ mốc thời gian bắt đầu một sự việc kéo dài đến hiện tại.",
    "explanation_grammar": "Preposition of Time (Since).",
    "translation": "Ông Chen đã đi công tác khỏi thành phố kể từ thứ Ba tuần trước.",
    "core_vocabulary": [
      { "word": "business trip", "type": "n.phr.", "meaning": "chuyến công tác" }
    ]
  },
  {
    "id": "q1171",
    "question": "Please make sure to return the company vehicle ______ 5:00 P.M. tomorrow.",
    "options": {
      "A": "on",
      "B": "by",
      "C": "in",
      "D": "until"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'by' để chỉ thời hạn chót (deadline).",
    "explanation_grammar": "Preposition of Time (By).",
    "translation": "Vui lòng đảm bảo trả lại xe của công ty trước 5 giờ chiều ngày mai.",
    "core_vocabulary": [
      { "word": "vehicle", "type": "n.", "meaning": "xe cộ, phương tiện" }
    ]
  },
  {
    "id": "q1172",
    "question": "The new marketing campaign is aimed ______ young professionals in urban areas.",
    "options": {
      "A": "at",
      "B": "for",
      "C": "to",
      "D": "on"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cụm 'aimed at' (nhắm vào/hướng đến) là cấu trúc cố định.",
    "explanation_grammar": "Verb + Preposition.",
    "translation": "Chiến dịch tiếp thị mới nhắm vào các chuyên gia trẻ ở các khu vực đô thị.",
    "core_vocabulary": [
      { "word": "professional", "type": "n.", "meaning": "chuyên gia" },
      { "word": "urban", "type": "adj.", "meaning": "thuộc về đô thị" }
    ]
  },
  {
    "id": "q1173",
    "question": "______ his lack of experience, Mr. Gupta quickly adapted to his new role.",
    "options": {
      "A": "Although",
      "B": "Despite",
      "C": "However",
      "D": "Even"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'Despite' (mặc dù) đứng trước cụm danh từ.",
    "explanation_grammar": "Preposition of Concession.",
    "translation": "Bất chấp sự thiếu kinh nghiệm của mình, ông Gupta đã nhanh chóng thích nghi với vai trò mới.",
    "core_vocabulary": [
      { "word": "lack of", "type": "n.phr.", "meaning": "sự thiếu hụt" },
      { "word": "adapt", "type": "v.", "meaning": "thích nghi" }
    ]
  },
  {
    "id": "q1174",
    "question": "The seminar on time management will be held ______ Wednesday afternoon.",
    "options": {
      "A": "on",
      "B": "during",
      "C": "at",
      "D": "in"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'on' dùng cho các buổi trong ngày cụ thể (Wednesday afternoon).",
    "explanation_grammar": "Preposition of Time (On).",
    "translation": "Buổi hội thảo về quản lý thời gian sẽ được tổ chức vào chiều thứ Tư.",
    "core_vocabulary": [
      { "word": "time management", "type": "n.phr.", "meaning": "quản lý thời gian" }
    ]
  },
  {
    "id": "q1175",
    "question": "All employees must wear their identification badges ______ all times while in the building.",
    "options": {
      "A": "during",
      "B": "at",
      "C": "in",
      "D": "on"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cụm 'at all times' (mọi lúc) là một thành ngữ cố định.",
    "explanation_grammar": "Fixed Prepositional Idiom.",
    "translation": "Tất cả nhân viên phải đeo thẻ nhận dạng của họ mọi lúc khi ở trong tòa nhà.",
    "core_vocabulary": [
      { "word": "identification", "type": "n.", "meaning": "sự nhận dạng" },
      { "word": "badge", "type": "n.", "meaning": "thẻ, huy hiệu" }
    ]
  },
  {
    "id": "q1176",
    "question": "The latest smartphone model from Apex Electronics comes ______ a one-year warranty.",
    "options": {
      "A": "by",
      "B": "to",
      "C": "with",
      "D": "for"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'with' chỉ sự đi kèm cùng với vật gì đó.",
    "explanation_grammar": "Preposition 'with'.",
    "translation": "Mẫu điện thoại thông minh mới nhất của Apex Electronics đi kèm với chế độ bảo hành một năm.",
    "core_vocabulary": [
      { "word": "warranty", "type": "n.", "meaning": "bảo hành" }
    ]
  },
  {
    "id": "q1177",
    "question": "Passengers are asked to remain seated ______ the airplane comes to a complete stop.",
    "options": {
      "A": "while",
      "B": "by",
      "C": "until",
      "D": "before"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ/Liên từ 'until' chỉ sự tiếp diễn của một trạng thái cho đến một thời điểm cụ thể.",
    "explanation_grammar": "Preposition of Time (Until).",
    "translation": "Hành khách được yêu cầu ngồi yên tại chỗ cho đến khi máy bay dừng hẳn.",
    "core_vocabulary": [
      { "word": "remain seated", "type": "v.phr.", "meaning": "vẫn ngồi tại chỗ" }
    ]
  },
  {
    "id": "q1178",
    "question": "The main office of Bright Solutions is located ______ two major highways.",
    "options": {
      "A": "throughout",
      "B": "along",
      "C": "near",
      "D": "into"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'near' chỉ vị trí gần.",
    "explanation_grammar": "Preposition of Place (Near).",
    "translation": "Văn phòng chính của Bright Solutions nằm gần hai con đường cao tốc lớn.",
    "core_vocabulary": [
      { "word": "highway", "type": "n.", "meaning": "đường cao tốc" }
    ]
  },
  {
    "id": "q1179",
    "question": "______ the upcoming holiday weekend, the accounting department will close early on Friday.",
    "options": {
      "A": "In spite of",
      "B": "Because of",
      "C": "As long as",
      "D": "In order to"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ phức hợp 'Because of' đứng trước cụm danh từ chỉ lý do.",
    "explanation_grammar": "Preposition of Cause.",
    "translation": "Vì kỳ nghỉ cuối tuần sắp tới, bộ phận kế toán sẽ đóng cửa sớm vào thứ Sáu.",
    "core_vocabulary": [
      { "word": "upcoming", "type": "adj.", "meaning": "sắp tới" }
    ]
  },
  {
    "id": "q1180",
    "question": "Ms. Fischer successfully completed the project ______ the help of her dedicated team.",
    "options": {
      "A": "from",
      "B": "among",
      "C": "with",
      "D": "by"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'with' chỉ phương tiện hoặc cách thức đạt được điều gì đó (với sự giúp đỡ).",
    "explanation_grammar": "Preposition 'with'.",
    "translation": "Bà Fischer đã hoàn thành dự án thành công với sự giúp đỡ của đội ngũ tận tâm của mình.",
    "core_vocabulary": [
      { "word": "dedicated", "type": "adj.", "meaning": "tận tâm, cống hiến" }
    ]
  },
  {
    "id": "q1181",
    "question": "The CEO's keynote address will be broadcast live ______ the company intranet.",
    "options": {
      "A": "on",
      "B": "into",
      "C": "at",
      "D": "from"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'on' dùng cho các phương tiện truyền thông nội bộ hoặc internet.",
    "explanation_grammar": "Preposition of Place (Media).",
    "translation": "Bài phát biểu chính của CEO sẽ được phát trực tiếp trên mạng nội bộ của công ty.",
    "core_vocabulary": [
      { "word": "keynote address", "type": "n.phr.", "meaning": "bài phát biểu chính" },
      { "word": "intranet", "type": "n.", "meaning": "mạng nội bộ" }
    ]
  },
  {
    "id": "q1182",
    "question": "Please review the attached document ______ providing your final approval.",
    "options": {
      "A": "forward",
      "B": "prior to",
      "C": "ahead",
      "D": "instead of"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "'Prior to' là giới từ phức hợp có nghĩa là 'trước khi'.",
    "explanation_grammar": "Preposition 'Prior to'.",
    "translation": "Vui lòng xem lại tài liệu đính kèm trước khi đưa ra phê duyệt cuối cùng.",
    "core_vocabulary": [
      { "word": "prior to", "type": "prep.", "meaning": "trước khi" },
      { "word": "approval", "type": "n.", "meaning": "sự phê duyệt" }
    ]
  },
  {
    "id": "q1183",
    "question": "The new inventory tracking system was implemented ______ the entire retail store last week.",
    "options": {
      "A": "alongside",
      "B": "throughout",
      "C": "among",
      "D": "between"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'throughout' chỉ sự bao phủ toàn bộ không gian/phạm vi.",
    "explanation_grammar": "Preposition 'Throughout'.",
    "translation": "Hệ thống theo dõi hàng tồn kho mới đã được triển khai trong toàn bộ cửa hàng bán lẻ vào tuần trước.",
    "core_vocabulary": [
      { "word": "inventory", "type": "n.", "meaning": "hàng tồn kho" },
      { "word": "implemented", "type": "v.pp", "meaning": "được triển khai" }
    ]
  },
  {
    "id": "q1184",
    "question": "Mr. Rossi will be taking a leave of absence ______ personal reasons.",
    "options": {
      "A": "for",
      "B": "to",
      "C": "by",
      "D": "with"
    },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'for' chỉ mục đích hoặc lý do (vì lý do cá nhân).",
    "explanation_grammar": "Preposition of Reason.",
    "translation": "Ông Rossi sẽ nghỉ phép vì lý do cá nhân.",
    "core_vocabulary": [
      { "word": "leave of absence", "type": "n.phr.", "meaning": "nghỉ phép" }
    ]
  },
  {
    "id": "q1185",
    "question": "______ addition to his regular duties, David is now managing the social media accounts.",
    "options": {
      "A": "At",
      "B": "In",
      "C": "On",
      "D": "By"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cụm 'In addition to' (ngoài ra/thêm vào đó) là cấu trúc cố định.",
    "explanation_grammar": "Fixed Prepositional Phrase.",
    "translation": "Ngoài các công việc thường xuyên của mình, David hiện đang quản lý các tài khoản mạng xã hội.",
    "core_vocabulary": [
      { "word": "duty", "type": "n.", "meaning": "nhiệm vụ" }
    ]
  },
  {
    "id": "q1186",
    "question": "The customer service desk is conveniently situated ______ the main entrance.",
    "options": {
      "A": "as to",
      "B": "out of",
      "C": "away from",
      "D": "next to"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'next to' (bên cạnh) chỉ vị trí sát gần.",
    "explanation_grammar": "Preposition of Place.",
    "translation": "Quầy dịch vụ khách hàng nằm ở vị trí thuận tiện ngay bên cạnh cổng chính.",
    "core_vocabulary": [
      { "word": "situated", "type": "adj.", "meaning": "nằm ở, tọa lạc" }
    ]
  },
  {
    "id": "q1187",
    "question": "The manufacturing plant will shut down for maintenance ______ the first week of August.",
    "options": {
      "A": "until",
      "B": "by",
      "C": "during",
      "D": "while"
    },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'during' chỉ một khoảng thời gian diễn ra sự việc.",
    "explanation_grammar": "Preposition of Time (During).",
    "translation": "Nhà máy sản xuất sẽ tạm dừng hoạt động để bảo trì trong tuần đầu tiên của tháng Tám.",
    "core_vocabulary": [
      { "word": "maintenance", "type": "n.", "meaning": "sự bảo trì" }
    ]
  },
  {
    "id": "q1188",
    "question": "The proposal submitted by Zenith Consulting was chosen ______ its innovative approach.",
    "options": {
      "A": "regardless of",
      "B": "due to",
      "C": "except for",
      "D": "instead of"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ phức hợp 'due to' đứng trước cụm danh từ chỉ lý do.",
    "explanation_grammar": "Preposition of Cause.",
    "translation": "Đề xuất do Zenith Consulting nộp đã được chọn nhờ cách tiếp cận sáng tạo của nó.",
    "core_vocabulary": [
      { "word": "innovative", "type": "adj.", "meaning": "sáng tạo, có tính đổi mới" }
    ]
  },
  {
    "id": "q1189",
    "question": "Dr. Lee has been working at the Greenfield Clinic ______ over a decade.",
    "options": {
      "A": "since",
      "B": "in",
      "C": "during",
      "D": "for"
    },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'for' chỉ một khoảng thời gian (hơn một thập kỷ).",
    "explanation_grammar": "Preposition of Time (Duration).",
    "translation": "Tiến sĩ Lee đã làm việc tại Phòng khám Greenfield trong hơn một thập kỷ.",
    "core_vocabulary": [
      { "word": "decade", "type": "n.", "meaning": "thập kỷ (10 năm)" }
    ]
  },
  {
    "id": "q1190",
    "question": "Visitors are not allowed ______ the restricted laboratory area without an escort.",
    "options": {
      "A": "throughout",
      "B": "inside",
      "C": "among",
      "D": "between"
    },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'inside' chỉ vị trí bên trong một khu vực giới hạn.",
    "explanation_grammar": "Preposition of Place.",
    "translation": "Khách tham quan không được phép vào bên trong khu vực phòng thí nghiệm hạn chế nếu không có người đi kèm.",
    "core_vocabulary": [
      { "word": "restricted", "type": "adj.", "meaning": "bị hạn chế" },
      { "word": "escort", "type": "n.", "meaning": "người hộ tống, đi kèm" }
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
