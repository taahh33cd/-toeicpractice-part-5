const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "id": "q1046",
    "question": "The VIP lounge at the airport is reserved ______ for first-class and business-class ticket holders.",
    "options": {
      "A": "exclusiveness",
      "B": "exclude",
      "C": "exclusive",
      "D": "exclusively"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho tính từ phân từ 'reserved'.",
    "explanation_grammar": "Adverb modifying Participial Adjective.",
    "translation": "Phòng chờ VIP tại sân bay được dành riêng cho những người có vé hạng nhất và hạng thương gia.",
    "core_vocabulary": [
      { "word": "reserved", "type": "adj.", "meaning": "được dành riêng" },
      { "word": "exclusively", "type": "adv.", "meaning": "riêng biệt, duy nhất" }
    ]
  },
  {
    "id": "q1047",
    "question": "The new software interface is highly ______ and easy for beginners to navigate without a manual.",
    "options": {
      "A": "intuitive",
      "B": "intuit",
      "C": "intuitively",
      "D": "intuition"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'is' và trạng từ 'highly' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Giao diện phần mềm mới rất trực quan và người mới bắt đầu dễ dàng điều hướng mà không cần sách hướng dẫn.",
    "core_vocabulary": [
      { "word": "navigate", "type": "v.", "meaning": "điều hướng" },
      { "word": "intuitive", "type": "adj.", "meaning": "trực quan" }
    ]
  },
  {
    "id": "q1048",
    "question": "The venue for the upcoming tech conference is ______ located near the central train station.",
    "options": {
      "A": "conveniences",
      "B": "convenience",
      "C": "conveniently",
      "D": "convenient"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cụm 'conveniently located' (được đặt ở vị trí thuận tiện) là một lối diễn đạt phổ biến.",
    "explanation_grammar": "Adverb modifying Participial Adjective.",
    "translation": "Địa điểm tổ chức hội nghị công nghệ sắp tới nằm ở vị trí thuận tiện gần ga tàu trung tâm.",
    "core_vocabulary": [
      { "word": "venue", "type": "n.", "meaning": "địa điểm" },
      { "word": "conveniently", "type": "adv.", "meaning": "một cách thuận tiện" }
    ]
  },
  {
    "id": "q1049",
    "question": "Employees must obtain prior ______ from their supervisors before taking any extended time off.",
    "options": {
      "A": "approval",
      "B": "approve",
      "C": "approved",
      "D": "approvingly"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một danh từ sau tính từ 'prior' (trước đó). 'Approval' là danh từ.",
    "explanation_grammar": "Noun after Adjective.",
    "translation": "Nhân viên phải có được sự chấp thuận trước từ người giám sát của họ trước khi nghỉ phép dài ngày.",
    "core_vocabulary": [
      { "word": "prior", "type": "adj.", "meaning": "trước đó" },
      { "word": "approval", "type": "n.", "meaning": "sự chấp thuận" }
    ]
  },
  {
    "id": "q1050",
    "question": "The marketing team presented a ______ strategy to increase online sales over the next quarter.",
    "options": {
      "A": "comprehend",
      "B": "comprehension",
      "C": "comprehensively",
      "D": "comprehensive"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'strategy'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Nhóm tiếp thị đã trình bày một chiến lược toàn diện để tăng doanh số bán hàng trực tuyến trong quý tới.",
    "core_vocabulary": [
      { "word": "quarter", "type": "n.", "meaning": "quý (trong năm)" },
      { "word": "comprehensive", "type": "adj.", "meaning": "toàn diện" }
    ]
  },
  {
    "id": "q1051",
    "question": "Please handle the delicate laboratory equipment ______ to avoid any costly damages.",
    "options": {
      "A": "care",
      "B": "careful",
      "C": "carefulness",
      "D": "carefully"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho động từ 'handle'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Vui lòng xử lý các thiết bị phòng thí nghiệm tinh vi một cách cẩn thận để tránh bất kỳ hư hỏng tốn kém nào.",
    "core_vocabulary": [
      { "word": "delicate", "type": "adj.", "meaning": "tinh vi, nhạy cảm" },
      { "word": "carefully", "type": "adv.", "meaning": "một cách cẩn thận" }
    ]
  },
  {
    "id": "q1052",
    "question": "Despite the aggressive marketing campaign by competitors, our market share remains ______.",
    "options": {
      "A": "stabilize",
      "B": "stable",
      "C": "stability",
      "D": "stably"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'remains' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Bất chấp chiến dịch tiếp thị rầm rộ của các đối thủ cạnh tranh, thị phần của chúng tôi vẫn ổn định.",
    "core_vocabulary": [
      { "word": "aggressive", "type": "adj.", "meaning": "quyết liệt, hung hăng" },
      { "word": "stable", "type": "adj.", "meaning": "ổn định" }
    ]
  },
  {
    "id": "q1053",
    "question": "The feedback from the focus group was ______ positive regarding the new packaging design.",
    "options": {
      "A": "overwhelming",
      "B": "overwhelm",
      "C": "overwhelms",
      "D": "overwhelmingly"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ đứng trước tính từ 'positive' để bổ nghĩa cho nó.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Phản hồi từ nhóm tập trung là cực kỳ tích cực liên quan đến thiết kế bao bì mới.",
    "core_vocabulary": [
      { "word": "packaging", "type": "n.", "meaning": "bao bì" },
      { "word": "overwhelmingly", "type": "adv.", "meaning": "cực kỳ, áp đảo" }
    ]
  },
  {
    "id": "q1054",
    "question": "The project manager is responsible for ensuring that all team members meet their ______ deadlines.",
    "options": {
      "A": "respect",
      "B": "respects",
      "C": "respectfully",
      "D": "respective"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'deadlines'. 'Respective' nghĩa là 'tương ứng (của mỗi người)'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Quản lý dự án chịu trách nhiệm đảm bảo rằng tất cả các thành viên trong nhóm hoàn thành thời hạn tương ứng của họ.",
    "core_vocabulary": [
      { "word": "ensure", "type": "v.", "meaning": "đảm bảo" },
      { "word": "respective", "type": "adj.", "meaning": "tương ứng" }
    ]
  },
  {
    "id": "q1055",
    "question": "We apologize for any ______ caused by the temporary closure of the main elevator.",
    "options": {
      "A": "inconvenienced",
      "B": "inconvenient",
      "C": "inconvenience",
      "D": "inconveniently"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một danh từ sau tính từ 'any'. 'Inconvenience' là danh từ.",
    "explanation_grammar": "Noun after 'any'.",
    "translation": "Chúng tôi xin lỗi vì bất kỳ sự bất tiện nào gây ra bởi việc tạm thời đóng cửa thang máy chính.",
    "core_vocabulary": [
      { "word": "temporary", "type": "adj.", "meaning": "tạm thời" },
      { "word": "inconvenience", "type": "n.", "meaning": "sự bất tiện" }
    ]
  },
  {
    "id": "q1056",
    "question": "The board of directors ______ reviews the company's financial performance every quarter.",
    "options": {
      "A": "thorough",
      "B": "thoroughs",
      "C": "thoroughness",
      "D": "thoroughly"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho động từ 'reviews'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Hội đồng quản trị xem xét kỹ lưỡng hiệu quả tài chính của công ty mỗi quý.",
    "core_vocabulary": [
      { "word": "financial", "type": "adj.", "meaning": "thuộc về tài chính" },
      { "word": "thoroughly", "type": "adv.", "meaning": "kỹ lưỡng, thấu đáo" }
    ]
  },
  {
    "id": "q1057",
    "question": "It is highly ______ that the new regulations will take effect by the end of the fiscal year.",
    "options": {
      "A": "probably",
      "B": "probable",
      "C": "probabilities",
      "D": "probability"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cấu trúc 'It is [adverb] [adjective] that...'. 'Probable' (có khả năng) là tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Rất có khả năng các quy định mới sẽ có hiệu lực vào cuối năm tài chính.",
    "core_vocabulary": [
      { "word": "regulation", "type": "n.", "meaning": "quy định" },
      { "word": "probable", "type": "adj.", "meaning": "có khả năng xảy ra" }
    ]
  },
  {
    "id": "q1058",
    "question": "Mr. Harris ______ contributed to the development of the award-winning mobile application.",
    "options": {
      "A": "significantly",
      "B": "significance",
      "C": "signify",
      "D": "significant"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho động từ 'contributed'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Ông Harris đã đóng góp đáng kể vào việc phát triển ứng dụng di động từng đoạt giải thưởng.",
    "core_vocabulary": [
      { "word": "award-winning", "type": "adj.", "meaning": "từng đoạt giải thưởng" },
      { "word": "significantly", "type": "adv.", "meaning": "đáng kể, quan trọng" }
    ]
  },
  {
    "id": "q1059",
    "question": "The proposed solution to the supply chain bottleneck seems perfectly ______ to the executive team.",
    "options": {
      "A": "logically",
      "B": "logic",
      "C": "logical",
      "D": "logics"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'seems' và trạng từ 'perfectly' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Giải pháp đề xuất cho nút thắt của chuỗi cung ứng có vẻ hoàn toàn hợp lý đối với đội ngũ điều hành.",
    "core_vocabulary": [
      { "word": "bottleneck", "type": "n.", "meaning": "nút thắt cổ chai" },
      { "word": "logical", "type": "adj.", "meaning": "hợp lý" }
    ]
  },
  {
    "id": "q1060",
    "question": "The primary goal of the seminar is to ______ employees to take on leadership roles.",
    "options": {
      "A": "encouraging",
      "B": "encouraged",
      "C": "encourage",
      "D": "encouragement"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một động từ nguyên thể sau 'to'. 'Encourage' là động từ.",
    "explanation_grammar": "Verb in to-infinitive.",
    "translation": "Mục tiêu chính của buổi hội thảo là khuyến khích nhân viên đảm nhận các vai trò lãnh đạo.",
    "core_vocabulary": [
      { "word": "seminar", "type": "n.", "meaning": "buổi hội thảo" },
      { "word": "encourage", "type": "v.", "meaning": "khuyến khích" }
    ]
  },
  {
    "id": "q1061",
    "question": "The heating system in the office building adjusts ______ based on the outside temperature.",
    "options": {
      "A": "automatic",
      "B": "automates",
      "C": "automation",
      "D": "automatically"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ 'adjusts'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Hệ thống sưởi ấm trong tòa nhà văn phòng tự động điều chỉnh dựa trên nhiệt độ bên ngoài.",
    "core_vocabulary": [
      { "word": "adjust", "type": "v.", "meaning": "điều chỉnh" },
      { "word": "automatically", "type": "adv.", "meaning": "tự động" }
    ]
  },
  {
    "id": "q1062",
    "question": "The company has seen a ______ increase in international orders over the last six months.",
    "options": {
      "A": "steadiness",
      "B": "steadies",
      "C": "steady",
      "D": "steadily"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'increase'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Công ty đã chứng kiến sự gia tăng đều đặn các đơn hàng quốc tế trong sáu tháng qua.",
    "core_vocabulary": [
      { "word": "increase", "type": "n.", "meaning": "sự tăng lên" },
      { "word": "steady", "type": "adj.", "meaning": "đều đặn, ổn định" }
    ]
  },
  {
    "id": "q1063",
    "question": "The customer service provided by the hotel staff during our stay was ______ excellent.",
    "options": {
      "A": "except",
      "B": "exceptionally",
      "C": "exception",
      "D": "exceptional"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ 'excellent'.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Dịch vụ khách hàng do nhân viên khách sạn cung cấp trong suốt kỳ nghỉ của chúng tôi cực kỳ xuất sắc.",
    "core_vocabulary": [
      { "word": "stay", "type": "n.", "meaning": "kỳ lưu trú" },
      { "word": "exceptionally", "type": "adv.", "meaning": "ngoại lệ, cực kỳ" }
    ]
  },
  {
    "id": "q1064",
    "question": "Our support representatives are trained to remain ______ even when dealing with frustrated clients.",
    "options": {
      "A": "calmed",
      "B": "calmly",
      "C": "calm",
      "D": "calmness"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'remain' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Các đại diện hỗ trợ của chúng tôi được đào tạo để giữ bình tĩnh ngay cả khi đối phó với những khách hàng bực bội.",
    "core_vocabulary": [
      { "word": "frustrated", "type": "adj.", "meaning": "bực dọc, nản lòng" },
      { "word": "calm", "type": "adj.", "meaning": "bình tĩnh" }
    ]
  },
  {
    "id": "q1065",
    "question": "The manager expressed his deep ______ for the team's hard work during the holiday rush.",
    "options": {
      "A": "appreciation",
      "B": "appreciate",
      "C": "appreciatively",
      "D": "appreciative"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một danh từ sau tính từ 'deep'. 'Appreciation' là danh từ.",
    "explanation_grammar": "Noun after Adjective.",
    "translation": "Người quản lý bày tỏ lòng biết ơn sâu sắc đối với sự làm việc chăm chỉ của cả nhóm trong đợt cao điểm lễ hội.",
    "core_vocabulary": [
      { "word": "deep", "type": "adj.", "meaning": "sâu sắc" },
      { "word": "appreciation", "type": "n.", "meaning": "sự cảm kích, biết ơn" }
    ]
  },
  {
    "id": "q1066",
    "question": "The lease contract states that the rent must be paid ______ on the first day of each month.",
    "options": {
      "A": "promptly",
      "B": "prompted",
      "C": "prompt",
      "D": "promptness"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ dạng bị động 'be paid'.",
    "explanation_grammar": "Adverb modifying Passive Verb.",
    "translation": "Hợp đồng thuê nhà quy định rằng tiền thuê nhà phải được thanh toán đúng hạn vào ngày đầu tiên của mỗi tháng.",
    "core_vocabulary": [
      { "word": "lease", "type": "n.", "meaning": "hợp đồng thuê" },
      { "word": "promptly", "type": "adv.", "meaning": "đúng hạn, nhanh chóng" }
    ]
  },
  {
    "id": "q1067",
    "question": "The director will provide a ______ overview of the new tax laws before the meeting begins.",
    "options": {
      "A": "briefness",
      "B": "briefly",
      "C": "briefs",
      "D": "brief"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'overview'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Giám đốc sẽ cung cấp một cái nhìn tổng quan ngắn gọn về luật thuế mới trước khi buổi họp bắt đầu.",
    "core_vocabulary": [
      { "word": "overview", "type": "n.", "meaning": "tổng quan" },
      { "word": "brief", "type": "adj.", "meaning": "ngắn gọn" }
    ]
  },
  {
    "id": "q1068",
    "question": "The architectural firm is ______ recognized for its innovative and sustainable building designs.",
    "options": {
      "A": "widely",
      "B": "widen",
      "C": "width",
      "D": "wide"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ dạng phân từ (participle) 'recognized'.",
    "explanation_grammar": "Adverb modifying Participial Adjective.",
    "translation": "Công ty kiến trúc được công nhận rộng rãi nhờ các thiết kế tòa nhà sáng tạo và bền vững.",
    "core_vocabulary": [
      { "word": "innovative", "type": "adj.", "meaning": "sáng tạo, có tính đổi mới" },
      { "word": "widely", "type": "adv.", "meaning": "rộng rãi" }
    ]
  },
  {
    "id": "q1069",
    "question": "The human resources manager emphasized the importance of maintaining a ______ work environment.",
    "options": {
      "A": "produce",
      "B": "productively",
      "C": "productive",
      "D": "production"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'work environment'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Quản lý nhân sự nhấn mạnh tầm quan trọng của việc duy trì môi trường làm việc năng suất.",
    "core_vocabulary": [
      { "word": "emphasize", "type": "v.", "meaning": "nhấn mạnh" },
      { "word": "productive", "type": "adj.", "meaning": "năng suất" }
    ]
  },
  {
    "id": "q1070",
    "question": "The recent software update is ______ beneficial for users who frequently work with large data sets.",
    "options": {
      "A": "height",
      "B": "highly",
      "C": "highest",
      "D": "high"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ đứng trước tính từ 'beneficial' để bổ nghĩa cho nó.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Bản cập nhật phần mềm gần đây rất có lợi cho những người dùng thường xuyên làm việc với các bộ dữ liệu lớn.",
    "core_vocabulary": [
      { "word": "beneficial", "type": "adj.", "meaning": "có ích, có lợi" },
      { "word": "highly", "type": "adv.", "meaning": "rất, ở mức độ cao" }
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
