const fs = require('fs');
const path = require('path');

const questions = [
  {
    "id": "q1431",
    "question": "The supply chain director is looking for a data analyst ------- can help optimize our international shipping routes.",
    "options": { "A": "who", "B": "which", "C": "whom", "D": "what" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'analyst' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Giám đốc chuỗi cung ứng đang tìm kiếm một nhà phân tích dữ liệu có thể giúp tối ưu hóa các tuyến vận chuyển quốc tế của chúng tôi.",
    "core_vocabulary": [
      { "word": "shipping route", "type": "n.", "meaning": "tuyến vận chuyển" },
      { "word": "optimize", "type": "v.", "meaning": "tối ưu hóa" }
    ]
  },
  {
    "id": "q1432",
    "question": "The new customs declaration software, ------- usually takes two hours to process, has been updated to run in minutes.",
    "options": { "A": "what", "B": "which", "C": "where", "D": "who" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'software' trong mệnh đề quan hệ không giới hạn.",
    "explanation_grammar": "Non-restrictive Relative Clause.",
    "translation": "Phần mềm khai báo hải quan mới, vốn thường mất hai giờ để xử lý, đã được cập nhật để chạy trong vài phút.",
    "core_vocabulary": [
      { "word": "customs declaration", "type": "n.", "meaning": "khai báo hải quan" }
    ]
  },
  {
    "id": "q1433",
    "question": "Management needs to evaluate ------- the new VNACCS/VCIS integration will improve overall clearance productivity.",
    "options": { "A": "whose", "B": "that", "C": "whether", "D": "about" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whether' dùng trong mệnh đề danh ngữ để chỉ sự lựa chọn/nghi vấn.",
    "explanation_grammar": "Noun Clause (Whether).",
    "translation": "Ban quản lý cần đánh giá xem liệu việc tích hợp VNACCS/VCIS mới có cải thiện năng suất thông quan tổng thể hay không.",
    "core_vocabulary": [
      { "word": "clearance", "type": "n.", "meaning": "thông quan" }
    ]
  },
  {
    "id": "q1434",
    "question": "After reviewing the shipping budget, Ms. Albright decided to consolidate the cargo, ------- transportation costs significantly.",
    "options": { "A": "to be reduced", "B": "reducing", "C": "reduce", "D": "reduced" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "Dùng hiện tại phân từ (V-ing) để chỉ kết quả của hành động đứng trước.",
    "explanation_grammar": "Participle Clause for Result.",
    "translation": "Sau khi xem xét ngân sách vận chuyển, bà Albright đã quyết định hợp nhất hàng hóa, giúp giảm đáng kể chi phí vận chuyển.",
    "core_vocabulary": [
      { "word": "consolidate", "type": "v.", "meaning": "hợp nhất/gom hàng" }
    ]
  },
  {
    "id": "q1435",
    "question": "Logistics coordinators ------- require an extension on their container loading times must contact the port authority immediately.",
    "options": { "A": "whose", "B": "who", "C": "whom", "D": "which" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'coordinators' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Các điều phối viên hậu cần cần gia hạn thời gian xếp hàng lên container phải liên hệ ngay với chính quyền cảng.",
    "core_vocabulary": [
      { "word": "extension", "type": "n.", "meaning": "sự gia hạn" }
    ]
  },
  {
    "id": "q1436",
    "question": "The warehouse crew will begin loading the 1,258 computer mainboards onto the pallets ------- at 9:00 AM tomorrow.",
    "options": { "A": "starter", "B": "starting", "C": "start", "D": "started" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng chủ động (starting).",
    "explanation_grammar": "Reduced Relative Clause.",
    "translation": "Đội ngũ kho bãi sẽ bắt đầu xếp 1.258 bo mạch chủ máy tính lên các pallet bắt đầu lúc 9 giờ sáng mai.",
    "core_vocabulary": [
        { "word": "mainboard", "type": "n.", "meaning": "bo mạch chủ" }
    ]
  },
  {
    "id": "q1437",
    "question": "Dr. Robertson, ------- has been researching supply chain sustainability since 2010, will lead the new initiative.",
    "options": { "A": "whose", "B": "whom", "C": "which", "D": "who" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'Dr. Robertson' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Tiến sĩ Robertson, người đã nghiên cứu về tính bền vững của chuỗi cung ứng từ năm 2010, sẽ dẫn dắt sáng kiến mới này.",
    "core_vocabulary": [
      { "word": "sustainability", "type": "n.", "meaning": "tính bền vững" }
    ]
  },
  {
    "id": "q1438",
    "question": "The data analytics team is trying to figure out ------- the error rates spiked during the Newton interpolation process.",
    "options": { "A": "which", "B": "whom", "C": "why", "D": "that" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Why' dùng trong mệnh đề danh ngữ để giải thích lý do.",
    "explanation_grammar": "Noun Clause (Why).",
    "translation": "Nhóm phân tích dữ liệu đang cố gắng tìm ra lý do tại sao tỷ lệ lỗi lại tăng vọt trong quá trình nội suy Newton.",
    "core_vocabulary": [
      { "word": "interpolation", "type": "n.", "meaning": "nội suy" }
    ]
  },
  {
    "id": "q1439",
    "question": "We are excited to introduce a new load optimization tool ------- will streamline our container packing workflow.",
    "options": { "A": "which", "B": "what", "C": "whom", "D": "who" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'tool' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Chúng tôi rất hào hứng giới thiệu một công cụ tối ưu hóa tải trọng mới sẽ giúp tinh giản quy trình đóng hàng vào container của chúng tôi.",
    "core_vocabulary": [
      { "word": "streamline", "type": "v.", "meaning": "tinh giản" }
    ]
  },
  {
    "id": "q1440",
    "question": "The project manager is currently interviewing the candidates ------- the recruitment agency recommended for the WBS coordinator role.",
    "options": { "A": "who", "B": "whose", "C": "which", "D": "whom" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whom' thay thế cho danh từ chỉ người 'candidates' làm tân ngữ.",
    "explanation_grammar": "Relative Pronoun (Object).",
    "translation": "Người quản lý dự án hiện đang phỏng vấn các ứng viên mà công ty tuyển dụng đã đề xuất cho vai trò điều phối viên WBS.",
    "core_vocabulary": [
      { "word": "recruitment agency", "type": "n.", "meaning": "công ty tuyển dụng" }
    ]
  },
  {
    "id": "q1441",
    "question": "The time estimation report ------- by the project team indicates that the critical path will take three weeks.",
    "options": { "A": "calculate", "B": "calculated", "C": "calculating", "D": "calculates" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng bị động (calculated).",
    "explanation_grammar": "Reduced Relative Clause (Passive).",
    "translation": "Báo cáo ước tính thời gian được tính toán bởi nhóm dự án chỉ ra rằng đường găng sẽ mất ba tuần.",
    "core_vocabulary": [
      { "word": "critical path", "type": "n.", "meaning": "đường găng" }
    ]
  },
  {
    "id": "q1442",
    "question": "Please let the procurement department know ------- the fresh apple shipment from the US requires refrigerated storage.",
    "options": { "A": "whose", "B": "whether", "C": "that", "D": "which" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'That' làm từ nối trong mệnh đề danh ngữ.",
    "explanation_grammar": "Noun Clause (That).",
    "translation": "Vui lòng cho bộ phận thu mua biết rằng lô hàng táo tươi từ Mỹ yêu cầu kho lạnh.",
    "core_vocabulary": [
      { "word": "refrigerated storage", "type": "n.", "meaning": "kho lạnh" }
    ]
  },
  {
    "id": "q1443",
    "question": "The main distribution center will be unavailable for two days ------- the automated sorting equipment is being upgraded.",
    "options": { "A": "during", "B": "which", "C": "while", "D": "who" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'While' (trong khi) là liên từ chỉ thời gian.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Trung tâm phân phối chính sẽ không hoạt động trong hai ngày trong khi thiết bị phân loại tự động đang được nâng cấp.",
    "core_vocabulary": [
      { "word": "distribution center", "type": "n.", "meaning": "trung tâm phân phối" }
    ]
  },
  {
    "id": "q1444",
    "question": "Ms. Gomez is the senior analyst ------- regression chart accurately predicted the seasonal demand spike.",
    "options": { "A": "whom", "B": "whose", "C": "which", "D": "who" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whose' thay thế cho sở hữu của 'Gomez'.",
    "explanation_grammar": "Relative Pronoun (Possessive).",
    "translation": "Bà Gomez là nhà phân tích cao cấp có biểu đồ hồi quy đã dự đoán chính xác sự tăng vọt nhu cầu theo mùa.",
    "core_vocabulary": [
      { "word": "regression chart", "type": "n.", "meaning": "biểu đồ hồi quy" }
    ]
  },
  {
    "id": "q1445",
    "question": "To acknowledge those ------- have successfully managed the \"iron triangle\" of cost, schedule, and quality, the CEO is hosting a gala.",
    "options": { "A": "what", "B": "who", "C": "which", "D": "whom" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho 'those' (người) làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Để ghi nhận những người đã quản lý thành công 'tam giác sắt' gồm chi phí, tiến độ và chất lượng, Giám đốc điều hành đang tổ chức một bữa tiệc gala.",
    "core_vocabulary": [
      { "word": "iron triangle", "type": "n.", "meaning": "tam giác sắt" }
    ]
  },
  {
    "id": "q1446",
    "question": "The workflow breakdown structure ------- by the engineering team outlines a more logical sequence of tasks.",
    "options": { "A": "developed", "B": "developing", "C": "develop", "D": "develops" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng bị động (developed).",
    "explanation_grammar": "Reduced Relative Clause (Passive).",
    "translation": "Cấu trúc phân chia công việc được thiết lập bởi nhóm kỹ thuật phác thảo một trình tự các nhiệm vụ hợp lý hơn.",
    "core_vocabulary": [
      { "word": "sequence", "type": "n.", "meaning": "trình tự" }
    ]
  },
  {
    "id": "q1447",
    "question": "The clients want to clarify ------- the new HS codes for imported electronics will take effect in the local market.",
    "options": { "A": "which", "B": "when", "C": "that", "D": "who" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'When' dùng trong mệnh đề danh ngữ chỉ thời gian.",
    "explanation_grammar": "Noun Clause (When).",
    "translation": "Các khách hàng muốn làm rõ khi nào mã HS mới cho đồ điện tử nhập khẩu sẽ có hiệu lực tại thị trường địa phương.",
    "core_vocabulary": [
      { "word": "HS code", "type": "n.", "meaning": "mã HS" }
    ]
  },
  {
    "id": "q1448",
    "question": "The revised shipping schedule, ------- was distributed last week, contains updated guidelines for international freight.",
    "options": { "A": "which", "B": "what", "C": "who", "D": "whom" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho 'schedule' trong mệnh đề không giới hạn.",
    "explanation_grammar": "Non-restrictive Relative Clause.",
    "translation": "Lịch vận chuyển đã sửa đổi, vốn được phân phát vào tuần trước, có chứa các hướng dẫn cập nhật cho vận tải quốc tế.",
    "core_vocabulary": [
      { "word": "freight", "type": "n.", "meaning": "vận tải" }
    ]
  },
  {
    "id": "q1449",
    "question": "Before finalizing the PERT chart, we need to ensure ------- all task dependencies have been accurately mapped out.",
    "options": { "A": "which", "B": "that", "C": "whether", "D": "whose" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'That' làm từ nối trong mệnh đề danh ngữ.",
    "explanation_grammar": "Noun Clause (That).",
    "translation": "Trước khi hoàn thiện biểu đồ PERT, chúng ta cần đảm bảo rằng tất cả các phụ thuộc công việc đã được vạch ra một cách chính xác.",
    "core_vocabulary": [
      { "word": "dependency", "type": "n.", "meaning": "phụ thuộc" }
    ]
  },
  {
    "id": "q1450",
    "question": "The agency is looking for a logistics specialist ------- is familiar with both air freight and ocean freight regulations.",
    "options": { "A": "which", "B": "what", "C": "whom", "D": "who" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho 'specialist' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Công ty đang tìm kiếm một chuyên gia hậu cần người quen thuộc với cả các quy định vận tải hàng không và vận tải đường biển.",
    "core_vocabulary": [
      { "word": "air freight", "type": "n.", "meaning": "vận tải hàng không" }
    ]
  },
  {
    "id": "q1451",
    "question": "The keynote speech on data-driven supply chains ------- by our founder inspired many young analysts in the audience.",
    "options": { "A": "deliver", "B": "delivers", "C": "delivered", "D": "delivering" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng bị động (delivered).",
    "explanation_grammar": "Reduced Relative Clause (Passive).",
    "translation": "Bài diễn văn chính về chuỗi cung ứng dựa trên dữ liệu được trình bày bởi người sáng lập của chúng tôi đã truyền cảm hứng cho nhiều nhà phân tích trẻ trong khán phòng.",
    "core_vocabulary": [
      { "word": "data-driven", "type": "adj.", "meaning": "dựa trên dữ liệu" }
    ]
  },
  {
    "id": "q1452",
    "question": "The manager must decide ------- of the two pallet types is best suited for securing the fragile electronic components.",
    "options": { "A": "who", "B": "that", "C": "whose", "D": "which" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' dùng để lựa chọn.",
    "explanation_grammar": "Wh-word in Noun Clause.",
    "translation": "Người quản lý phải quyết định loại pallet nào trong hai loại là phù hợp nhất để cố định các linh kiện điện tử dễ vỡ.",
    "core_vocabulary": [
      { "word": "fragile", "type": "adj.", "meaning": "dễ vỡ" }
    ]
  },
  {
    "id": "q1453",
    "question": "Mr. Zhao, ------- the board appointed as the interim director of logistics, has extensive experience in load capacity calculation.",
    "options": { "A": "which", "B": "whom", "C": "whose", "D": "who" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whom' thay thế cho 'Mr. Zhao' làm tân ngữ.",
    "explanation_grammar": "Relative Pronoun (Object).",
    "translation": "Ông Zhao, người mà hội đồng quản trị đã chỉ định làm giám đốc hậu cần tạm thời, có kinh nghiệm sâu rộng trong việc tính toán khả năng chịu tải.",
    "core_vocabulary": [
      { "word": "load capacity", "type": "n.", "meaning": "khả năng chịu tải" }
    ]
  },
  {
    "id": "q1454",
    "question": "The confidentiality agreement ------- you signed upon hiring prohibits the sharing of internal customs documentation.",
    "options": { "A": "which", "B": "who", "C": "whom", "D": "what" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho 'agreement' làm tân ngữ.",
    "explanation_grammar": "Relative Pronoun (Object).",
    "translation": "Thỏa thuận bảo mật mà bạn đã ký khi được tuyển dụng cấm việc chia sẻ các tài liệu hải quan nội bộ.",
    "core_vocabulary": [
      { "word": "confidentiality agreement", "type": "n.", "meaning": "thỏa thuận bảo mật" }
    ]
  },
  {
    "id": "q1455",
    "question": "The data analyst is checking the database ------- to identify the cause of the recent inventory discrepancies.",
    "options": { "A": "now", "B": "yet", "C": "already", "D": "since" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Now' phù hợp với thì hiện tại tiếp diễn.",
    "explanation_grammar": "Adverb of Time.",
    "translation": "Nhà phân tích dữ liệu đang kiểm tra cơ sở dữ liệu ngay bây giờ để xác định nguyên nhân của các sai lệch hàng tồn kho gần đây.",
    "core_vocabulary": [
      { "word": "discrepancy", "type": "n.", "meaning": "sai lệch" }
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
  console.log('Successfully appended 25 questions for MĐQH Test 6.');
} else {
  console.error('Could not find end of array in questions.js');
}
