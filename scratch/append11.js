const fs = require('fs');
let code = fs.readFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'utf8');
code = code.replace('window.questionsData =', 'global.questionsData =');
eval(code);

const nq = [
  {
    "id": "q231",
    "question": "Zypo properties has just signed a lease agreement with the law firm ______ offices are on the third floor.",
    "options": { "A": "how", "B": "what", "C": "wherever", "D": "whose" },
    "correct_answer": "D",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Chỗ khoảng trống cần điền một đại từ quan hệ dùng làm từ hạn định sở hữu cách. 'whose offices' (những văn phòng CỦA HỌ).",
    "explanation_grammar": "Danh từ 1 + whose + Danh từ 2. (Danh từ 2 thuộc sở hữu của Danh từ 1).",
    "translation": "Hãng bất động sản Zypo Properties vừa mới ký một hợp đồng cho thuê với công ty luật, nơi mà có các văn phòng nằm trên tầng 3.",
    "core_vocabulary": [{"word": "lease agreement", "type": "n.", "meaning": "hợp đồng cho thuê"}, {"word": "firm", "type": "n.", "meaning": "công ty/ tổ chức"}]
  },
  {
    "id": "q232",
    "question": "Most of the people ______ attended yesterday’s workshop have already submitted their feedback.",
    "options": { "A": "some", "B": "who", "C": "those", "D": "whose" },
    "correct_answer": "B",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Đại từ quan hệ thay thế làm chủ ngữ chỉ người cho 'the people'. Do đó dùng 'who'.",
    "explanation_grammar": "The people + who + Verb.",
    "translation": "Hầu hết những người mà đã tham dự hội thảo ngày hôm qua thì đều đã nộp lại phản hồi của họ.",
    "core_vocabulary": [{"word": "feedback", "type": "n.", "meaning": "sự phản hồi"}]
  },
  {
    "id": "q233",
    "question": "Next year, our team will have a new task, ______ is to review design portfolios.",
    "options": { "A": "which", "B": "because", "C": "although", "D": "after" },
    "correct_answer": "A",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Dấu phẩy báo hiệu mệnh đề quan hệ không xác định, kết hợp với ý bổ nghĩa cho 'a new task' (chỉ sự vật). Đại từ 'which' sẽ được dùng.",
    "explanation_grammar": ", Which ... (dùng để thay thế cho cả cụm danh từ chỉ vật phía trước dấu phẩy).",
    "translation": "Vào năm tới, nhóm của chúng ta sẽ có một nhiệm vụ mới, đó là duyệt lại các tập hồ sơ thiết kế.",
    "core_vocabulary": [{"word": "portfolio", "type": "n.", "meaning": "tập hồ sơ năng lực"}]
  },
  {
    "id": "q234",
    "question": "Hemlin Corporation is looking for a sales representative ______ primary role will be expanding business in the northwest region.",
    "options": { "A": "whose", "B": "that", "C": "which", "D": "who" },
    "correct_answer": "A",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Quan hệ giữa 'người đại diện' và 'vai trò chính' là quan hệ sở hữu, nên ta dùng 'whose primary role' (vai trò CỦA NGƯỜI ĐÓ).",
    "explanation_grammar": "Noun(Chủ nhân) + whose + Noun(Bị sở hữu).",
    "translation": "Tập đoàn Hemlin đang tìm kiếm một đại diện bán hàng mà vai trò chính của người đó sẽ là mở rộng kinh doanh tại khu vực tây bắc.",
    "core_vocabulary": [{"word": "representative", "type": "n.", "meaning": "người đại diện"}]
  },
  {
    "id": "q235",
    "question": "Customers ______ wish to return a defective item may do so within twenty days of the date of purchase.",
    "options": { "A": "whichever", "B": "whose", "C": "who", "D": "which" },
    "correct_answer": "C",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "'Customers' là danh từ chỉ người đóng vai trò Chủ ngữ của câu -> Dùng đại từ 'who'.",
    "explanation_grammar": "Noun (chỉ người) + who + Verb...",
    "translation": "Những quý khách hàng nào có mong muốn trả lại món hàng bị lỗi thì có quyền làm vậy trong vòng 20 ngày kể từ ngày mua hàng.",
    "core_vocabulary": [{"word": "defective", "type": "adj.", "meaning": "lỗi, hỏng hóc"}]
  },
  {
    "id": "q236",
    "question": "Travelers _______ the local airport in Hopkins complain that there is an urgent need for more parking.",
    "options": { "A": "will use", "B": "used", "C": "using", "D": "use" },
    "correct_answer": "C",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Mẫu câu rút gọn mệnh đề quan hệ dạng Chủ động. Câu đầy đủ: Travelers [who use] the local airport... -> Rút gọn lại thành: Travelers [using]...",
    "explanation_grammar": "Rút gọn mệnh đề quan hệ dạng Chủ Động = V-ing.",
    "translation": "Những du khách sử dụng sân bay địa phương ở Hopkins phàn nàn rằng đang có một nhu cầu cấp thiết về việc mở rộng bãi đỗ xe.",
    "core_vocabulary": [{"word": "complain", "type": "v.", "meaning": "phàn nàn, khiếu nại"}]
  },
  {
    "id": "q237",
    "question": "Orders _______ the weight limit are subject to additional shipping fees.",
    "options": { "A": "exceeded", "B": "exceeding", "C": "excessive", "D": "exceed" },
    "correct_answer": "B",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Rút gọn mệnh đề quan hệ Chủ động. 'Orders' tự động thực hiện việc 'vượt quá' (exceed): Orders [which exceed] -> Orders exceeding...",
    "explanation_grammar": "Noun + V-ing (khi danh từ trực tiếp thực hiện hành động).",
    "translation": "Các đơn hàng vượt quá giới hạn trọng lượng cho phép sẽ phải chịu thêm các khoản phí vận chuyển phụ thu.",
    "core_vocabulary": [{"word": "are subject to", "type": "phr.", "meaning": "phải chịu, phải phụ thuộc vào"}]
  },
  {
    "id": "q238",
    "question": "A thunderstorm _______ by gusty winds is expected to arrive in the northeast region by late afternoon.",
    "options": { "A": "accompanied", "B": "to accompany", "C": "accompanying", "D": "will accompany" },
    "correct_answer": "A",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Mệnh đề quan hệ rút gọn thể Bị Động 'cơn bão được theo kèm bởi'. Dấu hiệu nhận biết là giới từ 'by'. A thunderstorm [which is accompanied by] -> A thunderstorm accompanied by...",
    "explanation_grammar": "Rút gọn mệnh đề Bị Động = V_ed/V_3.",
    "translation": "Một cơn bão lớn đi kèm theo những trận gió giật mạnh được dự báo sẽ ập tới khu vực đông bắc vào khoảng đầu giờ chiều muộn.",
    "core_vocabulary": [{"word": "accompany", "type": "v.", "meaning": "đi kèm, hộ tống"}]
  },
  {
    "id": "q239",
    "question": "Adequate storage space is very important to companies _______ large quantities of materials.",
    "options": { "A": "producing", "B": "produced", "C": "produces", "D": "produce" },
    "correct_answer": "A",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Rút gọn Mệnh đề quan hệ Chủ Động (các Công ty ĐANG SẢN XUẤT): Companies [which produce] large quantities... -> Companies producing...",
    "explanation_grammar": "Bỏ đại từ quan hệ và tobe -> Dùng V-ing.",
    "translation": "Không gian lưu trữ kho bãi đầy đủ là một điều rất quan trọng đối với các công ty sản xuất nguyên vật liệu với số lượng lớn.",
    "core_vocabulary": [{"word": "produce", "type": "v.", "meaning": "sản xuất"}]
  },
  {
    "id": "q240",
    "question": "Employees _______ in joining the company's sports teams should contact Meredith Lo by May 1.",
    "options": { "A": "interested", "B": "interests", "C": "interest", "D": "interesting" },
    "correct_answer": "A",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Rút gọn Bị động kinh điển của tính từ chỉ tính chất thụ động: Employees [who are interested in] -> Employees interested in.",
    "explanation_grammar": "Lược bỏ đại từ + tobe, giữ lại V-ed/Adjective.",
    "translation": "Những nhân viên nào có hứng thú với việc tham gia vào các đội thể thao của công ty thì nên liên hệ cho Meredith Lo trước ngày mùng 1 tháng 5.",
    "core_vocabulary": [{"word": "be interested in", "type": "phr.", "meaning": "có hứng thú/ quan tâm tới"}]
  },
  {
    "id": "q241",
    "question": "Times-Gazette subscribers ------- do not receive their newspapers by 7:00 A.M. should call the Customer Service Center.",
    "options": { "A": "who", "B": "you", "C": "all", "D": "they" },
    "correct_answer": "A",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Danh từ 'subscribers' đứng ngay trước khoảng trống. Quan hệ từ trỏ chỉ nhóm Người đóng vai trò chủ ngữ -> 'who' (Những ai mà...).",
    "explanation_grammar": "Noun(Chỉ Người) + who + Verb.",
    "translation": "Những người dùng đăng ký theo dõi tòa báo Times-Gazette mà không nhận được báo của họ gửi tới nhà trước 7:00 sáng thì nên gọi cho Trung tâm Dịch vụ Chăm sóc Khách hàng.",
    "core_vocabulary": [{"word": "subscriber", "type": "n.", "meaning": "người đăng ký theo dõi"}]
  },
  {
    "id": "q242",
    "question": "For a list of cleaning services ------ our company offers, please check the last page of this brochure.",
    "options": { "A": "who", "B": "anyone", "C": "that", "D": "much" },
    "correct_answer": "C",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Bổ nghĩa cho 'cleaning services' (vật/dịch vụ). Dùng 'which' hoặc 'that' đóng vai trò tân ngữ.",
    "explanation_grammar": "Noun(Vật) + Which / That + Mệnh đề (S + V).",
    "translation": "Để tham khảo danh sách các dịch vụ dọn dẹp mà công ty chúng tôi cung cấp, vui lòng kiểm tra tại trang cuối cùng của cuốn sách tài liệu nhỏ này.",
    "core_vocabulary": [{"word": "brochure", "type": "n.", "meaning": "tờ gấp/ sách mỏng in thông tin"}]
  },
  {
    "id": "q243",
    "question": "Members of the planning committee are expected to attend all meetings, ------- occur on the first Tuesday of the month.",
    "options": { "A": "each", "B": "which", "C": "who", "D": "whoever" },
    "correct_answer": "B",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Mệnh đề quan hệ không xác định cách ngăn bởi dấu phẩy, dùng thay thế cho vật (all meetings). Ta dùng Which làm chủ ngữ.",
    "explanation_grammar": ", Which ...",
    "translation": "Các thành viên của ủy ban kế hoạch được kỳ vọng là sẽ tham dự mọi cuộc họp, những buổi mà thường sẽ diễn ra vào ngày thứ Ba đầu tiên của tháng.",
    "core_vocabulary": [{"word": "occur", "type": "v.", "meaning": "diễn ra, xảy ra"}]
  },
  {
    "id": "q244",
    "question": "There are multiple places along the Sayulita Scenic Roadway at ------- drivers can stop and enjoy the scenery.",
    "options": { "A": "many", "B": "those", "C": "which", "D": "anyone" },
    "correct_answer": "C",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Cấu trúc 'Giới từ + Which' dùng để thay thế cho trạng từ quan hệ. At which = where (tại cái nơi đó mà).",
    "explanation_grammar": "Vi trí/Nơi chốn + at in on + which + S +V",
    "translation": "Có rất nhiều địa điểm nằm dọc theo Cung đường ngắm cảnh Sayulita, tại nơi đó các tài xế có thể dừng xe lại và tận hưởng cảnh quan.",
    "core_vocabulary": [{"word": "scenery", "type": "n.", "meaning": "phong cảnh, quang cảnh"}]
  },
  {
    "id": "q245",
    "question": "All employees who ------- drilling equipment must wear safety glasses.",
    "options": { "A": "is operated", "B": "operates", "C": "to operate", "D": "operate" },
    "correct_answer": "D",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Mệnh đề 'who' thay cho 'All employees' (số nhiều), nên động từ theo sau phải bám sát thì hiện tại đơn ở dạng số nhiều nguyên mẫu.",
    "explanation_grammar": "Who + V (chủ ngữ danh từ số nhiều thì V không chia s/es).",
    "translation": "Tất cả các nhân viên mà có thao tác vận hành trên các thiết bị máy khoan thì đều bắt buộc phải mang đeo kính bảo hộ an toàn.",
    "core_vocabulary": [{"word": "operate", "type": "v.", "meaning": "thao tác vận hành"}]
  },
  {
    "id": "q246",
    "question": "Many of the candidates ------- applied for the administrative assistant position at Ferber Systems were highly qualified.",
    "options": { "A": "who", "B": "which", "C": "when", "D": "what" },
    "correct_answer": "A",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Cần một đại từ để thay thay thế cho 'candidates' (Ứng cử viên). Do đây là danh từ chỉ người đứng làm chủ ngữ của động từ apply. Chắc chắn là Who.",
    "explanation_grammar": "Danh từ 1(Chủ ngữ chỉ Người) + Who + Động từ.",
    "translation": "Rất nhiều ứng cử viên, những người mà đã nộp đơn ứng tuyển cho vị trí trợ lý phòng hành chính tại Ferber Systems thì đều có năng lực đạt chuẩn chất lượng rất cao.",
    "core_vocabulary": [{"word": "highly qualified", "type": "adj.", "meaning": "đạt trình độ tiêu chuẩn cao"}]
  },
  {
    "id": "q247",
    "question": "Skytown Airlines apologized to the passengers for the delays ------- experienced.",
    "options": { "A": "this", "B": "their", "C": "them", "D": "they" },
    "correct_answer": "D",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Dạng rút gọn đại từ (That/Which) trong mệnh đề quan hệ khi đại từ làm Tân Ngữ. Câu đầy đủ: The delays [which] they experienced. -> Rút gọn đi thành: The delays they experienced.",
    "explanation_grammar": "Lược bỏ đại từ quan hệ (Khi nó làm Tân ngữ cho động từ vế sau).",
    "translation": "Hãng hàng không Skytown Airlines vừa mới chính thức gửi lời xin lỗi đến các hành khách về những sự cố chậm trễ chuyến bay mà họ đã phải chịu đựng trải qua.",
    "core_vocabulary": [{"word": "apologize", "type": "v.", "meaning": "xin lỗi, tạ lỗi"}]
  },
  {
    "id": "q248",
    "question": "Hemton House on Main Street, ----- served as Lunburgh's first schoolhouse, has been designated a historical landmark.",
    "options": { "A": "who", "B": "which", "C": "when", "D": "where" },
    "correct_answer": "B",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Hemton House là một vật thể đóng vai trò Chủ Ngữ ở vế tiếp theo và đứng sau dấu phẩy. Từ đại diện chỉ sự vật là 'which'.",
    "explanation_grammar": ", Which ...",
    "translation": "Tòa nhà Hemton House nằm trên tuyến phố Main Street, cái tòa nhà mà cũng đồng thời từng là trường học đầu tiên của Lunburgh, nay đã chính thức được thiết định trở thành một cột mốc di tích mang tính lịch sử.",
    "core_vocabulary": [{"word": "schoolhouse", "type": "n.", "meaning": "ngôi trường, trường học"}]
  },
  {
    "id": "q249",
    "question": "The keynote speaker was J. M. Lim, ------ research on wind power has helped shape the alternative energy industry.",
    "options": { "A": "whose", "B": "which", "C": "of", "D": "from" },
    "correct_answer": "A",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Có danh từ 'research' đứng ngay sau khoảng trống tạo ra mối quan hệ sở hữu đối với 'J. M. Lim': 'Nghiên cứu CỦA AI ĐÓ' -> whose research.",
    "explanation_grammar": "Noun(Chủ Thể) + Whose + Noun(Vật bị sở hữu).",
    "translation": "Diễn giả chính là ông J.M. Lim, người mà với những bài luận nghiên cứu của mình về năng lượng gió đó đã phụ giúp định hình nên một cả ngành công nghiệp năng lượng thay thế.",
    "core_vocabulary": [{"word": "keynote speaker", "type": "n.", "meaning": "diễn giả chính"}]
  },
  {
    "id": "q250",
    "question": "Factory personnel------- job is to operate industrial machinery must attend a safety course once a year.",
    "options": { "A": "that", "B": "whose", "C": "they", "D": "whom" },
    "correct_answer": "B",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Tương tự như câu 249, đây lại là một dạng sở hữu cách thông qua chữ 'job'. Job này ám chỉ CÔNG VIỆC CỦA NHỮNG CÔNG NHÂN ('personnel'). Điền ngay 'whose job'.",
    "explanation_grammar": "Noun_A + Whose + Noun_B.",
    "translation": "Những tay công nhân lao động nhân viên ở xưởng máy mà cái phần việc của họ là phải vận hành thao tác các dàn máy móc công nghiệp thì đều bị yêu cầu bắt buộc tham gia một khóa học về độ an toàn lao động với tần suất một lần một năm.",
    "core_vocabulary": [{"word": "industrial machinery", "type": "n.", "meaning": "hệ thống máy móc chuyên dụng trong nghiệp"}]
  }
];

global.questionsData = global.questionsData.concat(nq);

fs.writeFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'window.questionsData = ' + JSON.stringify(global.questionsData, null, 2) + ';');
