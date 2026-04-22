const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const qaMapping = {
  1: { ans: "C", reason: "Chủ ngữ 'The architect' + Động từ 'designed' + Tân ngữ 'the building'." },
  2: { ans: "B", reason: "Chủ ngữ 'The budget' + Động từ nối 'seems' + Bổ ngữ 'tight'." },
  3: { ans: "B", reason: "Chủ ngữ 'The cargo' + Động từ 'arrived'. 'late' là trạng từ, nên S-V." },
  4: { ans: "D", reason: "Chủ ngữ 'The committee' + Động từ 'appointed' + Tân ngữ 'him' + Bổ ngữ tân ngữ 'project manager'." },
  5: { ans: "D", reason: "Chủ ngữ 'The contractor' + Động từ 'signed' + Tân ngữ 'the agreement'." },
  6: { ans: "C", reason: "Chủ ngữ 'The tax rate' + Động từ 'dropped'." },
  7: { ans: "B", reason: "Chủ ngữ 'The customs officer' + Động từ 'checked' + Tân ngữ 'the passport'." },
  8: { ans: "A", reason: "Chủ ngữ 'The schedule' + Động từ 'remains' + Bổ ngữ 'unchanged'." },
  9: { ans: "D", reason: "Chủ ngữ 'They' + Động từ 'made' + Tân ngữ 'her' + Bổ ngữ tân ngữ 'team leader'." },
 10: { ans: "B", reason: "Chủ ngữ 'The data analyst' + Động từ 'exported' + Tân ngữ 'the file'." },
 11: { ans: "A", reason: "Chủ ngữ 'The economy' + Động từ 'recovered'. 'slowly' là trạng từ, nên S-V." },
 12: { ans: "D", reason: "Chủ ngữ 'The new regulations' + Động từ nối 'appear' + Bổ ngữ 'strict'." },
 13: { ans: "A", reason: "Chủ ngữ 'The supervisor' + Động từ 'found' + Tân ngữ 'the error'." },
 14: { ans: "C", reason: "Chủ ngữ 'The client' + Động từ 'considered' + Tân ngữ 'the cost' + Bổ ngữ tân ngữ 'high'." },
 15: { ans: "A", reason: "Chủ ngữ 'The workers' + Động từ 'started'. 'early' là trạng từ, nên S-V." },
 16: { ans: "A", reason: "Chủ ngữ 'The accountant' + Động từ 'verified' + Tân ngữ 'the invoice'." },
 17: { ans: "C", reason: "Chủ ngữ 'The shipment' + Động từ 'looks' + Bổ ngữ 'heavy'." },
 18: { ans: "A", reason: "Chủ ngữ 'The director' + Động từ 'named' + Tân ngữ 'him' + Bổ ngữ tân ngữ 'lead engineer'." },
 19: { ans: "B", reason: "Chủ ngữ 'The market' + Động từ 'crashed'. 'suddenly' là trạng từ, nên S-V." },
 20: { ans: "B", reason: "Chủ ngữ 'The system' + Động từ 'processed' + Tân ngữ 'the data'." },
 21: { ans: "A", reason: "Chủ ngữ 'The delivery' + Động từ 'proved' + Bổ ngữ 'difficult'." },
 22: { ans: "A", reason: "Chủ ngữ 'The board' + Động từ 'kept' + Tân ngữ 'the strategy' + Bổ ngữ tân ngữ 'secret'." },
 23: { ans: "A", reason: "Chủ ngữ 'The import duties' + Động từ 'increased'." },
 24: { ans: "B", reason: "Chủ ngữ 'The investors' + Động từ 'reviewed' + Tân ngữ 'the portfolio'." },
 25: { ans: "C", reason: "Chủ ngữ 'The project' + Động từ nối 'became' + Bổ ngữ 'successful'." }
};

