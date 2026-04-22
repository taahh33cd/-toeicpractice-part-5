const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const newQuestions = [
  {
    id: "q0801",
    question: "Horizon Imports is coordinating the ______ of fresh agricultural produce to our local warehouse.",
    options: { A: "distributed", B: "distribute", C: "distributor", D: "distribution" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chỗ trống cần một danh từ sau mạo từ 'the' để hoàn thiện cụm danh từ. 'Distribution' (sự phân phối/giao hàng) là danh từ phù hợp nhất.",
    explanation_grammar: "Noun as Object (Action/Process).",
    translation: "Horizon Imports đang phối hợp việc phân phối nông sản tươi đến kho hàng địa phương của chúng tôi.",
    core_vocabulary: [{ word: "coordinate", type: "v.", meaning: "phối hợp" }, { word: "agricultural produce", type: "n.", meaning: "nông sản" }]
  },
  {
    id: "q0802",
    question: "The updated manual provides detailed ______ for accurately classifying international freight using standard codes.",
    options: { A: "instruct", B: "instructing", C: "instructions", D: "instructive" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một danh từ số nhiều đứng sau tính từ 'detailed'. 'Instructions' (các hướng dẫn) là danh từ phù hợp.",
    explanation_grammar: "Noun as Object (Instruction/Manual).",
    translation: "Sách hướng dẫn cập nhật cung cấp các chỉ dẫn chi tiết để phân loại vận tải quốc tế một cách chính xác bằng các mã tiêu chuẩn.",
    core_vocabulary: [{ word: "classify", type: "v.", meaning: "phân loại" }, { word: "freight", type: "n.", meaning: "vận tải/hàng hóa" }]
  },
  {
    id: "q0803",
    question: "Titan Freight is a leading ______ of specialized wooden pallets for delicate computer components.",
    options: { A: "provided", B: "provider", C: "provide", D: "providing" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'a leading + Noun'. 'Provider' (nhà cung cấp) là danh từ chỉ đơn vị kinh doanh phù hợp nhất.",
    explanation_grammar: "Noun as Complement (Entity/Person).",
    translation: "Titan Freight là nhà cung cấp hàng đầu các tấm pallet gỗ chuyên dụng cho các linh kiện máy tính nhạy cảm.",
    core_vocabulary: [{ word: "specialized", type: "adj.", meaning: "chuyên dụng" }, { word: "delicate", type: "adj.", meaning: "nhạy cảm/dễ vỡ" }]
  },
  {
    id: "q0804",
    question: "A clear ______ of the shipping data helps analysts identify potential areas for cost reduction.",
    options: { A: "representative", B: "representing", C: "representation", D: "represent" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chỗ trống cần một danh từ làm chủ ngữ. 'Representation' (sự trình bày/thể hiện) là danh từ phù hợp với ngữ cảnh phân tích dữ liệu.",
    explanation_grammar: "Noun as Subject.",
    translation: "Một sự thể hiện rõ ràng của dữ liệu vận chuyển giúp các nhà phân tích xác định các lĩnh vực tiềm năng để giảm chi phí.",
    core_vocabulary: [{ word: "identify", type: "v.", meaning: "xác định/nhận diện" }, { word: "cost reduction", type: "n.", meaning: "việc giảm chi phí" }]
  },
  {
    id: "q0805",
    question: "The Vanguard Construction team needs a clear ______ of all project tasks before starting work.",
    options: { A: "dividing", B: "divided", C: "division", D: "divide" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một danh từ sau mạo từ 'a' và tính từ 'clear'. 'Division' (sự phân chia) là danh từ phù hợp.",
    explanation_grammar: "Noun as Object.",
    translation: "Đội ngũ xây dựng Vanguard cần một sự phân chia rõ ràng các nhiệm vụ dự án trước khi bắt đầu công việc.",
    core_vocabulary: [{ word: "division", type: "n.", meaning: "sự phân chia/bộ phận" }, { word: "task", type: "n.", meaning: "nhiệm vụ" }]
  },
  {
    id: "q0806",
    question: "For complex data models, the software guarantees a high level of ______ in its calculations.",
    options: { A: "precisely", B: "precise", C: "precision", D: "preciseness" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau giới từ 'of' cần một danh từ. 'Precision' (độ chính xác) là danh từ chuẩn trong lĩnh vực kỹ thuật/tính toán.",
    explanation_grammar: "Noun after Preposition.",
    translation: "Đối với các mô hình dữ liệu phức tạp, phần mềm đảm bảo độ chính xác cao trong các tính toán của mình.",
    core_vocabulary: [{ word: "guarantee", type: "v.", meaning: "đảm bảo" }, { word: "precision", type: "n.", meaning: "độ chính xác" }]
  },
  {
    id: "q0807",
    question: "The warehouse manager calculated the maximum ______ of the shipping containers to optimize cargo space.",
    options: { A: "capable", B: "capacious", C: "capability", D: "capacity" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'the + Noun'. 'Capacity' (sức chứa/dung tích) là danh từ phù hợp nhất cho container.",
    explanation_grammar: "Noun as Object.",
    translation: "Quản lý kho đã tính toán sức chứa tối đa của các container vận chuyển để tối ưu hóa không gian hàng hóa.",
    core_vocabulary: [{ word: "capacity", type: "n.", meaning: "sức chứa" }, { word: "optimize", type: "v.", meaning: "tối ưu hóa" }]
  },
  {
    id: "q0808",
    question: "The financial ______ released by the Meridian Group indicates a strong quarter for international exports.",
    options: { A: "predict", B: "predictive", C: "predicting", D: "prediction" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một danh từ làm chủ ngữ. 'Prediction' (sự dự báo) là danh từ phù hợp.",
    explanation_grammar: "Noun as Subject.",
    translation: "Dự báo tài chính được đưa ra bởi Meridian Group cho thấy một quý mạnh mẽ cho lĩnh vực xuất khẩu quốc tế.",
    core_vocabulary: [{ word: "indicate", type: "v.", meaning: "cho thấy/chỉ ra" }, { word: "prediction", type: "n.", meaning: "sự dự báo" }]
  },
  {
    id: "q0809",
    question: "The Zenith Manufacturing plant will undergo an annual ______ by an independent regulatory agency.",
    options: { A: "inspect", B: "inspection", C: "inspector", D: "inspected" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'an annual + Noun'. 'Inspection' (sự kiểm tra/thanh tra) là danh từ chỉ quá trình.",
    explanation_grammar: "Noun as Object of 'undergo'.",
    translation: "Nhà máy sản xuất Zenith sẽ trải qua đợt kiểm tra hàng năm bởi một cơ quan quản lý độc lập.",
    core_vocabulary: [{ word: "undergo", type: "v.", meaning: "trải qua" }, { word: "regulatory agency", type: "n.", meaning: "cơ quan quản lý" }]
  },
  {
    id: "q0810",
    question: "Employees at Summit Tech are encouraged to submit a formal ______ for the new project.",
    options: { A: "proposal", B: "propose", C: "proposed", D: "proposing" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một danh từ sau tính từ 'formal'. 'Proposal' (bản đề xuất) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Các nhân viên tại Summit Tech được khuyến khích nộp bản đề xuất chính thức cho dự án mới.",
    core_vocabulary: [{ word: "encourage", type: "v.", meaning: "khuyến khích" }, { word: "proposal", type: "n.", meaning: "bản đề xuất" }]
  },
  {
    id: "q0811",
    question: "Efficient ______ of international shipments is essential for meeting our quarterly corporate delivery targets.",
    options: { A: "manager", B: "management", C: "managing", D: "manage" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chỗ trống cần một danh từ đóng vai trò chủ ngữ. 'Management' (việc quản lý) là danh từ chỉ hoạt động.",
    explanation_grammar: "Noun as Subject.",
    translation: "Việc quản lý hiệu quả các chuyến hàng quốc tế là thiết yếu để đạt được các mục tiêu giao hàng quý của công ty.",
    core_vocabulary: [{ word: "management", type: "n.", meaning: "việc quản lý" }, { word: "essential", type: "adj.", meaning: "thiết yếu" }]
  },
  {
    id: "q0812",
    question: "The project manager created a comprehensive ______ to illustrate the sequence of upcoming tasks.",
    options: { A: "summarizing", B: "summarize", C: "summarized", D: "summary" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'a comprehensive + Noun'. 'Summary' (bản tóm tắt/sơ lược) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Quản lý dự án đã tạo ra một bản tóm tắt toàn diện để minh họa trình tự của các nhiệm vụ sắp tới.",
    core_vocabulary: [{ word: "comprehensive", type: "adj.", meaning: "toàn diện" }, { word: "sequence", type: "n.", meaning: "trình tự" }]
  },
  {
    id: "q0813",
    question: "The Omega Shipping Line announced a temporary ______ in its standard international delivery schedule.",
    options: { A: "disruption", B: "disrupted", C: "disrupt", D: "disruptive" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một danh từ sau mạo từ 'a' và tính từ 'temporary'. 'Disruption' (sự gián đoạn) là danh từ phù hợp.",
    explanation_grammar: "Noun as Object.",
    translation: "Hãng tàu Omega đã thông báo về sự gián đoạn tạm thời trong lịch trình giao hàng quốc tế tiêu chuẩn của mình.",
    core_vocabulary: [{ word: "disruption", type: "n.", meaning: "sự gián đoạn" }, { word: "schedule", type: "n.", meaning: "lịch trình" }]
  },
  {
    id: "q0814",
    question: "Before signing the final contract, both parties must reach a mutual ______ on the terms.",
    options: { A: "agreement", B: "agree", C: "agreed", D: "agreeable" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'reach + a/an + Adj + Noun'. 'Agreement' (thỏa thuận) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Trước khi ký hợp đồng cuối cùng, cả hai bên phải đạt được một thỏa thuận chung về các điều khoản.",
    core_vocabulary: [{ word: "mutual", type: "adj.", meaning: "chung/lẫn nhau" }, { word: "agreement", type: "n.", meaning: "thỏa thuận" }]
  },
  {
    id: "q0815",
    question: "The marketing department requires approval before finalizing the ______ of our booth at the expo.",
    options: { A: "decorative", B: "decorate", C: "decorating", D: "decoration" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một danh từ sau mạo từ 'the'. 'Decoration' (việc trang trí) là danh từ phù hợp.",
    explanation_grammar: "Noun as Object.",
    translation: "Bộ phận marketing yêu cầu phê duyệt trước khi hoàn tất việc trang trí gian hàng của chúng ta tại triển lãm.",
    core_vocabulary: [{ word: "finalize", type: "v.", meaning: "hoàn tất" }, { word: "decoration", type: "n.", meaning: "sự trang trí" }]
  },
  {
    id: "q0816",
    question: "The recent software update has led to a significant ______ in overall data processing productivity.",
    options: { A: "improving", B: "improve", C: "improvement", D: "improved" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'a significant + Noun'. 'Improvement' (sự cải thiện) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Bản cập nhật phần mềm gần đây đã dẫn đến một sự cải thiện đáng kể trong năng suất xử lý dữ liệu tổng thể.",
    core_vocabulary: [{ word: "productivity", type: "n.", meaning: "năng suất" }, { word: "significant", type: "adj.", meaning: "đáng kể" }]
  },
  {
    id: "q0817",
    question: "Strict security measures are necessary for the safe ______ of valuable overseas electronic cargo.",
    options: { A: "storing", B: "store", C: "storage", D: "stored" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chỗ trống cần một danh từ làm tân ngữ của giới từ 'for'. 'Storage' (việc lưu kho) là danh từ chỉ hoạt động/không gian.",
    explanation_grammar: "Noun as Object of Preposition.",
    translation: "Các biện pháp an ninh nghiêm ngặt là cần thiết để lưu kho an toàn các mặt hàng điện tử giá trị từ nước ngoài.",
    core_vocabulary: [{ word: "security measure", type: "n.", meaning: "biện pháp an ninh" }, { word: "storage", type: "n.", meaning: "việc lưu kho" }]
  },
  {
    id: "q0818",
    question: "The Liberty Trade Expo offers a great opportunity for ______ with global industry professionals.",
    options: { A: "collaborate", B: "collaboration", C: "collaborated", D: "collaborative" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau giới từ 'for' cần một danh từ. 'Collaboration' (sự cộng tác) là danh từ phù hợp.",
    explanation_grammar: "Noun after Preposition.",
    translation: "Triển lãm Thương mại Liberty mang lại cơ hội tuyệt vời để cộng tác với các chuyên gia trong ngành toàn cầu.",
    core_vocabulary: [{ word: "collaboration", type: "n.", meaning: "sự cộng tác" }, { word: "professional", type: "n.", meaning: "chuyên gia" }]
  },
  {
    id: "q0819",
    question: "The Apex Logistics Group is highly recognized for its reliable ______ of fragile electronic equipment.",
    options: { A: "deliver", B: "delivering", C: "delivered", D: "delivery" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một danh từ sau tính từ 'reliable'. 'Delivery' (việc giao hàng) là danh từ.",
    explanation_grammar: "Noun as Head of Noun Phrase.",
    translation: "Tập đoàn Apex Logistics được đánh giá cao nhờ việc giao các thiết bị điện tử dễ vỡ một cách đáng tin cậy.",
    core_vocabulary: [{ word: "recognized", type: "adj.", meaning: "được công nhận/đánh giá cao" }, { word: "delivery", type: "n.", meaning: "việc giao hàng" }]
  },
  {
    id: "q0820",
    question: "A thorough ______ of the latest market trends is required before launching the analytical service.",
    options: { A: "evaluative", B: "evaluation", C: "evaluating", D: "evaluate" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chỗ trống làm chủ ngữ của câu nên cần một danh từ. 'Evaluation' (sự đánh giá) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Một sự đánh giá kỹ lưỡng về các xu hướng thị trường mới nhất là yêu cầu cần thiết trước khi triển khai dịch vụ phân tích.",
    core_vocabulary: [{ word: "thorough", type: "adj.", meaning: "kỹ lưỡng/thấu đáo" }, { word: "evaluation", type: "n.", meaning: "sự đánh giá" }]
  },
  {
    id: "q0821",
    question: "High standards of ______ are strictly maintained throughout the entire supply chain manufacturing process.",
    options: { A: "excel", B: "excellently", C: "excellent", D: "excellence" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau 'of' cần một danh từ. 'Excellence' (sự xuất sắc/ưu tú) là danh từ.",
    explanation_grammar: "Noun after Preposition.",
    translation: "Các tiêu chuẩn cao về sự xuất sắc được duy trì nghiêm ngặt trong suốt quá trình sản xuất của chuỗi cung ứng.",
    core_vocabulary: [{ word: "standard", type: "n.", meaning: "tiêu chuẩn" }, { word: "excellence", type: "n.", meaning: "sự xuất sắc" }]
  },
  {
    id: "q0822",
    question: "The customer service team at Vertex Solutions handles every ______ with utmost professionalism and care.",
    options: { A: "inquiring", B: "inquired", C: "inquiry", D: "inquire" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "'Every' đi với danh từ số ít. 'Inquiry' (yêu cầu/thắc mắc) là danh từ.",
    explanation_grammar: "Noun as Object.",
    translation: "Đội ngũ dịch vụ khách hàng tại Vertex Solutions xử lý mọi thắc mắc với sự chuyên nghiệp và chu đáo cao nhất.",
    core_vocabulary: [{ word: "professionalism", type: "n.", meaning: "sự chuyên nghiệp" }, { word: "inquiry", type: "n.", meaning: "yêu cầu/thắc mắc" }]
  },
  {
    id: "q0823",
    question: "Nexus Logistics recently purchased new ______ to safely load delicate goods onto transport pallets.",
    options: { A: "equipped", B: "equip", C: "equipping", D: "equipment" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một danh từ sau tính từ 'new'. 'Equipment' (thiết bị) là danh từ không đếm được.",
    explanation_grammar: "Uncountable Noun.",
    translation: "Nexus Logistics gần đây đã mua thiết bị mới để bốc xếp các hàng hóa dễ vỡ lên các tấm pallet vận chuyển một cách an toàn.",
    core_vocabulary: [{ word: "purchase", type: "v.", meaning: "mua" }, { word: "equipment", type: "n.", meaning: "thiết bị" }]
  },
  {
    id: "q0824",
    question: "Please forward the revised financial ______ to the corporate accounting department by Friday afternoon.",
    options: { A: "stating", B: "stated", C: "statement", D: "state" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cụm danh từ 'financial statement' (báo cáo tài chính). 'Statement' là danh từ.",
    explanation_grammar: "Noun in Compound Noun Phrase.",
    translation: "Vui lòng chuyển báo cáo tài chính đã sửa đổi cho bộ phận kế toán công ty trước chiều thứ Sáu.",
    core_vocabulary: [{ word: "financial statement", type: "n.", meaning: "báo cáo tài chính" }, { word: "accounting", type: "n.", meaning: "kế toán" }]
  },
  {
    id: "q0825",
    question: "Orion Uniforms guarantees the prompt ______ of protective safety apparel to all factory workers.",
    options: { A: "shipment", B: "shipping", C: "shipped", D: "ship" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Sau mạo từ 'the' và tính từ 'prompt' cần một danh từ. 'Shipment' (lô hàng/sự giao hàng) là danh từ phù hợp.",
    explanation_grammar: "Noun as Object.",
    translation: "Orion Uniforms đảm bảo việc giao hàng nhanh chóng các trang phục bảo hộ cho tất cả các công nhân nhà máy.",
    core_vocabulary: [{ word: "protective", type: "adj.", meaning: "bảo hộ" }, { word: "shipment", type: "n.", meaning: "lô hàng/sự giao hàng" }]
  }
];

let content = fs.readFileSync(targetFile, 'utf8');
const questionsData = eval(content.replace('window.questionsData =', ''));

const updatedQuestionsData = questionsData.concat(newQuestions);

fs.writeFileSync(targetFile, 'window.questionsData = ' + JSON.stringify(updatedQuestionsData, null, 2) + ';', 'utf8');
console.log('Successfully added 25 questions for Danh từ & Đại từ - Test 4!');
