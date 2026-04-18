const fs = require('fs');
const path = require('path');

const qs = [
  {
    "question": "Zypo properties has just signed a lease agreement with the law firm ______ offices are on the third floor.",
    "options": {
      "A": "wherever",
      "B": "what",
      "C": "whose",
      "D": "how"
    },
    "correct_answer": "C",
    "explanation_reason": "Từ cần điền là một đại từ quan hệ thay thế cho tính từ sở hữu. Danh từ 'offices' đứng ngay sau chỗ trống thuộc sở hữu của danh từ chỉ người/tổ chức phía trước ('the law firm'). Do đó dùng 'whose' (của công ty luật đó).",
    "explanation_grammar": "Danh từ + whose + Danh từ (thể hiện sự sở hữu).",
    "translation": "Zypo properties vừa ký hợp đồng cho thuê với công ty luật mà các văn phòng của họ nằm ở tầng ba.",
    "core_vocabulary": [
      { "word": "lease agreement", "type": "n.", "meaning": "hợp đồng cho thuê" },
      { "word": "law firm", "type": "n.", "meaning": "công ty luật" }
    ]
  },
  {
    "question": "Most of the people ______ attended yesterday's workshop have already submitted their feedback.",
    "options": {
      "A": "those",
      "B": "some",
      "C": "who",
      "D": "whose"
    },
    "correct_answer": "C",
    "explanation_reason": "Chỗ trống cần một đại từ quan hệ thay thế cho danh từ chỉ người 'the people' và đóng vai trò làm chủ ngữ cho động từ 'attended' phía sau. Do đó dùng 'who'.",
    "explanation_grammar": "Đại từ quan hệ 'who' thay cho danh từ chỉ người làm chủ ngữ: N(người) + who + V.",
    "translation": "Hầu hết những người tham dự buổi hội thảo ngày hôm qua đã gửi phản hồi của họ.",
    "core_vocabulary": [
      { "word": "workshop", "type": "n.", "meaning": "hội thảo" },
      { "word": "submit", "type": "v.", "meaning": "nộp, gửi" },
      { "word": "feedback", "type": "n.", "meaning": "phản hồi" }
    ]
  },
  {
    "question": "Next year, our team will have a new task, ______ is to review design portfolios.",
    "options": {
      "A": "which",
      "B": "although",
      "C": "after",
      "D": "because"
    },
    "correct_answer": "A",
    "explanation_reason": "Chỗ trống cần một đại từ quan hệ thay cho danh từ chỉ sự vật sự việc 'a new task', đồng thời có dấu phẩy đứng trước (mệnh đề quan hệ không xác định). Ta dùng 'which'.",
    "explanation_grammar": "Đại từ quan hệ 'which' thay thế cho vật sự việc, làm chủ ngữ cho mệnh đề sau dấu phẩy: , which + V.",
    "translation": "Năm tới, nhóm của chúng tôi sẽ có một nhiệm vụ mới, đó là xem xét các danh mục thiết kế.",
    "core_vocabulary": [
      { "word": "task", "type": "n.", "meaning": "nhiệm vụ" },
      { "word": "portfolio", "type": "n.", "meaning": "danh mục hồ sơ, tác phẩm" }
    ]
  },
  {
    "question": "Hemlin Corporation is looking for a sales representative ______ primary role will be expanding business in the northwest region.",
    "options": {
      "A": "whose",
      "B": "that",
      "C": "which",
      "D": "who"
    },
    "correct_answer": "A",
    "explanation_reason": "Tương tự câu 1, cụm danh từ 'primary role' (vai trò chính) thuộc về 'a sales representative' (đại diện bán hàng). Ta dùng đại từ sở hữu 'whose'.",
    "explanation_grammar": "N1 + whose + N2 (N2 thuộc sở hữu của N1). N2 ở đây vai trò là chủ ngữ của phần mệnh đề phụ.",
    "translation": "Hemlin Corporation đang tìm kiếm một đại diện bán hàng mà vai trò chính của người đó sẽ là mở rộng nền kinh doanh ở khu vực Tây Bắc.",
    "core_vocabulary": [
      { "word": "sales representative", "type": "n.", "meaning": "đại diện bán hàng" },
      { "word": "expand", "type": "v.", "meaning": "mở rộng" }
    ]
  },
  {
    "question": "Customers ______ wish to return a defective item may do so within twenty days of the date of purchase.",
    "options": {
      "A": "which",
      "B": "who",
      "C": "whose",
      "D": "whichever"
    },
    "correct_answer": "B",
    "explanation_reason": "Cần đại từ quan hệ thay cho danh từ chỉ người số nhiều 'Customers' và làm chủ ngữ cho động từ 'wish'. Dùng 'who'. ('which' chỉ định vật, 'whose' dùng cho sở hữu).",
    "explanation_grammar": "N(người) + who + V(số ít/nhiều theo N trước đó). Ở đây wish không thêm s/es vì Customers số nhiều.",
    "translation": "Khách hàng muốn trả lại một mặt hàng bị lỗi có thể làm như vậy trong vòng hai mươi ngày kể từ ngày mua.",
    "core_vocabulary": [
      { "word": "defective", "type": "adj.", "meaning": "bị lỗi, có khuyết điểm" },
      { "word": "purchase", "type": "n.", "meaning": "sự mua buôn" }
    ]
  },
  {
    "question": "Travelers _______ the local airport in Hopkins complain that there is an urgent need for more parking.",
    "options": {
      "A": "used",
      "B": "use",
      "C": "using",
      "D": "will use"
    },
    "correct_answer": "C",
    "explanation_reason": "Đây là dạng rút gọn mệnh đề quan hệ dạng chủ động. Mệnh đề gốc là 'Travelers who use...'. Rút gọn bằng cách bỏ 'who', biến động từ thành V-ing ('using').",
    "explanation_grammar": "Rút gọn mệnh đề quan hệ (Hiện tại phân từ / MĐ chủ động): V -> V-ing.",
    "translation": "Những du khách sử dụng sân bay địa phương ở Hopkins phàn nàn rằng đang có một nhu cầu cấp thiết về nhiều bãi đỗ xe hơn.",
    "core_vocabulary": [
      { "word": "urgent", "type": "adj.", "meaning": "cấp bách, khẩn cấp" },
      { "word": "parking", "type": "n.", "meaning": "bãi đỗ xe" }
    ]
  },
  {
    "question": "Orders _______ the weight limit are subject to additional shipping fees.",
    "options": {
      "A": "exceed",
      "B": "excessive",
      "C": "exceeding",
      "D": "exceeded"
    },
    "correct_answer": "C",
    "explanation_reason": "Tương tự câu trên, rút gọn mệnh đề quan hệ dạng chủ động (những đơn hàng vượt quá...). Câu gốc: 'Orders which/that exceed the weight limit'. Đổi sang 'exceeding'. Câu có chủ ngữ 'Orders', động từ chính 'are'.",
    "explanation_grammar": "Rút gọn Mệnh đề quan hệ chủ động dùng V-ing.",
    "translation": "Những đơn đặt hàng vượt quá giới hạn trọng lượng phải chịu thêm phí vận chuyển.",
    "core_vocabulary": [
      { "word": "exceed", "type": "v.", "meaning": "vượt quá" },
      { "word": "limit", "type": "n.", "meaning": "giới hạn" },
      { "word": "subject to", "type": "phr.", "meaning": "phải chịu, tùy thuộc vào" }
    ]
  },
  {
    "question": "A thunderstorm _______ by gusty winds is expected to arrive in the northeast region by late afternoon.",
    "options": {
      "A": "to accompany",
      "B": "will accompany",
      "C": "accompanying",
      "D": "accompanied"
    },
    "correct_answer": "D",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng bị động vì có dấu hiệu 'by' (bởi). Câu đầy đủ là 'A thunderstorm which is accompanied by...'. Rút gọn còn P.P (V3/ed) -> 'accompanied'.",
    "explanation_grammar": "Rút gọn mệnh đề quan hệ bị động: N + V3/ed + by O.",
    "translation": "Một cơn dông tống kéo theo bởi những cơn gió mạnh dự kiến ​​sẽ đến khu vực phía đông bắc vào cuối giờ chiều nay.",
    "core_vocabulary": [
      { "word": "thunderstorm", "type": "n.", "meaning": "cơn dông, bão có sấm chớp" },
      { "word": "accompany", "type": "v.", "meaning": "đi kèm, hộ tống" },
      { "word": "gusty", "type": "adj.", "meaning": "có gió mạnh từng cơn" }
    ]
  },
  {
    "question": "Adequate storage space is very important to companies _______ large quantities of materials.",
    "options": {
      "A": "produce",
      "B": "produced",
      "C": "producing",
      "D": "produces"
    },
    "correct_answer": "C",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng chủ động thay thế cho 'companies which produce...'. Lược bỏ đại từ và đưa verb về V-ing ('producing'). 'Companies' ở đây cũng thực hiện một hành động mang tính chủ động nên không dùng V-ed.",
    "explanation_grammar": "Rút gọn MĐQH chủ động bằng Phân từ hiện tại (V-ing).",
    "translation": "Không gian lưu trữ đầy đủ rất quan trọng đối với các công ty sản xuất nguyên liệu số lượng lớn.",
    "core_vocabulary": [
      { "word": "adequate", "type": "adj.", "meaning": "đầy đủ, thỏa đáng" },
      { "word": "storage", "type": "n.", "meaning": "sự lưu trữ" },
      { "word": "quantity", "type": "n.", "meaning": "số lượng" }
    ]
  },
  {
    "question": "Employees _______ in joining the company's sports teams should contact Meredith Lo by May 1.",
    "options": {
      "A": "interests",
      "B": "interested",
      "C": "interest",
      "D": "interesting"
    },
    "correct_answer": "B",
    "explanation_reason": "Đây là cấu trúc MĐQH rút gọn với tính từ hoặc bị động: 'Employees (who are) interested in...'. 'Interested' mang ý nghĩa 'được/có hứng thú, quan tâm'.",
    "explanation_grammar": "Tính từ 'interested' đi với giới từ 'in'. Hoặc coi như rút gọn MĐQH bị động (who are interested).",
    "translation": "Những nhân viên có hứng thú tham gia đội thể thao của công ty nên liên hệ với Meredith Lo trước ngày 1 tháng 5.",
    "core_vocabulary": [
      { "word": "interested (in)", "type": "adj.", "meaning": "quan tâm, hứng thú (với)" }
    ]
  },
  {
    "question": "Times-Gazette subscribers ------- do not receive their newspapers by 7:00 A.M. should call the Customer Service Center.",
    "options": {
      "A": "they",
      "B": "you",
      "C": "who",
      "D": "all"
    },
    "correct_answer": "C",
    "explanation_reason": "'subscribers' (người đăng ký dài hạn) là danh từ chỉ người. Theo sau là một dộng từ ('do not receive') -> Chỗ trống cần một đại từ quan hệ chủ ngữ chỉ người -> 'who'.",
    "explanation_grammar": "Thành lập Mệnh đề quan hệ: N(người) + who + V/ Trợ động từ.",
    "translation": "Những người đăng ký báo Times-Gazette không nhận được báo của họ trước 7:00 sáng nên gọi cho Trung tâm Dịch vụ Khách hàng.",
    "core_vocabulary": [
      { "word": "subscriber", "type": "n.", "meaning": "người đăng ký dài hạn" }
    ]
  },
  {
    "question": "For a list of cleaning services ------ our company offers, please check the last page of this brochure.",
    "options": {
      "A": "much",
      "B": "anyone",
      "C": "who",
      "D": "that"
    },
    "correct_answer": "D",
    "explanation_reason": "'cleaning services' (dịch vụ dọn dẹp) là danh từ chỉ vật. Phía sau là cấu trúc S+V ('our company offers...'). Ta dùng đại từ 'that' (hoặc 'which') để thay thế cho vật, đóng vai trò làm tân ngữ.",
    "explanation_grammar": "MĐQH dùng đại từ 'that' thay thế cho vật trong mệnh đề xác định: N(vật) + that + S + V.",
    "translation": "Để biết danh sách các dịch vụ vệ sinh mà công ty chúng tôi cung cấp, vui lòng kiểm tra trang cuối cùng của cuốn sách quảng cáo này.",
    "core_vocabulary": [
      { "word": "brochure", "type": "n.", "meaning": "sách/tài liệu quảng cáo" }
    ]
  },
  {
    "question": "Members of the planning committee are expected to attend all meetings, ------- occur on the first Tuesday of the month.",
    "options": {
      "A": "which",
      "B": "whoever",
      "C": "who",
      "D": "each"
    },
    "correct_answer": "A",
    "explanation_reason": "Có dấu phẩy, không dùng 'that'. Danh từ ngay trước dấu phẩy là 'meetings' (các cuộc họp) - chỉ sự vật/sự việc. Dùng đại từ 'which' làm chủ ngữ cho động từ 'occur'.",
    "explanation_grammar": "Đại từ 'which' dùng trong mệnh đề quan hệ không xác định, bổ nghĩa cho danh từ chỉ vật trước dấu phẩy.",
    "translation": "Các thành viên của ủy ban kế hoạch dự kiến ​​sẽ tham dự tất cả các cuộc họp, diễn ra vào ngày thứ Ba đầu tiên của tháng.",
    "core_vocabulary": [
      { "word": "committee", "type": "n.", "meaning": "ủy ban" },
      { "word": "occur", "type": "v.", "meaning": "xảy ra, diễn ra" }
    ]
  },
  {
    "question": "There are multiple places along the Sayulita Scenic Roadway at ------- drivers can stop and enjoy the scenery.",
    "options": {
      "A": "which",
      "B": "those",
      "C": "anyone",
      "D": "many"
    },
    "correct_answer": "A",
    "explanation_reason": "Cấu trúc giới từ + đại từ quan hệ. Danh từ phía trước là 'places' (nơi chốn, vật). 'At' sẽ đi kèm đại từ quan hệ duy nhất được phép dùng sau giới từ chỉ vật là 'which' ('at which' = 'where').",
    "explanation_grammar": "Giới từ (in/on/at) + which tương đương với trạng từ quan hệ 'where'. (Không dùng that sau giới từ).",
    "translation": "Có nhiều địa điểm dọc theo Tuyến đường ngắm cảnh Sayulita, tại đó người lái xe có thể dừng lại và thưởng thức phong cảnh.",
    "core_vocabulary": [
      { "word": "multiple", "type": "adj.", "meaning": "nhiều, phức tạp" },
      { "word": "scenic", "type": "adj.", "meaning": "thuộc về cảnh vật, đẹp mắt" },
      { "word": "scenery", "type": "n.", "meaning": "phong cảnh" }
    ]
  },
  {
    "question": "All employees who ------- drilling equipment must wear safety glasses.",
    "options": {
      "A": "operate",
      "B": "operates",
      "C": "to operate",
      "D": "is operated"
    },
    "correct_answer": "A",
    "explanation_reason": "Đại từ 'who' đang thay thế cho 'employees' (danh từ số nhiều). Do đó, động từ sau 'who' phải chia theo dạng số nhiều (không thêm s/es) -> 'operate'. (Đây là câu chủ động).",
    "explanation_grammar": "Động từ theo sau đại từ quan hệ (who/which/that) được chia dạng thích hợp (số ít/nhiều) theo danh từ mà nó thay thế.",
    "translation": "Tất cả các nhân viên vận hành thiết bị khoan đều phải đeo kính bảo hộ.",
    "core_vocabulary": [
      { "word": "operate", "type": "v.", "meaning": "vận hành, điều khiển" },
      { "word": "drilling equipment", "type": "n.", "meaning": "thiết bị khoan" }
    ]
  },
  {
    "question": "Many of the candidates ------- applied for the administrative assistant position at Ferber Systems were highly qualified.",
    "options": {
      "A": "what",
      "B": "who",
      "C": "when",
      "D": "which"
    },
    "correct_answer": "B",
    "explanation_reason": "'candidates' (ứng viên) là danh từ chỉ người. Cần đại từ quan hệ chỉ người làm chủ ngữ cho động từ 'applied'. Dùng 'who'.",
    "explanation_grammar": "N(người) + who + V(ed/cột 2 thì quá khứ) + ...",
    "translation": "Nhiều ứng viên đã nộp đơn cho vị trí trợ lý hành chính tại Ferber Systems đều có trình độ chuyên môn cao.",
    "core_vocabulary": [
      { "word": "candidate", "type": "n.", "meaning": "ứng cử viên" },
      { "word": "administrative assistant", "type": "n.", "meaning": "trợ lý hành chính" }
    ]
  },
  {
    "question": "Skytown Airlines apologized to the passengers for the delays ------- experienced.",
    "options": {
      "A": "they",
      "B": "this",
      "C": "their",
      "D": "them"
    },
    "correct_answer": "A",
    "explanation_reason": "Đây là dạng mệnh đề quan hệ đã lược bỏ đại từ quan hệ làm tân ngữ (whom/which/that). Câu đúng cần phải có dạng hoàn chỉnh: N + (which/that) + S + V(ngoại động từ). Chủ ngữ S thay cho 'passengers' ở số nhiều cần dùng đại từ 'they'. (for the delays that they experienced).",
    "explanation_grammar": "Đại từ nhân xưng đóng vai trò chủ ngữ trong MĐQH khi đại từ nối được ẩn đi.",
    "translation": "Hãng hàng không Skytown đã gửi lời xin lỗi đến các hành khách vì những sự chậm trễ họ đã gặp phải.",
    "core_vocabulary": [
      { "word": "apologize", "type": "v.", "meaning": "xin lỗi" },
      { "word": "delay", "type": "n.", "meaning": "sự chậm trễ" },
      { "word": "experience", "type": "v.", "meaning": "trải quá, gặp phải" }
    ]
  },
  {
    "question": "Hemton House on Main Street, ----- served as Lunburgh's first schoolhouse, has been designated a historical landmark.",
    "options": {
      "A": "who",
      "B": "which",
      "C": "where",
      "D": "when"
    },
    "correct_answer": "B",
    "explanation_reason": "Có dấu phẩy, cần chỉ danh từ 'Hemton House' (một vật/địa điểm). Theo sau chỗ trống là động từ 'served' (đóng vai trò), nên cần một đại từ thay thế làm chủ ngữ. Do đó dùng 'which' (Vừa chỉ vật vừa có thể làm chủ ngữ, where là trạng từ thì không đứng trước trực tiếp động từ như vậy).",
    "explanation_grammar": "Hemton House, which + V_ed (MĐQH không xác định bổ nghĩa cho vật).",
    "translation": "Hemton House dóng trên Phố Main, cái đóng vai trò như là trường học đầu tiên của Lunburgh, đã được chỉ định là một địa danh lịch sử.",
    "core_vocabulary": [
      { "word": "serve as", "type": "phr. v.", "meaning": "đóng vai trò như là" },
      { "word": "designate", "type": "v.", "meaning": "chỉ định, phong danh" },
      { "word": "landmark", "type": "n.", "meaning": "địa danh nổi bật" }
    ]
  },
  {
    "question": "The keynote speaker was J. M. Lim, ------ research on wind power has helped shape the alternative energy industry.",
    "options": {
      "A": "of",
      "B": "which",
      "C": "from",
      "D": "whose"
    },
    "correct_answer": "D",
    "explanation_reason": "Danh từ 'research' (nghiên cứu) thuộc sở hữu của tác giả tên J. M. Lim. 'whose' bổ nghĩa sự sở hữu: bài nghiên cứu của ông J. M. Lim.",
    "explanation_grammar": "N(người) + whose + N(vật thuộc sở hữu) + V...",
    "translation": "Diễn giả chính là J. M. Lim, người mà với những nghiên cứu về năng lượng gió đã giúp định hình ngành công nghiệp năng lượng thay thế.",
    "core_vocabulary": [
      { "word": "shape", "type": "v.", "meaning": "định hình, tạo hình" },
      { "word": "alternative energy", "type": "n.", "meaning": "năng lượng thay thế" }
    ]
  },
  {
    "question": "Factory personnel------- job is to operate industrial machinery must attend a safety course once a year.",
    "options": {
      "A": "that",
      "B": "whose",
      "C": "they",
      "D": "whom"
    },
    "correct_answer": "B",
    "explanation_reason": "Tương tự, cụm 'job' (công việc) thuộc về đội ngũ 'Factory personnel' (nhân viên nhà máy). Dùng đại từ sở hữu 'whose'.",
    "explanation_grammar": "Thể hiện sự sở hữu trong mệnh đề quan hệ với: whose + N.",
    "translation": "Nhân viên nhà máy người mà công việc của họ là vận hành máy móc công nghiệp phải tham gia một khóa học an toàn mỗi năm một lần.",
    "core_vocabulary": [
      { "word": "personnel", "type": "n.", "meaning": "nhân sự, nhân viên" },
      { "word": "machinery", "type": "n.", "meaning": "máy móc" }
    ]
  }
];

const filepath = path.join(__dirname, '../data/questions.js');
let content = fs.readFileSync(filepath, 'utf8');

// Find the last object to increment ID
const idMatches = [...content.matchAll(/"id":\s*"q(\d+)"/g)];
let lastId = 0;
if (idMatches.length > 0) {
  lastId = Math.max(...idMatches.map(m => parseInt(m[1])));
}

qs.forEach(q => {
  lastId++;
  q.id = "q" + lastId;
  q.grammar_type = "MĐQH";
});

// Remove closing bracket safely
content = content.replace(/\s*\}\s*\];\s*$/, '');
// Add closing brace of the last item if it was stripped
content += '\n  },\n';

// Format new questions
const formattedQs = qs.map(q => JSON.stringify(q, null, 2).split('\n').map(line => '  ' + line).join('\n'));
content += formattedQs.join(',\n') + '\n];\n';

fs.writeFileSync(filepath, content, 'utf8');
console.log("Successfully added MĐQH Test 1");
