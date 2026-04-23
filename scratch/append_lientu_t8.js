const fs = require('fs');
const path = require('path');

const questions = [
  {
    "id": "q1336",
    "question": "The maintenance team will repair the broken elevator ______ the building is empty tonight.",
    "options": { "A": "once", "B": "during", "C": "however", "D": "due to" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Once' (một khi/ngay khi) dùng làm liên từ chỉ thời gian, nối hai mệnh đề.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Đội ngũ bảo trì sẽ sửa chữa thang máy bị hỏng ngay khi tòa nhà trống người tối nay.",
    "core_vocabulary": [
      { "word": "elevator", "type": "n.", "meaning": "thang máy" },
      { "word": "repair", "type": "v.", "meaning": "sửa chữa" }
    ]
  },
  {
    "id": "q1337",
    "question": "______ the weather conditions were poor, the outdoor team-building event was highly successful.",
    "options": { "A": "Despite", "B": "Therefore", "C": "In spite of", "D": "Even though" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Even though' (mặc dù) dùng để chỉ sự nhượng bộ, đứng trước một mệnh đề.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Mặc dù các điều kiện thời tiết rất xấu, sự kiện xây dựng đội ngũ ngoài trời đã rất thành công.",
    "core_vocabulary": [
      { "word": "weather conditions", "type": "n.", "meaning": "các điều kiện thời tiết" },
      { "word": "successful", "type": "adj.", "meaning": "thành công" }
    ]
  },
  {
    "id": "q1338",
    "question": "Please do not share your login credentials ______ a supervisor explicitly asks you to do so.",
    "options": { "A": "unless", "B": "except", "C": "without", "D": "instead of" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Unless' (trừ khi) dùng cho điều kiện phủ định, theo sau là mệnh đề.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Vui lòng không chia sẻ thông tin đăng nhập của bạn trừ khi một người giám sát yêu cầu bạn làm như vậy một cách rõ ràng.",
    "core_vocabulary": [
      { "word": "credentials", "type": "n.", "meaning": "thông tin xác thực/đăng nhập" },
      { "word": "explicitly", "type": "adv.", "meaning": "một cách rõ ràng/dứt khoát" }
    ]
  },
  {
    "id": "q1339",
    "question": "The client will not sign the contract ______ we revise the payment terms in the agreement.",
    "options": { "A": "meanwhile", "B": "until", "C": "prior", "D": "pending" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Until' (cho đến khi) chỉ mốc thời gian một trạng thái thay đổi.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Khách hàng sẽ không ký hợp đồng cho đến khi chúng tôi sửa đổi các điều khoản thanh toán trong bản thỏa thuận.",
    "core_vocabulary": [
      { "word": "revise", "type": "v.", "meaning": "sửa đổi/xem lại" },
      { "word": "payment terms", "type": "n.", "meaning": "các điều khoản thanh toán" }
    ]
  },
  {
    "id": "q1340",
    "question": "______ Ms. Alcott is leading the project, the team feels very confident about meeting the deadline.",
    "options": { "A": "As a result", "B": "Because of", "C": "Due to", "D": "Since" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Since' (vì/bởi vì) giải thích nguyên nhân, đứng trước một mệnh đề.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Vì bà Alcott đang dẫn dắt dự án, cả nhóm cảm thấy rất tự tin về việc hoàn thành đúng thời hạn.",
    "core_vocabulary": [
      { "word": "lead", "type": "v.", "meaning": "dẫn dắt/lãnh đạo" },
      { "word": "confident", "type": "adj.", "meaning": "tự tin" }
    ]
  },
  {
    "id": "q1341",
    "question": "The customer support hotline will be open on weekends ______ shoppers can get help at any time.",
    "options": { "A": "therefore", "B": "so that", "C": "because of", "D": "in order to" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'So that' (để mà) dùng để chỉ mục đích, đứng trước một mệnh đề.",
    "explanation_grammar": "Conjunction of Purpose.",
    "translation": "Đường dây nóng hỗ trợ khách hàng sẽ mở cửa vào cuối tuần để những người mua sắm có thể nhận được sự giúp đỡ bất cứ lúc nào.",
    "core_vocabulary": [
      { "word": "hotline", "type": "n.", "meaning": "đường dây nóng" }
    ]
  },
  {
    "id": "q1342",
    "question": "______ the new regulations were announced yesterday, the legal department has been extremely busy.",
    "options": { "A": "Consequently", "B": "Following", "C": "After", "D": "Then" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'After' (sau khi) chỉ trình tự thời gian giữa hai sự kiện.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Sau khi các quy định mới được công bố hôm qua, bộ phận pháp lý đã trở nên cực kỳ bận rộn.",
    "core_vocabulary": [
      { "word": "regulation", "type": "n.", "meaning": "quy định" },
      { "word": "legal department", "type": "n.", "meaning": "bộ phận pháp lý" }
    ]
  },
  {
    "id": "q1343",
    "question": "You may take an additional 15 minutes for lunch ______ you make up the time at the end of the day.",
    "options": { "A": "despite", "B": "provided that", "C": "owing to", "D": "because of" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Provided that' (miễn là) dùng để đưa ra điều kiện tiên quyết.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Bạn có thể nghỉ trưa thêm 15 phút miễn là bạn làm bù thêm thời gian đó vào cuối ngày.",
    "core_vocabulary": [
      { "word": "make up the time", "type": "phrase", "meaning": "làm bù thời gian" }
    ]
  },
  {
    "id": "q1344",
    "question": "______ the factory experienced a minor delay, the shipment will still arrive on schedule.",
    "options": { "A": "In spite of", "B": "Although", "C": "However", "D": "Despite" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Although' (mặc dù) nối hai mệnh đề chỉ sự nhượng bộ.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Mặc dù nhà máy đã trải qua một sự chậm trễ nhỏ, lô hàng vẫn sẽ đến đúng lịch trình.",
    "core_vocabulary": [
      { "word": "minor", "type": "adj.", "meaning": "nhỏ/không đáng kể" },
      { "word": "on schedule", "type": "phrase", "meaning": "đúng lịch trình/thời hạn" }
    ]
  },
  {
    "id": "q1345",
    "question": "The company will cover your travel expenses ______ you keep all the original receipts.",
    "options": { "A": "depending on", "B": "nevertheless", "C": "as long as", "D": "with" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'As long as' (miễn là) dùng để đưa ra điều kiện.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Công ty sẽ chi trả các khoản chi phí đi lại của bạn miễn là bạn giữ lại tất cả các hóa đơn gốc.",
    "core_vocabulary": [
      { "word": "original", "type": "adj.", "meaning": "gốc/nguyên bản" }
    ]
  },
  {
    "id": "q1346",
    "question": "Please remember to power off your computer ______ you leave the office this evening.",
    "options": { "A": "ahead", "B": "before", "C": "prior to", "D": "already" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Before' (trước khi) là liên từ phù hợp nối hai mệnh đề.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Vui lòng nhớ tắt máy tính của bạn trước khi bạn rời văn phòng tối nay.",
    "core_vocabulary": [
      { "word": "power off", "type": "v.", "meaning": "tắt nguồn" }
    ]
  },
  {
    "id": "q1347",
    "question": "______ Mr. Dawson was presenting the sales figures, the projector suddenly stopped working.",
    "options": { "A": "Within", "B": "While", "C": "Meanwhile", "D": "During" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'While' (trong khi) chỉ hai hành động/sự kiện xảy ra đồng thời.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Trong khi ông Dawson đang trình bày các con số doanh thu, máy chiếu đột nhiên ngừng hoạt động.",
    "core_vocabulary": [
      { "word": "sales figures", "type": "n.", "meaning": "các con số doanh thu/doanh số" }
    ]
  },
  {
    "id": "q1348",
    "question": "The HR manager will review the resumes today ______ she can select the best candidates for the interview.",
    "options": { "A": "so that", "B": "for", "C": "to", "D": "thus" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'So that' (để mà) dùng để chỉ mục đích của hành động phía trước.",
    "explanation_grammar": "Conjunction of Purpose.",
    "translation": "Quản lý nhân sự sẽ xem xét các sơ yếu lý lịch hôm nay để bà ấy có thể chọn ra những ứng viên tốt nhất cho buổi phỏng vấn.",
    "core_vocabulary": [
      { "word": "resume", "type": "n.", "meaning": "sơ yếu lý lịch" },
      { "word": "candidate", "type": "n.", "meaning": "ứng viên" }
    ]
  },
  {
    "id": "q1349",
    "question": "______ there was heavy traffic on the highway, the delivery truck arrived at the warehouse on time.",
    "options": { "A": "In spite of", "B": "Despite", "C": "However", "D": "Even though" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Even though' (mặc dù) đứng trước một mệnh đề để chỉ sự tương phản.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Mặc dù có giao thông đông đúc trên xa lộ, xe tải giao hàng vẫn đến nhà kho đúng giờ.",
    "core_vocabulary": [
      { "word": "heavy traffic", "type": "n.", "meaning": "giao thông đông đúc/tắc nghẽn" }
    ]
  },
  {
    "id": "q1350",
    "question": "You will receive an automated confirmation email ______ your payment has been processed successfully.",
    "options": { "A": "following", "B": "upon", "C": "after", "D": "shortly" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'After' (sau khi) chỉ trình tự thời gian sau một sự kiện đã hoàn tất.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Bạn sẽ nhận được một email xác nhận tự động sau khi thanh toán của bạn đã được xử lý thành công.",
    "core_vocabulary": [
      { "word": "confirmation", "type": "n.", "meaning": "sự xác nhận" },
      { "word": "process", "type": "v.", "meaning": "xử lý" }
    ]
  },
  {
    "id": "q1351",
    "question": "______ the annual conference is over, we can focus on developing our new marketing strategy.",
    "options": { "A": "Because of", "B": "Now that", "C": "Thanks to", "D": "Due to" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Now that' (vì giờ đây) dùng để giải thích lý do dựa trên tình huống hiện tại.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Vì giờ đây hội nghị hàng năm đã kết thúc, chúng ta có thể tập trung vào việc phát triển chiến lược tiếp thị mới của mình.",
    "core_vocabulary": [
      { "word": "strategy", "type": "n.", "meaning": "chiến lược" }
    ]
  },
  {
    "id": "q1352",
    "question": "The supervisor reminded everyone to wear safety goggles ______ they enter the manufacturing area.",
    "options": { "A": "despite", "B": "during", "C": "whenever", "D": "how" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Whenever' (bất cứ khi nào) chỉ sự lặp lại của một hành động cần thiết.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Người giám sát đã nhắc nhở mọi người đeo kính bảo hộ bất cứ khi nào họ đi vào khu vực sản xuất.",
    "core_vocabulary": [
      { "word": "safety goggles", "type": "n.", "meaning": "kính bảo hộ" },
      { "word": "manufacturing area", "type": "n.", "meaning": "khu vực sản xuất" }
    ]
  },
  {
    "id": "q1353",
    "question": "______ the budget proposal is approved, we will immediately start hiring new software developers.",
    "options": { "A": "During", "B": "Once", "C": "Following", "D": "Upon" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Once' (một khi) dùng làm liên từ chỉ thời gian, nối hai mệnh đề.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Một khi đề xuất ngân sách được phê duyệt, chúng tôi sẽ ngay lập tức bắt đầu tuyển dụng các nhà phát triển phần mềm mới.",
    "core_vocabulary": [
      { "word": "immediately", "type": "adv.", "meaning": "ngay lập tức" }
    ]
  },
  {
    "id": "q1354",
    "question": "The catering service will prepare vegetarian meals ______ they are requested in advance.",
    "options": { "A": "if", "B": "provided", "C": "during", "D": "with" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'If' (nếu) dùng để đưa ra điều kiện cho yêu cầu đặc biệt.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Dịch vụ cung cấp đồ ăn sẽ chuẩn bị các bữa ăn chay nếu chúng được yêu cầu trước.",
    "core_vocabulary": [
      { "word": "catering service", "type": "n.", "meaning": "dịch vụ cung cấp đồ ăn/tiệc" }
    ]
  },
  {
    "id": "q1355",
    "question": "______ the initial tests showed positive results, the research team decided to conduct further trials.",
    "options": { "A": "Therefore", "B": "Due to", "C": "Resulting in", "D": "Because" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Because' (vì) dùng ở đầu câu nối mệnh đề chỉ nguyên nhân.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Bởi vì các thử nghiệm ban đầu cho thấy kết quả khả quan, đội ngũ nghiên cứu đã quyết định tiến hành các thử nghiệm tiếp theo.",
    "core_vocabulary": [
      { "word": "positive results", "type": "n.", "meaning": "kết quả khả quan/dương tính" },
      { "word": "conduct", "type": "v.", "meaning": "tiến hành" }
    ]
  },
  {
    "id": "q1356",
    "question": "Please review the attached document carefully ______ you have any questions before the meeting.",
    "options": { "A": "so that", "B": "regarding", "C": "instead of", "D": "in case" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'In case' (trong trường hợp) chuẩn bị cho một tình huống giả định.",
    "explanation_grammar": "Conjunction of Condition.",
    "translation": "Vui lòng xem kỹ tài liệu đính kèm trong trường hợp bạn có bất kỳ câu hỏi nào trước cuộc họp.",
    "core_vocabulary": [
      { "word": "attached", "type": "adj.", "meaning": "được đính kèm" }
    ]
  },
  {
    "id": "q1357",
    "question": "The board of directors will not approve the merger ______ all financial risks are thoroughly assessed.",
    "options": { "A": "without", "B": "except", "C": "until", "D": "rather than" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Until' (cho đến khi) chỉ mốc thời gian hành động chính có thể diễn ra.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Ban giám đốc sẽ không phê duyệt việc sáp nhập cho đến khi tất cả các rủi ro tài chính được đánh giá kỹ lưỡng.",
    "core_vocabulary": [
      { "word": "assess", "type": "v.", "meaning": "đánh giá" },
      { "word": "thoroughly", "type": "adv.", "meaning": "một cách kỹ lưỡng" }
    ]
  },
  {
    "id": "q1358",
    "question": "______ the new inventory system is installed, the staff will need to undergo a brief training session.",
    "options": { "A": "Subsequently", "B": "Then", "C": "Following", "D": "After" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'After' (sau khi) chỉ trình tự thời gian nối hai mệnh đề.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Sau khi hệ thống kiểm kê mới được cài đặt, nhân viên sẽ cần trải qua một buổi đào tạo ngắn.",
    "core_vocabulary": [
      { "word": "undergo", "type": "v.", "meaning": "trải qua" }
    ]
  },
  {
    "id": "q1359",
    "question": "The retail store will open early tomorrow ______ customers can take advantage of the holiday sale.",
    "options": { "A": "because of", "B": "so that", "C": "in order to", "D": "resulting in" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'So that' (để mà) chỉ mục đích, đứng trước một mệnh đề.",
    "explanation_grammar": "Conjunction of Purpose.",
    "translation": "Cửa hàng bán lẻ sẽ mở cửa sớm vào ngày mai để khách hàng có thể tận dụng đợt giảm giá ngày lễ.",
    "core_vocabulary": [
      { "word": "take advantage of", "type": "phrase", "meaning": "tận dụng" }
    ]
  },
  {
    "id": "q1360",
    "question": "______ the CEO was very busy, he attended the retirement party for the senior accountant.",
    "options": { "A": "However", "B": "Although", "C": "Despite", "D": "In spite of" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Although' (mặc dù) chỉ sự nhượng bộ, đứng đầu câu nối mệnh đề.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Mặc dù Giám đốc điều hành rất bận rộn, ông vẫn tham dự bữa tiệc nghỉ hưu cho kế toán viên cấp cao.",
    "core_vocabulary": [
        { "word": "retirement party", "type": "n.", "meaning": "tiệc nghỉ hưu" }
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
  console.log('Successfully appended 25 questions for Test 8.');
} else {
  console.error('Could not find end of array in questions.js');
}
