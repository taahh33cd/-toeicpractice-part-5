const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const qaMapping = {
  1: { ans: "C", reason: "Chủ ngữ 'The manager' + Động từ 'reviewed' + Tân ngữ 'the data'." },
  2: { ans: "C", reason: "Chủ ngữ 'The shipment' + Động từ 'arrived'. 'safely' là trạng từ bổ nghĩa cho động từ." },
  3: { ans: "D", reason: "Chủ ngữ 'The new policy' + Động từ nối 'seems' + Bổ ngữ 'effective'." },
  4: { ans: "C", reason: "Chủ ngữ 'The board' + Động từ 'appointed' + Tân ngữ 'him' + Bổ ngữ tân ngữ 'director'." },
  5: { ans: "B", reason: "Chủ ngữ 'The tax rate' + Động từ 'increased'." },
  6: { ans: "A", reason: "Chủ ngữ 'The analysts' + Động từ 'checked' + Tân ngữ 'the report'." },
  7: { ans: "D", reason: "Chủ ngữ 'The customs process' + Động từ nối 'is' + Bổ ngữ 'strict'." },
  8: { ans: "B", reason: "Chủ ngữ 'The delays' + Động từ 'made' + Tân ngữ 'the clients' + Bổ ngữ tân ngữ 'angry'." },
  9: { ans: "A", reason: "Chủ ngữ 'We' + Động từ 'ordered' + Tân ngữ 'fresh apples'." },
  10: { ans: "A", reason: "Chủ ngữ 'The logistics plan' + Động từ nối 'became' + Bổ ngữ 'complicated'." },
  11: { ans: "D", reason: "Chủ ngữ 'The warehouse' + Động từ 'opened'. 'early' là trạng từ." },
  12: { ans: "D", reason: "Chủ ngữ 'The team' + Động từ 'found' + Tân ngữ 'the system' + Bổ ngữ tân ngữ 'useful'." },
  13: { ans: "A", reason: "Chủ ngữ 'The company' + Động từ 'updated' + Tân ngữ 'the software'." },
  14: { ans: "D", reason: "Chủ ngữ 'The final results' + Động từ nối 'look' + Bổ ngữ 'promising'." },
  15: { ans: "D", reason: "Chủ ngữ 'The meeting' + Động từ 'started'. 'late' là trạng từ." },
  16: { ans: "B", reason: "Chủ ngữ 'They' + Động từ 'elected' + Tân ngữ 'the man' + Bổ ngữ tân ngữ 'president'." },
  17: { ans: "D", reason: "Chủ ngữ 'The accountant' + Động từ 'calculated' + Tân ngữ 'the costs'." },
  18: { ans: "D", reason: "Chủ ngữ 'The negotiations' + Động từ 'failed'. 'completely' là trạng từ." },
  19: { ans: "A", reason: "Chủ ngữ 'The project manager' + Động từ nối 'remains' + Bổ ngữ 'optimistic'." },
  20: { ans: "C", reason: "Chủ ngữ 'The supervisor' + Động từ 'called' + Tân ngữ 'the idea' + Bổ ngữ tân ngữ 'brilliant'." },
  21: { ans: "B", reason: "Chủ ngữ 'The workers' + Động từ 'loaded' + Tân ngữ 'the trucks'." },
  22: { ans: "A", reason: "Chủ ngữ 'The prices' + Động từ 'dropped'. 'suddenly' là trạng từ." },
  23: { ans: "B", reason: "Chủ ngữ 'The document' + Động từ nối 'appears' + Bổ ngữ 'authentic'." },
  24: { ans: "D", reason: "Chủ ngữ 'She' + Động từ 'considered' + Tân ngữ 'the task' + Bổ ngữ tân ngữ 'finished'." },
  25: { ans: "D", reason: "Chủ ngữ 'He' + Động từ 'presented' + Tân ngữ 'the new strategy'." }
};

