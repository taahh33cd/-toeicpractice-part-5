const fs = require('fs');
const path = require('path');

const questions = [
  {
    "id": "q1361",
    "question": "We will reopen after two months of renovations with a grand sale ------- on the 29th.",
    "options": { "A": "starter", "B": "start", "C": "starting", "D": "started" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "Rút gọn mệnh đề quan hệ dạng chủ động (which starts -> starting).",
    "explanation_grammar": "Reduced Relative Clause (Active).",
    "translation": "Chúng tôi sẽ mở cửa trở lại sau hai tháng cải tạo với một đợt giảm giá lớn bắt đầu vào ngày 29.",
    "core_vocabulary": [
      { "word": "renovation", "type": "n.", "meaning": "sự cải tạo/nâng cấp" },
      { "word": "grand sale", "type": "n.", "meaning": "đợt giảm giá lớn" }
    ]
  },
  {
    "id": "q1362",
    "question": "To recognize those ------ have been staying late to finish the Stevenson case earlier, management will be holding a dinner party.",
    "options": { "A": "who", "B": "which", "C": "whom", "D": "what" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' dùng làm đại từ quan hệ thay thế cho danh từ chỉ người 'those' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Để ghi nhận những người đã ở lại muộn để hoàn thành vụ Stevenson sớm hơn, ban quản lý sẽ tổ chức một bữa tiệc tối.",
    "core_vocabulary": [
      { "word": "recognize", "type": "v.", "meaning": "ghi nhận/công nhận" },
      { "word": "management", "type": "n.", "meaning": "ban quản lý" }
    ]
  },
  {
    "id": "q1363",
    "question": "Next year, a team of medical experts will investigate ------- sunlight patterns influence human behavior and skin behavior.",
    "options": { "A": "that", "B": "about", "C": "whether", "D": "whose" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whether' dùng trong mệnh đề danh ngữ để chỉ sự nghi vấn (có hay không).",
    "explanation_grammar": "Noun Clause (Whether).",
    "translation": "Năm tới, một nhóm chuyên gia y tế sẽ nghiên cứu xem liệu các mô hình ánh sáng mặt trời có ảnh hưởng đến hành vi của con người và hành vi của da hay không.",
    "core_vocabulary": [
      { "word": "investigate", "type": "v.", "meaning": "nghiên cứu/điều tra" },
      { "word": "influence", "type": "v.", "meaning": "ảnh hưởng" }
    ]
  },
  {
    "id": "q1364",
    "question": "The managers' use of company vehicles is an issue ------- the CFO has been meaning to discuss with Mr. Carey.",
    "options": { "A": "where", "B": "what", "C": "which", "D": "whom" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật 'issue' làm tân ngữ cho động từ 'discuss'.",
    "explanation_grammar": "Relative Pronoun (Object).",
    "translation": "Việc các quản lý sử dụng xe công ty là một vấn đề mà Giám đốc tài chính (CFO) đã định thảo luận với ông Carey.",
    "core_vocabulary": [
      { "word": "vehicle", "type": "n.", "meaning": "xe cộ/phương tiện" },
      { "word": "discuss", "type": "v.", "meaning": "thảo luận" }
    ]
  },
  {
    "id": "q1365",
    "question": "Please join us to celebrate the retirement of George Ramos, who ------- with the company for over twenty years.",
    "options": { "A": "have been", "B": "having been", "C": "has been", "D": "is being" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "Dùng 'has been' (hiện tại hoàn thành) để chỉ một hành động bắt đầu trong quá khứ và kéo dài đến hiện tại, hòa hợp với chủ ngữ số ít 'George Ramos'.",
    "explanation_grammar": "Subject-Verb Agreement / Present Perfect.",
    "translation": "Hãy cùng chúng tôi kỷ niệm sự nghỉ hưu của George Ramos, người đã làm việc với công ty trong hơn hai mươi năm.",
    "core_vocabulary": [
      { "word": "celebrate", "type": "v.", "meaning": "kỷ niệm/ăn mừng" },
      { "word": "retirement", "type": "n.", "meaning": "sự nghỉ hưu" }
    ]
  },
  {
    "id": "q1366",
    "question": "The online questionnaire allows prospective car buyers to determine ------- vehicle might suit them best.",
    "options": { "A": "which", "B": "that", "C": "another", "D": "their" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' được dùng để lựa chọn trong một số lượng hạn chế các phương án.",
    "explanation_grammar": "Wh-word in Noun Clause.",
    "translation": "Bảng câu hỏi trực tuyến cho phép những người mua xe tiềm năng xác định chiếc xe nào có thể phù hợp với họ nhất.",
    "core_vocabulary": [
      { "word": "questionnaire", "type": "n.", "meaning": "bảng câu hỏi" },
      { "word": "prospective", "type": "adj.", "meaning": "tiềm năng" }
    ]
  },
  {
    "id": "q1367",
    "question": "Mr. Zendaya is a competent employee with an individual ------- in marketing.",
    "options": { "A": "interested", "B": "interest", "C": "interests", "D": "interesting" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Individual interest' (sở thích cá nhân/sự quan tâm cá nhân) là một cụm danh từ.",
    "explanation_grammar": "Noun Phrase.",
    "translation": "Ông Zendaya là một nhân viên giỏi với sự quan tâm cá nhân đối với lĩnh vực tiếp thị.",
    "core_vocabulary": [
      { "word": "competent", "type": "adj.", "meaning": "có năng lực/giỏi" }
    ]
  },
  {
    "id": "q1368",
    "question": "The manager wants to know ------- might be willing to work over the weekend.",
    "options": { "A": "whom", "B": "who", "C": "how", "D": "those" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' đóng vai trò chủ ngữ trong mệnh đề danh ngữ sau 'know'.",
    "explanation_grammar": "Noun Clause (Who).",
    "translation": "Quản lý muốn biết ai có thể sẵn lòng làm việc vào cuối tuần.",
    "core_vocabulary": [
      { "word": "willing", "type": "adj.", "meaning": "sẵn lòng" }
    ]
  },
  {
    "id": "q1369",
    "question": "The photographer ------- image is selected for this year's magazine cover will be given a cash prize of $10,000.",
    "options": { "A": "whose", "B": "whoever", "C": "that", "D": "when" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whose' thay thế cho tính từ sở hữu của danh từ chỉ người 'photographer'.",
    "explanation_grammar": "Relative Pronoun (Possessive).",
    "translation": "Nhiếp ảnh gia có hình ảnh được chọn cho trang bìa tạp chí năm nay sẽ được trao giải thưởng tiền mặt trị giá 10.000 đô la.",
    "core_vocabulary": [
      { "word": "magazine cover", "type": "n.", "meaning": "trang bìa tạp chí" },
      { "word": "cash prize", "type": "n.", "meaning": "giải thưởng tiền mặt" }
    ]
  },
  {
    "id": "q1370",
    "question": "The book can give you tips on how to care for ------- plants you have.",
    "options": { "A": "whoever", "B": "where", "C": "which", "D": "whichever" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whichever' (bất cứ cái nào) nhấn mạnh sự lựa chọn không giới hạn.",
    "explanation_grammar": "Compound Relative Pronoun.",
    "translation": "Cuốn sách có thể cung cấp cho bạn các mẹo về cách chăm sóc bất kỳ loại cây nào bạn có.",
    "core_vocabulary": [
      { "word": "care for", "type": "v.", "meaning": "chăm sóc" }
    ]
  },
  {
    "id": "q1371",
    "question": "Guests are asked to pay with checks ------- are made out to Enterprise Seminars.",
    "options": { "A": "whose", "B": "who", "C": "that", "D": "what" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'That' thay thế cho danh từ chỉ vật 'checks' làm chủ ngữ trong mệnh đề quan hệ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Khách được yêu cầu thanh toán bằng séc được viết cho Enterprise Seminars.",
    "core_vocabulary": [
      { "word": "check", "type": "n.", "meaning": "séc/hóa đơn" },
      { "word": "make out to", "type": "v.", "meaning": "viết (séc) cho ai" }
    ]
  },
  {
    "id": "q1372",
    "question": "Laura Baker is in charge of instructing the new intern, ------- will be employed this summer.",
    "options": { "A": "one", "B": "which", "C": "that", "D": "who" },
    "correct_answer": "D",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'intern' trong mệnh đề quan hệ không giới hạn (có dấu phẩy).",
    "explanation_grammar": "Non-restrictive Relative Clause.",
    "translation": "Laura Baker chịu trách nhiệm hướng dẫn thực tập sinh mới, người sẽ được tuyển dụng vào mùa hè này.",
    "core_vocabulary": [
      { "word": "in charge of", "type": "adj.", "meaning": "chịu trách nhiệm" },
      { "word": "instruct", "type": "v.", "meaning": "hướng dẫn" }
    ]
  },
  {
    "id": "q1373",
    "question": "The majority of Anniston's citizens consider the city a great place in ------- to work and to raise a family.",
    "options": { "A": "what", "B": "which", "C": "whose", "D": "where" },
    "correct_answer": "B",
    "grammar_type": "MĐQH",
    "explanation_reason": "Cấu trúc 'preposition + which'. 'In which' thay thế cho 'where' chỉ nơi chốn.",
    "explanation_grammar": "Preposition + Relative Pronoun.",
    "translation": "Đa số người dân Anniston coi thành phố này là một nơi tuyệt vời để làm việc và nuôi dạy gia đình.",
    "core_vocabulary": [
      { "word": "majority", "type": "n.", "meaning": "đa số" },
      { "word": "citizen", "type": "n.", "meaning": "công dân/người dân" }
    ]
  },
  {
    "id": "q1374",
    "question": "Mr. Green is the man who will determine ------- proposal will be selected at the end of the month.",
    "options": { "A": "whoever", "B": "who", "C": "whose", "D": "whom" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whose' dùng để hỏi hoặc chỉ sự sở hữu đối với danh từ đi kèm ('whose proposal').",
    "explanation_grammar": "Determinative Whose.",
    "translation": "Ông Green là người sẽ quyết định đề xuất của ai sẽ được chọn vào cuối tháng.",
    "core_vocabulary": [
      { "word": "determine", "type": "v.", "meaning": "quyết định/xác định" },
      { "word": "proposal", "type": "n.", "meaning": "đề xuất" }
    ]
  },
  {
    "id": "q1375",
    "question": "The Mason Corporation, ------- is located downtown, is considering moving its offices to the suburbs because most of its employees and clients live there.",
    "options": { "A": "when", "B": "where", "C": "which", "D": "who" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Which' thay thế cho danh từ chỉ vật/tổ chức 'Mason Corporation' trong mệnh đề quan hệ không giới hạn.",
    "explanation_grammar": "Non-restrictive Relative Clause.",
    "translation": "Tập đoàn Mason, nằm ở trung tâm thành phố, đang xem xét việc chuyển văn phòng ra vùng ngoại ô vì hầu hết nhân viên và khách hàng của họ sống ở đó.",
    "core_vocabulary": [
      { "word": "located", "type": "adj.", "meaning": "nằm ở/tọa lạc" },
      { "word": "suburb", "type": "n.", "meaning": "vùng ngoại ô" }
    ]
  },
  {
    "id": "q1376",
    "question": "The technology stock bought by Ms. Perkins last year was an investment ------- rose in value by over seventy-five percent.",
    "options": { "A": "they", "B": "what", "C": "that", "D": "when" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'That' thay thế cho danh từ chỉ vật 'investment' làm chủ ngữ trong mệnh đề quan hệ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Cổ phiếu công nghệ mà bà Perkins mua năm ngoái là một khoản đầu tư đã tăng giá trị hơn bảy mươi lăm phần trăm.",
    "core_vocabulary": [
      { "word": "investment", "type": "n.", "meaning": "khoản đầu tư" },
      { "word": "rise in value", "type": "v.", "meaning": "tăng giá trị" }
    ]
  },
  {
    "id": "q1377",
    "question": "I need you to provide me with the names of all staff members ----- are asking for internal transfers to our overseas divisions.",
    "options": { "A": "whom", "B": "whose", "C": "who", "D": "when" },
    "correct_answer": "C",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'staff members' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Tôi cần bạn cung cấp cho tôi tên của tất cả các nhân viên đang yêu cầu thuyên chuyển nội bộ sang các bộ phận ở nước ngoài của chúng ta.",
    "core_vocabulary": [
      { "word": "internal transfer", "type": "n.", "meaning": "thuyên chuyển nội bộ" },
      { "word": "overseas division", "type": "n.", "meaning": "bộ phận nước ngoài" }
    ]
  },
  {
    "id": "q1378",
    "question": "Darren Maas, ------- latest book was published in February, has given up his office job to become a fulltime writer.",
    "options": { "A": "whose", "B": "what", "C": "whatever", "D": "whom" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whose' thay thế cho tính từ sở hữu của 'Darren Maas'.",
    "explanation_grammar": "Relative Pronoun (Possessive).",
    "translation": "Darren Maas, người có cuốn sách mới nhất được xuất bản vào tháng Hai, đã từ bỏ công việc văn phòng của mình để trở thành một nhà văn toàn thời gian.",
    "core_vocabulary": [
      { "word": "publish", "type": "v.", "meaning": "xuất bản" }
    ]
  },
  {
    "id": "q1379",
    "question": "Customers --------- purchase four paperbacks may receive another lower-priced paperback for free.",
    "options": { "A": "who", "B": "whose", "C": "whomever", "D": "whom" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Who' thay thế cho danh từ chỉ người 'Customers' làm chủ ngữ.",
    "explanation_grammar": "Relative Pronoun (Subject).",
    "translation": "Khách hàng mua bốn cuốn sách bìa mềm có thể nhận thêm một cuốn sách bìa mềm khác có giá thấp hơn miễn phí.",
    "core_vocabulary": [
      { "word": "paperback", "type": "n.", "meaning": "sách bìa mềm" }
    ]
  },
  {
    "id": "q1380",
    "question": "------- is interested in the workshop should sign up at the front desk.",
    "options": { "A": "Whoever", "B": "Anyone", "C": "Those", "D": "Whom" },
    "correct_answer": "A",
    "grammar_type": "MĐQH",
    "explanation_reason": "'Whoever' (= Anyone who) làm chủ ngữ trong câu, bao hàm cả tiền ngữ và đại từ quan hệ.",
    "explanation_grammar": "Compound Relative Pronoun as Subject.",
    "translation": "Bất cứ ai quan tâm đến buổi hội thảo nên đăng ký tại quầy lễ tân.",
    "core_vocabulary": [
      { "word": "sign up", "type": "v.", "meaning": "đăng ký" }
    ]
  }
];

const dataPath = 'c:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js';
let content = fs.readFileSync(dataPath, 'utf8');

const insertionIndex = content.lastIndexOf('];');
if (insertionIndex !== -1) {
  const jsonString = questions.map(q => JSON.stringify(q, null, 2)).join(',\n');
  const updatedContent = content.slice(0, insertionIndex).trim() + ',\n' + jsonString + '\n];';
  fs.writeFileSync(dataPath, updatedContent, 'utf8');
  console.log('Successfully appended 20 questions for MĐQH Test 3.');
} else {
  console.error('Could not find end of array in questions.js');
}
