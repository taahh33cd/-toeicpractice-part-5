const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const qaMapping = {
  1: { ans: "B", reason: "Chủ ngữ 'The team' + Động từ 'analyzed' + Tân ngữ 'the dataset'." },
  2: { ans: "C", reason: "Chủ ngữ 'The construction' + Động từ 'stopped'. 'immediately' là trạng từ." },
  3: { ans: "B", reason: "Chủ ngữ 'The revenue growth' + Động từ nối 'appears' + Bổ ngữ 'steady'." },
  4: { ans: "A", reason: "Chủ ngữ 'The manager' + Động từ 'considered' + Tân ngữ 'the project' + Bổ ngữ tân ngữ 'complete'." },
  5: { ans: "D", reason: "Chủ ngữ 'The customs agent' + Động từ 'stamped' + Tân ngữ 'the form'." },
  6: { ans: "D", reason: "Chủ ngữ 'The inflation rate' + Động từ 'decreased'." },
  7: { ans: "D", reason: "Chủ ngữ 'The economic model' + Động từ nối 'seems' + Bổ ngữ 'flawed'." },
  8: { ans: "C", reason: "Chủ ngữ 'They' + Động từ 'appointed' + Tân ngữ 'her' + Bổ ngữ tân ngữ 'chief economist'." },
  9: { ans: "A", reason: "Chủ ngữ 'The software' + Động từ 'updated' + Tân ngữ 'the records'." },
  10: { ans: "A", reason: "Chủ ngữ 'The supply chain' + Động từ 'collapsed'." },
  11: { ans: "D", reason: "Chủ ngữ 'The safety regulations' + Động từ nối 'look' + Bổ ngữ 'rigorous'." },
  12: { ans: "C", reason: "Chủ ngữ 'The delay' + Động từ 'made' + Tân ngữ 'the investors' + Bổ ngữ tân ngữ 'nervous'." },
  13: { ans: "B", reason: "Chủ ngữ 'The analyst' + Động từ 'optimized' + Tân ngữ 'the query'." },
  14: { ans: "D", reason: "Chủ ngữ 'The application' + Động từ 'crashed'. 'unexpectedly' là trạng từ." },
  15: { ans: "B", reason: "Chủ ngữ 'The warehouse' + Động từ nối 'remains' + Bổ ngữ 'empty'." },
  16: { ans: "A", reason: "Chủ ngữ 'The board' + Động từ 'named' + Tân ngữ 'him' + Bổ ngữ tân ngữ 'lead developer'." },
  17: { ans: "D", reason: "Chủ ngữ 'The architect' + Động từ 'revised' + Tân ngữ 'the blueprint'." },
  18: { ans: "D", reason: "Chủ ngữ 'The negotiations' + Động từ 'concluded'. 'successfully' là trạng từ." },
  19: { ans: "C", reason: "Chủ ngữ 'The transport cost' + Động từ nối 'is' + Bổ ngữ 'high'." },
  20: { ans: "C", reason: "Chủ ngữ 'The team' + Động từ 'found' + Tân ngữ 'the software' + Bổ ngữ tân ngữ 'intuitive'." },
  21: { ans: "A", reason: "Chủ ngữ 'The contractor' + Động từ 'ordered' + Tân ngữ 'the materials'." },
  22: { ans: "B", reason: "Chủ ngữ 'The new factory' + Động từ 'opened'. 'today' là trạng từ." },
  23: { ans: "D", reason: "Chủ ngữ 'The financial forecast' + Động từ nối 'sounds' + Bổ ngữ 'positive'." },
  24: { ans: "B", reason: "Chủ ngữ 'She' + Động từ 'kept' + Tân ngữ 'the database' + Bổ ngữ tân ngữ 'secure'." },
  25: { ans: "B", reason: "Chủ ngữ 'The manager' + Động từ 'scheduled' + Tân ngữ 'the meeting'." }
};

const rawText = `Question 1.
The team analyzed the dataset.
A. S-V-O-C
B. S-V-O
C. S-V-C
D. S-V
Question 2.
The construction stopped immediately.
A. S-V-C
B. S-V-O-C
C. S-V
D. S-V-O
Question 3.
The revenue growth appears steady.
A. S-V-O
B. S-V-C
C. S-V-O-C
D. S-V
Question 4.
The manager considered the project complete.
A. S-V-O-C
B. S-V
C. S-V-C
D. S-V-O
Question 5.
The customs agent stamped the form.
A. S-V-C
B. S-V
C. S-V-O-C
D. S-V-O
Question 6.
The inflation rate decreased.
A. S-V-O-C
B. S-V-C
C. S-V-O
D. S-V
Question 7.
The economic model seems flawed.
A. S-V-O-C
B. S-V-O
C. S-V
D. S-V-C
Question 8.
They appointed her chief economist.
A. S-V
B. S-V-C
C. S-V-O-C
D. S-V-O
Question 9.
The software updated the records.
A. S-V-O
B. S-V-O-C
C. S-V-C
D. S-V
Question 10.
The supply chain collapsed.
A. S-V
B. S-V-C
C. S-V-O
D. S-V-O-C
Question 11.
The safety regulations look rigorous.
A. S-V-O
B. S-V-O-C
C. S-V
D. S-V-C
Question 12.
The delay made the investors nervous.
A. S-V
B. S-V-C
C. S-V-O-C
D. S-V-O
Question 13.
The analyst optimized the query.
A. S-V
B. S-V-O
C. S-V-O-C
D. S-V-C
Question 14.
The application crashed unexpectedly.
A. S-V-C
B. S-V-O-C
C. S-V-O
D. S-V
Question 15.
The warehouse remains empty.
A. S-V-O-C
B. S-V-C
C. S-V
D. S-V-O
Question 16.
The board named him lead developer.
A. S-V-O-C
B. S-V-O
C. S-V
D. S-V-C
Question 17.
The architect revised the blueprint.
A. S-V
B. S-V-O-C
C. S-V-C
D. S-V-O
Question 18.
The negotiations concluded successfully.
A. S-V-O
B. S-V-C
C. S-V-O-C
D. S-V
Question 19.
The transport cost is high.
A. S-V-O-C
B. S-V-O
C. S-V-C
D. S-V
Question 20.
The team found the software intuitive.
A. S-V
B. S-V-O
C. S-V-O-C
D. S-V-C
Question 21.
The contractor ordered the materials.
A. S-V-O
B. S-V-O-C
C. S-V
D. S-V-C
Question 22.
The new factory opened today.
A. S-V-O
B. S-V
C. S-V-C
D. S-V-O-C
Question 23.
The financial forecast sounds positive.
A. S-V-O
B. S-V
C. S-V-O-C
D. S-V-C
Question 24.
She kept the database secure.
A. S-V
B. S-V-O-C
C. S-V-O
D. S-V-C
Question 25.
The manager scheduled the meeting.
A. S-V-O-C
B. S-V-O
C. S-V
D. S-V-C`;

const questions = [];
const blocks = rawText.split(/Question \d+\./).filter(Boolean);

let startId = 536; 

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
    id: 'q0' + startId,
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

let content = fs.readFileSync(targetFile, 'utf8').trim();
// Append to the end of the array (just before the last '];')
if (content.endsWith('];')) {
  const qString = ',\n  ' + questions.map(q => JSON.stringify(q, null, 2)).join(',\n  ');
  content = content.slice(0, -2).trim(); // remove '];'
  if (content.endsWith(',')) content = content.slice(0, -1);
  content += qString + '\n];';
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log('Successfully appended 25 questions to the END of the array!');
} else {
  console.log('Could not find the end of the array ]; in the file.');
}
