const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const newQuestions = [
  {
    id: "q0756",
    question: "The ______ provided by the consultant, Mr. Hiroshi, helped the board understand the market trends.",
    options: { A: "analyze", B: "analyzing", C: "analytical", D: "analysis" },
    correct_answer: "D",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chỗ trống cần một danh từ đóng vai trò chủ ngữ của câu (đứng trước cụm phân từ 'provided by'). 'Analysis' (sự phân tích) là danh từ phù hợp nhất.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự phân tích được cung cấp bởi tư vấn viên, ông Hiroshi, đã giúp hội đồng quản trị hiểu được các xu hướng thị trường.",
    core_vocabulary: [{ word: "consultant", type: "n.", meaning: "tư vấn viên" }, { word: "market trend", type: "n.", meaning: "xu hướng thị trường" }]
  },
  {
    id: "q0757",
    question: "Ms. Lawson, who ______ a prominent legal advisor in the early 2010s, now serves as a judge in the supreme court.",
    options: { A: "is", B: "were", C: "been", D: "was" },
    correct_answer: "D",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Động từ to-be chia theo chủ ngữ 'Ms. Lawson' (số ít) và diễn tả sự việc trong quá khứ 'in the early 2010s'.",
    explanation_grammar: "Subject-Verb Agreement in Relative Clause (Past).",
    translation: "Bà Lawson, người từng là một cố vấn pháp lý lỗi lạc vào đầu những năm 2010, hiện đang phục vụ với tư cách là thẩm phán tại tòa án tối cao.",
    core_vocabulary: [{ word: "prominent", type: "adj.", meaning: "lỗi lạc/nổi bật" }, { word: "supreme court", type: "n.", meaning: "tòa án tối cao" }]
  },
  {
    id: "q0758",
    question: "Anyone who ______ a subscription to our newsletter by this Friday will receive a 10% discount code.",
    options: { A: "signs", B: "signing", C: "signer", D: "sign" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ 'Anyone' là đại từ bất định số ít nên động từ chia số ít (signs).",
    explanation_grammar: "Indefinite Pronoun Agreement.",
    translation: "Bất kỳ ai đăng ký nhận bản tin của chúng tôi trước thứ Sáu này sẽ được nhận mã giảm giá 10%.",
    core_vocabulary: [{ word: "subscription", type: "n.", meaning: "sự đăng ký/thuê bao" }, { word: "discount code", type: "n.", meaning: "mã giảm giá" }]
  },
  {
    id: "q0759",
    question: "All employees who ______ laboratory chemicals must complete a specialized training course.",
    options: { A: "handling", B: "to handle", C: "handle", D: "handles" },
    correct_answer: "C",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Đại từ quan hệ 'who' thay thế cho 'All employees' (số nhiều) nên động từ giữ nguyên mẫu.",
    explanation_grammar: "Plural Subject Agreement.",
    translation: "Tất cả các nhân viên xử lý hóa chất phòng thí nghiệm phải hoàn thành một khóa đào tạo chuyên biệt.",
    core_vocabulary: [{ word: "chemical", type: "n.", meaning: "hóa chất" }, { word: "specialized", type: "adj.", meaning: "chuyên biệt/chuyên sâu" }]
  },
  {
    id: "q0760",
    question: "Global Logistics thanks all staff members who ______ the emergency shipment during the holiday season last year.",
    options: { A: "managed", B: "managing", C: "manages", D: "manage" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Dấu hiệu thời gian 'last year' yêu cầu động từ chia ở thì quá khứ đơn.",
    explanation_grammar: "Past Simple in Relative Clause.",
    translation: "Global Logistics cảm ơn tất cả các nhân viên đã quản lý lô hàng khẩn cấp trong kỳ nghỉ lễ năm ngoái.",
    core_vocabulary: [{ word: "emergency", type: "n.", meaning: "khẩn cấp" }, { word: "shipment", type: "n.", meaning: "lô hàng" }]
  },
  {
    id: "q0761",
    question: "The ______ suggested by the architect was approved by the planning committee of Arca Group.",
    options: { A: "modification", B: "modifying", C: "modify", D: "modified" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chỗ trống cần một danh từ số ít làm chủ ngữ của động từ 'was'. 'Modification' (sự sửa đổi) là danh từ duy nhất.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự sửa đổi được gợi ý bởi kiến trúc sư đã được hội đồng quy hoạch của Tập đoàn Arca thông qua.",
    core_vocabulary: [{ word: "architect", type: "n.", meaning: "kiến trúc sư" }, { word: "committee", type: "n.", meaning: "hội đồng/ủy ban" }]
  },
  {
    id: "q0762",
    question: "Mr. Benson, who ______ the lead developer for the app project two years ago, has been promoted to CTO.",
    options: { A: "being", B: "is", C: "were", D: "was" },
    correct_answer: "D",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ 'Mr. Benson' số ít và mốc thời gian 'two years ago' yêu cầu to-be là 'was'.",
    explanation_grammar: "Past Simple Be-verb Agreement.",
    translation: "Ông Benson, người từng là nhà phát triển chính cho dự án ứng dụng hai năm trước, đã được thăng chức lên Giám đốc Công nghệ (CTO).",
    core_vocabulary: [{ word: "lead developer", type: "n.", meaning: "nhà phát triển chính" }, { word: "promote", type: "v.", meaning: "thăng chức" }]
  },
  {
    id: "q0763",
    question: "Any visitor who ______ a temporary parking permit from the security desk must display it on their dashboard.",
    options: { A: "requests", B: "requesting", C: "request", D: "requester" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ 'Any visitor' là số ít nên động từ chia số ít (requests).",
    explanation_grammar: "Singular Subject Agreement (Present).",
    translation: "Bất kỳ khách thăm quan nào yêu cầu giấy phép đậu xe tạm thời từ bàn bảo vệ phải dán nó lên bảng điều khiển xe.",
    core_vocabulary: [{ word: "permit", type: "n.", meaning: "giấy phép" }, { word: "security desk", type: "n.", meaning: "bàn bảo vệ" }]
  },
  {
    id: "q0764",
    question: "All interns who ______ at the research center are entitled to a monthly stipend.",
    options: { A: "work", B: "works", C: "to work", D: "working" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ 'All interns' số nhiều nên động từ 'work' giữ nguyên mẫu.",
    explanation_grammar: "Plural Subject Agreement.",
    translation: "Tất cả các thực tập sinh làm việc tại trung tâm nghiên cứu đều có quyền nhận trợ cấp hàng tháng.",
    core_vocabulary: [{ word: "intern", type: "n.", meaning: "thực tập sinh" }, { word: "stipend", type: "n.", meaning: "trợ cấp/lương thực tập" }]
  },
  {
    id: "q0765",
    question: "Bright Media values all photographers who ______ the international film festival in Cannes last May.",
    options: { A: "covers", B: "cover", C: "covering", D: "covered" },
    correct_answer: "D",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Hành động diễn ra vào 'last May' (tháng 5 năm ngoái) chia thì quá khứ đơn.",
    explanation_grammar: "Past Simple in Relative Clause.",
    translation: "Bright Media đánh giá cao tất cả các nhiếp ảnh gia đã đưa tin về liên hoan phim quốc tế tại Cannes vào tháng 5 năm ngoái.",
    core_vocabulary: [{ word: "photographer", type: "n.", meaning: "nhiếp ảnh gia" }, { word: "international film festival", type: "n.", meaning: "liên hoan phim quốc tế" }]
  },
  {
    id: "q0766",
    question: "The ______ submitted by the marketing executive, Ms. Sofia, was selected for the national campaign.",
    options: { A: "proposal", B: "proposed", C: "proposing", D: "propose" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chỗ trống cần một danh từ số ít làm chủ ngữ. 'Proposal' (bản đề xuất) là danh từ phù hợp nhất.",
    explanation_grammar: "Noun as Subject.",
    translation: "Bản đề xuất được trình bởi chuyên viên marketing, cô Sofia, đã được chọn cho chiến dịch quốc gia.",
    core_vocabulary: [{ word: "executive", type: "n.", meaning: "chuyên viên/người điều hành" }, { word: "campaign", type: "n.", meaning: "chiến dịch" }]
  },
  {
    id: "q0767",
    question: "Mr. Clarke, who ______ a professional athlete in his youth, is now a fitness consultant for corporate clients.",
    options: { A: "was", B: "been", C: "is", D: "were" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Dấu hiệu 'in his youth' yêu cầu chi quá khứ đơn, chủ ngữ 'Mr. Clarke' số ít dùng 'was'.",
    explanation_grammar: "Past Simple Be-verb Agreement.",
    translation: "Ông Clarke, người từng là vận động viên chuyên nghiệp thời trẻ, hiện là tư vấn viên thể hình cho các khách hàng doanh nghiệp.",
    core_vocabulary: [{ word: "professional athlete", type: "n.", meaning: "vận động viên chuyên nghiệp" }, { word: "fitness consultant", type: "n.", meaning: "tư vấn viên thể hình" }]
  },
  {
    id: "q0768",
    question: "Every customer who ______ an extended warranty for their appliance receives a free maintenance kit.",
    options: { A: "purchaser", B: "purchasing", C: "purchases", D: "purchase" },
    correct_answer: "C",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ 'Every customer' (mỗi khách hàng) là số ít nên động từ chia số ít (purchases).",
    explanation_grammar: "Agreement with 'Every'.",
    translation: "Mỗi khách hàng mua gói bảo hành mở rộng cho thiết bị của mình sẽ nhận được một bộ dụng cụ bảo trì miễn phí.",
    core_vocabulary: [{ word: "warranty", type: "n.", meaning: "bảo hành" }, { word: "appliance", type: "n.", meaning: "thiết bị/đồ gia dụng" }]
  },
  {
    id: "q0769",
    question: "All supervisors who ______ the assembly line are responsible for maintaining quality standards.",
    options: { A: "oversee", B: "overseeing", C: "oversees", D: "to oversee" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ số nhiều 'All supervisors' yêu cầu động từ 'oversee' ở dạng nguyên mẫu.",
    explanation_grammar: "Plural Subject Agreement.",
    translation: "Tất cả các giám sát viên giám sát dây chuyền lắp ráp đều có trách nhiệm duy trì các tiêu chuẩn chất lượng.",
    core_vocabulary: [{ word: "oversee", type: "v.", meaning: "giám sát" }, { word: "assembly line", type: "n.", meaning: "dây chuyền lắp ráp" }]
  },
  {
    id: "q0770",
    question: "Tech Solutions appreciates all volunteers who ______ the coding workshop for local students last weekend.",
    options: { A: "organize", B: "organizes", C: "organized", D: "organizing" },
    correct_answer: "C",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Mốc thời gian 'last weekend' yêu cầu động từ chia ở thì quá khứ đơn.",
    explanation_grammar: "Past Simple in Relative Clause.",
    translation: "Tech Solutions đánh giá cao tất cả các tình nguyện viên đã tổ chức buổi hội thảo lập trình cho học sinh địa phương vào cuối tuần trước.",
    core_vocabulary: [{ word: "coding workshop", type: "n.", meaning: "hội thảo lập trình" }, { word: "local student", type: "n.", meaning: "học sinh địa phương" }]
  },
  {
    id: "q0771",
    question: "The ______ requested by the department head must be implemented before the next audit.",
    options: { A: "adjust", B: "adjusted", C: "adjusting", D: "adjustment" },
    correct_answer: "D",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chỗ trống cần một danh từ làm chủ ngữ. 'Adjustment' (sự điều chỉnh) là danh từ phù hợp.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự điều chỉnh được yêu cầu bởi trưởng bộ phận phải được triển khai trước kỳ kiểm toán tiếp theo.",
    core_vocabulary: [{ word: "audit", type: "n.", meaning: "kiểm toán" }, { word: "implement", type: "v.", meaning: "triển khai/thực hiện" }]
  },
  {
    id: "q0772",
    question: "Ms. Park, who ______ the regional manager for Asia in 2019, is now based in our New York office.",
    options: { A: "is", B: "was", C: "were", D: "are" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Hành động diễn ra tại mốc thời gian xác định 'in 2019', chủ ngữ 'Ms. Park' số ít dùng 'was'.",
    explanation_grammar: "Past Simple Be-verb Agreement.",
    translation: "Bà Park, người từng là quản lý khu vực châu Á vào năm 2019, hiện đang làm việc tại văn phòng New York của chúng tôi.",
    core_vocabulary: [{ word: "regional manager", type: "n.", meaning: "quản lý khu vực" }, { word: "based in", type: "phr.", meaning: "trụ sở tại/làm việc tại" }]
  },
  {
    id: "q0773",
    question: "Anyone who ______ a preference for vegetarian meals should inform the event coordinator.",
    options: { A: "expression", B: "expresses", C: "express", D: "expressing" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ 'Anyone' số ít luôn đi kèm động từ chia số ít (expresses).",
    explanation_grammar: "Indefinite Pronoun Agreement.",
    translation: "Bất kỳ ai muốn dùng bữa chay nên thông báo cho điều phối viên sự kiện.",
    core_vocabulary: [{ word: "vegetarian meal", type: "n.", meaning: "bữa ăn chay" }, { word: "coordinator", type: "n.", meaning: "điều phối viên" }]
  },
  {
    id: "q0774",
    question: "All engineers who ______ the new software system are required to attend a briefing tomorrow.",
    options: { A: "to use", B: "use", C: "uses", D: "using" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ số nhiều 'All engineers' yêu cầu động từ 'use' ở dạng nguyên mẫu.",
    explanation_grammar: "Plural Subject Agreement.",
    translation: "Tất cả các kỹ sư sử dụng hệ thống phần mềm mới đều được yêu cầu tham dự một buổi hướng dẫn vào ngày mai.",
    core_vocabulary: [{ word: "briefing", type: "n.", meaning: "buổi hướng dẫn/bản tóm tắt" }, { word: "software system", type: "n.", meaning: "hệ thống phần mềm" }]
  },
  {
    id: "q0775",
    question: "Delta Airlines honors all pilots who ______ flights during the severe weather conditions last week.",
    options: { A: "operates", B: "operate", C: "operating", D: "operated" },
    correct_answer: "D",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Cụm thời gian 'last week' yêu cầu động từ chia ở thì quá khứ đơn.",
    explanation_grammar: "Past Simple in Relative Clause.",
    translation: "Delta Airlines vinh danh tất cả các phi công đã điều hành các chuyến bay trong điều kiện thời tiết khắc nghiệt tuần trước.",
    core_vocabulary: [{ word: "severe weather", type: "n.", meaning: "thời tiết khắc nghiệt" }, { word: "pilot", type: "n.", meaning: "phi công" }]
  },
  {
    id: "q0776",
    question: "The ______ prepared by the financial team was distributed to the investors of SolarX.",
    options: { A: "reportedly", B: "reporting", C: "reportable", D: "report" },
    correct_answer: "D",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chỗ trống cần một danh từ số ít làm chủ ngữ của 'was distributed'. 'Report' (bản báo cáo) là danh từ duy nhất.",
    explanation_grammar: "Noun as Subject.",
    translation: "Bản báo cáo được chuẩn bị bởi nhóm tài chính đã được gửi đến các nhà đầu tư của SolarX.",
    core_vocabulary: [{ word: "investor", type: "n.", meaning: "nhà đầu tư" }, { word: "distribute", type: "v.", meaning: "phân phối/gửi đi" }]
  },
  {
    id: "q0777",
    question: "Mr. Wright, who ______ the top salesperson in the company last year, has won the 'Employee of the Year' award.",
    options: { A: "was", B: "is", C: "were", D: "been" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Dấu hiệu 'last year' yêu cầu chia to-be ở quá khứ dơn, chủ ngữ 'Mr. Wright' số ít chọn 'was'.",
    explanation_grammar: "Past Simple Be-verb Agreement.",
    translation: "Ông Wright, người từng là nhân viên bán hàng xuất sắc nhất công ty năm ngoái, đã giành được giải thưởng 'Nhân viên của năm'.",
    core_vocabulary: [{ word: "top salesperson", type: "n.", meaning: "nhân viên bán hàng xuất sắc nhất" }, { word: "award", type: "n.", meaning: "giải thưởng" }]
  },
  {
    id: "q0778",
    question: "Any applicant who ______ an interview with the hiring manager will be notified of the result by email.",
    options: { A: "completer", B: "completing", C: "complete", D: "completes" },
    correct_answer: "D",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Đại từ 'who' thay cho 'Any applicant' (số ít) nên động từ chia số ít (completes).",
    explanation_grammar: "Subject-Verb Agreement in Relative Clause.",
    translation: "Bất kỳ ứng viên nào hoàn thành cuộc phỏng vấn với quản lý tuyển dụng sẽ được thông báo kết quả qua email.",
    core_vocabulary: [{ word: "applicant", type: "n.", meaning: "ứng viên" }, { word: "hiring manager", type: "n.", meaning: "quản lý tuyển dụng" }]
  },
  {
    id: "q0779",
    question: "All managers who ______ the annual budget must ensure all expenses are properly documented.",
    options: { A: "approve", B: "approves", C: "to approve", D: "approving" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ số nhiều 'All managers' yêu cầu động từ 'approve' giữ nguyên.",
    explanation_grammar: "Plural Subject Agreement.",
    translation: "Tất cả các quản lý phê duyệt ngân sách hàng năm phải đảm bảo mọi chi phí đều được ghi chép đầy đủ.",
    core_vocabulary: [{ word: "approve", type: "v.", meaning: "phê duyệt" }, { word: "expense", type: "n.", meaning: "chi phí" }]
  },
  {
    id: "q0780",
    question: "Blue Ocean Corp thanks all employees who ______ in the charity run organized by the city last Saturday.",
    options: { A: "participated", B: "participate", C: "participates", D: "participating" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Sự kiện diễn ra 'last Saturday' nên chia động từ ở thì quá khứ đơn.",
    explanation_grammar: "Past Simple in Relative Clause.",
    translation: "Tập đoàn Blue Ocean cảm ơn tất cả các nhân viên đã tham gia cuộc chạy bộ từ thiện do thành phố tổ chức vào thứ Bảy tuần trước.",
    core_vocabulary: [{ word: "charity run", type: "n.", meaning: "cuộc chạy bộ từ thiện" }, { word: "participate", type: "v.", meaning: "tham gia" }]
  }
];

let content = fs.readFileSync(targetFile, 'utf8');
const questionsData = eval(content.replace('window.questionsData =', ''));

const updatedQuestionsData = questionsData.concat(newQuestions);

fs.writeFileSync(targetFile, 'window.questionsData = ' + JSON.stringify(updatedQuestionsData, null, 2) + ';', 'utf8');
console.log('Successfully added 25 questions for Hoà hợp S-V - Test 5!');
