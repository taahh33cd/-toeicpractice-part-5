const fs = require('fs');
let code = fs.readFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'utf8');
code = code.replace('window.questionsData =', 'global.questionsData =');
eval(code);

const nq = [
  {
    "id": "q211",
    "question": "Ms. Pham requested a refund ______ the coffeemaker she received was damaged.",
    "options": { "A": "because", "B": "why", "C": "despite", "D": "concerning" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "Bà Phạm đòi hoàn tiền 'bởi vì' máy pha cà phê bị hỏng. Cấu trúc liên từ chỉ nguyên nhân.",
    "explanation_grammar": "Because + Clause (vì điều gì xảy ra nên...).",
    "translation": "Bà Phạm đã yêu cầu hoàn tiền lại bởi vì cái máy pha cà phê bà ấy nhận được đã bị hỏng.",
    "core_vocabulary": [{"word": "refund", "type": "n.", "meaning": "sự hoàn tiền"}, {"word": "coffeemaker", "type": "n.", "meaning": "máy pha cà phê"}]
  },
  {
    "id": "q212",
    "question": "______ space in the bathroom was limited, the contractor managed to fit in two sinks and a shower.",
    "options": { "A": "Whether", "B": "Both", "C": "Even though", "D": "So that" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "Mang nghĩa nhượng bộ. Mặc dù không gian hẹp nhưng vẫn nhét được 2 bồn rửa.",
    "explanation_grammar": "Even though + Clause (mặc dù thế này... nhưng vẫn thế kia...)",
    "translation": "Mặc dù không gian trong phòng tắm khá chật hẹp, nhưng nhà thầu vẫn xoay sở lắp vừa được hai cái bồn rửa và một vòi hoa sen.",
    "core_vocabulary": [{"word": "manage to", "type": "v.", "meaning": "xoay sở vọc vạch để làm được việc gì"}, {"word": "contractor", "type": "n.", "meaning": "nhà thầu"}]
  },
  {
    "id": "q213",
    "question": "______ Mr. Donovan had expected the charity event to be a success, the response from the community still overwhelmed him.",
    "options": { "A": "Even so", "B": "Though", "C": "Although", "D": "Whenever" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "Dùng 'Although' (Mặc dù) diễn tả sự nhượng bộ. Cả 'Though' và 'Although' đều được nhưng 'Although' thiên về trang trọng và thường đặt ở đầu câu.",
    "explanation_grammar": "Although + Clause (Mặc dù...).",
    "translation": "Mặc dù ông Donovan đã dự đoán sự kiện từ thiện sẽ là một thành công, nhưng sự hưởng ứng từ cộng đồng vẫn làm ông ấy bị choáng ngợp.",
    "core_vocabulary": [{"word": "overwhelm", "type": "v.", "meaning": "áp đảo, làm choáng ngợp"}]
  },
  {
    "id": "q214",
    "question": "The quality assurance department needs to hire additional staff ______ production has increased by 50 percent.",
    "options": { "A": "even though", "B": "therefore", "C": "because of", "D": "since" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Since' ngoài nghĩa 'kể từ khi' thì khi nối 2 mệnh đề còn mang nghĩa 'Bởi vì'. Nhu cầu thuê nhân viên TĂNG là VÌ sản xuất tăng 50%.",
    "explanation_grammar": "Since/Because/As + mệnh đề nguyên nhân.",
    "translation": "Bộ phận đảm bảo chất lượng cần phải thuê thêm nhân viên bởi vì sản lượng đã tăng lên đến 50 phần trăm.",
    "core_vocabulary": [{"word": "quality assurance", "type": "n.", "meaning": "đảm bảo chất lượng"}]
  },
  {
    "id": "q215",
    "question": "Ms. Rivera agreed to work on the holiday ______ Mr. Grant could attend the conference.",
    "options": { "A": "considering", "B": "wherever", "C": "as if", "D": "so that" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "Sở dĩ đi làm vào ngày nghỉ lễ ĐỂ MÀ (so that) ông Grant có thể tham dự hội nghị. Đây là cấu trúc chỉ mục đích.",
    "explanation_grammar": "So that/in order that + Clause (để... / nhằm mục đích...).",
    "translation": "Bà Rivera đã đồng ý đi làm vào ngày nghỉ lễ để mà ông Grant có thể tham dự được hội nghị.",
    "core_vocabulary": [{"word": "so that", "type": "conj.", "meaning": "để mà"}]
  },
  {
    "id": "q216",
    "question": "The proposal for the Seascape project will be ready tomorrow ______ we receive the budget analysis today.",
    "options": { "A": "as long as", "B": "expecting", "C": "unlike", "D": "if not" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'As long as' = 'miễn là'. Đặt điều kiện: miễn là nhận được báo cáo ngân sách hôm nay thì ngày mai có bản kế hoạch.",
    "explanation_grammar": "As/ So long as + Mệnh đề điều kiện.",
    "translation": "Bản đề xuất cho dự án Seascape sẽ sẵn sàng vào ngày mai miễn là chúng tôi nhận được bản phân tích ngân sách trong hôm nay.",
    "core_vocabulary": [{"word": "budget analysis", "type": "n.", "meaning": "bản phân tích ngân sách"}]
  },
  {
    "id": "q217",
    "question": "______ he is now retired, Mr. Matilia is able to pursue his hobby of woodworking.",
    "options": { "A": "Therefore", "B": "Because", "C": "During", "D": "When" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "Có nhiều thời gian để theo đuổi sở thích là BỞI VÌ đã nghỉ hưu (Because).",
    "explanation_grammar": "Because + mệnh đề.",
    "translation": "Bởi vì hiện nay ông ấy đã nghỉ hưu, nên ông Matilia có thể theo đuổi sở thích làm nghề mộc của mình.",
    "core_vocabulary": [{"word": "pursue", "type": "v.", "meaning": "theo đuổi"}]
  },
  {
    "id": "q218",
    "question": "______ it does not rain tomorrow, tents will be set up for any scheduled outdoor events.",
    "options": { "A": "Even if", "B": "Besides that", "C": "Though", "D": "Almost" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "Ta cần một cấu trúc giả định phòng ngừa: THẬM CHÍ NẾU (cho dù) ngày mai trời không mưa, lều bạt vẫn sẽ được dựng lên.",
    "explanation_grammar": "Even if + Condition clause (Dẫu cho...).",
    "translation": "Thậm chí nếu như ngày mai trời không hề mưa, thì những chiếc lều vẫn sẽ được dựng lên để đối phó chuẩn bị cho bất kỳ sự kiện ngoài trời nào theo như lịch trình.",
    "core_vocabulary": [{"word": "even if", "type": "conj.", "meaning": "thậm chí nếu, dẫu cho"}]
  },
  {
    "id": "q219",
    "question": "______ the final award had been presented, Ms. Ryu acknowledged the support of the event's sponsors.",
    "options": { "A": "Then", "B": "After", "C": "Next", "D": "During" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "Thì quá khứ hoàn thành (had been presented) thể hiện hành động diễn ra và kết thúc TRƯỚC việc bà Ryu nói lời tri ân (quá khứ đơn - acknowledged). Dùng After (sau khi xong A, làm tiếp B).",
    "explanation_grammar": "After + Past Perfect Clause (Hành động chốt hoàn tất trước ở trong quá khứ).",
    "translation": "Sau khi giải thưởng cuối cùng đã được trao thưởng xong xuôi, bà Ryu mới cất lời tri ân sự hỗ trợ của các nhà tài trợ sự kiện.",
    "core_vocabulary": [{"word": "acknowledge", "type": "v.", "meaning": "công nhận, ghi nhận tri ân"}]
  },
  {
    "id": "q220",
    "question": "We will pay your insurance claim ______ we receive the official damage report.",
    "options": { "A": "like", "B": "except", "C": "once", "D": "since" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "Bồi thường MỘT KHI nhận được báo cáo hỏng hóc. 'Once' nối mệnh đề điều kiện mang nghĩa một khi.",
    "explanation_grammar": "Once + Clause (có vai trò tương tự as soon as / when).",
    "translation": "Chúng tôi sẽ chi trả khoản bồi thường bảo hiểm cho bạn một khi chúng tôi nhận được báo cáo thiệt hại chính thức.",
    "core_vocabulary": [{"word": "claim", "type": "n.", "meaning": "sự khiếu nại bồi thường"}]
  },
  {
    "id": "q221",
    "question": "RBN Bank's headquarters is located in Wales, ______ it has other branches throughout the United Kingdom.",
    "options": { "A": "than", "B": "after", "C": "but", "D": "so" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "Sử dụng 'but' để thể hiện sự đối lập: Trụ sở tại Wales NHƯNG vẫn có các chi nhánh khác trải rộng.",
    "explanation_grammar": "But nối hai mệnh đề độc lập.",
    "translation": "Trụ sở chính của Ngân hàng RBN được thu lại nằm ở xứ Wales, nhưng nó lại có dàn vòi chi nhánh mọc lên xuyên khắp Liên hiệp Vương quốc Anh.",
    "core_vocabulary": [{"word": "headquarters", "type": "n.", "meaning": "đại bản doanh/trụ sở chính"}]
  },
  {
    "id": "q222",
    "question": "______ the package is labeled correctly, Harris Mailers cannot guarantee its arrival date.",
    "options": { "A": "Without", "B": "Unless", "C": "In case of", "D": "Otherwise" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "Unless có nghĩa bằng với lF NOT (Nếu không). Tức là nếu kiện hàng không được dán đúng nhãn, họ sẽ không chịu trách nhiệm bảo đảm ngày tới.",
    "explanation_grammar": "Unless + Mệnh đề Khẳng định = If + Mệnh đề Phủ Định.",
    "translation": "TRỪ KHI kiện hàng được dán nhãn ghi mác một cách cẩn trọng chuẩn chỉ, bằng không thì Hãng gửi bưu phẩm Harris Mailers sẽ không đời nào chịu trách nhiệm bảo đảm ngày tới nơi của nó đâu.",
    "core_vocabulary": [{"word": "unless", "type": "conj.", "meaning": "nếu không / trừ khi"}]
  },
  {
    "id": "q223",
    "question": "Homeowners can save money ______ they replace their heaters with our super-efficient TD Ultra.",
    "options": { "A": "which", "B": "even", "C": "unlike", "D": "when" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "Sự việc sẽ xảy ra khi một điều kiện khác diễn ra. 'When' (Khi mà) nối hai mệnh đề cực chuẩn nghĩa.",
    "explanation_grammar": "When + clause.",
    "translation": "Chủ nhà có thể bắt đầu tiết kiệm được một lượng tiền kha khá KHI MÀ họ thay thế dàn máy lò sưởi nhiệt của họ bằng dòng máy lò sưởi siêu cấp vô địch tiết kiệm nhiên liệu TD Ultra của chúng tôi.",
    "core_vocabulary": [{"word": "super-efficient", "type": "adj.", "meaning": "siêu tiết kiệm năng lượng / hiệu suất vượt trội"}]
  },
  {
    "id": "q224",
    "question": "Parkano Boutique expanded its store hours ______ it can remain competitive with other local businesses.",
    "options": { "A": "so that", "B": "as well as", "C": "besides", "D": "whenever" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "Mở rộng giờ nhằm MỤC ĐÍCH 'để có thể duy trì được tính cạnh tranh'. Cấu trúc chỉ mục đích.",
    "explanation_grammar": "So that/ In order that + Mệnh đề thể hiện mục đích.",
    "translation": "Boutique Parkano đã quyết tâm nới lỏng kéo giãn ra thêm giờ mở cửa làm việc mỗi ngày ĐỂ MÀ nó có thể bĩu môi mà cạnh tranh gồng sức được với các hộ kinh doanh địa phương khác chung quanh vùng.",
    "core_vocabulary": [{"word": "so that", "type": "conj.", "meaning": "cốt để mà"}, {"word": "competitive", "type": "adj.", "meaning": "có sức mạnh cạnh tranh"}]
  },
  {
    "id": "q225",
    "question": "The management requests ______ all drivers submit their third-quarter fuel receipts by 5 P.M. on October 30.",
    "options": { "A": "which", "B": "that", "C": "if", "D": "or" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "Đứng sau một động từ mang nghĩa Tường Thuật/Yêu Cầu (như request, ask) thì cần liên từ 'that' (như thế nào/rằng) để mở ra nối tiếp ý phụ.",
    "explanation_grammar": "Verb tường thuật + that + Clause.",
    "translation": "Khu bộ phận quản trị yêu cầu RẰNG tất cả mọi bác tài nên mau tự giác mà gửi nộp biên lai phiếu đổ xăng dầu quý 3 vào trước đợt cữ 5 giờ trưa ngày 30 tháng 10.",
    "core_vocabulary": [{"word": "request that", "type": "phr.", "meaning": "yêu cầu rằng/đòi hỏi rằng"}]
  },
  {
    "id": "q226",
    "question": "Ms. Murai prefers that managers attend ______ the meeting in March and the workshop in April.",
    "options": { "A": "either", "B": "both", "C": "either", "D": "nor" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "Gặp lại cặp bài trùng, vế sau có nhúng chữ 'and', điền ngay chữ 'both' để chặp đủ nhịp tạo thành cặp liên từ 'Both... and...'. Điệu này là ẵm trọn CẢ A LẪN B.",
    "explanation_grammar": "Both ... and ... (Cả ... lẫn ...).",
    "translation": "Bà Murai có vẻ nghiêng ưng thuận muốn các bác quản lý sếp cần phải ló mặt tham dự CẢ hai buổi họp trong tháng Ba VÀ THÊM CẢ cái workshop huấn luyện trong tháng Tư.",
    "core_vocabulary": [{"word": "workshop", "type": "n.", "meaning": "hội thảo thao luyện kỹ năng nhóm"}]
  },
  {
    "id": "q227",
    "question": "The career development seminars are open to both part-time ______ full-time employees.",
    "options": { "A": "not", "B": "and", "C": "or", "D": "to" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "Hàng câu này lật ngược lại chút y như câu 226 bên trên. Vế đầu cho chữ 'Both', vế sau điền 'and'. Không trật đường ray đi đâu được.",
    "explanation_grammar": "Both + A + and + B.",
    "translation": "Các buổi hội thảo phát triển lộ trình sự nghiệp được tạo ra ban ân dành ráo trọi cho CẢ 2 bên là đám lính làm xoay ca (part-time) VÀ cả phe nhân viên làm toàn thời gian (full-time).",
    "core_vocabulary": [{"word": "both A and B", "type": "phr.", "meaning": "ôm trọn cả A với B"}]
  },
  {
    "id": "q228",
    "question": "Your order is about to be shipped ______ can be canceled up until 2 P.M. today.",
    "options": { "A": "still", "B": "but", "C": "although", "D": "however" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "Liên từ 'but' đóng chức năng nối 2 cụm động từ đối nghịch. Sắp bị bốc đi giao NHƯNG có lúc vẫn có thể bị bạn làm lệnh huỷ ngay được trót lọt.",
    "explanation_grammar": "But nối từ hai vế đẳng lập (verb-verb / phrase-phrase).",
    "translation": "Mẫu lệnh đơn hàng đặt phôi của ngài đây thì dạo chuẩn bị được phái xe chở giao đến mốc rồi NHƯNG thật ra thì nó vẫn nhọc nhõn còn có thể bị hoãn nhịp dừng hủy bỏ thao tác cho đến hạn giờ khung giờ tròn nhịp 2 P.M. chiều ngày hôm nay.",
    "core_vocabulary": [{"word": "be about to", "type": "phr.", "meaning": "sắp sửa/ chuẩn bị tới bến"}]
  },
  {
    "id": "q229",
    "question": "Ms. Jung has suggested that ______ Mr. Tesler or Ms. Sato attend the conference next month.",
    "options": { "A": "both", "B": "either", "C": "as", "D": "neither" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "Gặp lại anh bạn 'OR' bên kia vế, điền chữ 'Either' để chốt trọn liên từ đẳng lập Hoặc Một Trong Hai ('hoặc là a, hoặc là b').",
    "explanation_grammar": "Either X or Y.",
    "translation": "Bà Jung đã lên tiếng mớm sườn đề xuất là HOẶC nỏ cha nội Mr. Tesler HOẶC nỏ thì bà thím Ms. Sato ắt nên tham trẩy trọn cái hội nghị mâm khánh thành diễn vào dịp tháng sau.",
    "core_vocabulary": [{"word": "suggest", "type": "v.", "meaning": "tiến cử đề xướng gợi mớm ý"}]
  },
  {
    "id": "q230",
    "question": "______ the conference began, MOSA President Yolanda Gris announced the schedule of speakers.",
    "options": { "A": "Since", "B": "During", "C": "Before", "D": "Still" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "Việc công bố lịch diễn người đọc bài phát biểu nên đặt ở TRƯỚC (Before) khoảnh khắc hội nghị bắt đầu chạy (began).",
    "explanation_grammar": "Before + Mệnh đề chỉ mốc thời gian diễn ra sau.",
    "translation": "Lùi lùi TRƯỚC khi cái hội nghị này kịp nổ súng chóp phát trào bắt đầu chạy, Tổng thư bục MOSA vị là bà Yolanda Gris đã oang mõm ra đọc thông lệnh loan báo danh sách trình người phát ngôn.",
    "core_vocabulary": [{"word": "announce", "type": "v.", "meaning": "thông cáo tấu thông báo phát ngôn"}]
  }
];

global.questionsData = global.questionsData.concat(nq);

fs.writeFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'window.questionsData = ' + JSON.stringify(global.questionsData, null, 2) + ';');
