const fs = require('fs');
const path = require('path');

const qs = [
  {
    "question": "ZG Dental thanks all staff members who --- ---- marketing materials at last week's National Dentistry Expo in Pittsburgh.",
    "options": {
      "A": "distributed",
      "B": "distributing",
      "C": "distribute",
      "D": "distributes"
    },
    "correct_answer": "A",
    "explanation_reason": "Đại từ quan hệ 'who' đang thay thế cho 'all staff members', động từ theo sau phải được chia thì. Trong câu có dấu hiệu thời gian ở quá khứ: 'at last week\\'s...', do đó động từ phải chia ở thì quá khứ đơn 'distributed'.",
    "explanation_grammar": "Thì quá khứ đơn trong mệnh đề quan hệ với dấu hiệu 'last week'.",
    "translation": "Nha khoa ZG cảm ơn tất cả các nhân viên những người đã phân phát tài liệu tiếp thị tại Triển lãm Nha khoa Quốc gia tuần trước ở Pittsburgh.",
    "core_vocabulary": [
      { "word": "distribute", "type": "v.", "meaning": "phân phát, phân phối" },
      { "word": "marketing material", "type": "n.", "meaning": "tài liệu tiếp thị" }
    ]
  },
  {
    "question": "Of all the business plans ------- by the marketing manager, Mr. Martin's idea is the most impressive.",
    "options": {
      "A": "review",
      "B": "which reviewed",
      "C": "reviewed",
      "D": "are reviewed"
    },
    "correct_answer": "C",
    "explanation_reason": "Đây là dạng rút gọn mệnh đề quan hệ bị động (những kế hoạch kinh doanh cái mà được đánh giá bởi...). Câu đầy đủ là 'which were reviewed by...'. Bỏ đại từ và tobe, ta còn V3/ed là 'reviewed'.",
    "explanation_grammar": "Rút gọn mệnh đề quan hệ dạng bị động: Loại bỏ đại từ quan hệ và động từ to be, giữ lại Past Participle (V3/ed).",
    "translation": "Trong tất cả các kế hoạch kinh doanh được xem xét bởi người quản lý tiếp thị, ý tưởng của ông Martin là ấn tượng nhất.",
    "core_vocabulary": [
      { "word": "business plan", "type": "n.", "meaning": "kế hoạch kinh doanh" },
      { "word": "impressive", "type": "adj.", "meaning": "gây ấn tượng" }
    ]
  },
  {
    "question": "The Cork County Council has approved an airport expansion project that ------- to better accommodate travelers.",
    "options": {
      "A": "will be promised",
      "B": "promises",
      "C": "promising",
      "D": "would have promised"
    },
    "correct_answer": "B",
    "explanation_reason": "Đại từ 'that' thay thế cho 'project' (danh từ số ít chỉ vật) làm chủ ngữ. Động từ do đó phải chia số ít. Mệnh đề chính ở Hiện tại hoàn thành ('has approved') nên động từ sau 'that' nên thể hiện ở hiện tại ('promises') diễn tả một khả năng/hứa hẹn đang có ở hiện tại.",
    "explanation_grammar": "Động từ trong mệnh đề quan hệ chia hòa hợp với danh từ mà đại từ quan hệ thay thế thay ('project' số ít -> 'promises').",
    "translation": "Hội đồng Quận Cork đã phê duyệt một dự án mở rộng sân bay dự án mà hứa hẹn sẽ phục vụ tốt hơn cho du khách.",
    "core_vocabulary": [
      { "word": "expansion project", "type": "n.", "meaning": "dự án mở rộng" },
      { "word": "accommodate", "type": "v.", "meaning": "cung cấp chỗ/đáp ứng nhu cầu" }
    ]
  },
  {
    "question": "Primo Publishing has not yet decided ----- they will introduce their new software's features.",
    "options": {
      "A": "when",
      "B": "who",
      "C": "what",
      "D": "which"
    },
    "correct_answer": "A",
    "explanation_reason": "Động từ 'decided' (quyết định) cần một tân ngữ - ở đây là một mệnh đề danh ngữ (Noun Clause) bắt đầu bằng một từ để hỏi. Câu 'they will introduce...' đã đầy đủ S+V+O. Về mặt ngữ nghĩa để bổ nghĩa về mặt thời gian 'khi nào họ sẽ giới thiệu...', dùng 'when'.",
    "explanation_grammar": "Mệnh đề danh ngữ bắt đầu bằng (when/ where / how / why / if / whether) + S + V(đầy đủ).",
    "translation": "Hãng xuất bản Primo vẫn chưa quyết định khi nào họ sẽ giới thiệu các tính năng phần mềm mới của mình.",
    "core_vocabulary": [
      { "word": "introduce", "type": "v.", "meaning": "giới thiệu, ra mắt" },
      { "word": "feature", "type": "n.", "meaning": "tính năng" }
    ]
  },
  {
    "question": "----- responds to the restaurant survey will receive a $10 gift certificate to the Rangely Cafe.",
    "options": {
      "A": "Someone",
      "B": "Everyone",
      "C": "Whoever",
      "D": "Whose"
    },
    "correct_answer": "C",
    "explanation_reason": "Chỗ trống cần điền một từ đóng vai trò vừa là chủ ngữ cho động từ 'responds', vừa tạo thành cụm từ đóng vai trò chủ ngữ lớn cho cả câu (với vị ngữ chính là 'will receive...'). Ta cần dùng mệnh đề danh ngữ chủ ngữ bắt đầu với 'Whoever' (Bất cứ ai).",
    "explanation_grammar": "Mệnh đề danh ngữ làm chủ ngữ: Whoever + V(số ít) + ...  (mang nghĩa Bất cứ ai làm gì đó).",
    "translation": "Bất cứ ai phản hồi (làm) cuộc khảo sát về nhà hàng sẽ nhận được phiếu quà tặng trị giá 10 đô la đến Quán cà phê Rangely.",
    "core_vocabulary": [
      { "word": "respond", "type": "v.", "meaning": "trả lời, phản hồi" },
      { "word": "survey", "type": "n.", "meaning": "cuộc khảo sát" },
      { "word": "gift certificate", "type": "n.", "meaning": "phiếu quà tặng" }
    ]
  },
  {
    "question": "The board of directors is discussing ------- they will maintain their core technology.",
    "options": {
      "A": "who",
      "B": "what",
      "C": "which",
      "D": "how"
    },
    "correct_answer": "D",
    "explanation_reason": "Động từ 'discussing' cần theo sau bởi một Mệnh đề danh ngữ. Mệnh đề phía sau 'they will maintain their core technology' đã đầy đủ S+V+O. Căn cứ vào ngữ nghĩa (bàn bạc CÁCH THỨC họ sẽ duy trì...), ta chọn 'how' (làm thế nào).",
    "explanation_grammar": "Mệnh đề danh ngữ bắt đầu bằng từ để hỏi (how/when...).",
    "translation": "Hội đồng quản trị đang thảo luận về việc làm thế nào họ sẽ duy trì công nghệ cốt lõi của nội bộ.",
    "core_vocabulary": [
      { "word": "maintain", "type": "v.", "meaning": "duy trì" },
      { "word": "core technology", "type": "n.", "meaning": "công nghệ cốt lõi" }
    ]
  },
  {
    "question": "The product development team cannot say --- --the new line of products will be released.",
    "options": {
      "A": "what",
      "B": "when",
      "C": "which",
      "D": "who"
    },
    "correct_answer": "B",
    "explanation_reason": "Như câu 4, sau động từ 'say' (đóng vai trò nói ra điều gì), ta cần Mệnh đề danh ngữ làm tân ngữ. Phía sau cụm '[the new line of products] (S) + [will be released] (V-bị động)' đã hoàn chỉnh. Dựa theo nghĩa (không thể nói được KHI NÀO...), ta chọn 'when'.",
    "explanation_grammar": "Mệnh đề danh ngữ làm tân ngữ sau 'say' bắt đầu bằng When (khi nào).",
    "translation": "Nhóm phát triển sản phẩm không thể nói (cho biết) khi nào dòng sản phẩm mới sẽ được phát hành.",
    "core_vocabulary": [
      { "word": "release", "type": "v.", "meaning": "phát hành, tung ra thị trường" }
    ]
  },
  {
    "question": "------- arrives first to the grand opening of Dimkin's Ice Cream Shop will receive a free T-shirt.",
    "options": {
      "A": "Who",
      "B": "whoever",
      "C": "What",
      "D": "That"
    },
    "correct_answer": "B",
    "explanation_reason": "Giống câu 5, chỗ trống tạo thành một mệnh đề danh ngữ đóng vai trò làm chủ ngữ tổng thể của hệ thống câu '... will receive a free T-shirt'. '[Whoever] + arrives' (Bất kể ai...). Chú ý lỗi viết thường hoa chữ 'whoever' ở đáp án B - dù viết thường vẫn là tùy chọn đúng nhất về mặt ngữ pháp và ngữ nghĩa.",
    "explanation_grammar": "Mệnh đề danh ngữ đóng vai trò chủ ngữ: Whoever + V(số ít).",
    "translation": "Bất cứ ai đến đầu tiên trong buổi khai trương cửa hàng kem của Dimkin sẽ nhận được một chiếc áo phông miễn phí.",
    "core_vocabulary": [
      { "word": "grand opening", "type": "n.", "meaning": "buổi khai trương" }
    ]
  },
  {
    "question": "A report in the Journal of the Agricultural Society suggests that consumers are increasingly concerned about ------- their produce is grown.",
    "options": {
      "A": "where",
      "B": "it",
      "C": "what",
      "D": "that"
    },
    "correct_answer": "A",
    "explanation_reason": "Sau giới từ 'about' cần một danh từ hoặc một mệnh đề danh ngữ. Mệnh đề phía sau '[their produce] (S) + [is grown] (V-bị động)' là câu hoàn chỉnh. Dựa trên nghĩa 'quan tâm về NƠI MÀ nông sản của họ được trồng', ta chọn 'where'.",
    "explanation_grammar": "Mệnh đề danh ngữ làm tân ngữ sau giới từ: Prep + where + S + V.",
    "translation": "Một báo cáo trên Tạp chí của Hiệp hội Nông nghiệp cho thấy ngày càng nhiều người tiêu dùng quan tâm đến việc nông sản của họ được trồng ở đâu.",
    "core_vocabulary": [
      { "word": "concerned (about)", "type": "adj.", "meaning": "lo lắng, quan tâm (về điều gì)" },
      { "word": "produce", "type": "n.", "meaning": "nông sản (luôn là danh từ không đếm được)" }
    ]
  },
  {
    "question": "The corporate officers have requested that Ms. Nguyen ------- all available options for reducing costs at the Hanoi factory.",
    "options": {
      "A": "has investigated",
      "B": "to investigate",
      "C": "investigate",
      "D": "is investigating"
    },
    "correct_answer": "C",
    "explanation_reason": "Đây là thể Câu giả định (Subjunctive). Cấu trúc: 'S1 + request / demand / require / suggest + THAT + S2 + (should) + V-bare'. Mặc dù S2 là Ms. Nguyen số ít, động từ vẫn phải ở dạng nguyên mẫu (investigate).",
    "explanation_grammar": "Bàng thái cách (Subjunctive mood) đứng sau động từ chỉ sự yêu cầu/đề nghị (request). S + request + that + S + V(nguyên thể).",
    "translation": "Các viên chức công ty đã yêu cầu cô Nguyễn điều tra tất cả các lựa chọn có sẵn để cắt giảm chi phí tại nhà máy ở Hà Nội.",
    "core_vocabulary": [
      { "word": "investigate", "type": "v.", "meaning": "điều tra, nghiên cứu xem xét" },
      { "word": "option", "type": "n.", "meaning": "lựa chọn" }
    ]
  },
  {
    "question": "The sequel to last year's film Galactic Express made $400 million worldwide, ------- is more than the first movie earned.",
    "options": {
      "A": "whose",
      "B": "which",
      "C": "what",
      "D": "this"
    },
    "correct_answer": "B",
    "explanation_reason": "Đại từ quan hệ 'which' trong mệnh đề phân cách (có dấu phẩy) có thể đứng đầu thay thế cho TÀN BỘ SỰ VIỆC nằm ở mệnh đề chính (phim phần tiếp theo kiếm được 400 triệu đô) -> Điều đó (which) thì nhiều hơn phần đầu kiếm được.",
    "explanation_grammar": "Đại từ 'which' thay thế cho cả một mệnh đề đứng trước: ..., which + V (Điều đó thì...). Mệnh đề quan hệ không xác định.",
    "translation": "Phần tiếp theo của bộ phim Galactic Express năm ngoái đã kiếm được 400 triệu USD trên toàn thế giới, điều này nhiều hơn số tiền mà phần phim đầu tiên kiếm được.",
    "core_vocabulary": [
      { "word": "sequel", "type": "n.", "meaning": "phần tiếp theo (của phim, sách)" },
      { "word": "worldwide", "type": "adv.", "meaning": "toàn cầu, khắp thế giới" }
    ]
  },
  {
    "question": "Eight sports venues, five of ------- are located in California, have been chosen to host the West Coast Soccer Tournament.",
    "options": {
      "A": "which",
      "B": "those",
      "C": "them",
      "D": "what"
    },
    "correct_answer": "A",
    "explanation_reason": "Đây là cấu trúc 'số lượng/phần + of + đại từ quan hệ'. Với danh từ chỉ vật 'sports venues', đại từ quan hệ đi cùng là 'which' ('five of which'). (Không dùng 'them' vì đây là 1 câu có mệnh đề phụ ghép nối với dấu phẩy, dùng them sẽ tách thành 2 vế rời rạc thiếu liên từ).",
    "explanation_grammar": "Lượng từ (all/some/many/five...) + of + whom (người) / which (vật).",
    "translation": "Tám địa điểm thể thao, năm trong số đó nằm ở California, đã được chọn để đăng cai Giải bóng đá Bờ Tây.",
    "core_vocabulary": [
      { "word": "venue", "type": "n.", "meaning": "địa điểm (tổ chức thi đấu/sự kiện)" },
      { "word": "host", "type": "v.", "meaning": "đăng cai, làm chủ nhà" }
    ]
  },
  {
    "question": "------- wishing to work overtime this month is reminded to advise the supervisor before the end of the week.",
    "options": {
      "A": "All",
      "B": "Those",
      "C": "Anyone",
      "D": "Whoever"
    },
    "correct_answer": "C",
    "explanation_reason": "Động từ chính của chủ ngữ lớn ở số ít: 'is reminded'. Vậy chủ ngữ đó phải mang dạng số ít (loại All và Those). 'wishing' là dạng MĐQH rút gọn (who wishes). Vậy ta có: (Anyone + who wishes) = Anyone wishing. ('Whoever' không đi liền với MĐQH rút gọn V-ing như vậy, nó đã tự ôm nghĩa chủ ngữ động từ).",
    "explanation_grammar": "Đại từ bất định số ít 'Anyone' ghép với tính từ phân từ (wishing) làm chủ ngữ, theo sau là động từ tobe số ít (is).",
    "translation": "Bất cứ ai có nguyện vọng làm thêm giờ trong tháng này được nhắc nhở phải báo cho người giám sát trước cuối tuần.",
    "core_vocabulary": [
      { "word": "overtime", "type": "adv.", "meaning": "làm thêm giờ" },
      { "word": "advise", "type": "v.", "meaning": "thông báo, khuyên (ai đó)" }
    ]
  },
  {
    "question": "Management was unimpressed with the advertising campaign designed by Blue Creative, a company ------- work is often praised as being unique and ahead of its time.",
    "options": {
      "A": "whose",
      "B": "that",
      "C": "who",
      "D": "what"
    },
    "correct_answer": "A",
    "explanation_reason": "'work' (các tác phẩm, công việc) thuộc sở hữu của 'a company' (công ty đó). Ta cần đại từ sở hữu 'whose' (các tác phẩm của công ty đó...).",
    "explanation_grammar": "Đại từ quan hệ sở hữu: N1 + whose + N2.",
    "translation": "Ban quản lý không ấn tượng với chiến dịch quảng cáo được thiết kế bởi Blue Creative, một công ty mà các tác phẩm của họ thường được ca ngợi là độc đáo và đi trước thời đại.",
    "core_vocabulary": [
      { "word": "unimpressed", "type": "adj.", "meaning": "không ấn tượng" },
      { "word": "campaign", "type": "n.", "meaning": "chiến dịch" },
      { "word": "ahead of its time", "type": "phr.", "meaning": "đi trước thời đại" }
    ]
  },
  {
    "question": "All new employees are encouraged to read the company history book, which ------- the philosophical foundation of the corporation.",
    "options": {
      "A": "detailed",
      "B": "details",
      "C": "detailing",
      "D": "detail"
    },
    "correct_answer": "B",
    "explanation_reason": "Đại từ 'which' thay cho 'the company history book' (cuốn sách - số ít) và đóng vai trò làm chủ ngữ cho vế sau. Câu này nói về một sự thật hiển nhiên (một cuốn sách), nên ta dùng thì hiện tại đơn. Động từ do đó thêm s/es ('details' - ở đây detail là động từ: miêu tả chi tiết).",
    "explanation_grammar": "Đại từ 'which' làm chủ ngữ thay cho danh từ số ít ở mệnh đề trước, nên động từ phải chia số ít.",
    "translation": "Tất cả nhân viên mới được khuyến khích đọc cuốn sách lịch sử công ty, cuốn sách mà ghi chép chi tiết nên nền tảng triết lý của tập đoàn.",
    "core_vocabulary": [
      { "word": "encourage", "type": "v.", "meaning": "khuyến khích" },
      { "word": "detail", "type": "v.", "meaning": "mô tả/trình bày chi tiết" },
      { "word": "foundation", "type": "n.", "meaning": "nền tảng" }
    ]
  },
  {
    "question": "The company president frequently updates all staff on the merger with the Star Entertainment Group, ------- will take place in a few weeks' time.",
    "options": {
      "A": "how",
      "B": "which",
      "C": "who",
      "D": "whose"
    },
    "correct_answer": "B",
    "explanation_reason": "Theo sau dấu phẩy (mệnh đề tính ngữ không hạn định), đại từ thay thế cho việc sáp nhập (the merger) ở đằng trước nên dùng 'which' mà không dùng 'that'. Đóng vai trò làm chủ ngữ cho cụm V 'will take place' (diễn ra).",
    "explanation_grammar": "Dùng 'which' sau dấu phẩy để bổ nghĩa cho danh từ chỉ sự vật/sự việc đứng lân cận.",
    "translation": "Chủ tịch công ty thường xuyên cập nhật cho tất cả nhân viên về việc sáp nhập với Tập đoàn Giải trí Star, việc mà sẽ diễn ra trong một vài tuần tới.",
    "core_vocabulary": [
      { "word": "merger", "type": "n.", "meaning": "sự sáp nhập" },
      { "word": "take place", "type": "phr.", "meaning": "diễn ra, xảy ra" }
    ]
  },
  {
    "question": "We need to seriously consider the fact ------- the public perceives us to be an environmentally-friendly company, as our packaging is recyclable.",
    "options": {
      "A": "what",
      "B": "whereas",
      "C": "that",
      "D": "which"
    },
    "correct_answer": "C",
    "explanation_reason": "Mệnh đề sau giải thích nội dung cho danh từ trừu tượng 'the fact'. Cấu trúc 'the fact that' (sự thật là/nội dung rằng...) là một cấu trúc mệnh đề danh ngữ rất phổ biến làm đồng vị ngữ (appositive clause) cho Noun đứng trước.",
    "explanation_grammar": "The fact + that + S + V + O: Sự thật là/nội dung rằng... (Đồng vị ngữ).",
    "translation": "Chúng ta cần nghiêm túc cân nhắc sự thật (về việc) rằng công chúng coi chúng ta là một công ty thân thiện với môi trường, vì bao bì của chúng ta có thể tái chế.",
    "core_vocabulary": [
      { "word": "perceive", "type": "v.", "meaning": "nhìn nhận, coi" },
      { "word": "environmentally-friendly", "type": "adj.", "meaning": "thân thiện với môi trường" }
    ]
  },
  {
    "question": "Morgan Inc.'s acquisition of a foreign firm will bring about a variety of drastic changes to the way the company -------.",
    "options": {
      "A": "operation",
      "B": "operates",
      "C": "to operate",
      "D": "operated"
    },
    "correct_answer": "B",
    "explanation_reason": "Cụm 'the way (that) + S + V' (cách mà S thực hiện hành động V). Chỗ trống nằm ở vị trí động từ chính của mệnh đề phụ (S là the company). Diễn tả sự thật hiện tại/tương lai bao trùm nên chia Hiện tại đơn: 'operates'.",
    "explanation_grammar": "Mệnh đề quan hệ với the way: the way (in which/that - có thể lược bỏ) + S + V.",
    "translation": "Việc Morgan Inc. mua lại một công ty nước ngoài sẽ mang lại hàng loạt những thay đổi quyết liệt đối với cách thức công ty đang vận hành.",
    "core_vocabulary": [
      { "word": "acquisition", "type": "n.", "meaning": "sự mua lại" },
      { "word": "drastic", "type": "adj.", "meaning": "quyết liệt, mạnh mẽ" },
      { "word": "operate", "type": "v.", "meaning": "vận hành, hoạt động" }
    ]
  },
  {
    "question": "The desserts ------- in the company cafeteria are not only incredibly delicious, but healthy and beautifully presented, too.",
    "options": {
      "A": "offered",
      "B": "to offer",
      "C": "offering",
      "D": "offers"
    },
    "correct_answer": "A",
    "explanation_reason": "Câu đã có động từ chính (are). Để bổ nghĩa cho 'desserts' (các món tráng miệng), ta dùng mệnh đề quan hệ rút gọn dạng bị động 'which are offered'... Lược bỏ đại từ và tobe, ta có P.P (V_ed) -> 'offered' (được cung cấp).",
    "explanation_grammar": "Rút gọn mệnh đề quan hệ bị động: N + V3/ed + adv/prep.",
    "translation": "Các món tráng miệng được cung cấp trong quán ăn tự phục vụ của công ty không chỉ cực kỳ ngon miệng mà còn tốt cho sức khỏe và được trình bày rất bắt mắt.",
    "core_vocabulary": [
      { "word": "dessert", "type": "n.", "meaning": "món tráng miệng" },
      { "word": "cafeteria", "type": "n.", "meaning": "quán ăn tự phục vụ" },
      { "word": "offer", "type": "v.", "meaning": "cung cấp, phục vụ món" }
    ]
  },
  {
    "question": "After months of negotiations, Mr. Kenneth has reached an agreement with JM Logistics Co., ------- support is crucial for his business's economic recovery.",
    "options": {
      "A": "which",
      "B": "what",
      "C": "that",
      "D": "whose"
    },
    "correct_answer": "D",
    "explanation_reason": "'support' (sự hỗ trợ) ở đây là danh từ thuộc về công ty JM Logistics Co. Do đó cần đại từ chỉ sở hữu cho người lẫn vật ('whose support' - sự hỗ trợ của công ty đó).",
    "explanation_grammar": "Mệnh đề quan hệ biểu thị sở hữu sau dấu phẩy: , whose + N + V.",
    "translation": "Sau nhiều tháng đàm phán, ông Kenneth đã đạt được thỏa thuận với Công ty Logistics JM, sự quản lý hậu thuẫn của công ty đó rất quan trọng đối với sự phục hồi kinh tế của doanh nghiệp ông.",
    "core_vocabulary": [
      { "word": "negotiation", "type": "n.", "meaning": "cuộc đàm phán" },
      { "word": "crucial", "type": "adj.", "meaning": "quan trọng, cốt yếu" },
      { "word": "recovery", "type": "n.", "meaning": "sự phục hồi" }
    ]
  }
];


const filepath = path.join(__dirname, '../data/questions.js');
let content = fs.readFileSync(filepath, 'utf8');

const idMatches = [...content.matchAll(/"id":\s*"q(\d+)"/g)];
let lastId = 0;
if (idMatches.length > 0) {
  lastId = Math.max(...idMatches.map(m => parseInt(m[1])));
}

qs.forEach(q => {
  lastId++;
  q.id = "q" + lastId;
  q.grammar_type = "MĐQH";
});

content = content.replace(/\s*\}\s*\];\s*$/, '');
content += '\n  },\n';

const formattedQs = qs.map(q => JSON.stringify(q, null, 2).split('\n').map(line => '  ' + line).join('\n'));
content += formattedQs.join(',\n') + '\n];\n';

fs.writeFileSync(filepath, content, 'utf8');
console.log("Successfully added MĐQH Test 2");
