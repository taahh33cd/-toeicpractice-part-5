const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const qaMapping = {
  1: { ans: "D", reason: "Chủ ngữ 'The investors' + Động từ 'bought' + Tân ngữ 'the shares'." },
  2: { ans: "C", reason: "Chủ ngữ 'The cargo plane' + Động từ 'departed'. 'safely' là trạng từ." },
  3: { ans: "A", reason: "Chủ ngữ 'The supervisor' + Động từ nối 'seemed' + Bổ ngữ 'very busy'." },
  4: { ans: "D", reason: "Chủ ngữ 'They' + Động từ 'considered' + Tân ngữ 'the policy' + Bổ ngữ tân ngữ 'unfair'." },
  5: { ans: "D", reason: "Chủ ngữ 'The secretary' + Động từ 'answered' + Tân ngữ 'the emails'." },
  6: { ans: "C", reason: "Chủ ngữ 'The new equipment' + Động từ 'works'. 'perfectly' là trạng từ." },
  7: { ans: "B", reason: "Chủ ngữ 'The office' + Động từ nối 'remains' + Bổ ngữ 'quiet'." },
  8: { ans: "D", reason: "Chủ ngữ 'The board' + Động từ 'elected' + Tân ngữ 'her' + Bổ ngữ tân ngữ 'CEO'." },
  9: { ans: "D", reason: "Chủ ngữ 'The team' + Động từ 'achieved' + Tân ngữ 'the goal'." },
  10: { ans: "B", reason: "Chủ ngữ 'The shipping costs' + Động từ 'increased'. 'rapidly' là trạng từ." },
  11: { ans: "A", reason: "Chủ ngữ 'The proposal' + Động từ nối 'sounds' + Bổ ngữ 'very interesting'." },
  12: { ans: "A", reason: "Chủ ngữ 'The manager' + Động từ 'found' + Tân ngữ 'the report' + Bổ ngữ tân ngữ 'incomplete'." },
  13: { ans: "A", reason: "Chủ ngữ 'We' + Động từ 'signed' + Tân ngữ 'the lease agreement'." },
  14: { ans: "D", reason: "Chủ ngữ 'The power' + Động từ 'failed'. 'again' là trạng từ." },
  15: { ans: "A", reason: "Chủ ngữ 'The current situation' + Động từ nối 'appears' + Bổ ngữ 'stable'." },
  16: { ans: "A", reason: "Chủ ngữ 'The committee' + Động từ 'named' + Tân ngữ 'him' + Bổ ngữ tân ngữ 'director'." },
  17: { ans: "B", reason: "Chủ ngữ 'The department' + Động từ 'hired' + Tân ngữ 'new staff'." },
  18: { ans: "D", reason: "Chủ ngữ 'The negotiations' + Động từ 'continued'. 'peacefully' là trạng từ." },
  19: { ans: "A", reason: "Chủ ngữ 'The final decision' + Động từ nối 'was' + Bổ ngữ 'difficult'." },
  20: { ans: "B", reason: "Chủ ngữ 'The delay' + Động từ 'made' + Tân ngữ 'the passengers' + Bổ ngữ tân ngữ 'furious'." },
  21: { ans: "B", reason: "Chủ ngữ 'The accountant' + Động từ 'prepared' + Tân ngữ 'the invoices'." },
  22: { ans: "A", reason: "Chủ ngữ 'The alarm' + Động từ 'rang'. 'loudly' là trạng từ." },
  23: { ans: "B", reason: "Chủ ngữ 'The new software' + Động từ nối 'is' + Bổ ngữ 'reliable'." },
  24: { ans: "D", reason: "Chủ ngữ 'They' + Động từ 'proved' + Tân ngữ 'the theory' + Bổ ngữ tân ngữ 'wrong'." },
  25: { ans: "D", reason: "Chủ ngữ 'The workers' + Động từ 'cleaned' + Tân ngữ 'the warehouse'." }
};

