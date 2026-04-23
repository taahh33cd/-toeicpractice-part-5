const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const newQuestions = [
  {
    id: "q0606",
    question: "The imported fresh produce from the United States must be ______ carefully at the border.",
    options: { A: "inspect", B: "inspecting", C: "inspected", D: "inspects" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động đi kèm động từ khuyết thiếu (must be + V3/ed).",
    explanation_grammar: "Passive with Modal Verbs.",
    translation: "Nông sản tươi nhập khẩu từ Hoa Kỳ phải được kiểm tra cẩn thận tại biên giới.",
    core_vocabulary: [{ word: "fresh produce", type: "n.", meaning: "nông sản tươi" }, { word: "inspect", type: "v.", meaning: "kiểm tra/thanh tra" }]
  },
  {
    id: "q0607",
    question: "The analytics team should ______ the new regression model before tomorrow's meeting.",
    options: { A: "evaluate", B: "evaluated", C: "evaluates", D: "evaluating" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'should' dùng động từ nguyên mẫu không 'to'.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Nhóm phân tích nên đánh giá mô hình hồi quy mới trước cuộc họp ngày mai.",
    core_vocabulary: [{ word: "evaluate", type: "v.", meaning: "đánh giá" }, { word: "regression model", type: "n.", meaning: "mô hình hồi quy" }]
  },
  {
    id: "q0608",
    question: "Ms. Anh ______ the Work Breakdown Structure for the upcoming supply chain project.",
    options: { A: "has finished", B: "finish", C: "finishing", D: "finishes" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Thì hiện tại hoàn thành diễn tả hành động vừa mới hoàn thành và có kết quả ở hiện tại.",
    explanation_grammar: "Present Perfect.",
    translation: "Cô Anh đã hoàn thành Cấu trúc phân chia công việc (WBS) cho dự án chuỗi cung ứng sắp tới.",
    core_vocabulary: [{ word: "upcoming", type: "adj.", meaning: "sắp tới" }, { word: "supply chain", type: "n.", meaning: "chuỗi cung ứng" }]
  },
  {
    id: "q0609",
    question: "Please ______ the correct HS code when filing the documentation for the electronic parts.",
    options: { A: "used", B: "uses", C: "using", D: "use" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Câu mệnh lệnh bắt đầu bằng 'Please' + V-bare.",
    explanation_grammar: "Imperative sentence.",
    translation: "Vui lòng sử dụng mã HS chính xác khi nộp hồ sơ cho các bộ phận điện tử.",
    core_vocabulary: [{ word: "file documentation", type: "phr.", meaning: "nộp hồ sơ/tài liệu" }, { word: "electronic part", type: "n.", meaning: "linh kiện điện tử" }]
  },
  {
    id: "q0610",
    question: "The fragile computer mainboards are currently being ______ onto the standard wooden pallets.",
    options: { A: "load", B: "loaded", C: "loading", D: "loads" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì hiện tại tiếp diễn (are being + V3/ed).",
    explanation_grammar: "Present Continuous Passive.",
    translation: "Các bo mạch chủ máy tính dễ vỡ hiện đang được bốc xếp lên các tấm pallet gỗ tiêu chuẩn.",
    core_vocabulary: [{ word: "fragile", type: "adj.", meaning: "dễ vỡ" }, { word: "standard", type: "adj.", meaning: "tiêu chuẩn" }]
  },
  {
    id: "q0611",
    question: "We need to ______ the bisection method to find the root of this non-linear equation.",
    options: { A: "applies", B: "applied", C: "applying", D: "apply" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Sau cấu trúc 'need to' là động từ nguyên mẫu.",
    explanation_grammar: "To-infinitive after 'need'.",
    translation: "Chúng ta cần áp dụng phương pháp chia đôi để tìm nghiệm của phương trình phi tuyến này.",
    core_vocabulary: [{ word: "root", type: "n.", meaning: "nghiệm (toán học)" }, { word: "non-linear equation", type: "n.", meaning: "phương trình phi tuyến" }]
  },
  {
    id: "q0612",
    question: "The logistics coordinator ______ the Konel Travel agency to book flights for the conference.",
    options: { A: "contacting", B: "contacted", C: "contact", D: "contacts" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Diễn tả một hành động đã xảy ra và kết thúc trong quá khứ (liên hệ để đặt vé).",
    explanation_grammar: "Past Simple.",
    translation: "Điều phối viên hậu cần đã liên hệ với đại lý Konel Travel để đặt vé máy bay cho hội nghị.",
    core_vocabulary: [{ word: "coordinator", type: "n.", meaning: "điều phối viên" }, { word: "agency", type: "n.", meaning: "đại lý" }]
  },
  {
    id: "q0613",
    question: "The readership of our monthly supply chain magazine ______ steadily since last January.",
    options: { A: "has grown", B: "grows", C: "growing", D: "grow" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'since last January' yêu cầu thì hiện tại hoàn thành.",
    explanation_grammar: "Present Perfect with Since.",
    translation: "Lượng độc giả của tạp chí chuỗi cung ứng hàng tháng của chúng tôi đã tăng trưởng đều đặn kể từ tháng Giêng năm ngoái.",
    core_vocabulary: [{ word: "steadily", type: "adv.", meaning: "một cách đều đặn" }, { word: "growth", type: "n.", meaning: "sự tăng trưởng" }]
  },
  {
    id: "q0614",
    question: "The project budget was ______ to maintain the balance between cost, schedule, and quality.",
    options: { A: "adjust", B: "adjusting", C: "adjusted", D: "adjusts" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì quá khứ đơn (was + V3/ed).",
    explanation_grammar: "Past Simple Passive.",
    translation: "Ngân sách dự án đã được điều chỉnh để duy trì sự cân bằng giữa chi phí, tiến độ và chất lượng.",
    core_vocabulary: [{ word: "balance", type: "n.", meaning: "sự cân bằng" }, { word: "adjust", type: "v.", meaning: "điều chỉnh" }]
  },
  {
    id: "q0615",
    question: "Please ______ the data points using Newton interpolation to predict next month's demand.",
    options: { A: "calculating", B: "calculate", C: "calculated", D: "calculates" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Câu mệnh lệnh bắt đầu với 'Please' + V-bare.",
    explanation_grammar: "Imperative sentence.",
    translation: "Vui lòng tính toán các điểm dữ liệu bằng phương pháp nội suy Newton để dự báo nhu cầu tháng tới.",
    core_vocabulary: [{ word: "predict", type: "v.", meaning: "dự báo/tiên đoán" }, { word: "demand", type: "n.", meaning: "nhu cầu" }]
  },
  {
    id: "q0616",
    question: "It is necessary to ______ the VNACCS system early to avoid customs clearance delays.",
    options: { A: "access", B: "accesses", C: "accessed", D: "accessing" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Sau cấu trúc giả định 'It is necessary to' là động từ nguyên mẫu.",
    explanation_grammar: "To-infinitive.",
    translation: "Cần phải truy cập hệ thống VNACCS sớm để tránh sự chậm trễ trong thông quan hải quan.",
    core_vocabulary: [{ word: "access", type: "v.", meaning: "truy cập" }, { word: "customs clearance", type: "n.", meaning: "thông quan hải quan" }]
  },
  {
    id: "q0617",
    question: "Mr. Chen ______ an important banking conference in Lisbon to discuss trade financing.",
    options: { A: "attending", B: "attended", C: "attend", D: "attends" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Diễn tả hành động đã xảy ra trong quá khứ liên quan đến một sự kiện cụ thể.",
    explanation_grammar: "Past Simple.",
    translation: "Ông Chen đã tham dự một hội nghị ngân hàng quan trọng tại Lisbon để thảo luận về tài trợ thương mại.",
    core_vocabulary: [{ word: "trade financing", type: "n.", meaning: "tài trợ thương mại" }, { word: "attend", type: "v.", meaning: "tham dự" }]
  },
  {
    id: "q0618",
    question: "All cargo must be securely ______ before the transport vehicle departs from the loading dock.",
    options: { A: "fastening", B: "fastens", C: "fasten", D: "fastened" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động với động từ khuyết thiếu 'must be' + V3/ed.",
    explanation_grammar: "Passive with Modal Verbs.",
    translation: "Tất cả hàng hóa phải được buộc chặt an toàn trước khi phương tiện vận chuyển khởi hành khỏi bến bốc hàng.",
    core_vocabulary: [{ word: "depart", type: "v.", meaning: "khởi hành" }, { word: "securely", type: "adv.", meaning: "một cách an toàn/chắc chắn" }]
  },
  {
    id: "q0619",
    question: "Before starting a new venture, entrepreneurs should ______ the market conditions thoroughly.",
    options: { A: "researching", B: "research", C: "researched", D: "researches" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'should' dùng động từ nguyên mẫu.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Trước khi bắt đầu một dự án mới, các doanh nhân nên nghiên cứu kỹ các điều kiện thị trường.",
    core_vocabulary: [{ word: "venture", type: "n.", meaning: "dự án kinh doanh/liên doanh" }, { word: "thoroughly", type: "adv.", meaning: "một cách kỹ lưỡng" }]
  },
  {
    id: "q0620",
    question: "The new analyst ______ her skills in numerical mathematical methods significantly this year.",
    options: { A: "improves", B: "improving", C: "improve", D: "has improved" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Thì hiện tại hoàn thành diễn tả kinh nghiệm hoặc sự thay đổi trong khoảng thời gian bao gồm cả hiện tại (this year).",
    explanation_grammar: "Present Perfect.",
    translation: "Nhà phân tích mới đã cải thiện đáng kể các kỹ năng của mình trong các phương pháp toán học số học trong năm nay.",
    core_vocabulary: [{ word: "numerical method", type: "n.", meaning: "phương pháp số" }, { word: "significantly", type: "adv.", meaning: "một cách đáng kể" }]
  },
  {
    id: "q0621",
    question: "The warehouse supervisor plans to ______ the container load capacity by Friday afternoon.",
    options: { A: "measures", B: "measuring", C: "measure", D: "measured" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'plans to' dùng động từ nguyên mẫu.",
    explanation_grammar: "To-infinitive.",
    translation: "Giám sát kho hàng có kế hoạch đo đạc khả năng chịu tải của container vào chiều thứ Sáu.",
    core_vocabulary: [{ word: "supervisor", type: "n.", meaning: "người giám sát" }, { word: "measure", type: "v.", meaning: "đo lường/đo đạc" }]
  },
  {
    id: "q0622",
    question: "The time estimation for the new facility construction was ______ using the PERT method.",
    options: { A: "determining", B: "determined", C: "determines", D: "determine" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động quá khứ đơn (was + V3/ed).",
    explanation_grammar: "Past Simple Passive.",
    translation: "Việc ước tính thời gian xây dựng cơ sở mới đã được xác định bằng phương pháp PERT.",
    core_vocabulary: [{ word: "determine", type: "v.", meaning: "xác định" }, { word: "time estimation", type: "n.", meaning: "sự ước tính thời gian" }]
  },
  {
    id: "q0623",
    question: "Kindly ______ the shipping requirements before exporting the goods to the European market.",
    options: { A: "verifying", B: "verified", C: "verifies", D: "verify" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "'Kindly' là cách yêu cầu lịch sự, theo sau là V-bare.",
    explanation_grammar: "Imperative/Polite request.",
    translation: "Vui lòng xác minh các yêu cầu vận chuyển trước khi xuất khẩu hàng hóa sang thị trường Châu Âu.",
    core_vocabulary: [{ word: "verify", type: "v.", meaning: "xác minh" }, { word: "European market", type: "n.", meaning: "thị trường Châu Âu" }]
  },
  {
    id: "q0624",
    question: "Enterprise A ______ several shipments of fresh apples to the warehouse in Vietnam.",
    options: { A: "deliver", B: "has delivered", C: "delivers", D: "delivering" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Thì hiện tại hoàn thành diễn tả hành động đã diễn ra dẫn đến kết quả hiện tại.",
    explanation_grammar: "Present Perfect.",
    translation: "Doanh nghiệp A đã giao một vài lô hàng táo tươi đến kho hàng tại Việt Nam.",
    core_vocabulary: [{ word: "deliver", type: "v.", meaning: "giao hàng" }, { word: "shipment", type: "n.", meaning: "lô hàng" }]
  },
  {
    id: "q0625",
    question: "The team ______ a detailed trendline in Google Sheets to present the sales forecast yesterday.",
    options: { A: "created", B: "creates", C: "creating", D: "create" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'yesterday' yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple.",
    translation: "Nhóm nghiên cứu đã tạo ra một đường xu hướng chi tiết trong Google Sheets để trình bày dự báo doanh số ngày hôm qua.",
    core_vocabulary: [{ word: "sales forecast", type: "n.", meaning: "dự báo doanh số" }, { word: "trendline", type: "n.", meaning: "đường xu hướng" }]
  },
  {
    id: "q0626",
    question: "The monthly error rates are automatically ______ by the newly installed software system.",
    options: { A: "calculates", B: "calculating", C: "calculate", D: "calculated" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì hiện tại đơn (are + V3/ed).",
    explanation_grammar: "Present Simple Passive.",
    translation: "Tỷ lệ lỗi hàng tháng được tính toán tự động bằng hệ thống phần mềm mới được cài đặt.",
    core_vocabulary: [{ word: "error rate", type: "n.", meaning: "tỷ lệ lỗi" }, { word: "calculate", type: "v.", meaning: "tính toán" }]
  },
  {
    id: "q0627",
    question: "The manager wants to ______ the complex job into smaller, more manageable daily tasks.",
    options: { A: "dividing", B: "divides", C: "divided", D: "divide" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'wants to' là động từ nguyên mẫu.",
    explanation_grammar: "To-infinitive.",
    translation: "Quản lý muốn chia công việc phức tạp thành các nhiệm vụ hàng ngày nhỏ hơn và dễ quản lý hơn.",
    core_vocabulary: [{ word: "manageable", type: "adj.", meaning: "dễ quản lý" }, { word: "divide", type: "v.", meaning: "chia nhỏ" }]
  },
  {
    id: "q0628",
    question: "The shipping company ______ its delivery times by optimizing the main transportation routes.",
    options: { A: "reduces", B: "reduce", C: "has reduced", D: "reducing" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Thì hiện tại hoàn thành diễn tả kết quả của việc tối ưu hóa tính đến nay.",
    explanation_grammar: "Present Perfect.",
    translation: "Công ty vận chuyển đã giảm thời gian giao hàng bằng cách tối ưu hóa các tuyến vận tải chính.",
    core_vocabulary: [{ word: "optimize", type: "v.", meaning: "tối ưu hóa" }, { word: "delivery time", type: "n.", meaning: "thời gian giao hàng" }]
  },
  {
    id: "q0629",
    question: "Over 1,000 units of the ASUS ROG Strix mainboards were ______ to the retailer this morning.",
    options: { A: "shipped", B: "ships", C: "shipping", D: "ship" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động quá khứ đơn (were + V3/ed).",
    explanation_grammar: "Past Simple Passive.",
    translation: "Hơn 1.000 bộ bo mạch chủ ASUS ROG Strix đã được vận chuyển đến nhà bán lẻ vào sáng nay.",
    core_vocabulary: [{ word: "retailer", type: "n.", meaning: "nhà bán lẻ" }, { word: "ship", type: "v.", meaning: "vận chuyển" }]
  },
  {
    id: "q0630",
    question: "Please ______ your travel agent immediately if there are any changes to your reservation.",
    options: { A: "notified", B: "notifying", C: "notify", D: "notifies" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Câu mệnh lệnh sau 'Please' + V-bare.",
    explanation_grammar: "Imperative sentence.",
    translation: "Vui lòng thông báo cho đại lý du lịch của bạn ngay lập tức nếu có bất kỳ thay đổi nào liên quan đến việc đặt chỗ.",
    core_vocabulary: [{ word: "notify", type: "v.", meaning: "thông báo" }, { word: "immediately", type: "adv.", meaning: "ngay lập tức" }]
  }
];

let content = fs.readFileSync(targetFile, 'utf8');
const questionsData = eval(content.replace('window.questionsData =', ''));

const updatedQuestionsData = questionsData.concat(newQuestions);

fs.writeFileSync(targetFile, 'window.questionsData = ' + JSON.stringify(updatedQuestionsData, null, 2) + ';', 'utf8');
console.log('Successfully added 25 questions for 12 thì - Test 5!');
