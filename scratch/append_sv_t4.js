const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const newQuestions = [
  {
    id: "q0731",
    question: "The ______ delivered by CEO Julian Thorne was broadcast live to all regional offices of Zenith Group.",
    options: { A: "speechless", B: "speech", C: "spoken", D: "speak" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chỗ trống cần một danh từ để đóng vai trò làm chủ ngữ chính của câu (đứng trước cụm phân từ 'delivered by'). 'Speech' (bài phát biểu) là danh từ phù hợp.",
    explanation_grammar: "Noun as Subject.",
    translation: "Bài phát biểu của Giám đốc điều hành Julian Thorne đã được truyền hình trực tiếp đến tất cả các văn phòng khu vực của Tập đoàn Zenith.",
    core_vocabulary: [{ word: "broadcast live", type: "phr.", meaning: "truyền hình trực tiếp" }, { word: "regional office", type: "n.", meaning: "văn phòng khu vực" }]
  },
  {
    id: "q0732",
    question: "Mr. Henderson, who ______ a chief financial officer at a retail chain in the 1990s, now provides private consulting services.",
    options: { A: "been", B: "was", C: "were", D: "is" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Động từ to-be chia theo chủ ngữ 'Mr. Henderson' (số ít) và diễn tả nghề nghiệp trong quá khứ 'in the 1990s'.",
    explanation_grammar: "Subject-Verb Agreement in Relative Clause (Past).",
    translation: "Ông Henderson, người từng là giám đốc tài chính tại một chuỗi bán lẻ vào những năm 1990, hiện đang cung cấp các dịch vụ tư vấn tư nhân.",
    core_vocabulary: [{ word: "chief financial officer", type: "n.", meaning: "giám đốc tài chính" }, { word: "retail chain", type: "n.", meaning: "chuỗi bán lẻ" }]
  },
  {
    id: "q0733",
    question: "Anyone who ______ a yearly subscription to the Global Finance Journal this week receives a leather-bound planner.",
    options: { A: "purchasing", B: "purchaser", C: "purchases", D: "purchase" },
    correct_answer: "C",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Mệnh đề quan hệ bổ nghĩa cho 'Anyone' (đại từ bất định số ít), nên động từ chia số ít (thêm 's').",
    explanation_grammar: "Indefinite Pronoun Agreement.",
    translation: "Bất kỳ ai đăng ký thuê bao hàng năm của Tạp chí Tài chính Toàn cầu trong tuần này sẽ nhận được một cuốn sổ kế hoạch bọc da.",
    core_vocabulary: [{ word: "subscription", type: "n.", meaning: "thuê bao/sự đăng ký" }, { word: "leather-bound", type: "adj.", meaning: "bọc da" }]
  },
  {
    id: "q0734",
    question: "All operators who ______ the printing presses must check the ink levels before starting their shift.",
    options: { A: "use", B: "using", C: "to use", D: "uses" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Đại từ quan hệ 'who' thay thế cho 'All operators' (số nhiều), nên động từ trong mệnh đề quan hệ giữ nguyên mẫu.",
    explanation_grammar: "Plural Subject Agreement.",
    translation: "Tất cả các nhân viên vận hành máy in phải kiểm tra mức mực trước khi bắt đầu ca làm việc của mình.",
    core_vocabulary: [{ word: "operator", type: "n.", meaning: "người vận hành" }, { word: "printing press", type: "n.", meaning: "máy in (công nghiệp)" }]
  },
  {
    id: "q0735",
    question: "Green-Tech solutions thanks all researchers who ______ their findings at the Renewable Energy Summit in Oslo last month.",
    options: { A: "presenting", B: "present", C: "presents", D: "presented" },
    correct_answer: "D",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Dấu hiệu thời gian 'last month' yêu cầu động từ chia ở thì quá khứ đơn.",
    explanation_grammar: "Past Simple in Relative Clause.",
    translation: "Green-Tech Solutions cảm ơn tất cả các nhà nghiên cứu đã trình bày những phát hiện của họ tại Hội nghị Thượng đỉnh Năng lượng Tái tạo ở Oslo vào tháng trước.",
    core_vocabulary: [{ word: "finding", type: "n.", meaning: "phát hiện/kết quả nghiên cứu" }, { word: "renewable energy", type: "n.", meaning: "năng lượng tái tạo" }]
  },
  {
    id: "q0736",
    question: "The ______ suggested by the design consultant, Ms. Clara Vance, was adopted by the marketing team at Veridia Inc.",
    options: { A: "arranged", B: "arrange", C: "arranging", D: "arrangement" },
    correct_answer: "D",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chỗ trống cần một danh từ số ít làm chủ ngữ của động từ 'was'. 'Arrangement' (sự sắp xếp/bố trí) là danh từ phù hợp.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự sắp xếp được gợi ý bởi tư vấn thiết kế, bà Clara Vance, đã được đội ngũ marketing tại Veridia Inc áp dụng.",
    core_vocabulary: [{ word: "consultant", type: "n.", meaning: "tư vấn viên" }, { word: "adopt", type: "v.", meaning: "áp dụng/thông qua" }]
  },
  {
    id: "q0737",
    question: "Ms. Sato, who ______ a senior researcher at the Kyoto Biotech Lab three years ago, is now leading the department.",
    options: { A: "being", B: "was", C: "is", D: "were" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ 'Ms. Sato' số ít và mốc thời gian 'three years ago' yêu cầu to-be là 'was'.",
    explanation_grammar: "Past Simple Be-verb Agreement.",
    translation: "Bà Sato, người từng là nhà nghiên cứu cấp cao tại Phòng thí nghiệm Công nghệ sinh học Kyoto ba năm trước, hiện đang dẫn dắt bộ phận này.",
    core_vocabulary: [{ word: "senior researcher", type: "n.", meaning: "nhà nghiên cứu cấp cao" }, { word: "lead", type: "v.", meaning: "dẫn dắt/lãnh đạo" }]
  },
  {
    id: "q0738",
    question: "Any employee who ______ a formal complaint through the online portal will receive a response within 24 hours.",
    options: { A: "filer", B: "filing", C: "file", D: "files" },
    correct_answer: "D",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ 'Any employee' là danh từ số ít nên động từ chia số ít (files).",
    explanation_grammar: "Singular Subject Agreement (Present).",
    translation: "Bất kỳ nhân viên nào nộp đơn khiếu nại chính thức qua cổng thông tin trực tuyến sẽ nhận được phản hồi trong vòng 24 giờ.",
    core_vocabulary: [{ word: "formal complaint", type: "n.", meaning: "khiếu nại chính thức" }, { word: "within", type: "prep.", meaning: "trong vòng" }]
  },
  {
    id: "q0739",
    question: "All participants who ______ the advanced leadership seminar are required to submit a final project.",
    options: { A: "attend", B: "attending", C: "attends", D: "to attend" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ 'All participants' là số nhiều nên động từ 'attend' giữ nguyên mẫu.",
    explanation_grammar: "Plural Subject Agreement.",
    translation: "Tất cả những người tham gia hội thảo lãnh đạo nâng cao đều được yêu cầu nộp một dự án cuối khóa.",
    core_vocabulary: [{ word: "participant", type: "n.", meaning: "người tham gia" }, { word: "seminar", type: "n.", meaning: "hội thảo" }]
  },
  {
    id: "q0740",
    question: "Rapid Delivery Corp honors all couriers who ______ over 1,000 packages during the holiday rush last December.",
    options: { A: "delivers", B: "delivering", C: "deliver", D: "delivered" },
    correct_answer: "D",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Hành động diễn ra vào 'last December' (tháng 12 năm ngoái) nên chia thì quá khứ đơn.",
    explanation_grammar: "Past Simple in Relative Clause.",
    translation: "Tập đoàn Giao hàng Nhanh vinh danh tất cả các nhân viên giao hàng đã giao hơn 1.000 kiện hàng trong đợt cao điểm lễ hội tháng 12 năm ngoái.",
    core_vocabulary: [{ word: "courier", type: "n.", meaning: "nhân viên giao hàng" }, { word: "rush", type: "n.", meaning: "sự cao điểm/vội vã" }]
  },
  {
    id: "q0741",
    question: "The ______ provided by the legal advisor, Mr. Samuel Choi, was essential for the merger of Altius and NexGen.",
    options: { A: "advise", B: "advisable", C: "advising", D: "advice" },
    correct_answer: "D",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chỗ trống cần một danh từ làm chủ ngữ. 'Advice' (lời khuyên) là danh từ, phân biệt với 'advise' (v) khuyên bảo.",
    explanation_grammar: "Noun as Subject.",
    translation: "Lời khuyên được cung cấp bởi cố vấn pháp lý, ông Samuel Choi, là thiết yếu cho việc sáp nhập của Altius và NexGen.",
    core_vocabulary: [{ word: "legal advisor", type: "n.", meaning: "cố vấn pháp lý" }, { word: "merger", type: "n.", meaning: "sự sáp nhập" }]
  },
  {
    id: "q0742",
    question: "Mr. Rossi, who ______ a professional athlete in the 1980s, is now a frequent commentator for the National Sports Network.",
    options: { A: "is", B: "been", C: "was", D: "were" },
    correct_answer: "C",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Dấu hiệu 'in the 1980s' yêu cầu chia quá khứ đơn, chủ ngữ 'Mr. Rossi' số ít nên dùng 'was'.",
    explanation_grammar: "Past Simple Be-verb Agreement.",
    translation: "Ông Rossi, người từng là vận động viên chuyên nghiệp vào những năm 1980, hiện là bình luận viên thường xuyên của Mạng lưới Thể thao Quốc gia.",
    core_vocabulary: [{ word: "professional athlete", type: "n.", meaning: "vận động viên chuyên nghiệp" }, { word: "commentator", type: "n.", meaning: "bình luận viên" }]
  },
  {
    id: "q0743",
    question: "Every homeowner who ______ an energy-efficient heater from Solray Co. this winter is eligible for a tax credit.",
    options: { A: "buy", B: "buyer", C: "buys", D: "buying" },
    correct_answer: "C",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ chứa 'Every' luôn đi với danh từ số ít và động từ số ít.",
    explanation_grammar: "Agreement with 'Every'.",
    translation: "Mọi chủ nhà mua máy sưởi tiết kiệm năng lượng từ Công ty Solray trong mùa đông này đều đủ điều kiện được hoàn thuế.",
    core_vocabulary: [{ word: "energy-efficient", type: "adj.", meaning: "tiết kiệm năng lượng" }, { word: "tax credit", type: "n.", meaning: "tín dụng thuế (hoàn thuế)" }]
  },
  {
    id: "q0744",
    question: "All staff members who ______ confidential client data must follow the new security protocols.",
    options: { A: "accesses", B: "accessing", C: "access", D: "to access" },
    correct_answer: "C",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ số nhiều 'All staff members' yêu cầu động từ 'access' ở dạng nguyên mẫu.",
    explanation_grammar: "Plural Subject Agreement.",
    translation: "Tất cả nhân viên truy cập dữ liệu bảo mật của khách hàng phải tuân thủ các giao thức an ninh mới.",
    core_vocabulary: [{ word: "confidential", type: "adj.", meaning: "bảo mật/tin cậy" }, { word: "protocol", type: "n.", meaning: "giao thức/quy tắc" }]
  },
  {
    id: "q0745",
    question: "The City Council thanks all residents who ______ in the urban planning survey held last Tuesday.",
    options: { A: "participating", B: "participates", C: "participated", D: "participate" },
    correct_answer: "C",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Sự kiện đã diễn ra 'last Tuesday' nên chia động từ ở thì quá khứ đơn.",
    explanation_grammar: "Past Simple in Relative Clause.",
    translation: "Hội đồng thành phố cảm ơn tất cả cư dân đã tham gia cuộc khảo sát quy hoạch đô thị được tổ chức vào thứ Ba tuần trước.",
    core_vocabulary: [{ word: "urban planning", type: "n.", meaning: "quy hoạch đô thị" }, { word: "survey", type: "n.", meaning: "cuộc khảo sát" }]
  },
  {
    id: "q0746",
    question: "The ______ written by the lead engineer, Dr. Aris, was reviewed by the safety committee at Petro-Tech.",
    options: { A: "descriptive", B: "description", C: "describe", D: "describing" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chỗ trống cần một danh từ làm chủ ngữ. 'Description' (bản mô tả) là danh từ duy nhất.",
    explanation_grammar: "Noun as Subject.",
    translation: "Bản mô tả được viết bởi kỹ sư trưởng, Tiến sĩ Aris, đã được ủy ban an toàn tại Petro-Tech xem xét.",
    core_vocabulary: [{ word: "safety committee", type: "n.", meaning: "ủy ban an toàn" }, { word: "review", type: "v.", meaning: "xem xét/đánh giá" }]
  },
  {
    id: "q0747",
    question: "Ms. Gupta, who ______ the head of the human resources department in 2018, has moved to a new role in London.",
    options: { A: "was", B: "are", C: "were", D: "is" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Hành động diễn ra tại mốc thời gian xác định 'in 2018', chủ ngữ 'Ms. Gupta' số ít dùng 'was'.",
    explanation_grammar: "Past Simple Be-verb Agreement.",
    translation: "Bà Gupta, người từng là trưởng phòng nhân sự vào năm 2018, hiện đã chuyển sang một vai trò mới tại London.",
    core_vocabulary: [{ word: "human resources", type: "n.", meaning: "nhân sự" }, { word: "department", type: "n.", meaning: "phòng/ban" }]
  },
  {
    id: "q0748",
    question: "Anyone who ______ a tour of the historic Ergan Building must register at the front desk.",
    options: { A: "wanting", B: "wanted", C: "wants", D: "want" },
    correct_answer: "C",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ 'Anyone' số ít luôn đi kèm động từ chia số ít (wants).",
    explanation_grammar: "Indefinite Pronoun Agreement.",
    translation: "Bất kỳ ai muốn tham quan tòa nhà lịch sử Ergan đều phải đăng ký tại quầy lễ tân.",
    core_vocabulary: [{ word: "historic", type: "adj.", meaning: "có tính lịch sử" }, { word: "register", type: "v.", meaning: "đăng ký" }]
  },
  {
    id: "q0749",
    question: "All associates who ______ with international clients are expected to be fluent in at least two languages.",
    options: { A: "to communicate", B: "communicates", C: "communicating", D: "communicate" },
    correct_answer: "D",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ 'All associates' số nhiều nên động từ trong mệnh đề quan hệ giữ nguyên.",
    explanation_grammar: "Plural Subject Agreement.",
    translation: "Tất cả các cộng tác viên làm việc với khách hàng quốc tế đều được kỳ vọng sẽ thông thạo ít nhất hai ngôn ngữ.",
    core_vocabulary: [{ word: "fluent", type: "adj.", meaning: "thông thạo" }, { word: "communicate", type: "v.", meaning: "giao tiếp" }]
  },
  {
    id: "q0750",
    question: "Nova Pharma appreciates all technicians who ______ the laboratory equipment during the power outage last night.",
    options: { A: "monitored", B: "monitoring", C: "monitor", D: "monitors" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Cụm thời gian 'last night' yêu cầu động từ chia ở thì quá khứ đơn.",
    explanation_grammar: "Past Simple in Relative Clause.",
    translation: "Nova Pharma đánh giá cao tất cả các kỹ thuật viên đã giám sát thiết bị phòng thí nghiệm trong lúc mất điện đêm qua.",
    core_vocabulary: [{ word: "power outage", type: "n.", meaning: "sự mất điện" }, { word: "monitor", type: "v.", meaning: "giám sát/theo dõi" }]
  },
  {
    id: "q0751",
    question: "The ______ issued by the board of directors was sent to all employees of Silverline Ltd.",
    options: { A: "statement", B: "stating", C: "state", D: "stated" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chỗ trống cần một danh từ số ít làm chủ ngữ của 'was sent'. 'Statement' (bản thông báo/tuyên bố) là danh từ duy nhất.",
    explanation_grammar: "Noun as Subject.",
    translation: "Thông báo được phát đi từ hội đồng quản trị đã được gửi đến tất cả nhân viên của Silverline Ltd.",
    core_vocabulary: [{ word: "issue", type: "v.", meaning: "phát đi/ban hành" }, { word: "statement", type: "n.", meaning: "thông báo/tuyên bố" }]
  },
  {
    id: "q0752",
    question: "Mr. Wallace, who ______ a top-performing real estate agent last year, is opening his own firm in Seattle.",
    options: { A: "been", B: "was", C: "were", D: "is" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Dấu hiệu 'last year' yêu cầu chia to-be ở quá khứ dơn, chủ ngữ 'Mr. Wallace' số ít chọn 'was'.",
    explanation_grammar: "Past Simple Be-verb Agreement.",
    translation: "Ông Wallace, người từng là nhân viên môi giới bất động sản xuất sắc nhất năm ngoái, hiện đang mở công ty riêng tại Seattle.",
    core_vocabulary: [{ word: "real estate", type: "n.", meaning: "bất động sản" }, { word: "top-performing", type: "adj.", meaning: "có thành tích cao nhất" }]
  },
  {
    id: "q0753",
    question: "Any traveler who ______ a premium seat on North-Air flights receives complimentary lounge access.",
    options: { A: "book", B: "booker", C: "books", D: "booking" },
    correct_answer: "C",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Đại từ 'who' thay cho 'Any traveler' (số ít) nên động từ chia số ít (thêm 's').",
    explanation_grammar: "Subject-Verb Agreement in Relative Clause.",
    translation: "Bất kỳ du khách nào đặt ghế hạng sang trên chuyến bay của North-Air đều được hưởng dịch vụ phòng chờ miễn phí.",
    core_vocabulary: [{ word: "complimentary", type: "adj.", meaning: "miễn phí/được tặng" }, { word: "lounge", type: "n.", meaning: "phòng chờ" }]
  },
  {
    id: "q0754",
    question: "All mechanics who ______ the fleet of delivery trucks must record their work in the maintenance log.",
    options: { A: "inspect", B: "inspects", C: "inspecting", D: "to inspect" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ số nhiều 'All mechanics' yêu cầu động từ 'inspect' giữ nguyên.",
    explanation_grammar: "Plural Subject Agreement.",
    translation: "Tất cả các thợ máy kiểm tra đội xe tải giao hàng phải ghi lại công việc của mình vào nhật ký bảo trì.",
    core_vocabulary: [{ word: "mechanic", type: "n.", meaning: "thợ máy" }, { word: "maintenance log", type: "n.", meaning: "nhật ký bảo trì" }]
  },
  {
    id: "q0755",
    question: "The Museum of Art thanks all patrons who ______ original paintings to the gallery during the exhibition last week.",
    options: { A: "donating", B: "donated", C: "donate", D: "donates" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Sự kiện diễn ra 'last week' nên chia động từ ở thì quá khứ đơn.",
    explanation_grammar: "Past Simple in Relative Clause.",
    translation: "Bảo tàng Nghệ thuật cảm ơn tất cả các khách hàng quen đã quyên góp các bức tranh gốc cho phòng trưng bày trong buổi triển lãm tuần trước.",
    core_vocabulary: [{ word: "patron", type: "n.", meaning: "khách hàng quen/người bảo trợ" }, { word: "exhibition", type: "n.", meaning: "buổi triển lãm" }]
  }
];

let content = fs.readFileSync(targetFile, 'utf8');
const questionsData = eval(content.replace('window.questionsData =', ''));

const updatedQuestionsData = questionsData.concat(newQuestions);

fs.writeFileSync(targetFile, 'window.questionsData = ' + JSON.stringify(updatedQuestionsData, null, 2) + ';', 'utf8');
console.log('Successfully added 25 questions for Hoà hợp S-V - Test 4!');
