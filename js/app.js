// Cấu hình chung
const TABS = [
  { id: 'Cấu trúc câu', name: 'Cấu trúc câu' },
  { id: '12 thì', name: '12 Thì' },
  { id: 'Hoà hợp S-V', name: 'Hoà hợp S-V' },
  { id: 'Danh từ & Đại từ', name: 'Danh từ & Đại từ' },
  { id: 'Tính từ & Trạng từ', name: 'Tính từ & Trạng từ' },
  { id: 'Giới từ', name: 'Giới từ' },
  { id: 'Liên từ', name: 'Liên từ' },
  { id: 'MĐQH', name: 'Mệnh đề quan hệ' },
  { id: 'Câu điều kiện', name: 'Câu điều kiện' },
  { id: 'So sánh', name: 'So sánh' }
];

const TEST_SIZES = {
  '12 thì': 20,
  'Cấu trúc câu': 15,
  'So sánh': 25,
  'Hoà hợp S-V': 25
};
const DEFAULT_TEST_SIZE = 20;

// Trạng thái hệ thống
let activeQuestions = [];
let userAnswers = {}; 
let currentQuestionIndex = 0;
let timerInterval = null;
let timeLeftRemaining = 0;

// Các màn hình
const screens = {
  home: document.getElementById('home-screen'),
  test: document.getElementById('test-screen'),
  review: document.getElementById('review-screen')
};

document.addEventListener('DOMContentLoaded', () => {
  initHome();

  // Event listeners
  document.getElementById('btn-random-test').addEventListener('click', startRandomTest);
  document.getElementById('prev-btn').addEventListener('click', () => navigateQuestion(-1));
  document.getElementById('next-btn').addEventListener('click', () => navigateQuestion(1));
  document.getElementById('submit-btn').addEventListener('click', askConfirmSubmit);
  
  document.getElementById('grid-toggle-btn').addEventListener('click', () => {
    const gridEl = document.getElementById('iig-grid-container');
    if (gridEl.style.display === 'none') {
      gridEl.style.display = 'block';
    } else {
      gridEl.style.display = 'none';
    }
  });

  document.getElementById('restart-btn').addEventListener('click', () => {
    switchScreen('home'); 
  });
  
  document.getElementById('close-modal').addEventListener('click', closeModal);
});

function initHome() {
  const topicsListContainer = document.getElementById('topics-list-container');
  topicsListContainer.innerHTML = '';
  
  if (!window.questionsData) return;

  TABS.forEach(tab => {
    const topicQs = window.questionsData.filter(q => q.grammar_type === tab.id);
    if(topicQs.length === 0) return;
    
    // Tạo nhóm Accordion
    const accItem = document.createElement('div');
    accItem.className = 'accordion-item';

    const numPerTest = TEST_SIZES[tab.id] || DEFAULT_TEST_SIZE;
    const numTests = Math.ceil(topicQs.length / numPerTest);

    const accHeader = document.createElement('button');
    accHeader.className = 'accordion-header';
    accHeader.innerHTML = `<span>${tab.name}</span><span class="topic-stats">${numTests} Đề (${topicQs.length} Câu)</span>`;
    
    accHeader.onclick = () => {
      document.querySelectorAll('.accordion-item').forEach(item => {
        if(item !== accItem) item.classList.remove('active');
      });
      accItem.classList.toggle('active');
    };

    const accContent = document.createElement('div');
    accContent.className = 'accordion-content';

    for(let i=0; i<numTests; i++) {
      const testQs = topicQs.slice(i * numPerTest, (i + 1) * numPerTest);
      const btnTest = document.createElement('button');
      btnTest.className = 'btn-test';
      btnTest.innerHTML = `Test ${i+1} <span>${testQs.length} câu</span>`;
      btnTest.onclick = () => startTest(testQs, `Section: Reading - Part 5 Incomplete Sentences (${tab.name} - Test ${i+1})`);
      accContent.appendChild(btnTest);
    }

    accItem.appendChild(accHeader);
    accItem.appendChild(accContent);
    topicsListContainer.appendChild(accItem);
  });
}

