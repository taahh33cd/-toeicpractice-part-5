const fs = require('fs');
const path = require('path');

const questions = [
  {
    "id": "q1236",
    "question": "Ms. Tanaka needs to review the marketing proposal ______ it is sent to the client.",
    "options": { "A": "already", "B": "prior to", "C": "soon", "D": "before" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "Dùng liên từ 'before' để chỉ thời gian trước khi một hành động khác xảy ra.",
    "explanation_grammar": "Conjunction of Time (Before).",
    "translation": "Cô Tanaka cần xem xét đề xuất tiếp thị trước khi nó được gửi cho khách hàng.",
    "core_vocabulary": [
      { "word": "proposal", "type": "n.", "meaning": "đề xuất" },
      { "word": "review", "type": "v.", "meaning": "xem xét/đánh giá" }
    ]
  },
  {
    "id": "q1237",
    "question": "Employees may work from home on Fridays ______ they have completed their weekly tasks.",
    "options": { "A": "however", "B": "provided that", "C": "due to", "D": "even if" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Provided that' (miễn là) dùng để đưa ra một điều kiện.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Nhân viên có thể làm việc tại nhà vào các ngày Thứ Sáu miễn là họ đã hoàn thành các nhiệm vụ hàng tuần của mình.",
    "core_vocabulary": [
      { "word": "provided that", "type": "conj.", "meaning": "miễn là" },
      { "word": "task", "type": "n.", "meaning": "nhiệm vụ" }
    ]
  },
  {
    "id": "q1238",
    "question": "______ the new software was expensive, Zenith Corp decided to purchase it for all departments.",
    "options": { "A": "Because of", "B": "Furthermore", "C": "Although", "D": "Despite" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Although' (mặc dù) dùng để chỉ sự nhượng bộ/tương phản giữa hai vế.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Mặc dù phần mềm mới rất đắt, Zenith Corp vẫn quyết định mua nó cho tất cả các phòng ban.",
    "core_vocabulary": [
      { "word": "purchase", "type": "v.", "meaning": "mua sắm" },
      { "word": "department", "type": "n.", "meaning": "phòng ban" }
    ]
  },
  {
    "id": "q1239",
    "question": "Mr. Henderson booked the conference room early ______ he could set up the projector.",
    "options": { "A": "as well as", "B": "therefore", "C": "in order to", "D": "so that" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'So that' (để mà) dùng để chỉ mục đích, theo sau là một mệnh đề.",
    "explanation_grammar": "Conjunction of Purpose.",
    "translation": "Ông Henderson đã đặt phòng họp sớm để ông ấy có thể lắp đặt máy chiếu.",
    "core_vocabulary": [
      { "word": "book", "type": "v.", "meaning": "đặt trước" },
      { "word": "projector", "type": "n.", "meaning": "máy chiếu" }
    ]
  },
  {
    "id": "q1240",
    "question": "The cafeteria will be closed for renovations tomorrow ______ the plumbing system needs immediate repair.",
    "options": { "A": "due to", "B": "in spite of", "C": "consequently", "D": "since" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Since' ở đây đóng vai trò là liên từ chỉ nguyên nhân (vì).",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Căng tin sẽ đóng cửa để sửa chữa vào ngày mai vì hệ thống ống nước cần được sửa chữa ngay lập tức.",
    "core_vocabulary": [
      { "word": "renovation", "type": "n.", "meaning": "sửa chữa/nâng cấp" },
      { "word": "plumbing", "type": "n.", "meaning": "hệ thống ống nước" }
    ]
  },
  {
    "id": "q1241",
    "question": "The financial report cannot be finalized ______ the regional manager returns from his business trip.",
    "options": { "A": "within", "B": "meanwhile", "C": "during", "D": "until" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Until' (cho đến khi) chỉ mốc thời gian kết thúc của một trạng thái.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Báo cáo tài chính không thể được hoàn tất cho đến khi quản lý khu vực trở về từ chuyến công tác.",
    "core_vocabulary": [
      { "word": "finalize", "type": "v.", "meaning": "hoàn tất" },
      { "word": "regional", "type": "adj.", "meaning": "thuộc về khu vực" }
    ]
  },
  {
    "id": "q1242",
    "question": "______ customers present a valid receipt, they cannot receive a full refund for returned items.",
    "options": { "A": "Unless", "B": "Therefore", "C": "Instead of", "D": "Without" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Unless' (trừ khi) tương đương với 'If not', dùng để đưa ra điều kiện tiên quyết.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Trừ khi khách hàng trình ra hóa đơn hợp lệ, họ không thể nhận được tiền hoàn lại đầy đủ cho các món hàng đã trả lại.",
    "core_vocabulary": [
      { "word": "receipt", "type": "n.", "meaning": "hóa đơn" },
      { "word": "refund", "type": "n.", "meaning": "tiền hoàn lại" }
    ]
  },
  {
    "id": "q1243",
    "question": "Please ensure all lights are turned off ______ you are leaving the building this evening.",
    "options": { "A": "as", "B": "during", "C": "however", "D": "despite" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'As' (khi/vừa lúc) dùng để chỉ hai hành động xảy ra đồng thời.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Vui lòng đảm bảo tất cả các đèn đều được tắt khi bạn rời khỏi tòa nhà tối nay.",
    "core_vocabulary": [
      { "word": "ensure", "type": "v.", "meaning": "đảm bảo" }
    ]
  },
  {
    "id": "q1244",
    "question": "Orion Tech will announce the new promotional campaign ______ the board of directors approves the budget.",
    "options": { "A": "then", "B": "after", "C": "furthermore", "D": "following" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'After' (sau khi) chỉ trình tự thời gian của hai hành động.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Orion Tech sẽ công bố chiến dịch quảng bá mới sau khi ban giám đốc phê duyệt ngân sách.",
    "core_vocabulary": [
      { "word": "announce", "type": "v.", "meaning": "công bố" },
      { "word": "approve", "type": "v.", "meaning": "phê duyệt" }
    ]
  },
  {
    "id": "q1245",
    "question": "The human resources department updated the employee handbook ______ new hires can easily understand company policies.",
    "options": { "A": "for", "B": "so that", "C": "to", "D": "therefore" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'So that' (để mà) dùng để nối với một mệnh đề chỉ mục đích.",
    "explanation_grammar": "Conjunction of Purpose.",
    "translation": "Phòng nhân sự đã cập nhật sổ tay nhân viên để nhân viên mới có thể dễ dàng hiểu các chính sách của công ty.",
    "core_vocabulary": [
      { "word": "handbook", "type": "n.", "meaning": "sổ tay" },
      { "word": "policy", "type": "n.", "meaning": "chính sách" }
    ]
  },
  {
    "id": "q1246",
    "question": "______ Mr. Schmidt prefers face-to-face meetings, his colleagues usually communicate via email.",
    "options": { "A": "While", "B": "Because of", "C": "During", "D": "In contrast" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'While' (trong khi/mặc dù) dùng để chỉ sự tương phản giữa hai ý trong cùng một câu.",
    "explanation_grammar": "Concessive/Contrast Conjunction.",
    "translation": "Trong khi ông Schmidt thích các cuộc họp trực tiếp, các đồng nghiệp của ông thường liên lạc qua email.",
    "core_vocabulary": [
      { "word": "colleague", "type": "n.", "meaning": "đồng nghiệp" },
      { "word": "face-to-face", "type": "adj.", "meaning": "trực tiếp" }
    ]
  },
  {
    "id": "q1247",
    "question": "The outdoor team-building event will be postponed to next week ______ it rains heavily tomorrow morning.",
    "options": { "A": "regardless of", "B": "because of", "C": "moreover", "D": "if" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'If' (nếu) dùng để đưa ra một giả định hoặc điều kiện.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Sự kiện xây dựng đội ngũ ngoài trời sẽ bị hoãn sang tuần tới nếu trời mưa to vào sáng mai.",
    "core_vocabulary": [
      { "word": "postpone", "type": "v.", "meaning": "trì hoãn" }
    ]
  },
  {
    "id": "q1248",
    "question": "Nova Retailers saw a significant increase in sales last month ______ they launched a successful online advertising campaign.",
    "options": { "A": "due to", "B": "nonetheless", "C": "because", "D": "resulting in" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Because' (bởi vì) dùng để nối hai mệnh đề chỉ nguyên nhân - kết quả.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Nova Retailers đã thấy một sự gia tăng đáng kể trong doanh số bán hàng tháng trước bởi vì họ đã khởi động một chiến dịch quảng cáo trực tuyến thành công.",
    "core_vocabulary": [
      { "word": "significant", "type": "adj.", "meaning": "đáng kể" },
      { "word": "launch", "type": "v.", "meaning": "khởi động/tung ra" }
    ]
  },
  {
    "id": "q1249",
    "question": "We will notify you by email ______ the updated training schedule becomes available on the company portal.",
    "options": { "A": "as soon as", "B": "quickly", "C": "during", "D": "upon" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'As soon as' (ngay khi) chỉ một hành động xảy ra ngay sau một hành động khác.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Chúng tôi sẽ thông báo cho bạn qua email ngay khi lịch đào tạo cập nhật có sẵn trên cổng thông tin công ty.",
    "core_vocabulary": [
      { "word": "notify", "type": "v.", "meaning": "thông báo" },
      { "word": "available", "type": "adj.", "meaning": "có sẵn" }
    ]
  },
  {
    "id": "q1250",
    "question": "______ the deadline is approaching rapidly, the design team remains confident about finishing the project.",
    "options": { "A": "Despite", "B": "Even though", "C": "However", "D": "In addition" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Even though' (mặc dù) dùng trước một mệnh đề để chỉ sự tương phản.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Mặc dù thời hạn đang đến gần rất nhanh, nhóm thiết kế vẫn tự tin về việc hoàn thành dự án.",
    "core_vocabulary": [
      { "word": "approach", "type": "v.", "meaning": "đến gần" },
      { "word": "confident", "type": "adj.", "meaning": "tự tin" }
    ]
  },
  {
    "id": "q1251",
    "question": "You may borrow the company laptop for your presentation ______ you return it by the end of the day.",
    "options": { "A": "depending on", "B": "nevertheless", "C": "as long as", "D": "with" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'As long as' (miễn là) dùng để đưa ra điều kiện.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Bạn có thể mượn máy tính xách tay của công ty cho bài thuyết trình của mình miễn là bạn trả lại nó vào cuối ngày.",
    "core_vocabulary": [
      { "word": "borrow", "type": "v.", "meaning": "mượn" },
      { "word": "presentation", "type": "n.", "meaning": "bài thuyết trình" }
    ]
  },
  {
    "id": "q1252",
    "question": "The warranty on the Lumina blender becomes active ______ the customer registers the product online.",
    "options": { "A": "following", "B": "once", "C": "shortly", "D": "upon" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Once' (một khi) ở đây đóng vai trò là liên từ chỉ thời gian.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Bảo hành trên máy xay Lumina có hiệu lực ngay khi khách hàng đăng ký sản phẩm trực tuyến.",
    "core_vocabulary": [
      { "word": "warranty", "type": "n.", "meaning": "bảo hành" },
      { "word": "register", "type": "v.", "meaning": "đăng ký" }
    ]
  },
  {
    "id": "q1253",
    "question": "______ the annual audit is complete, the accounting staff can resume their regular daily duties.",
    "options": { "A": "Owing to", "B": "Now that", "C": "Thanks to", "D": "Because of" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Now that' (vì giờ đây) dùng để giải thích lý do dựa trên một tình huống mới xảy ra.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Vì giờ đây cuộc kiểm toán hàng năm đã hoàn tất, nhân viên kế toán có thể tiếp tục các nhiệm vụ hàng ngày thường xuyên của họ.",
    "core_vocabulary": [
      { "word": "audit", "type": "n.", "meaning": "kiểm toán" },
      { "word": "resume", "type": "v.", "meaning": "tiếp tục/bắt đầu lại" }
    ]
  },
  {
    "id": "q1254",
    "question": "The management will not approve the requested budget increase ______ detailed financial justifications are provided.",
    "options": { "A": "without", "B": "unless", "C": "except", "D": "rather than" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Unless' (trừ khi) nối với một mệnh đề chỉ điều kiện phủ định.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Ban quản lý sẽ không phê duyệt việc tăng ngân sách được yêu cầu trừ khi các giải trình tài chính chi tiết được cung cấp.",
    "core_vocabulary": [
      { "word": "justification", "type": "n.", "meaning": "sự giải trình/biện hộ" }
    ]
  },
  {
    "id": "q1255",
    "question": "Ms. Garcia scheduled a training session for the new staff ______ they can learn how to use the scheduling software.",
    "options": { "A": "so that", "B": "in order to", "C": "regarding", "D": "thus" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'So that' (để mà) dùng để chỉ mục đích, theo sau là mệnh đề.",
    "explanation_grammar": "Conjunction of Purpose.",
    "translation": "Cô Garcia đã lên lịch một buổi đào tạo cho nhân viên mới để họ có thể học cách sử dụng phần mềm lập lịch.",
    "core_vocabulary": [
      { "word": "schedule", "type": "v./n.", "meaning": "lên lịch/lịch trình" }
    ]
  },
  {
    "id": "q1256",
    "question": "______ you sign the employment contract, please read all the terms and conditions very carefully.",
    "options": { "A": "Early", "B": "Ahead of", "C": "Before", "D": "Prior to" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Before' (trước khi) là liên từ phù hợp nhất để nối với một mệnh đề.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Trước khi bạn ký hợp đồng lao động, vui lòng đọc tất cả các điều khoản và điều kiện thật cẩn thận.",
    "core_vocabulary": [
      { "word": "contract", "type": "n.", "meaning": "hợp đồng" },
      { "word": "term", "type": "n.", "meaning": "điều khoản" }
    ]
  },
  {
    "id": "q1257",
    "question": "______ the initial prototype showed some minor flaws, Apex Industries decided to move forward with production.",
    "options": { "A": "Although", "B": "As a result", "C": "In spite of", "D": "Consequently" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Although' (mặc dù) dùng để chỉ sự nhượng bộ giữa hai mệnh đề.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Mặc dù nguyên mẫu ban đầu cho thấy một số khiếm khuyết nhỏ, Apex Industries vẫn quyết định tiến tới sản xuất.",
    "core_vocabulary": [
      { "word": "prototype", "type": "n.", "meaning": "nguyên mẫu" },
      { "word": "flaw", "type": "n.", "meaning": "khiếm khuyết/lỗi" }
    ]
  },
  {
    "id": "q1258",
    "question": "The scheduled maintenance on the servers was delayed ______ the IT department experienced an unexpected power outage.",
    "options": { "A": "therefore", "B": "since", "C": "due to", "D": "because of" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Since' (vì) dùng để giải thích lý do cho mệnh đề trước.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Việc bảo trì máy chủ theo lịch trình đã bị trì hoãn vì bộ phận CNTT đã trải qua một sự cố mất điện bất ngờ.",
    "core_vocabulary": [
      { "word": "maintenance", "type": "n.", "meaning": "bảo trì" },
      { "word": "unexpected", "type": "adj.", "meaning": "bất ngờ" }
    ]
  },
  {
    "id": "q1259",
    "question": "Please do not distribute the meeting minutes to the staff ______ Mrs. Robinson has reviewed them for accuracy.",
    "options": { "A": "pending", "B": "prior", "C": "until", "D": "ahead of" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Until' (cho đến khi) chỉ mốc thời gian hành động ở mệnh đề chính có thể thực hiện.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Vui lòng không phân phối biên bản cuộc họp cho nhân viên cho đến khi bà Robinson xem xét chúng để đảm bảo tính chính xác.",
    "core_vocabulary": [
      { "word": "distribute", "type": "v.", "meaning": "phân phối" },
      { "word": "accuracy", "type": "n.", "meaning": "sự chính xác" }
    ]
  },
  {
    "id": "q1260",
    "question": "Clearstar Agency provides flexible working hours ______ employees can maintain a healthy work-life balance.",
    "options": { "A": "so that", "B": "due to", "C": "in case of", "D": "for" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'So that' (để mà) dùng để chỉ mục đích của hành động phía trước.",
    "explanation_grammar": "Conjunction of Purpose.",
    "translation": "Clearstar Agency cung cấp giờ làm việc linh hoạt để nhân viên có thể duy trì sự cân bằng giữa công việc và cuộc sống lành mạnh.",
    "core_vocabulary": [
      { "word": "maintain", "type": "v.", "meaning": "duy trì" },
      { "word": "balance", "type": "n.", "meaning": "sự cân bằng" }
    ]
  }
];

const dataPath = 'c:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js';
let content = fs.readFileSync(dataPath, 'utf8');

// Phn tAch vA chA`n nAi dung mAi vAo tr`c mAng `A?ng du ];
const insertionIndex = content.lastIndexOf('];');
if (insertionIndex !== -1) {
  const jsonString = questions.map(q => JSON.stringify(q, null, 2)).join(',\n');
  const updatedContent = content.slice(0, insertionIndex).trim() + ',\n' + jsonString + '\n];';
  fs.writeFileSync(dataPath, updatedContent, 'utf8');
  console.log('Successfully appended 25 questions.');
} else {
  console.error('Could not find end of array in questions.js');
}
