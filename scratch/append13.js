const fs = require('fs');
let code = fs.readFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'utf8');
code = code.replace('window.questionsData =', 'global.questionsData =');
eval(code);

const nq = [
  {
    "id": "q271",
    "question": "The new prototype from TechNova is not quite as ________ as the current model.",
    "options": { "A": "durably", "B": "durable", "C": "durable", "D": "durability" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc so sánh bằng 'as + Adj/Adv + as'. Đi sau động từ tobe 'is' cần một Tính Từ (durable) bổ nghĩa cho chủ ngữ 'prototype'.",
    "explanation_grammar": "S + tobe + (not) as + Adjective + as...",
    "translation": "Bản mẫu thử nghiệm mới đến từ hãng TechNova thì không hoàn toàn được bền bỉ chắc chắn cho bằng dòng sản phẩm hiện tại.",
    "core_vocabulary": [{"word": "prototype", "type": "n.", "meaning": "bản nguyên mẫu"}]
  },
  {
    "id": "q272",
    "question": "Modernizing the assembly line made the production process more ________ than before.",
    "options": { "A": "productively", "B": "productive", "C": "productivity", "D": "produce" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc Make + Tân Ngữ + Tính Từ (Làm cho cái gì thế nào). So sánh hơn 'more + Adj + than' -> cần điền tính từ 'productive'.",
    "explanation_grammar": "Make + Object + more + Tính Từ + than.",
    "translation": "Việc hiện đại hóa dây chuyền lắp ráp đã làm cho quy trình sản xuất trở nên có năng suất tốt hơn so với trước đây.",
    "core_vocabulary": [{"word": "productive", "type": "adj.", "meaning": "có năng suất hiệu quả"}]
  },
  {
    "id": "q273",
    "question": "Ms. Lan was honored for having the most __________ customer service rating at VietTel.",
    "options": { "A": "impressive", "B": "impressively", "C": "impress", "D": "impression" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "So sánh nhất 'the most + Adjective' bổ nghĩa trực tiếp cho cụm danh từ 'rating'. Chọn tính từ 'impressive' (ấn tượng).",
    "explanation_grammar": "The most + Adjective + Noun.",
    "translation": "Chị Lan đã được vinh danh khen thưởng vì đã đạt được thứ hạng đánh giá dịch vụ chăm sóc khách hàng ấn tượng nhất tại VietTel.",
    "core_vocabulary": [{"word": "impressive", "type": "adj.", "meaning": "gây ấn tượng mạnh"}]
  },
  {
    "id": "q274",
    "question": "The upgraded engine makes the Helios sedan more ________ than its predecessors.",
    "options": { "A": "powerful", "B": "powerfully", "C": "power", "D": "powerfulness" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "Vẫn là cấu trúc Make + Tân Ngữ + Tính Từ. Đi kèm so sánh hơn 'more + Adj + than', vị trí này cần điền tính từ 'powerful'.",
    "explanation_grammar": "Make something more + Adjective.",
    "translation": "Cỗ động cơ được nâng cấp đã làm cho chiếc xe sedan Helios trở nên mạnh mẽ uy lực hơn hẳn so với những dòng xe đời tiền nhiệm.",
    "core_vocabulary": [{"word": "predecessor", "type": "n.", "meaning": "người tiền nhiệm/ phiên bản trước"}]
  },
  {
    "id": "q275",
    "question": "The marketing campaign for Solis energy drinks was not as ________ as expected.",
    "options": { "A": "succeed", "B": "successful", "C": "success", "D": "successfully" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "So sánh bằng với giới từ 'as... as' và đứng sau động từ tobe 'was' nên vị trí này cần một Tính Từ.",
    "explanation_grammar": "Tobe + as + Adjective + as.",
    "translation": "Chiến dịch quảng cáo cho dòng nước tăng lực Solis đã không có được mức độ thành công bùng nổ như đợt kỳ vọng xuất ra.",
    "core_vocabulary": [{"word": "campaign", "type": "n.", "meaning": "chiến dịch mảng quảng bá"}]
  },
  {
    "id": "q276",
    "question": "Mr. Chen received an award for developing the most __________ software solution at ByteCore.",
    "options": { "A": "efficient", "B": "efficient", "C": "efficiently", "D": "efficiency" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "So sánh nhất bổ sung cho 'software solution'. Dùng 'The most + Adjective + Noun'. Tính từ 'efficient' (hiệu quả).",
    "explanation_grammar": "The most + Adjective + Noun.",
    "translation": "Ông Chen đã được trao tặng một phần thưởng nhờ công đã tự tay phát triển ra một giải pháp phần mềm có hiệu suất cao nhất tại công ty ByteCore.",
    "core_vocabulary": [{"word": "efficient", "type": "adj.", "meaning": "hiệu quả, có năng suất"}]
  },
  {
    "id": "q277",
    "question": "Heavy rain made the outdoor construction site more ________ than the indoor facility.",
    "options": { "A": "hazardous", "B": "hazardousness", "C": "hazardously", "D": "hazard" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "Make + O + Tính từ. Kết hợp công thức so sánh hơn, cần điền tính từ 'hazardous' (nguy hiểm).",
    "explanation_grammar": "Make + Object + more + Tính Từ.",
    "translation": "Những trận mưa rào nặng hạt đã làm cho công trường thi công ở ngoài trời trở nên nguy hiểm độc hại hơn hẳn khu vực trú ở trong nhà.",
    "core_vocabulary": [{"word": "hazardous", "type": "adj.", "meaning": "nguy hiểm rủi ro"}]
  },
  {
    "id": "q278",
    "question": "The interior of the Grand Plaza Hotel is not quite as ________ as the brochures suggest.",
    "options": { "A": "luxuriousness", "B": "luxurious", "C": "luxuriously", "D": "luxury" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc so sánh bằng 'as... as' và sau động từ tobe thì bắt buộc nhét tính từ.",
    "explanation_grammar": "Tobe + as + Tính từ + as.",
    "translation": "Phần cảnh quan nội thất bên trong khách sạn Grand Plaza Hotel thật sự là không được sang trọng quý phái như những tờ bướm quảng cáo tâng bốc.",
    "core_vocabulary": [{"word": "luxurious", "type": "adj.", "meaning": "sang trọng quý tộc"}]
  },
  {
    "id": "q279",
    "question": "Streamlining the application process made the recruitment more ________ than last year.",
    "options": { "A": "effectiveness", "B": "effective", "C": "effect", "D": "effectively" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "Động từ 'make' + tân ngữ + Tính từ. Kết hợp so sánh hơn, đáp án là tính từ 'effective'.",
    "explanation_grammar": "Make + Noun + more + Tính từ.",
    "translation": "Việc tinh gọn lại quy trình ứng tuyển nộp đơn đã làm cho khâu tuyển dụng của công ty trở nên hiệu quả hơn so với năm qua.",
    "core_vocabulary": [{"word": "streamlining", "type": "n/v.", "meaning": "tinh chỉnh, tạo cấu trúc hợp lý"}]
  },
  {
    "id": "q280",
    "question": "Dr. Aris was recognized for conducting the most __________ research project at BioLab Inc.",
    "options": { "A": "comprehensive", "B": "comprehensiveness", "C": "comprehensively", "D": "comprehensive" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "So sánh nhất đi với Tính Từ để bổ nghĩa cho 'research project'. 'Comprehensive' là tính từ nguyên gốc.",
    "explanation_grammar": "The most + Adj + Noun.",
    "translation": "Tiến sĩ Aris đã được ghi nhận công lao vì đã làm chủ thầu một đề án nghiên cứu có tính bao quát toàn diện nhất tại tập đoàn BioLab Inc.",
    "core_vocabulary": [{"word": "comprehensive", "type": "adj.", "meaning": "bao quát tổng thể toàn diện"}]
  },
  {
    "id": "q281",
    "question": "The leather used in Zenith handbags is not as ________ as that of premium competitors.",
    "options": { "A": "flexibility", "B": "flexes", "C": "flexible", "D": "flexibly" },
    "correct_answer": "C",
    "grammar_type": "So sánh",
    "explanation_reason": "Tobe 'is' đi với so sánh bằng 'as ... as'. Cần chọn tính từ 'flexible'.",
    "explanation_grammar": "Tobe + as + Tính Từ + as.",
    "translation": "Thớ chất liệu da thật dùng trong các mẫu túi xách của Zenith không được dẻo dai linh hoạt cho bằng thứ da của các đối thủ phân khúc cao cấp.",
    "core_vocabulary": [{"word": "flexible", "type": "adj.", "meaning": "dẻo, linh hoạt"}]
  },
  {
    "id": "q282",
    "question": "The specialized training made the junior consultants more ________ than the interns.",
    "options": { "A": "knowledgeable", "B": "knowledgeably", "C": "know", "D": "knowledge" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc kinh điển Make + sb + Tính từ.",
    "explanation_grammar": "Make + Tân ngữ + more + Adj.",
    "translation": "Khóa huấn luyện chuyên sâu đã thay đổi những nhân viên tư vấn cấp dưới trở nên có tầm hiểu biết sâu rộng hơn nhiều so với lính thực tập.",
    "core_vocabulary": [{"word": "knowledgeable", "type": "adj.", "meaning": "am hiểu rộng thông thái"}]
  },
  {
    "id": "q283",
    "question": "Mr. Kim was praised for maintaining the most __________ budget report at Hansol Corp.",
    "options": { "A": "accurate", "B": "accuracy", "C": "accurately", "D": "accurate" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "Bổ ngữ tính trạng so sánh nhất 'the most' cho cụm 'budget report'. Tính từ cần điền là 'accurate'.",
    "explanation_grammar": "The most + Adjective + Danh từ.",
    "translation": "Trưởng phòng Kim đã được ca ngợi vì lưu giữ được một bản báo cáo ngân sách chuẩn xác mực thước nhất tại tập đoàn Hansol Corp.",
    "core_vocabulary": [{"word": "accurate", "type": "adj.", "meaning": "chuẩn xác chính xác"}]
  },
  {
    "id": "q284",
    "question": "The latest tablet from K-Tech is more ________ than the version released last summer.",
    "options": { "A": "portably", "B": "porting", "C": "portability", "D": "portable" },
    "correct_answer": "D",
    "grammar_type": "So sánh",
    "explanation_reason": "So sánh hơn diễn dịch cho động từ tobe 'is', cần thả vô một Tính từ 'portable'.",
    "explanation_grammar": "Tobe + more + Tính Từ + than.",
    "translation": "Dòng máy tính bảng mỏng nhẹ mới nhất từ K-Tech thì mang tính di động tiện dụng hơn so với bản phát hành hồi mùa hè năm ngoái.",
    "core_vocabulary": [{"word": "portable", "type": "adj.", "meaning": "khả năng cầm tay, xách tay dễ di chuyển"}]
  },
  {
    "id": "q285",
    "question": "The customer support at SwiftAir is not quite as ________ as that of larger airlines.",
    "options": { "A": "responsively", "B": "responsiveness", "C": "responsive", "D": "responsive" },
    "correct_answer": "C",
    "grammar_type": "So sánh",
    "explanation_reason": "So sánh bằng 'as...as' sau động từ tobe 'is'. Chọn Tính từ 'responsive'.",
    "explanation_grammar": "Tobe + as + Tính Từ + as.",
    "translation": "Đội ngũ chuyên lo dịch vụ chăm sóc khách hàng tại SwiftAir thì không phản hồi nhanh nhạy bén bằng đội ngũ của các hãng máy bay khổng lồ khác.",
    "core_vocabulary": [{"word": "responsive", "type": "adj.", "meaning": "đáp hồi, phản hồi nhanh chóng"}]
  },
  {
    "id": "q286",
    "question": "Investing in solar panels made the office building more ________ than the old warehouse.",
    "options": { "A": "sustainability", "B": "sustainable", "C": "sustainably", "D": "sustain" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc Make + O + Adj. So sánh hơn cần tính từ bổ nghĩa 'sustainable' (bền vững).",
    "explanation_grammar": "Make something more + Adj + than...",
    "translation": "Việc dốc tiền đầu tư vào bộ pin năng lượng mặt trời làm cho tòa nhà văn phòng sinh thái bền vững hơn hẳn so với nhà kho cũ.",
    "core_vocabulary": [{"word": "sustainable", "type": "adj.", "meaning": "tính bền vững thân thiện sinh thái"}]
  },
  {
    "id": "q287",
    "question": "Ms. Gupta was credited with designing the most __________ logo at Creative Edge Agency.",
    "options": { "A": "distinct", "B": "distinctively", "C": "distinct", "D": "distinction" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "So sánh nhất 'the most + Adj'. Tính từ 'distinct' là miếng ghép cần điền.",
    "explanation_grammar": "The most + Adjective + Danh Từ.",
    "translation": "Nữ thiết kế Gupta đã được ghi nhận công lao vì đã vẽ nên một logo biểu tượng khác biệt độc đáo nhất vào vòng làm việc tại Creative Edge Agency.",
    "core_vocabulary": [{"word": "distinct", "type": "adj.", "meaning": "dị biệt tách rời rõ nét"}]
  },
  {
    "id": "q288",
    "question": "The new security system is more ________ than the one used at the previous headquarters.",
    "options": { "A": "reliable", "B": "reliability", "C": "reliably", "D": "reliable" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "Tobe + more + Tính từ. 'Reliable' (đáng tin cậy) là sự lựa chọn dành cho hệ thống an ninh.",
    "explanation_grammar": "Tobe + more + Tính từ + than.",
    "translation": "Hệ thống hàng rào an ninh mới đảm bảo mang hứa hẹn về độ đáng tin cậy hơn nhiều so với hệ thống từng lắp ráp ở tòa tổng cũ.",
    "core_vocabulary": [{"word": "reliable", "type": "adj.", "meaning": "tính đáng tin cậy ưu tú an tâm"}]
  },
  {
    "id": "q289",
    "question": "The fabric of the ActiveWear line is not as ________ as the cotton used in basic shirts.",
    "options": { "A": "breathable", "B": "breathe", "C": "breath", "D": "breathability" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "So sánh bằng tobe + as + Adj + as. Tính từ 'breathable' (thoáng khí).",
    "explanation_grammar": "Cấu trúc cân bằng bằng Tính Từ.",
    "translation": "Chất lượng vải của dòng thể thao ActiveWear không mang lại độ thông thoáng thoát khí mát mẻ bằng so với chất vải thô bông cotton hay xài vào may áo phông thường.",
    "core_vocabulary": [{"word": "breathable", "type": "adj.", "meaning": "độ nhẹ thoát thông hơi thoáng mát"}]
  },
  {
    "id": "q290",
    "question": "Regular maintenance makes the industrial generators more ________ than those left unserviced.",
    "options": { "A": "dependency", "B": "dependably", "C": "depend", "D": "dependable" },
    "correct_answer": "D",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc Make + danh từ tân ngữ + more + Tính từ. 'Dependable' là từ thích hợp.",
    "explanation_grammar": "Make + O + more + Tính Từ.",
    "translation": "Công tác tu bổ bảo dưỡng theo chu kỳ sẽ làm cho bộ máy phát điện công nghiệp trở nên mượt và đáng đáng tin dùng dựa cậy hơn so với mấy cục thiết bị nằm không bị lãng quên bảo trì.",
    "core_vocabulary": [{"word": "dependable", "type": "adj.", "meaning": "đáng tin dựa cậy tốt"}]
  },
  {
    "id": "q291",
    "question": "Mr. Rossi was celebrated for achieving the most __________ growth rate at Milan Finance.",
    "options": { "A": "consistently", "B": "consistent", "C": "consistent", "D": "consistency" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "So sánh nhất bổ nghĩa cho dnah từ 'growth rate'. Dùng The most + Tính Từ.",
    "explanation_grammar": "The most + Adj + N.",
    "translation": "Trưởng phòng Rossi đã được xướng ca trong lễ tuyên dương vì đã gặt được cột mốc tỉ số tăng trưởng ổn định vững bền nhất tại Milan Finance.",
    "core_vocabulary": [{"word": "consistent", "type": "adj.", "meaning": "kiên định đều đặn vững bền"}]
  },
  {
    "id": "q292",
    "question": "The user interface of the Applo software is more ________ than the rival platform.",
    "options": { "A": "intuition", "B": "intuitively", "C": "intuitive", "D": "intuitive" },
    "correct_answer": "C",
    "grammar_type": "So sánh",
    "explanation_reason": "Tobe 'is' kết hợp so sánh hơn 'more'. Cần một Tính Từ.",
    "explanation_grammar": "Tobe + more + Adj + than.",
    "translation": "Giao diện dùng để thao tác tương tác chạm vuốt trên phần mềm hệ Applo có tính trực quan và dễ xài hơn so với mặt bằng nền cạnh tranh của các xưởng đối thủ.",
    "core_vocabulary": [{"word": "intuitive", "type": "adj.", "meaning": "dễ nắm hiểu dùng thông quan bằng não giác trực quan"}]
  },
  {
    "id": "q293",
    "question": "The delivery schedule for the international shipment was not as ________ as promised.",
    "options": { "A": "predictable", "B": "predictability", "C": "predictably", "D": "predict" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "So sánh bằng tobe 'was' + as + Tính Từ + as. Chọn tính từ 'predictable' là vẹn câu rành mạch nhất.",
    "explanation_grammar": "Tobe + as + Adj + as.",
    "translation": "Lịch hẹn mốc giao hàng của các đường vận xả hàng quốc tế thường thì không hề diễn ra suôn sẻ chuẩn đoán và đúng mốc như những dòng hứa hẹn tụi nó phán trước.",
    "core_vocabulary": [{"word": "predictable", "type": "adj.", "meaning": "dễ đánh đoán lường suy rành"}]
  },
  {
    "id": "q294",
    "question": "Adding more memory made the server more ________ than the entry-level model.",
    "options": { "A": "functionality", "B": "functional", "C": "functionally", "D": "functional" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "Lại gặp make + O + Adj. Điền tính từ.",
    "explanation_grammar": "Make + O + more + Tính Từ.",
    "translation": "Kỹ thuật cắm bo bo nhét ram nhớ lớn hơn khiến cho con hệ bệ máy server trạm chủ đạt hiệu năng đa dụng chức năng phong phú hơn hẳn so với dòng cơ bản mặc định thường dùng.",
    "core_vocabulary": [{"word": "functional", "type": "adj.", "meaning": "vận hành mượt, đa đáp ứng chức năng vận hành"}]
  },
  {
    "id": "q295",
    "question": "Mrs. Thompson was recognized for having the most __________ influence on the legal team.",
    "options": { "A": "professionalism", "B": "professional", "C": "professional", "D": "professionally" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "The most + Adj bổ nghĩa cho influence. 'Professional' (chuyên nghiệp) là tính từ.",
    "explanation_grammar": "The most + Adjective + Danh từ.",
    "translation": "Cô Thompson đã vinh dự được xướng nhận diện là người có mức độ phong cách năng lực trình nghiệp độ cực kì uyên thâm nghề chuẩn đẳng cấp tạo ảnh hưởng nhất đối với toàn bộ hệ thống đội luật pháp quy chế.",
    "core_vocabulary": [{"word": "professional", "type": "adj.", "meaning": "đẳng mức chuyên nghiệp thao tác trình đồ lính chuyên môn cao"}]
  }
];

global.questionsData = global.questionsData.concat(nq);

fs.writeFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'window.questionsData = ' + JSON.stringify(global.questionsData, null, 2) + ';');
