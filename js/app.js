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
  '12 thì': [20, 20, 20, 25, 25, 25, 25, 25],
  'Cấu trúc câu': [15, 15, 25, 25, 25, 25, 25, 25], // Cấu hình linh hoạt: Test 1(15), 2(15), 3(25), 4(25), 5(25), 6(25), 7(25), 8(25)
  'So sánh': [25, 25, 25],
  'Hoà hợp S-V': 25,
  'Danh từ & Đại từ': [20, 20, 20, 25, 25, 25, 25, 25],
  'Tính từ & Trạng từ': [20, 20, 20, 25, 25, 25, 25, 25],
  'Giới từ': [20, 20, 20, 25, 25, 25, 25, 25],
  'Liên từ': [20, 20, 20, 25, 25, 25, 25, 25],
  'MĐQH': [20, 20, 20, 25, 25, 25, 25, 25]
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

  // Event listeners trang chủ
  document.getElementById('btn-random-test').addEventListener('click', startRandomTest);
  
  // Event listeners môi trường test
  document.getElementById('prev-btn').addEventListener('click', () => navigateQuestion(-1));
  document.getElementById('next-btn').addEventListener('click', () => navigateQuestion(1));
  document.getElementById('submit-btn').addEventListener('click', askConfirmSubmit);
  
  // Event listeners review/modal
  document.getElementById('restart-btn').addEventListener('click', () => {
    switchScreen('home'); 
  });
  
  document.getElementById('close-modal').addEventListener('click', closeModal);
  document.getElementById('explanation-modal').addEventListener('click', (e) => {
    if(e.target === document.getElementById('explanation-modal')) closeModal();
  });
});

function getTestChunks(topicId, totalQs) {
  let config = TEST_SIZES[topicId] || DEFAULT_TEST_SIZE;
  let chunks = [];
  
  if (Array.isArray(config)) {
    chunks = config;
  } else {
    // Nếu là một số tĩnh (ví dụ: 20), thì chia đều
    const numTests = Math.ceil(totalQs / config);
    for(let i=0; i<numTests; i++) {
       chunks.push(config);
    }
  }
  return chunks;
}

