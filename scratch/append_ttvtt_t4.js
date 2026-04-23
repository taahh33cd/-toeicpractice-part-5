const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "id": "q0946",
    "question": "The hiring committee was ______ impressed by the candidate's extensive portfolio and communication skills.",
    "options": {
      "A": "highly",
      "B": "highest",
      "C": "height",
      "D": "high"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ đứng trước tính từ 'impressed' để nhấn mạnh mức độ.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Ủy ban tuyển dụng đã rất ấn tượng trước danh mục hồ sơ năng lực sâu rộng và kỹ năng giao tiếp của ứng viên.",
    "core_vocabulary": [
      { "word": "portfolio", "type": "n.", "meaning": "hồ sơ năng lực" },
      { "word": "highly", "type": "adv.", "meaning": "rất, ở mức độ cao" }
    ]
  },
  {
    "id": "q0947",
    "question": "Mr. Chen needs to ______ the quarterly budget report before submitting it to the board of directors.",
    "options": {
      "A": "final",
      "B": "finally",
      "C": "finality",
      "D": "finalize"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một động từ sau 'needs to'. 'Finalize' là dạng động từ.",
    "explanation_grammar": "Verb after 'need to'.",
    "translation": "Ông Chen cần hoàn thiện báo cáo ngân sách hàng quý trước khi trình lên ban giám đốc.",
    "core_vocabulary": [
      { "word": "finalize", "type": "v.", "meaning": "hoàn thiện" },
      { "word": "quarterly", "type": "adj.", "meaning": "hàng quý" }
    ]
  },
  {
    "id": "q0948",
    "question": "The new advertising campaign was ______ successful in reaching a younger demographic across social media.",
    "options": {
      "A": "extremity",
      "B": "extremes",
      "C": "extreme",
      "D": "extremely"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ 'successful'.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Chiến dịch quảng cáo mới đã cực kỳ thành công trong việc tiếp cận nhóm nhân khẩu học trẻ tuổi trên khắp các mạng xã hội.",
    "core_vocabulary": [
      { "word": "demographic", "type": "n.", "meaning": "nhân khẩu học" },
      { "word": "extremely", "type": "adv.", "meaning": "cực kỳ" }
    ]
  },
  {
    "id": "q0949",
    "question": "Employees are reminded to handle the newly installed copy machine ______, as it is prone to paper jams.",
    "options": {
      "A": "carefully",
      "B": "cares",
      "C": "careful",
      "D": "care"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ 'handle'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Nhân viên được nhắc nhở xử lý máy sao chép mới lắp đặt một cách cẩn thận, vì nó dễ bị kẹt giấy.",
    "core_vocabulary": [
      { "word": "prone to", "type": "adj.phr.", "meaning": "dễ bị, có xu hướng bị" },
      { "word": "carefully", "type": "adv.", "meaning": "cẩn thận" }
    ]
  },
  {
    "id": "q0950",
    "question": "Patients at Riverdale Clinic are advised to schedule ______ check-ups to monitor their blood pressure.",
    "options": {
      "A": "frequented",
      "B": "frequent",
      "C": "frequently",
      "D": "frequency"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'check-ups'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Bệnh nhân tại Phòng khám Riverdale được khuyên nên lên lịch kiểm tra thường xuyên để theo dõi huyết áp.",
    "core_vocabulary": [
      { "word": "check-up", "type": "n.", "meaning": "kiểm tra sức khỏe" },
      { "word": "frequent", "type": "adj.", "meaning": "thường xuyên" }
    ]
  },
  {
    "id": "q0951",
    "question": "The store manager noted a ______ decrease in retail sales during the unexpected winter storm.",
    "options": {
      "A": "sharpness",
      "B": "sharply",
      "C": "sharpen",
      "D": "sharp"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'decrease'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Quản lý cửa hàng đã nhận thấy một sự sụt giảm mạnh trong doanh số bán lẻ trong cơn bão mùa đông bất ngờ.",
    "core_vocabulary": [
      { "word": "decrease", "type": "n.", "meaning": "sự giảm sút" },
      { "word": "sharp", "type": "adj.", "meaning": "mạnh, sắc nét" }
    ]
  },
  {
    "id": "q0952",
    "question": "The latest software update makes it ______ easy to synchronize files across multiple mobile devices.",
    "options": {
      "A": "surprisingly",
      "B": "surprise",
      "C": "surprising",
      "D": "surprises"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ 'easy'.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Bản cập nhật phần mềm mới nhất giúp việc đồng bộ hóa các tệp trên nhiều thiết bị di động trở nên dễ dàng đến bất ngờ.",
    "core_vocabulary": [
      { "word": "synchronize", "type": "v.", "meaning": "đồng bộ hóa" },
      { "word": "surprisingly", "type": "adv.", "meaning": "đến bất ngờ" }
    ]
  },
  {
    "id": "q0953",
    "question": "Ms. Evans is ______ responsible for organizing the annual charity gala and coordinating with vendors.",
    "options": {
      "A": "solely",
      "B": "soleness",
      "C": "soles",
      "D": "sole"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ 'responsible'.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Bà Evans chịu trách nhiệm duy nhất cho việc tổ chức buổi tiệc từ thiện hàng năm và phối hợp với các nhà cung cấp.",
    "core_vocabulary": [
      { "word": "solely", "type": "adv.", "meaning": "duy nhất, chỉ" },
      { "word": "coordinate", "type": "v.", "meaning": "phối hợp" }
    ]
  },
  {
    "id": "q0954",
    "question": "Investors responded ______ to the CEO's sudden announcement regarding the merger with Apex Industries.",
    "options": {
      "A": "positives",
      "B": "positive",
      "C": "positively",
      "D": "positivity"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ 'responded'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Các nhà đầu tư đã phản ứng tích cực trước thông báo bất ngờ của CEO về việc sáp nhập với Apex Industries.",
    "core_vocabulary": [
      { "word": "merger", "type": "n.", "meaning": "sự sáp nhập" },
      { "word": "positively", "type": "adv.", "meaning": "tích cực" }
    ]
  },
  {
    "id": "q0955",
    "question": "The employee handbook clearly outlines the ______ dress code for all staff members interacting with clients.",
    "options": {
      "A": "formalize",
      "B": "formality",
      "C": "formally",
      "D": "formal"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ cụm 'dress code'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Sổ tay nhân viên nêu rõ quy định về trang phục chính thức cho tất cả các nhân viên khi tương tác với khách hàng.",
    "core_vocabulary": [
      { "word": "outline", "type": "v.", "meaning": "nêu rõ, phác thảo" },
      { "word": "formal", "type": "adj.", "meaning": "chính thức, trang trọng" }
    ]
  },
  {
    "id": "q0956",
    "question": "The technician assured us that the air conditioning unit in the main lobby is now fully ______.",
    "options": {
      "A": "operationally",
      "B": "operation",
      "C": "operate",
      "D": "operational"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau trạng từ 'fully' và động từ nối 'is' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Kỹ thuật viên đảm bảo với chúng tôi rằng máy điều hòa ở sảnh chính hiện đã hoạt động đầy đủ.",
    "core_vocabulary": [
      { "word": "assure", "type": "v.", "meaning": "đảm bảo" },
      { "word": "operational", "type": "adj.", "meaning": "hoạt động, sẵn sàng sử dụng" }
    ]
  },
  {
    "id": "q0957",
    "question": "To remain ______, the marketing agency must continuously adapt to shifting consumer trends.",
    "options": {
      "A": "competitive",
      "B": "competitively",
      "C": "compete",
      "D": "competition"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'remain' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Để duy trì khả năng cạnh tranh, đại lý tiếp thị phải liên tục thích nghi với xu hướng tiêu dùng đang thay đổi.",
    "core_vocabulary": [
      { "word": "shifting", "type": "adj.", "meaning": "đang thay đổi" },
      { "word": "competitive", "type": "adj.", "meaning": "có tính cạnh tranh" }
    ]
  },
  {
    "id": "q0958",
    "question": "Board members agreed that the proposed expansion into the European market is ______ risky at this time.",
    "options": {
      "A": "potentially",
      "B": "potential",
      "C": "potency",
      "D": "potentials"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ 'risky'.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Các thành viên hội đồng quản trị đồng ý rằng việc đề xuất mở rộng sang thị trường châu Âu có tiềm ẩn rủi ro vào thời điểm này.",
    "core_vocabulary": [
      { "word": "expansion", "type": "n.", "meaning": "sự mở rộng" },
      { "word": "risky", "type": "adj.", "meaning": "rủi ro" }
    ]
  },
  {
    "id": "q0959",
    "question": "Please ensure that all customer complaints regarding defective products are addressed ______.",
    "options": {
      "A": "promptly",
      "B": "promptness",
      "C": "prompt",
      "D": "prompts"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ dạng bị động 'are addressed'.",
    "explanation_grammar": "Adverb modifying Passive Verb.",
    "translation": "Vui lòng đảm bảo rằng tất cả khiếu nại của khách hàng liên quan đến sản phẩm bị lỗi đều được giải quyết kịp thời.",
    "core_vocabulary": [
      { "word": "defective", "type": "adj.", "meaning": "bị lỗi" },
      { "word": "promptly", "type": "adv.", "meaning": "kịp thời, nhanh chóng" }
    ]
  },
  {
    "id": "q0960",
    "question": "The newly hired administrative assistant has proven to be a highly ______ worker under pressure.",
    "options": {
      "A": "efficiency",
      "B": "efficiently",
      "C": "efficient",
      "D": "efficiencies"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'worker'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Trợ lý hành chính mới được thuê đã chứng minh là một nhân viên hiệu quả cao khi chịu áp lực.",
    "core_vocabulary": [
      { "word": "administrative", "type": "adj.", "meaning": "hành chính" },
      { "word": "efficient", "type": "adj.", "meaning": "hiệu quả, năng suất" }
    ]
  },
  {
    "id": "q0961",
    "question": "Director Park requires a ______ summary of the morning meeting on his desk by 2:00 PM.",
    "options": {
      "A": "briefness",
      "B": "briefs",
      "C": "brief",
      "D": "briefly"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'summary'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Giám đốc Park yêu cầu một bản tóm tắt ngắn gọn về cuộc họp buổi sáng trên bàn làm việc của mình trước 2 giờ chiều.",
    "core_vocabulary": [
      { "word": "summary", "type": "n.", "meaning": "bản tóm tắt" },
      { "word": "brief", "type": "adj.", "meaning": "ngắn gọn" }
    ]
  },
  {
    "id": "q0962",
    "question": "The accounting department found the new tax preparation software to be ______ reliable.",
    "options": {
      "A": "consistency",
      "B": "consistent",
      "C": "consist",
      "D": "consistently"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ 'reliable'.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Bộ phận kế toán nhận thấy phần mềm kê khai thuế mới hoạt động ổn định và đáng tin cậy.",
    "core_vocabulary": [
      { "word": "reliable", "type": "adj.", "meaning": "đáng tin cậy" },
      { "word": "consistently", "type": "adv.", "meaning": "ổn định, nhất quán" }
    ]
  },
  {
    "id": "q0963",
    "question": "The catering company provided ______ portions for all the guests attending the corporate banquet.",
    "options": {
      "A": "generous",
      "B": "generosity",
      "C": "generousness",
      "D": "generously"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'portions'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Công ty cung cấp dịch vụ ăn uống đã cung cấp những khẩu phần ăn thịnh soạn cho tất cả các khách mời tham dự bữa tiệc công ty.",
    "core_vocabulary": [
      { "word": "portion", "type": "n.", "meaning": "khẩu phần ăn" },
      { "word": "generous", "type": "adj.", "meaning": "thịnh soạn, hào phóng" }
    ]
  },
  {
    "id": "q0964",
    "question": "The pharmacist at Westside Pharmacy explained that the medication should be taken ______.",
    "options": {
      "A": "regulate",
      "B": "regularity",
      "C": "regular",
      "D": "regularly"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ ở dạng bị động 'should be taken'.",
    "explanation_grammar": "Adverb modifying Passive Verb.",
    "translation": "Dược sĩ tại Nhà thuốc Westside giải thích rằng thuốc nên được uống thường xuyên.",
    "core_vocabulary": [
      { "word": "pharmacist", "type": "n.", "meaning": "dược sĩ" },
      { "word": "regularly", "type": "adv.", "meaning": "thường xuyên, đều đặn" }
    ]
  },
  {
    "id": "q0965",
    "question": "The recently renovated office space on the third floor is ______ larger than our previous headquarters.",
    "options": {
      "A": "significantly",
      "B": "signify",
      "C": "significant",
      "D": "significance"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ so sánh 'larger'.",
    "explanation_grammar": "Adverb modifying Comparative Adjective.",
    "translation": "Không gian văn phòng mới được cải tạo ở tầng ba lớn hơn đáng kể so với trụ sở trước đây của chúng tôi.",
    "core_vocabulary": [
      { "word": "renovated", "type": "adj.", "meaning": "được cải tạo" },
      { "word": "significantly", "type": "adv.", "meaning": "đáng kể" }
    ]
  },
  {
    "id": "q0966",
    "question": "The graphic design team created a ______ appealing logo for the tech startup's rebranding launch.",
    "options": {
      "A": "visual",
      "B": "visualize",
      "C": "vision",
      "D": "visually"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ 'appealing'.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Nhóm thiết kế đồ họa đã tạo ra một logo hấp dẫn về mặt thị giác cho buổi ra mắt tái định vị thương hiệu của công ty khởi nghiệp công nghệ.",
    "core_vocabulary": [
      { "word": "appealing", "type": "adj.", "meaning": "hấp dẫn, lôi cuốn" },
      { "word": "visually", "type": "adv.", "meaning": "về mặt thị giác" }
    ]
  },
  {
    "id": "q0967",
    "question": "All staff members must attend the ______ training session on workplace safety and emergency procedures.",
    "options": {
      "A": "mandatorily",
      "B": "mandatory",
      "C": "mandate",
      "D": "mandates"
    },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'training session'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Tất cả các nhân viên phải tham gia buổi đào tạo bắt buộc về an toàn nơi làm việc và các quy trình khẩn cấp.",
    "core_vocabulary": [
      { "word": "mandatory", "type": "adj.", "meaning": "bắt buộc" },
      { "word": "procedure", "type": "n.", "meaning": "quy trình" }
    ]
  },
  {
    "id": "q0968",
    "question": "Network administrators are working ______ to restore the main servers after the unexpected power outage.",
    "options": {
      "A": "tireless",
      "B": "tires",
      "C": "tirelessness",
      "D": "tirelessly"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho động từ 'working'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Quản trị viên mạng đang làm việc không mệt mỏi để khôi phục máy chủ chính sau sự cố mất điện bất ngờ.",
    "core_vocabulary": [
      { "word": "outage", "type": "n.", "meaning": "sự ngừng hoạt động, sự cố mất (điện/mạng)" },
      { "word": "tirelessly", "type": "adv.", "meaning": "không mệt mỏi" }
    ]
  },
  {
    "id": "q0969",
    "question": "The factory supervisor reported a ______ increase in overall productivity since the new machines were installed.",
    "options": {
      "A": "notices",
      "B": "notice",
      "C": "noticeably",
      "D": "noticeable"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'increase'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Giám sát viên nhà máy đã báo cáo một sự gia tăng đáng chú ý trong năng suất tổng thể kể từ khi các máy móc mới được lắp đặt.",
    "core_vocabulary": [
      { "word": "productivity", "type": "n.", "meaning": "năng suất" },
      { "word": "noticeable", "type": "adj.", "meaning": "đáng chú ý" }
    ]
  },
  {
    "id": "q0970",
    "question": "Please keep all confidential client documents in a ______ locked cabinet when you leave the office.",
    "options": {
      "A": "secure",
      "B": "secures",
      "C": "securely",
      "D": "security"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ bổ nghĩa cho tính từ (ở dạng phân từ) 'locked'.",
    "explanation_grammar": "Adverb modifying Participial Adjective.",
    "translation": "Vui lòng giữ tất cả các tài liệu bảo mật của khách hàng trong tủ được khóa an toàn khi bạn rời khỏi văn phòng.",
    "core_vocabulary": [
      { "word": "confidential", "type": "adj.", "meaning": "bảo mật" },
      { "word": "securely", "type": "adv.", "meaning": "một cách an toàn" }
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
