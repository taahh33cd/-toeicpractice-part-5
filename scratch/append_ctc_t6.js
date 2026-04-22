const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const qaMapping = {
  1: { ans: "D", reason: "Chủ ngữ 'The customs officers' + Động từ 'inspected' + Tân ngữ 'the cargo'." },
  2: { ans: "B", reason: "Cùng câu, đáp án đúng là S-V-O-C (động từ + tân ngữ + bổ ngữ)." },
  3: { ans: "D", reason: "Chủ ngữ 'The tax policy' + Động từ nối 'remains' + Bổ ngữ 'unchanged'." },
  4: { ans: "A", reason: "Chủ ngữ 'The algorithm' + Động từ 'ran' + Trạng từ 'smoothly' là trạng từ, nên cấu trúc S-V." },
  5: { ans: "C", reason: "Chủ ngữ 'The project manager' + Động từ 'called' + Tân ngữ 'the schedule' + Bổ ngữ tân ngữ 'unrealistic'." },
  6: { ans: "B", reason: "Chủ ngữ 'The engineers' + Động từ 'analyzed' + Tân ngữ 'the data'." },
  7: { ans: "A", reason: "Chủ ngữ 'The construction site' + Động từ nối 'looks' + Bổ ngữ 'hazardous'." },
  8: { ans: "B", reason: "Chủ ngữ 'The team' + Động từ 'considered' + Tân ngữ 'the import' + Bổ ngữ tân ngữ 'successful'." },
  9: { ans: "C", reason: "Chủ ngữ 'The fresh apples' + Động từ 'arrived'. 'yesterday' là trạng từ, không ảnh hưởng cấu trúc S-V-O." },
 10: { ans: "D", reason: "Chủ ngữ 'The supply chain' + Động từ 'became' + Bổ ngữ 'disrupted'." },
 11: { ans: "B", reason: "Chủ ngữ 'The inventory' + Động từ 'decreased'. 'steadily' là trạng từ." },
 12: { ans: "C", reason: "Chủ ngữ 'The software' + Động từ 'generated' + Tân ngữ 'a visual chart'." },
 13: { ans: "A", reason: "Chủ ngữ 'The directors' + Động từ 'appointed' + Tân ngữ 'him' + Bổ ngữ tân ngữ 'lead analyst'." },
 14: { ans: "B", reason: "Chủ ngữ 'The freight train' + Động từ 'departed'. 'early' là trạng từ, nên S-V-O-C (động từ + tân ngữ + bổ ngữ)." },
 15: { ans: "C", reason: "Chủ ngữ 'The economic forecast' + Động từ nối 'seems' + Bổ ngữ 'pessimistic'." },
 16: { ans: "A", reason: "Chủ ngữ 'The import tax' + Động từ 'increased'. 'slightly' là trạng từ, nên S-V-C." },
 17: { ans: "D", reason: "Chủ ngữ 'The inspectors' + Động từ 'found' + Tân ngữ 'the goods' + Bổ ngữ tân ngữ 'damaged'." },
 18: { ans: "C", reason: "Chủ ngữ 'The business' + Động từ 'expanded'. 'rapidly' là trạng từ, nên S-V-O." },
 19: { ans: "A", reason: "Chủ ngữ 'The logistics team' + Động từ 'solved' + Tân ngữ 'the problem'." },
 20: { ans: "B", reason: "Chủ ngữ 'The database' + Động từ 'works'. 'efficiently' là trạng từ, nên S-V." },
 21: { ans: "A", reason: "Chủ ngữ 'The supervisor' + Động từ 'made' + Tân ngữ 'the rules' + Bổ ngữ tân ngữ 'clear'." },
 22: { ans: "C", reason: "Chủ ngữ 'The analysts' + Động từ 'predicted' + Tân ngữ 'a market shift'." },
 23: { ans: "B", reason: "Chủ ngữ 'The workflow' + Động từ nối 'appears' + Bổ ngữ 'logical'." },
 24: { ans: "C", reason: "Chủ ngữ 'The port authority' + Động từ 'approved' + Tân ngữ 'the shipment'." },
 25: { ans: "D", reason: "Chủ ngữ 'The customs procedure' + Động từ 'proved' + Tân ngữ 'complicated'." }
};

