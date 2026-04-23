const fs = require('fs');
const path = require('path');

const questions = [
  {
    "id": "q1456",
    "question": "The human resources department is interviewing the data scientist ------- developed the new predictive model for warehouse inventory.",
    "options": { "A": "what", "B": "which", "C": "whom", "D": "who" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'data scientist' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Phòng nhân sự đang phỏng vấn nhà khoa học dữ liệu người đã phát triển mô hình dự đoán mới cho hàng tồn kho trong kho.",
    "core_vocabulary": [
      { "word": "data scientist", "type": "n.", "meaning": "nhà khoa học dữ liệu" },
      { "word": "predictive model", "type": "n.", "meaning": "mô hình dự đoán" }
    ]
  },
  {
    "id": "q1457",
    "question": "The customs broker needs to verify ------- the imported electronics comply with the updated VNACCS regulations.",
    "options": { "A": "that", "B": "whose", "C": "whether", "D": "about" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whether' dùng để hỏi xem liệu việc đó có xảy ra/không (có tuân thủ hay không).",
    "explanation_grammar": "Noun Clause (Whether).",
    "translation": "Nhân viên môi giới hải quan cần xác minh xem liệu các thiết bị điện tử nhập khẩu có tuân thủ các quy định VNACCS mới nhất hay không.",
    "core_vocabulary": [
      { "word": "customs broker", "type": "n.", "meaning": "nhân viên môi giới hải quan" },
      { "word": "comply with", "type": "v.", "meaning": "tuân thủ" }
    ]
  },
  {
    "id": "q1458",
    "question": "The recent changes to the international shipping policies, ------- take effect next Monday, will impact our delivery schedules.",
    "options": { "A": "what", "B": "who", "C": "where", "D": "which" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'policies' trong mệnh đề quan hệ không giới hạn.",
    "explanation_grammar": "Non-restrictive Relative Clause.",
    "translation": "Những thay đổi gần đây đối với các chính sách vận chuyển quốc tế, vốn sẽ có hiệu lực vào thứ Hai tới, sẽ ảnh hưởng đến lịch giao hàng của chúng tôi.",
    "core_vocabulary": [
      { "word": "shipping policy", "type": "n.", "meaning": "chính sách vận chuyển" },
      { "word": "take effect", "type": "v.", "meaning": "có hiệu lực" }
    ]
  },
  {
    "id": "q1459",
    "question": "The project manager adjusted the PERT chart, ------- the team with a more realistic timeline for the software rollout.",
    "options": { "A": "provide", "B": "providing", "C": "to provide", "D": "provided" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "Dùng hiện tại phân từ (V-ing) để chỉ kết quả của hành động đứng trước.",
    "explanation_grammar": "Participle Clause for Result.",
    "translation": "Quản lý dự án đã điều chỉnh biểu đồ PERT, cung cấp cho cả nhóm một mốc thời gian thực tế hơn cho việc triển khai phần mềm.",
    "core_vocabulary": [
      { "word": "adjust", "type": "v.", "meaning": "điều chỉnh" },
      { "word": "rollout", "type": "n.", "meaning": "sự triển khai/ra mắt" }
    ]
  },
  {
    "id": "q1460",
    "question": "Employees ------- wish to attend the seminar on numerical mathematical methods should register by Friday.",
    "options": { "A": "whose", "B": "who", "C": "whom", "D": "which" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'Employees' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Những nhân viên muốn tham dự buổi hội thảo về các phương pháp toán học số nên đăng ký trước thứ Sáu.",
    "core_vocabulary": [
      { "word": "numerical", "type": "adj.", "meaning": "thuộc về số lượng/số học" }
    ]
  },
  {
    "id": "q1461",
    "question": "The new automated sorting system will be fully operational ------- at the beginning of the next fiscal quarter.",
    "options": { "A": "started", "B": "starting", "C": "starter", "D": "start" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng chủ động (starting).",
    "explanation_grammar": "Reduced Relative Clause.",
    "translation": "Hệ thống phân loại tự động mới sẽ hoạt động đầy đủ bắt đầu từ đầu quý tài chính tiếp theo.",
    "core_vocabulary": [
      { "word": "fiscal quarter", "type": "n.", "meaning": "quý tài chính" }
    ]
  },
  {
    "id": "q1462",
    "question": "Ms. Tran, ------- has been analyzing the logistics data for three years, will present her findings at the conference.",
    "options": { "A": "which", "B": "whom", "C": "whose", "D": "who" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'Ms. Tran' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Bà Tran, người đã phân tích dữ liệu hậu cần trong ba năm, sẽ trình bày những phát hiện của mình tại hội nghị.",
    "core_vocabulary": [
      { "word": "findings", "type": "n.", "meaning": "phát hiện/kết quả nghiên cứu" }
    ]
  },
  {
    "id": "q1463",
    "question": "The engineering team is investigating ------- the bisection method can be applied to optimize the packaging algorithm.",
    "options": { "A": "that", "B": "which", "C": "whom", "D": "how" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'How' dùng trong mệnh đề danh ngữ làm từ nối chỉ cách thức.",
    "explanation_grammar": "Noun Clause (How).",
    "translation": "Nhóm kỹ thuật đang điều tra cách thức áp dụng phương pháp chia đôi để tối ưu hóa thuật toán đóng gói.",
    "core_vocabulary": [
      { "word": "bisection method", "type": "n.", "meaning": "phương pháp chia đôi" },
      { "word": "algorithm", "type": "n.", "meaning": "thuật toán" }
    ]
  },
  {
    "id": "q1464",
    "question": "We are implementing a new container tracking system ------- will allow clients to monitor their shipments in real time.",
    "options": { "A": "which", "B": "what", "C": "whom", "D": "who" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'system' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Chúng tôi đang triển khai một hệ thống theo dõi container mới sẽ cho phép khách hàng giám sát các lô hàng của họ theo thời gian thực.",
    "core_vocabulary": [
      { "word": "tracking system", "type": "n.", "meaning": "hệ thống theo dõi" },
      { "word": "real time", "type": "n.", "meaning": "thời gian thực" }
    ]
  },
  {
    "id": "q1465",
    "question": "The regional director is meeting with the suppliers ------- he met at the trade show in Frankfurt last month.",
    "options": { "A": "whose", "B": "whom", "C": "which", "D": "who" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whom' thay thế cho danh từ chỉ người 'suppliers' làm tân ngữ cho động từ 'met'.",
    "explanation_grammar": "Relative Pronoun (Object).",
    "translation": "Giám đốc khu vực đang họp với các nhà cung cấp mà ông đã gặp tại triển lãm thương mại ở Frankfurt vào tháng trước.",
    "core_vocabulary": [
      { "word": "trade show", "type": "n.", "meaning": "triển lãm thương mại" }
    ]
  },
  {
    "id": "q1466",
    "question": "The budget report ------- by the finance team highlights the cost savings from the recent pallet optimization project.",
    "options": { "A": "prepares", "B": "prepared", "C": "preparing", "D": "prepare" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng bị động (prepared).",
    "explanation_grammar": "Reduced Relative Clause (Passive).",
    "translation": "Báo cáo ngân sách được chuẩn bị bởi nhóm tài chính làm nổi bật các khoản tiết kiệm chi phí từ dự án tối ưu hóa pallet gần đây.",
    "core_vocabulary": [
      { "word": "highlight", "type": "v.", "meaning": "làm nổi bật" },
      { "word": "cost savings", "type": "n.", "meaning": "khoản tiết kiệm chi phí" }
    ]
  },
  {
    "id": "q1467",
    "question": "Please ask the warehouse supervisor ------- there is enough space to store the incoming shipment of fresh produce.",
    "options": { "A": "whether", "B": "that", "C": "whose", "D": "which" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whether' dùng để hỏi xem liệu việc đó có hay không.",
    "explanation_grammar": "Noun Clause (Whether).",
    "translation": "Vui lòng hỏi giám sát kho xem liệu có đủ chỗ để lưu trữ lô hàng nông sản tươi mới sắp về hay không.",
    "core_vocabulary": [
      { "word": "fresh produce", "type": "n.", "meaning": "nông sản tươi" }
    ]
  },
  {
    "id": "q1468",
    "question": "The main server will be taken offline for maintenance ------- the IT department installs the latest security patch.",
    "options": { "A": "who", "B": "while", "C": "during", "D": "which" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'While' (trong khi) là liên từ chỉ thời gian nối hai mệnh đề.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Máy chủ chính sẽ được ngoại tuyến để bảo trì trong khi bộ phận CNTT cài đặt bản vá bảo mật mới nhất.",
    "core_vocabulary": [
      { "word": "security patch", "type": "n.", "meaning": "bản vá bảo mật" }
    ]
  },
  {
    "id": "q1469",
    "question": "Mr. Sato is the senior analyst ------- predictive regression model accurately forecasted the holiday demand surge.",
    "options": { "A": "who", "B": "whose", "C": "whom", "D": "which" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whose' thay thế cho sở hữu của 'Sato' chỉ sở hữu đối với 'model'.",
    "explanation_grammar": "Relative Pronoun (Possessive).",
    "translation": "Ông Sato là nhà phân tích cao cấp có mô hình hồi quy dự báo đã dự đoán chính xác sự tăng vọt nhu cầu trong kỳ nghỉ.",
    "core_vocabulary": [
      { "word": "forecast", "type": "v.", "meaning": "dự báo" },
      { "word": "demand surge", "type": "n.", "meaning": "sự tăng vọt nhu cầu" }
    ]
  },
  {
    "id": "q1470",
    "question": "To commend those ------- have worked overtime to clear the customs backlog, management is organizing a special luncheon.",
    "options": { "A": "which", "B": "what", "C": "who", "D": "whom" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ 'those' (chỉ người) làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Để khen ngợi những người đã làm thêm giờ để giải quyết tình trạng tồn đọng của hải quan, ban quản lý đang tổ chức một bữa tiệc trưa đặc biệt.",
    "core_vocabulary": [
      { "word": "commend", "type": "v.", "meaning": "khen ngợi/tuyên dương" },
      { "word": "backlog", "type": "n.", "meaning": "tồn đọng" }
    ]
  },
  {
    "id": "q1471",
    "question": "The revised work breakdown structure ------- by the steering committee will be distributed to all department heads tomorrow.",
    "options": { "A": "approving", "B": "approved", "C": "approves", "D": "approve" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng bị động (approved).",
    "explanation_grammar": "Reduced Relative Clause (Passive).",
    "translation": "Cấu trúc phân chia công việc đã sửa đổi được phê duyệt bởi ban chỉ đạo sẽ được gửi đến tất cả các trưởng bộ phận vào ngày mai.",
    "core_vocabulary": [
      { "word": "steering committee", "type": "n.", "meaning": "ban chỉ đạo" }
    ]
  },
  {
    "id": "q1472",
    "question": "The client called this morning to inquire ------- the 500 units of computer mainboards would be delivered to their facility.",
    "options": { "A": "when", "B": "which", "C": "that", "D": "who" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'When' dùng trong mệnh đề danh ngữ làm từ nối chỉ thời gian.",
    "explanation_grammar": "Noun Clause (When).",
    "translation": "Khách hàng đã gọi sáng nay để hỏi khi nào 500 đơn vị bo mạch chủ máy tính sẽ được giao đến cơ sở của họ.",
    "core_vocabulary": [
      { "word": "inquire", "type": "v.", "meaning": "hỏi/truy vấn" }
    ]
  },
  {
    "id": "q1473",
    "question": "The quarterly performance review, ------- was postponed due to the merger, has been rescheduled for next Thursday.",
    "options": { "A": "which", "B": "whom", "C": "who", "D": "what" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'review' làm chủ ngữ.",
    "explanation_grammar": "Non-restrictive Relative Clause.",
    "translation": "Đợt đánh giá hiệu suất hàng quý, vốn đã bị hoãn do việc sáp nhập, đã được lên lịch lại vào thứ Năm tới.",
    "core_vocabulary": [
      { "word": "performance review", "type": "n.", "meaning": "đánh giá hiệu suất" },
      { "word": "postpone", "type": "v.", "meaning": "trì hoãn" }
    ]
  },
  {
    "id": "q1474",
    "question": "Before finalizing the contract, we must ensure ------- all international trade compliance standards are met.",
    "options": { "A": "whether", "B": "whose", "C": "which", "D": "that" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'That' làm từ nối trong mệnh đề danh ngữ.",
    "explanation_grammar": "Noun Clause (That).",
    "translation": "Trước khi hoàn thiện hợp đồng, chúng ta phải đảm bảo rằng tất cả các tiêu chuẩn tuân thủ thương mại quốc tế đều được đáp ứng.",
    "core_vocabulary": [
      { "word": "compliance", "type": "n.", "meaning": "sự tuân thủ" }
    ]
  },
  {
    "id": "q1475",
    "question": "The company is currently hiring a supply chain coordinator ------- is fluent in both English and Mandarin.",
    "options": { "A": "what", "B": "who", "C": "which", "D": "whom" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'coordinator' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Công ty hiện đang tuyển dụng một điều phối viên chuỗi cung ứng người thông thạo cả tiếng Anh và tiếng Quan Thoại.",
    "core_vocabulary": [
      { "word": "fluent", "type": "adj.", "meaning": "thông thạo/trôi chảy" }
    ]
  },
  {
    "id": "q1476",
    "question": "The data visualization dashboard ------- by the analytics team yesterday provides a clear overview of our operational bottlenecks.",
    "options": { "A": "present", "B": "presenting", "C": "presents", "D": "presented" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng bị động (presented).",
    "explanation_grammar": "Reduced Relative Clause (Passive).",
    "translation": "Bảng điều khiển trực quan hóa dữ liệu được trình bày bởi nhóm phân tích hôm qua cung cấp một cái nhìn tổng quan rõ ràng về các nút thắt trong vận hành của chúng tôi.",
    "core_vocabulary": [
      { "word": "visualization", "type": "n.", "meaning": "trực quan hóa" },
      { "word": "bottleneck", "type": "n.", "meaning": "nút thắt/điểm nghẽn" }
    ]
  },
  {
    "id": "q1477",
    "question": "The operations manager needs to determine ------- of the three proposed shipping routes offers the most cost-effective solution.",
    "options": { "A": "whose", "B": "that", "C": "which", "D": "who" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' dùng để lựa chọn trong một số lượng giới hạn các phương án.",
    "explanation_grammar": "Wh-word in Noun Clause.",
    "translation": "Giám đốc vận hành cần xác định tuyến đường vận chuyển nào trong ba tuyến được đề xuất mang lại giải pháp tiết kiệm chi phí nhất.",
    "core_vocabulary": [
      { "word": "cost-effective", "type": "adj.", "meaning": "tiết kiệm chi phí/hiệu quả về chi phí" }
    ]
  },
  {
    "id": "q1478",
    "question": "Ms. Nguyen, ------- the board recently appointed as the head of logistics, will oversee the new distribution center in Ho Chi Minh City.",
    "options": { "A": "whose", "B": "whom", "C": "who", "D": "which" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whom' thay thế cho danh từ chỉ người 'Ms. Nguyen' làm tân ngữ cho động từ 'appointed'.",
    "explanation_grammar": "Relative Pronoun (Object).",
    "translation": "Bà Nguyen, người mà hội đồng quản trị gần đây đã bổ nhiệm làm trưởng bộ phận hậu cần, sẽ giám sát trung tâm phân phối mới tại Thành phố Hồ Chí Minh.",
    "core_vocabulary": [
      { "word": "oversee", "type": "v.", "meaning": "giám sát" }
    ]
  },
  {
    "id": "q1479",
    "question": "The non-disclosure agreement ------- you signed last year remains in effect even after you transition to a new role.",
    "options": { "A": "whom", "B": "what", "C": "which", "D": "who" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'agreement' làm tân ngữ cho động từ 'signed'.",
    "explanation_grammar": "Relative Pronoun (Object).",
    "translation": "Thỏa thuận không tiết lộ mà bạn đã ký năm ngoái vẫn có hiệu lực ngay cả khi bạn chuyển sang môt vai trò mới.",
    "core_vocabulary": [
      { "word": "non-disclosure agreement", "type": "n.", "meaning": "thỏa thuận không tiết lộ" }
    ]
  },
  {
    "id": "q1480",
    "question": "The technician is reviewing the server logs ------- to determine the root cause of the database synchronization failure.",
    "options": { "A": "now", "B": "already", "C": "yet", "D": "since" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Now' phù hợp với thì hiện tại tiếp diễn.",
    "explanation_grammar": "Adverb of Time.",
    "translation": "Kỹ thuật viên đang xem xét nhật ký máy chủ ngay bây giờ để xác định nguyên nhân gốc rễ của lỗi đồng bộ hóa cơ sở dữ liệu.",
    "core_vocabulary": [
      { "word": "synchronization", "type": "n.", "meaning": "sự đồng bộ hóa" }
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
  console.log('Successfully appended 25 questions for MĐQH Test 7.');
} else {
  console.error('Could not find end of array in questions.js');
}
