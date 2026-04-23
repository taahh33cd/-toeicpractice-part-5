const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "id": "q0971",
    "question": "The board of directors ______ approved the proposed budget for the upcoming fiscal year.",
    "options": {
      "A": "unanimously",
      "B": "unanimous",
      "C": "unanimity",
      "D": "unanimousness"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho động từ 'approved'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Hội đồng quản trị đã nhất trí thông qua ngân sách đề xuất cho năm tài chính sắp tới.",
    "core_vocabulary": [
      { "word": "unanimously", "type": "adv.", "meaning": "nhất trí, đồng lòng" },
      { "word": "approve", "type": "v.", "meaning": "thông qua, chấp thuận" }
    ]
  },
  {
    "id": "q0972",
    "question": "Customers must provide a ______ email address to receive their electronic receipts and shipping updates.",
    "options": {
      "A": "valid",
      "B": "validate",
      "C": "validity",
      "D": "validly"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'email address'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Khách hàng phải cung cấp địa chỉ email hợp lệ để nhận biên lai điện tử và cập nhật giao hàng.",
    "core_vocabulary": [
      { "word": "valid", "type": "adj.", "meaning": "hợp lệ" },
      { "word": "receipt", "type": "n.", "meaning": "biên lai" }
    ]
  },
  {
    "id": "q0973",
    "question": "The instructions for assembling the new office furniture were ______ complicated.",
    "options": {
      "A": "unnecessity",
      "B": "unnecessaries",
      "C": "unnecessary",
      "D": "unnecessarily"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ 'complicated'.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Các hướng dẫn lắp ráp đồ nội thất văn phòng mới phức tạp một cách không cần thiết.",
    "core_vocabulary": [
      { "word": "assemble", "type": "v.", "meaning": "lắp ráp" },
      { "word": "unnecessarily", "type": "adv.", "meaning": "không cần thiết" }
    ]
  },
  {
    "id": "q0974",
    "question": "It has become ______ clear that the company needs to hire more customer service representatives.",
    "options": {
      "A": "abounds",
      "B": "abundant",
      "C": "abundantly",
      "D": "abundance"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cụm từ 'abundantly clear' là một lối diễn đạt phổ biến (collocation), nghĩa là 'rất rõ ràng'.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Rõ ràng là công ty cần phải thuê thêm nhiều nhân viên dịch vụ khách hàng.",
    "core_vocabulary": [
      { "word": "representative", "type": "n.", "meaning": "người đại diện" },
      { "word": "abundantly", "type": "adv.", "meaning": "rất, dồi dào" }
    ]
  },
  {
    "id": "q0975",
    "question": "The schedule for the annual employee retreat is ______ attached to this email.",
    "options": {
      "A": "conveniences",
      "B": "conveniently",
      "C": "convenience",
      "D": "convenient"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ phân từ 'attached'.",
    "explanation_grammar": "Adverb modifying Participial Adjective.",
    "translation": "Lịch trình cho chuyến nghỉ dưỡng hàng năm của nhân viên được đính kèm thuận tiện trong email này.",
    "core_vocabulary": [
      { "word": "retreat", "type": "n.", "meaning": "chuyến nghỉ dưỡng, rút lui" },
      { "word": "conveniently", "type": "adv.", "meaning": "thuận tiện" }
    ]
  },
  {
    "id": "q0976",
    "question": "Many attendees found the keynote speaker's presentation to be both informative and ______.",
    "options": {
      "A": "inspiring",
      "B": "inspiration",
      "C": "inspire",
      "D": "inspiringly"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cấu trúc song song 'both informative and [adjective]'. 'Inspiring' là tính từ.",
    "explanation_grammar": "Parallel Structure (Adjective).",
    "translation": "Nhiều người tham dự nhận thấy bài trình bày của diễn giả chính vừa đầy đủ thông tin vừa đầy cảm hứng.",
    "core_vocabulary": [
      { "word": "attendee", "type": "n.", "meaning": "người tham dự" },
      { "word": "inspiring", "type": "adj.", "meaning": "truyền cảm hứng" }
    ]
  },
  {
    "id": "q0977",
    "question": "Please review the attached employment contract ______ before signing on the final page.",
    "options": {
      "A": "careful",
      "B": "carefulness",
      "C": "carefully",
      "D": "care"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho động từ 'review'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Vui lòng xem lại hợp đồng lao động đính kèm một cách cẩn thận trước khi ký vào trang cuối cùng.",
    "core_vocabulary": [
      { "word": "contract", "type": "n.", "meaning": "hợp đồng" },
      { "word": "carefully", "type": "adv.", "meaning": "cẩn thận" }
    ]
  },
  {
    "id": "q0978",
    "question": "The manager requested a ______ analysis of the current market trends by next Friday.",
    "options": {
      "A": "detailing",
      "B": "detailed",
      "C": "details",
      "D": "detail"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'analysis'. 'Detailed' là tính từ nghĩa là 'chi tiết'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Quản lý đã yêu cầu một bản phân tích chi tiết về các xu hướng thị trường hiện tại trước thứ Sáu tới.",
    "core_vocabulary": [
      { "word": "analysis", "type": "n.", "meaning": "sự phân tích" },
      { "word": "detailed", "type": "adj.", "meaning": "chi tiết" }
    ]
  },
  {
    "id": "q0979",
    "question": "The new smartphone model released by TechNova is ______ lightweight compared to previous versions.",
    "options": {
      "A": "remarkably",
      "B": "remarkable",
      "C": "remarking",
      "D": "remark"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ 'lightweight'.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Mẫu điện thoại thông minh mới do TechNova phát hành nhẹ một cách đáng kể so với các phiên bản trước.",
    "core_vocabulary": [
      { "word": "lightweight", "type": "adj.", "meaning": "nhẹ" },
      { "word": "remarkably", "type": "adv.", "meaning": "đáng kể, rõ rệt" }
    ]
  },
  {
    "id": "q0980",
    "question": "The CEO is highly ______ about the potential growth in the renewable energy sector this year.",
    "options": {
      "A": "optimistically",
      "B": "optimize",
      "C": "optimism",
      "D": "optimistic"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'is' và trạng từ 'highly' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "CEO rất lạc quan về sự tăng trưởng tiềm năng trong lĩnh vực năng lượng tái tạo trong năm nay.",
    "core_vocabulary": [
      { "word": "renewable energy", "type": "n.phr.", "meaning": "năng lượng tái tạo" },
      { "word": "optimistic", "type": "adj.", "meaning": "lạc quan" }
    ]
  },
  {
    "id": "q0981",
    "question": "All employees are encouraged to dress ______ during the company's \"Casual Fridays.\"",
    "options": {
      "A": "appropriateness",
      "B": "appropriation",
      "C": "appropriately",
      "D": "appropriate"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ 'dress'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Tất cả nhân viên được khuyến khích ăn mặc phù hợp trong chương trình \"Thứ Sáu Tự Do\" của công ty.",
    "core_vocabulary": [
      { "word": "encourage", "type": "v.", "meaning": "khuyến khích" },
      { "word": "appropriately", "type": "adv.", "meaning": "phù hợp" }
    ]
  },
  {
    "id": "q0982",
    "question": "The maintenance team conducts ______ inspections of the building's elevators every month.",
    "options": {
      "A": "regularly",
      "B": "regular",
      "C": "regulate",
      "D": "regularity"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'inspections'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Đội bảo trì tiến hành kiểm tra định kỳ các thang máy của tòa nhà hàng tháng.",
    "core_vocabulary": [
      { "word": "inspections", "type": "n.", "meaning": "sự kiểm tra" },
      { "word": "regular", "type": "adj.", "meaning": "định kỳ, thường xuyên" }
    ]
  },
  {
    "id": "q0983",
    "question": "______, the shipment of office supplies arrived two days earlier than originally estimated.",
    "options": {
      "A": "Fortunate",
      "B": "Fortunately",
      "C": "Fortunes",
      "D": "Fortune"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ đứng ở đầu câu để bổ nghĩa cho cả câu.",
    "explanation_grammar": "Sentence Adverb.",
    "translation": "May mắn thay, lô hàng văn phòng phẩm đã đến sớm hơn hai ngày so với ước tính ban đầu.",
    "core_vocabulary": [
      { "word": "estimate", "type": "v.", "meaning": "ước tính" },
      { "word": "fortunately", "type": "adv.", "meaning": "may mắn thay" }
    ]
  },
  {
    "id": "q0984",
    "question": "Despite the recent economic downturn, our quarterly sales figures have remained ______.",
    "options": {
      "A": "stably",
      "B": "stability",
      "C": "stable",
      "D": "stabilize"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'remained' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Mặc dù kinh tế suy thoái gần đây, doanh số bán hàng hàng quý của chúng tôi vẫn duy trì ổn định.",
    "core_vocabulary": [
      { "word": "downturn", "type": "n.", "meaning": "sự suy thoái" },
      { "word": "stable", "type": "adj.", "meaning": "ổn định" }
    ]
  },
  {
    "id": "q0985",
    "question": "The software developer ______ resolved the glitch in the online payment processing system.",
    "options": {
      "A": "quickly",
      "B": "quickness",
      "C": "quicken",
      "D": "quick"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ 'resolved'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Nhà phát triển phần mềm đã nhanh chóng khắc phục lỗi trong hệ thống xử lý thanh toán trực tuyến.",
    "core_vocabulary": [
      { "word": "resolve", "type": "v.", "meaning": "giải quyết, khắc phục" },
      { "word": "glitch", "type": "n.", "meaning": "lỗi nhỏ" }
    ]
  },
  {
    "id": "q0986",
    "question": "The advisory committee will make a ______ recommendation to the president tomorrow morning.",
    "options": {
      "A": "formally",
      "B": "formalize",
      "C": "formality",
      "D": "formal"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'recommendation'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Ủy ban cố vấn sẽ đưa ra một khuyến nghị chính thức cho chủ tịch vào sáng mai.",
    "core_vocabulary": [
      { "word": "recommendation", "type": "n.", "meaning": "khuyến nghị" },
      { "word": "formal", "type": "adj.", "meaning": "chính thức" }
    ]
  },
  {
    "id": "q0987",
    "question": "The catering service for the corporate anniversary event was ______ expensive.",
    "options": {
      "A": "surprising",
      "B": "surprisingly",
      "C": "surprises",
      "D": "surprise"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ 'expensive'.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Dịch vụ ăn uống cho sự kiện kỷ niệm ngày thành lập công ty tốn kém một cách đáng ngạc nhiên.",
    "core_vocabulary": [
      { "word": "catering", "type": "n.", "meaning": "dịch vụ ăn uống" },
      { "word": "surprisingly", "type": "adv.", "meaning": "đáng ngạc nhiên" }
    ]
  },
  {
    "id": "q0988",
    "question": "The troubleshooting manual provided with the new wireless printer is not very ______.",
    "options": {
      "A": "helpfully",
      "B": "helpful",
      "C": "helpfulness",
      "D": "help"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau trạng từ 'very' và động từ nối 'is' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Sách hướng dẫn khắc phục sự cố đi kèm với máy in không dây mới không hữu ích lắm.",
    "core_vocabulary": [
      { "word": "troubleshooting", "type": "n.", "meaning": "sự khắc phục sự cố" },
      { "word": "helpful", "type": "adj.", "meaning": "hữu ích" }
    ]
  },
  {
    "id": "q0989",
    "question": "Ms. Taylor ______ donated a significant portion of her year-end bonus to a local charity.",
    "options": {
      "A": "generously",
      "B": "generous",
      "C": "generousness",
      "D": "generosity"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho động từ 'donated'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Bà Taylor đã hào phóng quyên góp một phần đáng kể tiền thưởng cuối năm của mình cho một tổ chức từ thiện địa phương.",
    "core_vocabulary": [
      { "word": "donate", "type": "v.", "meaning": "quyên góp" },
      { "word": "generously", "type": "adv.", "meaning": "hào phóng" }
    ]
  },
  {
    "id": "q0990",
    "question": "We require ______ written confirmation from the client before sharing any of their financial data.",
    "options": {
      "A": "explicitly",
      "B": "explicitness",
      "C": "explicit",
      "D": "explicit"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'confirmation'. 'Explicit' (rõ ràng) là tính từ.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Chúng tôi yêu cầu xác nhận bằng văn bản rõ ràng từ khách hàng trước khi chia sẻ bất kỳ dữ liệu tài chính nào của họ.",
    "core_vocabulary": [
      { "word": "confirmation", "type": "n.", "meaning": "sự xác nhận" },
      { "word": "explicit", "type": "adj.", "meaning": "rõ ràng" }
    ]
  },
  {
    "id": "q0991",
    "question": "The newly appointed branch manager is ______ experienced in international corporate finance.",
    "options": {
      "A": "vaster",
      "B": "vastness",
      "C": "vastly",
      "D": "vast"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ phân từ 'experienced'.",
    "explanation_grammar": "Adverb modifying Participial Adjective.",
    "translation": "Trưởng chi nhánh mới được bổ nhiệm có kinh nghiệm dày dặn về tài chính doanh nghiệp quốc tế.",
    "core_vocabulary": [
      { "word": "vastly", "type": "adv.", "meaning": "rất nhiều, dày dặn" },
      { "word": "finance", "type": "n.", "meaning": "tài chính" }
    ]
  },
  {
    "id": "q0992",
    "question": "The hotel offers a ______ breakfast buffet for all guests staying in their premium suites.",
    "options": {
      "A": "complimentary",
      "B": "compliments",
      "C": "compliment",
      "D": "complimentarily"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ cụm 'breakfast buffet'. 'Complimentary' nghĩa là 'miễn phí'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Khách sạn cung cấp bữa sáng tự chọn miễn phí cho tất cả khách nghỉ tại các phòng cao cấp của họ.",
    "core_vocabulary": [
      { "word": "complimentary", "type": "adj.", "meaning": "miễn phí, mời" },
      { "word": "buffet", "type": "n.", "meaning": "tiệc tự chọn" }
    ]
  },
  {
    "id": "q0993",
    "question": "The regional director ______ visits the branch offices to ensure smooth and efficient operations.",
    "options": {
      "A": "period",
      "B": "periods",
      "C": "periodic",
      "D": "periodically"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ 'visits'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Giám đốc khu vực định kỳ đến thăm các văn phòng chi nhánh để đảm bảo các hoạt động diễn ra trôi chảy và hiệu quả.",
    "core_vocabulary": [
      { "word": "periodically", "type": "adv.", "meaning": "định kỳ" },
      { "word": "efficient", "type": "adj.", "meaning": "hiệu quả" }
    ]
  },
  {
    "id": "q0994",
    "question": "The results of the recent customer satisfaction survey were very ______ for the entire support team.",
    "options": {
      "A": "encouragement",
      "B": "encouraging",
      "C": "encouragingly",
      "D": "encourage"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau trạng từ 'very' và động từ nối 'were' cần một tính từ. 'Encouraging' (khích lệ) là tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Kết quả của cuộc khảo sát mức độ hài lòng của khách hàng gần đây rất đáng khích lệ cho toàn bộ đội ngũ hỗ trợ.",
    "core_vocabulary": [
      { "word": "survey", "type": "n.", "meaning": "khảo sát" },
      { "word": "encouraging", "type": "adj.", "meaning": "đáng khích lệ" }
    ]
  },
  {
    "id": "q0995",
    "question": "The architecture firm's portfolio of contemporary building designs is ______ impressive.",
    "options": {
      "A": "truly",
      "B": "truthful",
      "C": "truth",
      "D": "true"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ 'impressive'.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Danh mục hồ sơ năng lực của công ty kiến trúc về các thiết kế tòa nhà đương đại thực sự ấn tượng.",
    "core_vocabulary": [
      { "word": "contemporary", "type": "adj.", "meaning": "đương đại" },
      { "word": "truly", "type": "adv.", "meaning": "thực sự" }
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
