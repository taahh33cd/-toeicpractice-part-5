const fs = require('fs');
let code = fs.readFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'utf8');
code = code.replace('window.questionsData =', 'global.questionsData =');
eval(code);

const nq = [
  {
    "id": "q131",
    "question": "Ms. Suto claims that important market trends become ______ with the use of data analysis.",
    "options": { "A": "predictable", "B": "prediction", "C": "predict", "D": "predictably" },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ liên kết 'become' (trở nên), ta cần một Tính từ bổ nghĩa cho chủ ngữ phía trước nó (market trends). 'Predictable' (có thể đoán trước được).",
    "explanation_grammar": "Linking verb (become/get/seem) + Tính từ (Adjective).",
    "translation": "Bà Suto quả quyết rằng những xu hướng quan trọng của thị trường sẽ trở nên dễ đoán hơn khi có sự trợ lực phân tích dữ liệu.",
    "core_vocabulary": [{"word": "predictable", "type": "adj.", "meaning": "có thể đoán trước"}, {"word": "trend", "type": "n.", "meaning": "xu hướng"}]
  },
  {
    "id": "q132",
    "question": "The initial feedback from early buyers of the Sunbell XC2 mobile phone indicates that they found it ______ to use.",
    "options": { "A": "convenience", "B": "conveniently", "C": "convenient", "D": "conveniences" },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cấu trúc find + tân ngữ (it) + Tính từ chỉ phẩm chất. 'Convenient' (tiện lợi) dùng để mô tả cái điện thoại.",
    "explanation_grammar": "Cấu trúc S-V-O-C: find/make/keep + Object + Adjective.",
    "translation": "Những đánh giá phản hồi đầu tiên từ người mua sớm của mẫu điện thoại di động Sunbell XC2 có chỉ ra rằng họ nhận thấy nó rất tiện lợi để sử dụng.",
    "core_vocabulary": [{"word": "convenient", "type": "adj.", "meaning": "tiện lợi"}, {"word": "feedback", "type": "n.", "meaning": "sự phản hồi, nhận xét"}]
  },
  {
    "id": "q133",
    "question": "Ms. Luo will explain some consequences of the ______ merger with the Wilson Peek Corporation.",
    "options": { "A": "proposition", "B": "proposing", "C": "proposal", "D": "proposed" },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Chỗ khoảng trống cần điền một Tính từ đứng trước bổ nghĩa cho danh từ 'merger' (vụ sát nhập). Phân từ v-ed 'proposed' mang chức năng tính từ (được đề xuất).",
    "explanation_grammar": "The + Tính từ (V_ed/V_ing) + Danh từ.",
    "translation": "Bà Luo sẽ giải thích về một vài hệ quả của vụ sát nhập đang được đề xuất kiến nghị với Tạp đoàn Wilson Peek.",
    "core_vocabulary": [{"word": "consequence", "type": "n.", "meaning": "hệ quả, hậu quả"}, {"word": "merger", "type": "n.", "meaning": "sự xác nhập thương vụ"}]
  },
  {
    "id": "q134",
    "question": "Although the desk was slightly damaged during assembly, it is still ______.",
    "options": { "A": "functional", "B": "function", "C": "functionally", "D": "functioned" },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Đứng sau động từ tobe 'is' và trạng từ 'still' cần có một Tính từ làm bổ ngữ (Complement). Tính từ 'functional' chỉ khả năng hoạt động tốt.",
    "explanation_grammar": "Tobe + Adverb + Adjective.",
    "translation": "Mặc dù cái bàn đã bị hư hại sứt mẻ đôi chút trong quá trình lắp ráp nhưng nó vẫn hoạt động đầy đủ chức năng trơn tru.",
    "core_vocabulary": [{"word": "functional", "type": "adj.", "meaning": "đầy đủ công năng, xài tốt"}, {"word": "assembly", "type": "n.", "meaning": "quá trình lắp ráp"}]
  },
  {
    "id": "q135",
    "question": "If you are not ______ with your Electoshine toothbrush, you may return it for a full refund.",
    "options": { "A": "satisfy", "B": "satisfying", "C": "satisfied", "D": "satisfaction" },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Mô tả trạng thái tinh thần/cảm xúc của Con Người sử dụng Tính từ đuôi -ed. Ở đây dùng 'satisfied' đi kèm giới từ 'with'.",
    "explanation_grammar": "Be + Adjective_ed (chỉ trạng thái người).",
    "translation": "Nếu quý khách không thật sự cảm thấy ưng ý hài lòng với dòng bàn chải máy Electoshine, bạn hoàn toàn có thể trả nó về nhận hoàn lại nguyên tiền.",
    "core_vocabulary": [{"word": "satisfied with", "type": "adj.", "meaning": "hài lòng, thỏa mãn với"}, {"word": "refund", "type": "n.", "meaning": "sự hoàn trả tiền"}]
  },
  {
    "id": "q136",
    "question": "Inclement weather was ______ responsible for the low turnout at Saturday's Exton Music Festival.",
    "options": { "A": "larger", "B": "large", "C": "largest", "D": "largely" },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Kẹp giữa tobe 'was' và tính từ bỗ trợ 'responsible' chính là không gian chừa sẵn cho một Trạng từ chỉ cường độ. 'largely' (phần lớn).",
    "explanation_grammar": "Tobe + Trạng từ chỉ mức độ + Tính từ.",
    "translation": "Tình hình mây mưa thời tiết khắc nghiệt đóng vai nguyên nhân phần lớn cho lượng sụt giảm người đi xem tại Lễ hội Âm nhạc Exton Thứ bảy.",
    "core_vocabulary": [{"word": "largely", "type": "adv.", "meaning": "phần lớn đai đa số"}, {"word": "turnout", "type": "n.", "meaning": "số lượng người tham gia"}]
  },
  {
    "id": "q137",
    "question": "The Cullingford Bridge took a ______ short amount of time to be repaired.",
    "options": { "A": "surprised", "B": "surprisingly", "C": "surprising", "D": "surprise" },
    "correct_answer": "B",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Lùi lại sát cụm 'short amount of time', ta thấy cần một bổ nghĩa Trạng từ cho tính từ 'short'. 'surprisingly short' (ngắn một cách đầy kinh ngạc).",
    "explanation_grammar": "A/an + Adverb + Adjective + Noun.",
    "translation": "Cây cầu Cullingford tiêu tốn một khoản lượng thời lượng sửa chứa có thể nói là ngắn ngủi đến đáng kinh ngạc.",
    "core_vocabulary": [{"word": "surprisingly", "type": "adv.", "meaning": "quá đỗi ngạc nhiên, kinh ngạc"}]
  },
  {
    "id": "q138",
    "question": "Ms. Taniguchi's supervisor commended her for ______ negotiating with Furuyama Corporation.",
    "options": { "A": "effecting", "B": "effected", "C": "effective", "D": "effectively" },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Bổ nghĩa cho hành động (danh động từ) 'negotiating' (đàm phán) luôn bắt buộc cần phải có một Trạng từ '-ly'. 'effectively' (một cách hiệu quả).",
    "explanation_grammar": "Trạng từ + Danh Động từ (Gerund).",
    "translation": "Quản lý sếp của cô Taniguchi đã biểu dương cô vì việc đàm phán một cách vô cùng hiệu quả với công ty tập đoàn Furuyama.",
    "core_vocabulary": [{"word": "effectively", "type": "adv.", "meaning": "một cách hiệu dụng, hiệu quả"}, {"word": "commend", "type": "v.", "meaning": "khen thưởng biểu dương"}]
  },
  {
    "id": "q139",
    "question": "Relocating for work is ______ a difficult decision, but it can be rewarding.",
    "options": { "A": "understand", "B": "understanding", "C": "understandably", "D": "understood" },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Trống đứng ngay sau mệnh đề Tobe 'is' bổ trợ hoàn chỉnh cảm thán của toàn bộ cụm danh từ đằng sau 'understandably' (có thể hiểu được).",
    "explanation_grammar": "Tobe + Trạng từ + Danh từ nhóm (N_phrase).",
    "translation": "Phải chuyển nhà di dời vì tính chất công việc điều chuyển là một lựa chọn - có thể hiểu được - rất khó nhằn, nhưng sau ngần ấy nó có thể đi kèm sự đền đáp xứng đáng.",
    "core_vocabulary": [{"word": "understandably", "type": "adv.", "meaning": "theo lẽ có thể thấu được"}, {"word": "relocate", "type": "v.", "meaning": "chuyển vùng tái định cư"}]
  },
  {
    "id": "q140",
    "question": "The Southeast Asia Business Convention will feature ______ known and respected leaders from countries across the region.",
    "options": { "A": "wide", "B": "wider", "C": "widely", "D": "widen" },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Quá khứ phân từ 'known' (được biết mặt chỉ tên) cần ghép ngay liền kề một Trạng từ đứng trước biểu chỉ cực đại 'widely known' (được giới mộ điệu biết đến rộng rãi).",
    "explanation_grammar": "Trạng từ + Tính từ quá khứ phân từ P.P.",
    "translation": "Hội Nghị Kinh doanh thương mại cõi Đông Nam Á năm nay sẽ điểm trúng tiêu điểm quy tụ các vị Lãnh đạo cấp cao lão làng với danh tiếng bay xa cực lớn đến từ mọi quốc gia vùng lãnh",
    "core_vocabulary": [{"word": "widely", "type": "adv.", "meaning": "bay bổng và sâu rộng"}, {"word": "feature", "type": "v.", "meaning": "quy tụ lên sóng tiêu điểm"}]
  },
  {
    "id": "q141",
    "question": "Ms. Kwon made it absolutely ______ that hiring decisions require her approval.",
    "options": { "A": "clear", "B": "cleared", "C": "clearly", "D": "clearing" },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Thuận ngôn 'make it clear' đã trở thành kinh điển. 'clear' phải chia dưới dạng Tính từ theo sau make it.",
    "explanation_grammar": "Cấu trúc S-V-O-C: make + it + adjective + that + Clause.",
    "translation": "Chị Đại Kwon đã lập rõ một quy ước rõ như ban ngày là ván bài tuyển nhân viên mới bất di bất dịch phải đi lướt qua cái gật đầu của cấy.",
    "core_vocabulary": [{"word": "clear", "type": "adj.", "meaning": "trong suốt tĩnh mịch rạch ròi"}, {"word": "make it clear", "type": "phr.", "meaning": "áp định nói thẳng làm rõ ràng"}]
  },
  {
    "id": "q142",
    "question": "At the panel discussion, Ms. Yang made a ______ argument for environmentally responsible business practices.",
    "options": { "A": "convince", "B": "convincingly", "C": "convinced", "D": "convincing" },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cụm danh từ 'argument' (luận biện) phải được theo sau Tính từ mang dạng V_ing chủ động 'convincing' (có sứ thuyết phục). Làm thành một luận điểm.",
    "explanation_grammar": "A/an + Tính từ V_ing (chỉ tính chất vật)+ Noun.",
    "translation": "Ngay giữa lúc trên chiếc bàn tròn thảo luận, bà trùm Yang đã buông thả lời làm tung bay một chuỗi các luận cứ đanh thép thuyết phục 100% dành trọn cho phe tập quán thân nhân môi trường.",
    "core_vocabulary": [{"word": "convincing", "type": "adj.", "meaning": "mang đầy hơi tính thuyết phục mạnh mẽ"}, {"word": "argument", "type": "n.", "meaning": "lời biện luận"}]
  },
  {
    "id": "q143",
    "question": "Even though Smithton Electronics' second quarter was not ______, the company plans to invest large sums on research.",
    "options": { "A": "profitable", "B": "profitability", "C": "profiting", "D": "profitably" },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Đứng sát thủ theo sau động giới Tobe 'was not' của quý tài chính bắt buộc dùng Tính Từ. 'Profitable' (sinh lời) là sự ăn khớp nhất.",
    "explanation_grammar": "Cấu trúc Tobe + Tính từ miêu tả diễn tiến sự tình.",
    "translation": "Bất chấp luôn việc nhịp lợi nhuận trong chặng đi quý II của cơ sở điên tử Smithton chả gặt hái đủ sâu đầy, cả doanh chủ này vẫn quyết chi tất tay lượng mỏ vàng vào việc công cứu kỹ thuật.",
    "core_vocabulary": [{"word": "profitable", "type": "adj.", "meaning": "quá chừng chi sinh độ lãi suất lớn"}, {"word": "invest", "type": "v.", "meaning": "rót tư đầu"}]
  },
  {
    "id": "q144",
    "question": "The Tonsin Writers League is a reputable organization with highly ______ members.",
    "options": { "A": "accomplish", "B": "accomplishes", "C": "accomplished", "D": "accomplishment" },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Phụ trợ theo mầu Tính từ đóng vai phân từ gốc V_ed, chữ 'accomplished' diễn họa ra 1 dàn thành viên kỳ cựu dày dặn dạn kinh nghiệm chuyên môn.",
    "explanation_grammar": "Trạng từ đuôi ly (highly) + Tính từ dạng Ed (accomplished) + Danh từ lõi (members).",
    "translation": "Giải Kháng chiến Các Cây Bút Tonsin League là hội quán danh giá chập chùng các tay chiêng sừng sỏ nhất toàn cõi.",
    "core_vocabulary": [{"word": "accomplished", "type": "adj.", "meaning": "uyển bác tinh vi xuất chúng tài hoa"}, {"word": "reputable", "type": "adj.", "meaning": "danh danh nức tiếng ngiêng tầm"}]
  },
  {
    "id": "q145",
    "question": "During negotiations, management appeared ______ to the idea of increasing the staff's wages.",
    "options": { "A": "agrees", "B": "agree", "C": "agreement", "D": "agreeable" },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Nhóm đông từ giác nối (appeared: tỏ ra là..) có chức năng tương đương chữ tobe sinh ra Tính từ theo liền 'agreeable' (bằng lòng).",
    "explanation_grammar": "Nhóm Linking Verbs (appear/look/feel) + Tính từ tính thế bổ ngữ.",
    "translation": "Qua chuổi ngày đàm phán mài sắt, mảng nhóm giạ đốc đã có cái mòi chịu khuất phục đồng lòng với cái sáng kiến giật tăng tiền lường lao động.",
    "core_vocabulary": [{"word": "agreeable", "type": "adj.", "meaning": "ưng ngay có tính bằng lòng chịu ý"}, {"word": "wage", "type": "n.", "meaning": "tiền ăn lương lao động thù"}]
  },
  {
    "id": "q146",
    "question": "The registration fee is ______ refundable up to two weeks prior to the conference date.",
    "options": { "A": "fully", "B": "full", "C": "fullest", "D": "fuller" },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Một trạng từ -ly mang chức hiệu 'fully' đi đứng ngay phía đằng trước tính từ gốc 'refundable' để tạo bổ nghĩa cực cấp (hồi nguyên phần 100%).",
    "explanation_grammar": "Tobe + Trạng Từ (fully) + Tính từ chính quy (refundable).",
    "translation": "Nguồn viện phí ghi danh ấy sẽ được back phục hoàn lại đẩy tủ trước khi cái buổi lễ ra hội kia chẵn tròn 2 tuần điếm ngược.",
    "core_vocabulary": [{"word": "fully", "type": "adv.", "meaning": "nguyên con toàn vẹn đầy đủ"}, {"word": "refundable", "type": "adj.", "meaning": "có trạm hoàn gửi lại khoản ban đầu"}]
  },
  {
    "id": "q147",
    "question": "The commercial for Zhou's Cafe was ______ Sunn Agency's best advertisement of the year.",
    "options": { "A": "easily", "B": "easy", "C": "easiest", "D": "ease" },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Thêm gia vào trong cụm cao nhất (superlative format) thì từ 'easily' là trợ thủ Trạng Từ khét tiếng lấp nhét vào đặng nhâm trúng độ nhấn mạnh tuyệt đối.",
    "explanation_grammar": "Trạng từ lót ổ chen giữa trước cụm tính từ So sánh bậc cao (best).",
    "translation": "Quả đạn quay thương mại chiếu sóng cho rạp Cafe cậu Zhou không nói ngoa khi ngiễm nhiêm trở thành cú gáo nước đệ nhất phô trương ngon lành cành đào nhất năm trời của nhánh Công ty Sunn.",
    "core_vocabulary": [{"word": "easily", "type": "adv.", "meaning": "ngốn rễ dễ dàng ra trúng"}, {"word": "commercial", "type": "n.", "meaning": "băng truyền thông mẩu thương buôn"}]
  },
  {
    "id": "q148",
    "question": "Ashburn Bank's online service has been in high demand ______.",
    "options": { "A": "lateness", "B": "latest", "C": "later", "D": "lately" },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Đuôi câu cuối thì của Tường Hiện Tại Hoàn Thành thường hay có dính 1 trạng từ chỉ mốc thời gian vát mép hiện tại (lately = gần đây dạo).",
    "explanation_grammar": "Trạng từ 'lately' đặt làm chuông neo chốt ý câu tiếp nối diễn mạn hiện tại.",
    "translation": "Bên mạng dịch vụ chuyển ảo số trên trang nhà của Ngân hàng Ashburn đang hứng một luồng bão lũ tìm kiếm rà sát rất rầm rộ vào dạo ít lâu hiện gần đây.",
    "core_vocabulary": [{"word": "lately", "type": "adv.", "meaning": "vài quãng một lúc sấp xỉ gần đây"}, {"word": "in high demand", "type": "phr.", "meaning": "vây quanh ngóng gọng tìm chầu mong mỏi dồi dào"}]
  },
  {
    "id": "q149",
    "question": "Even the CEO had to admit that Prasma Designs' win was ______ the result of fortunate timing.",
    "options": { "A": "partly", "B": "parts", "C": "parted", "D": "parting" },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Khỏa chổ đứng kẹp nằm trong giữa mào từ tobe ranh giới với kết cục 'the result of'. Một trạng từ lấp váng 'partly' điên đảo ý diễn: Là nguyên nhân 1 bộ phần đóng góp.",
    "explanation_grammar": "Tobe + Trạng từ + Nguồn danh ngữ (the Noun).",
    "translation": "Ngay cả vị phó đà CEO chủ trì cũng đành ngác nhắm mắt đồng thanh cái cú giật gân bàn đào của Prasma Designs chính một tay nguyên khôi một khoảng một phần do dồn dập vào cái giờ vàng thiên lộc số nhọ.",
    "core_vocabulary": [{"word": "partly", "type": "adv.", "meaning": "ngậm cấm đóng đinh một phần chút phần nào đó"}, {"word": "timing", "type": "n.", "meaning": "điểm nhấn thồi giờ hẹn ngọn"}]
  },
  {
    "id": "q150",
    "question": "Yerrow Cameras' lenses have a long telephoto reach yet an ______ lightweight casing.",
    "options": { "A": "excepting", "B": "exceptions", "C": "exception", "D": "exceptionally" },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Luât chung khi chạm trán 1 Tính Từ (lightweight), để lôi dãn sức hấp diễn cực hạng ta điền ngập trạng từ 'exceptionally' (rất ư là, vô cùng xảo).",
    "explanation_grammar": "An + Trang từ Cường điệu (Adv) + Tính từ (Adj) + Noun.",
    "translation": "Cuỗm cái mảng bộ kính viễn của hãng Yerrow Cameras dẫu có khả năng thọc ống nhóm cực xa tăm tít thò lò như thế nhưng mang trên đầu lại là một lớp phủ vỏ ngoài bóp nhẹ tênh tênh sái cổ phi thường.",
    "core_vocabulary": [{"word": "exceptionally", "type": "adv.", "meaning": "đạt mức thần thánh lạ kỳ độ phá xuất thần"}, {"word": "lightweight", "type": "adj.", "meaning": "siêu khinh nhẹ nhàng"}]
  }
];

global.questionsData = global.questionsData.concat(nq);

fs.writeFileSync('C:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'window.questionsData = ' + JSON.stringify(global.questionsData, null, 2) + ';');
