const fs = require('fs');
const path = require('path');

// 1. Read the new questions
let newQs = JSON.parse(fs.readFileSync('scratch/test12_relative_clauses.json', 'utf8'));

// Update grammar_type
newQs = newQs.map(q => {
    q.grammar_type = "MĐQH";
    return q;
});

// 2. Update data/questions.js
const questionsPath = path.resolve('data/questions.js');
let questionsContent = fs.readFileSync(questionsPath, 'utf8');

const lastBracketIndex = questionsContent.lastIndexOf('];');
if (lastBracketIndex !== -1) {
    const formattedNewQs = ',\n' + newQs.map(q => '  ' + JSON.stringify(q, null, 2).replace(/\n/g, '\n  ')).join(',\n');
    questionsContent = questionsContent.substring(0, lastBracketIndex) + formattedNewQs + '\n];\n';
    fs.writeFileSync(questionsPath, questionsContent, 'utf8');
    console.log(`Successfully added ${newQs.length} questions to data/questions.js`);
} else {
    console.error("Could not find '];' in data/questions.js");
}

// 3. Update js/app.js (TEST_SIZES)
const appPath = path.resolve('js/app.js');
let appContent = fs.readFileSync(appPath, 'utf8');

const pattern = /'MĐQH':\s*\[([\d,\s]+)\]/;
const match = appContent.match(pattern);
if (match) {
    const currentSizes = match[1].trim();
    const newSizes = currentSizes + ', 25';
    appContent = appContent.replace(pattern, `'MĐQH': [${newSizes}]`);
    fs.writeFileSync(appPath, appContent, 'utf8');
    console.log('Successfully updated TEST_SIZES in js/app.js');
} else {
    console.error("Could not find 'MĐQH' array in js/app.js");
}