const rawText = `Question 1.
The manager reviewed the data.
A. S-V
B. S-V-O-C
C. S-V-O
D. S-V-C
(Điểm: 0.4)
Question 2.
The shipment arrived safely.
A. S-V-O
B. S-V-C
C. S-V
D. S-V-O-C
(Điểm: 0.4)
Question 3.
The new policy seems effective.
A. S-V-O-C
B. S-V
C. S-V-O
D. S-V-C
(Điểm: 0.4)
Question 4.
The board appointed him director.
A. S-V
B. S-V-O
C. S-V-O-C
D. S-V-C
(Điểm: 0.4)
Question 5.
The tax rate increased.
A. S-V-O-C
B. S-V
C. S-V-C
D. S-V-O
(Điểm: 0.4)
Question 6.
The analysts checked the report.
A. S-V-O
B. S-V
C. S-V-C
D. S-V-O-C
(Điểm: 0.4)
Question 7.
The customs process is strict.
A. S-V-O
B. S-V-O-C
C. S-V
D. S-V-C
(Điểm: 0.4)
Question 8.
The delays made the clients angry.
A. S-V
B. S-V-O-C
C. S-V-C
D. S-V-O
(Điểm: 0.4)
Question 9.
We ordered fresh apples.
A. S-V-O
B. S-V-C
C. S-V
D. S-V-O-C
(Điểm: 0.4)
Question 10.
The logistics plan became complicated.
A. S-V-C
B. S-V-O-C
C. S-V-O
D. S-V
(Điểm: 0.4)
Question 11.
The warehouse opened early.
A. S-V-O-C
B. S-V-C
C. S-V-O
D. S-V
(Điểm: 0.4)
Question 12.
The team found the system useful.
A. S-V
B. S-V-C
C. S-V-O
D. S-V-O-C
(Điểm: 0.4)
Question 13.
The company updated the software.
A. S-V-O
B. S-V-C
C. S-V-O-C
D. S-V
(Điểm: 0.4)
Question 14.
The final results look promising.
A. S-V
B. S-V-O-C
C. S-V-O
D. S-V-C
(Điểm: 0.4)
Question 15.
The meeting started late.
A. S-V-O-C
B. S-V-O
C. S-V-C
D. S-V
(Điểm: 0.4)
Question 16.
They elected the man president.
A. S-V-O
B. S-V-O-C
C. S-V-C
D. S-V
(Điểm: 0.4)
Question 17.
The accountant calculated the costs.
A. S-V
B. S-V-O-C
C. S-V-C
D. S-V-O
(Điểm: 0.4)
Question 18.
The negotiations failed completely.
A. S-V-O
B. S-V-O-C
C. S-V-C
D. S-V
(Điểm: 0.4)
Question 19.
The project manager remains optimistic.
A. S-V-C
B. S-V-O
C. S-V-O-C
D. S-V
(Điểm: 0.4)
Question 20.
The supervisor called the idea brilliant.
A. S-V-C
B. S-V-O
C. S-V-O-C
D. S-V
(Điểm: 0.4)
Question 21.
The workers loaded the trucks.
A. S-V-C
B. S-V-O
C. S-V-O-C
D. S-V
(Điểm: 0.4)
Question 22.
The prices dropped suddenly.
A. S-V
B. S-V-C
C. S-V-O
D. S-V-O-C
(Điểm: 0.4)
Question 23.
The document appears authentic.
A. S-V-O-C
B. S-V-C
C. S-V
D. S-V-O
(Điểm: 0.4)
Question 24.
She considered the task finished.
A. S-V-C
B. S-V-O
C. S-V
D. S-V-O-C
(Điểm: 0.4)
Question 25.
He presented the new strategy.
A. S-V-C
B. S-V
C. S-V-O-C
D. S-V-O`;

const questions = [];
const blocks = rawText.split(/Question \d+\./).filter(Boolean);

let startId = 411; 

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
