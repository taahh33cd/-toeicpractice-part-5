const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "id": "q1216",
    "question": "The Pentular desk cannot be shipped ______ a purchase order is signed by the manager.",
    "options": {
      "A": "unless",
      "B": "without",
      "C": "neither",
      "D": "despite"
    },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "Liên từ 'unless' (trừ khi) dùng để chỉ một điều kiện cần thiết để hành động chính xảy ra.",
    "explanation_grammar": "Conditional Conjunction (Unless).",
    "translation": "Bàn Pentular không thể được vận chuyển trừ khi đơn đặt hàng được ký bởi người quản lý.",
    "core_vocabulary": [
      { "word": "purchase order", "type": "n.phr.", "meaning": "đơn đặt hàng" },
      { "word": "shipped", "type": "v.pp", "meaning": "được vận chuyển" }
    ]
  },
  {
    "id": "q1217",
    "question": "We will begin processing Mr. Vallejo's loan application ______ we receive the supporting documents.",
    "options": {
      "A": "once",
      "B": "still",
      "C": "just",
      "D": "upon"
    },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "Liên từ 'once' (ngay khi) chỉ một thời điểm mà một hành động khác sẽ bắt đầu.",
    "explanation_grammar": "Temporal Conjunction (Once).",
    "translation": "Chúng tôi sẽ bắt đầu xử lý đơn xin vay vốn của ông Vallejo ngay khi chúng tôi nhận được các tài liệu hỗ trợ.",
    "core_vocabulary": [
      { "word": "loan application", "type": "n.phr.", "meaning": "đơn xin vay vốn" },
      { "word": "supporting documents", "type": "n.phr.", "meaning": "tài liệu hỗ trợ" }
    ]
  },
  {
    "id": "q1218",
    "question": "______ labor costs were significantly lower last quarter, Enex, Inc., still failed to show a profit.",
    "options": {
      "A": "Even though",
      "B": "Therefore",
      "C": "In light of",
      "D": "Nevertheless"
    },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "Liên từ 'Even though' (mặc dù) dùng để kết nối hai mệnh đề có sự tương phản.",
    "explanation_grammar": "Concessive Conjunction (Even though).",
    "translation": "Mặc dù chi phí nhân công thấp hơn đáng kể trong quý trước, Enex, Inc. vẫn không thể có lãi.",
    "core_vocabulary": [
      { "word": "labor cost", "type": "n.phr.", "meaning": "chi phí nhân công" },
      { "word": "significantly", "type": "adv.", "meaning": "đáng kể" },
      { "word": "profit", "type": "n.", "meaning": "lợi nhuận" }
    ]
  },
  {
    "id": "q1219",
    "question": "Physical files older than one year should be put in boxes ______ they can be moved to the storage facility.",
    "options": {
      "A": "contrary to",
      "B": "if so",
      "C": "so that",
      "D": "because of"
    },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "Liên từ 'so that' (để mà) dùng để chỉ mục đích của hành động phía trước.",
    "explanation_grammar": "Purpose Conjunction (So that).",
    "translation": "Các hồ sơ vật lý cũ hơn một năm nên được cho vào hộp để chúng có thể được chuyển đến cơ sở lưu trữ.",
    "core_vocabulary": [
      { "word": "storage facility", "type": "n.phr.", "meaning": "cơ sở lưu trữ" }
    ]
  },
  {
    "id": "q1220",
    "question": "Cosima's Grocery offers customers practical cooking tips ______ they can make the most of the foods they purchase.",
    "options": {
      "A": "in addition",
      "B": "so that",
      "C": "just as",
      "D": "in case"
    },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "Liên từ 'so that' dùng để chỉ mục đích phía sau.",
    "explanation_grammar": "Purpose Conjunction (So that).",
    "translation": "Cửa hàng tạp hóa Cosima cung cấp cho khách hàng những mẹo nấu ăn thực tế để họ có thể tận dụng tối đa các loại thực phẩm mình mua.",
    "core_vocabulary": [
      { "word": "make the most of", "type": "v.phr.", "meaning": "tận dụng tối đa" },
      { "word": "cooking tips", "type": "n.phr.", "meaning": "mẹo nấu ăn" }
    ]
  },
  {
    "id": "q1221",
    "question": "The personnel department revised the vacation policy ______ many employees found the old version confusing.",
    "options": {
      "A": "unless",
      "B": "until",
      "C": "because",
      "D": "thus"
    },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "Liên từ 'because' (bởi vì) dẫn đầu mệnh đề nguyên nhân.",
    "explanation_grammar": "Causal Conjunction (Because).",
    "translation": "Phòng nhân sự đã sửa lại chính sách nghỉ phép vì nhiều nhân viên thấy phiên bản cũ gây nhầm lẫn.",
    "core_vocabulary": [
      { "word": "revised", "type": "v.pp/adj.", "meaning": "đã được sửa đổi" },
      { "word": "personnel department", "type": "n.phr.", "meaning": "phòng nhân sự" }
    ]
  },
  {
    "id": "q1222",
    "question": "Varangia Marketing Services has become a leader in corporate advertising, ______ they have only been in business for four years.",
    "options": {
      "A": "instead",
      "B": "before",
      "C": "owing to",
      "D": "even though"
    },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "Dùng 'even though' để chỉ sự tương phản bất ngờ giữa hai mệnh đề.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Varangia Marketing Services đã trở thành công ty đi đầu trong lĩnh vực quảng cáo doanh nghiệp, mặc dù họ mới chỉ hoạt động được bốn năm.",
    "core_vocabulary": [
      { "word": "corporate advertising", "type": "n.phr.", "meaning": "quảng cáo doanh nghiệp" }
    ]
  },
  {
    "id": "q1223",
    "question": "Tenants may play musical instruments ______ the music does not disturb other residents in the building.",
    "options": {
      "A": "such as",
      "B": "in case of",
      "C": "provided that",
      "D": "owing to"
    },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "Liên từ 'provided that' (với điều kiện là) chỉ một điều kiện bắt buộc.",
    "explanation_grammar": "Conditional Conjunction (Provided that).",
    "translation": "Người thuê nhà có thể chơi các nhạc cụ với điều kiện là âm nhạc không làm phiền những cư dân khác trong tòa nhà.",
    "core_vocabulary": [
      { "word": "tenant", "type": "n.", "meaning": "người thuê nhà" },
      { "word": "disturb", "type": "v.", "meaning": "làm phiền" }
    ]
  },
  {
    "id": "q1224",
    "question": "Carpet cleaning is scheduled for this weekend, so please remove any items from the floor of your office ______ you leave today.",
    "options": {
      "A": "but",
      "B": "where",
      "C": "before",
      "D": "upon"
    },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "Liên từ 'before' chỉ trình tự thời gian.",
    "explanation_grammar": "Temporal Conjunction.",
    "translation": "Việc dọn dẹp thảm đã được lên lịch vào cuối tuần này, vì vậy vui lòng dọn dẹp các đồ vật khỏi sàn văn phòng trước khi bạn về vào hôm nay.",
    "core_vocabulary": [
      { "word": "scheduled", "type": "v.pp/adj.", "meaning": "đã được lên lịch" }
    ]
  },
  {
    "id": "q1225",
    "question": "______ he arrives at the airport in the next ten minutes, Mr. Santini is going to have to take a later flight.",
    "options": {
      "A": "Unless",
      "B": "Regardless",
      "C": "While",
      "D": "Rather"
    },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "Dùng 'Unless' (trừ khi) để chỉ điều kiện phủ định: 'Trừ khi ông ấy đến trong 10 phút nữa (nếu không ông ấy sẽ trễ)'.",
    "explanation_grammar": "Negative Condition (Unless).",
    "translation": "Trừ khi ông ấy đến sân bay trong mười phút nữa, ông Santini sẽ phải đi chuyến bay muộn hơn.",
    "core_vocabulary": []
  },
  {
    "id": "q1226",
    "question": "Ms. Charisse is taking on a new account ______ she finishes the Morrison project.",
    "options": {
      "A": "going",
      "B": "after",
      "C": "with",
      "D": "between"
    },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "Liên từ 'after' (sau khi) chỉ trình tự các dự án.",
    "explanation_grammar": "Temporal Conjunction.",
    "translation": "Bà Charisse sẽ tiếp nhận một tài khoản khách hàng mới sau khi bà hoàn thành dự án Morrison.",
    "core_vocabulary": [
      { "word": "taking on", "type": "v.phr.", "meaning": "đảm nhận, tiếp nhận" }
    ]
  },
  {
    "id": "q1227",
    "question": "Remember to submit receipts for reimbursement ______ returning from a business trip.",
    "options": {
      "A": "within",
      "B": "when",
      "C": "such as",
      "D": "then"
    },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "Dùng 'when' trước một V-ing rút gọn khi hai vế cùng chủ ngữ.",
    "explanation_grammar": "Conjunction (When + V-ing).",
    "translation": "Hãy nhớ nộp biên lai để được hoàn tiền khi bạn trở về sau chuyến công tác.",
    "core_vocabulary": [
      { "word": "reimbursement", "type": "n.", "meaning": "sự hoàn tiền, bồi hoàn" }
    ]
  },
  {
    "id": "q1228",
    "question": "______ your order is being processed, please call customer service with any questions.",
    "options": {
      "A": "While",
      "B": "Still",
      "C": "Also",
      "D": "Either"
    },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "Liên từ 'While' chỉ một khoảng thời gian hành động diễn ra đồng thời.",
    "explanation_grammar": "Temporal Conjunction.",
    "translation": "Trong khi đơn hàng của bạn đang được xử lý, vui lòng gọi cho bộ phận dịch vụ khách hàng nếu có bất kỳ câu hỏi nào.",
    "core_vocabulary": [
      { "word": "processed", "type": "v.pp", "meaning": "được xử lý" }
    ]
  },
  {
    "id": "q1229",
    "question": "Ms. Sampson will not arrive at the Convention ______ after our team's presentation.",
    "options": {
      "A": "until",
      "B": "from",
      "C": "when",
      "D": "lately"
    },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "Cấu trúc 'not... until' (phải đến khi... mới).",
    "explanation_grammar": "Temporal Conjunction/Phrase.",
    "translation": "Bà Sampson sẽ không đến Hội nghị cho đến tận sau bài thuyết trình của nhóm chúng tôi.",
    "core_vocabulary": [
      { "word": "convention", "type": "n.", "meaning": "hội nghị" }
    ]
  },
  {
    "id": "q1230",
    "question": "We hired Okafor Construction to do the Renovation ______ it was not the lowest bidder on the project.",
    "options": {
      "A": "if only",
      "B": "even though",
      "C": "whereas",
      "D": "alternatively"
    },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "Liên từ 'even though' chỉ sự nhượng bộ/tương phản giữa chất lượng và giá thầu.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Chúng tôi đã thuê Okafor Construction để thực hiện việc cải tạo mặc dù họ không phải là bên đấu giá thấp nhất cho dự án.",
    "core_vocabulary": [
      { "word": "bidder", "type": "n.", "meaning": "người đấu thầu" },
      { "word": "lowest", "type": "adj.sup", "meaning": "thấp nhất" }
    ]
  },
  {
    "id": "q1231",
    "question": "Our copy editors will review the manuscript ______ will not return it until the end of next week.",
    "options": {
      "A": "either",
      "B": "once",
      "C": "but",
      "D": "or"
    },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "Dùng 'but' để liên kết hai hành động tương phản về thời gian hoặc kết quả.",
    "explanation_grammar": "Coordinating Conjunction (But).",
    "translation": "Các biên tập viên bản thảo của chúng tôi sẽ xem xét bản thảo nhưng sẽ không gửi lại cho đến cuối tuần sau.",
    "core_vocabulary": [
      { "word": "manuscript", "type": "n.", "meaning": "bản thảo" },
      { "word": "copy editor", "type": "n.phr.", "meaning": "biên tập viên" }
    ]
  },
  {
    "id": "q1232",
    "question": "______ the organization has doubled its outreach efforts, it has yet to see an increase in new clients.",
    "options": {
      "A": "Therefore",
      "B": "Because",
      "C": "Until",
      "D": "Although"
    },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "Liên từ 'Although' (mặc dù) đứng đầu câu để chỉ sự tương phản.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Mặc dù tổ chức đã nỗ lực tiếp cận cộng đồng gấp đôi, nhưng vẫn chưa thấy sự gia tăng khách hàng mới.",
    "core_vocabulary": [
      { "word": "outreach", "type": "n.", "meaning": "tiếp cận cộng đồng" },
      { "word": "effort", "type": "n.", "meaning": "nỗ lực" }
    ]
  },
  {
    "id": "q1233",
    "question": "Please provide your phone number ______ the delivery driver needs to contact you.",
    "options": {
      "A": "despite",
      "B": "whereas",
      "C": "in case",
      "D": "if not"
    },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "Liên từ 'in case' (phòng khi) chỉ mục đích dự phòng.",
    "explanation_grammar": "Conjunction of Condition/Precaution.",
    "translation": "Vui lòng cung cấp số điện thoại của bạn phòng khi tài xế giao hàng cần liên hệ với bạn.",
    "core_vocabulary": [
      { "word": "delivery", "type": "n.", "meaning": "giao hàng" }
    ]
  },
  {
    "id": "q1234",
    "question": "The company's policy allows business travel by ______ train and airplane.",
    "options": {
      "A": "both",
      "B": "hardly",
      "C": "further",
      "D": "either"
    },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "Cấu trúc 'both A and B' (cả A và B).",
    "explanation_grammar": "Correlative Conjunction (Both...and).",
    "translation": "Chính sách của công ty cho phép đi công tác bằng cả tàu hỏa và máy bay.",
    "core_vocabulary": []
  },
  {
    "id": "q1235",
    "question": "The fund-raising event for the library was successful, ______ the author's reading was canceled.",
    "options": {
      "A": "secondly",
      "B": "though",
      "C": "seldom",
      "D": "rarely"
    },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "Liên từ 'though' (mặc dù) đứng sau dấu phẩy để chỉ sự tương phản.",
    "explanation_grammar": "Concessive Conjunction.",
    "translation": "Sự kiện gây quỹ cho thư viện đã thành công, mặc dù buổi đọc sách của tác giả đã bị hủy bỏ.",
    "core_vocabulary": [
      { "word": "fund-raising", "type": "n./adj.", "meaning": "gây quỹ" }
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
