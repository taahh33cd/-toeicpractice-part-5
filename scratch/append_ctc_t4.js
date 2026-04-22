const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const qaMapping = {
  1: { ans: "C", reason: "Chủ ngữ 'The CEO' + Động từ 'approved' + Tân ngữ 'the budget'." },
  2: { ans: "A", reason: "Chủ ngữ 'The supplier' + Động từ 'called'. 'yesterday' là trạng từ chỉ thời gian." },
  3: { ans: "B", reason: "Chủ ngữ 'The new office' + Động từ nối 'looks' + Bổ ngữ 'spacious'." },
  4: { ans: "B", reason: "Chủ ngữ 'The committee' + Động từ 'made' + Tân ngữ 'him' + Bổ ngữ tân ngữ 'chairman'." },
  5: { ans: "B", reason: "Chủ ngữ 'The goods' + Động từ 'shipped'. 'quickly' là trạng từ." },
  6: { ans: "D", reason: "Chủ ngữ 'The receptionist' + Động từ 'answered' + Tân ngữ 'the phone'." },
  7: { ans: "D", reason: "Chủ ngữ 'The financial report' + Động từ nối 'is' + Bổ ngữ 'accurate'." },
  8: { ans: "D", reason: "Chủ ngữ 'The training' + Động từ 'made' + Tân ngữ 'the staff' + Bổ ngữ tân ngữ 'confident'." },
  9: { ans: "D", reason: "Chủ ngữ 'We' + Động từ 'signed' + Tân ngữ 'the contract'." },
  10: { ans: "C", reason: "Chủ ngữ 'The system' + Động từ 'crashed'. 'suddenly' là trạng từ." },
  11: { ans: "B", reason: "Chủ ngữ 'The marketing strategy' + Động từ nối 'seems' + Bổ ngữ 'successful'." },
  12: { ans: "B", reason: "Chủ ngữ 'They' + Động từ 'appointed' + Tân ngữ 'her' + Bổ ngữ tân ngữ 'manager'." },
  13: { ans: "D", reason: "Chủ ngữ 'The client' + Động từ 'accepted' + Tân ngữ 'the offer'." },
  14: { ans: "A", reason: "Chủ ngữ 'The factory' + Động từ 'operates'. 'smoothly' là trạng từ." },
  15: { ans: "C", reason: "Chủ ngữ 'The materials' + Động từ nối 'are' + Bổ ngữ 'expensive'." },
  16: { ans: "D", reason: "Chủ ngữ 'The delay' + Động từ 'drove' + Tân ngữ 'the customer' + Bổ ngữ tân ngữ 'crazy'." },
  17: { ans: "B", reason: "Chủ ngữ 'The technician' + Động từ 'fixed' + Tân ngữ 'the computer'." },
  18: { ans: "C", reason: "Chủ ngữ 'The stock price' + Động từ 'fell'." },
  19: { ans: "C", reason: "Chủ ngữ 'The presentation' + Động từ nối 'was' + Bổ ngữ 'impressive'." },
  20: { ans: "B", reason: "Chủ ngữ 'The manager' + Động từ 'kept' + Tân ngữ 'the team' + Bổ ngữ tân ngữ 'motivated'." },
  21: { ans: "A", reason: "Chủ ngữ 'The secretary' + Động từ 'typed' + Tân ngữ 'the letter'." },
  22: { ans: "A", reason: "Chủ ngữ 'The meeting' + Động từ 'ended'. 'early' là trạng từ." },
  23: { ans: "B", reason: "Chủ ngữ 'The new rules' + Động từ nối 'sound' + Bổ ngữ 'strict'." },
  24: { ans: "D", reason: "Chủ ngữ 'They' + Động từ 'voted' + Tân ngữ 'him' + Bổ ngữ tân ngữ 'president'." },
  25: { ans: "D", reason: "Chủ ngữ 'The company' + Động từ 'bought' + Tân ngữ 'new laptops'." }
};

