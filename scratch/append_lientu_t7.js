const fs = require('fs');
const path = require('path');

const questions = [
  {
    "id": "q1311",
    "question": "The marketing team will review the advertising budget ______ the director returns from her vacation.",
    "options": { "A": "during", "B": "meanwhile", "C": "prior", "D": "once" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Once' (một khi/ngay khi) chỉ mốc thời gian hành động sẽ xảy ra sau khi một hành động khác hoàn tất.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Nhóm tiếp thị sẽ xem xét ngân sách quảng cáo ngay sau khi giám đốc trở về từ chuyến nghỉ phép của mình.",
    "core_vocabulary": [
      { "word": "budget", "type": "n.", "meaning": "ngân sách" },
      { "word": "vacation", "type": "n.", "meaning": "kỳ nghỉ/chuyến nghỉ phép" }
    ]
  },
  {
    "id": "q1312",
    "question": "______ the printer in the main office is broken, please use the one on the second floor.",
    "options": { "A": "Therefore", "B": "As a result", "C": "Since", "D": "Due to" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Since' (vì) dùng làm liên từ chỉ nguyên nhân, đứng đầu câu nối hai mệnh đề.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Vì máy in ở văn phòng chính bị hỏng, vui lòng sử dụng máy in ở tầng hai.",
    "core_vocabulary": [
      { "word": "broken", "type": "adj.", "meaning": "hỏng" }
    ]
  },
  {
    "id": "q1313",
    "question": "Employees are encouraged to take a short break ______ they feel tired during their shift.",
    "options": { "A": "if", "B": "instead of", "C": "because of", "D": "unless" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'If' (nếu) dùng để đưa ra điều kiện hoặc giả định.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Nhân viên được khuyến khích nghỉ ngơi một lúc nếu họ cảm thấy mệt mỏi trong ca làm việc của mình.",
    "core_vocabulary": [
      { "word": "encourage", "type": "v.", "meaning": "khuyến khích" },
      { "word": "shift", "type": "n.", "meaning": "ca làm việc" }
    ]
  },
  {
    "id": "q1314",
    "question": "Ms. Jenkins booked a larger conference room ______ more people signed up for the workshop than expected.",
    "options": { "A": "furthermore", "B": "due to", "C": "resulting in", "D": "because" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Because' (vì) nối hai mệnh đề chỉ nguyên nhân.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Cô Jenkins đã đặt một phòng họp lớn hơn vì có nhiều người đăng ký tham gia hội thảo hơn dự kiến.",
    "core_vocabulary": [
      { "word": "sign up", "type": "v.", "meaning": "đăng ký" },
      { "word": "expected", "type": "adj.", "meaning": "dự kiến/mong đợi" }
    ]
  },
  {
    "id": "q1315",
    "question": "The new employee orientation will not start ______ all the registered participants have arrived.",
    "options": { "A": "during", "B": "until", "C": "prior", "D": "meanwhile" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Until' (cho đến khi) chỉ mốc thời gian môt trạng thái kết thúc.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Buổi định hướng nhân viên mới sẽ không bắt đầu cho đến khi tất cả những người tham gia đã đăng ký đều đã đến đông đủ.",
    "core_vocabulary": [
      { "word": "orientation", "type": "n.", "meaning": "buổi định hướng" },
      { "word": "participant", "type": "n.", "meaning": "người tham gia" }
    ]
  },
  {
    "id": "q1316",
    "question": "______ the quarterly profits were lower than expected, the company did not reduce its staff.",
    "options": { "A": "Even though", "B": "Despite", "C": "However", "D": "In spite of" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Even though' (mặc dù) dùng để chỉ sự nhượng bộ, đứng trước một mệnh đề.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Mặc dù lợi nhuận hàng quý thấp hơn dự kiến, công ty vẫn không cắt giảm nhân sự.",
    "core_vocabulary": [
      { "word": "quarterly", "type": "adj.", "meaning": "hàng quý" },
      { "word": "profit", "type": "n.", "meaning": "lợi nhuận" }
    ]
  },
  {
    "id": "q1317",
    "question": "You must submit your time-off request at least two weeks in advance ______ your manager can adjust the schedule.",
    "options": { "A": "in order to", "B": "so that", "C": "therefore", "D": "because of" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'So that' (để mà) dùng trước mệnh đề chỉ mục đích.",
    "explanation_grammar": "Conjunction of Purpose.",
    "translation": "Bạn phải nộp yêu cầu nghỉ phép của mình trước ít nhất hai tuần để quản lý của bạn có thể điều chỉnh lịch trình.",
    "core_vocabulary": [
      { "word": "time-off request", "type": "n.", "meaning": "yêu cầu nghỉ phép" },
      { "word": "adjust", "type": "v.", "meaning": "điều chỉnh" }
    ]
  },
  {
    "id": "q1318",
    "question": "______ Mr. Takahashi works in the accounting department, he frequently collaborates with the sales team.",
    "options": { "A": "During", "B": "In contrast", "C": "Meanwhile", "D": "While" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'While' (mặc dù/trong khi) dùng để chỉ sự tương phản giữa hai ý trong cùng một câu.",
    "explanation_grammar": "Contrast/Concessive Conjunction.",
    "translation": "Mặc dù ông Takahashi làm việc ở bộ phận kế toán, ông thường xuyên cộng tác với nhóm bán hàng.",
    "core_vocabulary": [
      { "word": "collaborate", "type": "v.", "meaning": "cộng tác/hợp tác" }
    ]
  },
  {
    "id": "q1319",
    "question": "The store offers a full refund ______ the returned item is still in its original packaging.",
    "options": { "A": "despite", "B": "owing to", "C": "as well as", "D": "provided that" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Provided that' (miễn là/với điều kiện là) dùng để đưa ra điều kiện.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Cửa hàng sẽ hoàn tiền đầy đủ miễn là món hàng bị trả lại vẫn còn nguyên trong bao bì gốc của nó.",
    "core_vocabulary": [
      { "word": "refund", "type": "n.", "meaning": "tiền hoàn trả" },
      { "word": "packaging", "type": "n.", "meaning": "bao bì" }
    ]
  },
  {
    "id": "q1320",
    "question": "Please make sure to back up all your important files ______ the software update begins.",
    "options": { "A": "before", "B": "prior", "C": "ahead", "D": "already" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Before' (trước khi) là liên từ chỉ thời gian nối hai mệnh đề.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Vui lòng đảm bảo sao lưu tất cả các tệp quan trọng của bạn trước khi quá trình cập nhật phần mềm bắt đầu.",
    "core_vocabulary": [
      { "word": "back up", "type": "v.", "meaning": "sao lưu" }
    ]
  },
  {
    "id": "q1321",
    "question": "The cafeteria menu will feature more vegetarian options next month ______ several employees requested them.",
    "options": { "A": "resulting in", "B": "due to", "C": "therefore", "D": "because" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Because' (vì) nối mệnh đề chỉ nguyên nhân.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Thực đơn của căng tin sẽ có nhiều lựa chọn món chay hơn vào tháng tới vì một vài nhân viên đã yêu cầu chúng.",
    "core_vocabulary": [
      { "word": "vegetarian", "type": "adj./n.", "meaning": "thuần chay/người ăn chay" }
    ]
  },
  {
    "id": "q1322",
    "question": "______ you need any assistance with the new photocopier, please contact the administrative assistant.",
    "options": { "A": "Instead of", "B": "In case", "C": "Regarding", "D": "So that" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'In case' (trong trường hợp/phòng khi) dùng để đưa ra giả định tình huống có thể xảy ra.",
    "explanation_grammar": "Conjunction of Condition.",
    "translation": "Trong trường hợp bạn cần hỗ trợ với máy photocopy mới, vui lòng liên hệ với trợ lý hành chính.",
    "core_vocabulary": [
      { "word": "photocopier", "type": "n.", "meaning": "máy photocopy" },
      { "word": "administrative", "type": "adj.", "meaning": "thuộc về hành chính" }
    ]
  },
  {
    "id": "q1323",
    "question": "Sunrise Cafe will offer free pastries tomorrow morning ______ they are celebrating their first anniversary.",
    "options": { "A": "since", "B": "nevertheless", "C": "due to", "D": "as a result" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Since' (vì) đứng ở giữa câu để giải thích nguyên nhân.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Sunrise Cafe sẽ tặng bánh ngọt miễn phí vào sáng mai vì họ đang kỷ niệm một năm ngày thành lập.",
    "core_vocabulary": [
      { "word": "pastry", "type": "n.", "meaning": "bánh ngọt/bánh nướng" },
      { "word": "anniversary", "type": "n.", "meaning": "lễ kỷ niệm" }
    ]
  },
  {
    "id": "q1324",
    "question": "The maintenance crew will inspect the air conditioning units ______ the summer season officially begins.",
    "options": { "A": "already", "B": "prior to", "C": "ahead", "D": "before" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Before' (trước khi) chỉ mốc thời gian hành động xảy ra.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Đội ngũ bảo trì sẽ kiểm tra các đơn vị điều hòa không khí trước khi mùa hè chính thức bắt đầu.",
    "core_vocabulary": [
      { "word": "maintenance", "type": "n.", "meaning": "sự bảo trì" },
      { "word": "officially", "type": "adv.", "meaning": "một cách chính thức" }
    ]
  },
  {
    "id": "q1325",
    "question": "______ the initial design was rejected by the client, the team had to work late to create a new proposal.",
    "options": { "A": "Since", "B": "Because of", "C": "Therefore", "D": "Due to" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Since' (vA) nối mệnh đề chỉ nguyên nhân khởi đầu câu.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Vì thiết kế ban đầu đã bị khách hàng từ chối, cả nhóm đã phải làm việc muộn để tạo ra một đề xuất mới.",
    "core_vocabulary": [
      { "word": "reject", "type": "v.", "meaning": "từ chối/loại bỏ" }
    ]
  },
  {
    "id": "q1326",
    "question": "You will not be allowed to enter the secure laboratory area ______ you show a valid identification badge.",
    "options": { "A": "rather than", "B": "except", "C": "without", "D": "unless" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Unless' (trừ khi) đưa ra điều kiện tiên quyết cho việc được phép vào.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Bạn sẽ không được phép đi vào khu vực phòng thí nghiệm an ninh trừ khi bạn xuất trình thẻ nhận dạng hợp lệ.",
    "core_vocabulary": [
      { "word": "laboratory", "type": "n.", "meaning": "phòng thí nghiệm" },
      { "word": "identification badge", "type": "n.", "meaning": "thẻ nhận dạng" }
    ]
  },
  {
    "id": "q1327",
    "question": "______ the fire alarm test concluded, the staff returned to their desks to resume working.",
    "options": { "A": "Subsequently", "B": "Then", "C": "After", "D": "Following" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'After' (sau khi) chỉ trình tự thời gian giữa hai hành động.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Sau khi buổi kiểm tra báo cháy kết thúc, nhân viên đã trở lại bàn làm việc để tiếp tục làm việc.",
    "core_vocabulary": [
      { "word": "conclude", "type": "v.", "meaning": "kết luận/kết thúc" },
      { "word": "resume", "type": "v.", "meaning": "tiếp tục/bắt đầu lại" }
    ]
  },
  {
    "id": "q1328",
    "question": "The management decided to delay the product launch ______ the promotional materials were not fully prepared.",
    "options": { "A": "consequently", "B": "due to", "C": "because", "D": "in spite of" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Because' (vì) nối hai mệnh đề chỉ nguyên nhân.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Ban quản lý đã quyết định trì hoãn việc tung ra sản phẩm vì các vật liệu quảng bá vẫn chưa được chuẩn bị đầy đủ.",
    "core_vocabulary": [
      { "word": "promotional materials", "type": "n.", "meaning": "các vật liệu/tài liệu quảng bá" }
    ]
  },
  {
    "id": "q1329",
    "question": "______ the new billing software is very complex, the staff learned how to use it quite quickly.",
    "options": { "A": "Although", "B": "However", "C": "In spite of", "D": "Despite" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Although' (mặc dù) đứng trước một mệnh đề chỉ sự nhượng bộ.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Mặc dù phần mềm lập hóa đơn mới rất phức tạp, các nhân viên đã học cách sử dụng nó khá nhanh.",
    "core_vocabulary": [
      { "word": "billing", "type": "n.", "meaning": "lập hóa đơn/thanh toán" },
      { "word": "complex", "type": "adj.", "meaning": "phức tạp" }
    ]
  },
  {
    "id": "q1330",
    "question": "Mr. Rossi will send an email update to all departments ______ the board makes a final decision.",
    "options": { "A": "as soon as", "B": "upon", "C": "following", "D": "meanwhile" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'As soon as' (ngay khi) chỉ mốc thời gian hành động xảy ra ngay lập tức.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Ông Rossi sẽ gửi một email cập nhật cho tất cả các phòng ban ngay khi hội đồng quản trị đưa ra quyết định cuối cùng.",
    "core_vocabulary": [
      { "word": "final decision", "type": "n.", "meaning": "quyết định cuối cùng" }
    ]
  },
  {
    "id": "q1331",
    "question": "The HR department is updating the employee handbook ______ new staff members can easily find the company policies.",
    "options": { "A": "thus", "B": "so that", "C": "for", "D": "in order to" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'So that' (để mà) dùng để chỉ mục đích, đứng trước một mệnh đề.",
    "explanation_grammar": "Conjunction of Purpose.",
    "translation": "Phòng nhân sự đang cập nhật sổ tay nhân viên để các thành viên mới có thể dễ dàng tìm thấy các chính sách của công ty.",
    "core_vocabulary": [
      { "word": "handbook", "type": "n.", "meaning": "sổ tay" }
    ]
  },
  {
    "id": "q1332",
    "question": "______ the annual budget has been approved, the department can start purchasing new office supplies.",
    "options": { "A": "Due to", "B": "Now that", "C": "Because of", "D": "Thanks to" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Now that' (vì giờ đây) dùng để chỉ nguyên nhân từ môt tình trạng vừa mới thay đổi.",
    "explanation_grammar": "Conjunction of Cause.",
    "translation": "Vì giờ đây ngân sách hàng năm đã được phê duyệt, bộ phận có thể bắt đầu mua sắm các đồ dùng văn phòng mới.",
    "core_vocabulary": [
      { "word": "office supplies", "type": "n.", "meaning": "đồ dùng văn phòng" }
    ]
  },
  {
    "id": "q1333",
    "question": "The front desk receptionist will hold your packages ______ you are ready to pick them up.",
    "options": { "A": "until", "B": "pending", "C": "during", "D": "meanwhile" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Until' (cho đến khi) chỉ mốc thời gian hành động ở mệnh đề chính kết thúc.",
    "explanation_grammar": "Conjunction of Time.",
    "translation": "Nhân viên lễ tân tại quầy lễ tân sẽ giữ các gói hàng của bạn cho đến khi bạn sẵn sàng tới lấy chúng.",
    "core_vocabulary": [
      { "word": "receptionist", "type": "n.", "meaning": "lễ tân/người tiếp tân" }
    ]
  },
  {
    "id": "q1334",
    "question": "Employees can use the company fitness center ______ they sign a liability waiver at the front desk.",
    "options": { "A": "furthermore", "B": "as long as", "C": "depending on", "D": "with" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'As long as' (miễn là) đưa ra điều kiện để sử dụng dịch vụ.",
    "explanation_grammar": "Conditional Conjunction.",
    "translation": "Nhân viên có thể sử dụng trung tâm thể hình của công ty miễn là họ ký giấy miễn trừ trách nhiệm tại quầy lễ tân.",
    "core_vocabulary": [
      { "word": "liability waiver", "type": "n.", "meaning": "giấy miễn trừ trách nhiệm" }
    ]
  },
  {
    "id": "q1335",
    "question": "______ Ms. Chen has a very busy schedule, she always finds time to mentor the junior analysts.",
    "options": { "A": "Regardless of", "B": "Even though", "C": "Nevertheless", "D": "Despite" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Even though' (mặc dù) đứng đầu câu chỉ sự tương phản.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Mặc dù bà Chen có một lịch trình rất bận rộn, bà vẫn luôn dành thời gian để cố vấn cho các chuyên viên phân tích cấp dưới.",
    "core_vocabulary": [
      { "word": "mentor", "type": "v./n.", "meaning": "cố vấn/người hướng dẫn" },
      { "word": "junior analyst", "type": "n.", "meaning": "chuyên viên phân tích cấp dưới/mới" }
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
  console.log('Successfully appended 25 questions for Test 7.');
} else {
  console.error('Could not find end of array in questions.js');
}
