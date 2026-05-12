const fs = require('fs');
const path = require('path');

// 1. Read the new questions
const newQsPath = path.resolve('scratch/test13_prepositions.json');
let newQs = JSON.parse(fs.readFileSync(newQsPath, 'utf8'));

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
    process.exit(1);
}

// 3. Update js/app.js (TEST_SIZES)
const appPath = path.resolve('js/app.js');
let appContent = fs.readFileSync(appPath, 'utf8');

// Match the 'Giới từ' line in TEST_SIZES
const pattern = /'Giới từ':\s*\[([\d,\s]+)\]/;
const match = appContent.match(pattern);
if (match) {
    const currentSizes = match[1].trim();
    const newSizes = currentSizes + ', 25';
    appContent = appContent.replace(pattern, `'Giới từ': [${newSizes}]`);
    fs.writeFileSync(appPath, appContent, 'utf8');
    console.log('Successfully updated TEST_SIZES for Giới từ in js/app.js');
} else {
    console.error("Could not find 'Giới từ' array in js/app.js");
    process.exit(1);
}
