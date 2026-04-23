const fs = require('fs');
const data = fs.readFileSync('c:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'utf8');
const matches = data.match(/"grammar_type":\s*"MĐQH"/g);
console.log(matches ? matches.length : 0);