function startRandomTest() {
  if (!window.questionsData || window.questionsData.length === 0) return;

  let allTests = [];
  TABS.forEach(tab => {
    const topicQs = window.questionsData.filter(q => q.grammar_type === tab.id);
    if(topicQs.length === 0) return;
    const numPerTest = TEST_SIZES[tab.id] || DEFAULT_TEST_SIZE;
    const numTests = Math.ceil(topicQs.length / numPerTest);
    
    for(let i=0; i<numTests; i++) {
        allTests.push({
            questions: topicQs.slice(i * numPerTest, (i + 1) * numPerTest),
            title: `Section: Reading - Part 5 Incomplete Sentences (${tab.name} - Test ${i+1} Random)`
        });
    }
  });

  if(allTests.length > 0) {
      const rnd = allTests[Math.floor(Math.random() * allTests.length)];
      startTest(rnd.questions, rnd.title);
  }
}

function switchScreen(screenName) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[screenName].classList.add('active');
}

function startTest(testQuestions, testTitle) {
  const timeLimit = parseInt(document.getElementById('time-select').value, 10);
  
  document.getElementById('test-header-title').textContent = testTitle || "Section: Reading - Part 5 Incomplete Sentences";
  document.getElementById('iig-grid-container').style.display = 'none'; // Đóng grid mặc định
  
  activeQuestions = testQuestions;
  userAnswers = {};
  currentQuestionIndex = 0;
  
  renderGrid('test');
  renderQuestion();

  const timerSpan = document.getElementById('test-timer');
  if (timeLimit > 0) {
    timeLeftRemaining = timeLimit * 60;
    timerSpan.parentElement.style.display = 'block';
    updateTimerDisplay();
    timerInterval = setInterval(timerTick, 1000);
  } else {
    timerSpan.parentElement.style.display = 'none';
  }

  switchScreen('test');
}

function timerTick() {
  timeLeftRemaining--;
  updateTimerDisplay();

  if (timeLeftRemaining <= 0) {
    clearInterval(timerInterval);
    alert('Time has expired. Your answers will be submitted automatically.');
    processSubmitTest();
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeftRemaining / 60);
  const seconds = timeLeftRemaining % 60;
  const mm = minutes.toString().padStart(2, '0');
  const ss = seconds.toString().padStart(2, '0');
  document.getElementById('test-timer').textContent = `${mm}:${ss}`;
}

function renderGrid(mode) {
  const gridId = mode === 'test' ? 'question-grid' : 'review-grid';
  const gridEl = document.getElementById(gridId);
  gridEl.innerHTML = '';

  activeQuestions.forEach((q, index) => {
    const btn = document.createElement('button');
    btn.classList.add('iig-grid-btn');
    btn.textContent = index + 1;
    
    if (mode === 'test') {
      if (userAnswers[q.id]) btn.classList.add('answered');
      if (index === currentQuestionIndex) btn.classList.add('active');
      btn.onclick = () => jumpToQuestion(index);
    } 
    else if (mode === 'review') {
      const isCorrect = userAnswers[q.id] === q.correct_answer;
      btn.classList.add(isCorrect ? 'correct' : 'incorrect');
      btn.onclick = () => openExplanation(index);
    }
    
    gridEl.appendChild(btn);
  });
}

function updateGridClassesForTest() {
  const btns = document.getElementById('question-grid').querySelectorAll('.iig-grid-btn');
  btns.forEach((btn, idx) => {
    btn.classList.remove('active', 'answered');
    if (userAnswers[activeQuestions[idx].id]) btn.classList.add('answered');
    if (idx === currentQuestionIndex) btn.classList.add('active');
  });
}

