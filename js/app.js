// Cấu hình chung
const TABS = [
  { id: '12 thì', name: '12 Thì' },
  { id: 'Passive Voice', name: 'Câu bị động' },
  { id: 'Prepositions', name: 'Giới từ' },
  { id: 'Conjunctions/Prepositions', name: 'Liên từ / Giới từ' }
];
const QUESTIONS_PER_TEST = 20; // Thay đổi số lượng câu hỏi mỗi test ở đây

// Trạng thái hệ thống
let currentTopicId = '12 thì';
let activeQuestions = []; // Câu hỏi của bài test hiện tại đang làm
let userAnswers = {}; // { q1: 'A', q2: 'C' }
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
  initNavbar();
  loadTopic(currentTopicId);

  // Event listeners môi trường test
  document.getElementById('prev-btn').addEventListener('click', () => navigateQuestion(-1));
  document.getElementById('next-btn').addEventListener('click', () => navigateQuestion(1));
  document.getElementById('submit-btn').addEventListener('click', askConfirmSubmit);
  
  // Event listeners review/modal
  document.getElementById('restart-btn').addEventListener('click', () => {
    switchScreen('home'); // Về home, làm lại test khác
  });
  document.getElementById('close-modal').addEventListener('click', closeModal);
  document.getElementById('explanation-modal').addEventListener('click', (e) => {
    if(e.target === document.getElementById('explanation-modal')) closeModal();
  });
});

function initNavbar() {
  const navTopics = document.getElementById('nav-topics');
  navTopics.innerHTML = '';
  
  TABS.forEach(tab => {
    const li = document.createElement('li');
    li.classList.add('nav-item');
    if (tab.id === currentTopicId) li.classList.add('active');
    li.textContent = tab.name;
    
    li.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
      li.classList.add('active');
      loadTopic(tab.id);
    });
    
    navTopics.appendChild(li);
  });
}

function loadTopic(topicId) {
  currentTopicId = topicId;
  const topicName = TABS.find(t => t.id === topicId)?.name || topicId;
  document.getElementById('current-topic-title').textContent = topicName;
  
  // Lấy các câu hỏi thuộc chuyên đề
  let questions = [];
  if (window.questionsData) {
    questions = window.questionsData.filter(q => q.grammar_type === topicId);
  }
  
  renderTestList(questions);
}

function renderTestList(questions) {
  const testsList = document.getElementById('tests-list');
  testsList.innerHTML = '';
  
  if (!questions || questions.length === 0) {
    const emptyMsg = document.createElement('div');
    emptyMsg.className = 'empty-msg';
    emptyMsg.textContent = "Chưa có dữ liệu câu hỏi cho chuyên đề này.";
    testsList.appendChild(emptyMsg);
    return;
  }
  
  const numTests = Math.ceil(questions.length / QUESTIONS_PER_TEST);
  
  for (let i = 0; i < numTests; i++) {
    const testQuestions = questions.slice(i * QUESTIONS_PER_TEST, (i + 1) * QUESTIONS_PER_TEST);
    
    const card = document.createElement('div');
    card.className = 'test-card';
    
    const title = document.createElement('h3');
    title.textContent = `Test ${i + 1}`;
    
    const info = document.createElement('div');
    info.className = 'test-info';
    info.textContent = `${testQuestions.length} câu hỏi`;
    
    const btn = document.createElement('button');
    btn.className = 'primary-btn test-start-btn';
    btn.textContent = 'Bắt đầu';
    btn.onclick = () => startTest(testQuestions);
    
    card.appendChild(title);
    card.appendChild(info);
    card.appendChild(btn);
    testsList.appendChild(card);
  }
}

function switchScreen(screenName) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[screenName].classList.add('active');
}

function startTest(testQuestions) {
  const timeLimit = parseInt(document.getElementById('time-select').value, 10);

  activeQuestions = testQuestions;
  
  // Khởi tạo state
  userAnswers = {};
  currentQuestionIndex = 0;
  
  renderGrid('test');
  renderQuestion();

  // Khởi động đồng hồ đếm ngược
  const timerLayout = document.getElementById('test-timer');
  if (timeLimit > 0) {
    timeLeftRemaining = timeLimit * 60;
    timerLayout.style.display = 'block';
    updateTimerDisplay();
    timerInterval = setInterval(timerTick, 1000);
  } else {
    timerLayout.style.display = 'none'; // Không giới hạn
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

// Khởi tạo / Render Bảng câu hỏi (Sidebar)
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
      btn.title = `Xem giải thích chi tiết câu ${index + 1}`;
      btn.onclick = () => openExplanation(index);
    }
    
    gridEl.appendChild(btn);
  });
}

// Cập nhật lại màu sắc bảng Sidebar đang thi
function updateGridClassesForTest() {
  const btns = document.getElementById('question-grid').querySelectorAll('.grid-btn');
  btns.forEach((btn, idx) => {
    btn.classList.remove('active', 'answered');
    if (userAnswers[activeQuestions[idx].id]) btn.classList.add('answered');
    if (idx === currentQuestionIndex) btn.classList.add('active');
  });
}

// Render dữ liệu câu hỏi hiện tại
function renderQuestion() {
  const q = activeQuestions[currentQuestionIndex];
  document.getElementById('question-number-display').textContent = `Question ${currentQuestionIndex + 1} of ${activeQuestions.length}`;
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

  // Điều khiển Prev/Next buttons
  document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
  document.getElementById('next-btn').disabled = currentQuestionIndex === activeQuestions.length - 1;
  updateGridClassesForTest();
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
