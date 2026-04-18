const fs = require('fs');
let code = fs.readFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'utf8');
code = code.replace('window.questionsData =', 'global.questionsData =');
eval(code);

const nq = [
  {
    "id": "q151",
    "question": "______ the last ten years, Bay City's population has grown by about 27 percent.",
    "options": { "A": "Below", "B": "Against", "C": "During", "D": "As" },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'during' mang nghĩa 'trong suốt', phù hợp đi kèm với cụm thời gian 'the last ten years' để diễn tả khoảng thời gian diễn ra sự việc (sự gia tăng dân số).",
    "explanation_grammar": "During + Noun/Noun phrase chỉ khoảng thời gian.",
    "translation": "Trong mười năm qua, dân số của vịnh Bay City đã tăng khoảng 27 phần trăm.",
    "core_vocabulary": [{"word": "population", "type": "n.", "meaning": "dân số"}, {"word": "grow", "type": "v.", "meaning": "tăng trưởng, phát triển"}]
  },
  {
    "id": "q152",
    "question": "______ this time next year, Larkview Technology will have acquired two new subsidiaries.",
    "options": { "A": "Quite", "B": "To", "C": "Begin", "D": "By" },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Dấu hiệu của thì Tương lai hoàn thành 'will have acquired' kết hợp với cụm từ chỉ thời gian 'this time next year' yêu cầu giới từ 'By' (trước/tính đến thời điểm).",
    "explanation_grammar": "By + Thời điểm trong tương lai: Tính đến thời điểm đó...",
    "translation": "Tính đến thời điểm này vào năm sau, tập đoàn công nghệ Larkview Technology sẽ thâu tóm xong hai công ty con mới.",
    "core_vocabulary": [{"word": "acquire", "type": "v.", "meaning": "mua lại, thâu tóm"}, {"word": "subsidiary", "type": "n.", "meaning": "công ty con"}]
  },
  {
    "id": "q153",
    "question": "Customers who submit payments ______ March 10 will be charged a late fee.",
    "options": { "A": "quite", "B": "after", "C": "behind", "D": "almost" },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Dựa theo ngữ cảnh 'will be charged a late fee' (bị tính phí nộp trễ), thì khách hàng phải gửi thanh toán 'sau' (after) ngày chỉ định mùng 10 tháng 3 mới bị phạt.",
    "explanation_grammar": "After + mốc thời gian: Sau mốc thời gian nào đó.",
    "translation": "Khách hàng nộp thanh toán sau ngày 10 tháng 3 sẽ bị tính thêm phí trễ hạn.",
    "core_vocabulary": [{"word": "submit", "type": "v.", "meaning": "nộp, gửi đi"}, {"word": "late fee", "type": "n.", "meaning": "phí phạt nộp chậm"}]
  },
  {
    "id": "q154",
    "question": "The prime minister greeted foreign diplomats ______ a luncheon today in London.",
    "options": { "A": "had", "B": "at", "C": "where", "D": "such" },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Giới từ 'at' thường được đi chung với một sự kiện hay buổi gặp mặt cụ thể tại một địa điểm như 'a luncheon' (buổi tiệc trưa).",
    "explanation_grammar": "At + event/location (sự kiện, địa điểm cụ thể).",
    "translation": "Thủ tướng đã chào đón các nhà ngoại giao quốc tế tại một buổi tiệc trưa ở London vào ngày hôm nay.",
    "core_vocabulary": [{"word": "diplomat", "type": "n.", "meaning": "nhà ngoại giao"}, {"word": "luncheon", "type": "n.", "meaning": "bữa tiệc trưa mang tính trang trọng"}]
  },
  {
    "id": "q155",
    "question": "AGU Group's insurance rates have remained steady ______ the last three years.",
    "options": { "A": "at", "B": "by", "C": "for", "D": "to" },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Câu hiện tại hoàn thành 'have remained' yêu cầu một giới từ đi với khoảng thời gian đằng sau 'the last three years' để tạo ra ý nghĩa 'trong suốt 3 năm qua'. Giới từ 'for' là hoàn toàn chính xác.",
    "explanation_grammar": "For + khoảng thời gian (dấu hiệu của các thì hoàn thành).",
    "translation": "Mức giá trị bảo hiểm của AGU Group vẫn duy trì ổn định trong suốt 3 năm vừa qua.",
    "core_vocabulary": [{"word": "insurance rate", "type": "n.", "meaning": "mức phí bảo hiểm"}, {"word": "steady", "type": "adj.", "meaning": "ổn định, không đổi"}]
  },
  {
    "id": "q156",
    "question": "______ months of work to sell the Apton Building, the realtor finally succeeded last week.",
    "options": { "A": "Still", "B": "After", "C": "Besides", "D": "For" },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Vế sau có từ 'finally' (cuối cùng thì), nên vế trước cần một giới từ nói về một chuỗi thời gian đã xảy ra để tạo sự tương phản. 'After' (sau nhiều tháng) là từ logic nhất.",
    "explanation_grammar": "After + Noun Phrase (thường diễn tả thời gian đã qua).",
    "translation": "Sau chuỗi nhiều tháng trời cố gắng chào bán Tòa nhà Apton, thì người môi giới cuối cùng cũng chốt deal thành công vào tuần trước.",
    "core_vocabulary": [{"word": "realtor", "type": "n.", "meaning": "người chuyên viên môi giới địa ốc"}]
  },
  {
    "id": "q157",
    "question": "Ms. Travaglini filed the paperwork with the facilities department ______ a week ago.",
    "options": { "A": "through", "B": "over", "C": "beyond", "D": "past" },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "'over' có thể dùng với ý nghĩa là 'more than' (hơn). Ở đây 'over a week ago' mang nét nghĩa là 'đã hơn một tuấn trước'.",
    "explanation_grammar": "Over + số lượng/thời gian = nhiều hơn mức đó.",
    "translation": "Bà Travaglini đã trình tệp thủ tục giấy tờ lên ban quản trị trang thiết bị từ tận hơn một tuần trước rồi.",
    "core_vocabulary": [{"word": "file", "type": "v.", "meaning": "nộp (hồ sơ, giấy tờ)"}, {"word": "paperwork", "type": "n.", "meaning": "thủ tục giấy tờ"}]
  },
  {
    "id": "q158",
    "question": "Job seekers should prepare a list of professional references ______ applying for positions.",
    "options": { "A": "in front of", "B": "according to", "C": "outside of", "D": "prior to" },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cụm danh động từ 'applying' yêu cầu một giới từ đi đằng trước. 'prior to' mang nghĩa 'trước khi', tương đồng với 'before', cực kì hợp ngữ cảnh hành động này cần chuẩn bị trước.",
    "explanation_grammar": "Prior to + Noun / V-ing (Diễn tả cái gì xảy ra trước cái gì).",
    "translation": "Những người đang tìm việc nên chuẩn bị sẵn một danh sách bao gồm các thông tin người giới thiệu chuyên nghiệp trước khi nộp hồ sơ xin việc về các vị trí.",
    "core_vocabulary": [{"word": "reference", "type": "n.", "meaning": "người giới thiệu, thư tham khảo ứng viên"}, {"word": "prior to", "type": "prep.", "meaning": "trước lúc, trước khi"}]
  },
  {
    "id": "q159",
    "question": "Because of a mechanical failure in the production facility, Fizzy Bottlers will be closed ______ further notice.",
    "options": { "A": "until", "B": "through", "C": "except", "D": "around" },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cụm cụ định 'until further notice' là một thành ngữ thông dụng có nghĩa là 'cho đến khi có thông báo mới'.",
    "explanation_grammar": "Until + Noun phrase chỉ thời gian ở tương lai.",
    "translation": "Bởi vì một sự cố lỗi kỹ thuật máy móc ở khu cơ sở sản xuất, hãng đồ uống Fizzy Bottlers sẽ bắt buộc phải đóng xưởng cho đến khi có thông báo mới kế tiếp.",
    "core_vocabulary": [{"word": "mechanical failure", "type": "n.", "meaning": "lỗi hỏng hóc kĩ thuật máy móc"}, {"word": "notice", "type": "n.", "meaning": "thông báo"}]
  },
  {
    "id": "q160",
    "question": "Ms. Amari has scanned the grant applications, and they will be submitted ______ the deadline.",
    "options": { "A": "along", "B": "before", "C": "during", "D": "over" },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Đứng trước danh từ 'the deadline' (hạn chót) dùng để nói về hạn chót một cách logic nhất, thì giới từ hoàn mĩ là 'before' (trước hạn).",
    "explanation_grammar": "Before / By + the deadline.",
    "translation": "Cô Amari lúc này đã rà soát lại cẩn thận các hồ sơ xin tiền tài trợ, và mớ đơn đó sẽ được đệ trình nộp gửi đi trước khi tới hạn chót chốt sổ.",
    "core_vocabulary": [{"word": "grant", "type": "n.", "meaning": "tiền tài trợ, viện trợ"}, {"word": "deadline", "type": "n.", "meaning": "thời điểm hạn cuối"}]
  },
  {
    "id": "q161",
    "question": "North River Linens promises next-day shipping ______ Asia.",
    "options": { "A": "along", "B": "between", "C": "throughout", "D": "without" },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Đứng trước danh từ chỉ không gian khu vực châu lục (Asia), ta dùng 'throughout' (khắp mọi nơi/toàn bộ) để thể hiện sự rải rác quy mô về không gian.",
    "explanation_grammar": "Throughout + Place (Xuyên suốt nơi nào đó).",
    "translation": "North River Linens phát hứa hẹn chính sách giao hàng ship trong ngày hôm sau rải quanh khắp toàn cõi khu vực mảng Châu Á.",
    "core_vocabulary": [{"word": "shipping", "type": "n.", "meaning": "vận chuyển, chuyển phát giao hàng"}]
  },
  {
    "id": "q162",
    "question": "Professor Benguigui will present his paper ______ the natural history conference tomorrow.",
    "options": { "A": "on", "B": "at", "C": "of", "D": "by" },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Tương tự như câu số 4 (at a luncheon), 'the conference' (hội nghị) cũng là một sự kiện hội đông, ta dùng giới từ 'at' để chỉ địa điểm tụ tập.",
    "explanation_grammar": "At + event.",
    "translation": "Vị Giáo sư đầu ngành Benguigui sẽ tiến hành làm thuyết trình bản bài tiểu luận nghiên cứu của ổng tại đại hội đồng lịch sử hình thái tự nhiên vào ngày hôm sau.",
    "core_vocabulary": [{"word": "present", "type": "v.", "meaning": "thuyết trình, trình bày"}, {"word": "conference", "type": "n.", "meaning": "hội nghị mở rộng"}]
  },
  {
    "id": "q163",
    "question": "The bank's cashier windows are open daily from 8:00 A.M to 4:00 P.M ______ on Sundays.",
    "options": { "A": "nor", "B": "yet", "C": "until", "D": "except" },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Ý câu cung cấp khoảng thời gian mở rộ mỗi ngày (daily) nhưng phải chừa ra ngày chủ nhật. Giới từ 'except' mang ý nghĩa 'ngoại trừ'.",
    "explanation_grammar": "Except (for) + Noun / Prepositional Phrase.",
    "translation": "Quày gửi tiền của ngân hàng được mở cửa múc liên tục thường nhật từ cữ 8 giờ sáng bảnh mắt tới 4 giờ chìu tà, trừ ngày Chủ Nhật.",
    "core_vocabulary": [{"word": "cashier window", "type": "n.", "meaning": "cửa sổ nhân viên quầy thu ngân"}, {"word": "except", "type": "prep.", "meaning": "trừ, ngoại trừ"}]
  },
  {
    "id": "q164",
    "question": "______ the high cost of fuel, customers are buying smaller, more efficient cars.",
    "options": { "A": "Instead of", "B": "As well as", "C": "Together with", "D": "Because of" },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Vế đằng sau 'customers are buying...' là chỉ kết quả hệ lụy. Nguyên nhân chỉ bới cụm danh từ đằng trước 'high cost of fuel'. 'Because of' (Bởi vì) nối lại vô cùng logic.",
    "explanation_grammar": "Because of + Noun Phrase (Lý do dẫn đến nguyên nhân).",
    "translation": "Vì lý do mức giá chi phí chất đốt nhiên liệu bị kích nâng lên cao, người đi mua dần có xu hướng chốt mua các kiểu xe bé hơn với hiệu suất vượt ích lợi hơn.",
    "core_vocabulary": [{"word": "cost of fuel", "type": "n.", "meaning": "cước giá nhiên liệu gas xăng"}, {"word": "efficient", "type": "adj.", "meaning": "hiệu suất công năng mạnh"}]
  },
  {
    "id": "q165",
    "question": "Ms. Tillinghast has received several awards ______ her innovative ideas.",
    "options": { "A": "away", "B": "often", "C": "for", "D": "across" },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Để chỉ nguyên nhân (lý do) nhận giải thưởng thì giới từ 'for' (dành cho / về cái gì) là một cấu trúc chuyên biệt với cụm từ 'receive an award for...'.",
    "explanation_grammar": "receive something FOR something.",
    "translation": "Cô nàng Tillinghast đã đạt tay ôm về mấy danh hiệu phần thưởng vinh quy dành cho các tư duy sáng tạo ý niệm mới mẻ của cô.",
    "core_vocabulary": [{"word": "award", "type": "n.", "meaning": "phần thưởng/cúp"}, {"word": "innovative", "type": "adj.", "meaning": "chứa đụng mầm mống đột phá mới sáng tạo"}]
  },
  {
    "id": "q166",
    "question": "Starting this August, Gavelton Bike Tours will be leading group cycling trips ______ Paris to Berlin.",
    "options": { "A": "from", "B": "after", "C": "beside", "D": "along" },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Đứng trước đoạn 'Paris TO Berlin'. Sự cấu trúc kinh viện là 'from A to B' (Từ đâu đến đâu).",
    "explanation_grammar": "From ... TO ...",
    "translation": "Mở cung khai mạc từ độ tháng Tháng Tám độ này về đi, dịch vụ Gavelton Bike Tours sẽ bắt đầu xuất kỳ phát tuyến cho các chuyến đạp xe hội nhóm xuất phái từ Pháp tới tận thành Bá Linh Tây Đúc.",
    "core_vocabulary": [{"word": "cycling", "type": "n.", "meaning": "đi xe đạp quay vòng"}]
  },
  {
    "id": "q167",
    "question": "Buses leaving the city terminal were delayed due to icy conditions ______ the roads.",
    "options": { "A": "until", "B": "from", "C": "on", "D": "out" },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Đứng ngay sát danh từ định điểm 'the roads' (con đường). Trạng từ 'on' (trên bề mặt) đặc sệt là của nó.",
    "explanation_grammar": "On + the roads/ streets / surfaces.",
    "translation": "Bầy các tàu buýt bến rời khỏi trạm điệu terminal thành thị đều đã bị hoãn trễ tuyến chỉ tại điều kiện băng giá kẹt kín nằm trải đầy trên lòng đường.",
    "core_vocabulary": [{"word": "terminal", "type": "n.", "meaning": "bến trạm điểm cuối chờ"}, {"word": "icy condition", "type": "n.", "meaning": "thời tiết đóng dóng cục đóng vát băng trơn"}]
  },
  {
    "id": "q168",
    "question": "Wearing Fire is the most popular television show ______ women ages 18-34.",
    "options": { "A": "along", "B": "within", "C": "toward", "D": "among" },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Để nói một thứ nổi tiếng / phổ cập 'trong số' một cộng đồng/nhóm độ tuổi, người ta mặc định xài 'among' (giữa một bày đàn, trong số những người).",
    "explanation_grammar": "Among + Plural Nouns (nhiều người / nhóm đối tượng).",
    "translation": "Bộ phim chưởng Lửa Diện (Wearing Fire) đang gánh ngôi vương chương trình kênh TV ăn khách bật phát nhất lan tỏa trong lòng quý vị khán thính giả phụ nữ chặng tuổi đời độ 18-34 phơi phới.",
    "core_vocabulary": [{"word": "popular", "type": "adj.", "meaning": "vang danh nức tiếng hút khách phổ biến"}]
  },
  {
    "id": "q169",
    "question": "Our Portview branch is located ______ the central business district, between Burnside Avenue and Everett Street.",
    "options": { "A": "for", "B": "on", "C": "in", "D": "to" },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "'district' (vi hạt, vùng thị tứ) là một khoảng đất/vùng không gian rộng bao hàm có ranh giới rõ nên ta dùng 'in'. (nằm trong khu vực trung tâm).",
    "explanation_grammar": "In + Khu vực địa chính (city, state, district, country).",
    "translation": "Đơn vị chi nhánh của chúng tôi tại Portview được tọa lạc nằm chễm chệ ngay trong lòng khu thương phố thương mại ở ngay giữa lòng khúc giao của Đại lộ Burnside và nhánh đường con Everett.",
    "core_vocabulary": [{"word": "be located in", "type": "phr.", "meaning": "chu vị nằm ở nơi dải đất..."}]
  },
  {
    "id": "q170",
    "question": "Factory-floor managers must submit an inspection report at the end ______ their shift.",
    "options": { "A": "of", "B": "as", "C": "to", "D": "if" },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Thành ngữ chỉ mốc khung thời khắc cuối cụm cố định 'at the end of' (vào đoạn cuối của cái thời lượng gì).",
    "explanation_grammar": "at the end OF + Noun Phrase (khoảng thời gian / sự kiện).",
    "translation": "Đám chuyên viên phân xưởng công xưởng bắt nguồn rập khuân việc cứ cuối đoạn ca làm trực ca của mình là găm đều lại một phôi bản thanh tra tường trình đưa phệt lên cấp trên.",
    "core_vocabulary": [{"word": "inspection report", "type": "n.", "meaning": "báo biếu tổng tường trình thanh rà soát"}]
  }
];

global.questionsData = global.questionsData.concat(nq);

fs.writeFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'window.questionsData = ' + JSON.stringify(global.questionsData, null, 2) + ';');
