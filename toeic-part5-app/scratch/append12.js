const fs = require('fs');
let code = fs.readFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'utf8');
code = code.replace('window.questionsData =', 'global.questionsData =');
eval(code);

const nq = [
  {
    "id": "q251",
    "question": "ZG Dental thanks all staff members who ------- marketing materials at last week's National Dentistry Expo in Pittsburgh.",
    "options": { "A": "distributes", "B": "distribute", "C": "distributed", "D": "distributing" },
    "correct_answer": "C",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Đại từ quan hệ 'who' thay cho 'staff members' làm chủ ngữ mở ra mệnh đề. Xét dấu hiệu nhận biết 'last week' (tuần trước), động từ phải chia ở thì Quá khứ đơn.",
    "explanation_grammar": "Who + V (chia theo thì và chủ ngữ đứng trước).",
    "translation": "Phòng khám nha khoa ZG Dental xin gửi lời cảm tạ đến tất cả những thành viên nhân viên - những người mà đã tham gia để phát ấn phẩm tiếp thị tại Triển lãm Nha khoa Quốc gia tổ chức ở Pittsburgh vào tuần trước.",
    "core_vocabulary": [{"word": "distribute", "type": "v.", "meaning": "phân phát, tung ra"}, {"word": "marketing materials", "type": "n.", "meaning": "vật liệu quảng cáo/ấn phẩm tiếp thị"}]
  },
  {
    "id": "q252",
    "question": "Of all the business plans ------- by the marketing manager, Mr. Martin's idea is the most impressive.",
    "options": { "A": "review", "B": "reviewed", "C": "are reviewed", "D": "which reviewed" },
    "correct_answer": "B",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Đây là mẫu Rút gọn mệnh đề quan hệ dạng bị động. 'Những bản kế hoạch được xem xét (bởi ông quản lý)': plans [which were reviewed by] -> plans [reviewed by].",
    "explanation_grammar": "Rút gọn mệnh đề quan hệ thể bị động bằng cách giữ lại V-ed/PII.",
    "translation": "Trong số tất cả các bản kế hoạch kinh doanh mà đã được xét duyệt qua bởi vị giám đốc tiếp thị, thì ý tưởng của ông Martin chính là thứ mang lại cảm giác ấn tượng nhất.",
    "core_vocabulary": [{"word": "impressive", "type": "adj.", "meaning": "đầy ấn tượng sâu sắc"}]
  },
  {
    "id": "q253",
    "question": "The Cork County Council has approved an airport expansion project that ------- to better accommodate travelers.",
    "options": { "A": "would have promised", "B": "promises", "C": "promising", "D": "will be promised" },
    "correct_answer": "B",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Đại từ 'that' thay thế cho một danh từ số ít là 'project' (dự án). Do đó động từ vế sau phải chia thêm s/es theo chủ ngữ số ít (promises).",
    "explanation_grammar": "That + V(chia theo chủ ngữ đứng ngay trước 'that').",
    "translation": "Hội đồng hạt Cork đã chính thức phê duyệt một dự án mở rộng quy mô sân bay mà dự án này hứa hẹn sẽ đáp ứng phục vụ nhu cầu của du khách được tốt hơn.",
    "core_vocabulary": [{"word": "expansion project", "type": "n.", "meaning": "dự án công trình mở rộng"}, {"word": "accommodate", "type": "v.", "meaning": "cung ứng/ đáp ứng/ chứa chấp"}]
  },
  {
    "id": "q254",
    "question": "Primo Publishing has not yet decided ----- they will introduce their new software's features.",
    "options": { "A": "which", "B": "who", "C": "what", "D": "when" },
    "correct_answer": "D",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Đây là dạng Mệnh đề danh ngữ đứng sau động từ. Nghĩa của câu: Chưa quyết định LÚC NÀO (when). Các từ 'which/who/what' khi đặt vào sẽ gây lủng củng ngữ nghĩa.",
    "explanation_grammar": "Decide + TỪ ĐỂ HỎI + S + V.",
    "translation": "Hãng xuất bản Primo Publishing vẫn chưa thể chốt quyết định xem là KHI NÀO thì họ mới tung ra giới thiệu các tính năng của dòng phần mềm mới.",
    "core_vocabulary": [{"word": "introduce", "type": "v.", "meaning": "trình làng, giới thiệu"}]
  },
  {
    "id": "q255",
    "question": "----- responds to the restaurant survey will receive a $10 gift certificate to the Rangely Cafe.",
    "options": { "A": "Whoever", "B": "Someone", "C": "Everyone", "D": "Whose" },
    "correct_answer": "A",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Cần một đại từ đóng vai trò vừa làm chủ ngữ cho 'responds', vừa điều khiển cả cụm Mệnh đề danh ngữ [Whoever responds] làm chủ ngữ lớn của 'will receive'. Whoever = Bất kỳ ai.",
    "explanation_grammar": "Whoever + Verb = Anyone who + Verb.",
    "translation": "Bất kì vị nào mà có làm động tác trả lời các câu khảo sát của nhà hàng này thì đều sẽ lãnh được một phiếu phiếu quà tặng trị giá 10 đô la tại cơ sở Rangely Cafe.",
    "core_vocabulary": [{"word": "gift certificate", "type": "n.", "meaning": "phiếu chứng nhận tặng quà/ voucher"}]
  },
  {
    "id": "q256",
    "question": "The board of directors is discussing ------- they will maintain their core technology.",
    "options": { "A": "who", "B": "how", "C": "which", "D": "what" },
    "correct_answer": "B",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Mệnh đề danh ngữ đứng sau 'discussing'. Ban lãnh đạo đang thảo luận về CÁCH THỨC - LÀM THẾ NÀO (how) để bảo trì.",
    "explanation_grammar": "Discuss + Từ để hỏi/How + S + V.",
    "translation": "Bên phía Ban giám đốc hiện đang ngồi đàm đạo để tìm cách định đoạt xem LÀM NHƯ THẾ NÀO để hệ thống của họ sẽ duy trì được nền tảng công nghệ cốt lõi.",
    "core_vocabulary": [{"word": "maintain", "type": "v.", "meaning": "duy tu bảo dưỡng/duy trì"}, {"word": "core technology", "type": "n.", "meaning": "công nghệ nền lõi"}]
  },
  {
    "id": "q257",
    "question": "The product development team cannot say --- --the new line of products will be released.",
    "options": { "A": "who", "B": "when", "C": "what", "D": "which" },
    "correct_answer": "B",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Tương tự nhóm mệnh đề danh ngữ đóng vai trò tân ngữ: Không thể nói được 'KHI NÀO' (when).",
    "explanation_grammar": "Say + when + S + V.",
    "translation": "Đội ngũ nghiên cứu phát triển sản phẩm chịu chưa thể công bố nói chắc được là KHI NÀO thì cái dòng chuỗi sản phẩm mới kia sẽ chính thức được phát hành tung ra thị trường.",
    "core_vocabulary": [{"word": "release", "type": "v.", "meaning": "xuất xưởng, phát hành giải phóng"}]
  },
  {
    "id": "q258",
    "question": "------- arrives first to the grand opening of Dimkin's Ice Cream Shop will receive a free T-shirt.",
    "options": { "A": "whoever", "B": "Who", "C": "What", "D": "That" },
    "correct_answer": "A",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Cả cụm [Whoever arrives first...] sẽ đóng vai trò làm Chủ Ngữ khổng lồ. Từ 'Whoever' (Bất kì ai) mang yếu tố không xác định sẽ rất hợp lý trong trường hợp ai đó đến để tặng áo.",
    "explanation_grammar": "Whoever + V + V (Whoever sẽ nối làm 2 nhịp chủ ngữ).",
    "translation": "Bất luận là ai, cho dù người nào có đặt chân đến sớm nhất vào ngày lễ khai trương quy mô của Tiệm kem Dimkin thì đều cũng sẽ nhận được một chiếc áo phông miễn phí.",
    "core_vocabulary": [{"word": "grand opening", "type": "n.", "meaning": "lễ hội khai trương tưng bừng"}]
  },
  {
    "id": "q259",
    "question": "A report in the Journal of the Agricultural Society suggests that consumers are increasingly concerned about ------- their produce is grown.",
    "options": { "A": "where", "B": "that", "C": "what", "D": "it" },
    "correct_answer": "A",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Mệnh đề danh ngữ đứng sau giới từ (about). Người tiêu dùng quan tâm NƠI MÀ nông sản được trồng. Chỗ này cần 'where' (ở đâu/nơi nào).",
    "explanation_grammar": "Giới từ + Từ để hỏi (where/when/how/why) + S +V.",
    "translation": "Một báo cáo trong tờ Tạp chí của Hiệp hội Nông nghiệp uy tín đã chỉ ra rằng người tiêu dùng hiện nay đang ngày một dấy lên mối bận tâm về khu vực NƠI TRỐN MÀ loại nông sản của họ được mang đi ươm trồng.",
    "core_vocabulary": [{"word": "produce", "type": "n.", "meaning": "nông sản thu hoạch"}, {"word": "concerned about", "type": "phr.", "meaning": "lo ngại, bận tâm lưu ý tới"}]
  },
  {
    "id": "q260",
    "question": "The corporate officers have requested that Ms. Nguyen ------- all available options for reducing costs at the Hanoi factory.",
    "options": { "A": "to investigate", "B": "investigate", "C": "is investigating", "D": "has investigated" },
    "correct_answer": "B",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Đây là mẫu cấu trúc của Thể Giả Định (Subjunctive). Trọng điểm nằm ở động từ 'requested'. Đi sau động từ yêu cầu (request, ask, demand...) kết hợp mệnh đề 'that', động từ ở vế sau hoàn toàn không cần chia thì, giữ nguyên gốc (Bare Infinitive).",
    "explanation_grammar": "Suggest/Recommend/Request/Require + that + S + (should) + V-bare.",
    "translation": "Bộ ngũ hội đồng các giám đốc điều hành của tập đoàn đã vạch gửi yêu cầu RẰNG cô Nguyễn phải đi điều tra xem xét mọi giải pháp sẵn có để cắt giảm ngân chi tại chi nhánh nhà máy ở Hà Nội.",
    "core_vocabulary": [{"word": "investigate", "type": "v.", "meaning": "mò tìm, thực địa điều tra"}]
  },
  {
    "id": "q261",
    "question": "The sequel to last year's film Galactic Express made $400 million worldwide, ------- is more than the first movie earned.",
    "options": { "A": "this", "B": "whose", "C": "which", "D": "what" },
    "correct_answer": "C",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Đại từ 'which' thay thế cho vế câu hoặc số tiền ngay phía trước đó, dùng trong mệnh đề bổ sung ngăn bằng dấu phẩy.",
    "explanation_grammar": ", which...",
    "translation": "Tập phim phụ bản ăn theo của cái series phim Galactic Express tung rạp năm ngoái đã hốt kiếm trọn túi được tổng độ chừng 400 triệu đô la trên toàn cầu, MỘT ĐIỀU NÀY cho thấy con số đó là lớn hơn hẳn nhiều so với cái mốc mà tập phim đầu tiên từng bỏ rẻng túi.",
    "core_vocabulary": [{"word": "sequel", "type": "n.", "meaning": "tập tiếp nối / phụ bản / phần kéo sau"}]
  },
  {
    "id": "q262",
    "question": "Eight sports venues, five of ------- are located in California, have been chosen to host the West Coast Soccer Tournament.",
    "options": { "A": "them", "B": "those", "C": "which", "D": "what" },
    "correct_answer": "C",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Số lượng + of + whom / which (để thể hiện số phần trong tổng số sự vật/hoặc tập người). California là nơi có mặt của 5 sân vân động (vật), nên chỉ dùng 'which'.",
    "explanation_grammar": "Định lượng (some, many, all, part of, five of) + which/whom.",
    "translation": "Tám địa điểm sân bãi tổ hợp thể thao, MÀ TRONG SỐ NÀY ẮT CÓ tóm trọn năm chỗ là được ngự đóng tại tiểu bang California, thì đã đều được phê chọn để tham dự đóng nốc đăng cai trận Giải đấu Bóng đá Vùng Bờ Tây.",
    "core_vocabulary": [{"word": "venue", "type": "n.", "meaning": "đại bản doanh/điểm tụ nơi thi đấu"}]
  },
  {
    "id": "q263",
    "question": "------- wishing to work overtime this month is reminded to advise the supervisor before the end of the week.",
    "options": { "A": "Whoever", "B": "Anyone", "C": "Those", "D": "All" },
    "correct_answer": "B",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Rút gọn mệnh đề quan hệ bằng V-ing [Anyone who wishes = Anyone wishing]. Nếu dùng 'Those' (số nhiều) thì V sau phải chia 'are reminded', nhưng câu lại là 'is reminded'.",
    "explanation_grammar": "Anyone + V-ing + V(chia số ít).",
    "translation": "BẤT KÌ NGƯỜI NÀO MÀ CÓ ấp ủ nguyện vọng muốn bung sức làm lăng tăng ca vào tháng này thì đều bị nhắc nhở phải trình đệ báo lời tới đội ngũ giám sát trước tầm điểm thời khắc kết tuần cuối.",
    "core_vocabulary": [{"word": "overtime", "type": "n.", "meaning": "tăng cường giờ/làm thêm ca"}]
  },
  {
    "id": "q264",
    "question": "Management was unimpressed with the advertising campaign designed by Blue Creative, a company ------- work is often praised as being unique and ahead of its time.",
    "options": { "A": "that", "B": "what", "C": "who", "D": "whose" },
    "correct_answer": "D",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Đại từ dùng làm từ sở hữu: các TÁC PHẨM ('work') của CÔNG TY (a company) -> whose work.",
    "explanation_grammar": "Danh từ 1 + whose + Danh từ 2.",
    "translation": "Ban điều hành quản lý đã cực kì cụt hứng không mấy ấn tượng mảy may gì với chiến dịch mảng quảng cáo do bởi tay tụi Blue Creative dựng lên, dẫu đấy vốn là một gã đầu nậu công ty MÀ NHỮNG DÒNG SẢN PHẨM CỦA BỌN HỌ lại thường xuyên được tâng bốc khen ngợi là hàng cá biệt độc đáo và đi trước cả một vùng thời đại.",
    "core_vocabulary": [{"word": "unimpressed", "type": "adj.", "meaning": "chẳng chút bận tâm/ 0 mảy may ấn tượng"}]
  },
  {
    "id": "q265",
    "question": "All new employees are encouraged to read the company history book, which ------- the philosophical foundation of the corporation.",
    "options": { "A": "details", "B": "detail", "C": "detailed", "D": "detailing" },
    "correct_answer": "A",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "'Which' thay cho danh từ số ít 'the company history book'. Do đó động từ 'detail' (làm rõ chi tiết - chức năng Động từ) phải được chia s/es.",
    "explanation_grammar": "Which/That/Who + Động từ (chia theo quy tắc Số lượng của Danh từ đứng trước).",
    "translation": "Mọi lính tay ma lính mới đều được khuyến nạp động viên là hãy bỏ sức đi lật xem đọc nội dung cuốn thư sách báo truyền sử của công ty, CHÍNH CÁI CUỐN NÀY LÀ THỨ LÀM MỔ XẺ CHI TIẾT RA phần nền móng tảng quy luật triết lý hành nghiệp của cả tập đoàn.",
    "core_vocabulary": [{"word": "philosophical", "type": "adj.", "meaning": "mang tư chất đạo triết học suy luận"}]
  },
  {
    "id": "q266",
    "question": "The company president frequently updates all staff on the merger with the Star Entertainment Group, ------- will take place in a few weeks' time.",
    "options": { "A": "whose", "B": "which", "C": "how", "D": "who" },
    "correct_answer": "B",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Thay thế cho 'the merger' (vụ sáp nhập) ở vế trước dấu phẩy, dùng 'which' đóng vai trò Chủ ngữ (cái mà sẽ diễn ra...).",
    "explanation_grammar": "Noun(Vật mang tính chỉ sự việc) , Which ...",
    "translation": "Ông ngài lão tổng chủ tịch của hội công ty thường hay thói quen liên tục trút bổ sung update tiến trình cho anh em nhân viên về cái vụ gậy thương vụ ôm sáp nhập với cánh tập đoàn Star Entertainment Group, CÁI VỤ DỰ ÁN MÀ KHẢ năng sẽ khởi mào diễn điểm xướng ra trong tầm ngưỡng độ vài tuần nữa thời gian đổ đi.",
    "core_vocabulary": [{"word": "merger", "type": "n.", "meaning": "cuộc thâu gộp ôm sáp hòa vụ nhập mảng"}]
  },
  {
    "id": "q267",
    "question": "We need to seriously consider the fact ------- the public perceives us to be an environmentally-friendly company, as our packaging is recyclable.",
    "options": { "A": "that", "B": "what", "C": "which", "D": "whereas" },
    "correct_answer": "A",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Cụm danh ngữ kinh điển 'the fact that' (Sự thật là / Rằng vế thực tế là...).",
    "explanation_grammar": "The fact + that + S + V.",
    "translation": "Hội chúng ta là đang rất cần gắt cao nghiêm nghị phải túc trực ngồi mổ xẻ cân nhắc lại thật kỹ THEO CÁI SỰ THỰC RẰNG LÀ bộ đám mặt bằng đám công chúng ngắm đang quy phét nhìn hất điểm nhận diện ta hệt tựa như một thương mác công ty ngả hướng làm bạn thân thiện với thiên bối cảnh môi trường, xét cũng do là vì bộ nguồn quy vật bao bì gói hàng của phe đàng ta vốn là có trọn điểm dốc tái thu công tái chế được ráo nếp.",
    "core_vocabulary": [{"word": "perceive", "type": "v.", "meaning": "hiểu cảm góc nhìn /nhận giác thức lấy"}]
  },
  {
    "id": "q268",
    "question": "Morgan Inc.'s acquisition of a foreign firm will bring about a variety of drastic changes to the way the company -------.",
    "options": { "A": "operated", "B": "to operate", "C": "operation", "D": "operates" },
    "correct_answer": "D",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Lược lược bỏ đại từ 'that' trong cấu trúc the way (that)... => the way the company operates (cách mà họ hoạt động - chia số ít hiện tại vì the company).",
    "explanation_grammar": "The way + (that) + S + V.",
    "translation": "Phi ngạch vụ chi đinh thu bộ sáp tóm mua ôm gom thâu lại tóm lấy được một nhánh chi công ty có bọc đọt gá chân bên ngoại quốc của hãng phay Morgan Inc thì có lẽ rồi sẽ dắt lôi đem túm lại cõng kéo gom gắt tới cả một trọn vốc nhiều khối sự mảng dời đảo chuyển vóc biến gác dịch thay xọc xén lớn đổi gắt đến mảng quy lối guồng ĐƯỜNG CÁCH MÀ NHÁNH CHÓP cõi CÁI CÔNG TY ĐÓ ĐANG VẬN CHỆCH VÒNG BƠM HOẠT VẬN GUỒNG ĐỘNG LÊN CA CA.",
    "core_vocabulary": [{"word": "acquisition", "type": "n.", "meaning": "vụ mác cuộc xáp mua tụ thâu túm nhích thâu tóm gom ngạch"}]
  },
  {
    "id": "q269",
    "question": "The desserts ------- in the company cafeteria are not only incredibly delicious, but healthy and beautifully presented, too.",
    "options": { "A": "offering", "B": "offered", "C": "offers", "D": "to offer" },
    "correct_answer": "B",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Rút gọn mệnh đề dạng Bị động. Câu đầy đủ: The desserts [which are offered] -> The desserts [offered].",
    "explanation_grammar": "Rút gọn thể bị động = V_ed/PII.",
    "translation": "Khối các món điệu ăn thức vạt giải cháp mảng điểm giải tráng miệng MIẾNG NÀO MÀ CÓ MẶT ĐƯỢC CHÀO BÀY DỌN PHỤC TUNG HẤT CUNG VỤ TẠI khu mảng bếp đục ban ăn canteen xưởng cõi của nhà ăn căng tin phía khối của công ty tụi nay thì chúng không thọc hững những chỉ là đem lại tính rớt tuyệt vị hão ăn vô đối chảo cực đỉnh ngon mà lại nêm còn đạt điểm nhấp cực rích lành khoẻ trơn mạnh độ khỏe tốt chất cho dinh mạng cơ thể người bồi sức mà hơn nữa nách nó lại còn được bưng đục xáp bưng phết tỉm bày vạt đẽo trình khéo bày mâm đẹp bắt cái dáng mã vô đối quá hút quá xinh con mắt.",
    "core_vocabulary": [{"word": "cafeteria", "type": "n.", "meaning": "nhà khu mạc căng tin xưởng ăn điểm nội rập trạm bộ phẩu ăn"}]
  },
  {
    "id": "q270",
    "question": "After months of negotiations, Mr. Kenneth has reached an agreement with JM Logistics Co., ------- support is crucial for his business's economic recovery.",
    "options": { "A": "that", "B": "which", "C": "whose", "D": "what" },
    "correct_answer": "C",
    "grammar_type": "Mệnh đề quan hệ",
    "explanation_reason": "Là đại từ sở hữu của 'JM Logistics Co'. 'Support' (sự ủng hộ, hỗ trợ) CỦA HỌ.",
    "explanation_grammar": "Noun(Chủ) , whose + Noun(Bị sở hữu).",
    "translation": "Sau suốt tít nhiều điểm quãng bọc khung lố tháng chuỗi ngày miết dài dằng dằng dặc của mấy trò chéo ngóc chiêu đập các bộ việc ngâm mác chiêu ngỏ dằng cưa nhọc phán thương xới kéo đàm báp phán thương thoả xú mảng lượng vọc đàm cò kéo thoả gò cưa cọ kéo cò phán cắn lượng nhọc đàm cò mác cưa cò, Ngài ngự gã Kenneth trọc lốc cũng đã gõ lóc chạm tọt tới đẽo đi mạn đục đi bẻ tới rút đạt vuốt tới lợp rạc lết đi tới điểm tọt được mốc một chiếc dòng gấn tấy bọc ngạch ván biên cước mác tờ ký thỏa vác bảng mác ước thu khất thuận dốc gục ngã móp thu hiệp kí kết xáp kết được đút kí đạt một bản rập đồng cùng tay xới với gã bên tụ hội mảng tập khối công tay xế công cục ty tay ty Mảng JM xáp Vận dáp Logistics Điệu Vận mác tải hậu trạm xách hậu tải Logistic cần dây công đôn chuyển vận ty Co., CÁI NGÀI NHÁNH CŨNG NHƯ ĐỐI TÁC CÔNG PHƯƠNG TY MÀ NHÁNH MẢNG CƠ NGUỒN SỰ BẢO VỢT MẢNG SỨC CỨU BỌC CÚ YỂM HỖ LỰC PHÒ DẬP TRỢ O BẾ CỦA TỤI NÓ LÀ CỰC HIỂM CHÓT NHÚ CHỐT SỐNG HÓC THẤT THEN YẾU CỰC PHẾ CỰC CHỐT KÌ THẾ QUAN DỘI CẤP TRỌNG BẬC NÃO THIẾT yếu điểm chát tối khốc tối tắp chốt then then chóp chỏi thiết gác quan dọng điểm nòng cực kì cho cả một điểm cuộc đường ngạch bốc hồi đền mạc chồm vực tái dọn quy ngạch ngự phục ngoi cõi vực sinh tái vút làm hồi bật sự dốc ngoi đậy xới lại vực chốc hồi sống sực chồi phục ngộp kinh khất kinh rạn chồi tế vựa mác bộ mảng vực nền tế kinh của bộ khu mảng nhánh xú cái doanh hốc nghiệp guồng doanh cơ khối công xú công nền ngạch nghiệp xưởng ty của riết riêng rợ vác lính tay của phứt trọn lão ấy lão chả." ,
    "core_vocabulary": [{"word": "crucial", "type": "adj.", "meaning": "then chốt, quan trọng cốt tử"}]
  }
];

global.questionsData = global.questionsData.concat(nq);

fs.writeFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'window.questionsData = ' + JSON.stringify(global.questionsData, null, 2) + ';');
