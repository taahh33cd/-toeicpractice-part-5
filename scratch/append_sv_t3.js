const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const newQuestions = [
  {
    id: "q0706",
    question: "The technical ______ provided by Mr. Arisaka helped the engineering team at Solis Corp finish the project on time.",
    options: { A: "address", B: "addressed", C: "addressable", D: "addressing" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chỗ trống cần một danh từ đóng vai trò chủ ngữ của câu (đứng trước động từ 'helped'). 'Technical address' có nghĩa là sự hướng dẫn/bài phát biểu kỹ thuật.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự hướng dẫn kỹ thuật được cung cấp bởi ông Arisaka đã giúp đội ngũ kỹ sư tại Solis Corp hoàn thành dự án đúng hạn.",
    core_vocabulary: [{ word: "provide", type: "v.", meaning: "cung cấp" }, { word: "finish on time", type: "phr.", meaning: "hoàn thành đúng hạn" }]
  },
  {
    id: "q0707",
    question: "Ms. Jensen, who ______ a senior consultant at a law firm in the 1990s, now manages her own agency in London.",
    options: { A: "was", B: "is", C: "were", D: "been" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Động từ chia theo chủ ngữ 'Ms. Jensen' (số ít) và diễn tả sự việc trong quá khứ 'in the 1990s'.",
    explanation_grammar: "Subject-Verb Agreement in Relative Clause (Past).",
    translation: "Bà Jensen, người từng là cố vấn cấp cao tại một công ty luật vào những năm 1990, hiện đang điều hành đại lý riêng của mình tại London.",
    core_vocabulary: [{ word: "senior consultant", type: "n.", meaning: "cố vấn cấp cao" }, { word: "manage", type: "v.", meaning: "quản lý/điều hành" }]
  },
  {
    id: "q0708",
    question: "Any guest who ______ a premium membership at the Sparkle Fitness Center this month will get a free gym bag.",
    options: { A: "purchasing", B: "purchase", C: "purchaser", D: "purchases" },
    correct_answer: "D",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Đại từ quan hệ 'who' thay cho 'Any guest' (số ít), nên động từ chia số ít (thêm 's').",
    explanation_grammar: "Subject-Verb Agreement in Relative Clause (Present).",
    translation: "Bất kỳ khách hàng nào đăng ký thành viên cao cấp tại Sparkle Fitness Center trong tháng này sẽ được tặng một túi tập gym miễn phí.",
    core_vocabulary: [{ word: "purchase", type: "v.", meaning: "mua/đăng ký" }, { word: "membership", type: "n.", meaning: "tư cách thành viên" }]
  },
  {
    id: "q0709",
    question: "All technicians who ______ heavy machinery in the assembly plant must attend a safety briefing every Monday.",
    options: { A: "operates", B: "operate", C: "operating", D: "to operate" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Đại từ 'who' thay cho 'All technicians' (số nhiều), nên động từ giữ nguyên mẫu.",
    explanation_grammar: "Subject-Verb Agreement in Relative Clause (Plural).",
    translation: "Tất cả các kỹ thuật viên vận hành máy móc hạng nặng trong nhà máy lắp ráp phải tham dự buổi hướng dẫn an toàn vào mỗi thứ Hai hàng tuần.",
    core_vocabulary: [{ word: "operate", type: "v.", meaning: "vận hành" }, { word: "safety briefing", type: "n.", meaning: "buổi hướng dẫn an toàn" }]
  },
  {
    id: "q0710",
    question: "Blue Horizon Airlines thanks all flight attendants who ______ promotional flyers at the International Travel Expo in Tokyo last month.",
    options: { A: "distributing", B: "distributed", C: "distributes", D: "distribute" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Diễn tả hành động trong quá khứ 'last month'.",
    explanation_grammar: "Past Simple in Relative Clause.",
    translation: "Hãng hàng không Blue Horizon cảm ơn tất cả các tiếp viên hàng không đã phát tờ rơi quảng cáo tại Hội chợ Triển lãm Du lịch Quốc tế tại Tokyo vào tháng trước.",
    core_vocabulary: [{ word: "distribute", type: "v.", meaning: "phát/phân phối" }, { word: "promotional flyer", type: "n.", meaning: "tờ rơi quảng cáo" }]
  },
  {
    id: "q0711",
    question: "The ______ submitted by Dr. Elena Rossi was highly praised by the board members of Vantech Ltd.",
    options: { A: "proposal", B: "proposing", C: "propose", D: "proposed" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chỗ trống cần một danh từ số ít đóng vai trò chủ ngữ đi với động từ 'was'. 'Proposal' (bản đề xuất) là danh từ phù hợp nhất.",
    explanation_grammar: "Noun as Subject.",
    translation: "Bản đề xuất được đệ trình bởi Tiến sĩ Elena Rossi đã được các thành viên hội đồng quản trị của Vantech Ltd khen ngợi hết lời.",
    core_vocabulary: [{ word: "submit", type: "v.", meaning: "đệ trình/nộp" }, { word: "praise", type: "v.", meaning: "khen ngợi" }]
  },
  {
    id: "q0712",
    question: "Mr. Tanaka, who ______ the head of the marketing department five years ago, is currently the CEO of Nexa Global.",
    options: { A: "are", B: "was", C: "is", D: "were" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Dấu hiệu 'five years ago' yêu cầu thì quá khứ đơn. Chủ ngữ 'Mr. Tanaka' số ít chọn 'was'.",
    explanation_grammar: "Past Simple Be-verb Agreement.",
    translation: "Ông Tanaka, người từng là trưởng phòng marketing 5 năm trước, hiện đang là Giám đốc điều hành của Nexa Global.",
    core_vocabulary: [{ word: "currently", type: "adv.", meaning: "hiện tại" }, { word: "department", type: "n.", meaning: "phòng/ban" }]
  },
  {
    id: "q0713",
    question: "Anyone who ______ a valid employee ID badge from the security desk may enter the laboratory.",
    options: { A: "obtain", B: "obtains", C: "obtainable", D: "obtaining" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ 'Anyone' là đại từ bất định luôn chia động từ số ít.",
    explanation_grammar: "Indefinite Pronoun Agreement.",
    translation: "Bất kỳ ai nhận được thẻ nhân viên hợp lệ từ bàn bảo vệ đều có thể vào phòng thí nghiệm.",
    core_vocabulary: [{ word: "obtain", type: "v.", meaning: "nhận được/đạt được" }, { word: "laboratory", type: "n.", meaning: "phòng thí nghiệm" }]
  },
  {
    id: "q0714",
    question: "All staff members who ______ the new accounting software are required to complete a feedback form.",
    options: { A: "use", B: "to use", C: "using", D: "uses" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ 'All staff members' là số nhiều nên động từ trong mệnh đề quan hệ giữ nguyên.",
    explanation_grammar: "Plural Subject Agreement.",
    translation: "Tất cả các nhân viên sử dụng phần mềm kế toán mới đều được yêu cầu hoàn thành mẫu ý kiến phản hồi.",
    core_vocabulary: [{ word: "accounting software", type: "n.", meaning: "phần mềm kế toán" }, { word: "required", type: "adj.", meaning: "được yêu cầu" }]
  },
  {
    id: "q0715",
    question: "K-Logistics values all drivers who ______ goods safely to the warehouse during the heavy storms last week.",
    options: { A: "delivered", B: "delivering", C: "delivers", D: "deliver" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Dấu hiệu 'last week' yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple in Relative Clause.",
    translation: "K-Logistics trân trọng tất cả các tài xế đã giao hàng an toàn đến kho hàng trong những trận bão lớn vào tuần trước.",
    core_vocabulary: [{ word: "value", type: "v.", meaning: "trân trọng/đánh giá cao" }, { word: "warehouse", type: "n.", meaning: "kho hàng" }]
  },
  {
    id: "q0716",
    question: "The ______ made by the keynote speaker, Mr. Liam O'Connor, inspired many young entrepreneurs at the gala.",
    options: { A: "presentation", B: "presenting", C: "presently", D: "present" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Cần một danh từ làm chủ ngữ. 'Presentation' (bài thuyết trình) là danh từ phù hợp.",
    explanation_grammar: "Noun as Subject.",
    translation: "Bài thuyết trình của diễn giả chính, ông Liam O'Connor, đã truyền cảm hứng cho nhiều doanh nhân trẻ tại buổi gala.",
    core_vocabulary: [{ word: "inspire", type: "v.", meaning: "truyền cảm hứng" }, { word: "entrepreneur", type: "n.", meaning: "doanh nhân" }]
  },
  {
    id: "q0717",
    question: "Ms. Dubois, who ______ a famous chef in Paris during the early 2000s, now teaches at the Culinary Institute.",
    options: { A: "were", B: "was", C: "is", D: "being" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Diễn tả sự việc trong quá khứ 'during the early 2000s' và chủ ngữ số ít 'Ms. Dubois'.",
    explanation_grammar: "Subject-Verb Agreement in Relative Clause (Past).",
    translation: "Bà Dubois, người từng là một đầu bếp nổi tiếng ở Paris vào đầu những năm 2000, hiện đang giảng dạy tại Học viện Ẩm thực.",
    core_vocabulary: [{ word: "famous chef", type: "n.", meaning: "đầu bếp nổi tiếng" }, { word: "institute", type: "n.", meaning: "học viện" }]
  },
  {
    id: "q0718",
    question: "Every customer who ______ more than $500 at the Westside Mall this Saturday receives a discount coupon.",
    options: { A: "spends", B: "spend", C: "spender", D: "spending" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "'Every' + danh từ số ít luôn đi kèm động từ số ít.",
    explanation_grammar: "Agreement with 'Every'.",
    translation: "Mọi khách hàng chi tiêu trên 500 đô la tại trung tâm thương mại Westside vào thứ Bảy này sẽ nhận được mã giảm giá.",
    core_vocabulary: [{ word: "spend", type: "v.", meaning: "chi tiêu" }, { word: "discount coupon", type: "n.", meaning: "mã giảm giá" }]
  },
  {
    id: "q0719",
    question: "All researchers who ______ chemical substances must wear protective gloves and masks at all times.",
    options: { A: "handles", B: "handle", C: "to handle", D: "handling" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Đại từ 'who' thay cho 'All researchers' (số nhiều) nên động từ giữ nguyên mẫu.",
    explanation_grammar: "Plural Subject Agreement.",
    translation: "Tất cả các nhà nghiên cứu xử lý các chất hóa học phải đeo găng tay và khẩu trang bảo hộ mọi lúc.",
    core_vocabulary: [{ word: "handle", type: "v.", meaning: "xử lý/điều khiển" }, { word: "protective", type: "adj.", meaning: "bảo hộ" }]
  },
  {
    id: "q0720",
    question: "Prime Bank appreciates all volunteers who ______ financial literacy workshops at the community center last summer.",
    options: { A: "organized", B: "organize", C: "organizing", D: "organizes" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Dấu hiệu 'last summer' yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple in Relative Clause.",
    translation: "Ngân hàng Prime đánh giá cao tất cả các tình nguyện viên đã tổ chức các buổi hội thảo về kiến thức tài chính tại trung tâm cộng đồng vào mùa hè năm ngoái.",
    core_vocabulary: [{ word: "appreciate", type: "v.", meaning: "đánh giá cao" }, { word: "workshop", type: "n.", meaning: "hội thảo" }]
  },
  {
    id: "q0721",
    question: "The ______ requested by the project manager at Orion Systems must be completed by Friday afternoon.",
    options: { A: "revising", B: "revised", C: "revise", D: "revision" },
    correct_answer: "D",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Cần một danh từ làm chủ ngữ. 'Revision' (sự sửa đổi) là danh từ phù hợp.",
    explanation_grammar: "Noun as Subject.",
    translation: "Bản sửa đổi được yêu cầu bởi quản lý dự án tại Orion Systems phải được hoàn thành trước chiều thứ Sáu.",
    core_vocabulary: [{ word: "request", type: "v.", meaning: "yêu cầu" }, { word: "complete", type: "v.", meaning: "hoàn thành" }]
  },
  {
    id: "q0722",
    question: "Mr. Patel, who ______ a leading architect for the city's stadium project in 2015, is now retired.",
    options: { A: "were", B: "was", C: "are", D: "is" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Hành động xảy ra trong quá khứ 'in 2015' với chủ ngữ số ít 'Mr. Patel'.",
    explanation_grammar: "Past Simple Be-verb Agreement.",
    translation: "Ông Patel, người từng là kiến trúc sư hàng đầu cho dự án sân vận động của thành phố vào năm 2015, hiện đã nghỉ hưu.",
    core_vocabulary: [{ word: "leading", type: "adj.", meaning: "hàng đầu" }, { word: "retired", type: "adj.", meaning: "đã nghỉ hưu" }]
  },
  {
    id: "q0723",
    question: "Anyone who ______ an interest in the vacant managerial position should contact the HR department.",
    options: { A: "expression", B: "expresses", C: "express", D: "expressing" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ 'Anyone' (đại từ bất định) luôn chia động từ số ít.",
    explanation_grammar: "Indefinite Pronoun Agreement.",
    translation: "Bất kỳ ai quan tâm đến vị trí quản lý đang còn trống nên liên hệ với phòng nhân sự.",
    core_vocabulary: [{ word: "vacant", type: "adj.", meaning: "trống" }, { word: "express interest", type: "phr.", meaning: "bày tỏ sự quan tâm" }]
  },
  {
    id: "q0724",
    question: "All interns who ______ at the main office are eligible for a travel reimbursement.",
    options: { A: "to work", B: "work", C: "works", D: "working" },
    correct_answer: "B",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Đại từ 'who' thay cho 'All interns' (số nhiều) nên động từ giữ nguyên mẫu.",
    explanation_grammar: "Plural Subject Agreement.",
    translation: "Tất cả các thực tập sinh làm việc tại văn phòng chính đều đủ điều kiện để được bồi hoàn chi phí đi lại.",
    core_vocabulary: [{ word: "eligible", type: "adj.", meaning: "đủ điều kiện" }, { word: "reimbursement", type: "n.", meaning: "sự bồi hoàn" }]
  },
  {
    id: "q0725",
    question: "Stellar Media honors all journalists who ______ the regional news during the election period last year.",
    options: { A: "covers", B: "cover", C: "covered", D: "covering" },
    correct_answer: "C",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Dấu hiệu 'last year' yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple in Relative Clause.",
    translation: "Stellar Media vinh danh tất cả các phóng viên đã đưa tin tức khu vực trong kỳ bầu cử năm ngoái.",
    core_vocabulary: [{ word: "honor", type: "v.", meaning: "vinh danh" }, { word: "election period", type: "n.", meaning: "kỳ bầu cử" }]
  },
  {
    id: "q0726",
    question: "The ______ written by the financial analyst, Sarah Jenkins, was distributed to all shareholders of Peak Inc.",
    options: { A: "report", B: "reportable", C: "reportedly", D: "reporting" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Cần một danh từ làm chủ ngữ (đứng trước cụm 'written by'). 'Report' (báo cáo) là danh từ phù hợp.",
    explanation_grammar: "Noun as Subject.",
    translation: "Bản báo cáo được viết bởi nhà phân tích tài chính, Sarah Jenkins, đã được gửi đến tất cả các cổ đông của Peak Inc.",
    core_vocabulary: [{ word: "shareholder", type: "n.", meaning: "cổ đông" }, { word: "distribute", type: "v.", meaning: "phát đi/gửi đi" }]
  },
  {
    id: "q0727",
    question: "Mr. Kim, who ______ the most successful salesperson in the branch last year, has been promoted to director.",
    options: { A: "was", B: "been", C: "is", D: "were" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Dấu hiệu 'last year' đi với chủ ngữ số ít 'Mr. Kim'.",
    explanation_grammar: "Past Simple Be-verb Agreement.",
    translation: "Ông Kim, người từng là nhân viên bán hàng thành công nhất chi nhánh vào năm ngoái, đã được thăng chức lên giám đốc.",
    core_vocabulary: [{ word: "branch", type: "n.", meaning: "chi nhánh" }, { word: "promote", type: "v.", meaning: "thăng chức" }]
  },
  {
    id: "q0728",
    question: "Any visitor who ______ a tour of the manufacturing facility must sign a non-disclosure agreement.",
    options: { A: "requesting", B: "request", C: "requests", D: "requester" },
    correct_answer: "C",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Chủ ngữ 'Any visitor' số ít, nên động từ trong mệnh đề quan hệ chia số ít.",
    explanation_grammar: "Subject-Verb Agreement in Relative Clause.",
    translation: "Bất kỳ khách thăm quan nào yêu cầu một chuyến tham quan cơ sở sản xuất đều phải ký thỏa thuận bảo mật.",
    core_vocabulary: [{ word: "manufacturing facility", type: "n.", meaning: "cơ sở sản xuất" }, { word: "non-disclosure agreement", type: "n.", meaning: "thỏa thuận bảo mật" }]
  },
  {
    id: "q0729",
    question: "All supervisors who ______ the production line need to ensure that quality standards are met.",
    options: { A: "to oversee", B: "oversees", C: "overseeing", D: "oversee" },
    correct_answer: "D",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Đại từ 'who' thay cho 'All supervisors' (số nhiều) nên động từ giữ nguyên mẫu.",
    explanation_grammar: "Plural Subject Agreement.",
    translation: "Tất cả các giám sát viên giám sát dây chuyền sản xuất cần đảm bảo rằng các tiêu chuẩn chất lượng được đáp ứng.",
    core_vocabulary: [{ word: "oversee", type: "v.", meaning: "giám sát" }, { word: "quality standards", type: "n.", meaning: "tiêu chuẩn chất lượng" }]
  },
  {
    id: "q0730",
    question: "Z-Tech thanks all engineers who ______ the software bug during the system maintenance last Sunday.",
    options: { A: "fixed", B: "fixes", C: "fix", D: "fixing" },
    correct_answer: "A",
    grammar_type: "Hoà hợp S-V",
    explanation_reason: "Dấu hiệu 'last Sunday' yêu cầu thì quá khứ đơn.",
    explanation_grammar: "Past Simple in Relative Clause.",
    translation: "Z-Tech cảm ơn tất cả các kỹ sư đã sửa lỗi phần mềm trong đợt bảo trì hệ thống vào Chủ nhật tuần trước.",
    core_vocabulary: [{ word: "maintenance", type: "n.", meaning: "sự bảo trì" }, { word: "software bug", type: "n.", meaning: "lỗi phần mềm" }]
  }
];

let content = fs.readFileSync(targetFile, 'utf8');
const questionsData = eval(content.replace('window.questionsData =', ''));

const updatedQuestionsData = questionsData.concat(newQuestions);

fs.writeFileSync(targetFile, 'window.questionsData = ' + JSON.stringify(updatedQuestionsData, null, 2) + ';', 'utf8');
console.log('Successfully added 25 questions for Hoà hợp S-V - Test 3!');
