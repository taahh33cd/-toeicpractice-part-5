const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "id": "q0926",
    "question": "Director Jun Iwata auditioned twenty actors before making the ______ decision about whom to cast in the main role.",
    "options": {
      "A": "finals",
      "B": "finalize",
      "C": "final",
      "D": "finally"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'decision' để bổ nghĩa cho danh từ đó.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Đạo diễn Jun Iwata đã thử vai hai mươi diễn viên trước khi đưa ra quyết định cuối cùng về việc giao vai chính cho ai.",
    "core_vocabulary": [
      { "word": "audition", "type": "v.", "meaning": "thử vai" },
      { "word": "decision", "type": "n.", "meaning": "quyết định" }
    ]
  },
  {
    "id": "q0927",
    "question": "The two competing software programs were determined to be ______ effective in making filing taxes from home an easy task.",
    "options": {
      "A": "equaled",
      "B": "equality",
      "C": "equally",
      "D": "equal"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ đứng trước tính từ 'effective' để bổ nghĩa cho tính từ đó.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Hai chương trình phần mềm cạnh tranh được xác định là có hiệu quả ngang nhau trong việc giúp việc khai thuế tại nhà trở thành một nhiệm vụ dễ dàng.",
    "core_vocabulary": [
      { "word": "competing", "type": "adj.", "meaning": "cạnh tranh" },
      { "word": "effective", "type": "adj.", "meaning": "hiệu quả" }
    ]
  },
  {
    "id": "q0928",
    "question": "Because of a ______ increase in profits this quarter, Tyro Sportswear employees will receive their first-ever year end bonus.",
    "options": {
      "A": "dramatic",
      "B": "dramatically",
      "C": "dramatize",
      "D": "drama"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'increase' để bổ nghĩa cho danh từ đó.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Vì lợi nhuận tăng mạnh trong quý này, nhân viên của Tyro Sportswear sẽ nhận được tiền thưởng cuối năm lần đầu tiên.",
    "core_vocabulary": [
      { "word": "profit", "type": "n.", "meaning": "lợi nhuận" },
      { "word": "dramatic", "type": "adj.", "meaning": "đáng kể, mạnh mẽ" }
    ]
  },
  {
    "id": "q0929",
    "question": "Ms. Maria Perreira is ______ responsible for some of our company's most successful marketing campaigns.",
    "options": {
      "A": "larger",
      "B": "largest",
      "C": "large",
      "D": "largely"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ đứng trước tính từ 'responsible' để bổ nghĩa cho tính từ đó.",
    "explanation_grammar": "Adverb modifying Adjective.",
    "translation": "Bà Maria Perreira chịu trách nhiệm phần lớn cho một số chiến dịch tiếp thị thành công nhất của công ty chúng tôi.",
    "core_vocabulary": [
      { "word": "responsible", "type": "adj.", "meaning": "chịu trách nhiệm" },
      { "word": "campaign", "type": "n.", "meaning": "chiến dịch" }
    ]
  },
  {
    "id": "q0930",
    "question": "Doctors at Stephen Mallory Memorial Hospital claim that cases of food poisoning caused by improper storage are becoming more ______.",
    "options": {
      "A": "frequency",
      "B": "frequently",
      "C": "frequented",
      "D": "frequent"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'becoming' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Các bác sĩ tại Bệnh viện Tưởng niệm Stephen Mallory khẳng định rằng các trường hợp ngộ độc thực phẩm do bảo quản không đúng cách đang trở nên thường xuyên hơn.",
    "core_vocabulary": [
      { "word": "poisoning", "type": "n.", "meaning": "sự ngộ độc" },
      { "word": "storage", "type": "n.", "meaning": "sự lưu trữ, bảo quản" }
    ]
  },
  {
    "id": "q0931",
    "question": "In Mr. Brothet's performance review, the department supervisor wrote that he worked extremely ______ and always finished his assignments on time.",
    "options": {
      "A": "diligently",
      "B": "diligent",
      "C": "diligence",
      "D": "most diligent"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho động từ 'worked'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Trong bản đánh giá năng lực của ông Brothet, người giám sát bộ phận đã viết rằng ông đã làm việc cực kỳ siêng năng và luôn hoàn thành nhiệm vụ đúng hạn.",
    "core_vocabulary": [
      { "word": "performance review", "type": "n.phr.", "meaning": "đánh giá năng lực" },
      { "word": "diligently", "type": "adv.", "meaning": "siêng năng" }
    ]
  },
  {
    "id": "q0932",
    "question": "The chemistry lab managers are concerned that new employees have not been trained ______ in the latest emergency procedures.",
    "options": {
      "A": "adequately",
      "B": "adequate",
      "C": "adequateness",
      "D": "adequacy"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho động từ ở dạng bị động 'been trained'.",
    "explanation_grammar": "Adverb modifying Passive Verb.",
    "translation": "Các quản lý phòng thí nghiệm hóa học lo ngại rằng các nhân viên mới chưa được đào tạo đầy đủ về các quy trình khẩn cấp mới nhất.",
    "core_vocabulary": [
      { "word": "adequately", "type": "adv.", "meaning": "đầy đủ, thỏa đáng" },
      { "word": "emergency", "type": "n.", "meaning": "khẩn cấp" }
    ]
  },
  {
    "id": "q0933",
    "question": "Underwood Energy Services Inc. offers ______ benefits to full-time employees, including dental insurance.",
    "options": {
      "A": "attracted",
      "B": "attract",
      "C": "attractive",
      "D": "attraction"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'benefits' để bổ nghĩa cho danh từ đó.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Underwood Energy Services Inc. cung cấp các phúc lợi hấp dẫn cho nhân viên toàn thời gian, bao gồm cả bảo hiểm nha khoa.",
    "core_vocabulary": [
      { "word": "benefit", "type": "n.", "meaning": "phúc lợi" },
      { "word": "attractive", "type": "adj.", "meaning": "hấp dẫn" }
    ]
  },
  {
    "id": "q0934",
    "question": "After ______ interviewing more than fifty candidates for the position of manager of the Biotechnology Department, the committee chose Dr. Alan Liu.",
    "options": {
      "A": "carefully",
      "B": "to care",
      "C": "most careful",
      "D": "careful"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho danh động từ (gerund) 'interviewing'.",
    "explanation_grammar": "Adverb modifying Gerund.",
    "translation": "Sau khi phỏng vấn kỹ lưỡng hơn năm mươi ứng viên cho vị trí quản lý Bộ phận Công nghệ sinh học, ủy ban đã chọn Tiến sĩ Alan Liu.",
    "core_vocabulary": [
      { "word": "candidate", "type": "n.", "meaning": "ứng viên" },
      { "word": "carefully", "type": "adv.", "meaning": "cẩn thận, kỹ lưỡng" }
    ]
  },
  {
    "id": "q0935",
    "question": "Mr. Ben Shipley will be promoted next month for managing production ______ at our facility in Kansas City.",
    "options": {
      "A": "more effective",
      "B": "most effective",
      "C": "effectively",
      "D": "effective"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho danh động từ 'managing'.",
    "explanation_grammar": "Adverb modifying Gerund.",
    "translation": "Ông Ben Shipley sẽ được thăng chức vào tháng tới vì đã quản lý sản xuất một cách hiệu quả tại cơ sở của chúng tôi ở Thành phố Kansas.",
    "core_vocabulary": [
      { "word": "promote", "type": "v.", "meaning": "thăng chức" },
      { "word": "facility", "type": "n.", "meaning": "cơ sở, nhà máy" }
    ]
  },
  {
    "id": "q0936",
    "question": "Graduates from the Melrose College of Technology often make ______ contributions in several fields, including engineering, computer sciences, and astronomy.",
    "options": {
      "A": "value",
      "B": "valuably",
      "C": "valuable",
      "D": "valuing"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'contributions' để bổ nghĩa cho danh từ đó.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Sinh viên tốt nghiệp từ Cao đẳng Công nghệ Melrose thường có những đóng góp giá trị trong nhiều lĩnh vực, bao gồm kỹ thuật, khoa học máy tính và thiên văn học.",
    "core_vocabulary": [
      { "word": "contribution", "type": "n.", "meaning": "sự đóng góp" },
      { "word": "valuable", "type": "adj.", "meaning": "giá trị" }
    ]
  },
  {
    "id": "q0937",
    "question": "When handling large funds, bank employees are required to check the statements ______ to make sure that everything is correct.",
    "options": {
      "A": "careful",
      "B": "carefulness",
      "C": "more careful",
      "D": "carefully"
    },
    "correct_answer": "D",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho động từ 'check'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Khi xử lý các khoản quỹ lớn, nhân viên ngân hàng được yêu cầu kiểm tra các sao kê một cách cẩn thận để đảm bảo mọi thứ đều chính xác.",
    "core_vocabulary": [
      { "word": "handle", "type": "v.", "meaning": "xử lý" },
      { "word": "statement", "type": "n.", "meaning": "sao kê" }
    ]
  },
  {
    "id": "q0938",
    "question": "Once Mr. Mirren ______ completes his studies and necessary training, he may come and work for our corporation.",
    "options": {
      "A": "successfully",
      "B": "successful",
      "C": "successes",
      "D": "success"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho động từ 'completes'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Sau khi ông Mirren hoàn tất thành công việc học và đào tạo cần thiết, ông có thể đến làm việc cho tập đoàn của chúng tôi.",
    "core_vocabulary": [
      { "word": "successfully", "type": "adv.", "meaning": "thành công" },
      { "word": "corporation", "type": "n.", "meaning": "tập đoàn" }
    ]
  },
  {
    "id": "q0939",
    "question": "There are some ______ job ads in the company newsletter in case any employee might know someone who can fill those positions.",
    "options": {
      "A": "updating",
      "B": "updates",
      "C": "updated",
      "D": "update"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ (ở dạng phân từ) đứng trước danh từ 'job ads'. 'Updated' có nghĩa là 'đã được cập nhật'.",
    "explanation_grammar": "Participial Adjective before Noun.",
    "translation": "Có một số quảng cáo việc làm đã được cập nhật trong bản tin công ty phòng trường hợp có nhân viên nào biết ai đó có thể đảm nhận các vị trí đó.",
    "core_vocabulary": [
      { "word": "newsletter", "type": "n.", "meaning": "bản tin" },
      { "word": "updated", "type": "adj.", "meaning": "đã được cập nhật" }
    ]
  },
  {
    "id": "q0940",
    "question": "Regulations have been enacted to ensure that labels on all medications are easily ______.",
    "options": {
      "A": "understand",
      "B": "understandably",
      "C": "understandable",
      "D": "understanding"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Sau động từ nối 'are' cần một tính từ.",
    "explanation_grammar": "Adjective after Linking Verb.",
    "translation": "Các quy định đã được ban hành để đảm bảo rằng nhãn trên tất cả các loại thuốc đều dễ hiểu.",
    "core_vocabulary": [
      { "word": "enact", "type": "v.", "meaning": "ban hành" },
      { "word": "understandable", "type": "adj.", "meaning": "có thể hiểu được, dễ hiểu" }
    ]
  },
  {
    "id": "q0941",
    "question": "If you need to hire ______ help for your growing business, our experts can assist with the hiring process from start to finish.",
    "options": {
      "A": "additionally",
      "B": "additions",
      "C": "additional",
      "D": "addition"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ đứng trước danh từ 'help'.",
    "explanation_grammar": "Adjective before Noun.",
    "translation": "Nếu bạn cần thuê thêm trợ giúp cho doanh nghiệp đang phát triển của mình, các chuyên gia của chúng tôi có thể hỗ trợ quy trình tuyển dụng từ đầu đến cuối.",
    "core_vocabulary": [
      { "word": "growing", "type": "adj.", "meaning": "đang phát triển" },
      { "word": "additional", "type": "adj.", "meaning": "thêm, bổ sung" }
    ]
  },
  {
    "id": "q0942",
    "question": "______ accounting measures have helped increase profit margins by 20%.",
    "options": {
      "A": "improved",
      "B": "improve",
      "C": "improving",
      "D": "improvement"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ (ở dạng phân từ) để bổ nghĩa cho danh từ 'accounting measures'.",
    "explanation_grammar": "Participial Adjective before Noun.",
    "translation": "Các biện pháp kế toán được cải thiện đã giúp tăng tỷ suất lợi nhuận lên 20%.",
    "core_vocabulary": [
      { "word": "measure", "type": "n.", "meaning": "biện pháp" },
      { "word": "profit margin", "type": "n.phr.", "meaning": "tỷ suất lợi nhuận" }
    ]
  },
  {
    "id": "q0943",
    "question": "The price of organic goods is expected to rise ______ over the next several years because of an increase in demand.",
    "options": {
      "A": "dramatically",
      "B": "dramatize",
      "C": "dramatist",
      "D": "dramatic"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho động từ 'rise'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Giá của hàng hóa hữu cơ dự kiến sẽ tăng mạnh trong vài năm tới do nhu cầu tăng cao.",
    "core_vocabulary": [
      { "word": "organic", "type": "adj.", "meaning": "hữu cơ" },
      { "word": "rise", "type": "v.", "meaning": "tăng lên" }
    ]
  },
  {
    "id": "q0944",
    "question": "At yesterday's meeting, staff members were introduced to Peter McCabe, the recently ______ manager of the Dynasty Hotel in Washington D.C.",
    "options": {
      "A": "appointed",
      "B": "appoint",
      "C": "appointing",
      "D": "appointment"
    },
    "correct_answer": "A",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một tính từ (ở dạng phân từ) đứng trước danh từ 'manager'.",
    "explanation_grammar": "Participial Adjective before Noun.",
    "translation": "Tại cuộc họp ngày hôm qua, các nhân viên đã được giới thiệu với Peter McCabe, quản lý mới được bổ nhiệm gần đây của Khách sạn Dynasty ở Washington D.C.",
    "core_vocabulary": [
      { "word": "appoint", "type": "v.", "meaning": "bổ nhiệm" },
      { "word": "recently", "type": "adv.", "meaning": "gần đây" }
    ]
  },
  {
    "id": "q0945",
    "question": "The new zoning laws should ______ improve the traffic congestion problem developing in the suburbs.",
    "options": {
      "A": "greatest",
      "B": "greatness",
      "C": "greatly",
      "D": "great"
    },
    "correct_answer": "C",
    "grammar_type": "Tính từ & Trạng từ",
    "explanation_reason": "Cần một trạng từ để bổ nghĩa cho động từ 'improve'.",
    "explanation_grammar": "Adverb modifying Verb.",
    "translation": "Các luật phân vùng mới sẽ giúp cải thiện đáng kể vấn đề tắc nghẽn giao thông đang phát triển ở vùng ngoại ô.",
    "core_vocabulary": [
      { "word": "zoning law", "type": "n.phr.", "meaning": "luật phân vùng" },
      { "word": "congestion", "type": "n.", "meaning": "sự tắc nghẽn" }
    ]
  }
];

const filePath = path.join(__dirname, '../data/questions.js');
let content = fs.readFileSync(filePath, 'utf8');

// Find the last ]; and insert the new questions before it
const lastBracketIndex = content.lastIndexOf('];');
if (lastBracketIndex !== -1) {
    const questionsString = ',\n' + newQuestions.map(q => JSON.stringify(q, null, 2)).join(',\n');
    content = content.substring(0, lastBracketIndex) + questionsString + '\n' + content.substring(lastBracketIndex);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully added ${newQuestions.length} questions to data/questions.js`);
} else {
    console.error('Could not find the end of the questions array in data/questions.js');
}
