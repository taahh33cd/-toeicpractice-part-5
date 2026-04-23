const fs = require('fs');
const path = require('path');

const questions = [
  {
    "id": "q1406",
    "question": "The supply chain director is looking for a data analyst ------- can help optimize our international shipping routes.",
    "options": { "A": "whom", "B": "which", "C": "who", "D": "what" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'analyst' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Giám đốc chuỗi cung ứng đang tìm kiếm một nhà phân tích dữ liệu có thể giúp tối ưu hóa các tuyến vận chuyển quốc tế của chúng tôi.",
    "core_vocabulary": [
      { "word": "optimize", "type": "v.", "meaning": "tối ưu hóa" },
      { "word": "shipping route", "type": "n.", "meaning": "tuyến vận chuyển/đường biển" }
    ]
  },
  {
    "id": "q1407",
    "question": "The new customs declaration software, ------- usually takes two hours to process, has been updated to run in minutes.",
    "options": { "A": "what", "B": "who", "C": "where", "D": "which" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'software' trong mệnh đề quan hệ không giới hạn.",
    "explanation_grammar": "Non-restrictive Relative Clause.",
    "translation": "Phần mềm khai báo hải quan mới, vốn thường mất hai giờ để xử lý, đã được cập nhập để chạy trong vài phút.",
    "core_vocabulary": [
      { "word": "customs declaration", "type": "n.", "meaning": "khai báo hải quan" }
    ]
  },
  {
    "id": "q1408",
    "question": "Management needs to evaluate ------- the new VNACCS/VCIS integration will improve overall clearance productivity.",
    "options": { "A": "whose", "B": "about", "C": "whether", "D": "that" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whether' dùng trong mệnh đề danh ngữ để chỉ sự lựa chọn/nghi vấn (có hay không).",
    "explanation_grammar": "Noun Clause (Whether).",
    "translation": "Ban quản lý cần đánh giá xem liệu việc tích hợp VNACCS/VCIS mới có cải thiện năng suất thông quan tổng thể hay không.",
    "core_vocabulary": [
      { "word": "clearance", "type": "n.", "meaning": "thông quan" },
      { "word": "productivity", "type": "n.", "meaning": "năng suất" }
    ]
  },
  {
    "id": "q1409",
    "question": "After reviewing the shipping budget, Ms. Albright decided to consolidate the cargo, ------- transportation costs significantly.",
    "options": { "A": "reduce", "B": "to be reduced", "C": "reduced", "D": "reducing" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "Dùng hiện tại phân từ (V-ing) để chỉ kết quả của hành động đứng trước.",
    "explanation_grammar": "Participle Clause for Result.",
    "translation": "Sau khi xem xét ngân sách vận chuyển, bà Albright đã quyết định hợp nhất hàng hóa, giúp giảm đáng kể chi phí vận chuyển.",
    "core_vocabulary": [
      { "word": "consolidate", "type": "v.", "meaning": "hợp nhất/gom hàng" },
      { "word": "cargo", "type": "n.", "meaning": "hàng hóa" }
    ]
  },
  {
    "id": "q1410",
    "question": "Logistics coordinators ------- require an extension on their container loading times must contact the port authority immediately.",
    "options": { "A": "which", "B": "who", "C": "whose", "D": "whom" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'coordinators' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Các điều phối viên hậu cần cần gia hạn thời gian xếp hàng lên container phải liên hệ ngay với chính quyền cảng.",
    "core_vocabulary": [
      { "word": "extension", "type": "n.", "meaning": "sự gia hạn/mở rộng" },
      { "word": "port authority", "type": "n.", "meaning": "chính quyền cảng/cảng vụ" }
    ]
  },
  {
    "id": "q1411",
    "question": "The warehouse crew will begin loading the 1,258 computer mainboards onto the pallets ------- at 9:00 AM tomorrow.",
    "options": { "A": "started", "B": "starter", "C": "starting", "D": "start" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng chủ động (which starts -> starting).",
    "explanation_grammar": "Reduced Relative Clause (Active).",
    "translation": "Đội ngũ kho bãi sẽ bắt đầu xếp 1.258 bo mạch chủ máy tính lên các pallet bắt đầu lúc 9 giờ sáng mai.",
    "core_vocabulary": [
      { "word": "mainboard", "type": "n.", "meaning": "bo mạch chủ" },
      { "word": "pallet", "type": "n.", "meaning": "tấm pallet/tấm nâng hàng" }
    ]
  },
  {
    "id": "q1412",
    "question": "Dr. Robertson, ------- has been researching supply chain sustainability since 2010, will lead the new initiative.",
    "options": { "A": "whom", "B": "whose", "C": "who", "D": "which" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'Dr. Robertson' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Tiến sĩ Robertson, người đã nghiên cứu về tính bền vững của chuỗi cung ứng từ năm 2010, sẽ dẫn dắt sáng kiến mới này.",
    "core_vocabulary": [
      { "word": "sustainability", "type": "n.", "meaning": "tính bền vững" },
      { "word": "initiative", "type": "n.", "meaning": "sáng kiến" }
    ]
  },
  {
    "id": "q1413",
    "question": "The data analytics team is trying to figure out ------- the error rates spiked during the Newton interpolation process.",
    "options": { "A": "that", "B": "why", "C": "which", "D": "whom" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Why' dùng trong mệnh đề danh ngữ để giải thích lý do/nguyên nhân.",
    "explanation_grammar": "Noun Clause (Why).",
    "translation": "Nhóm phân tích dữ liệu đang cố gắng tìm ra lý do tại sao tỷ lệ lỗi lại tăng vọt trong quá trình nội suy Newton.",
    "core_vocabulary": [
      { "word": "spike", "type": "v./n.", "meaning": "tăng vọt" },
      { "word": "interpolation", "type": "n.", "meaning": "sự nội suy" }
    ]
  },
  {
    "id": "q1414",
    "question": "We are excited to introduce a new load optimization tool ------- will streamline our container packing workflow.",
    "options": { "A": "who", "B": "what", "C": "whom", "D": "which" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'tool' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Chúng tôi rất hào hứng giới thiệu một công cụ tối ưu hóa tải trọng mới sẽ giúp tinh giản quy trình đóng hàng vào container của chúng tôi.",
    "core_vocabulary": [
      { "word": "streamline", "type": "v.", "meaning": "tinh giản/tối ưu hóa" },
      { "word": "workflow", "type": "n.", "meaning": "quy trình làm việc" }
    ]
  },
  {
    "id": "q1415",
    "question": "The project manager is currently interviewing the candidates ------- the recruitment agency recommended for the WBS coordinator role.",
    "options": { "A": "whose", "B": "whom", "C": "who", "D": "which" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whom' thay thế cho danh từ chỉ người 'candidates' làm tân ngữ cho động từ 'recommended'.",
    "explanation_grammar": "Relative Pronoun (Object).",
    "translation": "Người quản lý dự án hiện đang phỏng vấn các ứng viên mà công ty tuyển dụng đã đề xuất cho vai trò điều phối viên WBS.",
    "core_vocabulary": [
      { "word": "recruitment agency", "type": "n.", "meaning": "công ty tuyển dụng" },
      { "word": "coordinator", "type": "n.", "meaning": "điều phối viên" }
    ]
  },
  {
    "id": "q1416",
    "question": "The time estimation report ------- by the project team indicates that the critical path will take three weeks.",
    "options": { "A": "calculate", "B": "calculating", "C": "calculates", "D": "calculated" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng bị động (which was calculated -> calculated).",
    "explanation_grammar": "Reduced Relative Clause (Passive).",
    "translation": "Báo cáo ước tính thời gian được tính toán bởi nhóm dự án chỉ ra rằng đường găng sẽ mất ba tuần.",
    "core_vocabulary": [
      { "word": "estimation", "type": "n.", "meaning": "sự ước tính" },
      { "word": "critical path", "type": "n.", "meaning": "đường găng (trong quản lý dự án)" }
    ]
  },
  {
    "id": "q1417",
    "question": "Please let the procurement department know ------- the fresh apple shipment from the US requires refrigerated storage.",
    "options": { "A": "whose", "B": "which", "C": "whether", "D": "that" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'That' làm từ nối trong mệnh đề danh ngữ đóng vai trò tân ngữ để truyền đạt một thông tin/sự thật.",
    "explanation_grammar": "Noun Clause (That).",
    "translation": "Vui lòng cho bộ phận thu mua biết rằng lô hàng táo tươi từ Mỹ yêu cầu kho lạnh.",
    "core_vocabulary": [
      { "word": "procurement", "type": "n.", "meaning": "sự thu mua/mua sắm" },
      { "word": "refrigerated storage", "type": "n.", "meaning": "kho lạnh/bảo quản lạnh" }
    ]
  },
  {
    "id": "q1418",
    "question": "The main distribution center will be unavailable for two days ------- the automated sorting equipment is being upgraded.",
    "options": { "A": "while", "B": "during", "C": "which", "D": "who" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'While' (trong khi) là liên từ chỉ thời gian nối hai mệnh đề.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Trung tâm phân phối chính sẽ không hoạt động trong hai ngày trong khi thiết bị phân loại tự động đang được nâng cấp.",
    "core_vocabulary": [
      { "word": "distribution center", "type": "n.", "meaning": "trung tâm phân phối" },
      { "word": "sorting", "type": "n.", "meaning": "sự phân loại" }
    ]
  },
  {
    "id": "q1419",
    "question": "Ms. Gomez is the senior analyst ------- regression chart accurately predicted the seasonal demand spike.",
    "options": { "A": "whose", "B": "whom", "C": "who", "D": "which" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whose' thay thế cho tính từ sở hữu của 'Gomez' chỉ sở hữu đối với 'regression chart'.",
    "explanation_grammar": "Relative Pronoun (Possessive).",
    "translation": "Bà Gomez là nhà phân tích cao cấp có biểu đồ hồi quy đã dự đoán chính xác sự tăng vọt nhu cầu theo mùa.",
    "core_vocabulary": [
      { "word": "regression chart", "type": "n.", "meaning": "biểu đồ hồi quy" },
      { "word": "seasonal demand", "type": "n.", "meaning": "nhu cầu theo mùa" }
    ]
  },
  {
    "id": "q1420",
    "question": "To acknowledge those ------- have successfully managed the \"iron triangle\" of cost, schedule, and quality, the CEO is hosting a gala.",
    "options": { "A": "what", "B": "who", "C": "which", "D": "whom" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho 'those' (chỉ người) làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Để ghi nhận những người đã quản lý thành công 'tam giác sắt' gồm chi phí, tiến độ và chất lượng, Giám đốc điều hành đang tổ chức một bữa tiệc gala.",
    "core_vocabulary": [
      { "word": "iron triangle", "type": "n.", "meaning": "tam giác sắt (trong dự án)" }
    ]
  },
  {
    "id": "q1421",
    "question": "The workflow breakdown structure ------- by the engineering team outlines a more logical sequence of tasks.",
    "options": { "A": "develops", "B": "developing", "C": "developed", "D": "develop" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng bị động (which was developed -> developed).",
    "explanation_grammar": "Reduced Relative Clause (Passive).",
    "translation": "Cấu trúc phân chia công việc được thiết lập bởi nhóm kỹ thuật phác thảo một trình tự các nhiệm vụ hợp lý hơn.",
    "core_vocabulary": [
      { "word": "sequence", "type": "n.", "meaning": "trình tự/chuỗi" }
    ]
  },
  {
    "id": "q1422",
    "question": "The clients want to clarify ------- the new HS codes for imported electronics will take effect in the local market.",
    "options": { "A": "when", "B": "who", "C": "which", "D": "that" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'When' dùng trong mệnh đề danh ngữ làm từ nối chỉ thời gian.",
    "explanation_grammar": "Noun Clause (When).",
    "translation": "Các khách hàng muốn làm rõ khi nào mã HS mới cho đồ điện tử nhập khẩu sẽ có hiệu lực tại thị trường địa phương.",
    "core_vocabulary": [
      { "word": "HS code", "type": "n.", "meaning": "mã HS (mã phân loại hàng hóa)" },
      { "word": "take effect", "type": "v.", "meaning": "có hiệu lực" }
    ]
  },
  {
    "id": "q1423",
    "question": "The revised shipping schedule, ------- was distributed last week, contains updated guidelines for international freight.",
    "options": { "A": "whom", "B": "which", "C": "who", "D": "what" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'schedule' trong mệnh đề quan hệ không giới hạn.",
    "explanation_grammar": "Non-restrictive Relative Clause.",
    "translation": "Lịch vận chuyển đã sửa đổi, vốn được phân phát vào tuần trước, có chứa các hướng dẫn cập nhật cho vận tải quốc tế.",
    "core_vocabulary": [
      { "word": "distributed", "type": "adj.", "meaning": "được phân phát" },
      { "word": "international freight", "type": "n.", "meaning": "vận tải quốc tế" }
    ]
  },
  {
    "id": "q1424",
    "question": "Before finalizing the PERT chart, we need to ensure ------- all task dependencies have been accurately mapped out.",
    "options": { "A": "whether", "B": "whose", "C": "that", "D": "which" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'That' làm từ nối trong mệnh đề danh ngữ đóng vai trò tân ngữ.",
    "explanation_grammar": "Noun Clause (That).",
    "translation": "Trước khi hoàn thiện biểu đồ PERT, chúng ta cần đảm bảo rằng tất cả các phụ thuộc công việc đã được vạch ra một cách chính xác.",
    "core_vocabulary": [
      { "word": "dependency", "type": "n.", "meaning": "sự phụ thuộc" },
      { "word": "mapped out", "type": "adj.", "meaning": "được vạch ra/lên kế hoạch" }
    ]
  },
  {
    "id": "q1425",
    "question": "The agency is looking for a logistics specialist ------- is familiar with both air freight and ocean freight regulations.",
    "options": { "A": "whom", "B": "who", "C": "what", "D": "which" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'specialist' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Công ty đang tìm kiếm một chuyên gia hậu cần người quen thuộc với cả các quy định vận tải hàng không và vận tải đường biển.",
    "core_vocabulary": [
      { "word": "specialist", "type": "n.", "meaning": "chuyên gia" },
      { "word": "air freight", "type": "n.", "meaning": "vận tải hàng không" }
    ]
  },
  {
    "id": "q1426",
    "question": "The keynote speech on data-driven supply chains ------- by our founder inspired many young analysts in the audience.",
    "options": { "A": "delivering", "B": "delivers", "C": "delivered", "D": "deliver" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng bị động (which was delivered -> delivered).",
    "explanation_grammar": "Reduced Relative Clause (Passive).",
    "translation": "Bài diễn văn chính về chuỗi cung ứng dựa trên dữ liệu được trình bày bởi người sáng lập của chúng tôi đã truyền cảm hứng cho nhiều nhà phân tích trẻ trong khán phòng.",
    "core_vocabulary": [
      { "word": "data-driven", "type": "adj.", "meaning": "dựa trên dữ liệu" },
      { "word": "inspire", "type": "v.", "meaning": "truyền cảm hứng" }
    ]
  },
  {
    "id": "q1427",
    "question": "The manager must decide ------- of the two pallet types is best suited for securing the fragile electronic components.",
    "options": { "A": "who", "B": "whose", "C": "that", "D": "which" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' dùng để lựa chọn trong một số lượng giới hạn các phương án.",
    "explanation_grammar": "Wh-word in Noun Clause.",
    "translation": "Người quản lý phải quyết định loại pallet nào trong hai loại là phù hợp nhất để cố định các linh kiện điện tử dễ vỡ.",
    "core_vocabulary": [
      { "word": "fragile", "type": "adj.", "meaning": "dễ vỡ" }
    ]
  },
  {
    "id": "q1428",
    "question": "Mr. Zhao, ------- the board appointed as the interim director of logistics, has extensive experience in load capacity calculation.",
    "options": { "A": "whom", "B": "who", "C": "whose", "D": "which" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whom' thay thế cho danh từ chỉ người 'Mr. Zhao' làm tân ngữ cho động từ 'appointed'.",
    "explanation_grammar": "Relative Pronoun (Object).",
    "translation": "Ông Zhao, người mà hội đồng quản trị đã chỉ định làm giám đốc hậu cần tạm thời, có kinh nghiệm sâu rộng trong việc tính toán khả năng chịu tải.",
    "core_vocabulary": [
      { "word": "interim", "type": "adj.", "meaning": "tạm thời" },
      { "word": "load capacity", "type": "n.", "meaning": "khả năng chịu tải" }
    ]
  },
  {
    "id": "q1429",
    "question": "The confidentiality agreement ------- you signed upon hiring prohibits the sharing of internal customs documentation.",
    "options": { "A": "whom", "B": "what", "C": "which", "D": "who" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'agreement' làm tân ngữ cho động từ 'signed'.",
    "explanation_grammar": "Relative Pronoun (Object).",
    "translation": "Thỏa thuận bảo mật mà bạn đã ký khi được tuyển dụng cấm việc chia sẻ các tài liệu hải quan nội bộ.",
    "core_vocabulary": [
      { "word": "confidentiality agreement", "type": "n.", "meaning": "thỏa thuận bảo mật" },
      { "word": "prohibit", "type": "v.", "meaning": "cấm/ngăn cấm" }
    ]
  },
  {
    "id": "q1430",
    "question": "The data analyst is checking the database ------- to identify the cause of the recent inventory discrepancies.",
    "options": { "A": "already", "B": "yet", "C": "since", "D": "now" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Now' là trạng từ chỉ thời gian phù hợp với thì hiện tại tiếp diễn.",
    "explanation_grammar": "Adverb of Time.",
    "translation": "Nhà phân tích dữ liệu đang kiểm tra cơ sở dữ liệu ngay bây giờ để xác định nguyên nhân của các sai lệch hàng tồn kho gần đây.",
    "core_vocabulary": [
      { "word": "discrepancy", "type": "n.", "meaning": "sự sai lệch/không nhất quán" }
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
  console.log('Successfully appended 25 questions for MĐQH Test 5.');
} else {
  console.error('Could not find end of array in questions.js');
}
