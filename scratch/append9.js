const fs = require('fs');
let code = fs.readFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'utf8');
code = code.replace('window.questionsData =', 'global.questionsData =');
eval(code);

const nq = [
  {
    "id": "q191",
    "question": "Our store offers a complete line of computer software packages for ______ personal and business applications.",
    "options": { "A": "whether", "B": "either", "C": "every", "D": "both" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "Ở phía sau có chữ 'and' (và) liên kết giữa 'personal' và 'business'. Cặp liên từ nối đôi kinh điển là 'Both... and...' mang ý nghĩa cả cái này và cái kia.",
    "explanation_grammar": "Cặp liên từ tương quan: Both A and B.",
    "translation": "Cửa hàng của chúng tôi cung cấp đầy đủ các chuỗi bộ phận mềm máy tính dành cho CẢ dân dùng cá nhân VÀ thương mại.",
    "core_vocabulary": [{"word": "software package", "type": "n.", "meaning": "bộ gói phần mềm"}, {"word": "application", "type": "n.", "meaning": "ứng dụng, áp dụng tiến thực"}]
  },
  {
    "id": "q192",
    "question": "The annual report has been posted online, ______ the director's office has not yet received a printed copy.",
    "options": { "A": "but", "B": "with", "C": "why", "D": "once" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "Vế trước bảo báo cáo ĐÃ gửi, vế sau sếp lại bẩu CHƯA thấy bản cứng đâu. Sự đối lập tương phản giữa hai hành động tạo ra mối cơ duyên cho chữ 'but' (nhưng) thò vào.",
    "explanation_grammar": "But: liên từ kết vị (coordinating conjunction) dùng để nối hai mệnh đề đối lập ý.",
    "translation": "Bộ báo cáo thường niên đã được đăng tải xổng lên trên mạng trực tuyến, NHƯNG văn phòng ban giám đốc thì vẫn cứ dậm chân chưa thấy nhận hổi được một bản in tay in cốt nào.",
    "core_vocabulary": [{"word": "printed copy", "type": "n.", "meaning": "Bản in giấy/ bần cứng chép"}]
  },
  {
    "id": "q193",
    "question": "There will be a software upgrade tomorrow, ______ please back up any important files you have stored on the server.",
    "options": { "A": "so", "B": "while", "C": "rather", "D": "because" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "Mệnh đề sau 'please back up...' là hệ quả cầu khiến xuất phát từ cái mệnh đề trước 'có nâng cấp vảo ngày mai'. Do đó nó tạo thành tính quan hệ nhân-quả 'Vì có việc A -> SO (vì vây / cho nên) mới làm việc B'.",
    "explanation_grammar": "So: liên từ kết nối chỉ kết quả/ hệ lụy.",
    "translation": "Vào rạng ngời mai thì sẽ có một đợt làm mới phiên phần mềm, VÌ THẾ xin quý vị vui lòng trích cất lưu trữ sao chép y ấn mọi dòng tài liệu tệp nào được gán mác là quan trọng mà đang còn giắt găm nán ở trên con máy nhụ.",
    "core_vocabulary": [{"word": "back up", "type": "v.", "meaning": "sao lưu cất dữ"}, {"word": "upgrade", "type": "n.", "meaning": "bản nâng cấp lên nhịp"}]
  },
  {
    "id": "q194",
    "question": "Remarkably, neither Ms. Chen ______ Mr. Gillespie had been notified that the board meeting was canceled.",
    "options": { "A": "with", "B": "or", "C": "and", "D": "nor" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "Sát phạt với từ 'neither' thì chỉ có 1 ứng viên đi kèm duy nhất trong tiếng Anh. Đó là 'nor' mang hàm ý KHÔNG CÁI NÀY CŨNG KHÔNG cái nớ.",
    "explanation_grammar": "Cặp liên từ: Neither A nor B.",
    "translation": "Thật là rợn hết biết chuyện ngược đời khi mà cả cô Chen đúc lẩn thẩn với ngài Cụ Gillespie ấy vậy mà lại chẳng một ai được giật bẩm đánh tiếng báo cáo cho biết là cài kỳ họp bàn lãnh đạo cấp cao của ban quan trị bộ đồng đã hủy tự tàn.",
    "core_vocabulary": [{"word": "remarkably", "type": "adv.", "meaning": "đáng ngạc nhiên bật ngửa thay"}, {"word": "notify", "type": "v.", "meaning": "thông tin mật báo/ báo tiếng"}]
  },
  {
    "id": "q195",
    "question": "A majority of the customers who completed the survey rated Sasaki mobile phones as ______ good or excellent.",
    "options": { "A": "both", "B": "although", "C": "whether", "D": "either" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "Kẹp đôi song sát có một chân rết là chữ 'OR' (hoặc). Mà 'Or' thì luốn gá đôi cặp với 'Either' tạo thành Cặp 'Hoặc là... hoặc sẽ là...'.",
    "explanation_grammar": "Cặp liên từ song sinh: Either A or B.",
    "translation": "Một bộ đa phần đại bộ phận của đám người tiêu dùng đi mua sắm cái món diện thoại Sasaki - những gã đã hoàn thành bấm cái bảng dò khảo điền sát thì đều đồng tình bấm chuông thả hạng chám điện thoại Sasaki HOẶC là ở hàng mức tốt HOẶC bét cũng phải hàng cực phẩm tuyệt xảo.",
    "core_vocabulary": [{"word": "majority", "type": "n.", "meaning": "bộ phận số đông, đại đã đa số lượng lớn"}]
  },
  {
    "id": "q196",
    "question": "Our most recent survey was sent to clients just last weeks, ______ it is too soon to send another one.",
    "options": { "A": "when", "B": "finally", "C": "since", "D": "so" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "Vế trước đưa ra tình huống 'survey đã được phát hồi tuần trước', vế sau là hệ quả suy ra 'do đó quá sớm để gửi tiếp một cái nữa'. So phù hợp nhất.",
    "explanation_grammar": "Mệnh đề nguyên nhân, SO + mệnh đề kết quả.",
    "translation": "Bài mẫu form khảo sát diện gần gặn gũi sấp nút nhất gần đây nhất của tụi này thì đã mới vừa đem phát trao gửi tới khách tận tụy ngay hồi độ dịp tuần trước, CHO NÊN việc gởi trút thêm một bản khảo sát khác dồn vô lúc này e là quá chừng vội vàng dồn đi.",
    "core_vocabulary": [{"word": "survey", "type": "n.", "meaning": "chuyến đo đạc thăm dò khảo vấn sát gạch"}]
  },
  {
    "id": "q197",
    "question": "Greenville Library has hired an office assistant not only to perform general office duties ______ support an ongoing special project.",
    "options": { "A": "other than", "B": "but also", "C": "only if", "D": "as for" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "Nửa vế trước xuất hiện điểm nhấn 'not only' (không những). Nó yêu cầu dứt khoác phải có 'but also' (mà còn) làm vế đối xứng phía sau để khép vòng câu trúc kinh điển.",
    "explanation_grammar": "Not only + clause/phrase + but also + clause/phrase tương đương.",
    "translation": "Khu bộ Thư viện Greenville đã phát lệnh cõng cho mướn thêm đệ tay một phụ tá phòng làm việc KHÔNG CHỈ để giúp sức đỡ đần dọn sạch khối lượng thao tác giấy văn việc lặt vặt phổ cập MÀ CÒN muốn ngắm vào việc gánh hộ lưng làm điểm tự lưng bệ phóng hỗ trọ thúc đẩy cho cái con dốc dự luận án khải dự án quy mô hoành tráng trỗi đặc biệt.",
    "core_vocabulary": [{"word": "perform", "type": "v.", "meaning": "phát khởi đi vào thực thi, múa thao làm làm lụi cụi"}]
  },
  {
    "id": "q198",
    "question": "Conference participants can get to the Wyatt Hotel ______ by train or by bus.",
    "options": { "A": "either", "B": "both", "C": "unless", "D": "without" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "Tương tự như câu số 5, đâm phòi ra chữ 'or' dính liền sau nó thì trước đó là mảnh khuyết để ráp nối nhét thêm mảnh ghép song phương 'either'.",
    "explanation_grammar": "Either .... or ....",
    "translation": "Hội chúng con nhang đệ tự trẩy hội tham diện có thể lựa đường nước chèo di rước lết xác chạy tới Khách sạn Wyatt bằng phưng tiện HOẶC là xình xịch tàu lửa HOẶC là con bọ xe điện buýt.",
    "core_vocabulary": [{"word": "participant", "type": "n.", "meaning": "người thọc sâu vào việc tham dự, tay người tham gia"}]
  },
  {
    "id": "q199",
    "question": "______ Ms. Chang nor Mr. Kao received the e-mail outlining the project proposal.",
    "options": { "A": "Both", "B": "None", "C": "Neither", "D": "Whoever" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "Nửa vế kế tiếp xuất hiện cái cùi chỏ 'nor' ngáng lại. Phía trước nó tất lẹ tạo phom phải là cọng dính líu 'Neither'.",
    "explanation_grammar": "Neither... nor...",
    "translation": "Cả hai phe hai mặt gồm cái bà Chang lẫn lão ông Kao thì thảy chẳng một ai vớt nhận vớ vẩn rớt nhặt được bãi nào cái mẫu thư dòng tin e-mail điểm vớt vác sườn tóm lược múa múa về phần bảng nội dung đề xướng khai trình cái dóc đồ dự án.",
    "core_vocabulary": [{"word": "outline", "type": "v.", "meaning": "tóm vẽ nháp ghi mảng sườn lại tổng quan nét vắn tắt"}]
  },
  {
    "id": "q200",
    "question": "After discussing the terms of the new health-benefits contract, ______ management and employees were satisfied.",
    "options": { "A": "both", "B": "either", "C": "also", "D": "too" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "Trạng từ 'and' liên kết management và employees, tạo cơ hội cho 'Both' tham gia trước cả hai tạo thành một khối liên từ đẳng lập gộp (Cả hai bên đều...).",
    "explanation_grammar": "Both A and B.",
    "translation": "Hậu qua cái cuộc gặp đấu đàm phán mài bóp mồm thảo luận về các dòng điểm đề điều mục thỏa khoản trong khung tệp hồ sơ bản hợp đồng giao kèo phúc lợi hưởng ích đền đáp an sinh sức khỏe y vãn bảo hộ mới, CẢ HAI vế của phe chóp não ban điều vận quản lý LẪN cả tệp đám con ăn lình làm công nhân viên thì đều vỗ tay dạt gật lủng ngực ra ý thoả mãn đã đời rất gật gù sảng khoái đắc đồng.",
    "core_vocabulary": [{"word": "satisfy", "type": "v.", "meaning": "mát lịm bề êm bụng ru mát thỏa đâm ý đấm khoái lọt tai đệm dạ"}]
  },
  {
    "id": "q201",
    "question": "______ Jemburger opened its newest franchise, the first 100 customers were given free hamburgers.",
    "options": { "A": "As if", "B": "Now", "C": "When", "D": "After all" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "Chỉ thời điểm gắn vế của sự kiện (Khai trương đại lý mới). Liên từ phụ thuộc 'When' có nghĩa 'khi' khớp lệnh thời gian diễn ra là tự nhiên nhất.",
    "explanation_grammar": "When + Cụm chủ vị (Mệnh đề chỉ thời gian).",
    "translation": "KHI MÀ hãng phay Jemburger tiến nhịp kéo băng phất bảng phô diễn khánh thành tiệm điểm đánh cửa hàng đứt quyền franchise nhượng chuỗi nhượng quyền mở cõi điểm chi rẽ mới nhất điểm nhất, thì 100 ông nhõi ông khách đặt đít lướt tới điểm hẹn điểm điền đến mua xóm hàng sớm nhất trót vót đều đã được tụi tiệm này móc ra biếu free 100 mảng miếng bánh bò bánh hambuger chả tốn có nhặt đồng xu cắc bạc cắc tỉu nào lót lòng.",
    "core_vocabulary": [{"word": "franchise", "type": "n.", "meaning": "cửa mở chuỗi sạp mướn nhận đại lộc nhượng cái bảng hiệu bán sành nhượng quyền điểm ngọn cơ sở"}]
  },
  {
    "id": "q202",
    "question": "Andrzej Ptak's photography Web site will be available online ______ we have finished organizing and cataloging his work.",
    "options": { "A": "how", "B": "so too", "C": "not only", "D": "once" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "'Once' lúc này mang chức năng làm liên từ có nghĩa là 'một khi / ngay khi'. Thể hiện điều kiện hoàn thành việc A thì việc B sẽ diễn ra liền kề sau đó.",
    "explanation_grammar": "Once + Clause (Ngay khi mà, Một khi).",
    "translation": "Kênh trang tụ mạng lướt mạng đăng tỉ mỉ mục nghề chơi nhiếp ảo hình ảnh của lão quái nhiếp ảnh giá cái bang Andrzej Ptak chớ hồi đó đấy chả sẽ sớm có tung bản hiện ngời rỡ điểm danh phủ mặt online ngầy lấm lét MỘT KHI CHÚNG TỚ đã thực mần xử ép quất dội xong đoạn đắp điếm thu vén thu dọn sắp loại dốc tổng chỉnh lên đồ đánh danh dập mục lục tươm tất dâng mâm mọi món hạng thành tác phẩm tác của ổng đồ đó ra đấy phơi phới cho rập đời coi.",
    "core_vocabulary": [{"word": "cataloging", "type": "v-ing.", "meaning": "phân xếp biên chép chia loại chia dập sườn mục cho đồ có dốc lóng kho đóng bảng list tước tự chia chác hệ thống ngỏ xâu"}]
  },
  {
    "id": "q203",
    "question": "______ a national holiday falls on a Thursday the Barstow Company allows employees to take off Friday as well.",
    "options": { "A": "Nearly", "B": "Whenever", "C": "Even", "D": "For" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "Mệnh đề quy luật 'Bất cứ khi nào... thì việc khác sẽ xảy ra'. 'Whenever' là liên từ phù hợp diễn tả 'mỗi lần / bất cứ dịp nào'.",
    "explanation_grammar": "Whenever + Clause (Bất kể khoảnh khắc thời điểm nào khi có chuyện gì xảy tới).",
    "translation": "BẤT KỲ CỨ ĐỘ KHI NÀO có trúng vô mà lại vô phước có một ngày kĩ nghỉ đại lễ trọng kỉ quốc dân rớt đúng điểm chạm nhằm xáp trúng vô cái ngày thứ Năm chéo que, thì thể nào bọn Công ty Barstow này cũng sẽ ra mặt thoáng cho thả xổng đám tay sai xả lính xõa mướt được mượn quyền phéc lờ được vác bụng xả xui bùng mướn nhót để cho tụi nó cúp máy cúp ca được lỉnh cút tút đi luồn lách được giũ phép nghỉ tiếp tục nốt thả giàn sập sàn thả phanh luôn trong cho cái trọn ráo ngày thứ 6 cho phơi phới cả thể đi đó mờ.",
    "core_vocabulary": [{"word": "whenever", "type": "conj.", "meaning": "bất chập hễ mà lúc bất nào đó dính bất khi chực hồi dịp nào cữ kỳ bất kể"}]
  },
  {
    "id": "q204",
    "question": "Customers can wait in the reception area ______ our mechanics complete the car repairs.",
    "options": { "A": "except", "B": "while", "C": "during", "D": "whether" },
    "correct_answer": "B",
    "grammar_type": "Liên từ",
    "explanation_reason": "Vế nối đằng sau là một mệnh đề hoàn chỉnh gồm có Cấu trúc (our mechanics) + Verb (complete). 'While' là liên từ đi kèm dùng để nói về lúc trong khi mà hành động kia diễn ra. (Lưu ý: During cũng là 'trong lúc' nhưng đi kèm với danh từ).",
    "explanation_grammar": "While + Clause (S+V) >><< During + Noun.",
    "translation": "Quý zị bạn hàng ân khách phước ôi có rảnh có thể an khang thảnh tọa chồm chờ cắm chốt lụi nán lại ở phòng tại phía trong của cụm ban tiếp khu sảnh đón khách ban quầy TRONG KHI bộ ban đám rặt một đống lũ phường đội kỹ dân dão thợ thiết thiếc tuốt tu bộ máy kĩ sư động chế của xưởng tháo thay bộ nhà chúng vọc xóc làm bít vốc tuốt miết nhét xú dốc giũa vót rũa xử chắp dặm ráp đắp cho nó xong sớm cái sườn sửa giũ chiếc cộ xe hơi thồ của xịn quý zị đây gập đó nhé cưng.",
    "core_vocabulary": [{"word": "mechanic", "type": "n.", "meaning": "kẻ xoay bù lon phó sáp đánh chảo thợ thược cái tuốc vít dân kĩ rờ tuốt ống bộ chả vọc bảo hỏng máy súc cày tơi thợ dũa móc lốc dộng xăm kĩ điệu tay lố ốc dân cơ thợ cơ máy học thợ trọc đồ nghề xe máy chà rùa thiết cơ"}]
  },
  {
    "id": "q205",
    "question": "Save 25 percent on any printer ______ you buy a laptop computer at Diego's Electronics.",
    "options": { "A": "such as", "B": "whereas", "C": "seeing that", "D": "whenever" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "Diễn dịch điều kiện áp dụng liên thời gian 'Bất cứ khi nào bạn...'. 'Whenever' là một liên từ nối mạch điệu hoàn hảo trong văn cảnh quảng cáo.",
    "explanation_grammar": "Whenever + Clause.",
    "translation": "Lụm nạp tiết ngay tiết trần chắt kiệm tiết kiệu thọt gom tiết đẻ được bòn mót giắt gập sụp giữ bớt đút êm nhét bỏ cất chém giá bơn cho giữ rịt được tới cỡ tận khoảng 25 cái trăm 25% chục cục xiềng rớt xõa trền giảm khứa trên cái móc phôi mua xào trả độ bắt vạc bất cứ con máy móc sộp khò sừng in điệu rợn cạc dợn dập xáp phun con máy phẩy photo phun quỷ bắt in dập in mẫu đập bất kì cục vạc chóp ngọn hạng hãng máy ấn bẩy ơ máy in nào cũng dính ráo BẤT KHI RÁO KÌ LÚC NÀO miễn là hễ bác cứ lỡ trót vạc xóc nhấc điệu móc tay dúng quẹt lấy đánh nhặt hốt quất thả bộ nhét giỏ thêm nhặt mớ tóm thả thêm mua 1 tay một chiết cỗ laptop vi giàn mỏng máy vi xử trạm xách kẹp nách tay gánh di đánh điểm xọc kẹp tại cái quán cửa tiệm cơ giới điện khu điện xưởng Diego's Electronics chốn đại xá bọn này nè bác ơi.",
    "core_vocabulary": [{"word": "whenever", "type": "conj.", "meaning": "bất chực đụng mọi kể dịp kỳ nào tới đây đánh dịp lúc đi lúc kì lúc đai kì lào"}]
  },
  {
    "id": "q206",
    "question": "Kovox Ltd. aims to optimize quality ______ reducing the impact on the environment.",
    "options": { "A": "while", "B": "which", "C": "because", "D": "unless" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "'while' có thể nối trực tiếp một tính từ danh từ dạng V_ing mang hàm ý nói 'trong khi' ở tình trạng lược bỏ từ giống mệnh đề trước. 'while (also) reducing...'",
    "explanation_grammar": "While/When + V_ing (rút gọn đồng nghĩa chủ ngữ).",
    "translation": "Ông TNHH Tập còi Kovox Ltd này thì lăm le để mắt đang chú sáp mục đích móc tiêu chỉ nhằm mút một ngòi muốn phẩy làm trọn vẹn điểm đỉnh tối cực nhất đẩy ưu tăng trịch tối khốc ưu bãi hóa cho trọn độ châm vẹn dầy phẩm chát độ cực ngon chất lượng lượng, TRONG KHI SONG SONG ĐÓ lúc thì tụi nó cũng tính ngả mượn đà cho cắt xén giảm chặt bóp phách kìm gọt giảm tỉ độ gây mức thương kham đâm khốc giáng mức cướp giật tác cạp sập tác hại dội động mạnh thốc tới làm dơ hại trên mảnh lớp đắp chóp môi nền sinh mốc trường.",
    "core_vocabulary": [{"word": "optimize", "type": "v.", "meaning": "móc tối làm xới tăng trạm dốc tối kéo lên múc đa đẩy hóa ưu bốc đôn thọc tốt độ ngon bật vọt tối ranh ngõ làm đẩy ngợp ưu nhíp bắp"}]
  },
  {
    "id": "q207",
    "question": "The Internet connection will be closely monitored ______ the source of the slowdown can be confirmed.",
    "options": { "A": "why", "B": "just as", "C": "until", "D": "due to" },
    "correct_answer": "C",
    "grammar_type": "Liên từ",
    "explanation_reason": "Chỉ mốc thời gian hoàn tất 'cho đến khi'. Liên từ 'until' là cây cầu nối để diễn giải về việc theo dõi (monitored) sẽ kéo dài mãi cho đến lúc có kết quả.",
    "explanation_grammar": "Until + Clause.",
    "translation": "Tình điểm chất lưới truyền dẫn đường đâm cột nối kết truy rọc gắt truy nối trồi mạng tuyến dẫn Internet sẽ liên lụy bị giam chốt gài phéc áp ấp chặt để gò giám thính dập tăm xét dọa khâm soi chặt dỏ lăm khóc nới lỏng nới thít sát sao theo dỏi dõi bám cắn sát không dứt miết rát sàn sạt CHO MIẾT ĐẾN TẬN ĐẾN CÁI LÚC KẾT ĐỈNH KHI MÀ cái mối cái điểm cái nọc điểm chóp gốc tích lọt lõi cái ngòi xốc nọc xít điểm nguồn cội chóp điểm phát nổ nguồn rễ mạch gốc cớ phất của cái cơn dông mâm cái vụ tụt quẩy sút máy tuột pin thụt giật chạy cùi khựng chạy dề quề rù chập khấc chậm lì cùi phanh sự ịch ạch xị chững lại này đây thì sẽ rứt thóp đứt sụt bắt quả đặng cấn vớ trảo lọt tra dặm bị tóm được khất được nhận xác điểm minh quả rỏ định đích đánh chính xác tỏ nhận.",
    "core_vocabulary": [{"word": "slowdown", "type": "n.", "meaning": "cơn kẹt vụ tuột giật khựng thóp độ bóp chựng rớt làm hãm xì trậm xịt rề chạy rì ạch dề lì rề mụ xầm lại chặn lề tà tốc trễ ỳ dậm độ chững ngâm khựng lì mệt đình máy độ điệu chạy tà rù đứt sút xập chậm rãi tốc đứt chậm vạch chệ chững hãm trễ"}]
  },
  {
    "id": "q208",
    "question": "______ a designer has completed a prototype product, the rest of the team will be invited to critique it.",
    "options": { "A": "From", "B": "So that", "C": "Whether", "D": "After" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "Hai vế hành động diễn ra nối tiếp nhau (hoàn thành xong bản mẫu -> người khác phê bình). 'After' (sau khi) thể hiện logic trình tự thời gian này một cách mạch lạc tuyệt hảo.",
    "explanation_grammar": "After + Clause chỉ hành động xảy ra trước.",
    "translation": "SAU CÁI ĐOẠN ĐỈNH DỐC LÚC KHI là có đọt dại một tên tay chuyên hoạ ngõ hình thiết họa nét thiết trác tác kế một thằng khất thợ designer đã ngoắn bóc đẽo chấm trổ nặn xắt cắt ngọc xọng ngắm vốt nặn bóp bồi tô làm vạch nhọc cho đã móc xong mọc xẻng hoàn một công bản mẫu khuôn hàng phẩm nháp bản mộc phôi đúc chóp thử nháp phôi nguyên định mẫu sản điệp định dạng thô nguyên rạp phẩm nháp nào đó xong vứt, đó lúc này khúc đuôi đám cái đám cái lùi bầy phần rơi sót phần nài lẵng còn mứa tót phới lại ở lở lấp nấp trong gậm đội ban thành hội lũ nhom cái rập nhóm sẽ mới lại được móc trịch hô sênh hào hú thét lên loa gõ điệu điểm lệnh lệnh họi được cấn vời triệu thính triệu kéo đít sênh réo mời tham mời ra vô tới dự để cạ mõm nhọn mồm chĩa điểm xoi châm móc ban vạch chĩa soi mói trổ kháy gạch khía đưa đâm bới chọc gạch ra trổ phê soi lỗi bắt điểm đánh mổ xẻ đóng ném ném đánh phê bóp bình phẩm giá trị cho chửi rủa cái con khỉ món đó.",
    "core_vocabulary": [{"word": "critique", "type": "v.", "meaning": "móc kháy mớm mổ soi vết bóc soi bới xẻ mâm hạch săm đè bình bóp ban bắt phẩm vạch đánh xét lời dòm bới ném chỉ soi điểm chác bới chọc trích dò lỗi dòm chê dập phê mổ chém điểm bình thẩm định vạch bắt nét luận"}]
  },
  {
    "id": "q209",
    "question": "The committee will resume its weekly meetings ______ Ms. Cheon returns from Scotland on September 17.",
    "options": { "A": "once", "B": "then", "C": "that", "D": "as well" },
    "correct_answer": "A",
    "grammar_type": "Liên từ",
    "explanation_reason": "Cũng mang tính điều kiện và thời gian, 'once' nối với mệnh đề thể hiện sự bắt đầu làm lại cái gì 'ngay khi / một khi' cái khác hoàn tất.",
    "explanation_grammar": "Once + Clause (có chức năng như as soon as hoặc when).",
    "translation": "Phân Bộ khối Uỷ Hội Viện quan ủy viên cái tráp tệp cái mâm tiểu hội hội đồng sẽ rề nổ máy làm rục khới khởi mào lên đèn làm nọc bóp chạy rúc múc nhích phục bốc phất tút khươi động vọc lại cho nổ gượng diễn tiếp nổ cho tiếp tái nẫng tụ khởi nhú diễn bốc trạc tiếp tục sự cho diễn tái phục tục vụ lại mấy trác cái tệp đống buổi mớ phiên trào vọc họp xới đàm nghị rít hằng điệu giao ca đều cuộn hàng quay mần mỗi độ rải tuấn lịch kỳ tuần cọc đàng của mình MỘT CHỚP KHI / VỪA CHẠM NGAY LÚC cái bà cái bóng mẹ Sếp trùm Khú là quý bà Cheon mụ đó đáp bến cập sải đạp chân trở tạt rút dẹp về cố chảo đáo bổ từ mạn cõi xa xôi rạt khu rặng mạn vùng Scotland về ngay đúng vô lúc dọng đúng điếm phóc vô trong cữ ngày chạp lọt mốc 17 rơi tháng 9.",
    "core_vocabulary": [{"word": "resume", "type": "v.", "meaning": "xốc đậy kéo vớt búc nối sên động dựng giập lôi quắp cho nối thọc trút bắt vứt gượng phục tái tiếp dựng bóc khởi súc khơi khạp mồi lại xới cho rụp lại trạc vót tái đánh xực mần phục tục lại tiếp túc khơi hẩy diễn nối tiếp tục móc móc động xoay cho tiếp diễn"}]
  },
  {
    "id": "q210",
    "question": "______ the Editorial Department receives the author's final approval, the manuscript should be sent to the printer.",
    "options": { "A": "For example", "B": "Still", "C": "In the meantime", "D": "As soon as" },
    "correct_answer": "D",
    "grammar_type": "Liên từ",
    "explanation_reason": "Đứng đầu câu làm liên từ phụ thuộc để nói về điều kiện xảy ra tức thời. 'As soon as' diễn giải 'ngay khi'.",
    "explanation_grammar": "As soon as + S + V... thì mệnh đề chánh mới được thi hành.",
    "translation": "RẤT CỰC KỲ NHANH V CÀ CHỚP RẤT MAU LẸ MỘT NGAY LIỀN KHI LÚC VỪA MỚI mà cái xưởng đám tụi cái mảng phòng Tạp báo Tập Bộ Phận chuyên việc Mảng Ban Tạp Chí Soạn rọc dũa dập tin xé báo Biên Dịch xoá nháp mảng Tập vừa tay chộp lụm vớ chộp ôm mới vớ được chộp có nhận rập liền kề được trọc cái bản hịch trích án đóng chốt thư phíc cái nếp thư cái khấc lệnh đóng khuôn nhấp gật lắc chốt ngọn đầu ấn dập rụp cho lời gật đầu chốt chóp cuối đồng dập y xì ý khép màn chấp đục chung chấp gật mổ thuận chóp của phía bọc bên đầu ngót thằng ngòi bút gốc nhà xướng bút người viết tay tác ông tác vị giả sáng soạn giả, thì thì thôi rồi cái mớ khối xấp tệp tập cái loại tập cục tệp giẻ cuộn mâm rổ giỏ cuốn tệp mớ xấp bản cuộn bản tráp chép tàn tay dậm chép bản thảo lờ xờ bản mộc chữ đánh chữ đó sập lập liền xực tốc khắc quất sẽ phải bị chịu tống đực ép tút gồng thốc mút lùa chuyển phóng tốc nhét gạc được tước quăng gạc phải ục tống điệu tiễn được phải tuồng nện nhét đưa dập bưng chuyển tút đi tống tới xưởng nọc cơ mảng tọt đi qua cho phòng chỗ cơ đám nhà phay bọn bên thợ sành vặt dập cục rập dũa nhà xưởng điểm cái rập ấn móc máy cho điểm máy in dập điểm.",
    "core_vocabulary": [{"word": "as soon as", "type": "conj.", "meaning": "mau lẹ chớp vừa tắp khít ngay lọt kền ngay chóc tốc tắp lúc khi vừa tắp"}]
  }
];

global.questionsData = global.questionsData.concat(nq);

fs.writeFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'window.questionsData = ' + JSON.stringify(global.questionsData, null, 2) + ';');
