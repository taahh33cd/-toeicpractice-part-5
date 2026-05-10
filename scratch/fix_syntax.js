const fs = require('fs');
let data = fs.readFileSync('data/questions.js', 'utf8');
data = data.replace(/,\\n/g, ',\n');
data = data.replace(/\\n\];/g, '\n];');
fs.writeFileSync('data/questions.js', data);
console.log('Fixed file');