const rawText = `Question 1.
The investors bought the shares.
A. S-V-O-C
B. S-V-C
C. S-V
D. S-V-O
(Điểm: 0.4)
Question 2.
The cargo plane departed safely.
A. S-V-C
B. S-V-O
C. S-V
D. S-V-O-C
(Điểm: 0.4)
Question 3.
The supervisor seemed very busy.
A. S-V-C
B. S-V-O
C. S-V
D. S-V-O-C
(Điểm: 0.4)
Question 4.
They considered the policy unfair.
A. S-V
B. S-V-O
C. S-V-C
D. S-V-O-C
(Điểm: 0.4)
Question 5.
The secretary answered the emails.
A. S-V
B. S-V-C
C. S-V-O-C
D. S-V-O
(Điểm: 0.4)
Question 6.
The new equipment works perfectly.
A. S-V-O-C
B. S-V-C
C. S-V
D. S-V-O
(Điểm: 0.4)
Question 7.
The office remains quiet today.
A. S-V
B. S-V-C
C. S-V-O-C
D. S-V-O
(Điểm: 0.4)
Question 8.
The board elected her CEO.
A. S-V
B. S-V-O
C. S-V-C
D. S-V-O-C
(Điểm: 0.4)
Question 9.
The team achieved the goal.
A. S-V-C
B. S-V
C. S-V-O-C
D. S-V-O
(Điểm: 0.4)
Question 10.
The shipping costs increased rapidly.
A. S-V-C
B. S-V
C. S-V-O-C
D. S-V-O
(Điểm: 0.4)
Question 11.
The proposal sounds very interesting.
A. S-V-C
B. S-V-O-C
C. S-V-O
D. S-V
(Điểm: 0.4)
Question 12.
The manager found the report incomplete.
A. S-V-O-C
B. S-V-O
C. S-V-C
D. S-V
(Điểm: 0.4)
Question 13.
We signed the lease agreement.
A. S-V-O
B. S-V
C. S-V-C
D. S-V-O-C
(Điểm: 0.4)
Question 14.
The power failed again.
A. S-V-C
B. S-V-O
C. S-V-O-C
D. S-V
(Điểm: 0.4)
Question 15.
The current situation appears stable.
A. S-V-C
B. S-V
C. S-V-O
D. S-V-O-C
(Điểm: 0.4)
Question 16.
The committee named him director.
A. S-V-O-C
B. S-V
C. S-V-C
D. S-V-O
(Điểm: 0.4)
Question 17.
The department hired new staff.
A. S-V
B. S-V-O
C. S-V-O-C
D. S-V-C
(Điểm: 0.4)
Question 18.
The negotiations continued peacefully.
A. S-V-O-C
B. S-V-O
C. S-V-C
D. S-V
(Điểm: 0.4)
Question 19.
The final decision was difficult.
A. S-V-C
B. S-V-O
C. S-V
D. S-V-O-C
(Điểm: 0.4)
Question 20.
The delay made the passengers furious.
A. S-V
B. S-V-O-C
C. S-V-C
D. S-V-O
(Điểm: 0.4)
Question 21.
The accountant prepared the invoices.
A. S-V-C
B. S-V-O
C. S-V-O-C
D. S-V
(Điểm: 0.4)
Question 22.
The alarm rang loudly.
A. S-V
B. S-V-C
C. S-V-O-C
D. S-V-O
(Điểm: 0.4)
Question 23.
The new software is reliable.
A. S-V-O
B. S-V-C
C. S-V-O-C
D. S-V
(Điểm: 0.4)
Question 24.
They proved the theory wrong.
A. S-V
B. S-V-O
C. S-V-C
D. S-V-O-C
(Điểm: 0.4)
Question 25.
The workers cleaned the warehouse.
A. S-V-O-C
B. S-V
C. S-V-C
D. S-V-O`;

const questions = [];
const blocks = rawText.split(/Question \d+\./).filter(Boolean);

let startId = 461; 

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
