const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const newQuestions = [
  {
    id: "q0781",
    question: "The judges for this year's screenplay competition include ______ from Hanovi Studios.",
    options: { A: "representatives", B: "represents", C: "represented", D: "represent" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chỗ trống cần một danh từ đóng vai trò tân ngữ của động từ 'include'. 'Representatives' (người đại diện) là danh từ chỉ người ở số nhiều phù hợp với ngữ cảnh.",
    explanation_grammar: "Noun as Object (Person/Plural).",
    translation: "Ban giám khảo cho cuộc thi kịch bản năm nay bao gồm những người đại diện từ Hanovi Studios.",
    core_vocabulary: [{ word: "screenplay", type: "n.", meaning: "kịch bản" }, { word: "representative", type: "n.", meaning: "người đại diện" }]
  },
  {
    id: "q0782",
    question: "Liao Uniform Services has been a leading ______ of medical apparel for more than 30 years.",
    options: { A: "supplying", B: "supplier", C: "supplied", D: "supplies" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'a leading + Noun'. 'Supplier' (nhà cung cấp) là danh từ chỉ người/tổ chức phù hợp nhất.",
    explanation_grammar: "Noun as Complement (Person/Organization).",
    translation: "Liao Uniform Services là nhà cung cấp trang phục y tế hàng đầu trong hơn 30 năm qua.",
    core_vocabulary: [{ word: "apparel", type: "n.", meaning: "trang phục/quần áo" }, { word: "supplier", type: "n.", meaning: "nhà cung cấp" }]
  },
  {
    id: "q0783",
    question: "The Klassin Group's booth at the Liberty Architecture Expo has garnered much ______.",
    options: { A: "interested", B: "interesting", C: "interest", D: "interests" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "'Much' đi kèm với danh từ không đếm được. 'Interest' (sự quan tâm) là danh từ không đếm được phù hợp.",
    explanation_grammar: "Uncountable Noun with Quantifiers.",
    translation: "Gian hàng của Klassin Group tại Triển lãm Kiến trúc Liberty đã thu hút được nhiều sự quan tâm.",
    core_vocabulary: [{ word: "garner", type: "v.", meaning: "thu hút/thu được" }, { word: "booth", type: "n.", meaning: "gian hàng" }]
  },
  {
    id: "q0784",
    question: "Our ______ is responsible for performing quality-control reviews during production.",
    options: { A: "division", B: "divided", C: "dividing", D: "divisive" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Tính từ sở hữu 'Our' cần đi kèm một danh từ làm chủ ngữ. 'Division' (phòng/ban/bộ phận) là danh từ.",
    explanation_grammar: "Noun as Subject.",
    translation: "Bộ phận của chúng tôi chịu trách nhiệm thực hiện các đánh giá kiểm soát chất lượng trong quá trình sản xuất.",
    core_vocabulary: [{ word: "division", type: "n.", meaning: "bộ phận/phân khu" }, { word: "quality-control", type: "n.", meaning: "kiểm soát chất lượng" }]
  },
  {
    id: "q0785",
    question: "Before the updated design can go into ______, it must be approved by management.",
    options: { A: "product", B: "producer", C: "production", D: "productive" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'go into + Noun' (bắt đầu được đưa vào...). 'Production' (sự sản xuất) là danh từ phù hợp nhất.",
    explanation_grammar: "Noun after Preposition.",
    translation: "Trước khi thiết kế cập nhật có thể được đưa vào sản xuất, nó phải được ban quản lý phê duyệt.",
    core_vocabulary: [{ word: "approve", type: "v.", meaning: "phê duyệt" }, { word: "production", type: "n.", meaning: "sự sản xuất" }]
  },
  {
    id: "q0786",
    question: "A record number of appliance ______ came into the Port of Reece last month.",
    options: { A: "shipping", B: "shipments", C: "shipment", D: "shipped" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "'A number of' đi với danh từ số nhiều. 'Shipments' (các lô hàng) là danh từ số nhiều phù hợp.",
    explanation_grammar: "Plural Noun with Quantifiers.",
    translation: "Một số lượng kỷ lục các lô hàng thiết bị gia dụng đã cập cảng Reece vào tháng trước.",
    core_vocabulary: [{ word: "appliance", type: "n.", meaning: "thiết bị/đồ gia dụng" }, { word: "shipment", type: "n.", meaning: "lô hàng" }]
  },
  {
    id: "q0787",
    question: "KCLN Associates will enter into a business ______ with the contractor as soon as some of the terms are renegotiated.",
    options: { A: "agreeing", B: "agreeable", C: "agreement", D: "agreed" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Tính từ 'business' bổ nghĩa cho một danh từ. 'Agreement' (thỏa thuận/hợp đồng) là danh từ.",
    explanation_grammar: "Noun as Head of Noun Phrase.",
    translation: "KCLN Associates sẽ ký kết một thỏa thuận kinh doanh với nhà thầu ngay khi một số điều khoản được đàm phán lại.",
    core_vocabulary: [{ word: "contractor", type: "n.", meaning: "nhà thầu" }, { word: "agreement", type: "n.", meaning: "thỏa thuận/hợp đồng" }]
  },
  {
    id: "q0788",
    question: "______ for press coverage of the music festival will receive official responses by June 30.",
    options: { A: "Applies", B: "Applying", C: "Application", D: "Applicants" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chủ ngữ của câu cần là một danh từ chỉ người vì có hành động 'receive... responses'. 'Applicants' (những người nộp đơn) là phù hợp.",
    explanation_grammar: "Noun as Subject (Person).",
    translation: "Những người nộp đơn xin đưa tin về lễ hội âm nhạc sẽ nhận được phản hồi chính thức trước ngày 30 tháng 6.",
    core_vocabulary: [{ word: "applicant", type: "n.", meaning: "người nộp đơn" }, { word: "press coverage", type: "n.", meaning: "việc truyền thông/đưa tin" }]
  },
  {
    id: "q0789",
    question: "We can buy office ______ such as desks and printers from any of our company's approved vendors.",
    options: { A: "equipping", B: "equipment", C: "equip", D: "equipped" },
    correct_answer: "B",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một danh từ chung để chỉ đồ dùng. 'Equipment' (thiết bị) là danh từ không đếm được phổ biến.",
    explanation_grammar: "Uncountable Noun.",
    translation: "Chúng ta có thể mua thiết bị văn phòng như bàn làm việc và máy in từ bất kỳ nhà cung cấp nào đã được công ty phê duyệt.",
    core_vocabulary: [{ word: "equipment", type: "n.", meaning: "thiết bị" }, { word: "vendor", type: "n.", meaning: "nhà cung cấp" }]
  },
  {
    id: "q0790",
    question: "World Fish Supply delivers the freshest fish possible thanks to innovative ______ and shipping methods.",
    options: { A: "preservation", B: "preserve", C: "preserves", D: "preserved" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Chỗ trống cần một danh từ song hành với 'shipping methods'. 'Preservation' (sự bảo quản) là danh từ.",
    explanation_grammar: "Noun in Compound/Parallel structure.",
    translation: "World Fish Supply giao những con cá tươi nhất có thể nhờ vào các phương pháp bảo quản và vận chuyển tiên tiến.",
    core_vocabulary: [{ word: "innovative", type: "adj.", meaning: "tiên tiến/đổi mới" }, { word: "preservation", type: "n.", meaning: "sự bảo quản" }]
  },
  {
    id: "q0791",
    question: "Since she's running late for ______ meeting downtown, Ms. Joyce will have to catch a taxi.",
    options: { A: "herself", B: "she", C: "her", D: "hers" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một tính từ sở hữu đứng trước danh từ 'meeting'.",
    explanation_grammar: "Possessive Adjectives.",
    translation: "Vì cô ấy đang đi muộn cho cuộc họp của mình ở trung tâm thành phố, cô Joyce sẽ phải bắt taxi.",
    core_vocabulary: [{ word: "catch a taxi", type: "phr.", meaning: "bắt taxi" }, { word: "downtown", type: "adv./n.", meaning: "trung tâm thành phố" }]
  },
  {
    id: "q0792",
    question: "Workers are advised not to operate certain machines by ______.",
    options: { A: "their", B: "them", C: "they", D: "themselves" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'by + reflexive pronoun' (tự mình làm gì). 'Themselves' phù hợp với chủ ngữ 'Workers'.",
    explanation_grammar: "Reflexive Pronouns.",
    translation: "Các công nhân được khuyên không nên tự mình vận hành một số loại máy móc nhất định.",
    core_vocabulary: [{ word: "advise", type: "v.", meaning: "khuyên bảo" }, { word: "operate", type: "v.", meaning: "vận hành" }]
  },
  {
    id: "q0793",
    question: "New students at Staford College of Computer Science are advised to take a free students guide booklet and review ______ thoroughly.",
    options: { A: "it", B: "itself", C: "them", D: "themselves" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần một đại từ tân ngữ thay thế cho danh từ 'booklet' (số ít).",
    explanation_grammar: "Object Pronoun (Referring to Thing).",
    translation: "Sinh viên mới tại Cao đẳng Khoa học Máy tính Staford được khuyên nên lấy một cuốn sổ tay hướng dẫn sinh viên miễn phí và xem lại nó một cách kỹ lưỡng.",
    core_vocabulary: [{ word: "booklet", type: "n.", meaning: "cuốn sổ tay nhỏ" }, { word: "thoroughly", type: "adv.", meaning: "kỹ lưỡng" }]
  },
  {
    id: "q0794",
    question: "Ms. Woolner is hoping to change ______ daily routine to be more conductive to a healthy lifestyle.",
    options: { A: "herself", B: "hers", C: "she", D: "her" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần tính từ sở hữu đứng trước cụm danh từ 'daily routine'.",
    explanation_grammar: "Possessive Adjectives.",
    translation: "Cô Woolner đang hy vọng thay đổi thói quen hàng ngày của mình để có lợi hơn cho lối sống lành mạnh.",
    core_vocabulary: [{ word: "daily routine", type: "n.", meaning: "thói quen hàng ngày" }, { word: "conductive", type: "adj.", meaning: "có lợi/dẫn đến" }]
  },
  {
    id: "q0795",
    question: "Most of the farmers in this area depend on local supermarkets and restaurants which buy fruits and vegetables from ______.",
    options: { A: "they", B: "theirs", C: "them", D: "themselves" },
    correct_answer: "C",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần đại từ tân ngữ để thay thế cho 'the farmers' sau giới từ 'from'.",
    explanation_grammar: "Object Pronoun after Preposition.",
    translation: "Hầu hết các nông dân trong khu vực này phụ thuộc vào các siêu thị và nhà hàng địa phương, những nơi mua trái cây và rau củ từ họ.",
    core_vocabulary: [{ word: "depend on", type: "v.", meaning: "phụ thuộc vào" }, { word: "vegetable", type: "n.", meaning: "rau củ" }]
  },
  {
    id: "q0796",
    question: "The head of the marketing department attributed ______ success in the overseas market to motivated and hard-working employees.",
    options: { A: "them", B: "they", C: "itself", D: "its" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần tính từ sở hữu đứng trước danh từ 'success'. 'Its' thay cho 'the marketing department'.",
    explanation_grammar: "Possessive Adjectives (Referring to Organization).",
    translation: "Trưởng phòng marketing đã quy kết thành công của bộ phận tại thị trường nước ngoài cho những nhân viên có động lực và làm việc chăm chỉ.",
    core_vocabulary: [{ word: "attribute to", type: "v.", meaning: "quy kết cho/nhờ vào" }, { word: "motivated", type: "adj.", meaning: "có động lực" }]
  },
  {
    id: "q0797",
    question: "When interviewed, Susan explained that an inquisitive nature as a child made ______ interested in studying journalism.",
    options: { A: "her", B: "herself", C: "hers", D: "she" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cấu trúc 'make + object + adjective'. 'Her' là đại từ tân ngữ thay cho Susan.",
    explanation_grammar: "Object Pronoun.",
    translation: "Khi được phỏng vấn, Susan giải thích rằng bản tính tò mò khi còn nhỏ đã khiến cô ấy quan tâm đến việc học ngành báo chí.",
    core_vocabulary: [{ word: "inquisitive", type: "adj.", meaning: "tò mò/hay học hỏi" }, { word: "journalism", type: "n.", meaning: "ngành báo chí" }]
  },
  {
    id: "q0798",
    question: "Ms. Goldberry marked ______ revision in red ink before returning the manuscript to the author.",
    options: { A: "Hers", B: "Herself", C: "She", D: "Her" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần tính từ sở hữu đứng trước danh từ 'revision'.",
    explanation_grammar: "Possessive Adjectives.",
    translation: "Cô Goldberry đã đánh dấu bản sửa đổi của mình bằng mực đỏ trước khi trả lại bản thảo cho tác giả.",
    core_vocabulary: [{ word: "revision", type: "n.", meaning: "sự sửa đổi/bản sửa" }, { word: "manuscript", type: "n.", meaning: "bản thảo" }]
  },
  {
    id: "q0799",
    question: "At this year's orientation, the general manager took the time to personally welcome all new recruits in ______ usual, affable manner.",
    options: { A: "herself", B: "she", C: "hers", D: "her" },
    correct_answer: "D",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần tính từ sở hữu đứng trước 'usual, affable manner'.",
    explanation_grammar: "Possessive Adjectives.",
    translation: "Tại buổi định hướng năm nay, tổng quản lý đã dành thời gian để đích thân chào đón tất cả các tân binh theo phong cách niềm nở, thân thiện thường thấy của cô ấy.",
    core_vocabulary: [{ word: "recruit", type: "n.", meaning: "tân binh/nhân viên mới" }, { word: "affable", type: "adj.", meaning: "niềm nở/thân thiện" }]
  },
  {
    id: "q0800",
    question: "Susan Hardy will head the planning committee and all members involved in the new project will report back to ______.",
    options: { A: "her", B: "herself", C: "hers", D: "she" },
    correct_answer: "A",
    grammar_type: "Danh từ & Đại từ",
    explanation_reason: "Cần đại từ tân ngữ để thay thế cho 'Susan Hardy' sau giới từ 'to'.",
    explanation_grammar: "Object Pronoun.",
    translation: "Susan Hardy sẽ lãnh đạo ủy ban kế hoạch và tất cả các thành viên tham gia vào dự án mới sẽ báo cáo lại cho cô ấy.",
    core_vocabulary: [{ word: "head", type: "v.", meaning: "lãnh đạo/đứng đầu" }, { word: "report", type: "v.", meaning: "báo cáo" }]
  }
];

let content = fs.readFileSync(targetFile, 'utf8');
const questionsData = eval(content.replace('window.questionsData =', ''));

const updatedQuestionsData = questionsData.concat(newQuestions);

fs.writeFileSync(targetFile, 'window.questionsData = ' + JSON.stringify(updatedQuestionsData, null, 2) + ';', 'utf8');
console.log('Successfully added 20 questions for Danh từ & Đại từ - Test 3!');
