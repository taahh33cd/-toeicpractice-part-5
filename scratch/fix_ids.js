const fs = require('fs');
const path = require('path');

const filePath = path.resolve('data/questions.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace all id strings like "q123" with zero‑padded 4‑digit ids e.g. "q0123"
content = content.replace(/"id":\s*"q(\d{1,4})"/g, (match, p1) => {
  const padded = p1.padStart(4, '0');
  return `"id": "q${padded}"`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('IDs padded to 4 digits successfully.');
