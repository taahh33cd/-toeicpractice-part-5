const fs = require('fs');
const filepath = 'C:\\\\Users\\\\tsdie\\\\.gemini\\\\antigravity\\\\scratch\\\\toeic-part5-app\\\\data\\\\questions.js';
let content = fs.readFileSync(filepath, 'utf8');

// Replace literal \n with actual newline
content = content.replace(/\\n/g, '\n');

try {
  // Let's test if we can run it like a normal JS snippet
  // It has window.questionsData = [ ... ];
  // I'll strip the assignment and parse JSON to verify.
  const jsonStr = content.replace('window.questionsData = ', '').replace(/;\\s*$/, '');
  JSON.parse(jsonStr);
  fs.writeFileSync(filepath, content);
  console.log('Fixed completely!');
} catch(e) {
  console.log('Parse error:', e);
  fs.writeFileSync(filepath, content); // Write it anyway to fix the \n
}