function initHome() {
  const topicsListContainer = document.getElementById('topics-list-container');
  topicsListContainer.innerHTML = '';
  
  if (!window.questionsData) return;

  TABS.forEach(tab => {
    const topicQs = window.questionsData.filter(q => q.grammar_type === tab.id);
    if(topicQs.length === 0) return;
    
    // Lấy cấu hình độ lớn test
    const chunks = getTestChunks(tab.id, topicQs.length);

    // Tạo nhóm Accordion
    const accItem = document.createElement('div');
    accItem.className = 'accordion-item';

    const accHeader = document.createElement('button');
    accHeader.className = 'accordion-header';
    // Hiển thị số lượng test thực tế được tạo ra
    const validChunks = chunks.filter((c, i) => {
      const start = chunks.slice(0, i).reduce((a, b) => a + b, 0);
      return start < topicQs.length;
    });
    accHeader.innerHTML = `<span>${tab.name}</span><span class="topic-stats">${validChunks.length} Đề (${topicQs.length} Câu)</span>`;
    
    accHeader.onclick = () => {
      document.querySelectorAll('.accordion-item').forEach(item => {
        if(item !== accItem) item.classList.remove('active');
      });
      accItem.classList.toggle('active');
    };

    const accContent = document.createElement('div');
    accContent.className = 'accordion-content';

    let cursor = 0;
    for(let i = 0; i < chunks.length; i++) {
      const size = chunks[i];
      const testQs = topicQs.slice(cursor, cursor + size);
      cursor += size;
      
      if(testQs.length === 0) break; // Đã hết câu hỏi để nhét vào test

      const btnTest = document.createElement('button');
      btnTest.className = 'btn-test';
      btnTest.innerHTML = `Test ${i+1} <span>${testQs.length} câu</span>`;
      btnTest.onclick = () => startTest(testQs, `${tab.name} - Test ${i+1}`);
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
    
    const chunks = getTestChunks(tab.id, topicQs.length);
    
    let cursor = 0;
    for(let i=0; i<chunks.length; i++) {
        const size = chunks[i];
        const tQs = topicQs.slice(cursor, cursor + size);
        cursor += size;
        
        if(tQs.length === 0) break;

        allTests.push({
            questions: tQs,
            title: `${tab.name} - Test ${i+1} (Ngẫu nhiên)`
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
  
  if(document.getElementById('test-header-title')) {
    document.getElementById('test-header-title').textContent = testTitle || "TOEIC Reading - Part 5";
  }
  
  activeQuestions = testQuestions;
  userAnswers = {};
  currentQuestionIndex = 0;
  
  renderGrid('test');
  renderQuestion();

  const timerLayout = document.getElementById('test-timer');
  if (timeLimit > 0) {
    timeLeftRemaining = timeLimit * 60;
    timerLayout.style.display = 'block';
    updateTimerDisplay();
    timerInterval = setInterval(timerTick, 1000);
  } else {
    timerLayout.style.display = 'none';
  }

  switchScreen('test');
}

function timerTick() {
  timeLeftRemaining--;
  updateTimerDisplay();

  if (timeLeftRemaining <= 0) {
    clearInterval(timerInterval);
    alert('Hết giờ làm bài! Hệ thống tự động nộp bài.');
    processSubmitTest();
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeftRemaining / 60);
  const seconds = timeLeftRemaining % 60;
  const mm = minutes.toString().padStart(2, '0');
  const ss = seconds.toString().padStart(2, '0');
  const timerEl = document.getElementById('test-timer');
  
  timerEl.textContent = `${mm}:${ss}`;

  if (timeLeftRemaining <= 60 && timeLeftRemaining > 0) {
    timerEl.classList.add('warning'); // Màu cảnh báo đỏ chớp nháy
  } else {
    timerEl.classList.remove('warning');
  }
}

function renderGrid(mode) {
  const gridId = mode === 'test' ? 'question-grid' : 'review-grid';
  const gridEl = document.getElementById(gridId);
  gridEl.innerHTML = '';

  activeQuestions.forEach((q, index) => {
    const btn = document.createElement('button');
    btn.classList.add('grid-btn');
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
  const btns = document.getElementById('question-grid').querySelectorAll('.grid-btn');
  btns.forEach((btn, idx) => {
    btn.classList.remove('active', 'answered');
    if (userAnswers[activeQuestions[idx].id]) btn.classList.add('answered');
    if (idx === currentQuestionIndex) btn.classList.add('active');
  });
}

function renderQuestion() {
  const q = activeQuestions[currentQuestionIndex];
  document.getElementById('current-q-index').textContent = currentQuestionIndex + 1;
  document.getElementById('total-q-count').textContent = activeQuestions.length;
  document.getElementById('question-text').textContent = q.question;
  
  const optionsGroup = document.getElementById('options-group');
  optionsGroup.innerHTML = '';

  for (const [key, value] of Object.entries(q.options)) {
    const label = document.createElement('label');
    label.classList.add('option-label');
    if (userAnswers[q.id] === key) label.classList.add('selected');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `radio_group_${q.id}`;
    input.value = key;
    if (userAnswers[q.id] === key) input.checked = true;

    input.addEventListener('change', () => {
      userAnswers[q.id] = key;
      document.querySelectorAll('.option-label').forEach(l => l.classList.remove('selected'));
      label.classList.add('selected');
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
    const cf = confirm(`Bạn mới trả lời ${answeredCount}/${activeQuestions.length} câu. Bạn có chắc chắn muốn nộp bài ngay lúc này?`);
    if (!cf) return;
  } else {
    const cf = confirm(`Bạn đã hoàn thành đủ các câu hỏi. Bấm OK để nộp bài!`);
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
  
  document.getElementById('modal-q-number').textContent = `Question ${index + 1}`;
  document.getElementById('modal-q-text').textContent = q.question;

  const modalOptions = document.getElementById('modal-options');
  modalOptions.innerHTML = '';

  for (const [key, value] of Object.entries(q.options)) {
    const optDiv = document.createElement('div');
    optDiv.classList.add('opt-review');
    optDiv.textContent = `(${key}) ${value}`;

    if (key === q.correct_answer) {
      optDiv.classList.add('is-correct');
      const badge = document.createElement('span');
      badge.className = 'badge correct';
      badge.textContent = 'Đáp án đúng';
      optDiv.appendChild(badge);
    } else if (key === userAns) {
      optDiv.classList.add('is-wrong');
      const badge = document.createElement('span');
      badge.className = 'badge user-wrong';
      badge.textContent = 'Trả lời sai';
      optDiv.appendChild(badge);
    }

    modalOptions.appendChild(optDiv);
  }

  document.getElementById('modal-reason').textContent = q.explanation_reason;
  document.getElementById('modal-grammar').textContent = `${q.grammar_type}: ${q.explanation_grammar}`;
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