const rawText = `Question 1.
The customs officers inspected the cargo.
A. S-V-O-C
B. S-V-C
C. S-V
D. S-V-O
(Điểm: 0.4)
Question 2.
The customs officers inspected the cargo.
A. S-V-C
B. S-V-O-C
C. S-V
D. S-V-O
(Điểm: 0.4)
Question 3.
The tax policy remains unchanged.
A. S-V-C
B. S-V-O
C. S-V-O-C
D. S-V
(Điểm: 0.4)
Question 4.
The algorithm ran smoothly.
A. S-V
B. S-V-O
C. S-V-C
D. S-V-O-C
(Điểm: 0.4)
Question 5.
The project manager called the schedule unrealistic.
A. S-V
B. S-V-C
C. S-V-O-C
D. S-V-O
(Điểm: 0.4)
Question 6.
The engineers analyzed the data.
A. S-V-O-C
B. S-V
C. S-V-C
D. S-V-O
(Điểm: 0.4)
Question 7.
The construction site looks hazardous.
A. S-V
B. S-V-C
C. S-V-O
D. S-V-O-C
(Điểm: 0.4)
Question 8.
The team considered the import successful.
A. S-V-C
B. S-V
C. S-V-O-C
D. S-V-O
(Điểm: 0.4)
Question 9.
The fresh apples arrived yesterday.
A. S-V-O-C
B. S-V
C. S-V-O
D. S-V-C
(Điểm: 0.4)
Question 10.
The supply chain became disrupted.
A. S-V-O
B. S-V
C. S-V-C
D. S-V-O-C
(Điểm: 0.4)
Question 11.
The inventory decreased steadily.
A. S-V-C
B. S-V
C. S-V-O-C
D. S-V-O
(Điểm: 0.4)
Question 12.
The software generated a visual chart.
A. S-V-O
B. S-V
C. S-V-C
D. S-V-O-C
(Điểm: 0.4)
Question 13.
The directors appointed him lead analyst.
A. S-V-O-C
B. S-V
C. S-V-O
D. S-V-C
(Điểm: 0.4)
Question 14.
The freight train departed early.
A. S-V
B. S-V-O-C
C. S-V-C
D. S-V-O
(Điểm: 0.4)
Question 15.
The economic forecast seems pessimistic.
A. S-V-O-C
B. S-V-O
C. S-V-C
D. S-V
(Điểm: 0.4)
Question 16.
The import tax increased slightly.
A. S-V-C
B. S-V-O-C
C. S-V-O
D. S-V
(Điểm: 0.4)
Question 17.
The inspectors found the goods damaged.
A. S-V
B. S-V-O
C. S-V-C
D. S-V-O-C
(Điểm: 0.4)
Question 18.
The business expanded rapidly.
A. S-V-O-C
B. S-V-C
C. S-V-O
D. S-V
(Điểm: 0.4)
Question 19.
The logistics team solved the problem.
A. S-V-O
B. S-V
C. S-V-O-C
D. S-V-C
(Điểm: 0.4)
Question 20.
The database works efficiently.
A. S-V-O-C
B. S-V
C. S-V-O
D. S-V-C
(Điểm: 0.4)
Question 21.
The supervisor made the rules clear.
A. S-V-O
B. S-V-O-C
C. S-V-C
D. S-V
(Điểm: 0.4)
Question 22.
The analysts predicted a market shift.
A. S-V-O
B. S-V-C
C. S-V
D. S-V-O-C
(Điểm: 0.4)
Question 23.
The workflow appears logical.
A. S-V-C
B. S-V
C. S-V-O-C
D. S-V-O
(Điểm: 0.4)
Question 24.
The port authority approved the shipment.
A. S-V-O
B. S-V-C
C. S-V
D. S-V-O-C
(Điểm: 0.4)
Question 25.
The customs procedure proved complicated.
A. S-V-O
B. S-V-C
C. S-V
D. S-V-O-C
(Điểm: 0.4)`;

const questions = [];
const blocks = rawText.split(/Question \d+\./).filter(Boolean);

let startId = 486; // continue after previous IDs

for (let i = 0; i < blocks.length; i++) {
  const block = blocks[i].trim();
  const qNum = i + 1;
  const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
  const questionText = lines[0];
  let options = {};
  for (let line of lines) {
    if (line.match(/^[A-D]\./)) {
      const parts = line.split('.');
      const key = parts[0].trim();
      const val = parts.slice(1).join('.').trim();
      options[key] = val;
    }
  }
  const { ans, reason } = qaMapping[qNum];
  questions.push({
    id: 'q' + startId,
    question: questionText,
    options: options,
    correct_answer: ans,
    grammar_type: "Cấu trúc câu",
    explanation_reason: reason,
    explanation_grammar: "Cấu trúc câu",
    translation: "...",
    core_vocabulary: []
  });
  startId++;
}

let content = fs.readFileSync(targetFile, 'utf8');
const searchString = "window.questionsData = [";
if (content.includes(searchString)) {
  const qString = questions.map(q => JSON.stringify(q, null, 2)).join(',\n  ') + ',\n';
  content = content.replace(searchString, searchString + '\n  ' + qString);
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log('Successfully appended 25 questions!');
} else {
  console.log('Could not find window.questionsData in the file.');
}
