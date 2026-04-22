const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const newQuestions = [
  {
    id: "q0681",
    question: "The customs officers ______ all the shipping containers at the port yesterday.",
    options: { A: "inspected", B: "inspecting", C: "inspect", D: "inspects" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'yesterday' yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple.",
    translation: "Các nhân viên hải quan đã kiểm tra tất cả các container vận chuyển tại cảng ngày hôm qua.",
    core_vocabulary: [{ word: "inspect", type: "v.", meaning: "kiểm tra" }, { word: "container", type: "n.", meaning: "thùng chứa/công-te-nơ" }]
  },
  {
    id: "q0682",
    question: "Our logistics team ______ its operational capacity significantly since last year.",
    options: { A: "expand", B: "expands", C: "expanding", D: "has expanded" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'since last year' yêu cầu thì hiện tại hoàn thành.",
    explanation_grammar: "Present Perfect with Since.",
    translation: "Đội ngũ hậu cần của chúng tôi đã mở rộng đáng kể năng lực hoạt động kể từ năm ngoái.",
    core_vocabulary: [{ word: "operational capacity", type: "n.", meaning: "năng lực hoạt động" }, { word: "significantly", type: "adv.", meaning: "một cách đáng kể" }]
  },
  {
    id: "q0683",
    question: "The warehouse staff should ______ the inventory list before closing the facility.",
    options: { A: "checked", B: "checking", C: "checks", D: "check" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Sau động từ khuyết thiếu 'should' dùng động từ nguyên mẫu.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Nhân viên kho nên kiểm tra danh mục hàng tồn kho trước khi đóng cửa cơ sở.",
    core_vocabulary: [{ word: "inventory list", type: "n.", meaning: "danh mục hàng tồn kho" }, { word: "facility", type: "n.", meaning: "cơ sở/tiện nghi" }]
  },
  {
    id: "q0684",
    question: "The delicate computer mainboards are carefully ______ by the experienced workers.",
    options: { A: "handled", B: "handle", C: "handling", D: "handles" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì hiện tại đơn (are + V3/ed).",
    explanation_grammar: "Present Simple Passive.",
    translation: "Các bo mạch chủ máy tính nhạy cảm được xử lý cẩn thận bởi các công nhân giàu kinh nghiệm.",
    core_vocabulary: [{ word: "delicate", type: "adj.", meaning: "nhạy cảm/dễ vỡ" }, { word: "handle", type: "v.", meaning: "xử lý/điều khiển" }]
  },
  {
    id: "q0685",
    question: "Please ______ the Konel Travel agency to modify your flight to Lisbon.",
    options: { A: "contacts", B: "contacting", C: "contacted", D: "contact" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Câu mệnh lệnh bắt đầu bằng 'Please' + V-bare.",
    explanation_grammar: "Imperative sentence.",
    translation: "Vui lòng liên hệ với đại lý Konel Travel để điều chỉnh chuyến bay đến Lisbon của bạn.",
    core_vocabulary: [{ word: "modify", type: "v.", meaning: "điều chỉnh/sửa đổi" }, { word: "agency", type: "n.", meaning: "đại lý" }]
  },
  {
    id: "q0686",
    question: "Ms. Anh ______ the final project schedule to the management team yesterday.",
    options: { A: "submits", B: "submitting", C: "submitted", D: "submit" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'yesterday' yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple.",
    translation: "Cô Anh đã nộp lịch trình dự án cuối cùng cho ban quản lý vào ngày hôm qua.",
    core_vocabulary: [{ word: "submit", type: "v.", meaning: "nộp/đệ trình" }, { word: "schedule", type: "n.", meaning: "lịch trình" }]
  },
  {
    id: "q0687",
    question: "The new analytical software ______ the accuracy of our numerical reports recently.",
    options: { A: "improve", B: "improves", C: "improving", D: "has improved" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'recently' (gần đây) yêu cầu thì hiện tại hoàn thành.",
    explanation_grammar: "Present Perfect.",
    translation: "Phần mềm phân tích mới đã cải thiện tính chính xác cho các báo cáo số liệu của chúng tôi gần đây.",
    core_vocabulary: [{ word: "accuracy", type: "n.", meaning: "tính chính xác" }, { word: "numerical report", type: "n.", meaning: "báo cáo số liệu" }]
  },
  {
    id: "q0688",
    question: "All entrepreneurs must ______ the market trends before launching a new product.",
    options: { A: "analyzing", B: "analyzed", C: "analyzes", D: "analyze" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'must' dùng động từ nguyên mẫu.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Tất cả các doanh nhân phải phân tích xu hướng thị trường trước khi tung ra sản phẩm mới.",
    core_vocabulary: [{ word: "entrepreneur", type: "n.", meaning: "doanh nhân" }, { word: "launch", type: "v.", meaning: "tung ra/khởi chạy" }]
  },
  {
    id: "q0689",
    question: "The linear trendlines in the spreadsheet are ______ automatically every Monday morning.",
    options: { A: "generated", B: "generates", C: "generating", D: "generate" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì hiện tại đơn (are + V3/ed).",
    explanation_grammar: "Present Simple Passive.",
    translation: "Các đường xu hướng tuyến tính trong bảng tính được tạo tự động vào mỗi sáng thứ Hai.",
    core_vocabulary: [{ word: "linear trendline", type: "n.", meaning: "đường xu hướng tuyến tính" }, { word: "automatic", type: "adj.", meaning: "tự động" }]
  },
  {
    id: "q0690",
    question: "Please ______ the correct wooden pallets for the heavy electronic equipment.",
    options: { A: "used", B: "uses", C: "using", D: "use" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Câu mệnh lệnh sau 'Please' dùng động từ nguyên mẫu.",
    explanation_grammar: "Imperative sentence.",
    translation: "Vui lòng sử dụng các tấm pallet gỗ chính xác cho thiết bị điện tử nặng.",
    core_vocabulary: [{ word: "wooden pallet", type: "n.", meaning: "tấm pallet gỗ" }, { word: "equipment", type: "n.", meaning: "thiết bị" }]
  },
  {
    id: "q0691",
    question: "Enterprise A ______ a massive shipment of fresh produce from the United States last month.",
    options: { A: "receive", B: "received", C: "receives", D: "receiving" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'last month' yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple.",
    translation: "Doanh nghiệp A đã nhận một lô hàng nông sản tươi khổng lồ từ Hoa Kỳ vào tháng trước.",
    core_vocabulary: [{ word: "massive", type: "adj.", meaning: "khổng lồ/đồ sộ" }, { word: "shipment", type: "n.", meaning: "lô hàng" }]
  },
  {
    id: "q0692",
    question: "The demand for ASUS ROG Strix mainboards ______ steadily over the past quarter.",
    options: { A: "grow", B: "has grown", C: "grows", D: "growing" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'over the past quarter' (trong quý vừa qua) yêu cầu thì hiện tại hoàn thành.",
    explanation_grammar: "Present Perfect.",
    translation: "Nhu cầu đối với bo mạch chủ ASUS ROG Strix đã tăng trưởng đều đặn trong quý vừa qua.",
    core_vocabulary: [{ word: "demand", type: "n.", meaning: "nhu cầu" }, { word: "steadily", type: "adv.", meaning: "một cách đều đặn" }]
  },
  {
    id: "q0693",
    question: "The project manager can ______ the Work Breakdown Structure to optimize efficiency.",
    options: { A: "adjusts", B: "adjusting", C: "adjust", D: "adjusted" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'can' dùng động từ nguyên mẫu.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Quản lý dự án có thể điều chỉnh Cấu trúc phân chia công việc (WBS) để tối ưu hóa hiệu quả.",
    core_vocabulary: [{ word: "efficiency", type: "n.", meaning: "hiệu quả" }, { word: "adjust", type: "v.", meaning: "điều chỉnh" }]
  },
  {
    id: "q0694",
    question: "The VNACCS customs declaration was successfully ______ by the broker this morning.",
    options: { A: "complete", B: "completing", C: "completes", D: "completed" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động quá khứ đơn (was + V3/ed).",
    explanation_grammar: "Past Simple Passive.",
    translation: "Tờ khai hải quan VNACCS đã được người môi giới hoàn thành thành công vào sáng nay.",
    core_vocabulary: [{ word: "customs declaration", type: "n.", meaning: "tờ khai hải quan" }, { word: "successfully", type: "adv.", meaning: "một cách thành công" }]
  },
  {
    id: "q0695",
    question: "Kindly ______ the time estimation using the PERT method before the meeting starts.",
    options: { A: "recalculates", B: "recalculating", C: "recalculated", D: "recalculate" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "'Kindly' dùng trong câu yêu cầu/mệnh lệnh lịch sự, theo sau là V-bare.",
    explanation_grammar: "Polite Request/Imperative.",
    translation: "Vui lòng tính toán lại thời gian ước tính bằng phương pháp PERT trước khi cuộc họp bắt đầu.",
    core_vocabulary: [{ word: "recalculate", type: "v.", meaning: "tính toán lại" }, { word: "PERT method", type: "n.", meaning: "phương pháp PERT" }]
  },
  {
    id: "q0696",
    question: "The chief data analyst ______ a supply chain conference in Lisbon last week.",
    options: { A: "attended", B: "attends", C: "attending", D: "attend" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'last week' yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple.",
    translation: "Trưởng phòng phân tích dữ liệu đã tham dự một hội nghị chuỗi cung ứng tại Lisbon vào tuần trước.",
    core_vocabulary: [{ word: "attend", type: "v.", meaning: "tham dự" }, { word: "supply chain", type: "n.", meaning: "chuỗi cung ứng" }]
  },
  {
    id: "q0697",
    question: "The new delivery route ______ shipping costs significantly since its implementation.",
    options: { A: "reducing", B: "reduce", C: "reduces", D: "has reduced" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'since' yêu cầu thì hiện tại hoàn thành.",
    explanation_grammar: "Present Perfect.",
    translation: "Tuyến đường giao hàng mới đã giảm đáng kể chi phí vận chuyển kể từ khi triển khai.",
    core_vocabulary: [{ word: "implementation", type: "n.", meaning: "sự triển khai" }, { word: "shipping cost", type: "n.", meaning: "chi phí vận chuyển" }]
  },
  {
    id: "q0698",
    question: "The team should ______ the Newton interpolation method for this specific numerical example.",
    options: { A: "apply", B: "applied", C: "applying", D: "applies" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'should' dùng động từ nguyên mẫu.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Nhóm nghiên cứu nên áp dụng phương pháp nội suy Newton cho ví dụ số học cụ thể này.",
    core_vocabulary: [{ word: "apply", type: "v.", meaning: "áp dụng" }, { word: "interpolation", type: "n.", meaning: "sự nội suy" }]
  },
  {
    id: "q0699",
    question: "The exact HS codes are usually ______ on the second page of the customs form.",
    options: { A: "list", B: "lists", C: "listing", D: "listed" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì hiện tại đơn (are + V3/ed).",
    explanation_grammar: "Present Simple Passive.",
    translation: "Các mã HS chính xác thường được liệt kê ở trang thứ hai của tờ khai hải quan.",
    core_vocabulary: [{ word: "list", type: "v.", meaning: "liệt kê" }, { word: "customs form", type: "n.", meaning: "tờ khai hải quan" }]
  },
  {
    id: "q0700",
    question: "Please ______ all international clients of the upcoming changes to our shipping policy.",
    options: { A: "informing", B: "informed", C: "informs", D: "inform" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Câu mệnh lệnh dùng động từ nguyên mẫu.",
    explanation_grammar: "Imperative sentence.",
    translation: "Vui lòng thông báo cho tất cả khách hàng quốc tế về những thay đổi sắp tới đối với chính sách vận chuyển của chúng tôi.",
    core_vocabulary: [{ word: "inform", type: "v.", meaning: "thông báo" }, { word: "shipping policy", type: "n.", meaning: "chính sách vận chuyển" }]
  },
  {
    id: "q0701",
    question: "The logistics coordinator ______ the total container load capacity yesterday afternoon.",
    options: { A: "calculating", B: "calculate", C: "calculated", D: "calculates" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'yesterday afternoon' yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple.",
    translation: "Điều phối viên hậu cần đã tính toán tổng khả năng chịu tải của container vào chiều hôm qua.",
    core_vocabulary: [{ word: "coordinator", type: "n.", meaning: "điều phối viên" }, { word: "load capacity", type: "n.", meaning: "khả năng chịu tải" }]
  },
  {
    id: "q0702",
    question: "Mr. Chen ______ multiple regression charts to visualize the monthly sales data.",
    options: { A: "creates", B: "creating", C: "has created", D: "create" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Thì hiện tại hoàn thành diễn tả hành động đã hoàn thành và để lại kết quả (biểu đồ đã sẵn sàng để xem).",
    explanation_grammar: "Present Perfect.",
    translation: "Ông Chen đã tạo ra nhiều biểu đồ hồi quy để trực quan hóa dữ liệu doanh số hàng tháng.",
    core_vocabulary: [{ word: "visualize", type: "v.", meaning: "trực quan hóa" }, { word: "regression chart", type: "n.", meaning: "biểu đồ hồi quy" }]
  },
  {
    id: "q0703",
    question: "The carrier must ______ the loading dock before the heavy rain begins.",
    options: { A: "leave", B: "leaving", C: "leaves", D: "left" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'must' dùng động từ nguyên mẫu.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Hãng vận tải phải rời bến bốc hàng trước khi trời mưa to.",
    core_vocabulary: [{ word: "carrier", type: "n.", meaning: "hãng vận tải" }, { word: "loading dock", type: "n.", meaning: "bến bốc hàng" }]
  },
  {
    id: "q0704",
    question: "The fresh apples are securely ______ inside the temperature-controlled warehouse.",
    options: { A: "stored", B: "storing", C: "stores", D: "store" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì hiện tại đơn (are + V3/ed).",
    explanation_grammar: "Present Simple Passive.",
    translation: "Những quả táo tươi được lưu kho an toàn bên trong nhà kho kiểm soát nhiệt độ.",
    core_vocabulary: [{ word: "store", type: "v.", meaning: "lưu kho" }, { word: "temperature-controlled", type: "adj.", meaning: "kiểm soát nhiệt độ" }]
  },
  {
    id: "q0705",
    question: "Please ______ the error rates using the bisection method to ensure accurate results.",
    options: { A: "evaluated", B: "evaluate", C: "evaluating", D: "evaluates" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Câu mệnh lệnh sau 'Please' dùng động từ nguyên mẫu.",
    explanation_grammar: "Imperative sentence.",
    translation: "Vui lòng đánh giá tỷ lệ lỗi bằng phương pháp chia đôi để đảm bảo kết quả chính xác.",
    core_vocabulary: [{ word: "evaluate", type: "v.", meaning: "đánh giá" }, { word: "bisection method", type: "n.", meaning: "phương pháp chia đôi" }]
  }
];

let content = fs.readFileSync(targetFile, 'utf8');
const questionsData = eval(content.replace('window.questionsData =', ''));

const updatedQuestionsData = questionsData.concat(newQuestions);

fs.writeFileSync(targetFile, 'window.questionsData = ' + JSON.stringify(updatedQuestionsData, null, 2) + ';', 'utf8');
console.log('Successfully added 25 questions for 12 thì - Test 8!');
