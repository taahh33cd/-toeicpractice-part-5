const fs = require('fs');
const content = fs.readFileSync('c:/Users/tsdie/.gemini/antigravity/scratch/toeic-part5-app/data/questions.js', 'utf8');
const questionsDataMatch = content.match(/window\.questionsData\s*=\s*(\[[\s\S]*?\]);/);
if (questionsDataMatch) {
  const questions = eval(questionsDataMatch[1]);
  const comparisonQuestions = questions.filter(q => q.grammar_type === 'So sánh');
  console.log(`Current 'So sánh' count: ${comparisonQuestions.length}`);
  if (comparisonQuestions.length > 0) {
    console.log(`Last 'So sánh' ID: ${comparisonQuestions[comparisonQuestions.length - 1].id}`);
  }
}
