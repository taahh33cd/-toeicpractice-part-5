const fs = require('fs');
const path = require('path');

const qs = [
  {
    "question": "The menu for the upcoming holiday banquets ____ finalized by the head chef.",
    "options": {
      "A": "have been",
      "B": "is",
      "C": "were",
      "D": "are"
    },
    "correct_answer": "B",
    "explanation_reason": "Chủ ngữ là 'The menu' (thực đơn) - danh từ số ít đếm được. Do đó, động từ tobe phải được chia ở dạng số ít. Trong các lựa chọn, B 'is' là tobe số ít duy nhất.",
    "explanation_grammar": "Chủ ngữ (số ít) + prep + N(số nhiều) -> Động từ chia theo chủ ngữ số ít.",
    "translation": "Thực đơn cho các bữa tiệc ngày lễ sắp tới được chốt bởi bếp trưởng.",
    "core_vocabulary": [
      { "word": "menu", "type": "n.", "meaning": "thực đơn" },
      { "word": "banquet", "type": "n.", "meaning": "bữa tiệc lớn" }
    ]
  },
  {
    "question": "Refunds for the defective merchandise ____ processed at the customer service desk.",
    "options": {
      "A": "is",
      "B": "are",
      "C": "has been",
      "D": "was"
    },
    "correct_answer": "B",
    "explanation_reason": "Chủ ngữ 'Refunds' (các khoản hoàn tiền) có hậu tố '-s' là danh từ số nhiều. Từ đó tobe phải chia số nhiều dạng 'are' (hiện tại) hoặc 'were' (quá khứ).",
    "explanation_grammar": "N1 (số nhiều) + prep + N2 -> Động từ tobe số nhiều.",
    "translation": "Các khoản hoàn tiền cho hàng hóa bị lỗi được xử lý tại quầy dịch vụ khách hàng.",
    "core_vocabulary": [
      { "word": "refund", "type": "n.", "meaning": "khoản tiền hoàn lại" },
      { "word": "defective merchandise", "type": "n.", "meaning": "hàng hóa bị lỗi" }
    ]
  },
  {
    "question": "The manager of the local retail stores ____ reviewing the new applications right now.",
    "options": {
      "A": "were",
      "B": "is",
      "C": "are",
      "D": "have been"
    },
    "correct_answer": "B",
    "explanation_reason": "Danh từ trung tâm 'The manager' (người quản lý) ở dạng số ít. Trạng từ 'right now' yêu cầu thì hiện tại tiếp diễn. Tobe chia số ít là 'is'.",
    "explanation_grammar": "Danh từ người đếm được số ít làm chủ ngữ -> V chia số ít.",
    "translation": "Người quản lý của các cửa hàng bán lẻ địa phương hiện đang xem xét các đơn đăng ký mới vào lúc này.",
    "core_vocabulary": [
      { "word": "retail store", "type": "n.", "meaning": "cửa hàng bán lẻ" },
      { "word": "application", "type": "n.", "meaning": "đơn đăng ký, ứng tuyển" }
    ]
  },
  {
    "question": "Updates to the employee handbook ____ distributed to all staff members on Monday.",
    "options": {
      "A": "has been",
      "B": "is",
      "C": "were",
      "D": "was"
    },
    "correct_answer": "C",
    "explanation_reason": "Danh từ chính 'Updates' (các bản cập nhật) là số nhiều. Dấu hiệu 'on Monday' trong ngữ cảnh này hiểu là sự việc đã hoàn tất (chia ở quá khứ). Chọn 'were'. (A, B, D đều là số ít).",
    "explanation_grammar": "S(số nhiều) -> Động từ tobe số nhiều (were).",
    "translation": "Các bản cập nhật cho sổ tay nhân viên đã được phân phát cho tất cả các nhân viên vào thứ Hai.",
    "core_vocabulary": [
      { "word": "update", "type": "n.", "meaning": "bản cập nhật" },
      { "word": "employee handbook", "type": "n.", "meaning": "sổ tay nhân viên" }
    ]
  },
  {
    "question": "Passengers on the delayed flight ____ offered complementary meal vouchers by the airline.",
    "options": {
      "A": "is",
      "B": "were",
      "C": "has been",
      "D": "was"
    },
    "correct_answer": "B",
    "explanation_reason": "Chủ ngữ 'Passengers' (những hành khách) là số nhiều. Động từ cần chia ở hình thức số nhiều. Trong các phân án, chỉ 'were' đáp ứng yêu cầu hòa hợp S-V.",
    "explanation_grammar": "N(plural) -> V(plural: are/were/have...).",
    "translation": "Những hành khách trên chuyến bay bị hoãn đã được hãng hàng không cung cấp các phiếu ăn uống miễn phí.",
    "core_vocabulary": [
      { "word": "passenger", "type": "n.", "meaning": "hành khách" },
      { "word": "complementary", "type": "adj.", "meaning": "miễn phí, biếu tặng" },
      { "word": "voucher", "type": "n.", "meaning": "phiếu quà tặng/mua hàng" }
    ]
  },
  {
    "question": "The budget for the upcoming marketing campaigns ____ approved by the board yesterday.",
    "options": {
      "A": "have been",
      "B": "was",
      "C": "were",
      "D": "are"
    },
    "correct_answer": "B",
    "explanation_reason": "Danh từ trọng tâm là 'The budget' (ngân sách) - số ít. 'yesterday' là mốc thời gian quá khứ. Động từ tobe phù hợp là 'was'.",
    "explanation_grammar": "Danh từ (số ít) -> tobe quá khứ số ít (was).",
    "translation": "Ngân sách cho các chiến dịch tiếp thị sắp tới đã được hội đồng quản trị phê duyệt ngày hôm qua.",
    "core_vocabulary": [
      { "word": "budget", "type": "n.", "meaning": "ngân sách" },
      { "word": "approve", "type": "v.", "meaning": "phê duyệt" }
    ]
  },
  {
    "question": "The keys to the storage closet ____ kept at the front reception desk at all times.",
    "options": {
      "A": "are",
      "B": "was",
      "C": "is",
      "D": "has been"
    },
    "correct_answer": "A",
    "explanation_reason": "'The keys' (những chiếc chìa khóa) là số nhiều, vì vậy động từ đi theo phải chia số nhiều. 'are' là phương án chính xác duy nhất vì các phương án còn lại đều chia số ít.",
    "explanation_grammar": "N(số nhiều) + prep + N(số ít) -> V chia theo N1(số nhiều).",
    "translation": "Chìa khóa tủ đựng đồ luôn luôn được giữ tại bàn tiếp tân phía trước.",
    "core_vocabulary": [
      { "word": "storage closet", "type": "n.", "meaning": "tủ đựng đồ đạc" },
      { "word": "reception desk", "type": "n.", "meaning": "bàn tiếp tân" }
    ]
  },
  {
    "question": "Tickets for the charity concert ____ completely sold out within two hours.",
    "options": {
      "A": "are",
      "B": "was",
      "C": "is",
      "D": "has been"
    },
    "correct_answer": "A",
    "explanation_reason": "Chủ ngữ 'Tickets' (những chiếc vé) là số nhiều. Chỉ 'are' mang đại diện hòa hợp cụm chủ ngữ - động từ số nhiều trong các phương án.",
    "explanation_grammar": "Danh từ số nhiều làm chủ ngữ -> V chia số nhiều.",
    "translation": "Vé xem buổi biểu diễn từ thiện đã được bán hết hoàn toàn trong vòng hai giờ.",
    "core_vocabulary": [
      { "word": "charity concert", "type": "n.", "meaning": "buổi biểu diễn nhạc từ thiện" },
      { "word": "sell out", "type": "phr. v.", "meaning": "bán hết sạch" }
    ]
  },
  {
    "question": "The maintenance worker in charge of the elevators ____ arriving shortly to fix the issue.",
    "options": {
      "A": "is",
      "B": "are",
      "C": "have been",
      "D": "were"
    },
    "correct_answer": "A",
    "explanation_reason": "Danh từ chính 'The maintenance worker' (người thợ bảo trì) là số ít. Tobe tương ứng để tạo thì hiện tại tiếp diễn là 'is'.",
    "explanation_grammar": "Chủ ngữ mang thì tiếp diễn số ít: S(singular) + is + V-ing.",
    "translation": "Người thợ bảo trì phụ trách các thang máy sẽ đến ngay để sửa lỗi.",
    "core_vocabulary": [
      { "word": "maintenance worker", "type": "n.", "meaning": "thợ bảo trì định kỳ" },
      { "word": "in charge of", "type": "phr.", "meaning": "phụ trách, chịu trách nhiệm cho" }
    ]
  },
  {
    "question": "Reservations for the outdoor seating area ____ highly recommended during the summer months.",
    "options": {
      "A": "are",
      "B": "has been",
      "C": "is",
      "D": "was"
    },
    "correct_answer": "A",
    "explanation_reason": "Danh từ chính 'Reservations' (việc đặt chỗ/các bàn đã đặt) có hình thức số nhiều. Động từ tobe số nhiều ở hiện tại là 'are'.",
    "explanation_grammar": "N(số nhiều) -> dùng tobe 'are'.",
    "translation": "Việc đặt trước chỗ cho khu vực tiếp khách ngoài trời là điều hết sức được khuyến nghị vào những tháng mùa hè.",
    "core_vocabulary": [
      { "word": "reservation", "type": "n.", "meaning": "sự đặt chỗ trước" },
      { "word": "highly recommended", "type": "phr.", "meaning": "hết sức khuyến nghị, rất được khuyên dùng" }
    ]
  },
  {
    "question": "The list of qualified applicants ____ forwarded to the hiring committee this morning.",
    "options": {
      "A": "was",
      "B": "were",
      "C": "have been",
      "D": "are"
    },
    "correct_answer": "A",
    "explanation_reason": "Danh từ chính là 'The list' (danh sách) đếm ở số ít (mặc dù thí sinh thì nhiều). 'this morning' trong ngữ cảnh là thời điểm trong quá khứ -> 'was'.",
    "explanation_grammar": "The list (số ít) + prep + Ns -> động từ chia 'was'.",
    "translation": "Danh sách các ứng viên đủ tiêu chuẩn đã được chuyển đến hội đồng tuyển dụng sáng nay.",
    "core_vocabulary": [
      { "word": "qualified", "type": "adj.", "meaning": "đủ trình độ / tiêu chuẩn" },
      { "word": "forward", "type": "v.", "meaning": "chuyển tiếp (tài liệu, email)" }
    ]
  },
  {
    "question": "The price of the imported luxury cars ____ increased significantly since last year.",
    "options": {
      "A": "have",
      "B": "has",
      "C": "were",
      "D": "are"
    },
    "correct_answer": "B",
    "explanation_reason": "Danh từ chính 'The price' (mức giá) là số ít. Câu mang dấu hiệu thì hoàn thành ('since last year'). Trợ động từ số ít là 'has'.",
    "explanation_grammar": "The price + of N + V chia số ít (hiện tại hoàn thành -> has + V3).",
    "translation": "Giá xe hơi sang trọng nhập khẩu đã tăng đáng kể kể từ năm ngoái.",
    "core_vocabulary": [
      { "word": "luxury car", "type": "n.", "meaning": "xe hơi sang trọng" },
      { "word": "significantly", "type": "adv.", "meaning": "đáng kể" }
    ]
  },
  {
    "question": "Complaints regarding the new scheduling system ____ addressed by the supervisor yesterday.",
    "options": {
      "A": "has been",
      "B": "is",
      "C": "were",
      "D": "was"
    },
    "correct_answer": "C",
    "explanation_reason": "Đại từ làm chủ ngữ là 'Complaints' (những lời phàn nàn) - danh từ số nhiều. Có mốc thời gian 'yesterday'. Phải chia 'were' (tobe quá khứ số nhiều).",
    "explanation_grammar": "Chủ ngữ chỉ vật ở số nhiều + yesterday -> to be 'were'.",
    "translation": "Những khiếu nại liên quan đến hệ thống lập lịch mới đã được người giám sát giải quyết ngày hôm qua.",
    "core_vocabulary": [
      { "word": "complaint", "type": "n.", "meaning": "sự phàn nàn, khiếu nại" },
      { "word": "address", "type": "v.", "meaning": "giải quyết (vấn đề, câu hỏi)" }
    ]
  },
  {
    "question": "The deadline for the monthly sales reports ____ quickly approaching.",
    "options": {
      "A": "is",
      "B": "were",
      "C": "have been",
      "D": "are"
    },
    "correct_answer": "A",
    "explanation_reason": "'The deadline' (hạn chót) thuộc số ít. Động từ phù hợp dùng trong sự việc đang đến gần (hiện tại tiếp diễn) là 'is'.",
    "explanation_grammar": "N (hạn chót) đếm ở số ít -> tobe là is.",
    "translation": "Thời hạn cho các báo cáo doanh thu hàng tháng đang đến gần một cách nhanh chóng.",
    "core_vocabulary": [
      { "word": "deadline", "type": "n.", "meaning": "hạn chót, thời hạn" },
      { "word": "approach", "type": "v.", "meaning": "đang đến gần, tiếp cận" }
    ]
  },
  {
    "question": "Residents of the apartment complex ____ required to pay an additional fee for parking.",
    "options": {
      "A": "was",
      "B": "are",
      "C": "has been",
      "D": "is"
    },
    "correct_answer": "B",
    "explanation_reason": "'Residents' (nhiều cư dân) -> chia tobe số nhiều. Trong đó 'are' là lựa chọn duy nhất cho thấy sự hòa hợp đúng (số nhiều hiện tại).",
    "explanation_grammar": "S(số nhiều) -> chia tobe dạng số nhiều.",
    "translation": "Cư dân của khu phức hợp căn hộ này được yêu cầu đóng thêm một khoản phí để gửi xe.",
    "core_vocabulary": [
      { "word": "resident", "type": "n.", "meaning": "cư dân" },
      { "word": "apartment complex", "type": "n.", "meaning": "khu phức hợp căn hộ" }
    ]
  },
  {
    "question": "The taxes on the commercial property ____ due by the end of the month.",
    "options": {
      "A": "was",
      "B": "has been",
      "C": "is",
      "D": "are"
    },
    "correct_answer": "D",
    "explanation_reason": "Chủ ngữ là 'The taxes' (thuế) ở hình thức đếm nhiều (-s/-es). Do đó chia động từ số nhiều 'are'.",
    "explanation_grammar": "N-es -> Verb số nhiều (are/were).",
    "translation": "Thuế cho bất động sản thương mại cần nộp đủ vào cuối tháng.",
    "core_vocabulary": [
      { "word": "tax", "type": "n.", "meaning": "khoản thuế" },
      { "word": "due", "type": "adj.", "meaning": "đến kỳ hạn (phải trả)" }
    ]
  },
  {
    "question": "The display of the newest smartphone models ____ located near the main entrance.",
    "options": {
      "A": "is",
      "B": "are",
      "C": "were",
      "D": "have been"
    },
    "correct_answer": "A",
    "explanation_reason": "'The display' (Khu vực trưng bày/Bảng hiển thị) ở hình thức số ít. Bỏ qua cụm bổ nghĩa phía sau, ta chọn 'is' (chỉ định vị trí hiện tại).",
    "explanation_grammar": "The display (số ít) + is + located: Khu trưng bày / Sự hiển thị được đặt tại...",
    "translation": "Khu trưng bày các mẫu điện thoại thông minh mới nhất nằm gần lối vào chính.",
    "core_vocabulary": [
      { "word": "display", "type": "n.", "meaning": "khu trưng bày, màn hình hiển thị" },
      { "word": "locate", "type": "v.", "meaning": "định vị, đặt tại" }
    ]
  },
  {
    "question": "The agenda for the leadership seminars ____ emailed to all attendees last night.",
    "options": {
      "A": "has been",
      "B": "were",
      "C": "have been",
      "D": "are"
    },
    "correct_answer": "A",
    "explanation_reason": "'The agenda' (bản lịch trình / nghị sự) là một danh từ số ít (trong tiếng Anh hiện đại). Do đó bắt buộc phải đi kèm động từ số ít. Dù cụm 'last night' mang tính quá khứ, các phương án còn lại đều bị sai về số thứ tự (số nhiều). Phương án tốt nhất ở đây là chọn 'has been' để đảm bảo đúng sự hòa hợp S-V.",
    "explanation_grammar": "The agenda (danh từ số ít) đòi hỏi động từ số ít ('has' hoặc 'is' hoặc 'was').",
    "translation": "Lịch trình cho các buổi hội thảo lãnh đạo đã được gửi qua email đến tất cả những người tham dự vào tối qua.",
    "core_vocabulary": [
      { "word": "agenda", "type": "n.", "meaning": "lịch trình, chương trình nghị sự" },
      { "word": "attendee", "type": "n.", "meaning": "người tham gia" }
    ]
  },
  {
    "question": "The rooms on the top floor ____ a beautiful view of the city skyline.",
    "options": {
      "A": "has offered",
      "B": "offers",
      "C": "is offering",
      "D": "offer"
    },
    "correct_answer": "D",
    "explanation_reason": "Chủ ngữ cốt lõi 'The rooms' (Những căn phòng) đã ở số nhiều. Đi liền với thì hiện tại đơn biểu thị sự thật, ta dùng động từ chia nguyên thể (không s/es) là 'offer'.",
    "explanation_grammar": "S (số nhiều) đi với hành động Hiện tại Đơn -> dùng Verb(nguyên thể/nguyên mẫu).",
    "translation": "Các phòng trên tầng cao nhất mang lại một góc nhìn tuyệt đẹp bao trọn đường chân trời thành phố.",
    "core_vocabulary": [
      { "word": "skyline", "type": "n.", "meaning": "đường chân trời (giao thoa giữa nhà, cây và bầu trời)" },
      { "word": "offer", "type": "v.", "meaning": "cung cấp, mang lại" }
    ]
  },
  {
    "question": "The evaluation of the newly hired employees ____ conducted every six months.",
    "options": {
      "A": "are",
      "B": "have been",
      "C": "is",
      "D": "were"
    },
    "correct_answer": "C",
    "explanation_reason": "Danh từ chính 'The evaluation' (Sự đánh giá) là số ít. Từ 'every six months' chỉ lịch trình quy định lặp lại, cần chia tính hiện tại số ít -> tobe là 'is'.",
    "explanation_grammar": "The evaluation (Số ít) -> is + V3/ed.",
    "translation": "Việc đánh giá những nhân viên mới được tuyển dụng được tiến hành sáu tháng một lần.",
    "core_vocabulary": [
      { "word": "evaluation", "type": "n.", "meaning": "sự đánh giá, thẩm định" },
      { "word": "conduct", "type": "v.", "meaning": "thực hiện, tổ chức" }
    ]
  },
  {
    "question": "The demand for our organic skincare products ____ growing steadily across the country.",
    "options": {
      "A": "is",
      "B": "were",
      "C": "have been",
      "D": "are"
    },
    "correct_answer": "A",
    "explanation_reason": "'The demand' (nhu cầu) là một khái niệm không đếm được/hiểu là số ít. Tobe cho thì hiện tại tiếp diễn với hình thức số ít là 'is'.",
    "explanation_grammar": "Demand (Số ít/Uncountable) -> chia động từ số ít (is/has).",
    "translation": "Nhu cầu đối với các sản phẩm chăm sóc da hữu cơ của chúng tôi đang ngày càng tăng đều đặn trên cả nước.",
    "core_vocabulary": [
      { "word": "demand", "type": "n.", "meaning": "nhu cầu" },
      { "word": "steadily", "type": "adv.", "meaning": "một cách đều đặn, ổn định" }
    ]
  },
  {
    "question": "Access to the confidential patient files ____ strictly limited to authorized medical personnel.",
    "options": {
      "A": "have been",
      "B": "is",
      "C": "were",
      "D": "are"
    },
    "correct_answer": "B",
    "explanation_reason": "Chủ ngữ 'Access' (Quyền hạn truy cập/sự tiếp cận) là danh từ không đếm được. Do vậy động từ luôn được dùng ở ngôi thứ ba số ít ('is').",
    "explanation_grammar": "Access là danh từ không đếm được (Uncountable) -> đi kèm verb chia Số Ít.",
    "translation": "Quyền truy cập vào các tệp bảo mật của bệnh nhân bị giới hạn nghiêm ngặt chỉ dành cho nhân viên y tế được ủy quyền.",
    "core_vocabulary": [
      { "word": "confidential", "type": "adj.", "meaning": "kín, bí mật" },
      { "word": "authorized", "type": "adj.", "meaning": "được ủy quyền, cho phép" }
    ]
  },
  {
    "question": "Upgrades to the business class section ____ available for a small additional fee.",
    "options": {
      "A": "are",
      "B": "was",
      "C": "is",
      "D": "has been"
    },
    "correct_answer": "A",
    "explanation_reason": "'Upgrades' (Những gói nâng cấp/các bản cập nhật hạng) đi với dạng số nhiều -s. Động từ do đó chia số nhiều là 'are' - biểu thị tính khả dụng luôn tồn tại của loại hình dịch vụ này.",
    "explanation_grammar": "N(lớp từ số nhiều -s/es) -> Dùng To be số nhiều.",
    "translation": "Gói nâng cấp lên khoang thương gia luôn có sẵn với một khoản phí phụ nhỏ.",
    "core_vocabulary": [
      { "word": "upgrade", "type": "n.", "meaning": "sự nâng cấp" },
      { "word": "section", "type": "n.", "meaning": "phần, khu vực (trên khoang)" }
    ]
  },
  {
    "question": "The supervisor of the night shifts ____ responsible for securely locking the store.",
    "options": {
      "A": "are",
      "B": "is",
      "C": "have been",
      "D": "were"
    },
    "correct_answer": "B",
    "explanation_reason": "Người thực hiện trách nhiệm là 'The supervisor' (Người giám sát - số ít). Động từ tobe do đó phải đi theo ngôi thứ 3 số ít ('is').",
    "explanation_grammar": "N (chỉ một người) -> Động từ tobe số ít (is/was).",
    "translation": "Người giám sát ca đêm chịu trách nhiệm khóa cửa hàng một cách an toàn.",
    "core_vocabulary": [
      { "word": "supervisor", "type": "n.", "meaning": "người giám sát, quản đốc" },
      { "word": "securely", "type": "adv.", "meaning": "chắc chắn, đảm bảo bão mật" }
    ]
  },
  {
    "question": "Subscriptions to the industry magazine ____ renewed automatically each year.",
    "options": {
      "A": "is",
      "B": "has been",
      "C": "was",
      "D": "are"
    },
    "correct_answer": "D",
    "explanation_reason": "Danh từ chính 'Subscriptions' (Các gói đăng ký / Phí mua theo kỳ) ở số nhiều. 'each year' chỉ thói quen lặp lại (hiện tại đơn). Dùng tobe bị động số nhiều là 'are'.",
    "explanation_grammar": "N (số nhiều) + prep + N... -> Thể bị động hiện tại (are + V3/ed).",
    "translation": "Các gói đăng ký Tạp chí công nghiệp được tự động gia hạn vào mỗi năm.",
    "core_vocabulary": [
      { "word": "subscription", "type": "n.", "meaning": "sự đăng ký mua định kỳ" },
      { "word": "renew", "type": "v.", "meaning": "làm mới, gia hạn thêm" }
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
console.log("Successfully added Hoà hợp S-V Test 2");
