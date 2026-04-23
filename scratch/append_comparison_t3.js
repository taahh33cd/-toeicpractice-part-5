const fs = require('fs');
const path = require('path');

const questions = [
  {
    "id": "q1506",
    "question": "The more time the manager invested in the training, the more ____ the employees became about the new system.",
    "options": { "A": "confident", "B": "confidently", "C": "confidence", "D": "confide" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc 'The more + adj/adv, the more + adj/adv' (càng... càng...). Ở đây cần tính từ 'confident' sau động từ 'become'.",
    "explanation_grammar": "Double Comparative (The more... the more...).",
    "translation": "Người quản lý càng đầu tư nhiều thời gian vào việc đào tạo, các nhân viên càng trở nên tự tin hơn về hệ thống mới.",
    "core_vocabulary": [
      { "word": "invest", "type": "v.", "meaning": "đầu tư" },
      { "word": "confident", "type": "adj.", "meaning": "tự tin" }
    ]
  },
  {
    "id": "q1507",
    "question": "The new software from Vertex Tech processes financial data as ____ as the old system did, but with fewer errors.",
    "options": { "A": "more efficient", "B": "efficiently", "C": "efficiency", "D": "efficient" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc so sánh bằng 'as + adj/adv + as'. Ở đây cần trạng từ 'efficiently' để bổ nghĩa cho động từ 'processes'.",
    "explanation_grammar": "Equative Comparison (as... as).",
    "translation": "Phần mềm mới từ Vertex Tech xử lý dữ liệu tài chính hiệu quả như hệ thống cũ, nhưng ít lỗi hơn.",
    "core_vocabulary": [
      { "word": "process", "type": "v.", "meaning": "xử lý" },
      { "word": "efficiently", "type": "adv.", "meaning": "một cách hiệu quả" }
    ]
  },
  {
    "id": "q1508",
    "question": "Horizon Transport handles international bulk shipments even ____ than our logistics department initially projected.",
    "options": { "A": "more reliably", "B": "reliable", "C": "reliability", "D": "most reliable" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "Dùng 'more + adv + than' để so sánh hơn cho trạng từ 'reliably' (bổ nghĩa cho 'handles'). 'Even' dùng để nhấn mạnh.",
    "explanation_grammar": "Comparative with Adverbs.",
    "translation": "Horizon Transport xử lý các lô hàng rời quốc tế thậm chí còn đáng tin cậy hơn so với những gì bộ phận hậu cần của chúng tôi dự kiến ban đầu.",
    "core_vocabulary": [
      { "word": "bulk shipment", "type": "n.", "meaning": "lô hàng rời/hàng khối" },
      { "word": "reliably", "type": "adv.", "meaning": "đáng tin cậy" }
    ]
  },
  {
    "id": "q1509",
    "question": "Output at the Apex Manufacturing plant was significantly ____ in the second quarter compared to the first quarter.",
    "options": { "A": "higher", "B": "highest", "C": "highly", "D": "high" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "Sử dụng tính từ so sánh hơn 'higher' vì có sự so sánh giữa hai đối tượng (quý 1 và quý 2).",
    "explanation_grammar": "Comparative with Adjectives.",
    "translation": "Sản lượng tại nhà máy Apex Manufacturing cao hơn đáng kể trong quý hai so với quý một.",
    "core_vocabulary": [
      { "word": "output", "type": "n.", "meaning": "sản lượng/đầu ra" }
    ]
  },
  {
    "id": "q1510",
    "question": "To secure the contract with Zenith Corp, it is crucial that our proposal is ____ persuasive as that of our competitors.",
    "options": { "A": "so", "B": "as", "C": "too", "D": "much" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc so sánh bằng 'as + adj + as'. Ở đây thiếu từ 'as' đầu tiên.",
    "explanation_grammar": "Equative Comparison (as... as).",
    "translation": "Để đảm bảo hợp đồng với Zenith Corp, điều quan trọng là đề xuất của chúng tôi phải thuyết phục như đề xuất của các đối thủ cạnh tranh.",
    "core_vocabulary": [
      { "word": "secure", "type": "v.", "meaning": "đạt được/đảm bảo" },
      { "word": "persuasive", "type": "adj.", "meaning": "thuyết phục" }
    ]
  },
  {
    "id": "q1511",
    "question": "The more ____ Mr. Henderson reviewed the annual financial report, the more accounting discrepancies he found.",
    "options": { "A": "closely", "B": "closeness", "C": "close", "D": "closer" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc 'The more + adv, the more...'. Cần trạng từ 'closely' bổ nghĩa cho động từ 'reviewed'.",
    "explanation_grammar": "Double Comparative (The more... the more...).",
    "translation": "Ông Henderson càng xem xét kỹ báo cáo tài chính hàng năm, ông càng tìm thấy nhiều điểm sai lệch trong kế toán.",
    "core_vocabulary": [
      { "word": "closely", "type": "adv.", "meaning": "một cách kỹ lưỡng/chặt chẽ" },
      { "word": "discrepancy", "type": "n.", "meaning": "sự sai lệch/không nhất quán" }
    ]
  },
  {
    "id": "q1512",
    "question": "Consumers are now demanding a ____ versatile tablet than what is currently on the market from Nova Electronics.",
    "options": { "A": "much", "B": "many", "C": "most", "D": "more" },
    "correct_answer": "D",
    "grammar_type": "So sánh",
    "explanation_reason": "Dùng 'more' trước tính từ dài 'versatile' để tạo dạng so sánh hơn (có 'than' phía sau).",
    "explanation_grammar": "Comparative with Long Adjectives.",
    "translation": "Người tiêu dùng hiện đang yêu cầu một chiếc máy tính bảng linh hoạt hơn so với những gì hiện có trên thị trường từ Nova Electronics.",
    "core_vocabulary": [
      { "word": "versatile", "type": "adj.", "meaning": "linh hoạt/đa năng" }
    ]
  },
  {
    "id": "q1513",
    "question": "The latest model of the Titan Vacuum is slightly ____ but much more durable than previous versions.",
    "options": { "A": "heavier", "B": "heaviest", "C": "heavily", "D": "heavy" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "Dùng tính từ so sánh hơn 'heavier' cho tính từ ngắn 'heavy' (vì có 'than' phía sau).",
    "explanation_grammar": "Comparative with Short Adjectives.",
    "translation": "Mẫu máy hút bụi Titan mới nhất hơi nặng hơn một chút nhưng bền hơn nhiều so với các phiên bản trước đó.",
    "core_vocabulary": [
      { "word": "latest model", "type": "n.", "meaning": "mẫu mã mới nhất" },
      { "word": "durable", "type": "adj.", "meaning": "bền bỉ" }
    ]
  },
  {
    "id": "q1514",
    "question": "Please ensure the prospective client receives the updated lease agreement as ____ as possible for their review.",
    "options": { "A": "prompt", "B": "promptly", "C": "promptness", "D": "more prompt" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc 'as + adj/adv + as possible'. Ở đây cần trạng từ 'promptly' bổ nghĩa cho động từ 'receives'.",
    "explanation_grammar": "Equative Comparison / Comparison as possible.",
    "translation": "Vui lòng đảm bảo khách hàng tiềm năng nhận được thỏa thuận thuê đã cập nhật sớm nhất có thể để họ xem xét.",
    "core_vocabulary": [
      { "word": "prospective", "type": "adj.", "meaning": "tiềm năng" },
      { "word": "promptly", "type": "adv.", "meaning": "ngay lập tức/không chậm trễ" }
    ]
  },
  {
    "id": "q1515",
    "question": "The more complex the client's marketing requirements are, the more ____ the software development process will be.",
    "options": { "A": "challenge", "B": "challenged", "C": "challenges", "D": "challenging" },
    "correct_answer": "D",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc 'The more + adj, the more + adj'. Cần tính từ 'challenging' sau 'will be'.",
    "explanation_grammar": "Double Comparative.",
    "translation": "Các yêu cầu tiếp thị của khách hàng càng phức tạp, quá trình phát triển phần mềm sẽ càng đầy thử thách.",
    "core_vocabulary": [
      { "word": "requirement", "type": "n.", "meaning": "yêu cầu" },
      { "word": "challenging", "type": "adj.", "meaning": "đầy thử thách" }
    ]
  },
  {
    "id": "q1516",
    "question": "The online advertising campaign for the Lunar Smartwatch performed much ____ than the board of directors anticipated.",
    "options": { "A": "good", "B": "well", "C": "best", "D": "better" },
    "correct_answer": "D",
    "grammar_type": "So sánh",
    "explanation_reason": "Dùng trạng từ ở dạng so sánh hơn (well -> better) vì có 'than' phía sau và bổ nghĩa cho 'performed'.",
    "explanation_grammar": "Irregular Comparative (well -> better).",
    "translation": "Chiến dịch quảng cáo trực tuyến cho Đồng hồ thông minh Lunar đã hoạt động tốt hơn nhiều so với dự đoán của hội đồng quản trị.",
    "core_vocabulary": [
      { "word": "advertising campaign", "type": "n.", "meaning": "chiến dịch quảng cáo" },
      { "word": "anticipate", "type": "v.", "meaning": "dự đoán/mong đợi" }
    ]
  },
  {
    "id": "q1517",
    "question": "Employee satisfaction is just as ____ to Summit Corporation's long-term success as continuous revenue growth.",
    "options": { "A": "criticalness", "B": "critically", "C": "more critical", "D": "critical" },
    "correct_answer": "D",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc so sánh bằng 'as + adj + as'. Cần tính từ 'critical' đứng sau động từ to-be 'is'.",
    "explanation_grammar": "Equative Comparison.",
    "translation": "Sự hài lòng của nhân viên cũng quan trọng đối với thành công lâu dài của Tập đoàn Summit như sự tăng trưởng doanh thu liên tục.",
    "core_vocabulary": [
      { "word": "satisfaction", "type": "n.", "meaning": "sự hài lòng" },
      { "word": "critical", "type": "adj.", "meaning": "quan trọng/then chốt" }
    ]
  },
  {
    "id": "q1518",
    "question": "Thanks to the new automation software, the assembly line at Falcon Industries is now much ____ than before.",
    "options": { "A": "fast", "B": "faster", "C": "fastly", "D": "fastest" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "Dùng tính từ so sánh hơn 'faster' cho tính từ ngắn (vì có 'than' phía sau).",
    "explanation_grammar": "Comparative with Short Adjectives.",
    "translation": "Nhờ phần mềm tự động hóa mới, dây chuyền lắp ráp tại Falcon Industries giờ đây nhanh hơn nhiều so với trước đây.",
    "core_vocabulary": [
      { "word": "assembly line", "type": "n.", "meaning": "dây chuyền lắp ráp" }
    ]
  },
  {
    "id": "q1519",
    "question": "The newly hired financial analyst reviews the quarterly budget reports much ____ carefully than the previous one.",
    "options": { "A": "as", "B": "more", "C": "most", "D": "much" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "Dùng 'more' trước trạng từ 'carefully' để tạo dạng so sánh hơn (vì có 'than' phía sau).",
    "explanation_grammar": "Comparative with Adverbs.",
    "translation": "Chuyên gia phân tích tài chính mới được thuê xem xét các báo cáo ngân sách hàng quý cẩn thận hơn nhiều so với người trước đó.",
    "core_vocabulary": [
      { "word": "financial analyst", "type": "n.", "meaning": "nhà phân tích tài chính" },
      { "word": "carefully", "type": "adv.", "meaning": "một cách cẩn thận" }
    ]
  },
  {
    "id": "q1520",
    "question": "We need to resolve the customer's complaint regarding the defective freight shipment as ____ as we can.",
    "options": { "A": "swiftly", "B": "swift", "C": "swiftness", "D": "swifter" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc 'as + adj/adv + as possible/we can'. Cần trạng từ 'swiftly' để bổ nghĩa cho động từ 'resolve'.",
    "explanation_grammar": "Equative Comparison / Adverbial use.",
    "translation": "Chúng tôi cần giải quyết khiếu nại của khách hàng liên quan đến lô hàng vận tải bị lỗi nhanh nhất có thể.",
    "core_vocabulary": [
      { "word": "defective", "type": "adj.", "meaning": "bị lỗi" },
      { "word": "swiftly", "type": "adv.", "meaning": "một cách nhanh chóng" }
    ]
  },
  {
    "id": "q1521",
    "question": "The more experienced the job applicant is, the more ____ they are for this senior management position.",
    "options": { "A": "suitable", "B": "suitably", "C": "suitability", "D": "suit" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc song song 'The more + adj, the more + adj'. Cần tính từ 'suitable' sau động từ to-be 'are'.",
    "explanation_grammar": "Double Comparative.",
    "translation": "Ứng viên xin việc càng có nhiều kinh nghiệm, họ càng phù hợp cho vị trí quản lý cấp cao này.",
    "core_vocabulary": [
      { "word": "applicant", "type": "n.", "meaning": "ứng viên" },
      { "word": "suitable", "type": "adj.", "meaning": "phù hợp" }
    ]
  },
  {
    "id": "q1522",
    "question": "The consumer demand for Echo Cloud's storage services has become ____ widespread than industry experts predicted last year.",
    "options": { "A": "most", "B": "more", "C": "as", "D": "much" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "Sử dụng 'more' để tạo dạng so sánh hơn cho tính từ 'widespread' (vì có 'than' phía sau).",
    "explanation_grammar": "Comparative with Long Adjectives.",
    "translation": "Nhu cầu của người tiêu dùng đối với dịch vụ lưu trữ của Echo Cloud đã trở nên phổ biến hơn so với những gì các chuyên gia trong ngành dự đoán vào năm ngoái.",
    "core_vocabulary": [
      { "word": "consumer demand", "type": "n.", "meaning": "nhu cầu người tiêu dùng" },
      { "word": "widespread", "type": "adj.", "meaning": "phổ biến/rộng rãi" }
    ]
  },
  {
    "id": "q1523",
    "question": "After the recent renovation, the main conference room at Vanguard Enterprises is significantly ____ and more modern.",
    "options": { "A": "largest", "B": "larger", "C": "largely", "D": "large" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "Dùng tính từ ở dạng so sánh hơn 'larger' (một âm tiết) để tương ứng với 'more modern' phía sau.",
    "explanation_grammar": "Comparative with Short Adjectives.",
    "translation": "Sau cuộc đại tu gần đây, phòng hội nghị chính tại Vanguard Enterprises lớn hơn và hiện đại hơn đáng kể.",
    "core_vocabulary": [
      { "word": "renovation", "type": "n.", "meaning": "sự cải tạo/đại tu" }
    ]
  },
  {
    "id": "q1524",
    "question": "The guest speaker delivered his keynote presentation as ____ as usual, captivating the entire audience at the seminar.",
    "options": { "A": "eloquent", "B": "more eloquently", "C": "eloquence", "D": "eloquently" },
    "correct_answer": "D",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc so sánh bằng 'as + adj/adv + as'. Ở đây cần trạng từ 'eloquently' để bổ nghĩa cho động từ 'delivered'.",
    "explanation_grammar": "Equative Comparison with Adverbs.",
    "translation": "Diễn giả khách mời đã trình bày bài diễn thuyết chính của mình một cách hùng hồn như thường lệ, thu hút toàn bộ khán giả tại buổi hội thảo.",
    "core_vocabulary": [
      { "word": "eloquently", "type": "adv.", "meaning": "một cách hùng hồn/trôi chảy" },
      { "word": "captivate", "type": "v.", "meaning": "thu hút/quyến rũ" }
    ]
  },
  {
    "id": "q1525",
    "question": "The more competitive the retail market becomes, the more ____ companies must be to attract and retain customers.",
    "options": { "A": "innovate", "B": "innovative", "C": "innovatively", "D": "innovation" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc 'The more... the more...'. Cần tính từ 'innovative' để bổ nghĩa cho 'companies' sau động từ to-be 'be'.",
    "explanation_grammar": "Double Comparative.",
    "translation": "Thị trường bán lẻ càng trở nên cạnh tranh, các công ty càng phải trở nên đổi mới và sáng tạo để thu hút và giữ chân khách hàng.",
    "core_vocabulary": [
      { "word": "innovative", "type": "adj.", "meaning": "đổi mới/sáng tạo" },
      { "word": "retain", "type": "v.", "meaning": "giữ chân/duy trì" }
    ]
  },
  {
    "id": "q1526",
    "question": "Our new supplier in Germany delivers raw materials far ____ consistently than our previous domestic vendor did.",
    "options": { "A": "very", "B": "more", "C": "as", "D": "most" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "Dùng 'more' để tạo dạng so sánh hơn cho trạng từ 'consistently' (vì có 'than' phía sau). 'Far' được dùng để nhấn mạnh.",
    "explanation_grammar": "Comparative with Adverbs.",
    "translation": "Nhà cung cấp mới của chúng tôi tại Đức cung cấp nguyên liệu thô nhất quán hơn nhiều so với nhà cung cấp trong nước trước đây của chúng tôi.",
    "core_vocabulary": [
      { "word": "domestic vendor", "type": "n.", "meaning": "nhà cung cấp trong nước" },
      { "word": "consistently", "type": "adv.", "meaning": "một cách nhất quán" }
    ]
  },
  {
    "id": "q1527",
    "question": "The dedicated sales team worked much ____ on the upcoming product launch than they did on the previous one.",
    "options": { "A": "hardly", "B": "harder", "C": "hardest", "D": "hard" },
    "correct_answer": "B",
    "grammar_type": "So sánh",
    "explanation_reason": "Dùng dạng so sánh hơn của trạng từ 'hard' là 'harder' (vì có 'than' phía sau).",
    "explanation_grammar": "Comparative of Adverb 'hard'.",
    "translation": "Đội ngũ bán hàng tận tâm đã làm việc chăm chỉ hơn nhiều cho đợt ra mắt sản phẩm sắp tới so với lần trước đó.",
    "core_vocabulary": [
      { "word": "dedicated", "type": "adj.", "meaning": "tận tâm" },
      { "word": "launch", "type": "n./v.", "meaning": "sự ra mắt/ra mắt" }
    ]
  },
  {
    "id": "q1528",
    "question": "The extended warranty on the Orion Coffee Maker is as ____ as the ones offered by leading luxury brands.",
    "options": { "A": "comprehensive", "B": "comprehensively", "C": "more comprehensive", "D": "comprehension" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc so sánh bằng 'as + adj + as'. Cần tính từ 'comprehensive' sau động từ to-be 'is'.",
    "explanation_grammar": "Equative Comparison.",
    "translation": "Gói bảo hành mở rộng cho Máy pha cà phê Orion cũng toàn diện như các gói được cung cấp bởi các thương hiệu xa xỉ hàng đầu.",
    "core_vocabulary": [
      { "word": "comprehensive", "type": "adj.", "meaning": "toàn diện" },
      { "word": "extended warranty", "type": "n.", "meaning": "bảo hành mở rộng" }
    ]
  },
  {
    "id": "q1529",
    "question": "The more ____ the executive committee reviews the proposals, the easier it will be to select the winning bid.",
    "options": { "A": "thoroughly", "B": "thoroughness", "C": "thorough", "D": "most thorough" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "Cấu trúc 'The more... the more...'. Cần trạng từ 'thoroughly' để bổ nghĩa cho động từ 'reviews'.",
    "explanation_grammar": "Double Comparative.",
    "translation": "Ủy ban điều hành càng xem xét kỹ các đề xuất, việc lựa chọn hồ sơ thắng thầu sẽ càng dễ dàng hơn.",
    "core_vocabulary": [
      { "word": "thoroughly", "type": "adv.", "meaning": "một cách kỹ lưỡng/triệt để" },
      { "word": "winning bid", "type": "n.", "meaning": "hồ sơ thắng thầu" }
    ]
  },
  {
    "id": "q1530",
    "question": "Recent economic trends suggest a somewhat ____ recovery in the commercial real estate market than what was previously outlined.",
    "options": { "A": "slower", "B": "slow", "C": "slowly", "D": "slowest" },
    "correct_answer": "A",
    "grammar_type": "So sánh",
    "explanation_reason": "Dùng tính từ so sánh hơn 'slower' cho tính từ ngắn 'slow' (vì có 'than' phía sau).",
    "explanation_grammar": "Comparative with Short Adjectives.",
    "translation": "Các xu hướng kinh tế gần đây cho thấy sự phục hồi hơi chậm hơn của thị trường bất động sản thương mại so với những gì đã được phác thảo trước đó.",
    "core_vocabulary": [
      { "word": "recovery", "type": "n.", "meaning": "sự phục hồi" }
    ]
  }
];

const dataPath = 'c:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js';
let content = fs.readFileSync(dataPath, 'utf8');

const insertionIndex = content.lastIndexOf('];');
if (insertionIndex !== -1) {
  const jsonString = questions.map(q => JSON.stringify(q, null, 2)).join(',\n');
  const updatedContent = content.slice(0, insertionIndex).trim() + ',\n' + jsonString + '\n];';
  fs.writeFileSync(dataPath, updatedContent, 'utf8');
  console.log('Successfully appended 25 questions for So sánh Test 3.');
} else {
  console.error('Could not find end of array in questions.js');
}
