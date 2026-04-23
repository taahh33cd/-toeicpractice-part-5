const fs = require('fs');
let code = fs.readFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'utf8');
code = code.replace('window.questionsData =', 'global.questionsData =');
eval(code);

const nq = [
  {
    "id": "q111",
    "question": "The hotel's ______ shuttle bus will take guests to Hong Kong's major landmarks.",
    "options": { "A": "complimentary", "B": "complimenting", "C": "compliment", "D": "compliments" },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Vị trí ngay trước cụm danh từ 'shuttle bus' cần một tính từ để bổ nghĩa. 'complimentary' (miễn phí) là tính từ.",
    "explanation_grammar": "Tính từ (Adjective) + Danh từ (Noun).",
    "translation": "Xe buýt đưa đón miễn phí của khách sạn sẽ đưa du khách đến các địa danh lớn của Hồng Kông.",
    "core_vocabulary": [{"word": "complimentary", "type": "adj.", "meaning": "miễn phí, tặng kèm"}, {"word": "landmark", "type": "n.", "meaning": "địa danh, cột mốc"}]
  },
  {
    "id": "q112",
    "question": "The event planner determined that Tuesday's forum will require ______ chairs.",
    "options": { "A": "additional", "B": "addition", "C": "additions", "D": "additionally" },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Trước danh từ 'chairs' cần có tính từ bổ nghĩa cho nó. Tính từ 'additional' (bổ sung/thêm) là từ ta cần tìm.",
    "explanation_grammar": "Tính từ bổ nghĩa cho danh từ đứng sau nó.",
    "translation": "Người lên kế hoạch sự kiện xác định rằng diễn đàn của ngày thứ Ba sẽ cần thêm ghế.",
    "core_vocabulary": [{"word": "additional", "type": "adj.", "meaning": "phát sinh, thêm vào"}, {"word": "determine", "type": "v.", "meaning": "xác định, quyết định"}]
  },
  {
    "id": "q113",
    "question": "Lakeside Shopping Center has undergone ______ renovations in the last decade.",
    "options": { "A": "multiples", "B": "multiply", "C": "multiple", "D": "multiplied" },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Danh từ 'renovations' (sự tu sửa) cần tính từ đứng trước để bổ nghĩa nhằm tạo ra một cụm danh từ hoàn chỉnh làm tân ngữ cho 'undergone'. 'multiple' mang nghĩa 'nhiều lần/đa'.",
    "explanation_grammar": "Tính từ (Adj) + Danh từ (Noun).",
    "translation": "Trung tâm mua sắm Lakeside đã trải qua nhiều lần tu sửa trong suốt thập kỷ qua.",
    "core_vocabulary": [{"word": "undergo", "type": "v.", "meaning": "trải qua"}, {"word": "renovation", "type": "n.", "meaning": "sự tu sửa, đổi mới"}]
  },
  {
    "id": "q114",
    "question": "The digital advertising campaign has generated ______ interest in the clothing line.",
    "options": { "A": "substantially", "B": "substance", "C": "substantial", "D": "substances" },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Đứng trước danh từ gốc 'interest' (sự quan tâm), ta cần tính từ 'substantial' để hợp thành cụm danh từ tân ngữ 'substantial interest' (Sự chú ý đáng kể).",
    "explanation_grammar": "Tính từ chỉ đặc điểm theo sau danh từ chính.",
    "translation": "Chiến dịch quảng cáo kỹ thuật số đã tạo ra được sự quan tâm đáng kể dành cho dòng quần áo này.',",
    "core_vocabulary": [{"word": "substantial", "type": "adj.", "meaning": "đáng kể, lớn lao"}, {"word": "generate", "type": "v.", "meaning": "tạo ra, sinh ra"}]
  },
  {
    "id": "q115",
    "question": "The Ladoff Building was constructed ______ in 1923 and stood two stories tall.",
    "options": { "A": "original", "B": "originally", "C": "originated", "D": "origin" },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Bổ nghĩa cho động từ 'constructed' (được xây dựng) đòi hỏi một trạng từ cách thức. 'originally' (ban đầu/nguyên thủy) miêu tả cách nó được xây.",
    "explanation_grammar": "Động từ (Verb) + Trạng từ (Adverb).",
    "translation": "Tòa nhà Ladoff được xây dựng nguyên bản vào năm 1923 và đứng cao 2 tầng.",
    "core_vocabulary": [{"word": "construct", "type": "v.", "meaning": "xây dựng"}, {"word": "originally", "type": "adv.", "meaning": "nguyên gốc, thuở ban đầu"}]
  },
  {
    "id": "q116",
    "question": "Senior hotel manager salaries differ ______ by company, location, and experience.",
    "options": { "A": "great", "B": "greatly", "C": "greater", "D": "greatest" },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "'differ' (khác biệt) là động từ chính của câu, do đó cần trạng từ đính kèm theo sau để bổ nghĩa mức độ cho sự khác thường đó.",
    "explanation_grammar": "Động từ (Verb) + Trạng từ bổ nghĩa (Adverb).",
    "translation": "Mức lương của các giám đốc khách sạn cấp cao rất có sự khác biệt lớn tùy vào công ty, địa điểm và kinh nghiệm.",
    "core_vocabulary": [{"word": "differ", "type": "v.", "meaning": "khác nhau, khác biệt"}, {"word": "salary", "type": "n.", "meaning": "mức lương"}]
  },
  {
    "id": "q117",
    "question": "Skymills Insurance grew ______ from a small business to a midsize company with 350 employees.",
    "options": { "A": "quickest", "B": "quickly", "C": "quick", "D": "quicker" },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Trạng từ 'quickly' (nhanh chóng) đứng sau động từ 'grew' (phát triển) có tác dụng phụ trợ để diễn tả chiều hướng tính chất quá trình phát triển diễn ra như thế nào.",
    "explanation_grammar": "S + V + Adv (bổ nghĩa trạng thái hành động).",
    "translation": "Hãng bảo hiểm Skymills đã lớn mạnh một cách nhanh chóng từ một doanh nghiệp nhỏ lên công ty cỡ vừa có doanh số 350 nhân sự.",
    "core_vocabulary": [{"word": "grow", "type": "v.", "meaning": "lớn lên, phát triển"}, {"word": "midsize", "type": "adj.", "meaning": "tầm trung, có kích cỡ vừa"}]
  },
  {
    "id": "q118",
    "question": "The new software at Patel Industries has been working ______ since it was installed last year.",
    "options": { "A": "reliably", "B": "more reliable", "C": "reliable", "D": "to rely" },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Tương tự, động từ chính 'working' (hoạt động) nhất thiết phải cần phụ họa là một trạng từ đứng kế nó để bổ sung thêm khía cạnh cách hành động.",
    "explanation_grammar": "Verb + Adverb (Trạng từ mang đuôi ly).",
    "translation": "Phần mềm mới tại cơ sở Patel Industries đã vận hành rất mượt mà đáng tin cậy kể từ khi nó được cài đặt năm ngoái.",
    "core_vocabulary": [{"word": "reliability", "type": "n.", "meaning": "sự tin cậy, sự vững vàng"}, {"word": "install", "type": "v.", "meaning": "cài đặt"}]
  },
  {
    "id": "q119",
    "question": "Justlox Inc., is planning to ______ redesign Model 543Q with its partners in Britain to ensure a better product.",
    "options": { "A": "collaborative", "B": "collaboratively", "C": "collaborate", "D": "collaboration" },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Đứng chen giữa 'to' (hoặc to be) và động từ chính 'redesign', chúng ta có ngay một chỗ trống ngữ pháp được sinh ra để dành cho Trạng từ nhằm mục đích bổ nghĩa lên hành động.",
    "explanation_grammar": "Trạng từ chèn vào giữa To và Verb:  to + Adverb + Verb bare.",
    "translation": "Đơn vị Justlox Inc. đang chuẩn bị lên kế hoạch hợp tác thiết kế lại nguyên mẫu model 543Q với các đối tác bên Vương quốc Anh để bảo chứng một sản phẩm tốt hơn.",
    "core_vocabulary": [{"word": "collaboratively", "type": "adv.", "meaning": "một cách có hệ thống hợp tác"}, {"word": "redesign", "type": "v.", "meaning": "thiết kế lại"}]
  },
  {
    "id": "q120",
    "question": "Sewerd Furnishings is closing some of its showrooms because customers are ______ ordering furniture online.",
    "options": { "A": "increased", "B": "increasing", "C": "increase", "D": "increasingly" },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Môt trạng từ (increasingly) ngự ngay giữa to be 'are' và V-ing 'ordering' để bổ trợ tính chất cho toàn bộ hành động.",
    "explanation_grammar": "Vị trí To be + Adverb + V-ing.",
    "translation": "Cửa hàng đồ nội thất Sewerd Furnishings đang dần đóng cửa bớt một số siêu thị trưng bày vì xu hướng khách hàng ngày càng gia tăng lựa chọn đặt đồ trên mạng.",
    "core_vocabulary": [{"word": "showroom", "type": "n.", "meaning": "phòng trưng bày"}, {"word": "increasingly", "type": "adv.", "meaning": "càng ngày càng"}]
  },
  {
    "id": "q121",
    "question": "Restaurants in Rondale must follow all ______ health guidelines.",
    "options": { "A": "localize", "B": "local", "C": "locally", "D": "locals" },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Trống nằm trước cụm danh từ 'health guidelines', lúc này ta cần một Tính từ bổ nghĩa để hợp lại là một cụm danh từ với định hướng mở rộng nhất. 'local' (thuộc địa phương).",
    "explanation_grammar": "Tính từ + (Danh từ + Danh từ).",
    "translation": "Các nhà hàng quanh khu Rondale đều phải tuân thủ mọi nguyên tắc thực hành tiêu chuẩn y tế của địa phương.",
    "core_vocabulary": [{"word": "guideline", "type": "n.", "meaning": "nguyên tắc, chỉ đạo phương hướng"}]
  },
  {
    "id": "q122",
    "question": "Before work can begin at the construction site, the permit applications must be ______ processed.",
    "options": { "A": "relevance", "B": "relevantly", "C": "relevancies", "D": "relevant" },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Giữa cấu trúc bị động 'be... processed' (được xử lý), từ đứng vào chỉ có thể là một Trạng từ giúp tăng thêm sức biểu cảm cho hành động vây quanh nó.",
    "explanation_grammar": "Tobe + Trạng từ + V_ed (quá khứ phân từ).",
    "translation": "Trước khi công việc chính thức đi vào hoạt động ở công trường, các đề xuất cấp phép cũng phải được xử lý một cách hợp tính thích đáng.",
    "core_vocabulary": [{"word": "permit", "type": "n.", "meaning": "giấy cấp phép"}, {"word": "process", "type": "v.", "meaning": "xử lý, điều hành"}]
  },
  {
    "id": "q123",
    "question": "We made a ______ estimate of how many tourists to expect in the coming month.",
    "options": { "A": "conservation", "B": "conservatism", "C": "conservatively", "D": "conservative" },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau mạo từ 'a', bổ trợ cho danh từ 'estimate' (sự ước tính) sẽ yêu cầu một tính từ đứng trước đó. 'conservative' trong trường hợp này mang nghĩa khiêm tốn / cẩn trọng / không nói lố.",
    "explanation_grammar": "Mạo từ + Tính từ + Danh từ.",
    "translation": "Chúng tôi đã tự lập ra một con số ước đoán an toàn về lượng du khách kỳ vọng sẽ trẩy mùa trong cái tháng sắp tới.",
    "core_vocabulary": [{"word": "conservative", "type": "adj.", "meaning": "bảo thủ, dè dặt, cẩn trọng"}, {"word": "estimate", "type": "n.", "meaning": "sự đánh giá, ước tính"}]
  },
  {
    "id": "q124",
    "question": "Chunto Consultancy Service recommended a ______ way of balancing the annual budget.",
    "options": { "A": "successfully", "B": "successful", "C": "succeed", "D": "success" },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Vẫn giống hệt quy tắc kinh điển, 'way' (cách thức/đường hướng) là Danh từ nên bị kiểm soát bởi một Tính từ bổ nghĩa phía trước nó 'successful' (thành công).",
    "explanation_grammar": "A/An + Tính từ + Danh từ.",
    "translation": "Hãng Chunto Consultancy Service đã đề bạt xuất lên một cách thức thành thành công vượt trội nhằm trung hòa và cân đối kinh phí tài chính thường niên.",
    "core_vocabulary": [{"word": "recommend", "type": "v.", "meaning": "đề nghị, kiến nghị"}, {"word": "annual budget", "type": "n.", "meaning": "ngân sách hằng năm"}]
  },
  {
    "id": "q125",
    "question": "Norvo Financial has built an ______ client base in a short period of time.",
    "options": { "A": "impressive", "B": "impressively", "C": "impresses", "D": "impress" },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cụm danh từ 'client base' (mạng lưới tệp khách hàng) cần tính từ lấp vào đằng trước để sinh ra cụm hoàn thiện 'một mạng lưới khách hàng ấn tượng'. Tận cùng -ive là đại diện tiêu biểu của Tính từ.",
    "explanation_grammar": "An + Tính từ + Noun Phrase.",
    "translation": "Norvo Financial đã tự vun đắp bồi thực lên một tệp khách hàng ấn tượng dẫu chỉ trong một thời điểm thời gian vô cùng vắn tắt.",
    "core_vocabulary": [{"word": "impressive", "type": "adj.", "meaning": "gây điểm xuyết tượng đài, ấn tượng"}, {"word": "client base", "type": "n.", "meaning": "tệp/cơ sở khách hàng mạng"}]
  },
  {
    "id": "q126",
    "question": "Walter Keegan was ______ hired as a salesperson, but he soon became head of the marketing department.",
    "options": { "A": "original", "B": "originals", "C": "originality", "D": "originally" },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Bám đuôi giới từ Tobe 'was' để dẫn lối sang phân từ 'hired' (được thuê mướn) bắt buộc phải là liên hiệp chèn giữa của một Trạng từ (originally) nhằm phụ nghĩa thêm sự tình.",
    "explanation_grammar": "Tobe + Trạng từ + V(P.P - Động từ quá khứ chỉ thể Bị Động).",
    "translation": "Anh chàng Walter Keegan này lúc thuở ban đầu cũng chỉ rặt được thuê làm một tay bán hàng nhưng chớp nhoáng sau đó ông đã vụt lên trở thành đại đầu mục của toàn bộ khối phận phòng tiếp thị.",
    "core_vocabulary": [{"word": "originally", "type": "adv.", "meaning": "vào lúc thuở sơ khai, lúc nguyên mẫu đầu tiên"}, {"word": "head of", "type": "n.", "meaning": "anh đứng đầu, đầu não, trưởng của..."}]
  },
  {
    "id": "q127",
    "question": "Computerization of medical records ______ increases a physician's ability to diagnose and treat patients.",
    "options": { "A": "greatness", "B": "greatest", "C": "greatly", "D": "great" },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Phía sau là Động từ 'increases' (gia tăng) nên phía trước nó cần nhét một Trạng từ vô để mô tả tốc độ hay dung lượng của hành động đó 'greatly' (triệt phá cực kỳ lớn lao).",
    "explanation_grammar": "Trạng từ đứng trước Động Từ để thâm xâu bổ nghĩa về tốc độ quy mô.",
    "translation": "Tin học thống bộ hóa hồ sơ lưu khám y tế đã vô hình chung làm tăng lên một cách chóng mặt khả năng chuyên trị bệnh tật của các ngài viện trưởng.",
    "core_vocabulary": [{"word": "diagnose", "type": "v.", "meaning": "bắt bệnh, chuẩn đoán"}, {"word": "physician", "type": "n.", "meaning": "ngự y, thầy lang y sĩ đa khoa"}]
  },
  {
    "id": "q128",
    "question": "Khoury Dairy's upgraded milk-bottling system has ______ increased productivity in the Tallahassee plant.",
    "options": { "A": "consistent", "B": "consistently", "C": "consistencies", "D": "consistency" },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Chen chân giữa trợ động từ chia 'has' ứng cứu V3/Ed 'increased' (đã tăng) luôn được đặc cách cho một Trạng từ (Adv). Cụm này có nghĩa 'đã gia tăng một cách nhất quán trường kỳ'.",
    "explanation_grammar": "Have/Has/Had + Adv + V3/Ed.",
    "translation": "Dây chuyền hệ sinh thái đóng chai siêu cấp của trang trại Khoury Dairy đã thúc tăng lực năng chuỗi cung ứng một cách đều dặn đồng điệu tại riêng cái công xưởng Tallahassee.",
    "core_vocabulary": [{"word": "productivity", "type": "n.", "meaning": "sản xuất lượng, năng trình năng suất"}, {"word": "consistently", "type": "adv.", "meaning": "linh đình đều đặn, liên tục nhất quán"}]
  },
  {
    "id": "q129",
    "question": "Olayinka Boutique ______ hosts special shopping events for members of its loyalty club.",
    "options": { "A": "occasionally", "B": "occasions", "C": "occasional", "D": "occasion" },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Đứng giữa chủ thể (Boutique) và hành động (hosts) thường trực có các từ chỉ tuần suất làm Trạng từ bổ nghĩa gạch nối mốc thời gian diễn ra. 'Occasionally' (ngẫu nhiên thỉnh thoảng).",
    "explanation_grammar": "Chủ ngữ (Subject) + Trạng từ tuần suất thời gian (Freq Adv) + Động từ (Verb).",
    "translation": "Buôn phỉnh Olayinka Boutique có vài đôi lượt thi thoảng cũng lại hay chịu chơi tổ chức các màn event đấu giỏ hàng cho quý tịnh hội viên khối khách hàng trung thành cốt lỏi của nó.",
    "core_vocabulary": [{"word": "loyalty", "type": "n.", "meaning": "sự tin dùng ái mộ, đức độ trung thành"}, {"word": "occasionally", "type": "adv.", "meaning": "đôi khi, họa hoằn vài dịp thi thoảng"}]
  },
  {
    "id": "q130",
    "question": "All safety policies will be ______ reviewed by the Human Resources Department before publication.",
    "options": { "A": "extensively", "B": "extensive", "C": "extending", "D": "extension" },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Ngay giữa lằn ranh Tobe bị động 'be' và phần phụ họa 'reviewed' thì trạng từ -ly là từ loại có thẻ kim bào để bổ chèn chen đứng vào. (extensively - kỹ lưỡng sâu nặng)",
    "explanation_grammar": "Be + Trang Từ (Adv) + Động tính quá khứ hoàn (V_ed/3).",
    "translation": "100% tất thảy cơ sở sắc luật điều lệ an toàn quan mạng đều sẽ được trích xuất kiểm định gắt gao trên diện cực rộng bởi ngõ khối Bộ Phần Xã Hội Nhân Sự trước khi chính thống phát bản tấu chương trình làng.",
    "core_vocabulary": [{"word": "publication", "type": "n.", "meaning": "việc xuất bản, giấy công bố đưa ra"}, {"word": "extensively", "type": "adv.", "meaning": "kiểm phê tột trần sòng phẳng, sâu sát toàn diện"}]
  }
];

global.questionsData = global.questionsData.concat(nq);

fs.writeFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'window.questionsData = ' + JSON.stringify(global.questionsData, null, 2) + ';');