const rawText = `Question 1.
The architect designed the building.
A. S-V-O-C
B. S-V-O
C. S-V
D. S-V-C
(Điểm: 0.4)
Question 2.
The budget seems tight.
A. S-V-O-C
B. S-V-C
C. S-V-O
D. S-V
(Điểm: 0.4)
Question 3.
The cargo arrived late.
A. S-V-O
B. S-V
C. S-V-C
D. S-V-O-C
(Điểm: 0.4)
Question 4.
The committee appointed him project manager.
A. S-V
B. S-V-O
C. S-V-C
D. S-V-O-C
(Điểm: 0.4)
Question 5.
The contractor signed the agreement.
A. S-V-O-C
B. S-V-C
C. S-V
D. S-V-O
(Điểm: 0.4)
Question 6.
The tax rate dropped.
A. S-V-O
B. S-V
C. S-V-C
D. S-V-O-C
(Điểm: 0.4)
Question 7.
The customs officer checked the passport.
A. S-V-O
B. S-V-O-C
C. S-V-C
D. S-V
(Điểm: 0.4)
Question 8.
The schedule remains unchanged.
A. S-V
B. S-V-C
C. S-V-O
D. S-V-O-C
(Điểm: 0.4)
Question 9.
They made her team leader.
A. S-V
B. S-V-O
C. S-V-C
D. S-V-O-C
(Điểm: 0.4)
Question 10.
The data analyst exported the file.
A. S-V-O-C
B. S-V-O
C. S-V-C
D. S-V
(Điểm: 0.4)
Question 11.
The economy recovered slowly.
A. S-V
B. S-V-C
C. S-V-O
D. S-V-O-C
(Điểm: 0.4)
Question 12.
The new regulations appear strict.
A. S-V-C
B. S-V-O-C
C. S-V
D. S-V-O
(Điểm: 0.4)
Question 13.
The supervisor found the error.
A. S-V-C
B. S-V-O-C
C. S-V-O
D. S-V
(Điểm: 0.4)
Question 14.
The client considered the cost high.
A. S-V-O-C
B. S-V
C. S-V-C
D. S-V-O
(Điểm: 0.4)
Question 15.
The workers started early.
A. S-V-O
B. S-V-O-C
C. S-V
D. S-V-C
(Điểm: 0.4)
Question 16.
The accountant verified the invoice.
A. S-V-O
B. S-V-O-C
C. S-V-C
D. S-V
(Điểm: 0.4)
Question 17.
The shipment looks heavy.
A. S-V-C
B. S-V-O-C
C. S-V-O
D. S-V
(Điểm: 0.4)
Question 18.
The director named him lead engineer.
A. S-V-O-C
B. S-V-O
C. S-V
D. S-V-C
(Điểm: 0.4)
Question 19.
The market crashed suddenly.
A. S-V-O-C
B. S-V-O
C. S-V-C
D. S-V
(Điểm: 0.4)
Question 20.
The system processed the data.
A. S-V-C
B. S-V-O
C. S-V
D. S-V-O-C
(Điểm: 0.4)
Question 21.
The delivery proved difficult.
A. S-V-O
B. S-V-O-C
C. S-V
D. S-V-C
(Điểm: 0.4)
Question 22.
The board kept the strategy secret.
A. S-V-O-C
B. S-V
C. S-V-O
D. S-V-C
(Điểm: 0.4)
Question 23.
The import duties increased.
A. S-V-O
B. S-V-C
C. S-V-O-C
D. S-V
(Điểm: 0.4)
Question 24.
The investors reviewed the portfolio.
A. S-V-O-C
B. S-V-O
C. S-V
D. S-V-C
(Điểm: 0.4)
Question 25.
The project became successful.
A. S-V-C
B. S-V-O-C
C. S-V-O
D. S-V
(Điểm: 0.4)`;

const questions = [];
const blocks = rawText.split(/Question \d+\./).filter(Boolean);

let startId = 511; // continue after previous IDs

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
