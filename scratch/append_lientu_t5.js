const fs = require('fs');
const path = require('path');

const questions = [
  {
    "id": "q1261",
    "question": "Ms. Kim will finalize the annual budget ______ the department heads submit their final expenditure reports.",
    "options": { "A": "following", "B": "once", "C": "already", "D": "during" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Once' (một khi/ngay khi) dùng làm liên từ chỉ thời gian, nối hai mệnh đề.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Bà Kim sẽ hoàn thiện ngân sách hàng năm ngay khi các trưởng bộ phận nộp báo cáo chi tiêu cuối cùng của họ.",
    "core_vocabulary": [
      { "word": "finalize", "type": "v.", "meaning": "hoàn thiện/chốt" },
      { "word": "expenditure", "type": "n.", "meaning": "chi tiêu" }
    ]
  },
  {
    "id": "q1262",
    "question": "The security system will be upgraded next weekend ______ unauthorized access to the server room can be prevented.",
    "options": { "A": "because of", "B": "so that", "C": "so as to", "D": "therefore" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'So that' (để mà) dùng để chỉ mục đích, theo sau là một mệnh đề.",
    "explanation_grammar": "Conjunction of Purpose.",
    "translation": "Hệ thống an ninh sẽ được nâng cấp vào cuối tuần tới để có thể ngăn chặn việc truy cập trái phép vào phòng máy chủ.",
    "core_vocabulary": [
      { "word": "unauthorized", "type": "adj.", "meaning": "trái phép" },
      { "word": "prevent", "type": "v.", "meaning": "ngăn chặn" }
    ]
  },
  {
    "id": "q1263",
    "question": "______ the weather forecast predicts heavy snow, the corporate gala will proceed as scheduled at the Grand Hotel.",
    "options": { "A": "Despite", "B": "In spite of", "C": "Even though", "D": "However" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Even though' (mặc dù) dùng để chỉ sự nhượng bộ, theo sau là một mệnh đề.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Mặc dù dự báo thời tiết dự đoán sẽ có tuyết rơi dày, buổi tiệc gala của công ty vẫn sẽ diễn ra như lịch trình tại khách sạn Grand.",
    "core_vocabulary": [
      { "word": "predict", "type": "v.", "meaning": "dự báo" },
      { "word": "proceed", "type": "v.", "meaning": "tiến hành/diễn ra" }
    ]
  },
  {
    "id": "q1264",
    "question": "Please save a copy of your presentation on a flash drive ______ the internet connection fails during the meeting.",
    "options": { "A": "if so", "B": "provided that", "C": "in case", "D": "so that" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'In case' (phòng khi) dùng để chuẩn bị cho một tình huống có thể xảy ra.",
    "explanation_grammar": "Conjunction of Condition.",
    "translation": "Vui lòng lưu một bản sao bài thuyết trình của bạn vào ổ flash phòng khi kết nối internet bị lỗi trong cuộc họp.",
    "core_vocabulary": [
      { "word": "presentation", "type": "n.", "meaning": "bài thuyết trình" },
      { "word": "fail", "type": "v.", "meaning": "thất bại/lỗi" }
    ]
  },
  {
    "id": "q1265",
    "question": "The shipment of office furniture will be delayed ______ the supplier clarifies the missing information on the invoice.",
    "options": { "A": "until", "B": "during", "C": "since", "D": "already" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Until' (cho đến khi) chỉ mốc thời gian kết thúc của việc trì hoãn.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Lô hàng nội thất văn phòng sẽ bị trì hoãn cho đến khi nhà cung cấp làm rõ thông tin còn thiếu trên hóa đơn.",
    "core_vocabulary": [
      { "word": "shipment", "type": "n.", "meaning": "lô hàng" },
      { "word": "clarify", "type": "v.", "meaning": "làm rõ" }
    ]
  },
  {
    "id": "q1266",
    "question": "______ Mr. Patel has over ten years of experience in accounting, he was promoted to Senior Financial Analyst.",
    "options": { "A": "In light of", "B": "Resulting in", "C": "Because", "D": "Due to" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Because' (bởi vì) nối hai mệnh đề chỉ nguyên nhân - kết quả.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Bởi vì ông Patel đã có hơn mười năm kinh nghiệm trong lĩnh vực kế toán, ông đã được thăng chức lên Chuyên viên Phân tích Tài chính Cấp cao.",
    "core_vocabulary": [
      { "word": "accounting", "type": "n.", "meaning": "ngành kế toán" },
      { "word": "promote", "type": "v.", "meaning": "thăng chức" }
    ]
  },
  {
    "id": "q1267",
    "question": "You can use the executive lounge ______ you are a member of the company’s gold loyalty program.",
    "options": { "A": "as well as", "B": "owing to", "C": "instead of", "D": "provided that" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Provided that' (miễn là/với điều kiện là) đưa ra một điều kiện.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Bạn có thể sử dụng phòng chờ điều hành miễn là bạn là thành viên của chương trình khách hàng thân thiết hạng vàng của công ty.",
    "core_vocabulary": [
      { "word": "executive", "type": "adj.", "meaning": "điều hành/cao cấp" },
      { "word": "loyalty program", "type": "n.", "meaning": "chương trình khách hàng thân thiết" }
    ]
  },
  {
    "id": "q1268",
    "question": "The printing of the brochures must be completed ______ the marketing team leaves for the trade show.",
    "options": { "A": "soon", "B": "prior to", "C": "before", "D": "already" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Before' (trước khi) là liên từ chỉ thời gian nối hai mệnh đề.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Việc in ấn các tài liệu quảng cáo phải được hoàn thành trước khi đội tiếp thị lên đường tham dự triển lãm thương mại.",
    "core_vocabulary": [
      { "word": "brochure", "type": "n.", "meaning": "sách quảng cáo nhỏ" },
      { "word": "trade show", "type": "n.", "meaning": "triển lãm thương mại" }
    ]
  },
  {
    "id": "q1269",
    "question": "______ the training session was mandatory for all staff, several employees were unable to attend due to prior commitments.",
    "options": { "A": "Nevertheless", "B": "Despite", "C": "Regardless of", "D": "Although" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Although' (mặc dù) dùng để chỉ sự tương phản giữa hai mệnh đề.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Mặc dù buổi đào tạo là bắt buộc đối với tất cả nhân viên, một vài người đã không thể tham dự do có các cam kết trước đó.",
    "core_vocabulary": [
      { "word": "mandatory", "type": "adj.", "meaning": "bắt buộc" },
      { "word": "commitment", "type": "n.", "meaning": "cam kết/nhiệm vụ" }
    ]
  },
  {
    "id": "q1270",
    "question": "We will start the video conference ______ everyone has arrived in the main briefing room.",
    "options": { "A": "upon", "B": "as soon as", "C": "during", "D": "quickly" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'As soon as' (ngay khi) chỉ một hành động xảy ra ngay sau một hành động khác.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Chúng tôi sẽ bắt đầu cuộc họp video ngay khi mọi người đã đến phòng họp chính.",
    "core_vocabulary": [
      { "word": "briefing room", "type": "n.", "meaning": "phòng họp/phòng tóm tắt công việc" }
    ]
  },
  {
    "id": "q1271",
    "question": "The office will remain open until 8 PM ______ employees can finish their end-of-quarter reports.",
    "options": { "A": "so that", "B": "regarding", "C": "thus", "D": "in order to" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'So that' (để mà) dùng trước một mệnh đề chỉ mục đích.",
    "explanation_grammar": "Conjunction of Purpose.",
    "translation": "Văn phòng sẽ vẫn mở cửa cho đến 8 giờ tối để nhân viên có thể hoàn thành báo cáo cuối quý của họ.",
    "core_vocabulary": [
      { "word": "quarter", "type": "n.", "meaning": "quý (3 tháng)" }
    ]
  },
  {
    "id": "q1272",
    "question": "______ the elevator is being repaired, please use the stairs at the end of the hallway.",
    "options": { "A": "Since", "B": "Due to", "C": "Because of", "D": "Therefore" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Since' (vì) đóng vai trò liên từ chỉ nguyên nhân.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Vì thang máy đang được sửa chữa, vui lòng sử dụng cầu thang bộ ở cuối hành lang.",
    "core_vocabulary": [
      { "word": "hallway", "type": "n.", "meaning": "hành lang" }
    ]
  },
  {
    "id": "q1273",
    "question": "The contract will be officially signed ______ both legal teams agree on the final terms and conditions.",
    "options": { "A": "during", "B": "instead of", "C": "unless", "D": "if" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'If' (nếu) dùng để đưa ra điều kiện cho hành động ở mệnh đề chính.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Hợp đồng sẽ chính thức được ký kết nếu cả hai đội ngũ pháp lý đồng ý về các điều khoản và điều kiện cuối cùng.",
    "core_vocabulary": [
      { "word": "legal team", "type": "n.", "meaning": "đội ngũ pháp lý" },
      { "word": "terms and conditions", "type": "n.", "meaning": "các điều khoản và điều kiện" }
    ]
  },
  {
    "id": "q1274",
    "question": "______ the high cost of the new equipment, the board of directors decided to approve the purchase.",
    "options": { "A": "However", "B": "During", "C": "In spite of", "D": "While" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'In spite of' (mặc dù) dùng trước một danh từ/cụm danh từ chỉ sự nhượng bộ.",
    "explanation_grammar": "Concessive Phrase.",
    "translation": "Mặc dù chi phí của thiết bị mới rất cao, ban giám đốc vẫn quyết định phê duyệt việc mua sắm.",
    "core_vocabulary": [
      { "word": "equipment", "type": "n.", "meaning": "thiết bị" },
      { "word": "purchase", "type": "v./n.", "meaning": "mua sắm" }
    ]
  },
  {
    "id": "q1275",
    "question": "The staff lounge is available for use ______ you clean up after yourself before leaving.",
    "options": { "A": "depending on", "B": "nevertheless", "C": "with", "D": "as long as" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'As long as' (miễn là) dùng để đưa ra điều kiện tiên quyết.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Phòng chờ của nhân viên sẵn sàng để sử dụng miễn là bạn tự dọn dẹp sau khi dùng xong trước khi rời đi.",
    "core_vocabulary": [
      { "word": "lounge", "type": "n.", "meaning": "phòng chờ/phòng nghỉ" }
    ]
  },
  {
    "id": "q1276",
    "question": "______ the merger was announced yesterday, employees have been asking many questions about their future roles.",
    "options": { "A": "Now", "B": "Because of", "C": "Now that", "D": "Following" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Now that' (vì giờ đây) dùng để chỉ nguyên nhân từ một sự kiện vừa mới xảy ra.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Vì giờ đây sự sáp nhập đã được công bố hôm qua, các nhân viên đã và đang đặt nhiều câu hỏi về vai trò tương lai của họ.",
    "core_vocabulary": [
      { "word": "merger", "type": "n.", "meaning": "sự sáp nhập" }
    ]
  },
  {
    "id": "q1277",
    "question": "You should not sign any documents ______ you have read them thoroughly and understood all the clauses.",
    "options": { "A": "rather than", "B": "without", "C": "except", "D": "unless" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Unless' (trừ khi) dùng cho điều kiện phủ định, theo sau là mệnh đề.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Bạn không nên ký bất kỳ tài liệu nào trừ khi bạn đã đọc kỹ chúng và hiểu tất cả các điều khoản.",
    "core_vocabulary": [
      { "word": "thoroughly", "type": "adv.", "meaning": "một cách kỹ lưỡng" },
      { "word": "clause", "type": "n.", "meaning": "điều khoản/mệnh đề" }
    ]
  },
  {
    "id": "q1278",
    "question": "Mr. Lee will handle all client inquiries ______ the manager is away at the international conference.",
    "options": { "A": "meanwhile", "B": "within", "C": "during", "D": "while" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'While' (trong khi) dùng để nối hai mệnh đề chỉ hành động xảy ra đồng thời.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Ông Lee sẽ xử lý tất cả các yêu cầu của khách hàng trong khi quản lý đi vắng tại hội nghị quốc tế.",
    "core_vocabulary": [
      { "word": "inquiry", "type": "n.", "meaning": "yêu cầu/câu hỏi" },
      { "word": "conference", "type": "n.", "meaning": "hội nghị" }
    ]
  },
  {
    "id": "q1279",
    "question": "______ the renovation work is noisy, the management has provided noise-canceling headphones to all staff.",
    "options": { "A": "In addition", "B": "Resulting in", "C": "Due to", "D": "Because" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Because' (bởi vì) giải thích nguyên nhân cho hành động ở mệnh đề chính.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Bởi vì công việc sửa chữa rất ồn ào, ban quản lý đã cung cấp tai nghe chống ồn cho tất cả nhân viên.",
    "core_vocabulary": [
      { "word": "noise-canceling", "type": "adj.", "meaning": "chống ồn/triệt tiêu tiếng ồn" }
    ]
  },
  {
    "id": "q1280",
    "question": "The cafeteria offers a 10% discount to employees ______ they show their company ID card at the register.",
    "options": { "A": "during", "B": "with", "C": "if", "D": "provided" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'If' (nếu) đưa ra điều kiện đơn giản nhất cho ưu đãi.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Căng tin giảm giá 10% cho nhân viên nếu họ xuất trình thẻ nhân viên tại quầy thu ngân.",
    "core_vocabulary": [
      { "word": "register", "type": "n.", "meaning": "quầy thu ngân" }
    ]
  },
  {
    "id": "q1281",
    "question": "______ the project was finished ahead of schedule, the team was given a small bonus for their hard work.",
    "options": { "A": "Therefore", "B": "Because of", "C": "Owing to", "D": "Since" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Since' (vì/bởi vì) dùng để bắt đầu một mệnh đề chỉ nguyên nhân.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Vì dự án đã được hoàn thành trước lịch trình, nhóm đã được thưởng một khoản tiền nhỏ cho sự làm việc chăm chỉ của họ.",
    "core_vocabulary": [
      { "word": "ahead of schedule", "type": "phrase", "meaning": "trước thời hạn/lịch trình" },
      { "word": "bonus", "type": "n.", "meaning": "tiền thưởng" }
    ]
  },
  {
    "id": "q1282",
    "question": "Please inform the receptionist ______ you encounter any issues with your electronic key card.",
    "options": { "A": "regarding", "B": "instead of", "C": "so that", "D": "in case" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'In case' (trong trường hợp/phòng khi) dùng để chỉ tình huống có thể phát sinh.",
    "explanation_grammar": "Conjunction of Condition.",
    "translation": "Vui lòng thông báo cho nhân viên lễ tân phòng khi bạn gặp bất kỳ vấn đề nào với thẻ khóa điện tử của mình.",
    "core_vocabulary": [
      { "word": "encounter", "type": "v.", "meaning": "gặp phải" }
    ]
  },
  {
    "id": "q1283",
    "question": "The workshop will be canceled ______ at least ten people register by the end of the business day.",
    "options": { "A": "unless", "B": "if", "C": "except", "D": "without" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Unless' (trừ khi) có nghĩa là 'nếu không...', dùng cho điều kiện phủ định.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Hội thảo sẽ bị hủy trừ khi có ít nhất mười người đăng ký vào cuối ngày làm việc.",
    "core_vocabulary": [
        { "word": "workshop", "type": "n.", "meaning": "hội thảo/buổi hướng dẫn" }
    ]
  },
  {
    "id": "q1284",
    "question": "______ the marketing manager was busy, she took the time to speak with the new interns.",
    "options": { "A": "Even though", "B": "However", "C": "Despite", "D": "In spite of" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Even though' (mặc dù) nối với một mệnh đề chỉ sự nhượng bộ.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Mặc dù quản lý tiếp thị rất bận rộn, bà vẫn dành thời gian để nói chuyện với các thực tập sinh mới.",
    "core_vocabulary": [
      { "word": "intern", "type": "n.", "meaning": "thực tập sinh" }
    ]
  },
  {
    "id": "q1285",
    "question": "The new software will be installed on all computers ______ the IT department completes the system check.",
    "options": { "A": "then", "B": "following", "C": "furthermore", "D": "after" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'After' (sau khi) chỉ trình tự thời gian, nối hai mệnh đề.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Phần mềm mới sẽ được cài đặt trên tất cả các máy tính sau khi bộ phận CNTT hoàn tất việc kiểm tra hệ thống.",
    "core_vocabulary": [
      { "word": "install", "type": "v.", "meaning": "cài đặt" }
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
  console.log('Successfully appended 25 questions for Test 5.');
} else {
  console.error('Could not find end of array in questions.js');
}
