const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const newQuestions = [
  {
    id: "q0656",
    question: "The customs department ______ the VNACCS system for all international shipments yesterday.",
    options: { A: "updated", B: "updating", C: "updates", D: "update" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'yesterday' yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple.",
    translation: "Cục hải quan đã cập nhật hệ thống VNACCS cho tất cả các lô hàng quốc tế vào ngày hôm qua.",
    core_vocabulary: [{ word: "customs department", type: "n.", meaning: "cục hải quan" }, { word: "update", type: "v.", meaning: "cập nhật" }]
  },
  {
    id: "q0657",
    question: "All shipping documents must be ______ carefully before the cargo leaves the port.",
    options: { A: "checked", B: "check", C: "checks", D: "checking" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động đi kèm động từ khuyết thiếu (must be + V3/ed).",
    explanation_grammar: "Passive with Modal Verbs.",
    translation: "Tất cả các chứng từ vận chuyển phải được kiểm tra cẩn thận trước khi hàng hóa rời cảng.",
    core_vocabulary: [{ word: "shipping document", type: "n.", meaning: "chứng từ vận chuyển" }, { word: "port", type: "n.", meaning: "cảng" }]
  },
  {
    id: "q0658",
    question: "Enterprise A ______ the exact HS codes to the customs broker this morning.",
    options: { A: "provides", B: "provided", C: "providing", D: "provide" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'this morning' (trong ngữ cảnh này là một sự việc đã hoàn thành sáng nay) yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple.",
    translation: "Doanh nghiệp A đã cung cấp mã HS chính xác cho người môi giới hải quan vào sáng nay.",
    core_vocabulary: [{ word: "HS code", type: "n.", meaning: "mã phân loại hàng hóa" }, { word: "customs broker", type: "n.", meaning: "người môi giới hải quan" }]
  },
  {
    id: "q0659",
    question: "Fresh produce from the United States is ______ at specific temperatures during the journey.",
    options: { A: "maintaining", B: "maintained", C: "maintains", D: "maintain" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì hiện tại đơn (is + V3/ed).",
    explanation_grammar: "Present Simple Passive.",
    translation: "Nông sản tươi từ Hoa Kỳ được duy trì ở nhiệt độ cụ thể trong suốt hành trình.",
    core_vocabulary: [{ word: "maintain", type: "v.", meaning: "duy trì" }, { word: "journey", type: "n.", meaning: "hành trình/chuyến đi" }]
  },
  {
    id: "q0660",
    question: "To calculate the container load capacity accurately, the analyst ______ a new software tool.",
    options: { A: "to use", B: "uses", C: "using", D: "used" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Diễn tả một thói quen hoặc quy trình làm việc ở hiện tại.",
    explanation_grammar: "Present Simple.",
    translation: "Để tính toán chính xác khả năng chịu tải của container, nhà phân tích sử dụng một công cụ phần mềm mới.",
    core_vocabulary: [{ word: "accurately", type: "adv.", meaning: "một cách chính xác" }, { word: "load capacity", type: "n.", meaning: "khả năng chịu tải" }]
  },
  {
    id: "q0661",
    question: "The project manager should ______ the Work Breakdown Structure before assigning tasks.",
    options: { A: "finalized", B: "finalizes", C: "finalizing", D: "finalize" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'should' dùng động từ nguyên mẫu không 'to'.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Quản lý dự án nên hoàn thiện Cấu trúc phân chia công việc (WBS) trước khi giao nhiệm vụ.",
    core_vocabulary: [{ word: "finalize", type: "v.", meaning: "hoàn thiện/chốt" }, { word: "assign", type: "v.", meaning: "giao phó/phân công" }]
  },
  {
    id: "q0662",
    question: "Time estimation for this phase was accurately ______ using the PERT method last week.",
    options: { A: "calculates", B: "calculate", C: "calculated", D: "calculating" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động quá khứ đơn (was + V3/ed) với dấu hiệu 'last week'.",
    explanation_grammar: "Past Simple Passive.",
    translation: "Việc ước tính thời gian cho giai đoạn này đã được tính toán chính xác bằng phương pháp PERT vào tuần trước.",
    core_vocabulary: [{ word: "time estimation", type: "n.", meaning: "ước tính thời gian" }, { word: "method", type: "n.", meaning: "phương pháp" }]
  },
  {
    id: "q0663",
    question: "Ms. Trang Anh ______ the project schedule closely to avoid any unexpected delays.",
    options: { A: "monitoring", B: "monitor", C: "monitors", D: "monitored" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Diễn tả hành động theo dõi thường xuyên (thói quen công việc) ở hiện tại.",
    explanation_grammar: "Present Simple.",
    translation: "Cô Trang Anh theo dõi sát sao lịch trình dự án để tránh bất kỳ sự chậm trễ ngoài dự kiến nào.",
    core_vocabulary: [{ word: "closely", type: "adv.", meaning: "một cách sát sao" }, { word: "unexpected", type: "adj.", meaning: "ngoài dự kiến" }]
  },
  {
    id: "q0664",
    question: "Please ______ the linear trendlines in the spreadsheet after inserting the new data.",
    options: { A: "updated", B: "updates", C: "updating", D: "update" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Câu mệnh lệnh bắt đầu bằng 'Please' + V-bare.",
    explanation_grammar: "Imperative sentence.",
    translation: "Vui lòng cập nhật các đường xu hướng tuyến tính trong bảng tính sau khi chèn dữ liệu mới.",
    core_vocabulary: [{ word: "spreadsheet", type: "n.", meaning: "bảng tính" }, { word: "linear trendline", type: "n.", meaning: "đường xu hướng tuyến tính" }]
  },
  {
    id: "q0665",
    question: "The team ______ the complex project into smaller work packages successfully recently.",
    options: { A: "divides", B: "divide", C: "has divided", D: "dividing" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'recently' (gần đây) yêu cầu thì hiện tại hoàn thành.",
    explanation_grammar: "Present Perfect.",
    translation: "Nhóm nghiên cứu đã chia dự án phức tạp thành các gói công việc nhỏ hơn thành công gần đây.",
    core_vocabulary: [{ word: "work package", type: "n.", meaning: "gói công việc" }, { word: "complex", type: "adj.", meaning: "phức tạp" }]
  },
  {
    id: "q0666",
    question: "Our logistics team ______ multiple regression charts for the monthly performance report.",
    options: { A: "has generated", B: "generating", C: "generate", D: "generates" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Thì hiện tại hoàn thành diễn tả hành động đã thực hiện và có kết quả cho báo cáo hiện tại.",
    explanation_grammar: "Present Perfect.",
    translation: "Đội ngũ hậu cần của chúng tôi đã tạo ra nhiều biểu đồ hồi quy cho báo cáo hiệu suất hàng tháng.",
    core_vocabulary: [{ word: "multiple", type: "adj.", meaning: "nhiều/đa dạng" }, { word: "performance report", type: "n.", meaning: "báo cáo hiệu suất" }]
  },
  {
    id: "q0667",
    question: "The Newton interpolation method was ______ to predict the missing numerical values.",
    options: { A: "used", B: "using", C: "uses", D: "use" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì quá khứ đơn (was + V3/ed).",
    explanation_grammar: "Past Simple Passive.",
    translation: "Phương pháp nội suy Newton đã được sử dụng để dự đoán các giá trị số còn thiếu.",
    core_vocabulary: [{ word: "numerical value", type: "n.", meaning: "giá trị số" }, { word: "predict", type: "v.", meaning: "dự đoán" }]
  },
  {
    id: "q0668",
    question: "By using the bisection method, the analyst can ______ the margin of error significantly.",
    options: { A: "reduces", B: "reduced", C: "reduce", D: "reducing" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'can' dùng động từ nguyên mẫu.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Bằng cách sử dụng phương pháp chia đôi, nhà phân tích có thể giảm đáng kể mức sai số.",
    core_vocabulary: [{ word: "reduce", type: "v.", meaning: "giảm bớt" }, { word: "margin of error", type: "n.", meaning: "mức sai số" }]
  },
  {
    id: "q0669",
    question: "The data analyst ______ a steady increase in shipping costs over the last year.",
    options: { A: "indicate", B: "indicating", C: "indicates", D: "has indicated" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'over the last year' (trong suốt năm qua) yêu cầu thì hiện tại hoàn thành.",
    explanation_grammar: "Present Perfect.",
    translation: "Nhà phân tích dữ liệu đã chỉ ra sự gia tăng đều đặn của chi phí vận chuyển trong năm qua.",
    core_vocabulary: [{ word: "indicate", type: "v.", meaning: "chỉ ra/cho thấy" }, { word: "steady increase", type: "n.", meaning: "sự tăng trưởng đều đặn" }]
  },
  {
    id: "q0670",
    question: "Please ______ all the necessary numerical data into the system before 3 PM.",
    options: { A: "enters", B: "entered", C: "enter", D: "entering" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Câu mệnh lệnh dùng động từ nguyên mẫu sau 'Please'.",
    explanation_grammar: "Imperative sentence.",
    translation: "Vui lòng nhập tất cả các dữ liệu số cần thiết vào hệ thống trước 3 giờ chiều.",
    core_vocabulary: [{ word: "necessary", type: "adj.", meaning: "cần thiết" }, { word: "enter", type: "v.", meaning: "nhập (dữ liệu)" }]
  },
  {
    id: "q0671",
    question: "The Konel Travel agent ______ the flight tickets for the Lisbon conference already.",
    options: { A: "books", B: "booking", C: "book", D: "has booked" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'already' (đã... rồi) yêu cầu thì hiện tại hoàn thành.",
    explanation_grammar: "Present Perfect with Already.",
    translation: "Đại lý Konel Travel đã đặt vé máy bay cho hội nghị Lisbon rồi.",
    core_vocabulary: [{ word: "flight ticket", type: "n.", meaning: "vé máy bay" }, { word: "book", type: "v.", meaning: "đặt (chỗ/vé)" }]
  },
  {
    id: "q0672",
    question: "Before signing the contract, entrepreneurs must ______ all legal terms and conditions.",
    options: { A: "review", B: "reviews", C: "reviewing", D: "reviewed" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'must' dùng động từ nguyên mẫu.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Trước khi ký hợp đồng, các doanh nhân phải xem xét tất cả các điều khoản và điều kiện pháp lý.",
    core_vocabulary: [{ word: "entrepreneur", type: "n.", meaning: "doanh nhân" }, { word: "legal term", type: "n.", meaning: "điều khoản pháp lý" }]
  },
  {
    id: "q0673",
    question: "The readership of our weekly supply chain journal ______ by 15 percent since May.",
    options: { A: "grows", B: "growing", C: "grow", D: "has grown" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'since May' yêu cầu thì hiện tại hoàn thành.",
    explanation_grammar: "Present Perfect with Since.",
    translation: "Lượng độc giả của tạp chí chuỗi cung ứng hàng tuần đã tăng 15% kể từ tháng Năm.",
    core_vocabulary: [{ word: "readership", type: "n.", meaning: "lượng độc giả" }, { word: "journal", type: "n.", meaning: "tạp chí chuyên ngành" }]
  },
  {
    id: "q0674",
    question: "Mr. Lee ______ an international banking conference in Lisbon to discuss trade next month.",
    options: { A: "attending", B: "attended", C: "attend", D: "will attend" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'next month' yêu cầu thì tương lai đơn.",
    explanation_grammar: "Future Simple: Will + V-bare.",
    translation: "Ông Lee sẽ tham dự hội nghị ngân hàng quốc tế tại Lisbon để thảo luận về thương mại vào tháng tới.",
    core_vocabulary: [{ word: "conference", type: "n.", meaning: "hội nghị" }, { word: "trade", type: "n.", meaning: "thương mại" }]
  },
  {
    id: "q0675",
    question: "Employees should ______ their supervisors of any changes to the delivery schedule.",
    options: { A: "notifies", B: "notifying", C: "notified", D: "notify" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'should' dùng động từ nguyên mẫu.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Nhân viên nên thông báo cho cấp trên của họ về bất kỳ thay đổi nào đối với lịch giao hàng.",
    core_vocabulary: [{ word: "notify", type: "v.", meaning: "thông báo" }, { word: "delivery schedule", type: "n.", meaning: "lịch giao hàng" }]
  },
  {
    id: "q0676",
    question: "Over 1,258 units of ASUS ROG Strix mainboards were ______ to the distributor yesterday.",
    options: { A: "delivered", B: "deliver", C: "delivers", D: "delivering" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động quá khứ đơn (were + V3/ed) với dấu hiệu 'yesterday'.",
    explanation_grammar: "Past Simple Passive.",
    translation: "Hơn 1.258 bộ bo mạch chủ ASUS ROG Strix đã được giao cho nhà phân phối vào ngày hôm qua.",
    core_vocabulary: [{ word: "distributor", type: "n.", meaning: "nhà phân phối" }, { word: "deliver", type: "v.", meaning: "giao hàng" }]
  },
  {
    id: "q0677",
    question: "The warehouse staff must ______ the correct wooden pallets for the heavy electronic components.",
    options: { A: "selects", B: "selecting", C: "selected", D: "select" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'must' dùng động từ nguyên mẫu.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Nhân viên kho phải chọn đúng các tấm pallet gỗ cho các linh kiện điện tử nặng.",
    core_vocabulary: [{ word: "warehouse staff", type: "n.", meaning: "nhân viên kho" }, { word: "heavy", type: "adj.", meaning: "nặng" }]
  },
  {
    id: "q0678",
    question: "To prevent damage, the delicate computer cargo is securely ______ to the pallets.",
    options: { A: "fastened", B: "fasten", C: "fastening", D: "fastens" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì hiện tại đơn (is + V3/ed).",
    explanation_grammar: "Present Simple Passive.",
    translation: "Để tránh hư hỏng, lô hàng máy tính nhạy cảm được buộc chặt an toàn vào pallet.",
    core_vocabulary: [{ word: "fasten", type: "v.", meaning: "buộc chặt/thắt chặt" }, { word: "delicate", type: "adj.", meaning: "nhạy cảm/dễ vỡ" }]
  },
  {
    id: "q0679",
    question: "The carrier ______ the loading dock as soon as the final container is sealed tomorrow.",
    options: { A: "leaves", B: "leaving", C: "left", D: "will leave" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Diễn tả một hành động sẽ xảy ra trong tương lai ('tomorrow').",
    explanation_grammar: "Future Simple.",
    translation: "Phương tiện vận chuyển sẽ rời bến bốc hàng ngay khi container cuối cùng được niêm phong vào ngày mai.",
    core_vocabulary: [{ word: "seal", type: "v.", meaning: "niêm phong" }, { word: "loading dock", type: "n.", meaning: "bến bốc hàng" }]
  },
  {
    id: "q0680",
    question: "The enterprise ______ fresh apples from the United States to Vietnam multiple times.",
    options: { A: "importing", B: "import", C: "has imported", D: "imports" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'multiple times' (nhiều lần) cho biết số lần thực hiện hành động tính tới hiện tại, yêu cầu thì hiện tại hoàn thành.",
    explanation_grammar: "Present Perfect (Frequency).",
    translation: "Doanh nghiệp đã nhập khẩu táo tươi từ Hoa Kỳ vào Việt Nam nhiều lần.",
    core_vocabulary: [{ word: "enterprise", type: "n.", meaning: "doanh nghiệp" }, { word: "multiple times", type: "adv.", meaning: "nhiều lần" }]
  }
];

let content = fs.readFileSync(targetFile, 'utf8');
const questionsData = eval(content.replace('window.questionsData =', ''));

const updatedQuestionsData = questionsData.concat(newQuestions);

fs.writeFileSync(targetFile, 'window.questionsData = ' + JSON.stringify(updatedQuestionsData, null, 2) + ';', 'utf8');
console.log('Successfully added 25 questions for 12 thì - Test 7!');
