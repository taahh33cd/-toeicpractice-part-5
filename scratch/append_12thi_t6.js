const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const newQuestions = [
  {
    id: "q0631",
    question: "The logistics data analyst must ______ the new shipment data by the end of the day.",
    options: { A: "analyzing", B: "analyzes", C: "analyze", D: "analyzed" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Sau động từ khuyết thiếu 'must' dùng động từ nguyên mẫu không 'to'.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Nhà phân tích dữ liệu hậu cần phải phân tích dữ liệu lô hàng mới trước cuối ngày.",
    core_vocabulary: [{ word: "logistics", type: "n.", meaning: "hậu cần" }, { word: "analyze", type: "v.", meaning: "phân tích" }]
  },
  {
    id: "q0632",
    question: "The error margin in the bisection method should be ______ carefully by the team.",
    options: { A: "calculating", B: "calculate", C: "calculated", D: "calculates" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động đi với động từ khuyết thiếu (should be + V3/ed).",
    explanation_grammar: "Passive with Modal Verbs.",
    translation: "Mức sai số trong phương pháp chia đôi nên được nhóm tính toán cẩn thận.",
    core_vocabulary: [{ word: "error margin", type: "n.", meaning: "mức sai số" }, { word: "bisection method", type: "n.", meaning: "phương pháp chia đôi" }]
  },
  {
    id: "q0633",
    question: "Enterprise A ______ three batches of fresh apples from the United States this month.",
    options: { A: "import", B: "imports", C: "has imported", D: "importing" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Thì hiện tại hoàn thành diễn tả hành động đã xảy ra trong khoảng thời gian bao gồm hiện tại (this month).",
    explanation_grammar: "Present Perfect.",
    translation: "Doanh nghiệp A đã nhập khẩu ba đợt táo tươi từ Hoa Kỳ trong tháng này.",
    core_vocabulary: [{ word: "batch", type: "n.", meaning: "đợt/lô hàng" }, { word: "import", type: "v.", meaning: "nhập khẩu" }]
  },
  {
    id: "q0634",
    question: "Please ______ the Work Breakdown Structure before the main project meeting begins.",
    options: { A: "review", B: "reviewing", C: "reviewed", D: "reviews" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Câu mệnh lệnh sau 'Please' dùng động từ nguyên mẫu.",
    explanation_grammar: "Imperative sentence.",
    translation: "Vui lòng xem lại Cấu trúc phân chia công việc (WBS) trước khi cuộc họp dự án chính bắt đầu.",
    core_vocabulary: [{ word: "Work Breakdown Structure", type: "n.", meaning: "Cấu trúc phân chia công việc" }, { word: "begin", type: "v.", meaning: "bắt đầu" }]
  },
  {
    id: "q0635",
    question: "Customs brokers should ______ the VNACCS system guidelines thoroughly to prevent errors.",
    options: { A: "understanding", B: "understands", C: "understand", D: "understood" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'should' dùng động từ nguyên mẫu.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Các nhà môi giới hải quan nên hiểu kỹ các hướng dẫn hệ thống VNACCS để tránh sai sót.",
    core_vocabulary: [{ word: "guideline", type: "n.", meaning: "hướng dẫn" }, { word: "prevent", type: "v.", meaning: "ngăn chặn/phòng ngừa" }]
  },
  {
    id: "q0636",
    question: "All electronic components are safely ______ onto the designated pallets to prevent damage.",
    options: { A: "loading", B: "loaded", C: "load", D: "loads" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì hiện tại đơn (are + V3/ed).",
    explanation_grammar: "Present Simple Passive.",
    translation: "Tất cả các linh kiện điện tử đều được bốc xếp an toàn lên các pallet được chỉ định để tránh hư hỏng.",
    core_vocabulary: [{ word: "component", type: "n.", meaning: "linh kiện" }, { word: "designated", type: "adj.", meaning: "được chỉ định" }]
  },
  {
    id: "q0637",
    question: "Ms. Trang Anh ______ a new trendline in Google Sheets for the weekly performance report.",
    options: { A: "create", B: "creates", C: "creating", D: "has created" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Thì hiện tại hoàn thành diễn tả một hành động vừa thực hiện xong và để lại kết quả.",
    explanation_grammar: "Present Perfect.",
    translation: "Cô Trang Anh đã tạo một đường xu hướng mới trong Google Sheets cho báo cáo hiệu suất hàng tuần.",
    core_vocabulary: [{ word: "trendline", type: "n.", meaning: "đường xu hướng" }, { word: "weekly performance", type: "n.", meaning: "hiệu suất hàng tuần" }]
  },
  {
    id: "q0638",
    question: "The warehouse manager ______ the HS code for the new ASUS mainboards yesterday.",
    options: { A: "verifies", B: "verify", C: "verifying", D: "verified" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'yesterday' yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple.",
    translation: "Quản lý kho đã xác minh mã HS cho các bo mạch chủ ASUS mới vào ngày hôm qua.",
    core_vocabulary: [{ word: "verify", type: "v.", meaning: "xác minh" }, { word: "yesterday", type: "adv.", meaning: "hôm qua" }]
  },
  {
    id: "q0639",
    question: "It is crucial to ______ the iron triangle of project management during the execution phase.",
    options: { A: "balanced", B: "balancing", C: "balances", D: "balance" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Sau cấu trúc 'It is crucial to' dùng động từ nguyên mẫu.",
    explanation_grammar: "To-infinitive.",
    translation: "Điều cốt yếu là phải cân bằng 'tam giác sắt' của quản lý dự án trong giai đoạn thực thi.",
    core_vocabulary: [{ word: "crucial", type: "adj.", meaning: "cốt yếu" }, { word: "execution phase", type: "n.", meaning: "giai đoạn thực thi" }]
  },
  {
    id: "q0640",
    question: "The engineering team needs to ______ Newton interpolation to estimate the missing data points.",
    options: { A: "applied", B: "apply", C: "applies", D: "applying" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'needs to' dùng động từ nguyên mẫu.",
    explanation_grammar: "To-infinitive.",
    translation: "Nhóm kỹ thuật cần áp dụng nội suy Newton để ước tính các điểm dữ liệu còn thiếu.",
    core_vocabulary: [{ word: "apply", type: "v.", meaning: "áp dụng" }, { word: "missing data point", type: "n.", meaning: "điểm dữ liệu còn thiếu" }]
  },
  {
    id: "q0641",
    question: "The container load capacity was ______ by the new logistics software last week.",
    options: { A: "optimize", B: "optimizes", C: "optimized", D: "optimizing" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì quá khứ đơn (was + V3/ed) với dấu hiệu 'last week'.",
    explanation_grammar: "Past Simple Passive.",
    translation: "Khả năng chịu tải của container đã được tối ưu hóa bởi phần mềm hậu cần mới vào tuần trước.",
    core_vocabulary: [{ word: "optimize", type: "v.", meaning: "tối ưu hóa" }, { word: "last week", type: "adv.", meaning: "tuần trước" }]
  },
  {
    id: "q0642",
    question: "Kindly ______ the required shipping documents to the carrier before 5 PM today.",
    options: { A: "submit", B: "submitting", C: "submits", D: "submitted" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "'Kindly' dùng trong yêu cầu lịch sự, theo sau là động từ nguyên mẫu.",
    explanation_grammar: "Imperative/Polite request.",
    translation: "Vui lòng gửi các tài liệu vận chuyển bắt buộc cho hãng vận tải trước 5 giờ chiều nay.",
    core_vocabulary: [{ word: "submit", type: "v.", meaning: "nộp/gửi" }, { word: "carrier", type: "n.", meaning: "hãng vận tải/người chuyên chở" }]
  },
  {
    id: "q0643",
    question: "We ______ several regression charts to analyze the international delivery times effectively.",
    options: { A: "have generated", B: "generating", C: "generated", D: "generate" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Thì hiện tại hoàn thành diễn tả hành động đã làm và có kết quả giúp ích cho phân tích hiện tại.",
    explanation_grammar: "Present Perfect.",
    translation: "Chúng tôi đã tạo ra một vài biểu đồ hồi quy để phân tích thời gian giao hàng quốc tế một cách hiệu quả.",
    core_vocabulary: [{ word: "generate", type: "v.", meaning: "tạo ra" }, { word: "effectively", type: "adv.", meaning: "một cách hiệu quả" }]
  },
  {
    id: "q0644",
    question: "The contracted shipping agency will ______ the international shipping requirements shortly.",
    options: { A: "confirming", B: "confirm", C: "confirms", D: "confirmed" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Sau trợ động từ 'will' là động từ nguyên mẫu.",
    explanation_grammar: "Future Simple.",
    translation: "Đại lý vận chuyển đã ký hợp đồng sẽ sớm xác nhận các yêu cầu vận chuyển quốc tế.",
    core_vocabulary: [{ word: "contracted", type: "adj.", meaning: "đã ký hợp đồng" }, { word: "shortly", type: "adv.", meaning: "sớm/trong thời gian ngắn tới" }]
  },
  {
    id: "q0645",
    question: "The overall time estimation for the project was accurately ______ using the PERT technique.",
    options: { A: "calculates", B: "calculate", C: "calculated", D: "calculating" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì quá khứ đơn (was + V3/ed).",
    explanation_grammar: "Past Simple Passive.",
    translation: "Ước tính thời gian tổng thể cho dự án đã được tính toán chính xác bằng kỹ thuật PERT.",
    core_vocabulary: [{ word: "accurately", type: "adv.", meaning: "một cách chính xác" }, { word: "PERT technique", type: "n.", meaning: "kỹ thuật PERT" }]
  },
  {
    id: "q0646",
    question: "The market demand for ASUS ROG Strix mainboards ______ significantly during this quarter.",
    options: { A: "rising", B: "rises", C: "has risen", D: "rise" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Thì hiện tại hoàn thành diễn tả một sự thay đổi kéo dài trong suốt quý này.",
    explanation_grammar: "Present Perfect.",
    translation: "Nhu cầu thị trường đối với bo mạch chủ ASUS ROG Strix đã tăng đáng kể trong quý này.",
    core_vocabulary: [{ word: "demand", type: "n.", meaning: "nhu cầu" }, { word: "significantly", type: "adv.", meaning: "một cách đáng kể" }]
  },
  {
    id: "q0647",
    question: "The travel agent ______ the hotel reservation for the logistics conference in Lisbon yesterday.",
    options: { A: "confirms", B: "confirming", C: "confirm", D: "confirmed" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'yesterday' yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple.",
    translation: "Đại lý du lịch đã xác nhận việc đặt phòng khách sạn cho hội nghị hậu cần tại Lisbon vào ngày hôm qua.",
    core_vocabulary: [{ word: "hotel reservation", type: "n.", meaning: "sự đặt phòng khách sạn" }, { word: "conference", type: "n.", meaning: "hội nghị" }]
  },
  {
    id: "q0648",
    question: "Data analysts routinely ______ large datasets to find hidden supply chain inefficiencies.",
    options: { A: "examined", B: "examines", C: "examining", D: "examine" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'routinely' (thường xuyên/theo quy trình) yêu cầu thì hiện tại đơn cho chủ ngữ số nhiều.",
    explanation_grammar: "Present Simple.",
    translation: "Các nhà phân tích dữ liệu thường xuyên kiểm tra các tập dữ liệu lớn để tìm ra những điểm không hiệu quả tiềm ẩn trong chuỗi cung ứng.",
    core_vocabulary: [{ word: "inefficiency", type: "n.", meaning: "sự không hiệu quả" }, { word: "routinely", type: "adv.", meaning: "thường xuyên" }]
  },
  {
    id: "q0649",
    question: "The imported fresh produce must be ______ in a temperature-controlled storage facility.",
    options: { A: "keep", B: "keeps", C: "kept", D: "keeping" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động đi kèm động từ khuyết thiếu (must be + V3/ed). Động từ 'keep' có dạng V3 là 'kept'.",
    explanation_grammar: "Passive with Modal Verbs.",
    translation: "Nông sản tươi nhập khẩu phải được cất giữ trong kho lưu trữ kiểm soát nhiệt độ.",
    core_vocabulary: [{ word: "storage facility", type: "n.", meaning: "kho bãi/cơ sở lưu trữ" }, { word: "temperature-controlled", type: "adj.", meaning: "kiểm soát nhiệt độ" }]
  },
  {
    id: "q0650",
    question: "The team ______ the bisection method to solve the complex non-linear equation successfully.",
    options: { A: "uses", B: "use", C: "used", D: "using" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Diễn tả hành động đã xảy ra và dẫn đến kết quả thành công.",
    explanation_grammar: "Past Simple.",
    translation: "Nhóm nghiên cứu đã sử dụng phương pháp chia đôi để giải phương trình phi tuyến phức tạp một cách thành công.",
    core_vocabulary: [{ word: "successfully", type: "adv.", meaning: "thành công" }, { word: "non-linear equation", type: "n.", meaning: "phương trình phi tuyến" }]
  },
  {
    id: "q0651",
    question: "Project managers should ______ complex tasks into manageable sub-tasks for better tracking.",
    options: { A: "decompose", B: "decomposed", C: "decomposes", D: "decomposing" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'should' dùng động từ nguyên mẫu.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Các quản lý dự án nên phân rã các nhiệm vụ phức tạp thành các nhiệm vụ con có thể quản lý được để theo dõi tốt hơn.",
    core_vocabulary: [{ word: "decompose", type: "v.", meaning: "phân rã/chia nhỏ" }, { word: "tracking", type: "n.", meaning: "sự theo dõi" }]
  },
  {
    id: "q0652",
    question: "The national customs department ______ the new import regulations for electronic goods recently.",
    options: { A: "announces", B: "announce", C: "has announced", D: "announcing" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'recently' yêu cầu thì hiện tại hoàn thành.",
    explanation_grammar: "Present Perfect.",
    translation: "Cục hải quan quốc gia đã công bố quy định nhập khẩu mới cho các mặt hàng điện tử gần đây.",
    core_vocabulary: [{ word: "regulation", type: "n.", meaning: "quy định" }, { word: "electronic goods", type: "n.", meaning: "hàng điện tử" }]
  },
  {
    id: "q0653",
    question: "The new analytical software ______ the minor error rates in the numerical report yesterday.",
    options: { A: "detects", B: "detected", C: "detect", D: "detecting" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'yesterday' yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple.",
    translation: "Phần mềm phân tích mới đã phát hiện ra các tỷ lệ lỗi nhỏ trong báo cáo số liệu vào ngày hôm qua.",
    core_vocabulary: [{ word: "detect", type: "v.", meaning: "phát hiện" }, { word: "minor error", type: "n.", meaning: "lỗi nhỏ" }]
  },
  {
    id: "q0654",
    question: "Please ______ that all delicate cargo is securely fastened before the truck's departure.",
    options: { A: "ensured", B: "ensuring", C: "ensures", D: "ensure" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Câu mệnh lệnh sau 'Please' dùng động từ nguyên mẫu.",
    explanation_grammar: "Imperative sentence.",
    translation: "Vui lòng đảm bảo rằng tất cả hàng hóa dễ vỡ đều được buộc chặt an toàn trước khi xe tải khởi hành.",
    core_vocabulary: [{ word: "delicate", type: "adj.", meaning: "dễ vỡ/nhạy cảm" }, { word: "departure", type: "n.", meaning: "sự khởi hành" }]
  },
  {
    id: "q0655",
    question: "The updated business strategy was ______ by the board of directors last Monday morning.",
    options: { A: "approve", B: "approved", C: "approving", D: "approves" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì quá khứ đơn (was + V3/ed) với dấu hiệu 'last Monday morning'.",
    explanation_grammar: "Past Simple Passive.",
    translation: "Chiến lược kinh doanh cập nhật đã được hội đồng quản trị phê duyệt vào sáng thứ Hai tuần trước.",
    core_vocabulary: [{ word: "business strategy", type: "n.", meaning: "chiến lược kinh doanh" }, { word: "approve", type: "v.", meaning: "phê duyệt" }]
  }
];

let content = fs.readFileSync(targetFile, 'utf8');
const questionsData = eval(content.replace('window.questionsData =', ''));

const updatedQuestionsData = questionsData.concat(newQuestions);

fs.writeFileSync(targetFile, 'window.questionsData = ' + JSON.stringify(updatedQuestionsData, null, 2) + ';', 'utf8');
console.log('Successfully added 25 questions for 12 thì - Test 6!');
