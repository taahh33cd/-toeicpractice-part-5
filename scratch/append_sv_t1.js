const fs = require('fs');
const path = require('path');

const qs = [
  {
    "question": "The representatives from the marketing department ____ a new business strategy tomorrow.",
    "options": {
      "A": "present",
      "B": "presenting",
      "C": "presents",
      "D": "is presenting"
    },
    "correct_answer": "A",
    "explanation_reason": "Chủ ngữ chính của câu là 'The representatives' (những người đại diện) ở dạng số nhiều. Do đó, động từ phải chia ở hình thức số nhiều. Trong các phân án, chỉ 'present' là động từ chia số nhiều (các phương án C, D chia cho số ít, B là phân từ không thể làm động từ chính). Thì hiện tại đơn được dùng để chỉ một lịch trình của tương lai (tomorrow).",
    "explanation_grammar": "Sự hòa hợp giữa Chủ ngữ và Động từ: Chủ ngữ (số nhiều) + N1 + Prep + N2 + ... -> Động từ chia theo N1 (số nhiều).",
    "translation": "Những người đại diện từ bộ phận tiếp thị sẽ trình bày một chiến lược kinh doanh mới vào ngày mai.",
    "core_vocabulary": [
      { "word": "representative", "type": "n.", "meaning": "người đại diện" },
      { "word": "strategy", "type": "n.", "meaning": "chiến lược" }
    ]
  },
  {
    "question": "The invoice for the recent office supplies ____ to be paid immediately.",
    "options": {
      "A": "are needing",
      "B": "need",
      "C": "needing",
      "D": "needs"
    },
    "correct_answer": "D",
    "explanation_reason": "Chủ ngữ là cụm danh từ 'The invoice for the recent office supplies'. Danh từ chính của cụm này đứng trước giới từ 'for' là 'The invoice' (hóa đơn - danh từ đếm được số ít). Động từ chính cần chia theo danh từ số ít là 'needs'.",
    "explanation_grammar": "Chủ ngữ chính là N1 trong cấu trúc N1 + Giới từ + N2. N1 (số ít) đi với V(số ít -s/es).",
    "translation": "Hóa đơn cho các vật tư văn phòng gần đây cần được thanh toán ngay lập tức.",
    "core_vocabulary": [
      { "word": "invoice", "type": "n.", "meaning": "hóa đơn" },
      { "word": "office supplies", "type": "n.", "meaning": "vật tư/văn phòng phẩm" }
    ]
  },
  {
    "question": "The shipments of the new electronic device ____ expected to arrive on Tuesday.",
    "options": {
      "A": "being",
      "B": "is",
      "C": "are",
      "D": "was"
    },
    "correct_answer": "C",
    "explanation_reason": "Chủ ngữ 'The shipments' (các lô hàng) là danh từ số nhiều (kết thúc bằng -s). Bỏ qua thành phần bổ ngữ 'of the new electronic device' để chia động từ theo the shipments. Động từ tobe chia cho chủ ngữ số nhiều mang nghĩa bị động ở hiện tại là 'are'.",
    "explanation_grammar": "Chủ ngữ N(số nhiều) + prep + N2 + ... -> Động từ Tobe (are/were).",
    "translation": "Các lô hàng của thiết bị điện tử mới dự kiến sẽ đến vào thứ Ba.",
    "core_vocabulary": [
      { "word": "shipment", "type": "n.", "meaning": "lô hàng, chuyến hàng" },
      { "word": "electronic device", "type": "n.", "meaning": "thiết bị điện tử" }
    ]
  },
  {
    "question": "The list of registered participants ____ posted on the bulletin board yesterday.",
    "options": {
      "A": "were",
      "B": "have been",
      "C": "was",
      "D": "are"
    },
    "correct_answer": "C",
    "explanation_reason": "Danh từ chính làm chủ ngữ là 'The list' (danh sách - số ít). Có trạng từ thời gian 'yesterday' (hôm qua), do đó ta cần một động từ to be chia ở quá khứ số ít là 'was'.",
    "explanation_grammar": "S (The list - số ít) -> thì quá khứ đơn (yesterday) -> was.",
    "translation": "Danh sách các thành viên đăng ký tham gia đã được dán lên bảng tin vào ngày hôm qua.",
    "core_vocabulary": [
      { "word": "participant", "type": "n.", "meaning": "người tham gia" },
      { "word": "bulletin board", "type": "n.", "meaning": "bảng thông báo" }
    ]
  },
  {
    "question": "Flights to the Miltonville airport ____ delayed due to severe weather conditions.",
    "options": {
      "A": "has been",
      "B": "being",
      "C": "is",
      "D": "are"
    },
    "correct_answer": "D",
    "explanation_reason": "Danh từ chính trong chủ ngữ là 'Flights' (những chuyến bay) ở hình thức số nhiều. Động từ cần chia ở dạng số nhiều. Trrong 4 lựa chọn, chỉ có 'are' là phù hợp.",
    "explanation_grammar": "N1 (số nhiều) + prep (to) + N2... -> V(số nhiều).",
    "translation": "Các chuyến bay đến sân bay Miltonville bị trì hoãn do điều kiện thời tiết khắc nghiệt.",
    "core_vocabulary": [
      { "word": "severe", "type": "adj.", "meaning": "khắc nghiệt, dữ dội" },
      { "word": "delay", "type": "v.", "meaning": "trì hoãn" }
    ]
  },
  {
    "question": "A new policy regarding employee benefits ____ implemented next month.",
    "options": {
      "A": "is being",
      "B": "have been",
      "C": "are being",
      "D": "being"
    },
    "correct_answer": "A",
    "explanation_reason": "Danh từ chính là 'A new policy' (một chính sách mới - số ít). Động từ phải chia số ít (chọn is being). Ở đây, thì hiện tại tiếp diễn dạng bị động 'is being implemented' đóng vai trò diễn tả một kế hoạch/sự việc sẽ xảy ra vào tương lai gần ('next month').",
    "explanation_grammar": "Danh từ đứng trước prepositional phrase (regarding employee benefits) làm quyết định sự hòa hợp: A new policy (số ít) -> is.",
    "translation": "Một chính sách mới liên quan đến lợi ích của nhân viên sẽ được thực hiện vào tháng tới.",
    "core_vocabulary": [
      { "word": "policy", "type": "n.", "meaning": "chính sách" },
      { "word": "regarding", "type": "prep.", "meaning": "về việc, liên quan đến" },
      { "word": "implement", "type": "v.", "meaning": "thực hiện, thi hành" }
    ]
  },
  {
    "question": "The notes from the weekly board meeting ____ distributed to all branch managers.",
    "options": {
      "A": "was",
      "B": "were",
      "C": "is",
      "D": "has been"
    },
    "correct_answer": "B",
    "explanation_reason": "Chủ ngữ là 'The notes' (các ghi chú, biên bản) đang ở dạng số nhiều (-s). Do vậy ta loại các phương án số ít (was, is, has been). Đáp án 'were' là tobe chia số nhiều.",
    "explanation_grammar": "N1 số nhiều ('notes') + giới từ ('from') + N2 -> Động từ số nhiều.",
    "translation": "Các biên bản từ cuộc họp hội đồng quản trị hàng tuần đã được phân phối đến tất cả các quản lý chi nhánh.",
    "core_vocabulary": [
      { "word": "notes", "type": "n.", "meaning": "biên bản, ghi chú" },
      { "word": "distribute", "type": "v.", "meaning": "phân phát, phân phối" }
    ]
  },
  {
    "question": "The request for additional computer monitors ____ approved by the director.",
    "options": {
      "A": "are",
      "B": "having been",
      "C": "has been",
      "D": "have been"
    },
    "correct_answer": "C",
    "explanation_reason": "'The request' (yêu cầu) là danh từ số ít, do vậy động từ chính phải chia theo ngôi thứ 3 số ít. Đáp án C 'has been' là phù hợp để tạo thành cấu trúc bị động của thì hiện tại hoàn thành.",
    "explanation_grammar": "Chủ ngữ N1 số ít ('request') -> động từ số ít ('has').",
    "translation": "Yêu cầu cung cấp thêm màn hình máy tính đã được giám đốc phê duyệt.",
    "core_vocabulary": [
      { "word": "request", "type": "n.", "meaning": "yêu cầu" },
      { "word": "additional", "type": "adj.", "meaning": "thêm, bổ sung" }
    ]
  },
  {
    "question": "Candidates for the vacant management position ____ required to submit a portfolio.",
    "options": {
      "A": "has been",
      "B": "are",
      "C": "was",
      "D": "is"
    },
    "correct_answer": "B",
    "explanation_reason": "Chủ ngữ chính là 'Candidates' (được thêm -s tương ứng số nhiều). Theo đó động từ phải chia dạng số nhiều, chỉ có 'are' là phương án chính xác trong 4 đáp án (các đáp án còn lại đều ở dạng số ít).",
    "explanation_grammar": "S (plural Noun) -> Verb (plural).",
    "translation": "Các ứng cử viên cho vị trí quản lý bị trống được yêu cầu nộp hồ sơ năng lực.",
    "core_vocabulary": [
      { "word": "vacant", "type": "adj.", "meaning": "trống, đang bỏ trống" },
      { "word": "portfolio", "type": "n.", "meaning": "hồ sơ năng lực" }
    ]
  },
  {
    "question": "The quality of our newly released products ____ significantly since last year.",
    "options": {
      "A": "improving",
      "B": "have improved",
      "C": "improve",
      "D": "has improved"
    },
    "correct_answer": "D",
    "explanation_reason": "Cụm chủ ngữ có danh từ cốt lõi là 'The quality' (chất lượng), là danh từ không đếm được/số ít. Dấu hiệu thì 'since last year' yêu cầu dùng thì hiện tại hoàn thành. Vậy ta chọn 'has improved'.",
    "explanation_grammar": "N1 (số ít/không đếm được) + of + N2 + ... -> V(số ít: has).",
    "translation": "Chất lượng của các sản phẩm mới ra mắt của chúng tôi đã cải thiện đáng kể từ năm ngoái.",
    "core_vocabulary": [
      { "word": "quality", "type": "n.", "meaning": "chất lượng" },
      { "word": "improve", "type": "v.", "meaning": "cải thiện" }
    ]
  },
  {
    "question": "Instructions for the new software program ____ included in the welcome packet.",
    "options": {
      "A": "has been",
      "B": "was",
      "C": "are",
      "D": "is"
    },
    "correct_answer": "C",
    "explanation_reason": "Danh từ chính là 'Instructions' (các hướng dẫn - số nhiều). Ta bỏ qua phần bổ nghĩa từ 'for' để chia động từ số nhiều là 'are'.",
    "explanation_grammar": "Danh từ số nhiều + Prep + Noun -> Động từ số nhiều.",
    "translation": "Hướng dẫn cho chương trình phần mềm mới được bao gồm trong gói (tài liệu) chào mừng.",
    "core_vocabulary": [
      { "word": "instruction", "type": "n.", "meaning": "hướng dẫn, chỉ dẫn" },
      { "word": "packet", "type": "n.", "meaning": "gói tài liệu" }
    ]
  },
  {
    "question": "The feedback from our regular customers ____ very helpful for our market research.",
    "options": {
      "A": "are",
      "B": "have been",
      "C": "were",
      "D": "is"
    },
    "correct_answer": "D",
    "explanation_reason": "Chủ ngữ là 'The feedback' (sự phản hồi, góp ý). Đây là danh từ KHÔNG ĐẾM ĐƯỢC (không bao giờ có -s), do đó động từ luôn đi kèm ở hình thức Số ít -> 'is'.",
    "explanation_grammar": "Danh từ không đếm được (Uncountable Nouns) luôn đi kèm động từ chia số ít.",
    "translation": "Phản hồi từ các khách hàng thường xuyên của chúng tôi rất hữu ích cho nghiên cứu thị trường của chúng tôi.",
    "core_vocabulary": [
      { "word": "feedback", "type": "n.", "meaning": "phản hồi" },
      { "word": "regular", "type": "adj.", "meaning": "thường xuyên" }
    ]
  },
  {
    "question": "Discounts on the older appliance model ____ valid until the end of May.",
    "options": {
      "A": "are",
      "B": "being",
      "C": "is",
      "D": "has been"
    },
    "correct_answer": "A",
    "explanation_reason": "Chủ ngữ 'Discounts' (Các khoản giảm giá) là số nhiều. Chia động từ số nhiều -> 'are'.",
    "explanation_grammar": "N1 (số nhiều) + giới từ + N2 -> V chia theo N1.",
    "translation": "Khuyến mãi giảm giá cho dòng thiết bị cũ hơn có hiệu lực cho đến cuối tháng Năm.",
    "core_vocabulary": [
      { "word": "discount", "type": "n.", "meaning": "sự giảm giá" },
      { "word": "valid", "type": "adj.", "meaning": "có hiệu lực, hợp lệ" }
    ]
  },
  {
    "question": "The contract for the building renovations ____ currently under review by lawyers.",
    "options": {
      "A": "have been",
      "B": "are",
      "C": "were",
      "D": "is"
    },
    "correct_answer": "D",
    "explanation_reason": "Cốt lõi của chủ ngữ là 'The contract' (bản hợp đồng - đếm được, số ít). Động từ theo sau chia số ít. Trạng từ 'currently' chỉ hiện tại -> chọn 'is'.",
    "explanation_grammar": "Danh từ số ít đếm được đi kèm động từ chia thì hiện tại số ít (is).",
    "translation": "Hợp đồng cho việc cải tạo tòa nhà hiện đang được xem xét bởi các luật sư.",
    "core_vocabulary": [
      { "word": "renovation", "type": "n.", "meaning": "sự cải tạo, sửa chữa lại" },
      { "word": "under review", "type": "phr.", "meaning": "đang được xem xét thẩm duyệt" }
    ]
  },
  {
    "question": "Packages from the international distribution center ____ usually delivered within five days.",
    "options": {
      "A": "to be",
      "B": "are",
      "C": "has been",
      "D": "is"
    },
    "correct_answer": "B",
    "explanation_reason": "'Packages' là số nhiều. Câu mang tính diễn tả sự thật/quy trình thông thường (usually) ở thể bị động -> 'are delivered'.",
    "explanation_grammar": "Tobe số nhiều cho Noun số nhiều ở thể bị động hiện tại.",
    "translation": "Các bưu kiện từ trung tâm phân phối quốc tế thường được giao trong vòng năm ngày.",
    "core_vocabulary": [
      { "word": "package", "type": "n.", "meaning": "bưu kiện" },
      { "word": "distribution", "type": "n.", "meaning": "sự phân phối" }
    ]
  },
  {
    "question": "A summary of your monthly expenses ____ attached to this email message.",
    "options": {
      "A": "being",
      "B": "have been",
      "C": "are",
      "D": "is"
    },
    "correct_answer": "D",
    "explanation_reason": "'A summary' (một bản tóm tắt) là danh từ chính yếu của cụm. Vì là số ít nên động từ phải chia tobe số ít -> 'is'.",
    "explanation_grammar": "N1 (số ít) + of + N2 -> Động từ tobe số ít (is/was).",
    "translation": "Bản tóm tắt các chi phí hàng tháng của bạn được đính kèm trong thư email này.",
    "core_vocabulary": [
      { "word": "summary", "type": "n.", "meaning": "bản tóm tắt" },
      { "word": "expense", "type": "n.", "meaning": "chi tiêu, chi phí" },
      { "word": "attach", "type": "v.", "meaning": "đính kèm" }
    ]
  },
  {
    "question": "Shuttles to the downtown convention center ____ every twenty minutes.",
    "options": {
      "A": "run",
      "B": "to run",
      "C": "runs",
      "D": "is running"
    },
    "correct_answer": "A",
    "explanation_reason": "'Shuttles' (xe đưa đón) ở số nhiều. Do vậy động từ chính phải chia không thêm s/es cho ngôi số nhiều ở hiện tại đơn (chỉ lịch trình) -> 'run'.",
    "explanation_grammar": "Ngôi thứ 3 số nhiều (Shuttles) yêu cầu động từ giữ nguyên mẫu (run) trong thì hiện tại đơn.",
    "translation": "Hệ thống xe đưa đón tới trung tâm hội nghị thành phố chạy hai mươi phút một chuyến.",
    "core_vocabulary": [
      { "word": "shuttle", "type": "n.", "meaning": "xe khách đưa đón theo tuyến" },
      { "word": "convention center", "type": "n.", "meaning": "trung tâm hội nghị" }
    ]
  },
  {
    "question": "The design for the new advertising campaigns ____ finalized by the creative team.",
    "options": {
      "A": "have been",
      "B": "being",
      "C": "are",
      "D": "has been"
    },
    "correct_answer": "D",
    "explanation_reason": "Bỏ qua cụm bổ nghĩa phía sau, ta thấy 'The design' là danh từ số ít (thiết kế, mẫu mã). Động từ tobe cho dạng bị động hoàn thành số ít là 'has been'.",
    "explanation_grammar": "Danh từ số ít làm chủ ngữ -> 'has'.",
    "translation": "Thiết kế cho các chiến dịch quảng cáo mới đã được hoàn thiện bởi đội ngũ sáng tạo.",
    "core_vocabulary": [
      { "word": "finalize", "type": "v.", "meaning": "chốt, hoàn thiện bước cuối" },
      { "word": "advertising campaign", "type": "n.", "meaning": "chiến dịch quảng cáo" }
    ]
  },
  {
    "question": "Fluctuations in the current stock market ____ a concern for many investors.",
    "options": {
      "A": "was",
      "B": "has been",
      "C": "is",
      "D": "are"
    },
    "correct_answer": "D",
    "explanation_reason": "Chủ ngữ là đại từ 'Fluctuations' (những sự dao động, biến động) - kết thúc bằng đuôi -s biểu thị số nhiều. Động từ do đó chia số nhiều 'are'.",
    "explanation_grammar": "Chủ ngữ N(số nhiều) + in + ... -> Động từ tobe 'are/were'.",
    "translation": "Những biến động trên thị trường chứng khoán hiện tại là mối lo ngại đối với nhiều nhà đầu tư.",
    "core_vocabulary": [
      { "word": "fluctuation", "type": "n.", "meaning": "sự dao động, thay đổi lên xuống" },
      { "word": "stock market", "type": "n.", "meaning": "thị trường chứng khoán" },
      { "word": "concern", "type": "n.", "meaning": "mối bận tâm, lo ngại" }
    ]
  },
  {
    "question": "The proposal concerning the updated safety regulations ____ careful consideration.",
    "options": {
      "A": "require",
      "B": "are required",
      "C": "requiring",
      "D": "requires"
    },
    "correct_answer": "D",
    "explanation_reason": "Chủ thể thực hiện là 'The proposal' (một bản đề xuất) - số ít. Động từ đòi hỏi thêm 's' ở tận cùng -> 'requires' (chủ động).",
    "explanation_grammar": "Chủ ngữ số ít (the proposal) thì động từ thường bổ sung 's' hoặc 'es'.",
    "translation": "Đề xuất liên quan đến các quy định an toàn được cập nhật đòi hỏi sự xem xét cẩn trọng.",
    "core_vocabulary": [
      { "word": "concerning", "type": "prep.", "meaning": "liên quan đến (đồng nghĩa regarding)" },
      { "word": "consideration", "type": "n.", "meaning": "sự xem xét, cân nhắc" }
    ]
  },
  {
    "question": "Errors in the new billing system ____ causing delays for our corporate clients.",
    "options": {
      "A": "was",
      "B": "is",
      "C": "are",
      "D": "has been"
    },
    "correct_answer": "C",
    "explanation_reason": "Danh từ chính yếu là 'Errors' (nhiều lỗi) - số nhiều. Động từ tobe để tạo thành thì tiếp diễn chủ động dạng số nhiều là 'are'.",
    "explanation_grammar": "N(lỗi - số nhiều) -> To be dạng số nhiều (are).",
    "translation": "Các lỗi trong hệ thống xuất hóa đơn mới đang gây ra sự chậm trễ cho các khách hàng doanh nghiệp của chúng tôi.",
    "core_vocabulary": [
      { "word": "billing system", "type": "n.", "meaning": "hệ thống xuất hóa đơn thanh toán" },
      { "word": "corporate", "type": "adj.", "meaning": "thuộc công ty, doanh nghiệp" }
    ]
  },
  {
    "question": "Registration for the upcoming leadership workshops ____ closed on Friday afternoon.",
    "options": {
      "A": "are closing",
      "B": "closes",
      "C": "closing",
      "D": "close"
    },
    "correct_answer": "B",
    "explanation_reason": "'Registration' (Việc đăng ký) là danh từ trừu tượng không đếm được/hiểu là số ít. 'Friday afternoon' chỉ một thời điểm lên kế hoạch lịch trình. Do đó động từ thêm 's' -> 'closes'.",
    "explanation_grammar": "Danh từ sự việc (số ít) -> V thêm -s/-es để chỉ lịch trình.",
    "translation": "Việc đăng ký cho các hội thảo lãnh đạo sắp tới sẽ kết thúc vào chiều thứ Sáu.",
    "core_vocabulary": [
      { "word": "registration", "type": "n.", "meaning": "việc đăng ký" },
      { "word": "upcoming", "type": "adj.", "meaning": "sắp tới" }
    ]
  },
  {
    "question": "Changes to the original project schedule ____ announced at the morning briefing.",
    "options": {
      "A": "was",
      "B": "has been",
      "C": "is",
      "D": "were"
    },
    "correct_answer": "D",
    "explanation_reason": "'Changes' (Những thay đổi) là số nhiều. Sự việc 'công bố ở cuộc họp sáng' chỉ định quá khứ. Do vậy to be chia ở quá khứ số nhiều là 'were'.",
    "explanation_grammar": "Chủ ngữ (số nhiều) mang nghĩa bị động ở quá khứ -> 'were + V3/ed'.",
    "translation": "Những thay đổi so với tiến độ dự án ban đầu đã được thông báo tại buổi họp giao ban buổi sáng.",
    "core_vocabulary": [
      { "word": "briefing", "type": "n.", "meaning": "buổi họp giao ban nhanh" },
      { "word": "announce", "type": "v.", "meaning": "công bố, thông báo" }
    ]
  },
  {
    "question": "The cost of the imported building materials ____ higher than we initially expected.",
    "options": {
      "A": "is",
      "B": "are",
      "C": "were",
      "D": "have been"
    },
    "correct_answer": "A",
    "explanation_reason": "'The cost' (Chi phí) là một khái niệm trừu tượng danh từ số ít (trong trường hợp này). Bỏ qua bổ ngữ 'of the imported..materials', động từ đi theo cost là số ít -> 'is'.",
    "explanation_grammar": "Khái niệm chi phí (The cost / The price) đếm bằng số ít ở mặt tổng thể -> Dùng động từ tobe 'is/was'.",
    "translation": "Chi phí cho vật liệu xây dựng nhập khẩu cao hơn so với chúng tôi dự kiến ban đầu.",
    "core_vocabulary": [
      { "word": "imported", "type": "adj.", "meaning": "được nhập khẩu" },
      { "word": "initially", "type": "adv.", "meaning": "ban đầu" }
    ]
  },
  {
    "question": "Invitations to the annual charity banquet ____ mailed out earlier this week.",
    "options": {
      "A": "is",
      "B": "was",
      "C": "were",
      "D": "has been"
    },
    "correct_answer": "C",
    "explanation_reason": "'Invitations' (những tấm thiệp mời) là chủ ngữ số nhiều. Dấu hiệu quá khứ 'earlier this week' (vào đầu tuần này) cần động từ ở thể quá khứ bị động. Do đó dùng tobe 'were'.",
    "explanation_grammar": "Chủ ngữ N(số nhiều) + prep + N... -> to be 'were' bổ ngữ cho hành động quá khứ.",
    "translation": "Giấy mời tham dự tiệc từ thiện thường niên đã được gửi đi vào đầu tuần này.",
    "core_vocabulary": [
      { "word": "invitation", "type": "n.", "meaning": "lời/giấy mời" },
      { "word": "banquet", "type": "n.", "meaning": "bữa tiệc lớn, yến tiệc" }
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
  q.grammar_type = "Hoà hợp S-V";
});

content = content.replace(/\s*\}\s*\];\s*$/, '');
content += '\n  },\n';

const formattedQs = qs.map(q => JSON.stringify(q, null, 2).split('\n').map(line => '  ' + line).join('\n'));
content += formattedQs.join(',\n') + '\n];\n';

fs.writeFileSync(filepath, content, 'utf8');
console.log("Successfully added Hoà hợp S-V Test 1");
