const fs = require('fs');
const path = require('path');

const questions = [
  {
    "id": "q1381",
    "question": "The marketing director is looking for a consultant ------- can help improve the brand's social media presence.",
    "options": { "A": "which", "B": "whom", "C": "who", "D": "what" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'consultant' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Giám đốc tiếp thị đang tìm kiếm một tư vấn viên có thể giúp cải thiện sự hiện diện trên mạng xã hội của thương hiệu.",
    "core_vocabulary": [
      { "word": "consultant", "type": "n.", "meaning": "tư vấn viên/chuyên gia tư vấn" },
      { "word": "presence", "type": "n.", "meaning": "sự hiện diện" }
    ]
  },
  {
    "id": "q1382",
    "question": "The upcoming seminar on supply chain logistics, ------- was originally scheduled for Tuesday, has been moved to Friday.",
    "options": { "A": "where", "B": "which", "C": "what", "D": "who" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'seminar' trong mệnh đề quan hệ không giới hạn.",
    "explanation_grammar": "Non-restrictive Relative Clause.",
    "translation": "Buổi hội thảo sắp tới về hậu cần chuỗi cung ứng, vốn ban đầu được lên lịch vào thứ Ba, đã được chuyển sang thứ Sáu.",
    "core_vocabulary": [
      { "word": "originally", "type": "adv.", "meaning": "ban đầu" },
      { "word": "scheduled", "type": "adj.", "meaning": "được lên lịch" }
    ]
  },
  {
    "id": "q1383",
    "question": "The board of directors will decide ------- the proposed merger with Zenith Corp is financially viable.",
    "options": { "A": "whose", "B": "whether", "C": "about", "D": "that" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whether' dùng trong mệnh đề danh ngữ để chỉ sự lựa chọn/nghi vấn (có hay không).",
    "explanation_grammar": "Noun Clause (Whether).",
    "translation": "Hội đồng quản trị sẽ quyết định xem liệu việc sáp nhập được đề xuất với Zenith Corp có khả thi về mặt tài chính hay không.",
    "core_vocabulary": [
      { "word": "merger", "type": "n.", "meaning": "sự sáp nhập" },
      { "word": "viable", "type": "adj.", "meaning": "khả thi" }
    ]
  },
  {
    "id": "q1384",
    "question": "After ten years of service, Ms. Lin decided to resign, ------- the department with a significant leadership gap.",
    "options": { "A": "to be left", "B": "left", "C": "leave", "D": "leaving" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "Dùng hiện tại phân từ (V-ing) để chỉ kết quả của hành động đứng trước.",
    "explanation_grammar": "Participle Clause for Result.",
    "translation": "Sau mười năm làm việc, bà Lin đã quyết định từ chức, để lại một khoảng trống lãnh đạo đáng kể cho bộ phận.",
    "core_vocabulary": [
      { "word": "resign", "type": "v.", "meaning": "từ chức" },
      { "word": "leadership gap", "type": "n.", "meaning": "khoảng trống lãnh đạo" }
    ]
  },
  {
    "id": "q1385",
    "question": "Employees ------- wish to apply for the tuition reimbursement program must submit their forms by the end of the month.",
    "options": { "A": "whose", "B": "who", "C": "which", "D": "whom" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'Employees' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Những nhân viên muốn đăng ký chương trình hoàn trả học phí phải nộp đơn trước cuối tháng.",
    "core_vocabulary": [
      { "word": "tuition", "type": "n.", "meaning": "học phí" },
      { "word": "reimbursement", "type": "n.", "meaning": "sự hoàn trả" }
    ]
  },
  {
    "id": "q1386",
    "question": "The maintenance crew will begin repairing the elevator ------- at 9:00 AM tomorrow morning.",
    "options": { "A": "start", "B": "starting", "C": "starter", "D": "started" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng chủ động (which starts -> starting).",
    "explanation_grammar": "Reduced Relative Clause (Active).",
    "translation": "Đội bảo trì sẽ bắt đầu sửa chữa thang máy bắt đầu vào lúc 9 giờ sáng mai.",
    "core_vocabulary": [
      { "word": "repair", "type": "v.", "meaning": "sửa chữa" }
    ]
  },
  {
    "id": "q1387",
    "question": "Mr. Henderson, ------- has been managing the regional office since 2015, will be promoted to Vice President.",
    "options": { "A": "who", "B": "which", "C": "whom", "D": "whose" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'Mr. Henderson' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Ông Henderson, người đã quản lý văn phòng khu vực từ năm 2015, sẽ được thăng chức thành Phó Chủ tịch.",
    "core_vocabulary": [
      { "word": "promote", "type": "v.", "meaning": "thăng chức/quảng bá" }
    ]
  },
  {
    "id": "q1388",
    "question": "The legal team is still investigating ------- the data breach occurred despite the new security protocols.",
    "options": { "A": "which", "B": "whom", "C": "how", "D": "that" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'How' dùng trong mệnh đề danh ngữ để chỉ cách thức một sự việc xảy ra.",
    "explanation_grammar": "Noun Clause (How).",
    "translation": "Nhóm pháp lý vẫn đang điều tra cách thức vụ rò rỉ dữ liệu xảy ra bất chấp các giao thức bảo mật mới.",
    "core_vocabulary": [
      { "word": "breach", "type": "n.", "meaning": "sự vi phạm/rò rỉ" },
      { "word": "protocol", "type": "n.", "meaning": "giao thức" }
    ]
  },
  {
    "id": "q1389",
    "question": "We are pleased to announce a new partnership ------- will allow us to expand our services into Southeast Asia.",
    "options": { "A": "whom", "B": "what", "C": "who", "D": "which" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'partnership' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Chúng tôi vui mừng thông báo một mối quan hệ đối tác mới sẽ cho phép chúng tôi mở rộng dịch vụ vào Đông Nam Á.",
    "core_vocabulary": [
      { "word": "partnership", "type": "n.", "meaning": "quan hệ đối tác" }
    ]
  },
  {
    "id": "q1390",
    "question": "The CEO is currently in a meeting with the investors ------- she invited to tour the new manufacturing plant.",
    "options": { "A": "which", "B": "whose", "C": "whom", "D": "who" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whom' thay thế cho danh từ chỉ người 'investors' làm tân ngữ cho động từ 'invited'.",
    "explanation_grammar": "Relative Pronoun (Object).",
    "translation": "Giám đốc điều hành hiện đang trong một cuộc họp với các nhà đầu tư mà bà đã mời đến tham quan nhà máy sản xuất mới.",
    "core_vocabulary": [
      { "word": "tour", "type": "v./n.", "meaning": "tham quan/chuyến tham quan" }
    ]
  },
  {
    "id": "q1391",
    "question": "The annual report ------- by the accounting department shows a 15% increase in net profit.",
    "options": { "A": "prepare", "B": "preparing", "C": "prepares", "D": "prepared" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng bị động (which was prepared -> prepared).",
    "explanation_grammar": "Reduced Relative Clause (Passive).",
    "translation": "Báo cáo thường niên được chuẩn bị bởi bộ phận kế toán cho thấy lợi nhuận ròng tăng 15%.",
    "core_vocabulary": [
      { "word": "net profit", "type": "n.", "meaning": "lợi nhuận ròng" }
    ]
  },
  {
    "id": "q1392",
    "question": "Please inform the human resources department ------- you will be able to attend the mandatory safety training.",
    "options": { "A": "whether", "B": "that", "C": "whose", "D": "which" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whether' dùng để hỏi xem liệu việc đó có xảy ra hay không.",
    "explanation_grammar": "Noun Clause (Whether).",
    "translation": "Vui lòng thông báo cho bộ phận nhân sự liệu bạn có thể tham gia buổi đào tạo an toàn bắt buộc hay không.",
    "core_vocabulary": [
      { "word": "mandatory", "type": "adj.", "meaning": "bắt buộc" }
    ]
  },
  {
    "id": "q1393",
    "question": "The boutique hotel will remain closed for three weeks ------- the lobby is being repainted.",
    "options": { "A": "who", "B": "during", "C": "which", "D": "while" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'While' (trong khi) là liên từ chỉ thời gian nối hai mệnh đề.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Khách sạn phong cách sẽ đóng cửa trong ba tuần trong khi sảnh đang được sơn lại.",
    "core_vocabulary": [
      { "word": "lobby", "type": "n.", "meaning": "sảnh/hành lang" }
    ]
  },
  {
    "id": "q1394",
    "question": "Mr. Thompson is the senior architect ------- designs for the new headquarters won the international competition.",
    "options": { "A": "whom", "B": "whose", "C": "which", "D": "who" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whose' thay thế cho tính từ sở hữu của 'Thompson' chỉ sở hữu đối với 'designs'.",
    "explanation_grammar": "Relative Pronoun (Possessive).",
    "translation": "Ông Thompson là kiến trúc sư cao cấp có các thiết kế cho trụ sở mới đã giành chiến thắng trong cuộc thi quốc tế.",
    "core_vocabulary": [
      { "word": "headquarters", "type": "n.", "meaning": "trụ sở chính" }
    ]
  },
  {
    "id": "q1395",
    "question": "To reward those ------- have consistently met their monthly sales targets, the company is offering a weekend retreat.",
    "options": { "A": "what", "B": "whom", "C": "which", "D": "who" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho 'those' (chỉ người) làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Để thưởng cho những người đã liên tục đạt được mục tiêu doanh số hàng tháng, công ty đang tặng một chuyến đi nghỉ dưỡng cuối tuần.",
    "core_vocabulary": [
      { "word": "consistently", "type": "adv.", "meaning": "một cách nhất quán/liên tục" },
      { "word": "retreat", "type": "n.", "meaning": "chuyến đi nghỉ dưỡng/nơi ẩn dật" }
    ]
  },
  {
    "id": "q1396",
    "question": "The research paper ------- by Dr. Arisaka provides new insights into consumer behavior in the digital age.",
    "options": { "A": "writing", "B": "write", "C": "wrote", "D": "written" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng bị động (which was written -> written).",
    "explanation_grammar": "Reduced Relative Clause (Passive).",
    "translation": "Bài nghiên cứu được viết bởi Tiến sĩ Arisaka cung cấp những hiểu biết mới về hành vi của người tiêu dùng trong kỷ nguyên kỹ thuật số.",
    "core_vocabulary": [
      { "word": "insight", "type": "n.", "meaning": "sự hiểu biết sâu sắc/cái nhìn sâu sắc" }
    ]
  },
  {
    "id": "q1397",
    "question": "The client wanted to know ------- the shipment of electronic components would arrive at the warehouse.",
    "options": { "A": "when", "B": "who", "C": "that", "D": "which" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'When' đóng vai trò là từ nối chỉ thời gian trong mệnh đề danh ngữ.",
    "explanation_grammar": "Noun Clause (When).",
    "translation": "Khách hàng muốn biết khi nào lô hàng linh kiện điện tử sẽ đến kho.",
    "core_vocabulary": [
      { "word": "component", "type": "n.", "meaning": "thành phần/linh kiện" }
    ]
  },
  {
    "id": "q1398",
    "question": "The software update ------- was released last night has caused some technical issues with the payroll system.",
    "options": { "A": "who", "B": "what", "C": "whom", "D": "which" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'update' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Bản cập nhật phần mềm được phát hành đêm qua đã gây ra một số vấn đề kỹ thuật với hệ thống trả lương.",
    "core_vocabulary": [
      { "word": "payroll", "type": "n.", "meaning": "bảng lương/sự trả lương" }
    ]
  },
  {
    "id": "q1399",
    "question": "Before launching the product, we must verify ------- all safety regulations have been strictly followed.",
    "options": { "A": "that", "B": "which", "C": "whose", "D": "whether" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'That' làm từ nối trong mệnh đề danh ngữ đóng vai trò tân ngữ.",
    "explanation_grammar": "Noun Clause (That).",
    "translation": "Trước khi tung ra sản phẩm, chúng ta phải xác nhận rằng tất cả các quy định an toàn đã được tuân thủ nghiêm ngặt.",
    "core_vocabulary": [
      { "word": "strictly", "type": "adv.", "meaning": "một cách nghiêm ngặt" }
    ]
  },
  {
    "id": "q1400",
    "question": "The company is seeking a bilingual receptionist ------- is proficient in both English and Japanese.",
    "options": { "A": "who", "B": "whom", "C": "what", "D": "which" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'receptionist' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Công ty đang tìm kiếm một nhân viên lễ tân song ngữ thành thạo cả tiếng Anh và tiếng Nhật.",
    "core_vocabulary": [
      { "word": "bilingual", "type": "adj.", "meaning": "song ngữ" },
      { "word": "proficient", "type": "adj.", "meaning": "thành thạo/giỏi" }
    ]
  },
  {
    "id": "q1401",
    "question": "The presentation ------- by the project manager yesterday was very well received by the stakeholders.",
    "options": { "A": "gave", "B": "give", "C": "given", "D": "giving" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng bị động (which was given -> given).",
    "explanation_grammar": "Reduced Relative Clause (Passive).",
    "translation": "Bài thuyết trình được trình bày bởi người quản lý dự án ngày hôm qua đã được các bên liên quan đón nhận rất nồng nhiệt.",
    "core_vocabulary": [
      { "word": "stakeholder", "type": "n.", "meaning": "bên liên quan" }
    ]
  },
  {
    "id": "q1402",
    "question": "The manager needs to determine ------- of the two candidates is better suited for the logistics role.",
    "options": { "A": "whose", "B": "which", "C": "who", "D": "that" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' dùng để lựa chọn trong một số lượng giới hạn các phương án.",
    "explanation_grammar": "Wh-word in Noun Clause.",
    "translation": "Người quản lý cần xác định xem ai trong số hai ứng viên phù hợp hơn cho vai trò hậu cần.",
    "core_vocabulary": [
      { "word": "suited", "type": "adj.", "meaning": "phù hợp" }
    ]
  },
  {
    "id": "q1403",
    "question": "Ms. Park, ------- the committee selected as the keynote speaker, has over thirty years of experience in finance.",
    "options": { "A": "which", "B": "who", "C": "whom", "D": "whose" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whom' thay thế cho danh từ chỉ người 'Ms. Park' làm tân ngữ cho động từ 'selected'.",
    "explanation_grammar": "Relative Pronoun (Object).",
    "translation": "Bà Park, người mà ủy ban đã chọn làm diễn giả chính, có hơn ba mươi năm kinh nghiệm trong lĩnh vực tài chính.",
    "core_vocabulary": [
      { "word": "keynote speaker", "type": "n.", "meaning": "diễn giả chính" }
    ]
  },
  {
    "id": "q1404",
    "question": "The contract ------- you signed last week clearly outlines the terms of the severance package.",
    "options": { "A": "whom", "B": "what", "C": "who", "D": "which" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'contract' làm tân ngữ cho động từ 'signed'.",
    "explanation_grammar": "Relative Pronoun (Object).",
    "translation": "Hợp đồng mà bạn đã ký tuần trước nêu rõ các điều khoản của gói trợ cấp thôi việc.",
    "core_vocabulary": [
      { "word": "severance package", "type": "n.", "meaning": "gói trợ cấp thôi việc" }
    ]
  },
  {
    "id": "q1405",
    "question": "The technician is checking the server ------- to identify the cause of the recent system crashes.",
    "options": { "A": "now", "B": "already", "C": "yet", "D": "since" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Now' là trạng từ chỉ thời gian phù hợp với thì hiện tại tiếp diễn.",
    "explanation_grammar": "Adverb of Time.",
    "translation": "Kỹ thuật viên đang kiểm tra máy chủ ngay bây giờ để xác định nguyên nhân của các vụ sập hệ thống gần đây.",
    "core_vocabulary": [
      { "word": "technician", "type": "n.", "meaning": "kỹ thuật viên" },
      { "word": "crash", "type": "n./v.", "meaning": "sự cố/sập/va chạm" }
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
  console.log('Successfully appended 25 questions for MĐQH Test 4.');
} else {
  console.error('Could not find end of array in questions.js');
}
