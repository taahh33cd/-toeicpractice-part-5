const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const newQuestions = [
  {
    id: "q0561",
    question: "Before starting a business, entrepreneurs should ______ every aspect of their chosen industry.",
    options: { A: "understand", B: "to understand", C: "understanding", D: "are understood" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Sau động từ khuyết thiếu 'should' là động từ nguyên mẫu không 'to'.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Trước khi bắt đầu kinh doanh, các doanh nhân nên hiểu mọi khía cạnh của ngành công nghiệp mà họ đã chọn.",
    core_vocabulary: [{ word: "entrepreneur", type: "n.", meaning: "doanh nhân" }, { word: "aspect", type: "n.", meaning: "khía cạnh" }]
  },
  {
    id: "q0562",
    question: "Please ______ your Konel Travel agent of any special requests before booking your reservation.",
    options: { A: "inform", B: "informing", C: "informs", D: "informed" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Đây là câu mệnh lệnh bắt đầu bằng 'Please', yêu cầu động từ nguyên mẫu.",
    explanation_grammar: "Imperative sentence.",
    translation: "Vui lòng thông báo cho đại lý du lịch Konel của bạn về bất kỳ yêu cầu đặc biệt nào trước khi đặt chỗ.",
    core_vocabulary: [{ word: "inform", type: "v.", meaning: "thông báo" }, { word: "reservation", type: "n.", meaning: "sự đặt chỗ" }]
  },
  {
    id: "q0563",
    question: "All cargo is securely ______ before the carrier leaves the loading dock.",
    options: { A: "fasten", B: "fastened", C: "fastening", D: "fastens" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động (is + V3/ed) mô tả trạng thái của hàng hóa.",
    explanation_grammar: "Passive voice (Present Simple).",
    translation: "Tất cả hàng hóa được buộc chặt an toàn trước khi phương tiện vận chuyển rời khỏi bến bốc hàng.",
    core_vocabulary: [{ word: "cargo", type: "n.", meaning: "hàng hóa" }, { word: "fasten", type: "v.", meaning: "buộc chặt/thắt chặt" }]
  },
  {
    id: "q0564",
    question: "The magazine's readership ______ almost 20 percent in three months.",
    options: { A: "rising", B: "has risen", C: "to rise", D: "rise" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Diễn tả một sự thay đổi/kết quả kéo dài đến hiện tại.",
    explanation_grammar: "Present Perfect.",
    translation: "Số lượng độc giả của tạp chí đã tăng gần 20% trong vòng ba tháng.",
    core_vocabulary: [{ word: "readership", type: "n.", meaning: "lượng độc giả" }, { word: "rise", type: "v.", meaning: "tăng lên" }]
  },
  {
    id: "q0565",
    question: "Ms. Rodriguez will speak about a banking conference she ______ in Lisbon last month.",
    options: { A: "attend", B: "attended", C: "will attend", D: "attends" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'last month' cho biết hành động đã xảy ra và kết thúc trong quá khứ.",
    explanation_grammar: "Past Simple.",
    translation: "Cô Rodriguez sẽ nói về một hội nghị ngân hàng mà cô ấy đã tham dự tại Lisbon vào tháng trước.",
    core_vocabulary: [{ word: "conference", type: "n.", meaning: "hội nghị" }, { word: "attend", type: "v.", meaning: "tham dự" }]
  },
  {
    id: "q0566",
    question: "Waveby's new hair care products are being ______ to both men and women.",
    options: { A: "markets", B: "market", C: "marketing", D: "marketed" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động ở thì hiện tại tiếp diễn (are being + V3/ed).",
    explanation_grammar: "Present Continuous Passive.",
    translation: "Các sản phẩm chăm sóc tóc mới của Waveby đang được tiếp thị cho cả nam và nữ.",
    core_vocabulary: [{ word: "hair care", type: "n.", meaning: "chăm sóc tóc" }, { word: "market", type: "v.", meaning: "tiếp thị" }]
  },
  {
    id: "q0567",
    question: "By the time the merger was announced, Trexler Co. ______ operating under its new name, Trexler-Compton, Inc.",
    options: { A: "having begun", B: "begins", C: "will begin", D: "had begun" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc 'By the time + Past Simple, Past Perfect'. Hành động bắt đầu hoạt động dưới tên mới xảy ra trước một hành động khác trong quá khứ.",
    explanation_grammar: "Past Perfect.",
    translation: "Vào thời điểm việc sáp nhập được công bố, Công ty Trexler đã bắt đầu hoạt động dưới cái tên mới.",
    core_vocabulary: [{ word: "merger", type: "n.", meaning: "sự sáp nhập" }, { word: "announce", type: "v.", meaning: "công bố" }]
  },
  {
    id: "q0568",
    question: "Laboratory conditions ______ frequently to ensure temperature stability.",
    options: { A: "are monitored", B: "monitor", C: "are monitoring", D: "monitored" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Chủ ngữ là vật nên cần bị động. 'Frequently' chỉ thói quen lặp lại ở hiện tại.",
    explanation_grammar: "Present Simple Passive.",
    translation: "Các điều kiện trong phòng thí nghiệm được theo dõi thường xuyên để đảm bảo sự ổn định của nhiệt độ.",
    core_vocabulary: [{ word: "laboratory", type: "n.", meaning: "phòng thí nghiệm" }, { word: "monitor", type: "v.", meaning: "theo dõi" }]
  },
  {
    id: "q0569",
    question: "Milldell Bus Company's service connecting the city's two airports ______ shortly.",
    options: { A: "will commence", B: "commenced", C: "commence", D: "commencing" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'shortly' (trong thời gian ngắn tới) chỉ tương lai.",
    explanation_grammar: "Future Simple.",
    translation: "Dịch vụ của Công ty Xe buýt Milldell kết nối hai sân bay của thành phố sẽ sớm bắt đầu hoạt động.",
    core_vocabulary: [{ word: "connect", type: "v.", meaning: "kết nối" }, { word: "commence", type: "v.", meaning: "bắt đầu" }]
  },
  {
    id: "q0570",
    question: "The financial review board has stated that no budget proposal may ______ ten pages.",
    options: { A: "exceed", B: "excess", C: "excessive", D: "exceeding" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Sau động từ khuyết thiếu 'may' là động từ nguyên mẫu không 'to'.",
    explanation_grammar: "Modal verbs + V-bare.",
    translation: "Hội đồng thẩm định tài chính đã tuyên bố rằng không có đề xuất ngân sách nào được vượt quá mười trang.",
    core_vocabulary: [{ word: "state", type: "v.", meaning: "tuyên bố/phát biểu" }, { word: "exceed", type: "v.", meaning: "vượt quá" }]
  },
  {
    id: "q0571",
    question: "The Tyneside Recreation Department ______ suggestions for new programs until the end of this month.",
    options: { A: "will be accepting", B: "accepting", C: "to accept", D: "has accepted" },
    correct_answer: "A",
    grammar_type: "12 thì",
    explanation_reason: "Diễn tả hành động sẽ đang diễn ra liên tục đến một thời điểm trong tương lai.",
    explanation_grammar: "Future Continuous.",
    translation: "Bộ phận Giải trí Tyneside sẽ tiếp nhận các gợi ý cho các chương trình mới cho đến cuối tháng này.",
    core_vocabulary: [{ word: "recreation", type: "n.", meaning: "sự giải trí" }, { word: "suggestion", type: "n.", meaning: "sự gợi ý" }]
  },
  {
    id: "q0572",
    question: "A number of vehicles ______ parked illegally every night despite the city's strict regulations.",
    options: { A: "been", B: "are", C: "being", D: "is" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc 'A number of + danh từ số nhiều + động từ số nhiều'.",
    explanation_grammar: "Subject-Verb Agreement.",
    translation: "Một số lượng xe cộ bị đỗ trái phép mỗi đêm bất chấp các quy định nghiêm ngặt.",
    core_vocabulary: [{ word: "illegally", type: "adv.", meaning: "trái phép" }, { word: "strict regulation", type: "n.", meaning: "quy định nghiêm ngặt" }]
  },
  {
    id: "q0573",
    question: "The office complex ______ on the outskirts of the pedestrian shopping area.",
    options: { A: "builder", B: "built", C: "will be built", D: "are building" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Chủ ngữ là vật nên cần bị động. 'Will be built' chỉ một kế hoạch tương lai.",
    explanation_grammar: "Future Simple Passive.",
    translation: "Khu phức hợp văn phòng sẽ được xây dựng ở ngoại ô khu mua sắm dành cho người đi bộ.",
    core_vocabulary: [{ word: "outskirts", type: "n.", meaning: "ngoại ô" }, { word: "pedestrian", type: "n.", meaning: "người đi bộ" }]
  },
  {
    id: "q0574",
    question: "Businesses on Ellory Avenue ______ early yesterday to allow work crews to repave the street.",
    options: { A: "to close", B: "are closed", C: "closing", D: "closed" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'yesterday' chỉ quá khứ đơn.",
    explanation_grammar: "Past Simple.",
    translation: "Các doanh nghiệp đã đóng cửa sớm vào ngày hôm qua để công nhân lát lại đường.",
    core_vocabulary: [{ word: "work crew", type: "n.", meaning: "đội ngũ công nhân" }, { word: "repave", type: "v.", meaning: "lát lại (đường)" }]
  },
  {
    id: "q0575",
    question: "When Paxton Enterprises ______ its textile division, several middle managers were laid off.",
    options: { A: "to restructure", B: "restructures", C: "was restructuring", D: "were restructured" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Diễn tả một hành động đang diễn ra trong quá khứ thì một hành động khác xen vào.",
    explanation_grammar: "Past Continuous.",
    translation: "Khi Tập đoàn Paxton đang tái cơ cấu bộ phận dệt may, một vài quản lý đã bị sa thải.",
    core_vocabulary: [{ word: "textile", type: "n.", meaning: "dệt may" }, { word: "restructure", type: "v.", meaning: "tái cơ cấu" }]
  },
  {
    id: "q0576",
    question: "More university students ______ in internships in the last five years than ever before.",
    options: { A: "will participate", B: "participating", C: "have participated", D: "were participated" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Dấu hiệu 'in the last five years' là dấu hiệu của thì hiện tại hoàn thành.",
    explanation_grammar: "Present Perfect.",
    translation: "Nhiều sinh viên đã tham gia vào các kỳ thực tập trong 5 năm qua hơn bao giờ hết.",
    core_vocabulary: [{ word: "participate", type: "v.", meaning: "tham gia" }, { word: "internship", type: "n.", meaning: "kỳ thực tập" }]
  },
  {
    id: "q0577",
    question: "The Salisbury Nature Club's treasurer ______ and suggested revisions to the budget for the next financial quarter.",
    options: { A: "is examining", B: "will examine", C: "to examine", D: "has examined" },
    correct_answer: "D",
    grammar_type: "12 thì",
    explanation_reason: "Động từ 'suggested' là quá khứ, 'has examined' phù hợp để chỉ chuỗi hành động vừa hoàn thành.",
    explanation_grammar: "Present Perfect.",
    translation: "Thủ quỹ của Câu lạc bộ Salisbury đã kiểm tra và đề xuất các sửa đổi cho ngân sách.",
    core_vocabulary: [{ word: "treasurer", type: "n.", meaning: "thủ quỹ" }, { word: "revision", type: "n.", meaning: "sự sửa đổi" }]
  },
  {
    id: "q0578",
    question: "The technical manuals for the True Photo Printer ______ into Spanish by contractors from A-Language, Inc.",
    options: { A: "are translating", B: "translation", C: "were translated", D: "translator" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Chủ ngữ là vật nên cần bị động. Diễn tả sự việc đã thực hiện xong.",
    explanation_grammar: "Past Simple Passive.",
    translation: "Sách hướng dẫn kỹ thuật cho Máy in Ảnh True đã được các nhà thầu dịch sang tiếng Tây Ban Nha.",
    core_vocabulary: [{ word: "manual", type: "n.", meaning: "sách hướng dẫn" }, { word: "translate", type: "v.", meaning: "dịch" }]
  },
  {
    id: "q0579",
    question: "All passengers ______ to stay seated while the bus is in motion.",
    options: { A: "can require", B: "are required", C: "are requiring", D: "have required" },
    correct_answer: "B",
    grammar_type: "12 thì",
    explanation_reason: "Cấu trúc bị động (được yêu cầu). Quy định chung ở hiện tại.",
    explanation_grammar: "Present Simple Passive.",
    translation: "Tất cả hành khách được yêu cầu ngồi yên tại chỗ khi xe buýt đang di chuyển.",
    core_vocabulary: [{ word: "stay seated", type: "v.", meaning: "ngồi yên tại chỗ" }, { word: "in motion", type: "phr.", meaning: "đang chuyển động" }]
  },
  {
    id: "q0580",
    question: "Any requests to take a leave of absence must be ______ to a department supervisor at least two weeks in advance.",
    options: { A: "submitting", B: "submit", C: "submitted", D: "submission" },
    correct_answer: "C",
    grammar_type: "12 thì",
    explanation_reason: "Sau 'must be' là V3/ed trong cấu trúc bị động với động từ khuyết thiếu.",
    explanation_grammar: "Passive with Modal Verbs.",
    translation: "Bất kỳ yêu cầu xin nghỉ phép nào cũng phải được nộp cho giám sát bộ phận trước ít nhất hai tuần.",
    core_vocabulary: [{ word: "leave of absence", type: "n.", meaning: "sự nghỉ phép" }, { word: "submit", type: "v.", meaning: "nộp" }]
  }
];

let content = fs.readFileSync(targetFile, 'utf8');
const questionsData = eval(content.replace('window.questionsData =', ''));

const updatedQuestionsData = questionsData.concat(newQuestions);

fs.writeFileSync(targetFile, 'window.questionsData = ' + JSON.stringify(updatedQuestionsData, null, 2) + ';', 'utf8');
console.log('Successfully added 20 questions for 12 thì - Test 3!');
