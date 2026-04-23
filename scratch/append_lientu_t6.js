const fs = require('fs');
const path = require('path');

const questions = [
  {
    "id": "q1286",
    "question": "The accounting team needs to review all expense reports ______ they are submitted to the finance director.",
    "options": { "A": "prior to", "B": "before", "C": "already", "D": "ahead" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Before' (trước khi) là liên từ chỉ thời gian nối hai mệnh đề.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Nhóm kế toán cần xem xét tất cả các báo cáo chi phí trước khi chúng được nộp cho giám đốc tài chính.",
    "core_vocabulary": [
      { "word": "expense report", "type": "n.", "meaning": "báo cáo chi phí" },
      { "word": "submit", "type": "v.", "meaning": "nộp/đệ trình" }
    ]
  },
  {
    "id": "q1287",
    "question": "The security system will be upgraded next weekend ______ unauthorized access to the server room can be prevented.",
    "options": { "A": "unless", "B": "therefore", "C": "except", "D": "without" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Unless' (trừ khi) dùng để đưa ra điều kiện loại trừ.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Nhân viên sẽ không nhận được tiền hoàn trả cho các chi phí đi lại trừ khi họ cung cấp các hóa đơn gốc.",
    "core_vocabulary": [
      { "word": "reimbursement", "type": "n.", "meaning": "tiền hoàn trả" },
      { "word": "receipt", "type": "n.", "meaning": "hóa đơn" }
    ]
  },
  {
    "id": "q1288",
    "question": "______ the new marketing campaign was launched late, it still generated a significant amount of online traffic.",
    "options": { "A": "Despite", "B": "Although", "C": "In spite of", "D": "However" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Although' (mặc dù) dùng để chỉ sự nhượng bộ, đứng trước một mệnh đề.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Mặc dù chiến dịch tiếp thị mới được tung ra muộn, nó vẫn tạo ra một lượng truy cập trực tuyến đáng kể.",
    "core_vocabulary": [
      { "word": "launch", "type": "v.", "meaning": "tung ra/khởi động" },
      { "word": "significant", "type": "adj.", "meaning": "đáng kể" }
    ]
  },
  {
    "id": "q1289",
    "question": "______ the peak holiday season is over, retail staff can take their accumulated vacation days.",
    "options": { "A": "Now that", "B": "Thanks to", "C": "Because of", "D": "Due to" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Now that' (vì giờ đây) giải thích nguyên nhân dựa trên một tình trạng mới.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Vì giờ đây mùa lễ cao điểm đã qua, nhân viên bán lẻ có thể nghỉ những ngày phép đã tích lũy của họ.",
    "core_vocabulary": [
      { "word": "peak season", "type": "n.", "meaning": "mùa cao điểm" },
      { "word": "accumulate", "type": "v.", "meaning": "tích lũy" }
    ]
  },
  {
    "id": "q1290",
    "question": "You may request a transfer to the branch in Tokyo ______ you have worked here for at least two years.",
    "options": { "A": "owing to", "B": "because of", "C": "in spite of", "D": "provided that" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Provided that' (miễn là) dùng để đưa ra điều kiện.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Bạn có thể yêu cầu chuyển đến chi nhánh ở Tokyo miễn là bạn đã làm việc ở đây ít nhất hai năm.",
    "core_vocabulary": [
      { "word": "transfer", "type": "n./v.", "meaning": "sự thuyên chuyển/chuyển công tác" },
      { "word": "branch", "type": "n.", "meaning": "chi nhánh" }
    ]
  },
  {
    "id": "q1291",
    "question": "Mr. Clark will contact the wholesale supplier ______ he receives the updated inventory count.",
    "options": { "A": "as soon as", "B": "upon", "C": "meanwhile", "D": "following" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'As soon as' (ngay khi) chỉ mốc thời gian hành động xảy ra ngay lập tức.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Ông Clark sẽ liên lạc với nhà cung cấp bán buôn ngay sau khi ông nhận được số lượng hàng tồn kho đã cập nhật.",
    "core_vocabulary": [
      { "word": "wholesale", "type": "n./adj.", "meaning": "bán buôn" },
      { "word": "inventory", "type": "n.", "meaning": "hàng tồn kho" }
    ]
  },
  {
    "id": "q1292",
    "question": "The construction of the new warehouse will not begin ______ the city council approves the building permits.",
    "options": { "A": "during", "B": "within", "C": "until", "D": "pending" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Until' (cho đến khi) chỉ mốc thời gian hành động chính có thể bắt đầu.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Việc xây dựng nhà kho mới sẽ không bắt đầu cho đến khi hội đồng thành phố phê duyệt giấy phép xây dựng.",
    "core_vocabulary": [
      { "word": "warehouse", "type": "n.", "meaning": "nhà kho" },
      { "word": "permit", "type": "n.", "meaning": "giấy phép" }
    ]
  },
  {
    "id": "q1293",
    "question": "The HR department sent out a reminder email ______ all employees would remember the upcoming wellness seminar.",
    "options": { "A": "because of", "B": "in order to", "C": "thus", "D": "so that" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'So that' (để mà) dùng trước một mệnh đề để chỉ mục đích.",
    "explanation_grammar": "Conjunction of Purpose.",
    "translation": "Phòng nhân sự đã gửi một email nhắc nhở để tất cả nhân viên sẽ nhớ về buổi hội thảo chăm sóc sức khỏe sắp tới.",
    "core_vocabulary": [
      { "word": "reminder", "type": "n.", "meaning": "lời nhắc nhở" },
      { "word": "wellness", "type": "n.", "meaning": "sức khỏe/sự khỏe mạnh" }
    ]
  },
  {
    "id": "q1294",
    "question": "______ Ms. Gomez is the newest member of the team, she has already contributed several innovative ideas.",
    "options": { "A": "Nevertheless", "B": "Even though", "C": "Despite", "D": "Regardless of" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Even though' (mặc dù) chỉ sự tương phản giữa hai mệnh đề.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Mặc dù cô Gomez là thành viên mới nhất của nhóm, cô ấy đã đóng góp được một vài ý tưởng đổi mới.",
    "core_vocabulary": [
      { "word": "innovative", "type": "adj.", "meaning": "đổi mới/sáng tạo" }
    ]
  },
  {
    "id": "q1295",
    "question": "The automated billing system will generate an invoice ______ the customer completes the online transaction.",
    "options": { "A": "upon", "B": "once", "C": "following", "D": "shortly" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Once' (một khi/ngay khi) là liên từ chỉ thời gian phù hợp nối hai mệnh đề.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Hệ thống lập hóa đơn tự động sẽ tạo ra một hóa đơn ngay khi khách hàng hoàn thành giao dịch trực tuyến.",
    "core_vocabulary": [
      { "word": "automated", "type": "adj.", "meaning": "tự động hóa" },
      { "word": "transaction", "type": "n.", "meaning": "giao dịch" }
    ]
  },
  {
    "id": "q1296",
    "question": "BrightStar Tech decided to expand its customer support team ______ the volume of daily inquiries increased.",
    "options": { "A": "because", "B": "due to", "C": "resulting in", "D": "consequently" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Because' (vì) nối hai mệnh đề chỉ nguyên nhân.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "BrightStar Tech đã quyết định mở rộng đội ngũ hỗ trợ khách hàng vì số lượng các yêu cầu hàng ngày đã tăng lên.",
    "core_vocabulary": [
      { "word": "expand", "type": "v.", "meaning": "mở rộng" }
    ]
  },
  {
    "id": "q1297",
    "question": "______ the software engineers are fixing the server issue, the sales team will continue using the offline database.",
    "options": { "A": "Meanwhile", "B": "During", "C": "While", "D": "Through" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'While' (trong khi) chỉ hai hành động xảy ra song song.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Trong khi các kỹ sư phần mềm đang khắc phục sự cố máy chủ, đội ngũ bán hàng sẽ tiếp tục sử dụng cơ sở dữ liệu ngoại tuyến.",
    "core_vocabulary": [
      { "word": "database", "type": "n.", "meaning": "cơ sở dữ liệu" }
    ]
  },
  {
    "id": "q1298",
    "question": "The regional manager will visit the new facility in Seattle ______ she can find a suitable flight next Monday.",
    "options": { "A": "if", "B": "moreover", "C": "due to", "D": "regardless of" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'If' (nếu) đưa ra điều kiện cho chuyến thăm.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Quản lý khu vực sẽ đến thăm cơ sở mới ở Seattle nếu bà ấy có thể tìm được mộ chuyến bay phù hợp vào Thứ Hai tới.",
    "core_vocabulary": [
      { "word": "facility", "type": "n.", "meaning": "cơ sở/tiện ích" }
    ]
  },
  {
    "id": "q1299",
    "question": "Employees must securely lock their workstations ______ they leave the office for the day.",
    "options": { "A": "subsequently", "B": "following", "C": "then", "D": "after" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'After' (sau khi) chỉ trình tự thời gian giữa hai hành động.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Nhân viên phải khóa chặt các máy trạm của họ sau khi họ rời văn phòng vào cuối ngày.",
    "core_vocabulary": [
      { "word": "workstation", "type": "n.", "meaning": "máy trạm/vị trí làm việc" }
    ]
  },
  {
    "id": "q1300",
    "question": "Please keep a printed copy of the presentation ______ the projector malfunctions during the client meeting.",
    "options": { "A": "in case", "B": "due to", "C": "so that", "D": "provided that" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'In case' (phòng khi) chuẩn bị cho một tình huống giả định có thể xảy ra.",
    "explanation_grammar": "Conjunction of Condition.",
    "translation": "Vui lòng giữ một bản in của bài thuyết trình phòng khi máy chiếu bị hỏng trong cuộc họp với khách hàng.",
    "core_vocabulary": [
      { "word": "malfunction", "type": "v./n.", "meaning": "trục trặc/lỗi vận hành" }
    ]
  },
  {
    "id": "q1301",
    "question": "Guests can use the hotel swimming pool and fitness center ______ they display their room key cards.",
    "options": { "A": "with", "B": "furthermore", "C": "depending on", "D": "as long as" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'As long as' (miễn là) đưa ra điều kiện để sử dụng dịch vụ.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Khách có thể sử dụng hồ bơi và trung tâm thể hình của khách sạn miễn là họ xuất trình thẻ khóa phòng của mình.",
    "core_vocabulary": [
      { "word": "fitness center", "type": "n.", "meaning": "trung tâm thể hình" }
    ]
  },
  {
    "id": "q1302",
    "question": "______ the main entrance is currently under repair, all visitors must use the side doors.",
    "options": { "A": "Since", "B": "Therefore", "C": "Because of", "D": "Due to" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Since' (vì) dùng làm liên từ chỉ nguyên nhân khởi đầu câu.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Vì cổng chính hiện đang được sửa chữa, tất cả khách tham quan phải sử dụng các cửa phụ.",
    "core_vocabulary": [
      { "word": "entrance", "type": "n.", "meaning": "lối vào/cổng" }
    ]
  },
  {
    "id": "q1303",
    "question": "Ms. Lin needs to finish the quarterly budget report ______ she leaves for her annual vacation next week.",
    "options": { "A": "ahead of", "B": "before", "C": "already", "D": "prior to" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Before' (trước khi) là liên từ phù hợp nối hai mệnh đề.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Cô Lin cần hoàn thành báo cáo ngân sách hàng quý trước khi cô ấy lên đường đi nghỉ hàng năm vào tuần tới.",
    "core_vocabulary": [
      { "word": "quarterly", "type": "adj./adv.", "meaning": "hàng quý" }
    ]
  },
  {
    "id": "q1304",
    "question": "The IT technician installed a firewall upgrade ______ the company's confidential data could be better protected.",
    "options": { "A": "so that", "B": "due to", "C": "for", "D": "therefore" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'So that' (để mà) dùng để chỉ mục đích, đứng trước một mệnh đề.",
    "explanation_grammar": "Conjunction of Purpose.",
    "translation": "Kỹ thuật viên CNTT đã cài đặt một bản nâng cấp tường lửa để các dữ liêu bảo mật của công ty có thể được bảo vệ tốt hơn.",
    "core_vocabulary": [
      { "word": "confidential", "type": "adj.", "meaning": "bảo mật/tin cậy" }
    ]
  },
  {
    "id": "q1305",
    "question": "The shipping company cannot guarantee overnight delivery ______ the package is dropped off by 5:00 PM.",
    "options": { "A": "except", "B": "without", "C": "unless", "D": "rather than" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Unless' (trừ khi) đưa ra điều kiện tiên quyết.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Công ty vận chuyển không thể đảm bảo giao hàng qua đêm trừ khi kiện hàng được gửi trước 5 giờ chiều.",
    "core_vocabulary": [
      { "word": "guarantee", "type": "v./n.", "meaning": "đảm bảo/cam kết" }
    ]
  },
  {
    "id": "q1306",
    "question": "______ the initial sales figures were somewhat disappointing, the product eventually became a bestseller.",
    "options": { "A": "However", "B": "In spite of", "C": "Although", "D": "Despite" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Although' (mặc dù) chỉ sự tương phản giữa hai mệnh đề.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Mặc dù các số liệu doanh số bán hàng ban đầu hơi đáng thất vọng, sản phẩm cuối cùng đã trở thành một sản phẩm bán chạy nhất.",
    "core_vocabulary": [
      { "word": "disappointing", "type": "adj.", "meaning": "đáng thất vọng" },
      { "word": "eventually", "type": "adv.", "meaning": "cuối cùng" }
    ]
  },
  {
    "id": "q1307",
    "question": "Please do not restart your computer ______ the software installation process reaches one hundred percent.",
    "options": { "A": "during", "B": "prior", "C": "until", "D": "meanwhile" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Until' (cho đến khi) chỉ mốc thời gian kết thúc của lệnh cấm.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Vui lòng không khởi động lại máy tính của bạn cho đến khi quá trình cài đặt phần mềm đạt tới 100%.",
    "core_vocabulary": [
      { "word": "restart", "type": "v.", "meaning": "khởi động lại" }
    ]
  },
  {
    "id": "q1308",
    "question": "You will receive a 15% discount on your next purchase ______ you sign up for our weekly newsletter.",
    "options": { "A": "as well as", "B": "owing to", "C": "because of", "D": "provided that" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Provided that' (miễn là/với điều kiện là) đưa ra điều kiện cho ưu đãi.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Bạn sẽ được giảm giá 15% cho lần mua hàng tiếp theo miễn là bạn đăng ký nhận bản tin hàng tuần của chúng tôi.",
    "core_vocabulary": [
      { "word": "newsletter", "type": "n.", "meaning": "bản tin" }
    ]
  },
  {
    "id": "q1309",
    "question": "The outdoor corporate picnic was relocated to the indoor cafeteria ______ heavy thunderstorms were forecasted.",
    "options": { "A": "nevertheless", "B": "as a result of", "C": "because", "D": "due to" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Because' (vì) nối mệnh đề chỉ nguyên nhân.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Buổi dã ngoại ngoài trời của công ty đã được chuyển vào căng tin trong nhà vì có dự báo về các cơn giông bão lớn.",
    "core_vocabulary": [
      { "word": "relocate", "type": "v.", "meaning": "di chuyển/thay đổi vị trí" }
    ]
  },
  {
    "id": "q1310",
    "question": "The project supervisor will assign specific tasks to each team member ______ the client approves the final design.",
    "options": { "A": "following", "B": "upon", "C": "shortly", "D": "once" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Once' (một khi/ngay khi) chỉ mốc thời gian hành động sẽ diễn ra.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Người giám sát dự án sẽ giao các nhiệm vụ cụ thể cho từng thành viên trong nhóm ngay khi khách hàng phê duyệt thiết kế cuối cùng.",
    "core_vocabulary": [
      { "word": "assign", "type": "v.", "meaning": "giao phó/chỉ định" }
    ]
  }
];

const dataPath = 'c:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js';
let content = fs.readFileSync(dataPath, 'utf8');

const insertionIndex = content.lastIndexOf('];');
if (insertionIndex !== -1) {
  const jsonString = questions.map(q => JSON.stringify(q, null, 2)).join(',\n');
  const updatedContent = content.slice(0, insertionIndex).trim() + ',\n' + jsonString + '\n];';
  fs.writeFileSync(dataPath, updatedContent, 'utf8');
  console.log('Successfully appended 25 questions for Test 6.');
} else {
  console.error('Could not find end of array in questions.js');
}
