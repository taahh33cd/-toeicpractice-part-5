const fs = require('fs');
const path = require('path');

const questions = [
  {
    "id": "q1481",
    "question": "The port authority is currently inspecting the cargo ------- arrived from the United States this morning.",
    "options": { "A": "where", "B": "who", "C": "which", "D": "what" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'cargo' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Cảng vụ hiện đang kiểm tra lô hàng vừa cập cảng từ Hoa Kỳ sáng nay.",
    "core_vocabulary": [
      { "word": "port authority", "type": "n.", "meaning": "cảng vụ/chính quyền cảng" },
      { "word": "cargo", "type": "n.", "meaning": "hàng hóa/lô hàng" }
    ]
  },
  {
    "id": "q1482",
    "question": "The project sponsor wants to know ------- the delay in the PERT chart will affect the final delivery date.",
    "options": { "A": "whose", "B": "about", "C": "whether", "D": "that" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whether' dùng trong mệnh đề danh ngữ để chỉ sự nghi vấn/giả định.",
    "explanation_grammar": "Noun Clause (Whether).",
    "translation": "Nhà tài trợ dự án muốn biết liệu sự chậm trễ trong biểu đồ PERT có ảnh hưởng đến ngày giao hàng cuối cùng hay không.",
    "core_vocabulary": [
      { "word": "sponsor", "type": "n.", "meaning": "nhà tài trợ" },
      { "word": "affect", "type": "v.", "meaning": "ảnh hưởng" }
    ]
  },
  {
    "id": "q1483",
    "question": "Our logistics team ------- working on the fresh apple import project since early February.",
    "options": { "A": "having been", "B": "has been", "C": "have been", "D": "is being" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "Dùng 'has been' (hiện tại hoàn thành tiếp diễn) để chỉ hành động kéo dài từ quá khứ đến hiện tại, hòa hợp với chủ ngữ số ít 'team'.",
    "explanation_grammar": "Present Perfect Continuous / Subject-Verb Agreement.",
    "translation": "Đội ngũ hậu cần của chúng tôi đã đang thực hiện dự án nhập khẩu táo tươi từ đầu tháng Hai.",
    "core_vocabulary": [
      { "word": "logistics", "type": "n.", "meaning": "hậu cần" }
    ]
  },
  {
    "id": "q1484",
    "question": "The regression chart ------- by the junior data analyst successfully highlighted the seasonal shipping trends.",
    "options": { "A": "create", "B": "created", "C": "creating", "D": "creates" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng bị động (which was created -> created).",
    "explanation_grammar": "Reduced Relative Clause (Passive).",
    "translation": "Biểu đồ hồi quy được tạo bởi nhà phân tích dữ liệu cấp dưới đã làm nổi bật thành công các xu hướng vận chuyển theo mùa.",
    "core_vocabulary": [
      { "word": "junior", "type": "adj.", "meaning": "cấp dưới/trẻ/mới" },
      { "word": "trend", "type": "n.", "meaning": "xu hướng" }
    ]
  },
  {
    "id": "q1485",
    "question": "We need to hire a warehouse supervisor ------- has experience handling fragile electronic components.",
    "options": { "A": "who", "B": "whom", "C": "whose", "D": "which" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'supervisor' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Chúng tôi cần thuê một giám sát kho người có kinh nghiệm xử lý các linh kiện điện tử dễ vỡ.",
    "core_vocabulary": [
      { "word": "fragile", "type": "adj.", "meaning": "dễ vỡ" },
      { "word": "component", "type": "n.", "meaning": "linh kiện/thành phần" }
    ]
  },
  {
    "id": "q1486",
    "question": "The ASUS ROG Strix mainboards, ------- are currently in high demand, require specialized pallet configurations.",
    "options": { "A": "what", "B": "where", "C": "which", "D": "who" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'mainboards' trong mệnh đề quan hệ không giới hạn.",
    "explanation_grammar": "Non-restrictive Relative Clause.",
    "translation": "Các bo mạch chủ ASUS ROG Strix, vốn hiện đang có nhu cầu cao, yêu cầu các cấu hình pallet chuyên dụng.",
    "core_vocabulary": [
      { "word": "high demand", "type": "n.", "meaning": "nhu cầu cao" },
      { "word": "configuration", "type": "n.", "meaning": "cấu hình" }
    ]
  },
  {
    "id": "q1487",
    "question": "Ms. Carter, ------- the management team selected for the analyst role, possesses strong numerical skills.",
    "options": { "A": "which", "B": "who", "C": "whose", "D": "whom" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whom' thay thế cho danh từ chỉ người 'Ms. Carter' làm tân ngữ cho động từ 'selected'.",
    "explanation_grammar": "Relative Pronoun (Object).",
    "translation": "Bà Carter, người mà ban quản lý đã chọn cho vai trò nhà phân tích, sở hữu các kỹ năng tính toán mạnh mẽ.",
    "core_vocabulary": [
      { "word": "possess", "type": "v.", "meaning": "sở hữu" },
      { "word": "numerical", "type": "adj.", "meaning": "thuộc về số liệu/tính toán" }
    ]
  },
  {
    "id": "q1488",
    "question": "The customs officer did not specify ------- the updated HS codes would be published on the VNACCS portal.",
    "options": { "A": "when", "B": "whom", "C": "which", "D": "that" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'When' dùng trong mệnh đề danh ngữ làm từ nối chỉ thời gian.",
    "explanation_grammar": "Noun Clause (When).",
    "translation": "Nhân viên hải quan đã không nêu rõ khi nào các mã HS cập nhật sẽ được công bố trên cổng thông tin VNACCS.",
    "core_vocabulary": [
      { "word": "specify", "type": "v.", "meaning": "nêu rõ/chỉ định" }
    ]
  },
  {
    "id": "q1489",
    "question": "The new schedule, ------- all tasks in the work breakdown structure, was distributed to the team yesterday.",
    "options": { "A": "detail", "B": "details", "C": "detailing", "D": "detailed" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng chủ động (detailing = which details).",
    "explanation_grammar": "Reduced Relative Clause (Active).",
    "translation": "Lịch trình mới, nêu chi tiết tất cả các nhiệm vụ trong cấu trúc phân chia công việc, đã được gửi đến cả nhóm vào ngày hôm qua.",
    "core_vocabulary": [
      { "word": "detail", "type": "v.", "meaning": "nêu chi tiết" },
      { "word": "work breakdown structure", "type": "n.", "meaning": "cấu trúc phân chia công việc (WBS)" }
    ]
  },
  {
    "id": "q1490",
    "question": "The vendor ------- supplies our packaging materials has announced a slight price increase for next quarter.",
    "options": { "A": "which", "B": "whom", "C": "who", "D": "what" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người/nhà cung cấp 'vendor' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Nhà cung cấp vật liệu đóng gói cho chúng tôi đã thông báo tăng giá nhẹ cho quý tới.",
    "core_vocabulary": [
      { "word": "vendor", "type": "n.", "meaning": "nhà cung cấp" }
    ]
  },
  {
    "id": "q1491",
    "question": "Mr. Davis ------- to be an invaluable asset to the project management office over the last three years.",
    "options": { "A": "proving", "B": "has proved", "C": "prove", "D": "have proved" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "Dùng 'has proved' (hiện tại hoàn thành) để chỉ một sự thật đã được khẳng định từ quá khứ đến nay.",
    "explanation_grammar": "Present Perfect.",
    "translation": "Ông Davis đã chứng tỏ là một tài sản vô giá đối với văn phòng quản lý dự án trong ba năm qua.",
    "core_vocabulary": [
      { "word": "invaluable", "type": "adj.", "meaning": "vô giá" },
      { "word": "asset", "type": "n.", "meaning": "tài sản/nguồn lực quý giá" }
    ]
  },
  {
    "id": "q1492",
    "question": "The engineering team is trying to determine ------- the bisection method failed to converge in the latest simulation.",
    "options": { "A": "that", "B": "whom", "C": "why", "D": "which" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Why' dùng trong mệnh đề danh ngữ để giải thích lý do.",
    "explanation_grammar": "Noun Clause (Why).",
    "translation": "Nhóm kỹ thuật đang cố gắng xác định lý do tại sao phương pháp chia đôi không hội tụ được trong mô phỏng mới nhất.",
    "core_vocabulary": [
      { "word": "converge", "type": "v.", "meaning": "hội tụ" },
      { "word": "simulation", "type": "n.", "meaning": "sự mô phỏng" }
    ]
  },
  {
    "id": "q1493",
    "question": "Any employee ------- wishes to transfer to the supply chain department must submit a formal request to HR.",
    "options": { "A": "which", "B": "whose", "C": "who", "D": "whom" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ 'employee' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Bất kỳ nhân viên nào muốn chuyển sang bộ phận chuỗi cung ứng phải nộp một yêu cầu chính thức cho phòng nhân sự.",
    "core_vocabulary": [
      { "word": "formal request", "type": "n.", "meaning": "yêu cầu chính thức" }
    ]
  },
  {
    "id": "q1494",
    "question": "The facility will operate on backup generators ------- the main power grid is being repaired.",
    "options": { "A": "which", "B": "during", "C": "while", "D": "who" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'While' (trong khi) là liên từ chỉ thời gian nối hai mệnh đề.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Cơ sở này sẽ hoạt động bằng máy phát điện dự phòng trong khi lưới điện chính đang được sửa chữa.",
    "core_vocabulary": [
      { "word": "backup generator", "type": "n.", "meaning": "máy phát điện dự phòng" },
      { "word": "power grid", "type": "n.", "meaning": "lưới điện" }
    ]
  },
  {
    "id": "q1495",
    "question": "Mr. Tanaka is the lead engineer ------- algorithms improved our load optimization process by 20%.",
    "options": { "A": "which", "B": "whom", "C": "whose", "D": "who" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whose' thay thế cho sở hữu của 'Tanaka' chỉ sở hữu đối với 'algorithms'.",
    "explanation_grammar": "Relative Pronoun (Possessive).",
    "translation": "Ông Tanaka là kỹ sư trưởng người có các thuật toán đã cải thiện quy trình tối ưu hóa tải trọng của chúng tôi thêm 20%.",
    "core_vocabulary": [
      { "word": "algorithm", "type": "n.", "meaning": "thuật toán" }
    ]
  },
  {
    "id": "q1496",
    "question": "------- the Newton interpolation formula, the software quickly predicted the missing data points in the sequence.",
    "options": { "A": "Use", "B": "Used", "C": "Using", "D": "Uses" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "Dùng hiện tại phân từ (V-ing) để chỉ cách thức/phương tiện thực hiện hành động chính.",
    "explanation_grammar": "Participle Clause (Manner/Means).",
    "translation": "Bằng cách sử dụng công thức nội suy Newton, phần mềm đã nhanh chóng dự đoán các điểm dữ liệu còn thiếu trong chuỗi.",
    "core_vocabulary": [
      { "word": "formula", "type": "n.", "meaning": "công thức" },
      { "word": "sequence", "type": "n.", "meaning": "chuỗi/trình tự" }
    ]
  },
  {
    "id": "q1497",
    "question": "The shipping coordinator verified ------- the 1,258 units of computer hardware were securely loaded onto the vessel.",
    "options": { "A": "that", "B": "whom", "C": "what", "D": "whose" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'That' làm từ nối trong mệnh đề danh ngữ.",
    "explanation_grammar": "Noun Clause (That).",
    "translation": "Điều phối viên vận chuyển đã xác nhận rằng 1.258 đơn vị phần cứng máy tính đã được xếp lên tàu một cách an toàn.",
    "core_vocabulary": [
      { "word": "vessel", "type": "n.", "meaning": "tàu/thuyền (lớn)" }
    ]
  },
  {
    "id": "q1498",
    "question": "The new safety protocol, ------- was implemented last week, has already reduced workplace accidents significantly.",
    "options": { "A": "who", "B": "what", "C": "whom", "D": "which" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'protocol' làm chủ ngữ.",
    "explanation_grammar": "Non-restrictive Relative Clause.",
    "translation": "Giao thức an toàn mới, vốn được triển khai vào tuần trước, đã giảm đáng kể các tai nạn tại nơi làm việc.",
    "core_vocabulary": [
      { "word": "protocol", "type": "n.", "meaning": "giao thức/quy trình" }
    ]
  },
  {
    "id": "q1499",
    "question": "The accounting department ------- the financial reports for the upcoming board of directors meeting.",
    "options": { "A": "has finalized", "B": "finalize", "C": "have finalized", "D": "finalizing" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "Dùng 'has finalized' (hiện tại hoàn thành) để chỉ hành động vừa mới hoàn tất, hòa hợp với chủ ngữ số ít 'department'.",
    "explanation_grammar": "Present Perfect / Subject-Verb Agreement.",
    "translation": "Phòng kế toán đã hoàn thiện các báo cáo tài chính cho cuộc họp hội đồng quản trị sắp tới.",
    "core_vocabulary": [
      { "word": "finalize", "type": "v.", "meaning": "hoàn thiện/chốt" }
    ]
  },
  {
    "id": "q1500",
    "question": "The firm is seeking a consultant ------- is familiar with both domestic and international customs procedures.",
    "options": { "A": "what", "B": "whom", "C": "which", "D": "who" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'consultant' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Công ty đang tìm kiếm một tư vấn viên người quen thuộc với cả các quy trình hải quan trong nước và quốc tế.",
    "core_vocabulary": [
      { "word": "procedure", "type": "n.", "meaning": "quy trình/thủ tục" },
      { "word": "domestic", "type": "adj.", "meaning": "trong nước/nội địa" }
    ]
  },
  {
    "id": "q1501",
    "question": "The freight forwarded ------- by our partner agency arrived at the warehouse two days ahead of schedule.",
    "options": { "A": "dispatches", "B": "dispatching", "C": "dispatched", "D": "dispatch" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng bị động (dispatched = which was dispatched).",
    "explanation_grammar": "Reduced Relative Clause (Passive).",
    "translation": "Lô hàng được gửi bởi đại lý đối tác của chúng tôi đã đến kho sớm hơn hai ngày so với lịch trình.",
    "core_vocabulary": [
      { "word": "dispatch", "type": "v.", "meaning": "gửi đi/phái đi" }
    ]
  },
  {
    "id": "q1502",
    "question": "The board needs to decide ------- of the two marketing strategies aligns better with our core corporate values.",
    "options": { "A": "who", "B": "which", "C": "that", "D": "whose" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' dùng để lựa chọn trong một số lượng giới hạn các phương án.",
    "explanation_grammar": "Wh-word in Noun Clause.",
    "translation": "Hội đồng quản trị cần quyết định chiến lược tiếp thị nào trong hai chiến lược phù hợp hơn với các giá trị cốt lõi của công ty chúng ta.",
    "core_vocabulary": [
      { "word": "align", "type": "v.", "meaning": "phù hợp/căn chỉnh" },
      { "word": "corporate values", "type": "n.", "meaning": "các giá trị doanh nghiệp" }
    ]
  },
  {
    "id": "q1503",
    "question": "Mr. Evans, ------- the committee praised for his outstanding leadership, will oversee the new branch.",
    "options": { "A": "which", "B": "whom", "C": "whose", "D": "who" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whom' thay thế cho danh từ chỉ người 'Mr. Evans' làm tân ngữ cho động từ 'praised'.",
    "explanation_grammar": "Relative Pronoun (Object).",
    "translation": "Ông Evans, người mà ủy ban đã ca ngợi vì sự lãnh đạo xuất sắc của mình, sẽ giám sát chi nhánh mới.",
    "core_vocabulary": [
      { "word": "outstanding", "type": "adj.", "meaning": "xuất sắc/nổi bật" }
    ]
  },
  {
    "id": "q1504",
    "question": "The service level agreement ------- you reviewed last month clearly defines the penalties for late deliveries.",
    "options": { "A": "whom", "B": "which", "C": "what", "D": "who" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'agreement' làm tân ngữ cho động từ 'reviewed'.",
    "explanation_grammar": "Relative Pronoun (Object).",
    "translation": "Thỏa thuận mức độ dịch vụ mà bạn đã xem xét vào tháng trước nêu rõ các hình phạt cho việc giao hàng trễ.",
    "core_vocabulary": [
      { "word": "penalty", "type": "n.", "meaning": "hình phạt/khoản phạt" }
    ]
  },
  {
    "id": "q1505",
    "question": "The IT specialist is running diagnostics on the system ------- to ensure the database is functioning correctly.",
    "options": { "A": "now", "B": "since", "C": "already", "D": "yet" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Now' phù hợp với thì hiện tại tiếp diễn.",
    "explanation_grammar": "Adverb of Time.",
    "translation": "Chuyên gia CNTT đang chạy chẩn đoán trên hệ thống ngay bây giờ để đảm bảo cơ sở dữ liệu đang hoạt động chính xác.",
    "core_vocabulary": [
      { "word": "diagnostics", "type": "n.", "meaning": "chẩn đoán" }
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
  console.log('Successfully appended 25 questions for MĐQH Test 8.');
} else {
  console.error('Could not find end of array in questions.js');
}
