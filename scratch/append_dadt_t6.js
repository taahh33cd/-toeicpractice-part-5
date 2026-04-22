const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const newQuestions = [
  {
    id: "q0851",
    question: "The automated system requires the immediate ______ of all import documents to the customs database.",
    options: { A: "submitted", B: "submission", C: "submit", D: "submitting" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau tính từ 'immediate' (ngay lập tức) cần một danh từ. 'Submission' (sự nộp/đệ trình) là danh từ phù hợp.",
    explanation_grammar: "Noun as Object.",
    translation: "Hệ thống tự động yêu cầu việc nộp ngay lập tức tất cả các chứng từ nhập khẩu vào cơ sơ dữ liệu hải quan.",
    core_vocabulary: [{ word: "submission", type: "n.", meaning: "sự nộp/đệ trình" }, { word: "database", type: "n.", meaning: "cơ sở dữ liệu" }]
  },
  {
    id: "q0852",
    question: "Accurate ______ of imported goods using proper HS codes is critical to avoid heavy fines.",
    options: { A: "classify", B: "classification", C: "classified", D: "classifying" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chỗ trống cần một danh từ đóng vai trò chủ ngữ của câu. 'Classification' (sự phân loại) là danh từ đúng.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc phân loại chính xác hàng hóa nhập khẩu bằng cách sử dụng mã HS phù hợp là rất quan trọng để tránh bị phạt nặng.",
    core_vocabulary: [{ word: "classification", type: "n.", meaning: "sự phân loại" }, { word: "fine", type: "n.", meaning: "tiền phạt" }]
  },
  {
    id: "q0853",
    question: "Global Harvest Co. is expecting a large ______ of fresh apples from the United States next week.",
    options: { A: "consign", B: "consigned", C: "consignment", D: "consigning" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau mạo từ 'a' và tính từ 'large' cần một danh từ. 'Consignment' (lô hàng ký gửi) là danh từ chỉ vật.",
    explanation_grammar: "Noun as Object.",
    translation: "Global Harvest Co. đang mong đợi một lô hàng táo tươi lớn từ Hoa Kỳ vào tuần tới.",
    core_vocabulary: [{ word: "consignment", type: "n.", meaning: "lô hàng ký gửi" }, { word: "expect", type: "v.", meaning: "mong đợi" }]
  },
  {
    id: "q0854",
    question: "The secure ______ of the fragile computer mainboards is our top priority during transit.",
    options: { A: "packaging", B: "packed", C: "packs", D: "pack" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'The + Noun'. 'Packaging' (việc đóng gói/bao bì) là danh từ (gerund/noun) phù hợp để làm chủ ngữ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc đóng gói an toàn các bo mạch chủ máy tính dễ vỡ là ưu tiên hàng đầu của chúng tôi trong quá trình vận chuyển.",
    core_vocabulary: [{ word: "packaging", type: "n.", meaning: "việc đóng gói" }, { word: "transit", type: "n.", meaning: "quá trình vận chuyển" }]
  },
  {
    id: "q0855",
    question: "The analyst's ______ of the latest regression chart revealed a significant upward trend in shipping costs.",
    options: { A: "interpretation", B: "interpreted", C: "interpreting", D: "interpret" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sở hữu cách 'analyst's' yêu cầu một danh từ. 'Interpretation' (sự diễn giải/giải thích) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự diễn giải của nhà phân tích về biểu đồ hồi quy mới nhất đã tiết lộ xu hướng tăng đáng kể trong chi phí vận chuyển.",
    core_vocabulary: [{ word: "interpretation", type: "n.", meaning: "sự diễn giải" }, { word: "regression chart", type: "n.", meaning: "biểu đồ hồi quy" }]
  },
  {
    id: "q0856",
    question: "A thorough ______ of the project tasks using the WBS method helps maintain the project schedule.",
    options: { A: "analyzing", B: "analyzed", C: "analysis", D: "analyze" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'A thorough + Noun'. 'Analysis' (sự phân tích) là danh từ đúng ngữ pháp hơn 'analyzing' trong trường hợp này.",
    explanation_grammar: "Noun as Subject.",
    translation: "Một bản phân tích thấu đáo các nhiệm vụ dự án bằng phương pháp WBS giúp duy trì tiến độ dự án.",
    core_vocabulary: [{ word: "thorough", type: "adj.", meaning: "thấu đáo/kỹ lưỡng" }, { word: "analysis", type: "n.", meaning: "sự phân tích" }]
  },
  {
    id: "q0857",
    question: "Optimizing the container ______ can help reduce overall international freight expenses.",
    options: { A: "arranging", B: "arranged", C: "arrange", D: "arrangement" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau 'container' (danh từ bổ nghĩa) cần một danh từ chính để tạo cụm danh từ. 'Arrangement' (sự sắp xếp) là phù hợp nhất.",
    explanation_grammar: "Noun in Compound Noun Phrase.",
    translation: "Việc tối ưu hóa sự sắp xếp container có thể giúp giảm tổng chi phí vận tải quốc tế.",
    core_vocabulary: [{ word: "arrangement", type: "n.", meaning: "sự sắp xếp" }, { word: "freight expense", type: "n.", meaning: "chi phí vận tải" }]
  },
  {
    id: "q0858",
    question: "The logistics team's ______ of the delivery timeline was based on standard PERT formulas.",
    options: { A: "estimated", B: "estimation", C: "estimate", D: "estimating" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một danh từ sau sở hữu cách. 'Estimation' (sự ước tính/đánh giá) là danh từ chỉ hành động.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự ước tính của đội ngũ hậu cần về dòng thời gian giao hàng dựa trên các công thức PERT tiêu chuẩn.",
    core_vocabulary: [{ word: "estimation", type: "n.", meaning: "sự ước tính" }, { word: "formula", type: "n.", meaning: "công thức" }]
  },
  {
    id: "q0859",
    question: "Advanced analytical software calculates the margin of ______ when applying numerical forecasting methods.",
    options: { A: "erring", B: "errant", C: "err", D: "error" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cụm danh từ cố định 'margin of error' (sai số).",
    explanation_grammar: "Noun after Preposition.",
    translation: "Phần mềm phân tích tiên tiến tính toán sai số khi áp dụng các phương pháp dự báo số học.",
    core_vocabulary: [{ word: "margin of error", type: "n.", meaning: "sai số" }, { word: "forecasting", type: "n.", meaning: "việc dự báo" }]
  },
  {
    id: "q0860",
    question: "Sunrise Logistics has built a strong ______ for delivering temperature-sensitive cargo on time.",
    options: { A: "reputed", B: "repute", C: "reputing", D: "reputation" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'a strong + Noun'. 'Reputation' (uy tín/danh tiếng) là danh từ thường gặp.",
    explanation_grammar: "Noun as Object.",
    translation: "Sunrise Logistics đã xây dựng được uy tín vững chắc trong việc giao các loại hàng hóa nhạy cảm với nhiệt độ đúng hạn.",
    core_vocabulary: [{ word: "reputation", type: "n.", meaning: "uy tín/danh tiếng" }, { word: "temperature-sensitive", type: "adj.", meaning: "nhạy cảm với nhiệt độ" }]
  },
  {
    id: "q0861",
    question: "All truck drivers must present proper ______ at the terminal gate before unloading the pallets.",
    options: { A: "identify", B: "identification", C: "identified", D: "identifying" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Động từ 'present' cần một tân ngữ là danh từ. 'Identification' (giấy tờ định danh/sự nhận dạng) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Tất cả tài xế xe tải phải xuất trình giấy tờ định danh phù hợp tại cổng nhà ga trước khi dỡ các tấm pallet.",
    core_vocabulary: [{ word: "identification", type: "n.", meaning: "định danh/nhận dạng" }, { word: "unload", type: "v.", meaning: "dỡ hàng" }]
  },
  {
    id: "q0862",
    question: "The strict ______ of the new pallets ensured they could safely support the heavy electronic components.",
    options: { A: "inspecting", B: "inspected", C: "inspection", D: "inspect" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'The strict + Noun'. 'Inspection' (sự kiểm tra/thanh tra) là danh từ chỉ quá trình.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự kiểm tra nghiêm ngặt các tấm pallet mới đảm bảo rằng chúng có thể chống đỡ an toàn các linh kiện điện tử nặng.",
    core_vocabulary: [{ word: "inspection", type: "n.", meaning: "sự kiểm tra" }, { word: "electronic component", type: "n.", meaning: "linh kiện điện tử" }]
  },
  {
    id: "q0863",
    question: "A successful career ______ to a data analyst role requires advanced knowledge of logistics systems.",
    options: { A: "development", B: "developed", C: "developing", D: "develop" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cụm danh từ 'career development' (phát triển sự nghiệp).",
    explanation_grammar: "Noun as Head of Noun Phrase.",
    translation: "Một sự phát triển nghề nghiệp thành công sang vai trò nhà phân tích dữ liệu đòi hỏi kiến thức nâng cao về hệ thống hậu cần.",
    core_vocabulary: [{ word: "career development", type: "n.", meaning: "phát triển sự nghiệp" }, { word: "advanced knowledge", type: "n.", meaning: "kiến thức nâng cao" }]
  },
  {
    id: "q0864",
    question: "Compliance with strict safety ______ is mandatory for all international sea freight carriers.",
    options: { A: "regulating", B: "regulated", C: "regulate", D: "regulations" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau tính từ 'safety' cần một danh từ số nhiều để chỉ các quy định chung. 'Regulations' (các quy định) là danh từ số nhiều.",
    explanation_grammar: "Noun as Object of Preposition.",
    translation: "Việc tuân thủ các quy định an toàn nghiêm ngặt là bắt buộc đối với tất cả các hãng vận tải biển quốc tế.",
    core_vocabulary: [{ word: "regulation", type: "n.", meaning: "quy định" }, { word: "carrier", type: "n.", meaning: "hãng vận tải" }]
  },
  {
    id: "q0865",
    question: "The data team presented a brilliant ______ to the ongoing supply chain bottleneck problem.",
    options: { A: "solve", B: "solved", C: "solving", D: "solution" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'a brilliant + Noun'. 'Solution' (giải pháp) là danh từ thường đi với giới từ 'to'.",
    explanation_grammar: "Noun as Object.",
    translation: "Nhóm dữ liệu đã trình bày một giải pháp tuyệt vời cho vấn đề điểm nghẽn chuỗi cung ứng đang diễn ra.",
    core_vocabulary: [{ word: "solution", type: "n.", meaning: "giải pháp" }, { word: "bottleneck", type: "n.", meaning: "điểm nghẽn" }]
  },
  {
    id: "q0866",
    question: "The swift ______ of the cargo through the VNACCS customs system allowed for early delivery.",
    options: { A: "clear", B: "cleared", C: "clearance", D: "clearing" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cụm 'customs clearance' (thông quan). 'Clearance' là danh từ phù hợp đứng sau 'swift'.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc thông quan hàng hóa nhanh chóng qua hệ thống hải quan VNACCS đã cho phép giao hàng sớm.",
    core_vocabulary: [{ word: "customs clearance", type: "n.", meaning: "thông quan hải quan" }, { word: "swift", type: "adj.", meaning: "nhanh chóng" }]
  },
  {
    id: "q0867",
    question: "The regular ______ of inventory levels is a key responsibility of the supply chain coordinator.",
    options: { A: "evaluation", B: "evaluate", C: "evaluated", D: "evaluating" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chỗ trống làm chủ ngữ của câu nên cần một danh từ. 'Evaluation' (sự đánh giá) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc đánh giá định kỳ các mức tồn kho là trách nhiệm chính của điều phối viên chuỗi cung ứng.",
    core_vocabulary: [{ word: "inventory level", type: "n.", meaning: "mức tồn kho" }, { word: "evaluation", type: "n.", meaning: "sự đánh giá" }]
  },
  {
    id: "q0868",
    question: "The project sponsor expressed high ______ with the team's ability to balance cost and quality.",
    options: { A: "satisfying", B: "satisfaction", C: "satisfied", D: "satisfy" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Động từ 'express' cần một tân ngữ là danh từ. 'Satisfaction' (sự hài lòng) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Nhà tài trợ dự án bày tỏ sự hài lòng cao đối với khả năng cân bằng giữa chi phí và chất lượng của nhóm.",
    core_vocabulary: [{ word: "satisfaction", type: "n.", meaning: "sự hài lòng" }, { word: "sponsor", type: "n.", meaning: "nhà tài trợ" }]
  },
  {
    id: "q0869",
    question: "The careful ______ of the right pallet type prevents damage to high-value shipments.",
    options: { A: "selected", B: "selection", C: "selecting", D: "select" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'The careful + Noun'. 'Selection' (sự lựa chọn) là danh từ phù hợp nhất.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự lựa chọn cẩn thận loại pallet phù hợp giúp ngăn ngừa hư hại đối với các lô hàng giá trị cao.",
    core_vocabulary: [{ word: "selection", type: "n.", meaning: "sự lựa chọn" }, { word: "high-value shipment", type: "n.", meaning: "lô hàng giá trị cao" }]
  },
  {
    id: "q0870",
    question: "The visual ______ of the shipping routes helped the committee make a quick, data-driven decision.",
    options: { A: "presenting", B: "presented", C: "present", D: "presentation" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần danh từ làm chủ ngữ. 'Presentation' (sự trình bày/thuyết trình) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự trình bày trực quan về các lộ trình vận chuyển đã giúp ủy ban đưa ra quyết định nhanh chóng dựa trên dữ liệu.",
    core_vocabulary: [{ word: "presentation", type: "n.", meaning: "sự trình bày/thuyết trình" }, { word: "data-driven", type: "adj.", meaning: "dựa trên dữ liệu" }]
  },
  {
    id: "q0871",
    question: "Strategic ______ of the delivery routes significantly reduced vehicle fuel consumption.",
    options: { A: "optimized", B: "optimization", C: "optimizing", D: "optimize" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần danh từ làm chủ ngữ. 'Optimization' (sự tối ưu hóa) là danh từ phù hợp nhất.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự tối ưu hóa chiến lược các lộ trình giao hàng đã làm giảm đáng kể mức tiêu thụ nhiên liệu của phương tiện.",
    core_vocabulary: [{ word: "optimization", type: "n.", meaning: "sự tối ưu hóa" }, { word: "fuel consumption", type: "n.", meaning: "mức tiêu thụ nhiên liệu" }]
  },
  {
    id: "q0872",
    question: "The newly signed ______ guarantees a steady supply of standardized packaging materials for three years.",
    options: { A: "agreeable", B: "agreement", C: "agree", D: "agreed" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần danh từ làm chủ ngữ. 'Agreement' (thỏa thuận/hợp đồng) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Thỏa thuận vừa được ký kết đảm bảo nguồn cung cấp ổn định các vật liệu đóng gói tiêu chuẩn trong ba năm.",
    core_vocabulary: [{ word: "agreement", type: "n.", meaning: "thỏa thuận/hợp đồng" }, { word: "steady supply", type: "n.", meaning: "nguồn cung ổn định" }]
  },
  {
    id: "q0873",
    question: "Temperature control is vital for the ______ of fresh agricultural products during ocean transit.",
    options: { A: "preserve", B: "preserved", C: "preserving", D: "preservation" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một danh từ sau mạo từ 'the'. 'Preservation' (sự bảo quản) là danh từ.",
    explanation_grammar: "Noun as Object of Preposition.",
    translation: "Kiểm soát nhiệt độ là tối quan trọng cho việc bảo quản các sản phẩm nông nghiệp tươi sống trong quá trình vận chuyển đường biển.",
    core_vocabulary: [{ word: "preservation", type: "n.", meaning: "sự bảo quản" }, { word: "vital", type: "adj.", meaning: "tối quan trọng" }]
  },
  {
    id: "q0874",
    question: "The successful ______ of the new distribution center was celebrated by the entire executive board.",
    options: { A: "completion", B: "complete", C: "completing", D: "completed" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'The successful + Noun'. 'Completion' (sự hoàn thành) là danh từ phù hợp.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự hoàn thành thành công trung tâm phân phối mới đã được toàn thể ban điều hành chúc mừng.",
    core_vocabulary: [{ word: "completion", type: "n.", meaning: "sự hoàn thành" }, { word: "distribution center", type: "n.", meaning: "trung tâm phân phối" }]
  },
  {
    id: "q0875",
    question: "Continuous ______ in the latest data tracking software is highly encouraged for all staff members.",
    options: { A: "educated", B: "educate", C: "educating", D: "education" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần danh từ làm chủ ngữ. 'Education' (giáo dục/đào tạo) là danh từ phù hợp nhất trong bối cảnh này.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc đào tạo liên tục về phần mềm theo dõi dữ liệu mới nhất được khuyến khích mạnh mẽ cho tất cả các nhân viên.",
    core_vocabulary: [{ word: "education", type: "n.", meaning: "giáo dục/đào tạo" }, { word: "tracking software", type: "n.", meaning: "phần mềm theo dõi" }]
  }
];

let content = fs.readFileSync(targetFile, 'utf8');
const questionsData = eval(content.replace('window.questionsData =', ''));

const updatedQuestionsData = questionsData.concat(newQuestions);

fs.writeFileSync(targetFile, 'window.questionsData = ' + JSON.stringify(updatedQuestionsData, null, 2) + ';', 'utf8');
console.log('Successfully added 25 questions for Danh từ & Đại từ - Test 6!');
