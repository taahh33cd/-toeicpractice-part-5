const fs = require('fs');
let code = fs.readFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'utf8');
code = code.replace('window.questionsData =', 'global.questionsData =');
eval(code);

const nq = [
  {
    "id": "q91",
    "question": "Talk-Talk Cell Phone Company will soon be merging with its main ______.",
    "options": { "A": "competitively", "B": "competitor", "C": "competitive", "D": "competing" },
    "correct_answer": "B",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Sau tính từ 'main' (chính) cần một danh từ để tạo thành cụm danh từ làm tân ngữ cho giới từ 'with'. 'competitor' (đối thủ cạnh tranh) là danh từ phù hợp.",
    "explanation_grammar": "Tính từ (Adjective) + Danh từ (Noun).",
    "translation": "Công ty điện thoại di động Talk-Talk sẽ sớm hợp nhất với đối thủ cạnh tranh chính của nó.",
    "core_vocabulary": [{"word": "merge", "type": "v.", "meaning": "sát nhập, hợp nhất"}, {"word": "competitor", "type": "n.", "meaning": "đối thủ cạnh tranh"}]
  },
  {
    "id": "q92",
    "question": "A favorable report on the ______ of Seesom Eyewear convinced the partners to invest in the company.",
    "options": { "A": "profited", "B": "profitability", "C": "profitably", "D": "profitable" },
    "correct_answer": "B",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Vị trí nằm giữa mạo từ 'the' và giới từ 'of' luôn thuộc về một danh từ. 'profitability' (khả năng sinh lời) là đáp án danh từ duy nhất.",
    "explanation_grammar": "Cấu trúc the + Noun + of...",
    "translation": "Một báo cáo khả quan về khả năng sinh lời của Seesom Eyewear đã thuyết phục các đối tác đầu tư vào công ty.",
    "core_vocabulary": [{"word": "favorable", "type": "adj.", "meaning": "thuận lợi, khả quan"}, {"word": "profitability", "type": "n.", "meaning": "khả năng sinh lời"}]
  },
  {
    "id": "q93",
    "question": "The manager presented data on employee achievements with ______ on performance.",
    "options": { "A": "emphasis", "B": "emphasized", "C": "emphasize", "D": "emphatic" },
    "correct_answer": "A",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Khoảng trống cần một danh từ theo sau giới từ 'with' để tạo thành cụm từ 'with emphasis on' (với sự nhấn mạnh vào).",
    "explanation_grammar": "Danh từ đi sau giới từ (Preposition + Noun).",
    "translation": "Người quản lý đã trình bày dữ liệu về thành tích của nhân viên với sự nhấn mạnh vào hiệu suất.",
    "core_vocabulary": [{"word": "achievement", "type": "n.", "meaning": "thành tựu, thành tích"}, {"word": "emphasis", "type": "n.", "meaning": "sự nhấn mạnh"}]
  },
  {
    "id": "q94",
    "question": "Ms. Villanueva has extensive experience in corporate ______ and budgeting.",
    "options": { "A": "financial", "B": "financed", "C": "finance", "D": "financially" },
    "correct_answer": "C",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Từ cần điền kết hợp với 'corporate' tạo thành cụm danh từ đi sau giới từ 'in' (sóng đôi với danh từ 'budgeting' qua cấu trúc đẳng lập 'and'). 'finance' là danh từ (tài chính).",
    "explanation_grammar": "Cụm danh từ: corporate finance (tài chính doanh nghiệp).",
    "translation": "Cô Villanueva có nhiều kinh nghiệm trong lĩnh vực tài chính doanh nghiệp và lập ngân sách.",
    "core_vocabulary": [{"word": "extensive", "type": "adj.", "meaning": "rộng rãi, chuyên sâu"}, {"word": "finance", "type": "n.", "meaning": "tài chính"}]
  },
  {
    "id": "q95",
    "question": "New emissions standards have forced Rider Auto to modify the process of engine ______.",
    "options": { "A": "constructive", "B": "constructed", "C": "construction", "D": "construct" },
    "correct_answer": "C",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Từ cần điền là danh từ đứng sau giới từ 'of' và từ hạn định 'engine', tạo thành cụm danh từ 'engine construction' (sự chế tạo động cơ).",
    "explanation_grammar": "Danh từ ghép: Noun + Noun.",
    "translation": "Các tiêu chuẩn khí thải mới đã buộc Rider Auto phải sửa đổi quy trình chế tạo động cơ.",
    "core_vocabulary": [{"word": "emission", "type": "n.", "meaning": "sự thải ra, khí thải"}, {"word": "construction", "type": "n.", "meaning": "sự chế tạo, việc xây dựng"}]
  },
  {
    "id": "q96",
    "question": "Green Grocer customers should request assistance from staff instead of removing products from the top shelves ______.",
    "options": { "A": "them", "B": "their", "C": "their own", "D": "themselves" },
    "correct_answer": "D",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Cần một đại từ phản thân để nhấn mạnh hành động tự mình làm của chủ ngữ (customers - số plural). 'themselves' (tự họ) là lựa chọn hợp lý nhất.",
    "explanation_grammar": "Đại từ phản thân (Reflexive pronouns) dùng để nhấn mạnh đích danh chủ thể tự thực hiện một việc.",
    "translation": "Khách hàng của Green Grocer nên yêu cầu nhân viên hỗ trợ thay vì tự tay lấy sản phẩm từ các kệ trên cùng.",
    "core_vocabulary": [{"word": "assistance", "type": "n.", "meaning": "sự giúp đỡ"}, {"word": "shelf", "type": "n.", "meaning": "cái kệ"}]
  },
  {
    "id": "q97",
    "question": "Ms. Durkin asked for volunteers to help ______ with the employee fitness program.",
    "options": { "A": "hers", "B": "her", "C": "she", "D": "herself" },
    "correct_answer": "B",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Sau động từ 'help' (giúp đỡ) cần một tân ngữ trực tiếp (Object pronoun). 'her' đóng vai trò làm tân ngữ (giúp đỡ CÔ ẤY).",
    "explanation_grammar": "Động từ + Tân ngữ (Verb + Object pronoun).",
    "translation": "Cô Durkin đã yêu cầu các tình nguyện viên giúp đỡ cô ấy trong chương trình thể hình cho nhân viên.",
    "core_vocabulary": [{"word": "volunteer", "type": "n.", "meaning": "tình nguyện viên"}, {"word": "fitness", "type": "n.", "meaning": "thể dục thể hình"}]
  },
  {
    "id": "q98",
    "question": "Local merchants are hopeful that if this new business succeeds, ______ will also benefit.",
    "options": { "A": "theirs", "B": "them", "C": "their", "D": "themselves" },
    "correct_answer": "A",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Khoảng trống đóng vai trò làm Chủ ngữ cho động từ 'will benefit' nên không thể dùng tân ngữ hay tính từ. Đại từ sở hữu 'theirs' = 'their business' (việc kinh doanh của họ).",
    "explanation_grammar": "Đại từ sở hữu (Possessive pronouns) thay thế cho đại từ/danh từ đã nhắc trước đó để tránh lặp (their business).",
    "translation": "Các thương gia địa phương hy vọng rằng nếu doanh nghiệp mới này thành công, việc kinh doanh của chính họ cũng sẽ được hưởng lợi.",
    "core_vocabulary": [{"word": "merchant", "type": "n.", "meaning": "thương gia"}, {"word": "succeed", "type": "v.", "meaning": "thành công"}]
  },
  {
    "id": "q99",
    "question": "If ______ are not satisfied with an item, return it for a full refund within 30 days of purchase.",
    "options": { "A": "you", "B": "yourself", "C": "your", "D": "yours" },
    "correct_answer": "A",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Vị trí này đang thiếu vắng vị trí Chủ ngữ (Subject) làm chủ hành động tobe 'are'. Đại từ nhân xưng 'You' là đáp án đúng.",
    "explanation_grammar": "Đại từ nhân xưng (Subject pronouns) đúng đầu câu làm chủ ngữ.",
    "translation": "Nếu BẠN không hài lòng với một mặt hàng, hãy trả lại nó để nhận được hoàn tiền đầy đủ trong vòng 30 ngày kể từ ngày mua.",
    "core_vocabulary": [{"word": "satisfied", "type": "adj.", "meaning": "hài lòng"}, {"word": "refund", "type": "n.", "meaning": "khoản hoàn tiền"}]
  },
  {
    "id": "q100",
    "question": "Kespi Brand cookies, delicious by ______, are even better when paired with a glass of milk.",
    "options": { "A": "themselves", "B": "theirs", "C": "them", "D": "they" },
    "correct_answer": "A",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Cấu trúc 'by themselves' mang ý nghĩa là 'tự bản thân chúng đã...' (chỉ bánh quy). Điều này khẳng định ngay cả khi để riêng, bánh quy đã rất ngon.",
    "explanation_grammar": "By + Reflexive Pronoun (đại từ phản thân): Một mình, tự bản thân.",
    "translation": "Bánh quy nhãn hiệu Kespi, dù chỉ ăn một mình tự thân chúng đã ngon, mà thậm chí còn tuyệt vời hơn khi kết hợp cùng một ly sữa.",
    "core_vocabulary": [{"word": "delicious", "type": "adj.", "meaning": "ngon miệng"}, {"word": "pair with", "type": "v.", "meaning": "kết hợp cùng với"}]
  },
  {
    "id": "q101",
    "question": "Most of the manufacturing sector has reported higher profits as a result of the trade ______.",
    "options": { "A": "agreement", "B": "agreeably", "C": "agreeing", "D": "agrees" },
    "correct_answer": "A",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Sau mạo từ 'the' và danh từ 'trade' cần ghép thêm một danh từ nữa để tạo thành cụm danh từ 'trade agreement' (hiệp định thương mại).",
    "explanation_grammar": "Danh từ ghép Noun + Noun.",
    "translation": "Hầu hết các lĩnh vực sản xuất đều báo cáo đạt lợi nhuận cao hơn nhờ kết quả của hiệp định thương mại.",
    "core_vocabulary": [{"word": "manufacturing sector", "type": "n.", "meaning": "lĩnh vực sản xuất"}, {"word": "agreement", "type": "n.", "meaning": "hiệp định, sự đồng ý"}]
  },
  {
    "id": "q102",
    "question": "Local shop owners are invited to the ______ of Clyde Bank's downtown branch.",
    "options": { "A": "opening", "B": "open", "C": "opened", "D": "openly" },
    "correct_answer": "A",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Sau mạo từ 'the' cần một danh từ. 'opening' ở đây đóng vai trò là danh từ mang nghĩa 'buổi khai trương/sự kiện mở cửa'.",
    "explanation_grammar": "The + Noun + of...",
    "translation": "Các chủ cửa hàng địa phương được mời tham dự buổi khai trương chi nhánh trung tâm thành phố của Clyde Bank.",
    "core_vocabulary": [{"word": "downtown", "type": "adj.", "meaning": "khu vực trung tâm thành phố"}, {"word": "branch", "type": "n.", "meaning": "chi nhánh"}]
  },
  {
    "id": "q103",
    "question": "If your parking permit is damaged, bring it to the entrance station for a ______.",
    "options": { "A": "replace", "B": "replacing", "C": "replaces", "D": "replacement" },
    "correct_answer": "D",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Sau mạo từ 'a' cần một danh từ (số ít đếm được). 'replacement' đáp ứng đúng định dạng ngữ pháp vì đuôi -ment thường chỉ danh từ.",
    "explanation_grammar": "Mạo từ (a/an/the) + Danh từ.",
    "translation": "Nếu giấy phép đỗ xe của bạn bị hỏng, hãy mang nó đến trạm lối vào để xin sự cấp đổi lại.",
    "core_vocabulary": [{"word": "permit", "type": "n.", "meaning": "giấy phép"}, {"word": "replacement", "type": "n.", "meaning": "sự thay thế, đổi trả"}]
  },
  {
    "id": "q104",
    "question": "Mr. Wagner will arrange the schedule of events for the ______ of the flagship store.",
    "options": { "A": "opening", "B": "openness", "C": "openly", "D": "opens" },
    "correct_answer": "A",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Tương tự như các câu trên, 'the + Noun + of' yêu cầu có một danh từ vào chỗ trống ngữ pháp để mang tính chất giới hạn sự kiện 'sự khai trương'.",
    "explanation_grammar": "The + Danh từ.",
    "translation": "Ông Wagner sẽ sắp xếp lịch trình các sự kiện cho dịp khai trương hội sở chính.",
    "core_vocabulary": [{"word": "arrange", "type": "v.", "meaning": "sắp xếp"}, {"word": "flagship store", "type": "n.", "meaning": "cửa hàng trọng điểm/hội sở chính"}]
  },
  {
    "id": "q105",
    "question": "This booklet is intended to inform drivers of ______ on bridge travel for oversized vehicles.",
    "options": { "A": "restricts", "B": "restrictive", "C": "restrictions", "D": "restricting" },
    "correct_answer": "C",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Chỗ trống chịu sự chi phối tân ngữ của giới từ 'of'. Vì mang nghĩa thông báo về 'các sự hạn chế', đuôi -tion biến nó thành một danh từ chính cống.",
    "explanation_grammar": "Preposition (of) + Noun.",
    "translation": "Cuốn sách nhỏ này nhằm mục đích để thông báo cho những người lái xe về những lệnh cấm hạn chế về việc di chuyển trên cầu đối với các loại xe quá khổ.",
    "core_vocabulary": [{"word": "restriction", "type": "n.", "meaning": "sự hạn chế, lệnh cấm"}, {"word": "oversized", "type": "adj.", "meaning": "quá khổ"}]
  },
  {
    "id": "q106",
    "question": "Please contact the product distributor, not the retail store, if ______ need replacement parts.",
    "options": { "A": "yourself", "B": "you", "C": "your", "D": "yours" },
    "correct_answer": "B",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Bắt đầu mệnh đề IF cần có Chủ ngữ (Subject). 'You' đại diện cho người nghe trực tiếp trong một câu mệnh lệnh.",
    "explanation_grammar": "If + Subject + Verb.",
    "translation": "Vui lòng liên hệ với nhà phân phối trực tiếp sản phẩm, không phải cửa hàng bán lẻ, nếu bạn cần các bộ phận linh kiện thay thế.",
    "core_vocabulary": [{"word": "distributor", "type": "n.", "meaning": "nhà phân phối"}, {"word": "retail store", "type": "n.", "meaning": "cửa hàng bán lẻ"}]
  },
  {
    "id": "q107",
    "question": "Greg Owens, the founder of multinational Hermes Taxi Service, used to drive a taxi ______.",
    "options": { "A": "himself", "B": "his", "C": "his own", "D": "he" },
    "correct_answer": "A",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Để nhấn mạnh việc chính bản thân Greg (tự tay ổng) đã làm điều đó trong quá khứ mà không ai giúp, ta cùng tính từ nhân xưng phản thân (himself).",
    "explanation_grammar": "Đại từ phản thân đứng ở cuối để nhấn mạnh về mặt tự thực thi của chủ ngữ nam (Greg).",
    "translation": "Greg Owens, nhà sáng lập kiêm cha đẻ của công ty Đa quốc gia Dịch vụ Taxi Hermes, đã từng có dạo tự mình lái chính chiếc xe taxi.",
    "core_vocabulary": [{"word": "founder", "type": "n.", "meaning": "người sáng lập"}, {"word": "multinational", "type": "adj.", "meaning": "đa quốc gia"}]
  },
  {
    "id": "q108",
    "question": "Deltran analytics software can help ______ identify issues, predict trends, and improve business.",
    "options": { "A": "you", "B": "yourself", "C": "your", "D": "yours" },
    "correct_answer": "A",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Động từ 'help' yêu cầu cần có một tân ngữ 'ai đó' phía sau (help somebody do something). 'you' ở đây mang chức năng là tân ngữ trực tiếp chỉ định người dùng.",
    "explanation_grammar": "Verb (help) + Object pronoun (you) + Verb bare infinitive (identify).",
    "translation": "Phần mềm phân tích hệ thống Deltran có thể giúp BẠN dễ dàng xác định được các vấn đề, dự đoán đúng xu hướng và cải thiện năng lực kinh doanh.",
    "core_vocabulary": [{"word": "identify", "type": "v.", "meaning": "nhận diện, xác định"}, {"word": "trend", "type": "n.", "meaning": "xu hướng"}]
  },
  {
    "id": "q109",
    "question": "Here at Vanguard Buying Club ______ help members find quality merchandise at the lowest possible prices.",
    "options": { "A": "us", "B": "we", "C": "our", "D": "ourselves" },
    "correct_answer": "B",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Đứng trước động từ chia 'help' cần phải điền đại từ nhân xưng giữ vai Chủ ngữ 'we'. ('chúng tôi đại diện câu lạc bộ').",
    "explanation_grammar": "Đại từ nhân xưng (Subject Pronoun) đứng thay cho vật chủ phía trước đảm nhiệm hành động kế tiếp.",
    "translation": "Tại vị trí Hội mua hàng Vanguard, CHÚNG TÔI sát cách giúp các thành viên tìm kiếm nguồn mặt hàng chất lượng cực cao với giá thành rẻ kỷ lục.",
    "core_vocabulary": [{"word": "merchandise", "type": "n.", "meaning": "hàng hóa, thương phẩm"}]
  },
  {
    "id": "q110",
    "question": "Ms. Jha assured the client that ______ would deliver the contract that afternoon.",
    "options": { "A": "she", "B": "hers", "C": "herself", "D": "her" },
    "correct_answer": "A",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Phía bên kia của mệnh đề that là một vị trí cho một người làm nhiệm vụ phân phối (Subject of 'would deliver'). Đại từ xưng hô nữ nhân 'she' được điền thay thế lại.",
    "explanation_grammar": "Sau That, chủ ngữ tiếp theo được thiết lập bằng đại từ ngôi thứ ba số ít (Subject pronouns) để dẫn đường cho Vị ngữ.",
    "translation": "Cô Jha đã bảo đảm một cách chắc ăn với khách hàng rằng cô ấy sẽ chịu đưa trao bản hợp đồng ngay vào chiều đó.",
    "core_vocabulary": [{"word": "assure", "type": "v.", "meaning": "bảo đảm, cam kết"}, {"word": "deliver", "type": "v.", "meaning": "giao nộp, uỷ phát"}]
  }
];

global.questionsData = global.questionsData.concat(nq);

fs.writeFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'window.questionsData = ' + JSON.stringify(global.questionsData, null, 2) + ';');
