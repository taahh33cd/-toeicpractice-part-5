const fs = require('fs');
let code = fs.readFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'utf8');
code = code.replace('window.questionsData =', 'global.questionsData =');
eval(code);

const nq = [
  {
    "id": "q56",
    "question": "The business proposals seem promising.",
    "options": { "A": "S-V-C", "B": "S-V-O-C", "C": "S-V-O", "D": "S-V" },
    "correct_answer": "A",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Động từ 'seem' luôn là linking verb kết nối Chủ ngữ với Tính từ mô tả (Bổ ngữ - Complement).",
    "explanation_grammar": "S-V-C: Chủ ngữ + Linking verb (seem, appear, look...) + C.",
    "translation": "Bản đề xuất kinh doanh có vẻ hứa hẹn.",
    "core_vocabulary": [{"word": "promising", "type": "adj.", "meaning": "đầy hứa hẹn"}]
  },
  {
    "id": "q57",
    "question": "The player became the team leader.",
    "options": { "A": "S-V-O-C", "B": "S-V-O", "C": "S-V", "D": "S-V-C" },
    "correct_answer": "D",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Động từ 'became' là phương tiện nối giữa Cầu thủ và chức vụ 'đội trưởng' (Danh từ định danh làm Complement).",
    "explanation_grammar": "S-V-C với động từ liên kết chỉ sự thay đổi (become, turn...).",
    "translation": "Cầu thủ đó đã trở thành đội trưởng.",
    "core_vocabulary": [{"word": "become", "type": "v.", "meaning": "trở thành"}]
  },
  {
    "id": "q58",
    "question": "The music made the performance impressive.",
    "options": { "A": "S-V-C", "B": "S-V-O", "C": "S-V", "D": "S-V-O-C" },
    "correct_answer": "D",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "'made' là ngoại động từ tác động lên màn biểu diễn 'the performance'. Tính từ 'impressive' bổ sung ý nghĩa mô tả cho chính trải nghiệm màn biểu diễn đó.",
    "explanation_grammar": "S-V-O-C: Diễn tả làm thứ gì đó trở nên như thế nào.",
    "translation": "Âm nhạc đã làm cho màn biểu diễn trở nên vô cùng ấn tượng.",
    "core_vocabulary": [{"word": "impressive", "type": "adj.", "meaning": "gây ấn tượng mạnh"}]
  },
  {
    "id": "q59",
    "question": "I found the book easily.",
    "options": { "A": "S-V-O-C", "B": "S-V-O", "C": "S-V-C", "D": "S-V" },
    "correct_answer": "B",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Tuy có find/found nhưng cuối câu chỉ có trạng từ 'easily' (chỉ cách thức người đó tìm) chứ không có tính từ định phẩm cho 'the book'. Vì vậy nó là S-V-O đơn thuần.",
    "explanation_grammar": "S-V-(O)-(A): Trạng từ (Adverb) bổ nghĩa không được tính là Cấu trúc Complement.",
    "translation": "Tôi đã tìm  thấy cuốn sách một cách dễ dàng.",
    "core_vocabulary": [{"word": "easily", "type": "adv.", "meaning": "dễ dàng"}]
  },
  {
    "id": "q60",
    "question": "The management will create a special team.",
    "options": { "A": "S-V", "B": "S-V-O-C", "C": "S-V-C", "D": "S-V-O" },
    "correct_answer": "D",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Ngoại Động từ 'create' bắt buộc sinh ra sản phẩm trực tiếp (Tân ngữ - Object), ở đây là đội đặc nhiệm 'a special team'.",
    "explanation_grammar": "Cấu trúc S-V-O điển hình của động từ sáng tạo.",
    "translation": "Ban quản lý sẽ tạo ra một đội đặc nhiệm.",
    "core_vocabulary": [{"word": "management", "type": "n.", "meaning": "ban quản lý"}]
  },
  {
    "id": "q61",
    "question": "Mr. Anderson needs advice from his supervisor.",
    "options": { "A": "S-V-O", "B": "S-V-O-C", "C": "S-V-C", "D": "S-V" },
    "correct_answer": "A",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "'needs' là ngoại động từ, cần có mục tiêu là 'advice' (lời khuyên) làm Tân ngữ. Cụm 'from his supervisor' chỉ là cụm giới từ đóng vai trò bổ trợ nguồn gốc chứ không thay đổi xương sống câu S-V-O.",
    "explanation_grammar": "S-V-O có thêm cụm giới từ làm phụ ngữ.",
    "translation": "Ông Anderson cần sự chỉ dẫn từ người quản lý của mình.",
    "core_vocabulary": [{"word": "supervisor", "type": "n.", "meaning": "người quản lý giám sát"}]
  },
  {
    "id": "q62",
    "question": "Most employees take part in the competition.",
    "options": { "A": "S-V-O", "B": "S-V-O-C", "C": "S-V", "D": "S-V-C" },
    "correct_answer": "A",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Cụm động từ 'take part in' (tham gia) tác động vào sự kiện đứng sau nó 'the competition' (tân ngữ).",
    "explanation_grammar": "S-V-O: Ngoại động từ có thể ở dưới dạng Cụm động từ (Verb phrase).",
    "translation": "Hầu hết các nhân viên đều tham gia vào cuộc thi.",
    "core_vocabulary": [{"word": "take part in", "type": "v.", "meaning": "tham gia"}]
  },
  {
    "id": "q63",
    "question": "Ms. Bacon was a consultant at a hospital.",
    "options": { "A": "S-V-O", "B": "S-V", "C": "S-V-O-C", "D": "S-V-C" },
    "correct_answer": "D",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "'was' là Linking verb liên kết chủ ngữ vọi định danh nghề nghiệp làm Complement (Bổ ngữ).",
    "explanation_grammar": "S-V-C với V là chuỗi Tobe chỉ định danh.",
    "translation": "Bà Bacon từng là một chuyên gia tư vấn tại một bệnh viện.",
    "core_vocabulary": [{"word": "consultant", "type": "n.", "meaning": "cố vấn, chuyên gia tư vấn"}]
  },
  {
    "id": "q64",
    "question": "Candidates should meet the qualifications for the job.",
    "options": { "A": "S-V", "B": "S-V-C", "C": "S-V-O-C", "D": "S-V-O" },
    "correct_answer": "D",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "'meet' mang nghĩa đáp ứng yêu cầu (ngoại động từ) đi kèm tân ngữ nhận tác động là 'qualifications' (các tiêu chuẩn). Theo sau là phần mở rộng.",
    "explanation_grammar": "S-V-O truyền thống.",
    "translation": "Những ứng viên nên đáp ứng đủ các tiêu chuẩn dành cho công việc.",
    "core_vocabulary": [{"word": "qualification", "type": "n.", "meaning": "trình độ, tiêu chuẩn cần thiết"}]
  },
  {
    "id": "q65",
    "question": "Each participant is required to sign his or her application.",
    "options": { "A": "S-V-C", "B": "S-V-O-C", "C": "S-V", "D": "S-V-O" },
    "correct_answer": "C",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Cụm bị động 'is required' tạo thành câu hoàn chỉnh và đẩy câu chủ đạo về cơ cấu nội (Không còn tân ngữ Object ở thể chủ động gốc). 'to sign...' là cụm bổ ngữ chức năng. Nên cơ bản nhất là S-V.",
    "explanation_grammar": "Câu chia thể bị động coi như cấu trúc thu gọn S-V.",
    "translation": "Mỗi cá nhân tham gia đều được yêu cầu phải ký vào đơn của họ.",
    "core_vocabulary": [{"word": "participant", "type": "n.", "meaning": "người dự gia"}]
  },
  {
    "id": "q66",
    "question": "New employees will receive training for a week.",
    "options": { "A": "S-V-O-C", "B": "S-V", "C": "S-V-C", "D": "S-V-O" },
    "correct_answer": "D",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Chủ ngữ (employees) thực thi hành động 'receive' lên đối tượng 'training' (S-V-O). Cụm chỉ thời gian là trạng ngữ phụ trợ.",
    "explanation_grammar": "S-V-O tiêu chuẩn.",
    "translation": "Các nhân viên mới này sẽ được trải qua một tuần huấn luyện.",
    "core_vocabulary": [{"word": "training", "type": "n.", "meaning": "chương trình đào tạo, huấn luyện"}]
  },
  {
    "id": "q67",
    "question": "All staff attend a meeting on Mondays.",
    "options": { "A": "S-V-O-C", "B": "S-V", "C": "S-V-C", "D": "S-V-O" },
    "correct_answer": "D",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Động từ 'attend' (tham gia) gắn liền với đối tượng sự kiện 'a meeting' - tân ngữ đón nhận. Đây là mẫu S-V-O.",
    "explanation_grammar": "S-V-O cốt lõi.",
    "translation": "Toàn bộ thành viên nhân sự tham dự cuộc họp vào các ngày thứ Hai.",
    "core_vocabulary": [{"word": "attend", "type": "v.", "meaning": "tham gia, đến dự"}]
  },
  {
    "id": "q68",
    "question": "Machines will arrive tomorrow.",
    "options": { "A": "S-V-C", "B": "S-V", "C": "S-V-O", "D": "S-V-O-C" },
    "correct_answer": "B",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "'arrive' là nội động từ, đi một mình tự mang đầy đủ ý nghĩa (đến). 'tomorrow' là trạng từ chỉ thời gian không phải Object.",
    "explanation_grammar": "S-V là cấu trúc thuần có V là nội động từ tự nó trọn vẹn không cần ai hỗ trợ.",
    "translation": "Hệ thống máy móc sẽ được chuyển đến vào ngày mai.",
    "core_vocabulary": [{"word": "arrive", "type": "v.", "meaning": "đến nơi"}]
  },
  {
    "id": "q69",
    "question": "The Web site provides advice for gardening.",
    "options": { "A": "S-V-C", "B": "S-V-O-C", "C": "S-V", "D": "S-V-O" },
    "correct_answer": "D",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "Ngoại động từ 'provides' tác động đến một thứ vật phẩm cung cấp là 'advice'. Tạo nên liên đới S-V-O.",
    "explanation_grammar": "S-V-O cơ bản truyền thống.",
    "translation": "Trang web cung cấp nhiều nội dung khuyên nhủ cho việc làm vườn.",
    "core_vocabulary": [{"word": "provide", "type": "v.", "meaning": "cung cấp"}]
  },
  {
    "id": "q70",
    "question": "Power Gym installed new equipment.",
    "options": { "A": "S-V-C", "B": "S-V-O-C", "C": "S-V", "D": "S-V-O" },
    "correct_answer": "D",
    "grammar_type": "Cấu trúc câu",
    "explanation_reason": "'installed' sinh ra một đích đến chịu tác động là bộ thiết bị điện mới (new equipment) đóng vai Object cho câu theo chuẩn S-V-O.",
    "explanation_grammar": "S-V-O là khung miêu tả một hành động thay đổi vật chủ thứ 2.",
    "translation": "Phòng tập thể hình Thể Lực đã lắp đặt thêm một số các thiết bị luyện tập mới.",
    "core_vocabulary": [{"word": "install", "type": "v.", "meaning": "lắp đặt"}]
  }
];

global.questionsData = global.questionsData.concat(nq);

fs.writeFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'window.questionsData = ' + JSON.stringify(global.questionsData, null, 2) + ';');
