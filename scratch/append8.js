const fs = require('fs');
let code = fs.readFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'utf8');
code = code.replace('window.questionsData =', 'global.questionsData =');
eval(code);

const nq = [
  {
    "id": "q171",
    "question": "The director of the Yean Park Clinic will deliver a speech ______ tonight's benefit dinner.",
    "options": { "A": "before", "B": "as", "C": "onto", "D": "except" },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Dựa trên ngữ cảnh, ngài giám đốc sẽ có bài phát biểu 'trước' (before) bữa tối gây quỹ từ thiện. Các giới từ khác không hợp phom nghĩa câu.",
    "explanation_grammar": "Before + Noun phrase/ V_ing chỉ hành động xảy ra tước đó.",
    "translation": "Ông giám đốc phòng khám Yean Park Clinic sẽ đứng lên phát biểu trước buổi ăn tối từ thiện gây quỹ tối nay.",
    "core_vocabulary": [{"word": "deliver a speech", "type": "phr.", "meaning": "phát biểu, đọc diễn văn"}, {"word": "benefit dinner", "type": "n.", "meaning": "tiệc tối từ thiện gây quỹ"}]
  },
  {
    "id": "q172",
    "question": "The price of tomatoes is expected to fall by almost 10 percent ______ a big harvest earlier this year.",
    "options": { "A": "except for", "B": "along with", "C": "in exchange for", "D": "due to" },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Nguyên nhân khiến giá cà chua giảm 10% là 'do/bởi vì' vụ mùa bội thu (a big harvest). Giới từ 'due to' (bởi vì) cực kỳ hợp lý đứng sau hệ quả.",
    "explanation_grammar": "Due to + Noun phrase (chỉ lý do/ nguyên nhân).",
    "translation": "Bảng giá gốc cà chua hiện đang được dự kiến sẽ lao dốc tuột giá chừng khoảng 10 phần trăm chính là do cái vụ mùa vụ thu hoạch khổng lồ hồi đầu năm nay.",
    "core_vocabulary": [{"word": "harvest", "type": "n.", "meaning": "vụ mùa gặt hái thu hoạch"}, {"word": "due to", "type": "prep.", "meaning": "do nguyên nhân bởi vì"}]
  },
  {
    "id": "q173",
    "question": "Visits to the Bridgevale Culture Museum have grown twofold ______ the opening of the Ancient Egyptian Art wing.",
    "options": { "A": "since", "B": "among", "C": "except", "D": "onto" },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Thì hiện tại hoàn thành (have grown) cần liên kết với mốc thời gian trong quá khứ thông qua giới từ 'since' (kể từ khi).",
    "explanation_grammar": "Thì hiện tại hoàn thành + since + Noun phrase (mốc điểm thời gian quá khứ).",
    "translation": "Chuyến số lượt ghé thăm viện Bảo tàng Văn hóa Bridgevale đã tự đội tăng sinh tăng vọt gấp đôi kể từ cái lúc khai mạc mở sảnh cánh phòng Nghệ thuật Ai Cập cổ đại.",
    "core_vocabulary": [{"word": "twofold", "type": "adv.", "meaning": "gấp đôi"}, {"word": "wing", "type": "n.", "meaning": "khu/nhánh tòa nhà (VD: cánh đông, chái tây)"}]
  },
  {
    "id": "q174",
    "question": "Ada's Gift Shop will remain open until 10:00 P.M. ______ the summer sales season.",
    "options": { "A": "during", "B": "along", "C": "between", "D": "while" },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Một mốc một giai đoạn của mùa vụ (the summer sales season) kéo dài yêu cầu giới từ 'during' (khoảng trong suốt) đứng trước.",
    "explanation_grammar": "During + Noun (giai đoạn, khoảng thời gian dài).",
    "translation": "Khu quầy hàng lưu niệm Ada's Gift Shop sẽ rình rập duy trì khung giờ cửa rào đến tận khuya lúc 10h đêm ở trong suốt cả chuỗi mùa sale xả hàng của hè này.",
    "core_vocabulary": [{"word": "sales season", "type": "n.", "meaning": "mùa giảm giá bán hạ tầng"}]
  },
  {
    "id": "q175",
    "question": "Please contact the help desk at 555-0191 for any issues ______ the copy machines or printers.",
    "options": { "A": "regarding", "B": "regard", "C": "regards", "D": "regarded" },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Từ 'regarding' (có liên quan tới / về vấn đề...) tuy lấy đuôi -ing nhưng hoạt động như một cụm Giới Từ (Tương thích với 'about').",
    "explanation_grammar": "Regarding + Noun (Danh từ chủ thể gặp vấn đề).",
    "translation": "Làm ơn hoan hỷ châm chiếu tự động xin bấm số kết nối với trạm hỗ trợ hỏi đáp qua mạng nối đuôi 555-0191 để xử tất tần tật mọi khúc mắc liên can tới bộ đôi xập xình máy phô tô rởm hay lũ máy in.",
    "core_vocabulary": [{"word": "regarding", "type": "prep.", "meaning": "liên đới liên quan đến..."}, {"word": "issue", "type": "n.", "meaning": "thực trang sự cố vấn đề"}]
  },
  {
    "id": "q176",
    "question": "______ a year of renovations to its facility, Bendell Department Store will celebrate its grand reopening on October 17.",
    "options": { "A": "Until", "B": "Since", "C": "After", "D": "During" },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Vế thứ hai là kết quả (tái khai trương lại) sau khi hoàn thành xong một chuỗi quá trình ở vế trước. Do đó giới từ 'after' (sau một năm) trỏ đúng trình tự thời gian.",
    "explanation_grammar": "After + Khoảng thời gian đã kết thúc ở vế khuyết.",
    "translation": "Sau chuỗi ngày dài đúng kỉ niệm tròng trọc một năm mài mặt tu sửa lại trang thiết bị khối chóp của ẻm, Trung tâm chuỗi bách hóa Bendell Store sẽ nhẩy cóc tổ chức lễ khánh thành bung cửa dọn nhà hoành tráng vào cái ngày định mệnh ngày 17 tháng 10 này.",
    "core_vocabulary": [{"word": "renovation", "type": "n.", "meaning": "nâng cấp đổi mới cải tổ"}, {"word": "grand reopening", "type": "n.", "meaning": "buổi tiệc nhạt khánh thành khai trương lại lớn"}]
  },
  {
    "id": "q177",
    "question": "______ the past two months, Ejime Theater attendance has increased dramatically.",
    "options": { "A": "Above", "B": "Behind", "C": "Into", "D": "During" },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Thì hiện tại hoàn thiện (has increased) thường chạy cặp bài trùng với các liên từ chỉ giai điệu kéo dài. 'During the past...' (Trong suốt bao lâu qua) diễn giải cực mượt hành động tăng tiến đó.",
    "explanation_grammar": "During/ in / over + the past / the last + khoảng chừng thời gian.",
    "translation": "Nép trong xuyên suốt tận cái chép tháng hai tháng 2 ròng rã dạo gần đây đổ lại, tần số những vị khách lữ tới xem xuất rạp ở Ổ kịch Ejime đã leo thang đục trần phá cản lên mạnh sốc.",
    "core_vocabulary": [{"word": "attendance", "type": "n.", "meaning": "tần suất chu kì sự lui tới chầu mệt"}, {"word": "dramatically", "type": "adv.", "meaning": "đột đục phá ngoạn mục tăng chấn dữ dội"}]
  },
  {
    "id": "q178",
    "question": "One of Area Corporation's primary goals is to promote individual professional development ______ its entire staff.",
    "options": { "A": "beside", "B": "during", "C": "since", "D": "among" },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Staff được coi như một khối từ đại tập hợp lượng nhân sự tập thể. 'among' (vây trong nội bộ) diễn tả quy mô nhắm vào giữa nhóm đó.",
    "explanation_grammar": "Among + Collective Noun / Plural Noun (Giữa một đám cộng đồng nội thể).",
    "translation": "Giữ chức là nằm chốt trong ngạch các nhóm một mẩu mục tiêu tôn chỉ của Thống bộ công ty Area Corporation là muốn kích cầu năng đẩy mức độ khai thác tư chất tiến trình chuyên môn cá thể hóa cho thâm nhập ở trong giới bao bọc toàn hàng nội bộ tổng số lính lác thành viên nhân sự ruột làm công.",
    "core_vocabulary": [{"word": "promote", "type": "v.", "meaning": "quảng bá xướng đẩy thăng chức cổ súy"}, {"word": "among", "type": "prep.", "meaning": "bủa trong vòng giữa bao quanh"}]
  },
  {
    "id": "q179",
    "question": "The Lake District extends ______ the northern edge of the park right up to the foot of Rodger's Mountain.",
    "options": { "A": "among", "B": "next", "C": "through", "D": "besides" },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Nói về khu vực kéo dài thông thốc xuyên qua rìa phía bắc, 'through' (xuyên từ mặt này băng vào đi ngang thọc sang nơi khác).",
    "explanation_grammar": "Extend through: kéo băng thông ngóc xuyên qua mảng...",
    "translation": "Trải thảm Phân khu Quần thể Hồ nước đâm duỗi vươn mình ra xuyên từ bìa tận mép rìa đỉnh điểm miền Cực Bắc của cái miếng bản đồ thảm xanh công viên kia để rồi luồn trọc dốc ngược tít lên đến độ mấp mé chân rặng núi Rodger.",
    "core_vocabulary": [{"word": "extend", "type": "v.", "meaning": "keo băng thông kéo dài bạnh bao ra"}, {"word": "edge", "type": "n.", "meaning": "mép xích bờ rìa"}]
  },
  {
    "id": "q180",
    "question": "Elmwood's commerce center provides support services to new shop owners ______ their initial year of business.",
    "options": { "A": "while", "B": "since", "C": "though", "D": "during" },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Khoảng định kì năm khởi nghiệp đầu tiên (initial year) là khoảng thời gian đếm khung 12 tháng. Vì vậy giới từ đính vào là 'during' (trong khuông độ mùa đó).",
    "explanation_grammar": "During + specific continuous stage phrase (N_phrase chỉ khoảng năm tháng ngày mốc).",
    "translation": "Tổ thương điếm Trung tâm giao dịch commerce xóm Elmwood móc túi chi xõa hỗ trợ tung xách bao gói gói hàng xịn nhọc phục vụ cho cái đám chủ bãi thương điểm mới tinh tươm mở sạp được nương tựa ròng rã kéo dài trong ròng lướt hết suốt cái trễ độ chóp năm trời ròng khởi nghiệp đinh chốt ban đầu của bọn chúng.",
    "core_vocabulary": [{"word": "commerce", "type": "n.", "meaning": "chuỗi mấu mảng thương mại mậu giao"}, {"word": "initial", "type": "adj.", "meaning": "nước đầu thởi lởi mởi màn khởi chập"}]
  },
  {
    "id": "q181",
    "question": "It is wise to check a company's dress code ______ visiting its head office.",
    "options": { "A": "before", "B": "like", "C": "so", "D": "how" },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Theo dòng tính logic mạch thời điểm, bạn phải kiểm tra lệ quy phục trang 'trước khi' tới thăm. Giới từ 'before'.",
    "explanation_grammar": "Before + V-ing.",
    "translation": "Cũng quả thực là một chước nước tính toán khôn ngoan thôi khi bạn chủ đích tự soi dò kiểm định xem thử coi cái hệ mảng lề lối quy chế đồng phục gắt gao của một hãng công sở như một bước nằm ngay trước dạo định vác cái thân qua rề trúng cổng qua đại bản doanh sở hội bộ đầu của nó.",
    "core_vocabulary": [{"word": "dress code", "type": "n.", "meaning": "bộ lệ lệnh qui chế mặt đắp áo quần phục tràng trang"}, {"word": "wise", "type": "adj.", "meaning": "lọc lỗi khôn trí tinh ngoạn minh suốt"}]
  },
  {
    "id": "q182",
    "question": "Registration for the Marketing Coalition Conference is now open ______ September 30.",
    "options": { "A": "yet", "B": "until", "C": "since", "D": "while" },
    "correct_answer": "B",
    "grammar_type": "Giới từ",
    "explanation_reason": "Kỳ đăng ký mở và chốt ở một thời điểm. Dùng 'until' (cho đến tận...).",
    "explanation_grammar": "until + thời khắc định vị của chốt hạn mút.",
    "translation": "Kỳ cổng tiếp ghi danh đăng tuyển phái gửi vào cái cuộc Đại Hội thảo rùm beng Liên minh Thương thuyết Bán hàng thì nay đương đã được lệnh kéo banh ra chờ đợi khách dốc thẳng đến chót qua tận cái mùng 30 của độ chênh chếch lịch kỳ rụng của mùa Thu tháng 9 gắt gao.",
    "core_vocabulary": [{"word": "registration", "type": "n.", "meaning": "nước đăng danh ghi kì đăng bộ"}, {"word": "coalition", "type": "n.", "meaning": "liên doanh khối liên quân mảng hội"}]
  },
  {
    "id": "q183",
    "question": "Lehua Vacation Club members will receive double points ______ the month of August at participating hotels.",
    "options": { "A": "above", "B": "between", "C": "during", "D": "onto" },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cụm 'the month of August' đóng vai trò là một kỳ thời khoảng. Vậy có thể dùng 'in' hoặc 'during'. Đáp án 'during' là chuẩn xác nhất.",
    "explanation_grammar": "During + Tháng năm định danh N.",
    "translation": "Những tay chơi quý tộc khệ nệ mang kim thẻ lách cách danh hiệu chớp lướt mác thành viên kỳ tụ lạc bộ Lêhua Chơi Du Hú hè Câu lạc bộ nọ sẽ còn được bú ốp liếm thêm liều nhịp nhân hai lốp lượng số điểm trúng tuyển trọn ổ xuyên suốt trong cái gắt cái nắng chói của khung cữ tháng 8 mốc tại phần lớn vô vàn đa các cụm cơ sở nhà kính khách sạn sang xịn có mang theo tay đồng chầu nhúng tham liên đới gia vào đường dây này.",
    "core_vocabulary": [{"word": "participating", "type": "adj.", "meaning": "nằm kẹp trong hệ chuỗi có đính tham đóng chia hội"}]
  },
  {
    "id": "q184",
    "question": "Airline representatives must handle a wide range of passenger issues, ______ missed connections to lost luggage.",
    "options": { "A": "under", "B": "against", "C": "from", "D": "on" },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Sóng đôi thành đôi cập rập từ trước ra sau (từ cái này đến cái nọ): Cấu trúc liên hồi ngữ 'FROM [missed...] TO [lost...]'.",
    "explanation_grammar": "From Noun_A to Noun_B.",
    "translation": "Nhân mạng đặc phái nhân diện diện làm mặt tiền gương chiếu chốt rốn cho đường hàng không vãng lai buộc thắt ống phải nắm ngọn bóp đầu khư lừ thâu tóm nhúng ôm đờm đủ xâu rộng thấu triệt vô kể hàng mớ lô xích xông bao chùm toàn các vấn dề lỗi lỗi lặt vặt giời ơi phát sinh của lũ khách lưu điềm tàu, trải dài từ những xấp xịt ca lỡ chệ độ đấu nhịp dây quá cảnh trung chuyển điểm nối tiếp khứ hồi chèo tuyến cho kéo giất tuột đến tới dạt tuốt luốt rách toạc các xớ vụ vớ vẩn rải nhầm quăng lạc lỡ mớ rớt kiện hàng lô vác đẩy hành lý hèn kí gửi.",
    "core_vocabulary": [{"word": "representative", "type": "n.", "meaning": "điểm đầu đại tướng diện uỷ diện thay đóng thế mặt"}, {"word": "lost luggage", "type": "n.", "meaning": "hàng lô dồn rớt đồ thất lạc hành trang"}]
  },
  {
    "id": "q185",
    "question": "______ the closure of Verdigold Transport Services, we are looking for a new shipping company.",
    "options": { "A": "In spite of", "B": "Just as", "C": "In light of", "D": "According to" },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Closure (đóng cửa) là sự kiện là lý do. 'In light of' có nghĩa 'Dựa trên thực tế về tình hình gì/ Do mường tượng bởi do vì...'.",
    "explanation_grammar": "In light of + Danh từ nguyên nhân.",
    "translation": "Chiếu rọi soi xét lên bởi bắt nguồn điểm nút gẫy từ ngay cái động cơ chập dập tắt lò xưởng rút bảng hiệu gập quầy cửa đóng xế bãi đỗ của mạn Đội Nhóm dịch dịch trung chuyển Vận vác tải Verdigold Transport Service nên đâm ra giờ đây đội vác chúng ta mới lại phải cong khòng đít lọ mọ nhào đi cất cái mỏ đi điếm tìm ngó soi lựa sang đổi một bè gót công ty đối trọng xịn trâu khác mang gánh thế vai chở hàng hộ ship mướn chuyên.",
    "core_vocabulary": [{"word": "closure", "type": "n.", "meaning": "sự tắt điện dập sập khoá kéo cuốn cửa dừng kinh đình lưu doanh"}, {"word": "in light of", "type": "prep.", "meaning": "xét tréo do là bới vì tại nhịp ngõ do bởi..."}]
  },
  {
    "id": "q186",
    "question": "Mr. Peterson will travel ______ the Tokyo office for the annual meeting.",
    "options": { "A": "to", "B": "through", "C": "in", "D": "over" },
    "correct_answer": "A",
    "grammar_type": "Giới từ",
    "explanation_reason": "Travel to a place (Di chuyển tới địa điểm).",
    "explanation_grammar": "Travel + to + Noun điểm đến.",
    "translation": "Quý ngài trọc Peterson sẽ hạ giáng sải cuốc bay ngàn nghìn dặm đánh cắp sang thẳng đến chóp cơ chấn tổng hành dinh bão thành Tokyo để tụ đại trảo dự đánh kỳ vào mâm buổi yến thiết họp kín tụ kỳ bang giao của độ mỗi niên hàng năm.",
    "core_vocabulary": [{"word": "annual meeting", "type": "n.", "meaning": "bữa hội lớn năm đại tiệc cuộc họp xoay dòng niên"}]
  },
  {
    "id": "q187",
    "question": "Our premium day tour takes visitors to historic sites ______ the Aprico River.",
    "options": { "A": "inside", "B": "onto", "C": "during", "D": "along" },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "'dọc theo bờ con sông' xài preposition 'along'.",
    "explanation_grammar": "Along + River / Road...",
    "translation": "Chuỗi cuốc tua vãn cảnh lượn ngày thượng vàng hạng cao VIP chót vót kim cương tinh khiết xịn chuẩn chỉ phết của bọn hội chúng đây sẽ đánh móc túm đai bốc lấy các vị du lữ thập khách cưỡi đi điểm mốc đánh dấu chao lượn rẽ tạt vào những cái bãi khoảnh đất địa danh sặc mùi tàn tích cổ xưa của trang dài lịch sử lẫm liệt oai hùng phô trải dài chập chùng dạt dào bám theo dọc bờ của rìa mé lạch thủy con khê mương sông thủy lực ngầm Aprico River.",
    "core_vocabulary": [{"word": "premium", "type": "adj.", "meaning": "hạng sang thứ cấp cốt siêu sao thượng cực xịn"}, {"word": "historic site", "type": "n.", "meaning": "đất thiêng điểm địa đài tàn xích lịch đại cổ đại"}]
  },
  {
    "id": "q188",
    "question": "Ms. Charisse is taking on a new account ______ she finishes the Morrison project.",
    "options": { "A": "going", "B": "with", "C": "between", "D": "after" },
    "correct_answer": "D",
    "grammar_type": "Giới từ",
    "explanation_reason": "Cấu trúc nối 2 mệnh đề với nét nghĩa: tiếp nhận dự án/hợp đồng (taking on...) 'sau khi' hoàn thành dự án cũ. Dùng After.",
    "explanation_grammar": "After + Clause mệnh đề thứ hai hành động khóa đuôi xảy đến trước đo.",
    "translation": "Madam Charisse cao thủ đang tính nước chốt sẽ thâu tóm nhúng tay vào ẵm rọn bao tiếp quất ngầu thêm luôn quản thầu rạch ròi một cái dự kiến thương vụ hời mối mẻ mới toanh tinh sương ngay liền sau cái dịp mốc độ điềm cữ phút giây ả rứt cọc hạ xong đo ván vớt gút tàn kén kén cho mớ mòn mỏi ngán ngẩm tồn mốc chắp của cái mớ hạng mục ốc ác chết dẫm Morrison đợt cũ xưa kia lặn.",
    "core_vocabulary": [{"word": "take on", "type": "phr.", "meaning": "quàng vào gánh vác ủ ấp chầu thủ nhận ngả ôm rước vào tay đảm đương"}, {"word": "account", "type": "n.", "meaning": "tay tệp khách hàng / mối vụ việc độ khách thầu vác mổ chác giao dịch"}]
  },
  {
    "id": "q189",
    "question": "______ the rules, overnight parking is not permitted at the clubhouse facility.",
    "options": { "A": "Prior to", "B": "Except for", "C": "According to", "D": "Instead of" },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Chỉ 'dựa theo/chiếu theo luật' - 'According to'.",
    "explanation_grammar": "According to + rules/laws/document (chiếu theo văn bản).",
    "translation": "Răm rắp áp đúng xâu y hệt như như theo chiếu dội của cái bộ sách biên chép đống điều luật xâu chuỗi lệ cấm, trò múa tay đậu đánh chui để bãi đỗ quăng xe lại ở ngoài lỳ suốt qua vắt trong bóng vạng xuyên ròng màn đêm mù mịt là tuyệt nhiên một cái phốt điều luật tuyệt cấm bị bắt bọc tuyệt đối phật ý cho không có phép nhượng nhịn rớ được bãi du di ở nằm trong khuông vực cụm khu của cái tụ dinh bãi khối sảnh cơ sở nhà đón khách điểm của tụ họp câu đài giao lạc bộ clubhouse đàng bệ kia đâu ná.",
    "core_vocabulary": [{"word": "overnight", "type": "adv/adj.", "meaning": "băng xuyên màn đêm luồn vắt kiệt tối trời"}, {"word": "permit", "type": "v.", "meaning": "du di ban cho chấp lướt duyệt phò y quyền để lọt phép gật đầu đồng thuận"}]
  },
  {
    "id": "q190",
    "question": "At the registration table, be sure to collect your name tag ______ entering the conference.",
    "options": { "A": "always", "B": "often", "C": "before", "D": "very" },
    "correct_answer": "C",
    "grammar_type": "Giới từ",
    "explanation_reason": "Quy tắc ngữ pháp khi gộp 2 chủ thể vế bằng Danh động từ rút gọn '-ing'. 'Before entering' (trước khi vào).",
    "explanation_grammar": "Before + V-ing.",
    "translation": "Ghé nán lại dậm chân ngay tại cái thềm bàn đàm phán thủ tục nộp đón khách bàn ghi ấn danh tiếp rước lúc khởi nguồn, xin đừng quên cố để khắc hằn vô là bạn nhớ bảo đảo phải có làm chốt cất chắc chắn vơ hươi nhận lấy thu lượm bỏ tay cầm chộp túi lấy cho đủ cái mẩu mác tấm thẻ giấy phù hiệu thêu điền định danh ghi rạch ròi dán trích tên họ tú mục mác rờn của chính bản thân bản vị các bạn đi giùm, trước khi bước đơm dứt khoát rảo quẳng chân lọt hỏm vô cửa vượt sâu lọt trỏng tham dự vào đắm mình vào bồn cái chậu buổi Đại Hùng họp hội nghị nhen.",
    "core_vocabulary": [{"word": "name tag", "type": "n.", "meaning": "bảng bích thẻ dán danh định biển tước bảng tên"}]
  }
];

global.questionsData = global.questionsData.concat(nq);

fs.writeFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'window.questionsData = ' + JSON.stringify(global.questionsData, null, 2) + ';');
