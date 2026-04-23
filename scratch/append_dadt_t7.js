const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const newQuestions = [
  {
    id: "q0876",
    question: "The recent ______ of the new import tariffs will affect our quarterly corporate budget.",
    options: { A: "implemented", B: "implementing", C: "implementation", D: "implement" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau tính từ 'recent' (gần đây) cần một danh từ làm chủ ngữ. 'Implementation' (sự triển khai/thi hành) là danh từ hoàn thiện cấu trúc câu.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc thi hành các loại thuế nhập khẩu mới gần đây sẽ ảnh hưởng đến ngân sách hàng quý của công ty chúng tôi.",
    core_vocabulary: [{ word: "tariff", type: "n.", meaning: "thuế quan/thuế nhập khẩu" }, { word: "implementation", type: "n.", meaning: "sự thi hành/triển khai" }]
  },
  {
    id: "q0877",
    question: "Pacific Freight requires a valid ______ of the commercial invoice before dispatching the cargo.",
    options: { A: "reproduced", B: "reproducing", C: "reproduce", D: "reproduction" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'a valid + Noun'. 'Reproduction' (bản sao/sự sao chép lại) là danh từ phù hợp để đóng vai trò tân ngữ.",
    explanation_grammar: "Noun as Object.",
    translation: "Pacific Freight yêu cầu một bản sao hợp lệ của hóa đơn thương mại trước khi gửi hàng đi.",
    core_vocabulary: [{ word: "dispatch", type: "v.", meaning: "gửi đi/phái đi" }, { word: "reproduction", type: "n.", meaning: "bản sao/sự tái tạo" }]
  },
  {
    id: "q0878",
    question: "The data analyst provided a comprehensive ______ of the market trends using regression models.",
    options: { A: "explanation", B: "explained", C: "explaining", D: "explain" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cụm 'a comprehensive + Noun'. 'Explanation' (sự giải thích) là danh từ đóng vai trò tân ngữ của động từ 'provide'.",
    explanation_grammar: "Noun as Object.",
    translation: "Nhà phân tích dữ liệu đã cung cấp một bản giải thích toàn diện về các xu hướng thị trường sử dụng các mô hình hồi quy.",
    core_vocabulary: [{ word: "comprehensive", type: "adj.", meaning: "toàn diện" }, { word: "explanation", type: "n.", meaning: "sự giải thích" }]
  },
  {
    id: "q0879",
    question: "Proper ______ of the warehouse space is crucial for accommodating the incoming fresh produce.",
    options: { A: "utilized", B: "utilizing", C: "utilize", D: "utilization" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chỗ trống cần một danh từ làm chủ ngữ. 'Utilization' (sự sử dụng/tận dụng) là danh từ phù hợp nhất.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc tận dụng không gian kho bãi hợp lý là rất quan trọng để chứa các nông sản tươi sắp nhập về.",
    core_vocabulary: [{ word: "utilization", type: "n.", meaning: "sự tận dụng/sử dụng" }, { word: "accommodate", type: "v.", meaning: "chứa/đáp ứng" }]
  },
  {
    id: "q0880",
    question: "Breaking down the project into smaller tasks ensures the successful ______ of the final deliverables.",
    options: { A: "creating", B: "created", C: "create", D: "creation" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'the successful + Noun'. 'Creation' (sự tạo ra/sáng tạo) là danh từ phù hợp để chỉ kết quả quá trình.",
    explanation_grammar: "Noun as Object.",
    translation: "Việc chia nhỏ dự án thành các nhiệm vụ nhỏ hơn sẽ đảm bảo sự tạo ra thành công của các sản phẩm bàn giao cuối cùng.",
    core_vocabulary: [{ word: "deliverables", type: "n.", meaning: "sản phẩm bàn giao" }, { word: "creation", type: "n.", meaning: "sự tạo ra" }]
  },
  {
    id: "q0881",
    question: "Electronic ______ of the customs declaration form speeds up the VNACCS clearance process significantly.",
    options: { A: "transmission", B: "transmitted", C: "transmit", D: "transmitting" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần danh từ làm chủ ngữ. 'Transmission' (sự truyền đi/truyền dữ liệu) là danh từ chỉ hành động kỹ thuật.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc truyền điện tử tờ khai hải quan giúp đẩy nhanh đáng kể quá trình thông quan VNACCS.",
    core_vocabulary: [{ word: "transmission", type: "n.", meaning: "sự truyền đi (dữ liệu)" }, { word: "clearance", type: "n.", meaning: "việc thông quan" }]
  },
  {
    id: "q0882",
    question: "Maintaining the correct warehouse temperature is essential for the ______ of the imported fresh apples.",
    options: { A: "protected", B: "protecting", C: "protect", D: "protection" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau mạo từ 'the' cần một danh từ. 'Protection' (sự bảo vệ/bảo quản) là danh từ phù hợp.",
    explanation_grammar: "Noun after 'the'.",
    translation: "Duy trì nhiệt độ kho bãi chính xác là cần thiết để bảo quản các loại táo tươi nhập khẩu.",
    core_vocabulary: [{ word: "protection", type: "n.", meaning: "sự bảo vệ/bảo quản" }, { word: "essential", type: "adj.", meaning: "thiết yếu" }]
  },
  {
    id: "q0883",
    question: "The new software allows for the precise ______ of missing data points in the shipping records.",
    options: { A: "interpolating", B: "interpolate", C: "interpolation", D: "interpolated" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'the precise + Noun'. 'Interpolation' (sự nội suy/tính toán điểm dữ liệu) là danh từ kỹ thuật phù hợp.",
    explanation_grammar: "Noun as Object of Preposition.",
    translation: "Phần mềm mới cho phép tính toán (nội suy) chính xác các điểm dữ liệu bị thiếu trong các hồ sơ vận chuyển.",
    core_vocabulary: [{ word: "precise", type: "adj.", meaning: "chính xác" }, { word: "interpolation", type: "n.", meaning: "sự nội suy" }]
  },
  {
    id: "q0884",
    question: "Accurate ______ of the project duration requires input from all supply chain department heads.",
    options: { A: "calculate", B: "calculated", C: "calculation", D: "calculating" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chủ ngữ của câu cần một danh từ. 'Calculation' (sự tính toán) là danh từ chỉ hành động.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc tính toán chính xác thời gian dự án đòi hỏi sự đóng góp ý kiến từ tất cả các trưởng bộ phận chuỗi cung ứng.",
    core_vocabulary: [{ word: "duration", type: "n.", meaning: "thời gian/khoảng thời gian" }, { word: "calculation", type: "n.", meaning: "sự tính toán" }]
  },
  {
    id: "q0885",
    question: "The Global Trade Expo saw a record-breaking ______ of international logistics companies this year.",
    options: { A: "participated", B: "participating", C: "participation", D: "participate" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau mạo từ 'a' và tính từ 'record-breaking' cần một danh từ. 'Participation' (sự tham gia) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Triển lãm Thương mại Toàn cầu đã chứng kiến sự tham gia kỷ lục của các công ty hậu cần quốc tế trong năm nay.",
    core_vocabulary: [{ word: "record-breaking", type: "adj.", meaning: "kỷ lục" }, { word: "participation", type: "n.", meaning: "sự tham gia" }]
  },
  {
    id: "q0886",
    question: "Secure packaging prevents any ______ to the sensitive computer mainboards during ocean transit.",
    options: { A: "destroying", B: "destruction", C: "destroyed", D: "destroy" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau từ định lượng 'any' cần một danh từ làm tân ngữ. 'Destruction' (sự phá hủy/hư hại) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Việc đóng gói an toàn ngăn ngừa bất kỳ sự hư hại nào đối với các bo mạch chủ máy tính nhạy cảm trong quá trình vận chuyển đường biển.",
    core_vocabulary: [{ word: "destruction", type: "n.", meaning: "sự phá hủy/hư hại" }, { word: "ocean transit", type: "n.", meaning: "vận chuyển đường biển" }]
  },
  {
    id: "q0887",
    question: "The corporate legal team is currently reviewing the ______ of the new international freight contract.",
    options: { A: "revision", B: "revising", C: "revise", D: "revised" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'review the + Noun'. 'Revision' (bản sửa đổi) là danh từ phù hợp.",
    explanation_grammar: "Noun as Object.",
    translation: "Nhóm pháp lý của công ty hiện đang xem xét bản sửa đổi của hợp đồng vận tải quốc tế mới.",
    core_vocabulary: [{ word: "legal team", type: "n.", meaning: "nhóm pháp lý" }, { word: "revision", type: "n.", meaning: "bản sửa đổi" }]
  },
  {
    id: "q0888",
    question: "Choosing the right pallet type ensures the ______ of the cargo container space.",
    options: { A: "maximization", B: "maximize", C: "maximized", D: "maximizing" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau mạo từ 'the' cần một danh từ làm tân ngữ. 'Maximization' (sự tối đa hóa) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Lựa chọn loại pallet phù hợp đảm bảo việc tối đa hóa không gian container hàng hóa.",
    core_vocabulary: [{ word: "maximization", type: "n.", meaning: "sự tối đa hóa" }, { word: "cargo container", type: "n.", meaning: "container hàng hóa" }]
  },
  {
    id: "q0889",
    question: "The company offers extensive training for employees seeking a career ______ into data analytics.",
    options: { A: "transition", B: "transited", C: "transitioning", D: "transit" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cụm danh từ 'career transition' (sự chuyển đổi nghề nghiệp). 'Transition' là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Công ty cung cấp các khóa đào tạo sâu rộng cho các nhân viên đang tìm kiếm một sự chuyển đổi nghề nghiệp sang lĩnh vực phân tích dữ liệu.",
    core_vocabulary: [{ word: "transition", type: "n.", meaning: "sự chuyển đổi" }, { word: "extensive", type: "adj.", meaning: "sâu rộng/toàn diện" }]
  },
  {
    id: "q0890",
    question: "Effective ______ among different supply chain partners reduces overall international lead times.",
    options: { A: "communicating", B: "communicate", C: "communication", D: "communicated" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chủ ngữ của câu cần một danh từ. 'Communication' (sự liên lạc/trao đổi thông tin) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Sự liên lạc hiệu quả giữa các bên đối tác trong chuỗi cung ứng giúp giảm tổng thời gian chờ quốc tế.",
    core_vocabulary: [{ word: "communication", type: "n.", meaning: "sự liên lạc/trao đổi" }, { word: "lead time", type: "n.", meaning: "thời gian chờ/thời gian thực hiện" }]
  },
  {
    id: "q0891",
    question: "The heavy warehouse machinery requires regular ______ to maintain optimal lifting performance.",
    options: { A: "calibrate", B: "calibrating", C: "calibrated", D: "calibration" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Động từ 'require' cần một tân ngữ là danh từ. 'Calibration' (sự hiệu chuẩn/điều chỉnh thông số) là danh từ kỹ thuật.",
    explanation_grammar: "Noun as Object.",
    translation: "Các máy móc kho bãi hạng nặng yêu cầu hiệu chuẩn định kỳ để duy trì hiệu suất nâng tối ưu.",
    core_vocabulary: [{ word: "calibration", type: "n.", meaning: "sự hiệu chuẩn" }, { word: "optimal", type: "adj.", meaning: "tối ưu" }]
  },
  {
    id: "q0892",
    question: "The finance department needs a detailed ______ of all expenses related to the import process.",
    options: { A: "describe", B: "described", C: "description", D: "describing" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'a detailed + Noun'. 'Description' (bản mô tả/chi tiết) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Bộ phận tài chính cần một bản mô tả chi tiết tất cả các chi phí liên quan đến quá trình nhập khẩu.",
    core_vocabulary: [{ word: "description", type: "n.", meaning: "bản mô tả" }, { word: "expense", type: "n.", meaning: "chi phí" }]
  },
  {
    id: "q0893",
    question: "Alpha Logistics is our primary ______ for all domestic and international freight forwarding services.",
    options: { A: "contractor", B: "contract", C: "contracting", D: "contracted" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chỗ trống cần danh từ chỉ tổ chức/thực thể. 'Contractor' (nhà thầu/đơn vị hợp đồng) là danh từ chỉ người/entity.",
    explanation_grammar: "Noun as Complement.",
    translation: "Alpha Logistics là nhà thầu chính của chúng tôi cho tất cả các dịch vụ giao nhận vận tải trong nước và quốc tế.",
    core_vocabulary: [{ word: "contractor", type: "n.", meaning: "nhà thầu/đơn vị hợp đồng" }, { word: "freight forwarding", type: "n.", meaning: "giao nhận vận tải" }]
  },
  {
    id: "q0894",
    question: "The quality assurance team guarantees the ______ of all outgoing electronic network components.",
    options: { A: "secure", B: "securing", C: "securely", D: "security" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'guarantee the + Noun'. 'Security' (sự an toàn/bảo mật) là danh từ trừu tượng.",
    explanation_grammar: "Noun as Object.",
    translation: "Nhóm đảm bảo chất lượng đảm bảo sự an toàn của tất cả các linh kiện mạng điện tử xuất xưởng.",
    core_vocabulary: [{ word: "quality assurance", type: "n.", meaning: "đảm bảo chất lượng" }, { word: "outgoing", type: "adj.", meaning: "xuất xưởng/đi ra" }]
  },
  {
    id: "q0895",
    question: "Applying the PERT method provides a more realistic ______ of the overall project schedule.",
    options: { A: "projecting", B: "projected", C: "projection", D: "project" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'a more realistic + Noun'. 'Projection' (sự dự phóng/ước tính tương lai) là danh từ phù hợp.",
    explanation_grammar: "Noun as Object.",
    translation: "Áp dụng phương pháp PERT cung cấp một sự dự phóng thực tế hơn về tổng thể tiến độ dự án.",
    core_vocabulary: [{ word: "projection", type: "n.", meaning: "sự dự phóng/ước tính" }, { word: "realistic", type: "adj.", meaning: "thực tế" }]
  },
  {
    id: "q0896",
    question: "Our dedicated support team ensures the swift ______ of all international client inquiries.",
    options: { A: "resolved", B: "resolving", C: "resolution", D: "resolve" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'ensure the swift + Noun'. 'Resolution' (sự giải quyết) là danh từ chỉ kết quả hành động.",
    explanation_grammar: "Noun as Object.",
    translation: "Đội ngũ hỗ trợ tận tâm của chúng tôi đảm bảo việc giải quyết nhanh chóng tất cả các thắc mắc của khách hàng quốc tế.",
    core_vocabulary: [{ word: "resolution", type: "n.", meaning: "sự giải quyết" }, { word: "inquiry", type: "n.", meaning: "thắc mắc/yêu cầu" }]
  },
  {
    id: "q0897",
    question: "The strict ______ of sensitive client shipping data is mandated by new industry regulations.",
    options: { A: "retaining", B: "retention", C: "retain", D: "retained" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chủ ngữ cần một danh từ. 'Retention' (sự lưu giữ/giữ lại) là danh từ phù hợp.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc lưu giữ nghiêm ngặt các dữ liệu vận chuyển nhạy cảm của khách hàng là bắt buộc theo các quy định mới của ngành.",
    core_vocabulary: [{ word: "retention", type: "n.", meaning: "sự lưu giữ" }, { word: "mandated", type: "adj.", meaning: "được bắt buộc/quy định" }]
  },
  {
    id: "q0898",
    question: "The corporate marketing team is preparing a new ______ to attract international shipping clients.",
    options: { A: "promote", B: "promoting", C: "promotion", D: "promoted" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'a new + Noun'. 'Promotion' (chương trình quảng bá/khuyến mãi) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Nhóm marketing của công ty đang chuẩn bị một chương trình quảng bá mới để thu hút các khách hàng vận chuyển quốc tế.",
    core_vocabulary: [{ word: "promotion", type: "n.", meaning: "sự quảng bá/khuyến mãi" }, { word: "attract", type: "v.", meaning: "thu hút" }]
  },
  {
    id: "q0899",
    question: "All applicants for the logistics data analyst role must submit a formal ______ by Friday.",
    options: { A: "application", B: "applying", C: "applied", D: "apply" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Động từ 'submit' cần tân ngữ danh từ. 'Application' (đơn ứng tuyển) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Tất cả các ứng viên cho vị trí nhà phân tích dữ liệu hậu cần phải nộp đơn ứng tuyển chính thức trước thứ Sáu.",
    core_vocabulary: [{ word: "application", type: "n.", meaning: "đơn ứng tuyển" }, { word: "formal", type: "adj.", meaning: "trang trọng/chính thức" }]
  },
  {
    id: "q0900",
    question: "The recent highway closures caused a major ______ in the delivery of the electronic goods.",
    options: { A: "interrupting", B: "interrupted", C: "interruption", D: "interrupt" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'a major + Noun'. 'Interruption' (sự gián đoạn) là danh từ phù hợp.",
    explanation_grammar: "Noun as Object.",
    translation: "Các vụ đóng cửa đường cao tốc gần đây đã gây ra sự gián đoạn lớn trong việc giao các mặt hàng điện tử.",
    core_vocabulary: [{ word: "interruption", type: "n.", meaning: "sự gián đoạn" }, { word: "closure", type: "n.", meaning: "việc đóng cửa" }]
  }
];

let content = fs.readFileSync(targetFile, 'utf8');
const questionsData = eval(content.replace('window.questionsData =', ''));

const updatedQuestionsData = questionsData.concat(newQuestions);

fs.writeFileSync(targetFile, 'window.questionsData = ' + JSON.stringify(updatedQuestionsData, null, 2) + ';', 'utf8');
console.log('Successfully added 25 questions for Danh từ & Đại từ - Test 7!');
