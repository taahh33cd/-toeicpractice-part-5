const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const newQuestions = [
  {
    id: "q0901",
    question: "The Global Harvest corporation successfully completed the ______ of fresh apples from the United States to Vietnam.",
    options: { A: "transportation", B: "transport", C: "transporting", D: "transported" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chỗ trống cần một danh từ đóng vai trò tân ngữ. 'Transportation' (việc vận chuyển) là danh từ phù hợp nhất.",
    explanation_grammar: "Noun as Object.",
    translation: "Tập đoàn Global Harvest đã hoàn thành thành công việc vận chuyển táo tươi từ Hoa Kỳ đến Việt Nam.",
    core_vocabulary: [{ word: "transportation", type: "n.", meaning: "việc vận chuyển" }, { word: "corporation", type: "n.", meaning: "tập đoàn" }]
  },
  {
    id: "q0902",
    question: "The warehouse staff must ensure the careful ______ of the 1,258 computer mainboards onto the wooden pallets.",
    options: { A: "place", B: "placed", C: "placement", D: "placing" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau cụm 'the careful' (mạo từ + tính từ) cần một danh từ. 'Placement' (việc đặt/sắp đặt) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Nhân viên kho phải đảm bảo việc sắp đặt cẩn thận 1.258 bo mạch chủ máy tính lên các tấm pallet gỗ.",
    core_vocabulary: [{ word: "placement", type: "n.", meaning: "việc sắp đặt" }, { word: "pallet", type: "n.", meaning: "tấm pallet" }]
  },
  {
    id: "q0903",
    question: "The data analyst presented a clear ______ of the shipping cost trends using an advanced regression chart.",
    options: { A: "illustrate", B: "illustration", C: "illustrated", D: "illustrating" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'a clear + Noun'. 'Illustration' (sự minh họa/hình minh họa) là danh từ phù hợp.",
    explanation_grammar: "Noun as Object.",
    translation: "Nhà phân tích dữ liệu đã trình bày một bản minh họa rõ ràng về các xu hướng chi phí vận chuyển bằng một biểu đồ hồi quy tiên tiến.",
    core_vocabulary: [{ word: "illustration", type: "n.", meaning: "sự minh họa" }, { word: "regression chart", type: "n.", meaning: "biểu đồ hồi quy" }]
  },
  {
    id: "q0904",
    question: "Creating a detailed Work Breakdown Structure is a crucial ______ for managing complex logistics projects effectively.",
    options: { A: "require", B: "requiring", C: "requirement", D: "required" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chỗ trống cần một danh từ làm bổ ngữ sau động từ 'is'. 'Requirement' (yêu cầu) là danh từ.",
    explanation_grammar: "Noun as Complement.",
    translation: "Việc tạo ra một cấu trúc phân chia công việc chi tiết là một yêu cầu quan trọng để quản lý các dự án hậu cần phức tạp một cách hiệu quả.",
    core_vocabulary: [{ word: "requirement", type: "n.", meaning: "yêu cầu" }, { word: "work breakdown structure", type: "n.", meaning: "cấu trúc phân chia công việc" }]
  },
  {
    id: "q0905",
    question: "The project team relied on the PERT method for the accurate ______ of the total delivery time.",
    options: { A: "calculation", B: "calculating", C: "calculated", D: "calculate" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau mạo từ 'the' và tính từ 'accurate' cần một danh từ. 'Calculation' (sự tính toán) là danh từ.",
    explanation_grammar: "Noun as Object of Preposition.",
    translation: "Nhóm dự án đã dựa vào phương pháp PERT để tính toán chính xác tổng thời gian giao hàng.",
    core_vocabulary: [{ word: "calculation", type: "n.", meaning: "sự tính toán" }, { word: "accurate", type: "adj.", meaning: "chính xác" }]
  },
  {
    id: "q0906",
    question: "Electronic ______ through the VNACCS system has drastically reduced the wait times at the border checkpoints.",
    options: { A: "declare", B: "declaration", C: "declared", D: "declaring" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chỗ trống cần một danh từ đóng vai trò chủ ngữ. 'Declaration' (sự khai báo) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc khai báo điện tử thông qua hệ thống VNACCS đã làm giảm mạnh thời gian chờ đợi tại các trạm kiểm soát biên giới.",
    core_vocabulary: [{ word: "declaration", type: "n.", meaning: "sự khai báo" }, { word: "checkpoint", type: "n.", meaning: "trạm kiểm soát" }]
  },
  {
    id: "q0907",
    question: "The software applies the bisection method to ensure the ______ of the automated cargo weight calculations.",
    options: { A: "precision", B: "precise", C: "preciseness", D: "precisely" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'ensure the + Noun'. 'Precision' (độ chính xác) là danh từ chuyên dụng.",
    explanation_grammar: "Noun as Object.",
    translation: "Phần mềm áp dụng phương pháp chia đôi để đảm bảo độ chính xác của các tính toán trọng lượng hàng hóa tự động.",
    core_vocabulary: [{ word: "precision", type: "n.", meaning: "độ chính xác" }, { word: "calculation", type: "n.", meaning: "sự tính toán" }]
  },
  {
    id: "q0908",
    question: "Our new algorithm uses Newton interpolation to provide a reliable ______ of future warehouse storage needs.",
    options: { A: "prediction", B: "predict", C: "predicting", D: "predictive" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau cụm 'a reliable' cần một danh từ. 'Prediction' (sự dự báo) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Thuật toán mới của chúng tôi sử dụng phép nội suy Newton để đưa ra dự báo đáng tin cậy về nhu cầu lưu kho trong tương lai.",
    core_vocabulary: [{ word: "prediction", type: "n.", meaning: "sự dự báo" }, { word: "storage", type: "n.", meaning: "việc lưu kho" }]
  },
  {
    id: "q0909",
    question: "Balancing cost, schedule, and quality requires constant ______ from the entire supply chain management team.",
    options: { A: "supervision", B: "supervising", C: "supervise", D: "supervised" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Động từ 'require' cần tân ngữ danh từ. 'Supervision' (sự giám sát) là danh từ phù hợp.",
    explanation_grammar: "Noun as Object.",
    translation: "Cân bằng chi phí, tiến độ và chất lượng đòi hỏi sự giám sát liên tục từ toàn bộ nhóm quản lý chuỗi cung ứng.",
    core_vocabulary: [{ word: "supervision", type: "n.", meaning: "sự giám sát" }, { word: "constant", type: "adj.", meaning: "liên tục" }]
  },
  {
    id: "q0910",
    question: "The executive board approved the ______ of a new data analyst to optimize our international shipping routes.",
    options: { A: "recruitment", B: "recruit", C: "recruiting", D: "recruited" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một danh từ sau mạo từ 'the'. 'Recruitment' (việc tuyển dụng) là danh từ chỉ quá trình.",
    explanation_grammar: "Noun as Object.",
    translation: "Ban điều hành đã phê duyệt việc tuyển dụng một nhà phân tích dữ liệu mới để tối ưu hóa các tuyến vận chuyển quốc tế của chúng tôi.",
    core_vocabulary: [{ word: "recruitment", type: "n.", meaning: "việc tuyển dụng" }, { word: "optimize", type: "v.", meaning: "tối ưu hóa" }]
  },
  {
    id: "q0911",
    question: "Before finalizing the import schedule, the manager needs a written ______ from the overseas shipping partner.",
    options: { A: "confirm", B: "confirmation", C: "confirming", D: "confirmed" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'a written + Noun'. 'Confirmation' (sự xác nhận) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Trước khi hoàn tất lịch trình nhập khẩu, quản lý cần một bản xác nhận bằng văn bản từ đối tác vận chuyển nước ngoài.",
    core_vocabulary: [{ word: "confirmation", type: "n.", meaning: "sự xác nhận" }, { word: "shipping partner", type: "n.", meaning: "đối tác vận chuyển" }]
  },
  {
    id: "q0912",
    question: "Improper ______ of the electronic components using the wrong HS codes can result in severe customs penalties.",
    options: { A: "categorization", B: "categorize", C: "categorized", D: "categorizing" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chủ ngữ của câu cần một danh từ. 'Categorization' (sự phân loại/nhóm) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc phân loại không đúng các linh kiện điện tử bằng cách sử dụng sai mã HS có thể dẫn đến các khoản phạt hải quan nghiêm trọng.",
    core_vocabulary: [{ word: "categorization", type: "n.", meaning: "sự phân loại" }, { word: "penalty", type: "n.", meaning: "khoản phạt" }]
  },
  {
    id: "q0913",
    question: "The recent ______ in global fuel prices has directly impacted the company's quarterly transportation budget.",
    options: { A: "fluctuating", B: "fluctuated", C: "fluctuation", D: "fluctuate" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau tính từ 'recent' cần một danh từ làm chủ ngữ. 'Fluctuation' (sự biến động) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự biến động gần đây của giá nhiên liệu toàn cầu đã tác động trực tiếp đến ngân sách vận tải hàng quý của công ty.",
    core_vocabulary: [{ word: "fluctuation", type: "n.", meaning: "sự biến động" }, { word: "fuel price", type: "n.", meaning: "giá nhiên liệu" }]
  },
  {
    id: "q0914",
    question: "Advanced load optimization software guarantees the maximum ______ of every shipping container leaving the port.",
    options: { A: "utilizing", B: "utilization", C: "utilized", D: "utilize" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'the maximum + Noun'. 'Utilization' (sự tận dụng) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Phần mềm tối ưu hóa tải tải nâng cao đảm bảo việc tận dụng tối đa từng container vận chuyển rời cảng.",
    core_vocabulary: [{ word: "utilization", type: "n.", meaning: "sự tận dụng" }, { word: "guarantee", type: "v.", meaning: "đảm bảo" }]
  },
  {
    id: "q0915",
    question: "The Liberty Architecture Expo requires all vendors to submit their booth ______ by the end of October.",
    options: { A: "registering", B: "register", C: "registered", D: "registration" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một danh từ sau tính từ sở hữu 'their'. 'Registration' (sự đăng ký) là phù hợp.",
    explanation_grammar: "Noun as Object.",
    translation: "Triển lãm Kiến trúc Liberty yêu cầu tất cả các nhà cung cấp phải nộp đơn đăng ký gian hàng trước cuối tháng 10.",
    core_vocabulary: [{ word: "registration", type: "n.", meaning: "sự đăng ký" }, { word: "vendor", type: "n.", meaning: "nhà cung cấp" }]
  },
  {
    id: "q0916",
    question: "Maintaining a strong ______ with reliable international suppliers is essential for our manufacturing division's success.",
    options: { A: "partnership", B: "partnered", C: "partner", D: "partnering" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'a strong + Noun'. 'Partnership' (quan hệ đối tác) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Duy trì mối quan hệ đối tác vững chắc với các nhà cung cấp quốc tế đáng tin cậy là điều thiết yếu đối với thành công của bộ phận sản xuất của chúng tôi.",
    core_vocabulary: [{ word: "partnership", type: "n.", meaning: "quan hệ đối tác" }, { word: "essential", type: "adj.", meaning: "thiết yếu" }]
  },
  {
    id: "q0917",
    question: "The rapid ______ of the e-commerce sector has created new challenges for urban delivery logistics.",
    options: { A: "growing", B: "grow", C: "growth", D: "grew" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần danh từ làm chủ ngữ. 'Growth' (sự tăng trưởng) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự tăng trưởng nhanh chóng của ngành thương mại điện tử đã tạo ra những thách thức mới cho hậu cần giao hàng đô thị.",
    core_vocabulary: [{ word: "growth", type: "n.", meaning: "sự tăng trưởng" }, { word: "e-commerce", type: "n.", meaning: "thương mại điện tử" }]
  },
  {
    id: "q0918",
    question: "All warehouse employees must wear protective gear to ensure their ______ during the loading process.",
    options: { A: "safeties", B: "safely", C: "safe", D: "safety" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau tính từ sở hữu 'their' cần một danh từ. 'Safety' (sự an toàn) là danh từ không đếm được.",
    explanation_grammar: "Noun as Object.",
    translation: "Tất cả nhân viên kho phải mặc đồ bảo hộ để đảm bảo an toàn cho họ trong quá trình bốc xếp.",
    core_vocabulary: [{ word: "protective gear", type: "n.", meaning: "đồ bảo hộ" }, { word: "safety", type: "n.", meaning: "sự an toàn" }]
  },
  {
    id: "q0919",
    question: "The board of directors is reviewing a new ______ to expand our freight operations into Southeast Asia.",
    options: { A: "propose", B: "proposed", C: "proposing", D: "proposal" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'a new + Noun'. 'Proposal' (bản đề xuất) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Hội đồng quản trị đang xem xét một bản đề xuất mới nhằm mở rộng các hoạt động vận tải của chúng tôi sang Đông Nam Á.",
    core_vocabulary: [{ word: "proposal", type: "n.", meaning: "bản đề xuất" }, { word: "freight operations", type: "n.", meaning: "hoạt động vận tải" }]
  },
  {
    id: "q0920",
    question: "A sudden ______ in the supply chain caused a significant delay in the delivery of retail goods.",
    options: { A: "disrupted", B: "disrupt", C: "disruption", D: "disrupting" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần danh từ làm chủ ngữ. 'Disruption' (sự gián đoạn) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự gián đoạn bất ngờ trong chuỗi cung ứng đã gây ra một sự chậm trễ đáng kể trong việc giao các mặt hàng bán lẻ.",
    core_vocabulary: [{ word: "disruption", type: "n.", meaning: "sự gián đoạn" }, { word: "retail", type: "n.", meaning: "bán lẻ" }]
  },
  {
    id: "q0921",
    question: "The quality control team conducts a thorough ______ of all outgoing shipments to prevent customer complaints.",
    options: { A: "evaluation", B: "evaluate", C: "evaluating", D: "evaluated" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'a thorough + Noun'. 'Evaluation' (sự đánh giá) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Nhóm kiểm soát chất lượng thực hiện một cuộc đánh giá kỹ lưỡng tất cả các lô hàng xuất đi để ngăn ngừa khiếu nại của khách hàng.",
    core_vocabulary: [{ word: "evaluation", type: "n.", meaning: "sự đánh giá" }, { word: "out-going", type: "adj.", meaning: "xuất đi/xuất xưởng" }]
  },
  {
    id: "q0922",
    question: "Employees seeking a career transition should take advantage of the company's professional ______ programs.",
    options: { A: "develop", B: "development", C: "developing", D: "developed" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cụm danh từ 'professional development programs' (các chương trình phát triển chuyên môn).",
    explanation_grammar: "Noun in Compound Noun Phrase.",
    translation: "Các nhân viên tìm kiếm sự chuyển đổi nghề nghiệp nên tận dụng các chương trình phát triển chuyên môn của công ty.",
    core_vocabulary: [{ word: "professional development", type: "n.", meaning: "phát triển chuyên môn" }, { word: "take advantage of", type: "v.", meaning: "tận dụng" }]
  },
  {
    id: "q0923",
    question: "Strict ______ to international trade laws is closely monitored by the corporate legal department.",
    options: { A: "adhering", B: "adhere", C: "adhered", D: "adherence" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chủ ngữ của câu cần một danh từ. 'Adherence' (sự tuân thủ/bám sát) là danh từ thường đi với giới từ 'to'.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc tuân thủ nghiêm ngặt các quy định thương mại quốc tế được giám sát chặt chẽ bởi bộ phận pháp lý của công ty.",
    core_vocabulary: [{ word: "adherence", type: "n.", meaning: "sự tuân thủ" }, { word: "monitor", type: "v.", meaning: "giám sát" }]
  },
  {
    id: "q0924",
    question: "The finance department requested a detailed ______ of the quarterly expenses for the logistics project.",
    options: { A: "broke", B: "breaking", C: "breakdown", D: "break" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cụm 'a detailed + Noun'. 'Breakdown' (bản kê chi tiết/sự phân tích nhỏ) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Bộ phận tài chính đã yêu cầu một bản kê chi tiết các chi phí hàng quý cho dự án hậu cần.",
    core_vocabulary: [{ word: "breakdown", type: "n.", meaning: "bản kê chi tiết/bản phân tích" }, { word: "expense", type: "n.", meaning: "chi phí" }]
  },
  {
    id: "q0925",
    question: "Effective ______ of the customs documentation prevents unnecessary delays at the destination port.",
    options: { A: "management", B: "manage", C: "managing", D: "managed" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần danh từ làm chủ ngữ. 'Management' (việc quản lý) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc quản lý hiệu quả các chứng từ hải quan giúp ngăn chặn các sự chậm trễ không cần thiết tại cảng đích.",
    core_vocabulary: [{ word: "management", type: "n.", meaning: "việc quản lý" }, { word: "destination port", type: "n.", meaning: "cảng đích" }]
  }
];

let content = fs.readFileSync(targetFile, 'utf8');
const questionsData = eval(content.replace('window.questionsData =', ''));

const updatedQuestionsData = questionsData.concat(newQuestions);

fs.writeFileSync(targetFile, 'window.questionsData = ' + JSON.stringify(updatedQuestionsData, null, 2) + ';', 'utf8');
console.log('Successfully added 25 questions for Danh từ & Đại từ - Test 8!');
