const fs = require('fs');
const content = fs.readFileSync('data/questions.js', 'utf8');

// The file starts with window.questionsData = [
// We can strip it and parse it as JSON if it's clean, 
// but it's easier to just find the occurrences of grammar_type.
const matches = content.match(/"grammar_type":\s*"([^"]+)"/g);
if (matches) {
    const counts = {};
    matches.forEach(m => {
        const type = m.split(':')[1].trim().replace(/"/g, '');
        counts[type] = (counts[type] || 0) + 1;
    });
    console.log(JSON.stringify(counts, null, 2));
} else {
    console.log("No grammar_type found");
}
