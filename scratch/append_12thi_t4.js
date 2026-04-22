const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const newQuestions = [
  {
    id: "q0581",
    question: "The logistics team should ______ the container load capacity before dispatching the ASUS mainboards.",
    options: { A: "to calculate", B: "calculated", C: "calculating", D: "calculate" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Sau động từ khuyết thiếu 'should' là động từ nguyên mẫu không 'to'.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Đội ngũ hậu cần nên tính toán khả năng chịu tải của container trước khi gửi các bo mạch chủ ASUS.",
    core_vocabulary: [{ word: "logistics", type: "n.", meaning: "hậu cần" }, { word: "capacity", type: "n.", meaning: "khả năng/sức chứa" }]
  },
  {
    id: "q0582",
    question: "Project managers must ______ a detailed Work Breakdown Structure to ensure smooth execution.",
    options: { A: "creating", B: "to create", C: "create", D: "created" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Sau động từ khuyết thiếu 'must' là động từ nguyên mẫu.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Các quản lý dự án phải tạo ra một Cấu trúc phân chia công việc (WBS) chi tiết để đảm bảo thực hiện suôn sẻ.",
    core_vocabulary: [{ word: "Work Breakdown Structure", type: "n.", meaning: "Cấu trúc phân chia công việc" }, { word: "execution", type: "n.", meaning: "sự thực thi" }]
  },
  {
    id: "q0583",
    question: "The customs broker will ______ the VNACCS declaration for the imported goods tomorrow.",
    options: { A: "submitting", B: "submit", C: "submits", D: "submitted" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Sau trợ động từ 'will' là động từ nguyên mẫu.",
    explanation_grammar: "Future Simple: Will + V-bare.",
    translation: "Người môi giới hải quan sẽ nộp tờ khai VNACCS cho hàng hóa nhập khẩu vào ngày mai.",
    core_vocabulary: [{ word: "customs broker", type: "n.", meaning: "người môi giới hải quan" }, { word: "declaration", type: "n.", meaning: "tờ khai" }]
  },
  {
    id: "q0584",
    question: "To optimize shipping costs, we should ______ the correct pallet type for electronic components.",
    options: { A: "selecting", B: "select", C: "selected", D: "selects" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'should' dùng động từ nguyên mẫu.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Để tối ưu hóa chi phí vận chuyển, chúng ta nên lựa chọn loại pallet chính xác cho các linh kiện điện tử.",
    core_vocabulary: [{ word: "optimize", type: "v.", meaning: "tối ưu hóa" }, { word: "component", type: "n.", meaning: "linh kiện" }]
  },
  {
    id: "q0585",
    question: "The data analyst can ______ the regression chart to identify long-term shipping trends easily.",
    options: { A: "updates", B: "updating", C: "update", D: "updated" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'can' dùng động từ nguyên mẫu.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Nhà phân tích dữ liệu có thể cập nhật biểu đồ hồi quy để xác định các xu hướng vận chuyển dài hạn một cách dễ dàng.",
    core_vocabulary: [{ word: "regression chart", type: "n.", meaning: "biểu đồ hồi quy" }, { word: "identify", type: "v.", meaning: "xác định/nhận dạng" }]
  },
  {
    id: "q0586",
    question: "Please ______ all international shipping requirements before exporting the cargo to Lisbon.",
    options: { A: "reviews", B: "reviewing", C: "reviewed", D: "review" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'Please' dùng động từ nguyên mẫu để tạo câu mệnh lệnh.",
    explanation_grammar: "Imperative sentence.",
    translation: "Vui lòng xem lại tất cả các yêu cầu vận chuyển quốc tế trước khi xuất khẩu hàng hóa sang Lisbon.",
    core_vocabulary: [{ word: "requirement", type: "n.", meaning: "yêu cầu" }, { word: "cargo", type: "n.", meaning: "hàng hóa/lô hàng" }]
  },
  {
    id: "q0587",
    question: "Please ______ the exact HS code on the customs form to avoid any unexpected delays.",
    options: { A: "to provide", B: "providing", C: "provided", D: "provide" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Câu mệnh lệnh bắt đầu bằng 'Please' + V-bare.",
    explanation_grammar: "Imperative sentence.",
    translation: "Vui lòng cung cấp chính xác mã HS trên tờ khai hải quan để tránh bất kỳ sự chậm trễ ngoài dự kiến nào.",
    core_vocabulary: [{ word: "HS code", type: "n.", meaning: "Mã phân loại hàng hóa" }, { word: "delay", type: "n.", meaning: "sự chậm trễ" }]
  },
  {
    id: "q0588",
    question: "Kindly ______ the error rates using the bisection method for our weekly numerical report.",
    options: { A: "checks", B: "check", C: "checked", D: "checking" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "'Kindly' tương tự 'Please', theo sau là động từ nguyên mẫu.",
    explanation_grammar: "Polite Request/Imperative.",
    translation: "Vui lòng kiểm tra tỷ lệ lỗi bằng phương pháp chia đôi cho báo cáo số liệu hàng tuần của chúng tôi.",
    core_vocabulary: [{ word: "error rate", type: "n.", meaning: "tỷ lệ lỗi" }, { word: "bisection method", type: "n.", meaning: "phương pháp chia đôi" }]
  },
  {
    id: "q0589",
    question: "Please ______ the time estimation for these project tasks using the PERT method.",
    options: { A: "recalculate", B: "recalculating", C: "recalculates", D: "recalculated" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Câu mệnh lệnh dùng động từ nguyên mẫu.",
    explanation_grammar: "Imperative sentence.",
    translation: "Vui lòng tính toán lại thời gian ước tính cho các nhiệm vụ dự án này bằng phương pháp PERT.",
    core_vocabulary: [{ word: "estimation", type: "n.", meaning: "sự ước tính" }, { word: "recalculate", type: "v.", meaning: "tính toán lại" }]
  },
  {
    id: "q0590",
    question: "Please ______ the warehouse manager before loading the fresh produce into the cooling unit.",
    options: { A: "contact", B: "contacts", C: "contacting", D: "contacted" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Câu mệnh lệnh dùng động từ nguyên mẫu.",
    explanation_grammar: "Imperative sentence.",
    translation: "Vui lòng liên hệ với quản lý kho trước khi bốc hàng nông sản tươi vào thiết bị làm lạnh.",
    core_vocabulary: [{ word: "warehouse", type: "n.", meaning: "kho hàng" }, { word: "cooling unit", type: "n.", meaning: "thiết bị làm lạnh" }]
  },
  {
    id: "q0591",
    question: "The new VNACCS software was successfully ______ on all company computers last weekend.",
    options: { A: "install", B: "installs", C: "installed", D: "installing" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì quá khứ đơn (was + V3/ed).",
    explanation_grammar: "Past Simple Passive.",
    translation: "Phần mềm VNACCS mới đã được cài đặt thành công trên tất cả các máy tính của công ty vào cuối tuần trước.",
    core_vocabulary: [{ word: "install", type: "v.", meaning: "cài đặt" }, { word: "successfully", type: "adv.", meaning: "một cách thành công" }]
  },
  {
    id: "q0592",
    question: "All 1,258 units of ASUS ROG Strix mainboards are carefully ______ onto the wooden pallets.",
    options: { A: "load", B: "loaded", C: "loading", D: "loads" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì hiện tại đơn (are + V3/ed).",
    explanation_grammar: "Present Simple Passive.",
    translation: "Tất cả 1.258 bộ bo mạch chủ ASUS ROG Strix đều được xếp cẩn thận lên các tấm pallet gỗ.",
    core_vocabulary: [{ word: "load", type: "v.", meaning: "xếp hàng/bốc hàng" }, { word: "wooden pallet", type: "n.", meaning: "tấm pallet gỗ" }]
  },
  {
    id: "q0593",
    question: "The fresh apples from the United States are securely ______ in a temperature-controlled facility.",
    options: { A: "stored", B: "store", C: "storing", D: "stores" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì hiện tại đơn (are + V3/ed).",
    explanation_grammar: "Present Simple Passive.",
    translation: "Những quả táo tươi từ Hoa Kỳ được lưu kho an toàn trong cơ sở kiểm soát nhiệt độ.",
    core_vocabulary: [{ word: "store", type: "v.", meaning: "lưu kho/cất giữ" }, { word: "facility", type: "n.", meaning: "cơ sở/tiện nghi" }]
  },
  {
    id: "q0594",
    question: "The project schedule is frequently ______ to balance the iron triangle of cost, schedule, and quality.",
    options: { A: "adjusts", B: "adjust", C: "adjusting", D: "adjusted" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì hiện tại đơn (is + V3/ed).",
    explanation_grammar: "Present Simple Passive.",
    translation: "Lịch trình dự án được điều chỉnh thường xuyên để cân bằng 'tam giác sắt' gồm chi phí, tiến độ và chất lượng.",
    core_vocabulary: [{ word: "adjust", type: "v.", meaning: "điều chỉnh" }, { word: "iron triangle", type: "n.", meaning: "tam giác sắt (trong QLDA)" }]
  },
  {
    id: "q0595",
    question: "The linear trendlines in Google Sheets are automatically ______ when new numerical data is entered.",
    options: { A: "generate", B: "generated", C: "generating", D: "generates" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động hiện tại đơn (are + V3/ed).",
    explanation_grammar: "Present Simple Passive.",
    translation: "Các đường xu hướng tuyến tính trong Google Sheets được tạo tự động khi dữ liệu số mới được nhập vào.",
    core_vocabulary: [{ word: "trendline", type: "n.", meaning: "đường xu hướng" }, { word: "generate", type: "v.", meaning: "tạo ra" }]
  },
  {
    id: "q0596",
    question: "The shipping company ______ its delivery routes to optimize load capacity this year.",
    options: { A: "has improved", B: "improving", C: "improve", D: "improved" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Thì hiện tại hoàn thành (has + V3) diễn tả một sự thay đổi/tiến bộ tính đến thời điểm hiện tại.",
    explanation_grammar: "Present Perfect.",
    translation: "Công ty vận chuyển đã cải thiện các tuyến đường giao hàng để tối ưu hóa khả năng chịu tải trong năm nay.",
    core_vocabulary: [{ word: "delivery route", type: "n.", meaning: "tuyến đường giao hàng" }, { word: "improve", type: "v.", meaning: "cải thiện" }]
  },
  {
    id: "q0597",
    question: "Our new data analyst ______ several regression charts to track fuel consumption recently.",
    options: { A: "creating", B: "creates", C: "has created", D: "create" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'recently' (gần đây) là đặc trưng của thì hiện tại hoàn thành.",
    explanation_grammar: "Present Perfect.",
    translation: "Nhà phân tích dữ liệu mới của chúng tôi đã tạo ra một vài biểu đồ hồi quy để theo dõi mức tiêu thụ nhiên liệu gần đây.",
    core_vocabulary: [{ word: "fuel consumption", type: "n.", meaning: "mức tiêu thụ nhiên liệu" }, { word: "track", type: "v.", meaning: "theo dõi" }]
  },
  {
    id: "q0598",
    question: "The import volume of fresh produce into Vietnam ______ significantly over the past decade.",
    options: { A: "increases", B: "increasing", C: "has increased", D: "increase" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'over the past decade' (trong thập kỷ qua) đi với thì hiện tại hoàn thành.",
    explanation_grammar: "Present Perfect.",
    translation: "Khối lượng nhập khẩu nông sản tươi vào Việt Nam đã tăng đáng kể trong thập kỷ qua.",
    core_vocabulary: [{ word: "import volume", type: "n.", meaning: "khối lượng nhập khẩu" }, { word: "significantly", type: "adv.", meaning: "một cách đáng kể" }]
  },
  {
    id: "q0599",
    question: "Ms. Anh ______ her business English vocabulary significantly since the training program started.",
    options: { A: "expands", B: "expand", C: "expanding", D: "has expanded" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc 'since + quá khứ đơn', mệnh đề còn lại chia hiện tại hoàn thành.",
    explanation_grammar: "Present Perfect with Since.",
    translation: "Cô Anh đã mở rộng đáng kể vốn từ vựng tiếng Anh thương mại của mình kể từ khi chương trình đào tạo bắt đầu.",
    core_vocabulary: [{ word: "expand", type: "v.", meaning: "mở rộng" }, { word: "vocabulary", type: "n.", meaning: "từ vựng" }]
  },
  {
    id: "q0600",
    question: "We ______ the Newton interpolation method to solve these complex numerical examples efficiently.",
    options: { A: "apply", B: "applies", C: "applying", D: "have applied" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Diễn tả một hành động đã thực hiện và để lại kết quả hoặc kinh nghiệm ở hiện tại.",
    explanation_grammar: "Present Perfect.",
    translation: "Chúng tôi đã áp dụng phương pháp nội suy Newton để giải các ví dụ số phức tạp này một cách hiệu quả.",
    core_vocabulary: [{ word: "interpolation", type: "n.", meaning: "sự nội suy" }, { word: "efficiently", type: "adv.", meaning: "một cách hiệu quả" }]
  },
  {
    id: "q0601",
    question: "The customs officers ______ the cargo of electronic components at the main port yesterday.",
    options: { A: "inspects", B: "inspecting", C: "inspected", D: "inspect" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'yesterday' (hôm qua) yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple.",
    translation: "Các nhân viên hải quan đã kiểm tra lô hàng linh kiện điện tử tại cảng chính vào ngày hôm qua.",
    core_vocabulary: [{ word: "inspect", type: "v.", meaning: "kiểm tra/thanh tra" }, { word: "port", type: "n.", meaning: "cảng" }]
  },
  {
    id: "q0602",
    question: "Enterprise A ______ a large shipment of fresh apples from the United States last week.",
    options: { A: "imports", B: "importing", C: "import", D: "imported" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'last week' (tuần trước) yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple.",
    translation: "Doanh nghiệp A đã nhập khẩu một lô hàng lớn táo tươi từ Hoa Kỳ vào tuần trước.",
    core_vocabulary: [{ word: "shipment", type: "n.", meaning: "lô hàng" }, { word: "enterprise", type: "n.", meaning: "doanh nghiệp" }]
  },
  {
    id: "q0603",
    question: "The project team ______ the complex tasks into manageable activities on Monday morning.",
    options: { A: "divided", B: "dividing", C: "divide", D: "divides" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu thời gian cụ thể trong quá khứ 'on Monday morning' yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple.",
    translation: "Nhóm dự án đã chia các nhiệm vụ phức tạp thành các hoạt động có thể quản lý được vào sáng thứ Hai.",
    core_vocabulary: [{ word: "manageable", type: "adj.", meaning: "có thể quản lý được" }, { word: "divide", type: "v.", meaning: "chia/phân chia" }]
  },
  {
    id: "q0604",
    question: "The carrier ______ the loading dock earlier than expected due to clear weather conditions.",
    options: { A: "left", B: "leave", C: "leaves", D: "leaving" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Diễn tả một sự việc đã xảy ra và kết thúc trong quá khứ.",
    explanation_grammar: "Past Simple (Irregular verb: leave - left).",
    translation: "Phương tiện vận chuyển đã rời bến bốc hàng sớm hơn dự kiến do điều kiện thời tiết quang đãng.",
    core_vocabulary: [{ word: "expected", type: "adj.", meaning: "được kỳ vọng/dự kiến" }, { word: "clear weather", type: "n.", meaning: "thời tiết quang đãng" }]
  },
  {
    id: "q0605",
    question: "The manager ______ a banking conference in Lisbon to discuss supply chain financing last month.",
    options: { A: "attend", B: "attends", C: "attended", D: "attending" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'last month' (tháng trước) yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple.",
    translation: "Quản lý đã tham dự một hội nghị ngân hàng tại Lisbon để thảo luận về tài chính chuỗi cung ứng vào tháng trước.",
    core_vocabulary: [{ word: "supply chain", type: "n.", meaning: "chuỗi cung ứng" }, { word: "financing", type: "n.", meaning: "tài trợ/tài chính" }]
  }
];

let content = fs.readFileSync(targetFile, 'utf8');
const questionsData = eval(content.replace('window.questionsData =', ''));

const updatedQuestionsData = questionsData.concat(newQuestions);

fs.writeFileSync(targetFile, 'window.questionsData = ' + JSON.stringify(updatedQuestionsData, null, 2) + ';', 'utf8');
console.log('Successfully added 25 questions for 12 thì - Test 4!');
