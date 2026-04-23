const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "id": "q1021",
    "question": "The main entrance to the corporate headquarters is ______ accessible to all visitors and staff.",
    "options": {
      "A": "ease",
      "B": "easy",
      "C": "easier",
      "D": "easily"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho tính từ 'accessible'.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Lối vào chính của trụ sở công ty có thể dễ dàng tiếp cận cho tất cả khách tham quan và nhân viên.",
    "core_vocabulary": [
      { "word": "entrance", "type": "n.", "meaning": "lối vào" },
      { "word": "accessible", "type": "adj.", "meaning": "có thể tiếp cận" }
    ]
  },
  {
    "id": "q1022",
    "question": "Management decided to ______ reject the vendor's proposal due to unexpected budget constraints.",
    "options": {
      "A": "formal",
      "B": "formalize",
      "C": "formally",
      "D": "formality"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho động từ 'reject'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Ban quản lý đã quyết định chính thức từ chối đề xuất của nhà cung cấp do những hạn chế ngân sách bất ngờ.",
    "core_vocabulary": [
      { "word": "reject", "type": "v.", "meaning": "từ chối" },
      { "word": "constraint", "type": "n.", "meaning": "sự hạn chế, ràng buộc" }
    ]
  },
  {
    "id": "q1023",
    "question": "All laboratory safety protocols must be followed ______ to prevent any workplace accidents.",
    "options": {
      "A": "strictly",
      "B": "strictness",
      "C": "stricter",
      "D": "strict"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho động từ 'followed'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Tất cả các quy trình an toàn trong phòng thí nghiệm phải được tuân thủ nghiêm ngặt để ngăn ngừa bất kỳ tai nạn lao động nào.",
    "core_vocabulary": [
      { "word": "protocol", "type": "n.", "meaning": "quy trình, quy tắc" },
      { "word": "strictly", "type": "adv.", "meaning": "một cách nghiêm ngặt" }
    ]
  },
  {
    "id": "q1024",
    "question": "The marketing team worked ______ with the design department to launch the new promotional campaign.",
    "options": {
      "A": "closeness",
      "B": "closely",
      "C": "close",
      "D": "closer"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cụm 'work closely with' (hợp tác chặt chẽ với) là một lối diễn đạt phổ biến.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Nhóm tiếp thị đã làm việc chặt chẽ với bộ phận thiết kế để khởi động chiến dịch quảng cáo mới.",
    "core_vocabulary": [
      { "word": "promotional", "type": "adj.", "meaning": "quảng cáo, khuyến mãi" },
      { "word": "closely", "type": "adv.", "meaning": "chặt chẽ" }
    ]
  },
  {
    "id": "q1025",
    "question": "The information provided in the introductory employee orientation was highly ______.",
    "options": {
      "A": "informally",
      "B": "informative",
      "C": "information",
      "D": "inform"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'was' và trạng từ 'highly' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Thông tin được cung cấp trong buổi định hướng nhân viên ban đầu rất hữu ích.",
    "core_vocabulary": [
      { "word": "orientation", "type": "n.", "meaning": "sự định hướng" },
      { "word": "informative", "type": "adj.", "meaning": "đầy đủ thông tin, hữu ích" }
    ]
  },
  {
    "id": "q1026",
    "question": "The quarterly earnings report showed that the new software line is highly ______.",
    "options": {
      "A": "profitability",
      "B": "profit",
      "C": "profitably",
      "D": "profitable"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'is' và trạng từ 'highly' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Báo cáo thu nhập hàng quý cho thấy dòng phần mềm mới mang lại lợi nhuận rất cao.",
    "core_vocabulary": [
      { "word": "earnings", "type": "n.", "meaning": "thu nhập, lợi nhuận" },
      { "word": "profitable", "type": "adj.", "meaning": "có lợi nhuận" }
    ]
  },
  {
    "id": "q1027",
    "question": "Employees are ______ expected to attend the quarterly review meetings unless they are on approved leave.",
    "options": {
      "A": "generally",
      "B": "generality",
      "C": "general",
      "D": "generalize"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ ở dạng bị động 'are expected'.",
    "explanation_grammar": "Adverb modifying Passive Verb.",
    "translation": "Nhân viên thường được kỳ vọng sẽ tham dự các cuộc họp đánh giá hàng quý trừ khi họ đang trong kỳ nghỉ đã được phê duyệt.",
    "core_vocabulary": [
      { "word": "approved", "type": "adj.", "meaning": "được phê duyệt" },
      { "word": "generally", "type": "adv.", "meaning": "nói chung, thông thường" }
    ]
  },
  {
    "id": "q1028",
    "question": "The financial consultant provided an ______ brilliant strategy for expanding the business overseas.",
    "options": {
      "A": "exceptions",
      "B": "exceptionally",
      "C": "exception",
      "D": "exceptional"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ 'brilliant'.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Cố vấn tài chính đã cung cấp một chiến lược xuất sắc đến mức đặc biệt để mở rộng kinh doanh ra nước ngoài.",
    "core_vocabulary": [
      { "word": "strategy", "type": "n.", "meaning": "chiến lược" },
      { "word": "exceptionally", "type": "adv.", "meaning": "ngoại lệ, đặc biệt" }
    ]
  },
  {
    "id": "q1029",
    "question": "The accounting software created by TechCore is ______ used by mid-sized manufacturing enterprises.",
    "options": {
      "A": "wide",
      "B": "widen",
      "C": "width",
      "D": "widely"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ phân từ 'used'.",
    "explanation_grammar": "Adverb modifying Participial Adjective.",
    "translation": "Phần mềm kế toán do TechCore tạo ra được sử dụng rộng rãi bởi các doanh nghiệp sản xuất quy mô vừa.",
    "core_vocabulary": [
      { "word": "enterprise", "type": "n.", "meaning": "doanh nghiệp" },
      { "word": "widely", "type": "adv.", "meaning": "rộng rãi" }
    ]
  },
  {
    "id": "q1030",
    "question": "The non-disclosure agreement was ______ written to avoid any potential legal ambiguities.",
    "options": {
      "A": "deliberation",
      "B": "deliberate",
      "C": "deliberately",
      "D": "deliberates"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ phân từ 'written'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Thỏa thuận không tiết lộ thông tin đã được viết một cách thận trọng để tránh bất kỳ sự mơ hồ về pháp lý tiềm ẩn nào.",
    "core_vocabulary": [
      { "word": "ambiguity", "type": "n.", "meaning": "sự mơ hồ" },
      { "word": "deliberately", "type": "adv.", "meaning": "một cách thận trọng, có chủ ý" }
    ]
  },
  {
    "id": "q1031",
    "question": "Investors are advised to be ______ when dealing with highly volatile emerging markets.",
    "options": {
      "A": "cautiously",
      "B": "cautious",
      "C": "caution",
      "D": "cautions"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'be' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Các nhà đầu tư được khuyên nên thận trọng khi đối phó với các thị trường mới nổi có tính biến động cao.",
    "core_vocabulary": [
      { "word": "volatile", "type": "adj.", "meaning": "biến động" },
      { "word": "cautious", "type": "adj.", "meaning": "thận trọng" }
    ]
  },
  {
    "id": "q1032",
    "question": "The success of the proposed corporate merger depends ______ on the cooperation of both executive boards.",
    "options": {
      "A": "largely",
      "B": "larger",
      "C": "largeness",
      "D": "large"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho động từ 'depends'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Sự thành công của vụ sáp nhập công ty được đề xuất phụ thuộc phần lớn vào sự hợp tác của cả hai ban điều hành.",
    "core_vocabulary": [
      { "word": "merger", "type": "n.", "meaning": "sáp nhập" },
      { "word": "largely", "type": "adv.", "meaning": "phần lớn, chủ yếu" }
    ]
  },
  {
    "id": "q1033",
    "question": "The two competing firms eventually reached a ______ beneficial agreement regarding product distribution.",
    "options": {
      "A": "mutually",
      "B": "mutual",
      "C": "mutuality",
      "D": "mutuals"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ đứng trước tính từ 'beneficial' để bổ nghĩa cho nó.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Hai công ty đối thủ cuối cùng đã đạt được một thỏa thuận có lợi cho cả hai bên liên quan đến phân phối sản phẩm.",
    "core_vocabulary": [
      { "word": "beneficial", "type": "adj.", "meaning": "có lợi" },
      { "word": "mutually", "type": "adv.", "meaning": "lẫn nhau, cho cả hai bên" }
    ]
  },
  {
    "id": "q1034",
    "question": "The intensive training program is designed ______ for new hires in the regional sales department.",
    "options": {
      "A": "primary",
      "B": "primarily",
      "C": "primes",
      "D": "prime"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ ở dạng bị động 'is designed'.",
    "explanation_grammar": "Adverb modifying Passive Verb.",
    "translation": "Chương trình đào tạo chuyên sâu được thiết kế chủ yếu cho những nhân viên mới tuyển dụng tại bộ phận bán hàng khu vực.",
    "core_vocabulary": [
      { "word": "intensive", "type": "adj.", "meaning": "chuyên sâu, tập trung" },
      { "word": "primarily", "type": "adv.", "meaning": "chủ yếu" }
    ]
  },
  {
    "id": "q1035",
    "question": "It is ______ imperative that the annual financial audit is completed by the end of the week.",
    "options": {
      "A": "absolute",
      "B": "absolve",
      "C": "absolutely",
      "D": "absolutes"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ 'imperative' (cấp bách, bắt buộc).",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Việc kiểm toán tài chính hàng năm phải được hoàn thành vào cuối tuần là điều tuyệt đối cấp bách.",
    "core_vocabulary": [
      { "word": "audit", "type": "n.", "meaning": "kiểm toán" },
      { "word": "absolutely", "type": "adv.", "meaning": "tuyệt đối" }
    ]
  },
  {
    "id": "q1036",
    "question": "The retail chain's new flagship stores are ______ located in heavily populated urban centers.",
    "options": {
      "A": "strategic",
      "B": "strategize",
      "C": "strategically",
      "D": "strategy"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ ở dạng bị động 'are located'.",
    "explanation_grammar": "Adverb modifying Passive Verb.",
    "translation": "Các cửa hàng hàng đầu mới của chuỗi bán lẻ được đặt ở vị trí chiến lược tại các trung tâm đô thị đông dân cư.",
    "core_vocabulary": [
      { "word": "flagship store", "type": "n.phr.", "meaning": "cửa hàng hàng đầu / kiểu mẫu" },
      { "word": "strategically", "type": "adv.", "meaning": "một cách chiến lược" }
    ]
  },
  {
    "id": "q1037",
    "question": "The new group of interns seems very ______ to learn about the company's internal logistics operations.",
    "options": {
      "A": "eagerness",
      "B": "eager",
      "C": "eagles",
      "D": "eagerly"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'seems' và trạng từ 'very' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Nhóm thực tập sinh mới có vẻ rất háo hức tìm hiểu về các hoạt động hậu cần nội bộ của công ty.",
    "core_vocabulary": [
      { "word": "logistics", "type": "n.", "meaning": "hậu cần" },
      { "word": "eager", "type": "adj.", "meaning": "háo hức" }
    ]
  },
  {
    "id": "q1038",
    "question": "The ______ phase of the software development project will focus on gathering user requirements.",
    "options": {
      "A": "initiate",
      "B": "initiative",
      "C": "initial",
      "D": "initially"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'phase'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Giai đoạn ban đầu của dự án phát triển phần mềm sẽ tập trung vào việc thu thập các yêu cầu của người dùng.",
    "core_vocabulary": [
      { "word": "requirement", "type": "n.", "meaning": "yêu cầu" },
      { "word": "initial", "type": "adj.", "meaning": "ban đầu" }
    ]
  },
  {
    "id": "q1039",
    "question": "Any ______ changes to the conference schedule will be communicated to attendees via email.",
    "options": {
      "A": "subsequent",
      "B": "sequence",
      "C": "subsequently",
      "D": "sequences"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'changes'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Bất kỳ thay đổi tiếp theo nào đối với lịch trình hội nghị sẽ được thông báo cho những người tham dự qua email.",
    "core_vocabulary": [
      { "word": "attendee", "type": "n.", "meaning": "người tham dự" },
      { "word": "subsequent", "type": "adj.", "meaning": "theo sau, tiếp theo" }
    ]
  },
  {
    "id": "q1040",
    "question": "Some senior employees were initially ______ to adopt the new cloud-based inventory system.",
    "options": {
      "A": "reluctantly",
      "B": "reluctant",
      "C": "reluctances",
      "D": "reluctance"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'were' và trạng từ 'initially' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Một số nhân viên cấp cao ban đầu đã miễn cưỡng áp dụng hệ thống kiểm kho dựa trên đám mây mới.",
    "core_vocabulary": [
      { "word": "inventory", "type": "n.", "meaning": "hàng tồn kho / sự kiểm kê" },
      { "word": "reluctant", "type": "adj.", "meaning": "miễn cưỡng" }
    ]
  },
  {
    "id": "q1041",
    "question": "The manufacturer's warranty is only ______ if the appliance is serviced by an authorized technician.",
    "options": {
      "A": "application",
      "B": "applicable",
      "C": "applicability",
      "D": "apply"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'is' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Bảo hành của nhà sản xuất chỉ có hiệu lực nếu thiết bị được bảo trì bởi kỹ thuật viên được ủy quyền.",
    "core_vocabulary": [
      { "word": "authorized", "type": "adj.", "meaning": "được ủy quyền" },
      { "word": "applicable", "type": "adj.", "meaning": "có thể áp dụng, có hiệu lực" }
    ]
  },
  {
    "id": "q1042",
    "question": "The automated customer service portal is ______ undergoing routine server maintenance.",
    "options": {
      "A": "currently",
      "B": "currency",
      "C": "currents",
      "D": "current"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho cụm động từ 'is undergoing'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Cổng thông tin dịch vụ khách hàng tự động hiện đang được bảo trì máy chủ định kỳ.",
    "core_vocabulary": [
      { "word": "undergo", "type": "v.", "meaning": "trải qua" },
      { "word": "currently", "type": "adv.", "meaning": "hiện tại" }
    ]
  },
  {
    "id": "q1043",
    "question": "The customer support representative was highly commended for being polite and ______.",
    "options": {
      "A": "courtesy",
      "B": "courteously",
      "C": "courtesies",
      "D": "courteous"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cấu trúc song song 'polite and [adjective]'. 'Courteous' (lịch sự) là tính từ.",
    "explanation_grammar": "Parallel Structure (Adjective after Linking Verb).",
    "translation": "Nhân viên hỗ trợ khách hàng được đánh giá cao vì thái độ lịch sự và nhã nhặn.",
    "core_vocabulary": [
      { "word": "commend", "type": "v.", "meaning": "khen ngợi" },
      { "word": "courteous", "type": "adj.", "meaning": "lịch sự, nhã nhặn" }
    ]
  },
  {
    "id": "q1044",
    "question": "The workshop on data protection was both engaging and highly ______ for the IT staff.",
    "options": {
      "A": "educationally",
      "B": "educational",
      "C": "education",
      "D": "educate"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cấu trúc song song 'both engaging and [adjective]'.",
    "explanation_grammar": "Parallel Structure (Adjective).",
    "translation": "Hội thảo về bảo vệ dữ liệu vừa hấp dẫn vừa mang tính giáo dục cao đối với các nhân viên CNTT.",
    "core_vocabulary": [
      { "word": "engaging", "type": "adj.", "meaning": "hấp dẫn, lôi cuốn" },
      { "word": "educational", "type": "adj.", "meaning": "mang tính giáo dục" }
    ]
  },
  {
    "id": "q1045",
    "question": "Please ensure that the fragile glass components are handled ______ during the packing process.",
    "options": {
      "A": "gentler",
      "B": "gentleness",
      "C": "gently",
      "D": "gentle"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ phân từ 'handled'.",
    "explanation_grammar": "Adverb modifying Participial Adjective.",
    "translation": "Vui lòng đảm bảo rằng các thành phần thủy tinh dễ vỡ được xử lý nhẹ nhàng trong quá trình đóng gói.",
    "core_vocabulary": [
      { "word": "fragile", "type": "adj.", "meaning": "dễ vỡ" },
      { "word": "gently", "type": "adv.", "meaning": "nhẹ nhàng" }
    ]
  }
];

const filePath = path.join(__dirname, '../data/questions.js');
let content = fs.readFileSync(filePath, 'utf8');

const lastBracketIndex = content.lastIndexOf('];');
if (lastBracketIndex !== -1) {
    const questionsString = ',\n' + newQuestions.map(q => JSON.stringify(q, null, 2)).join(',\n');
    content = content.substring(0, lastBracketIndex) + questionsString + '\n' + content.substring(lastBracketIndex);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully added ${newQuestions.length} questions to data/questions.js`);
} else {
    console.error('Could not find the end of the questions array in data/questions.js');
}