function renderQuestion() {
  const q = activeQuestions[currentQuestionIndex];
  document.getElementById('question-number-display').textContent = `Question ${currentQuestionIndex + 1}`;
  document.getElementById('question-text').textContent = q.question;
  
  const optionsGroup = document.getElementById('options-group');
  optionsGroup.innerHTML = '';

  for (const [key, value] of Object.entries(q.options)) {
    const label = document.createElement('label');
    label.classList.add('iig-option-label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `radio_group_${q.id}`;
    input.value = key;
    if (userAnswers[q.id] === key) input.checked = true;

    input.addEventListener('change', () => {
      userAnswers[q.id] = key;
      updateGridClassesForTest();
    });
    
    const textSpan = document.createElement('span');
    textSpan.textContent = `(${key}) ${value}`;

    label.appendChild(input);
    label.appendChild(textSpan);
    optionsGroup.appendChild(label);
  }

  document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
  document.getElementById('next-btn').disabled = currentQuestionIndex === activeQuestions.length - 1;
}

function navigateQuestion(step) {
  const target = currentQuestionIndex + step;
  if (target >= 0 && target < activeQuestions.length) {
    currentQuestionIndex = target;
    renderQuestion();
  }
}

function jumpToQuestion(index) {
  currentQuestionIndex = index;
  renderQuestion();
}

function askConfirmSubmit() {
  const answeredCount = Object.keys(userAnswers).length;
  if (answeredCount < activeQuestions.length) {
    const cf = confirm(`You have answered ${answeredCount} of ${activeQuestions.length} questions. Are you sure you want to submit the exam?`);
    if (!cf) return;
  } else {
    const cf = confirm(`You have answered all questions. Click OK to submit.`);
    if (!cf) return;
  }
  processSubmitTest();
}

function processSubmitTest() {
  if(timerInterval) clearInterval(timerInterval);
  
  let correctCount = 0;
  activeQuestions.forEach(q => {
    if (userAnswers[q.id] === q.correct_answer) {
      correctCount++;
    }
  });

  document.getElementById('score-correct').textContent = correctCount;
  document.getElementById('score-total').textContent = activeQuestions.length;

  renderGrid('review');
  switchScreen('review');
}

function openExplanation(index) {
  const q = activeQuestions[index];
  const userAns = userAnswers[q.id];
  
  document.getElementById('modal-q-number').textContent = `Question ${index + 1} Details`;
  document.getElementById('modal-q-text').textContent = q.question;

  const modalOptions = document.getElementById('modal-options');
  modalOptions.innerHTML = '';

  for (const [key, value] of Object.entries(q.options)) {
    const optDiv = document.createElement('div');
    optDiv.classList.add('iig-opt-review');
    
    optDiv.textContent = `(${key}) ${value}`;

    if (key === q.correct_answer) {
      optDiv.classList.add('is-correct');
      const badge = document.createElement('span');
      badge.className = 'iig-badge';
      badge.textContent = '[ CORRECT ]';
      optDiv.appendChild(badge);
    } else if (key === userAns) {
      optDiv.classList.add('is-wrong');
      const badge = document.createElement('span');
      badge.className = 'iig-badge';
      badge.textContent = '[ YOUR ANSWER ]';
      optDiv.appendChild(badge);
    }

    modalOptions.appendChild(optDiv);
  }

  document.getElementById('modal-reason').textContent = q.explanation_reason;
  document.getElementById('modal-grammar').textContent = q.explanation_grammar;
  document.getElementById('modal-translation').textContent = q.translation;
  
  const vocabUl = document.getElementById('modal-vocabulary');
  vocabUl.innerHTML = '';
  if(q.core_vocabulary && q.core_vocabulary.length > 0) {
    q.core_vocabulary.forEach(v => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${v.word}</strong> (${v.type}): ${v.meaning}`;
      vocabUl.appendChild(li);
    });
  }

  document.getElementById('explanation-modal').classList.add('show');
}

function closeModal() {
  document.getElementById('explanation-modal').classList.remove('show');
}
