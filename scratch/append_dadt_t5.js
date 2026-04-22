const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const newQuestions = [
  {
    id: "q0826",
    question: "Routine ______ of the warehouse forklifts is scheduled for the last Friday of every month.",
    options: { A: "maintenance", B: "maintain", C: "maintained", D: "maintaining" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chỗ trống cần một danh từ đóng vai trò chủ ngữ của câu. 'Maintenance' (sự bảo trì) là danh từ phù hợp.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc bảo trì định kỳ các xe nâng trong kho được lên lịch vào ngày thứ Sáu cuối cùng của mỗi tháng.",
    core_vocabulary: [{ word: "routine", type: "adj.", meaning: "định kỳ/thường xuyên" }, { word: "maintenance", type: "n.", meaning: "sự bảo trì" }]
  },
  {
    id: "q0827",
    question: "The proposed budget for the new marketing campaign requires final ______ from the board of directors.",
    options: { A: "approval", B: "approve", C: "approving", D: "approved" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một danh từ sau tính từ 'final'. 'Approval' (sự phê duyệt) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Ngân sách đề xuất cho chiến dịch marketing mới yêu cầu sự phê duyệt cuối cùng từ hội đồng quản trị.",
    core_vocabulary: [{ word: "proposed budget", type: "n.", meaning: "ngân sách đề xuất" }, { word: "approval", type: "n.", meaning: "sự phê duyệt" }]
  },
  {
    id: "q0828",
    question: "After weeks of intense ______, both companies finally agreed on the terms of the merger.",
    options: { A: "negotiated", B: "negotiate", C: "negotiator", D: "negotiation" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau giới từ 'of' và tính từ 'intense' cần một danh từ. 'Negotiation' (sự đàm phán) là danh từ chỉ quá trình.",
    explanation_grammar: "Noun after Preposition.",
    translation: "Sau nhiều tuần đàm phán căng thẳng, cả hai công ty cuối cùng đã đồng ý với các điều khoản của vụ sáp nhập.",
    core_vocabulary: [{ word: "intense", type: "adj.", meaning: "căng thẳng/dữ dội" }, { word: "negotiation", type: "n.", meaning: "sự đàm phán" }]
  },
  {
    id: "q0829",
    question: "A detailed ______ of customer feedback helped the design team improve the new mobile application.",
    options: { A: "analyst", B: "analyzed", C: "analysis", D: "analyze" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cụm 'A detailed + Noun' làm chủ ngữ. 'Analysis' (sự phân tích) là danh từ phù hợp.",
    explanation_grammar: "Noun as Subject.",
    translation: "Một bản phân tích chi tiết về phản hồi của khách hàng đã giúp đội ngũ thiết kế cải thiện ứng dụng di động mới.",
    core_vocabulary: [{ word: "detailed", type: "adj.", meaning: "chi tiết" }, { word: "analysis", type: "n.", meaning: "sự phân tích" }]
  },
  {
    id: "q0830",
    question: "Employee ______ at the annual safety training workshop is mandatory for all factory personnel.",
    options: { A: "attendance", B: "attendant", C: "attended", D: "attend" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chỗ trống cần một danh từ ghép với 'Employee' để làm chủ ngữ. 'Attendance' (sự có mặt/tham dự) là phù hợp.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc tham dự của nhân viên tại buổi hội thảo đào tạo an toàn hàng năm là bắt buộc đối với tất cả nhân sự nhà máy.",
    core_vocabulary: [{ word: "mandatory", type: "adj.", meaning: "bắt buộc" }, { word: "attendance", type: "n.", meaning: "sự có mặt" }]
  },
  {
    id: "q0831",
    question: "Strict ______ with international shipping regulations is required to avoid delays at customs checkpoints.",
    options: { A: "complied", B: "compliance", C: "comply", D: "compliant" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cụm 'Strict + Noun'. 'Compliance' (sự tuân thủ) là danh từ thường đi với giới từ 'with'.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự tuân thủ nghiêm ngặt các quy định vận chuyển quốc tế là yêu cầu bắt buộc để tránh sự chậm trễ tại các trạm kiểm soát hải quan.",
    core_vocabulary: [{ word: "compliance", type: "n.", meaning: "sự tuân thủ" }, { word: "regulation", type: "n.", meaning: "quy định" }]
  },
  {
    id: "q0832",
    question: "The recent ______ of our distribution network has significantly increased our market share in Asia.",
    options: { A: "expanded", B: "expand", C: "expansive", D: "expansion" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau tính từ 'recent' cần một danh từ. 'Expansion' (sự mở rộng) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự mở rộng mạng lưới phân phối gần đây của chúng tôi đã làm tăng đáng kể thị phần tại châu Á.",
    core_vocabulary: [{ word: "expansion", type: "n.", meaning: "sự mở rộng" }, { word: "market share", type: "n.", meaning: "thị phần" }]
  },
  {
    id: "q0833",
    question: "The CEO expressed her gratitude for the team's outstanding ______ to the project's overall success.",
    options: { A: "contribution", B: "contributed", C: "contribute", D: "contributor" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một danh từ sau tính từ 'outstanding'. 'Contribution' (sự đóng góp) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Giám đốc điều hành đã bày tỏ lòng biết ơn đối với sự đóng góp xuất sắc của nhóm cho thành công chung của dự án.",
    core_vocabulary: [{ word: "gratitude", type: "n.", meaning: "lòng biết ơn" }, { word: "outstanding", type: "adj.", meaning: "xuất sắc" }]
  },
  {
    id: "q0834",
    question: "A substantial ______ in renewable energy sources is part of the company's long-term sustainability plan.",
    options: { A: "invested", B: "investor", C: "invest", D: "investment" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'a substantial + Noun'. 'Investment' (khoản đầu tư) là danh từ phù hợp.",
    explanation_grammar: "Noun as Subject.",
    translation: "Một khoản đầu tư đáng kể vào các nguồn năng lượng tái tạo là một phần của kế hoạch phát thải bền vững dài hạn của công ty.",
    core_vocabulary: [{ word: "substantial", type: "adj.", meaning: "đáng kể" }, { word: "investment", type: "n.", meaning: "khoản đầu tư" }]
  },
  {
    id: "q0835",
    question: "Please ensure your ______ is on all three copies of the commercial lease agreement.",
    options: { A: "signed", B: "sign", C: "signature", D: "signing" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau tính từ sở hữu 'your' cần một danh từ. 'Signature' (chữ ký) là danh từ.",
    explanation_grammar: "Noun as Subject of 'is'.",
    translation: "Vui lòng đảm bảo chữ ký của bạn có trên cả ba bản sao của hợp đồng thuê thương mại.",
    core_vocabulary: [{ word: "signature", type: "n.", meaning: "chữ ký" }, { word: "commercial lease", type: "n.", meaning: "thuê thương mại" }]
  },
  {
    id: "q0836",
    question: "The corporate ______ to the new downtown facility will take place over the upcoming weekend.",
    options: { A: "relocate", B: "relocated", C: "relocation", D: "relocating" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau 'The corporate' cần một danh từ làm chủ ngữ. 'Relocation' (sự di dời) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự di dời của tập đoàn đến cơ sở mới ở trung tâm thành phố sẽ diễn ra vào cuối tuần tới.",
    core_vocabulary: [{ word: "relocation", type: "n.", meaning: "sự di dời" }, { word: "facility", type: "n.", meaning: "cơ sở" }]
  },
  {
    id: "q0837",
    question: "According to the survey, consumer ______ is shifting towards eco-friendly packaging materials.",
    options: { A: "preferable", B: "preference", C: "preferred", D: "prefer" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một danh từ sau 'consumer'. 'Preference' (sự ưu tiên/sở thích) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Theo cuộc khảo sát, sở thích của người tiêu dùng đang chuyển dịch sang các vật liệu đóng gói thân thiện với môi trường.",
    core_vocabulary: [{ word: "preference", type: "n.", meaning: "sở thích/sự đặc biệt yêu thích" }, { word: "eco-friendly", type: "adj.", meaning: "thân thiện với môi trường" }]
  },
  {
    id: "q0838",
    question: "Early ______ for the Global Logistics Summit guarantees a discounted rate on accommodation.",
    options: { A: "register", B: "registration", C: "registering", D: "registered" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần danh từ làm chủ ngữ. 'Registration' (sự đăng ký) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc đăng ký sớm cho Hội nghị Thượng đỉnh Logistics Toàn cầu đảm bảo mức phí ưu đãi cho chỗ ở.",
    core_vocabulary: [{ word: "registration", type: "n.", meaning: "sự đăng ký" }, { word: "guarantee", type: "v.", meaning: "đảm bảo" }]
  },
  {
    id: "q0839",
    question: "Your annual ______ to the industry newsletter will automatically renew at the end of December.",
    options: { A: "subscribe", B: "subscription", C: "subscriber", D: "subscribed" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau tính từ sở hữu 'Your' cần một danh từ. 'Subscription' (thuê bao/sự đăng ký) là danh từ chỉ vật.",
    explanation_grammar: "Noun as Subject.",
    translation: "Thuê bao hàng năm của bạn cho bản tin ngành sẽ tự động gia hạn vào cuối tháng 12.",
    core_vocabulary: [{ word: "subscription", type: "n.", meaning: "thuê bao/việc đăng ký" }, { word: "renew", type: "v.", meaning: "gia hạn" }]
  },
  {
    id: "q0840",
    question: "The travel coordinator has confirmed the ______ for the executive team's upcoming flight to Tokyo.",
    options: { A: "reservation", B: "reserving", C: "reserved", D: "reserve" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau mạo từ 'the' cần một danh từ. 'Reservation' (sự đặt chỗ) là danh từ phù hợp nhất.",
    explanation_grammar: "Noun as Object.",
    translation: "Điều phối viên du lịch đã xác nhận việc đặt chỗ cho chuyến bay sắp tới của đội ngũ điều hành đến Tokyo.",
    core_vocabulary: [{ word: "reservation", type: "n.", meaning: "sự đặt chỗ" }, { word: "executive team", type: "n.", meaning: "đội ngũ điều hành" }]
  },
  {
    id: "q0841",
    question: "An independent ______ of the factory's environmental impact was conducted by a specialized consulting firm.",
    options: { A: "assessing", B: "assessment", C: "assess", D: "assessed" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần danh từ làm chủ ngữ. 'Assessment' (sự đánh giá) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Một bản đánh giá độc lập về tác động môi trường của nhà máy đã được thực hiện bởi một công ty tư vấn chuyên môn.",
    core_vocabulary: [{ word: "assessment", type: "n.", meaning: "sự đánh giá" }, { word: "impact", type: "n.", meaning: "tác động" }]
  },
  {
    id: "q0842",
    question: "The IT department provides immediate ______ to employees experiencing technical difficulties with the new software.",
    options: { A: "assistance", B: "assistant", C: "assisted", D: "assist" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau tính từ 'immediate' cần một danh từ. 'Assistance' (sự hỗ trợ) là danh từ trừu tượng phù hợp.",
    explanation_grammar: "Noun as Object.",
    translation: "Bộ phận CNTT cung cấp sự hỗ trợ ngay lập tức cho các nhân viên gặp khó khăn kỹ thuật với phần mềm mới.",
    core_vocabulary: [{ word: "assistance", type: "n.", meaning: "sự hỗ trợ" }, { word: "technical difficulty", type: "n.", meaning: "khó khăn kỹ thuật" }]
  },
  {
    id: "q0843",
    question: "Upon receiving ______ of your payment, we will immediately dispatch the goods from our warehouse.",
    options: { A: "confirm", B: "confirming", C: "confirmation", D: "confirmed" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau 'receiving' (động từ dạng V-ing) cần một danh từ đóng vai trò tân ngữ. 'Confirmation' (sự xác nhận) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Sau khi nhận được sự xác nhận thanh toán của bạn, chúng tôi sẽ ngay lập tức gửi hàng từ kho của mình.",
    core_vocabulary: [{ word: "confirmation", type: "n.", meaning: "sự xác nhận" }, { word: "dispatch", type: "v.", meaning: "gửi đi/phái đi" }]
  },
  {
    id: "q0844",
    question: "The successful ______ of the new inventory management system has reduced stock discrepancies by twenty percent.",
    options: { A: "implement", B: "implemented", C: "implementing", D: "implementation" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần danh từ làm chủ ngữ. 'Implementation' (sự triển khai) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự triển khai thành công hệ thống quản lý kho mới đã làm giảm sự chênh lệch hàng tồn kho xuống 20%.",
    core_vocabulary: [{ word: "implementation", type: "n.", meaning: "sự triển khai" }, { word: "discrepancy", type: "n.", meaning: "sự khác biệt/chênh lệch" }]
  },
  {
    id: "q0845",
    question: "Customers will receive a text message ______ as soon as their package is ready for pickup.",
    options: { A: "notification", B: "notifying", C: "notify", D: "notified" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cụm danh từ 'text message notification' (thông báo tin nhắn văn bản). 'Notification' là danh từ.",
    explanation_grammar: "Noun in Compound Noun.",
    translation: "Khách hàng sẽ nhận được một thông báo qua tin nhắn văn bản ngay khi kiện hàng của họ đã sẵn sàng để lấy.",
    core_vocabulary: [{ word: "notification", type: "n.", meaning: "thông báo" }, { word: "pickup", type: "n.", meaning: "việc lấy hàng" }]
  },
  {
    id: "q0846",
    question: "The logistics manager proposed a new strategy aimed at a significant ______ in transportation costs.",
    options: { A: "reducing", B: "reduce", C: "reduced", D: "reduction" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau mạo từ 'a' và tính từ 'significant' cần một danh từ. 'Reduction' (sự sụt giảm) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Quản lý hậu cần đã đề xuất một chiến lược mới nhằm giảm đáng kể chi phí vận chuyển.",
    core_vocabulary: [{ word: "reduction", type: "n.", meaning: "sự sụt giảm/cắt giảm" }, { word: "strategy", type: "n.", meaning: "chiến lược" }]
  },
  {
    id: "q0847",
    question: "Fluency in at least two foreign languages is a strict ______ for this international sales position.",
    options: { A: "requirement", B: "require", C: "requiring", D: "required" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau 'a strict' cần một danh từ làm bổ ngữ. 'Requirement' (yêu cầu) là danh từ.",
    explanation_grammar: "Noun as Complement.",
    translation: "Thông thạo ít nhất hai ngoại ngữ là một yêu cầu nghiêm ngặt đối với vị trí bán hàng quốc tế này.",
    core_vocabulary: [{ word: "fluency", type: "n.", meaning: "sự thông thạo" }, { word: "requirement", type: "n.", meaning: "yêu cầu" }]
  },
  {
    id: "q0848",
    question: "If your equipment malfunctions within the warranty period, we will provide a free ______ immediately.",
    options: { A: "replacement", B: "replace", C: "replaced", D: "replacing" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau 'a free' cần một danh từ. 'Replacement' (sự thay thế/đồ thay thế) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Nếu thiết bị của bạn bị lỗi trong thời gian bảo hành, chúng tôi sẽ cung cấp một bản thay thế miễn phí ngay lập tức.",
    core_vocabulary: [{ word: "malfunction", type: "v.", meaning: "bị lỗi/trục trặc" }, { word: "replacement", type: "n.", meaning: "sự thay thế" }]
  },
  {
    id: "q0849",
    question: "The automatic ______ of the software license ensures uninterrupted access to our cloud storage services.",
    options: { A: "renewing", B: "renew", C: "renewal", D: "renewed" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau 'The automatic' cần một danh từ làm chủ ngữ. 'Renewal' (sự gia hạn) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc tự động gia hạn bản quyền phần mềm đảm bảo việc truy cập không gián đoạn vào các dịch vụ lưu trữ đám mây của chúng tôi.",
    core_vocabulary: [{ word: "renewal", type: "n.", meaning: "sự gia hạn" }, { word: "uninterrupted", type: "adj.", meaning: "không bị gián đoạn" }]
  },
  {
    id: "q0850",
    question: "Only personnel with high-level security ______ are permitted to enter the data processing center.",
    options: { A: "authorization", B: "authorized", C: "authorize", D: "authorizing" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau cụm 'high-level security' cần một danh từ bổ nghĩa. 'Authorization' (sự cấp phép/quyền hạn) là danh từ.",
    explanation_grammar: "Noun as Head of Noun Phrase.",
    translation: "Chỉ nhân sự có quyền hạn bảo mật cấp cao mới được phép vào trung tâm xử lý dữ liệu.",
    core_vocabulary: [{ word: "personnel", type: "n.", meaning: "nhân sự" }, { word: "authorization", type: "n.", meaning: "sự cấp phép/quyền hạn" }]
  }
];

let content = fs.readFileSync(targetFile, 'utf8');
const questionsData = eval(content.replace('window.questionsData =', ''));

const updatedQuestionsData = questionsData.concat(newQuestions);

fs.writeFileSync(targetFile, 'window.questionsData = ' + JSON.stringify(updatedQuestionsData, null, 2) + ';', 'utf8');
console.log('Successfully added 25 questions for Danh từ & Đại từ - Test 5!');
