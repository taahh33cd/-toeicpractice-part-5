const fs = require('fs');
let code = fs.readFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'utf8');
code = code.replace('window.questionsData =', 'global.questionsData =');
eval(code);

const nq = [
  {
    "id": "q71",
    "question": "Laser Electronics' staff have extensive ______ of current hardware systems.",
    "options": { "A": "knowledgeable", "B": "knowledge", "C": "know", "D": "known" },
    "correct_answer": "B",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Từ cần điền đứng sau tính từ 'extensive' (sâu rộng) nên phải là một danh từ. 'knowledge' (kiến thức) là danh từ chính xác phù hợp.",
    "explanation_grammar": "Cấu trúc cụm danh từ: Adjective + Noun.",
    "translation": "Nhân viên của Laser Electronics có kiến thức sâu rộng về các hệ thống phần cứng hiện tại.",
    "core_vocabulary": [{"word": "extensive", "type": "adj.", "meaning": "sâu rộng, bao quát"}, {"word": "knowledge", "type": "n.", "meaning": "kiến thức"}]
  },
  {
    "id": "q72",
    "question": "Jesper Associates currently has ______ with 26 different food suppliers.",
    "options": { "A": "contracts", "B": "contractor", "C": "contract", "D": "contracting" },
    "correct_answer": "A",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Từ cần điền là tân ngữ cho động từ 'has' nên phải là danh từ. Vì phía trước không có mạo từ (a/an/the) và công ty làm việc với 26 nhà cung cấp, nên danh từ phải ở dạng số nhiều 'contracts'.",
    "explanation_grammar": "Sử dụng danh từ số nhiều khi chỉ số lượng nhiều không xác định cụ thể đếm được ở dạng chung.",
    "translation": "Jesper Associates hiện đang có nhiều hợp đồng với 26 nhà cung cấp thực phẩm khác nhau.",
    "core_vocabulary": [{"word": "contract", "type": "n.", "meaning": "hợp đồng"}, {"word": "supplier", "type": "n.", "meaning": "nhà cung cấp"}]
  },
  {
    "id": "q73",
    "question": "The Tokyo division handles product ______ and customer service for the company.",
    "options": { "A": "distributor", "B": "distributed", "C": "distribute", "D": "distribution" },
    "correct_answer": "D",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Từ cần điền đi cùng với chữ 'product' tạo thành một cụm danh từ ghép khép kín (noun phrase). 'product distribution' mang ý nghĩa quá trình phân phối sản phẩm.",
    "explanation_grammar": "Danh từ ghép (Compound noun): Danh từ + Danh từ.",
    "translation": "Chi nhánh Tokyo xử lý việc phân phối sản phẩm và dịch vụ khách hàng cho công ty.",
    "core_vocabulary": [{"word": "handle", "type": "v.", "meaning": "xử lý, đảm đương"}, {"word": "distribution", "type": "n.", "meaning": "sự phân phối"}]
  },
  {
    "id": "q74",
    "question": "Mr. Gupta explained the ______ of the upgraded customer database to the sales team.",
    "options": { "A": "benefited", "B": "benefits", "C": "beneficial", "D": "benefiting" },
    "correct_answer": "B",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Vị trí nằm giữa mạo từ 'the' và giới từ 'of' luôn thuộc về một danh từ. 'benefits' (các lợi ích) là đáp án danh từ duy nhất.",
    "explanation_grammar": "Cấu trúc The + Noun + of...",
    "translation": "Ông Gupta đã giải thích các lợi ích của cơ sở dữ liệu khách hàng được nâng cấp cho đội ngũ bán hàng.",
    "core_vocabulary": [{"word": "benefit", "type": "n.", "meaning": "lợi ích"}, {"word": "database", "type": "n.", "meaning": "cơ sở dữ liệu"}]
  },
  {
    "id": "q75",
    "question": "Konixer Printers is conducting a thorough ______ of current requests for equipment upgrades.",
    "options": { "A": "evaluation", "B": "evaluative", "C": "evaluate", "D": "evaluator" },
    "correct_answer": "A",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Trống nằm sau mạo từ 'a' và tính từ 'thorough' nên cần một danh từ. 'evaluation' (sự đánh giá) thích hợp với ngữ cảnh hơn người đánh giá (evaluator).",
    "explanation_grammar": "Quán từ (a/an/the) + Tính từ + Danh từ.",
    "translation": "Konixer Printers đang tiến hành một đánh giá kỹ lưỡng về các yêu cầu hiện tại đối với việc nâng cấp thiết bị.",
    "core_vocabulary": [{"word": "thorough", "type": "adj.", "meaning": "kỹ lưỡng, thấu đáo"}, {"word": "evaluation", "type": "n.", "meaning": "sự đánh giá"}]
  },
  {
    "id": "q76",
    "question": "Ms. Carpenter will be attending the conference with ______ marketing team.",
    "options": { "A": "herself", "B": "her", "C": "she", "D": "hers" },
    "correct_answer": "B",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Trước cụm danh từ 'marketing team' cần một tính từ sở hữu. 'her' (của cô ấy) là từ chính xác.",
    "explanation_grammar": "Tính từ sở hữu (Possessive adjectives) + Danh từ.",
    "translation": "Cô Carpenter sẽ tham dự hội nghị cùng với đội ngũ tiếp thị của cô ấy.",
    "core_vocabulary": [{"word": "attend", "type": "v.", "meaning": "tham dự"}, {"word": "conference", "type": "n.", "meaning": "hội nghị"}]
  },
  {
    "id": "q77",
    "question": "Every batch of sauce at Generita's Bistro is processed meticulously by ______ expert chefs.",
    "options": { "A": "their", "B": "themselves", "C": "them", "D": "they" },
    "correct_answer": "A",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Giống với câu trước, đứng trước cụm danh từ 'expert chefs' cần một tính từ sở hữu để chỉ sự trực thuộc. 'their' là tính từ sở hữu duy nhất trong 4 phương án.",
    "explanation_grammar": "Đứng trước một Noun luôn mở đường bằng Adj sở hữu.",
    "translation": "Mỗi mẻ nước sốt tại Generita's Bistro đều được chế biến một cách tỉ mỉ bởi các chuyên gia đầu bếp của họ.",
    "core_vocabulary": [{"word": "batch", "type": "n.", "meaning": "mẻ, đợt"}, {"word": "meticulously", "type": "adv.", "meaning": "một cách tỉ mỉ"}]
  },
  {
    "id": "q78",
    "question": "To keep ______ park beautiful, please place your nonrecyclables in the available trash cans.",
    "options": { "A": "us", "B": "our", "C": "ours", "D": "we" },
    "correct_answer": "B",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Bổ nghĩa sở hữu cho danh từ 'park' bắt buộc dùng mạo tính từ sở hữu (our), không dùng đại từ nhân xưng (us/we) hay đại từ sở hữu (ours).",
    "explanation_grammar": "Adj sở hữu + Danh từ.",
    "translation": "Để giữ cho công viên của chúng ta tươi đẹp, vui lòng bỏ rác không thể tái chế của bạn vào các thùng rác có sẵn.",
    "core_vocabulary": [{"word": "nonrecyclable", "type": "n.", "meaning": "rác không thể tái chế"}, {"word": "trash can", "type": "n.", "meaning": "thùng rác"}]
  },
  {
    "id": "q79",
    "question": "Apply to Joneston Stores today so as not to miss ______ chance to join a great sales team.",
    "options": { "A": "you", "B": "yourself", "C": "yours", "D": "your" },
    "correct_answer": "D",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "'chance' (cơ hội) là một danh từ. Đứng ngay phía trước phải là một tính từ sở hữu 'your'.",
    "explanation_grammar": "Tính từ sở hữu đứng kề một danh từ để xác định vật/chủ thể nào thuộc về ai.",
    "translation": "Hãy ứng tuyển vào Joneston Stores ngay hôm nay để không bỏ lỡ cơ hội của bạn được gia nhập một đội ngũ bán hàng tuyệt vời.",
    "core_vocabulary": [{"word": "apply", "type": "v.", "meaning": "nộp đơn ứng tuyển"}, {"word": "chance", "type": "n.", "meaning": "cơ hội"}]
  },
  {
    "id": "q80",
    "question": "While the director of communications is away, all e-mails and calls will be forwarded to ______ assistant.",
    "options": { "A": "herself", "B": "her", "C": "she", "D": "hers" },
    "correct_answer": "B",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Tương tự, trước danh từ 'assistant' cần tính từ sở hữu 'her' (của cô ấy).",
    "explanation_grammar": "Tính từ sở hữu luôn đi kèm theo một danh từ.",
    "translation": "Trong khi giám đốc khối truyền thông đi vắng, tất cả e-mail và cuộc gọi sẽ được chuyển tiếp đến trợ lý của cô ấy.",
    "core_vocabulary": [{"word": "forward", "type": "v.", "meaning": "chuyển tiếp"}, {"word": "assistant", "type": "n.", "meaning": "trợ lý"}]
  },
  {
    "id": "q81",
    "question": "York Development Corporation marked the ______ of the Ford Road office complex with a ribbon-cutting ceremony.",
    "options": { "A": "opens", "B": "opened", "C": "opening", "D": "openly" },
    "correct_answer": "C",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Giới từ 'of' và mạo từ 'the' kẹp giữa là một khoảng trống dành cho Danh từ. 'opening' (sự khai trương) đóng vai trò là một V-ing noun/ Danh động từ hợp lệ.",
    "explanation_grammar": "Gerund (V-ing) có thể đóng vai trò như một danh từ hoàn chỉnh trong cụm The + N/V-ing + of.",
    "translation": "Tập đoàn York Development đã đánh dấu sự khai trương của khu phức hợp văn phòng Ford Road bằng một buổi lễ cắt băng khánh thành.",
    "core_vocabulary": [{"word": "ribbon-cutting ceremony", "type": "n.", "meaning": "lễ cắt băng khánh thành"}, {"word": "opening", "type": "n.", "meaning": "sự khai trương"}]
  },
  {
    "id": "q82",
    "question": "No one without a pass will be granted ______ to the conference.",
    "options": { "A": "admitted", "B": "admission", "C": "to admit", "D": "is admitting" },
    "correct_answer": "B",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Sau cấu trúc bị động 'be granted' (được ban cho), cần một danh từ (Tân ngữ 2 của ngoại động từ grant). 'admission' (quyền đi vào/sự cho phép) là danh từ chuẩn gốc.",
    "explanation_grammar": "Động từ 'grant' lấy 2 tân ngữ (Cấp cho ai - Cái gì), dưới dạng bị động O2 (cái gì) vẫn được giữ lại làm Noun.",
    "translation": "Không một ai không có thẻ ra vào sẽ được cấp quyền bước vào hội nghị.",
    "core_vocabulary": [{"word": "grant", "type": "v.", "meaning": "ban cho, cấp cho"}, {"word": "admission", "type": "n.", "meaning": "quyền đi vào, sự cho phép"}]
  },
  {
    "id": "q83",
    "question": "All sales staff are asked to acknowledge their ______ in Monday's workshop.",
    "options": { "A": "participates", "B": "participated", "C": "participate", "D": "participation" },
    "correct_answer": "D",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Tính từ sở hữu 'their' (của họ) mở đầu cho một cụm danh từ. 'participation' (sự tham gia) là danh từ duy nhất trong 4 hậu tố từ loại trên.",
    "explanation_grammar": "Sở hữu cách / Tính từ sở hữu + Noun.",
    "translation": "Tất cả nhân viên bán hàng được yêu cầu xác nhận sự tham gia của họ vào buổi hội thảo thứ Hai.",
    "core_vocabulary": [{"word": "acknowledge", "type": "v.", "meaning": "thừa nhận, xác nhận"}, {"word": "participation", "type": "n.", "meaning": "sự tham gia"}]
  },
  {
    "id": "q84",
    "question": "The Rina 2000 blender has not received a single ______ in the New Products Web forum.",
    "options": { "A": "complaint", "B": "complain", "C": "complaining", "D": "complained" },
    "correct_answer": "A",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Cụm 'a single' bao gồm mạo từ và tính từ, chỗ trống vì thế phải là một danh từ số ít. 'complaint' là danh từ chỉ lời nguyền rủa/phàn nàn.",
    "explanation_grammar": "A/An + (Adv/Adj) + Danh từ (Noun).",
    "translation": "Máy xay sinh tố Rina 2000 chưa nhận lấy một lời phàn nàn nào trên diễn đàn Web Sản phẩm mới.",
    "core_vocabulary": [{"word": "single", "type": "adj.", "meaning": "duy nhất, lẻ loi"}, {"word": "complaint", "type": "n.", "meaning": "lời phàn nàn, sự khiếu nại"}]
  },
  {
    "id": "q85",
    "question": "Sunwirth Sneakers has several ______ in the greater metropolitan area.",
    "options": { "A": "located", "B": "locations", "C": "locate", "D": "location" },
    "correct_answer": "B",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Từ hạn định 'several' (một vài) luôn yêu cầu một danh từ đếm được ở dạng SỐ NHIỀU. Do đó 'locations' phù hợp.",
    "explanation_grammar": "Several/ few/ many/ multiple + Danh từ số nhiều (Plural nouns).",
    "translation": "Thương hiệu giày Sunwirth Sneakers có một vài chi nhánh địa điểm tại khu vực trung tâm đô thị lớn hơn.",
    "core_vocabulary": [{"word": "location", "type": "n.", "meaning": "địa điểm, vị trí"}, {"word": "metropolitan", "type": "adj.", "meaning": "thuộc đô thị sầm uất"}]
  },
  {
    "id": "q86",
    "question": "The comedian said that ______ sense of humor was inherited from a grandparent.",
    "options": { "A": "her", "B": "herself", "C": "she", "D": "hers" },
    "correct_answer": "A",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "'sense of humor' (khiếu hài hước) tạo thành một cụm danh từ đầy đủ. Phía trước nó đang khuyết thiếu một tính từ sở hữu. 'her' hoàn thành tốt nhiệm vụ này.",
    "explanation_grammar": "Danh từ không thể tự ý đứng sau đại từ phản thân (herself) hay đại từ sở hữu (hers).",
    "translation": "Nữ diễn viên hài thổ lộ rằng khiếu hài hước của cô ấy được thừa hưởng lại từ người ông/bà.",
    "core_vocabulary": [{"word": "comedian", "type": "n.", "meaning": "người diễn viên hài"}, {"word": "inherit", "type": "v.", "meaning": "kế thừa, thừa hưởng"}]
  },
  {
    "id": "q87",
    "question": "Assistant managers are largely responsible for the day-to-day operations in ______ departments.",
    "options": { "A": "theirs", "B": "their", "C": "they", "D": "them" },
    "correct_answer": "B",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Cũng giống như cấu trúc tính từ sở hữu, 'their' đi với danh từ 'departments' để chỉ trỏ rõ nhóm 'bộ phận CỦA HỌ'.",
    "explanation_grammar": "Tính từ sở hữu + Noun.",
    "translation": "Các cấp phó tổng quản lý chịu trách nhiệm cho đại đa số cho các hoạt động hàng ngày trong bộ phận của họ.",
    "core_vocabulary": [{"word": "operation", "type": "n.", "meaning": "hoạt động, sự vận hành"}, {"word": "department", "type": "n.", "meaning": "phòng ban, lực lượng chức năng"}]
  },
  {
    "id": "q88",
    "question": "The new interns have been very mindful of ______ parking regulations.",
    "options": { "A": "theirs", "B": "they", "C": "ours", "D": "our" },
    "correct_answer": "D",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "'parking regulations' (các quy định đỗ xe) là danh từ. Để cho từ bổ sung ý chỉ sự sở hữu 'của chúng tôi' thì phải dùng tính từ sở hữu 'our'.",
    "explanation_grammar": "Tính từ sở hữu đứng trước Noun, đại từ sở hữu (ours/theirs) thì luôn đứng độc lập như đại diện thay thế luôn cho cụm danh từ.",
    "translation": "Các lính mới thực tập sinh đã rất tuân thủ sát sao các quy định đỗ xe của văn phòng chúng ta.",
    "core_vocabulary": [{"word": "mindful", "type": "adj.", "meaning": "lưu tâm, để ý tới"}, {"word": "regulation", "type": "n.", "meaning": "điều luật quy chế"}]
  },
  {
    "id": "q89",
    "question": "______ account will be credited after we receive the returned merchandise.",
    "options": { "A": "Yours", "B": "You", "C": "Yourself", "D": "Your" },
    "correct_answer": "D",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "Đứng ngay cạnh danh từ làm chủ thể (account), cần dùng Tính từ sở hữu 'Your'.",
    "explanation_grammar": "Tính từ sở hữu đứng đầu câu kết hợp Noun lập thành Subject lớn.",
    "translation": "Tài khoản của quý khách sẽ bắt đầu được cộng thêm điểm/tiền sau khi chúng tôi nhận được hàng hóa mang đi được trả lại.",
    "core_vocabulary": [{"word": "credit", "type": "v.", "meaning": "cộng (tiền) vào tài khoản"}, {"word": "merchandise", "type": "n.", "meaning": "chuỗi hàng hóa"}]
  },
  {
    "id": "q90",
    "question": "Ms. Lan Le will complete ______ internship at the George Cake Shop next week.",
    "options": { "A": "her", "B": "herself", "C": "she", "D": "hers" },
    "correct_answer": "A",
    "grammar_type": "Danh từ & Đại từ",
    "explanation_reason": "'internship' (kỳ thực tập) là danh từ, cần tính từ sở hữu 'her' đứng trước vì ở đây đối tượng được nhắc là nữ giới (Ms. Lan).",
    "explanation_grammar": "Đại từ nhân xưng (she) hay đại từ phản thân (herself) không thể đứng trước làm phụ cho cụm danh từ.",
    "translation": "Cô con cái Lan Lê sẽ làm xong kỳ thực tập sinh của cô ấy tại tiệm bánh George đình đám vào tuần sau.",
    "core_vocabulary": [{"word": "internship", "type": "n.", "meaning": "thời kì đi làm kì thực tập"}, {"word": "complete", "type": "v.", "meaning": "hoàn thành"}]
  }
];

global.questionsData = global.questionsData.concat(nq);

fs.writeFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'window.questionsData = ' + JSON.stringify(global.questionsData, null, 2) + ';');