const rawText = `Question 1.
The CEO approved the budget.
A. S-V-C
B. S-V-O-C
C. S-V-O
D. S-V
(Điểm: 0.4)
Question 2.
The supplier called yesterday.
A. S-V
B. S-V-C
C. S-V-O-C
D. S-V-O
(Điểm: 0.4)
Question 3.
The new office looks spacious.
A. S-V
B. S-V-C
C. S-V-O
D. S-V-O-C
(Điểm: 0.4)
Question 4.
The committee made him chairman.
A. S-V
B. S-V-O-C
C. S-V-O
D. S-V-C
(Điểm: 0.4)
Question 5.
The goods shipped quickly.
A. S-V-C
B. S-V
C. S-V-O-C
D. S-V-O
(Điểm: 0.4)
Question 6.
The receptionist answered the phone.
A. S-V
B. S-V-O-C
C. S-V-C
D. S-V-O
(Điểm: 0.4)
Question 7.
The financial report is accurate.
A. S-V-O
B. S-V-O-C
C. S-V
D. S-V-C
(Điểm: 0.4)
Question 8.
The training made the staff confident.
A. S-V
B. S-V-C
C. S-V-O
D. S-V-O-C
(Điểm: 0.4)
Question 9.
We signed the contract.
A. S-V-O-C
B. S-V-C
C. S-V
D. S-V-O
(Điểm: 0.4)
Question 10.
The system crashed suddenly.
A. S-V-O-C
B. S-V-C
C. S-V
D. S-V-O
(Điểm: 0.4)
Question 11.
The marketing strategy seems successful.
A. S-V-O
B. S-V-C
C. S-V-O-C
D. S-V
(Điểm: 0.4)
Question 12.
They appointed her manager.
A. S-V-C
B. S-V-O-C
C. S-V-O
D. S-V
(Điểm: 0.4)
Question 13.
The client accepted the offer.
A. S-V-O-C
B. S-V
C. S-V-C
D. S-V-O
(Điểm: 0.4)
Question 14.
The factory operates smoothly.
A. S-V
B. S-V-C
C. S-V-O
D. S-V-O-C
(Điểm: 0.4)
Question 15.
The materials are expensive.
A. S-V-O-C
B. S-V-O
C. S-V-C
D. S-V
(Điểm: 0.4)
Question 16.
The delay drove the customer crazy.
A. S-V-C
B. S-V
C. S-V-O
D. S-V-O-C
(Điểm: 0.4)
Question 17.
The technician fixed the computer.
A. S-V-C
B. S-V-O
C. S-V
D. S-V-O-C
(Điểm: 0.4)
Question 18.
The stock price fell.
A. S-V-C
B. S-V-O-C
C. S-V
D. S-V-O
(Điểm: 0.4)
Question 19.
The presentation was impressive.
A. S-V-O-C
B. S-V-O
C. S-V-C
D. S-V
(Điểm: 0.4)
Question 20.
The manager kept the team motivated.
A. S-V-O
B. S-V-O-C
C. S-V-C
D. S-V
(Điểm: 0.4)
Question 21.
The secretary typed the letter.
A. S-V-O
B. S-V-C
C. S-V
D. S-V-O-C
(Điểm: 0.4)
Question 22.
The meeting ended early.
A. S-V
B. S-V-C
C. S-V-O-C
D. S-V-O
(Điểm: 0.4)
Question 23.
The new rules sound strict.
A. S-V-O
B. S-V-C
C. S-V-O-C
D. S-V
(Điểm: 0.4)
Question 24.
They voted him president.
A. S-V-C
B. S-V
C. S-V-O
D. S-V-O-C
(Điểm: 0.4)
Question 25.
The company bought new laptops.
A. S-V-O-C
B. S-V
C. S-V-C
D. S-V-O`;

const questions = [];
const blocks = rawText.split(/Question \d+\./).filter(Boolean);

let startId = 436; 

for (let i = 0; i < blocks.length; i++) {
  const block = blocks[i].trim();
  const qNum = i + 1;
  const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
  
  const questionText = lines[0];
  let options = {};
  
  // Extract options
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
