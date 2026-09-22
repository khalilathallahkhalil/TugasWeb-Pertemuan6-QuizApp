const quizData = {
  js: {
    title: "JavaScript",
    questions: [
      {
        question: "Keyword JavaScript ES6 manakah yang digunakan untuk mendeklarasikan variabel bernilai konstan?",
        options: ["var", "let", "const", "static"],
        answer: 2
      },
      {
        question: "Metode Array manakah yang digunakan untuk menambahkan elemen baru di posisi paling akhir?",
        options: ["push()", "pop()", "unshift()", "shift()"],
        answer: 0
      },
      {
        question: "Property DOM mana yang paling aman digunakan untuk menampilkan teks guna mencegah ancaman XSS?",
        options: ["innerHTML", "outerHTML", "textContent", "document.write"],
        answer: 2
      },
      {
        question: "Fitur Web Storage browser mana yang menyimpan data secara permanen tanpa batas waktu kadaluarsa?",
        options: ["SessionStorage", "LocalStorage", "Cookies", "IndexedDB"],
        answer: 1
      },
      {
        question: "Teknik JavaScript apa yang memanfaatkan event listener pada induk untuk menangani event elemen anak?",
        options: ["Event Bubbling", "Event Delegation", "Event Capturing", "Event Handling"],
        answer: 1
      },
      {
        question: "Apakah hasil kembalian dari ekspresi `typeof []` di JavaScript?",
        options: ["'array'", "'object'", "'list'", "'undefined'"],
        answer: 1
      },
      {
        question: "Method JavaScript manakah yang digunakan untuk mengubah objek JS menjadi string JSON?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toString()"],
        answer: 1
      },
      {
        question: "Manakah penulisan Arrow Function yang benar di ES6?",
        options: ["const fn = () => {}", "function fn() => {}", "const fn = function() => {}", "def fn():"],
        answer: 0
      },
      {
        question: "Method Array manakah yang menghasilkan array baru berdasarkan transformasi setiap elemennya?",
        options: ["forEach()", "filter()", "map()", "reduce()"],
        answer: 2
      },
      {
        question: "Operator mana yang melakukan perbandingan nilai sekaligus tipe data secara ketat (strict equality)?",
        options: ["==", "=", "===", "!="],
        answer: 2
      }
    ]
  },
  java: {
    title: "Java",
    questions: [
      {
        question: "Keyword apa yang digunakan di Java untuk melakukan pewarisan (inheritance) antar kelas?",
        options: ["implements", "extends", "inherits", "super"],
        answer: 1
      },
      {
        question: "Manakah tipe data primitif di Java yang digunakan untuk menyimpan nilai desimal presisi tunggal?",
        options: ["float", "double", "int", "boolean"],
        answer: 0
      },
      {
        question: "Method utama yang akan dieksekusi pertama kali saat program Java dijalankan adalah...",
        options: ["public static void main(String[] args)", "public void main(String args)", "static main(String[] args)", "public static void start()"],
        answer: 0
      },
      {
        question: "Package bawaan Java manakah yang berisi struktur data koleksi seperti ArrayList dan HashMap?",
        options: ["java.util", "java.io", "java.net", "java.sql"],
        answer: 0
      },
      {
        question: "Exception apakah yang akan dilempar saat program mencoba membagi bilangan bulat dengan nilai nol?",
        options: ["NullPointerException", "ArithmeticException", "ArrayIndexOutOfBoundsException", "ClassCastException"],
        answer: 1
      },
      {
        question: "Fitur Java 14+ manakah yang digunakan untuk membuat kelas pemegang data imutabel secara ringkas?",
        options: ["Interface", "Record", "Enum", "Abstract Class"],
        answer: 1
      },
      {
        question: "Interface bawaan Java manakah yang digunakan untuk mengelola koneksi database via JDBC?",
        options: ["java.sql.Connection", "java.sql.Database", "java.sql.Driver", "java.sql.Session"],
        answer: 0
      },
      {
        question: "Keyword apakah yang digunakan di dalam method untuk melempar instance exception secara eksplisit?",
        options: ["throws", "throw", "try", "catch"],
        answer: 1
      },
      {
        question: "Pilar OOP manakah yang berfokus pada menyembunyikan detail implementasi internal kelas?",
        options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
        answer: 1
      },
      {
        question: "Modifier akses manakah yang membuat atribut hanya dapat diakses dari dalam kelas yang sama?",
        options: ["public", "protected", "private", "default"],
        answer: 2
      }
    ]
  },
  python: {
    title: "Python",
    questions: [
      {
        question: "Keyword apakah yang digunakan untuk mendefinisikan sebuah fungsi di Python?",
        options: ["function", "def", "func", "define"],
        answer: 1
      },
      {
        question: "Metode List manakah yang digunakan untuk menambahkan elemen baru ke posisi paling akhir di Python?",
        options: ["append()", "add()", "push()", "insert()"],
        answer: 0
      },
      {
        question: "Elemen sintaksis apa yang digunakan Python untuk menentukan lingkup (block scope) kode sebagai pengganti kurung kurawal `{}`?",
        options: ["Titik Koma ( ; )", "Indentasi (Spasi/Tab)", "Kurung Siku [ ]", "Komentar"],
        answer: 1
      },
      {
        question: "Tipe data koleksi apakah di Python yang menyimpan pasangan key-value?",
        options: ["List", "Tuple", "Set", "Dictionary"],
        answer: 3
      },
      {
        question: "Karakter manakah yang digunakan untuk menulis komentar satu baris di Python?",
        options: ["//", "/*", "#", "--"],
        answer: 2
      },
      {
        question: "Fungsi bawaan Python manakah yang digunakan untuk mengukur jumlah elemen pada objek koleksi?",
        options: ["size()", "length()", "len()", "count()"],
        answer: 2
      },
      {
        question: "Blok penanganan error (exception handling) standar di Python menggunakan kombinasi...",
        options: ["try - catch", "try - except", "do - catch", "try - finally"],
        answer: 1
      },
      {
        question: "Manakah tipe data koleksi di Python yang bersifat imutabel (nilainya tidak bisa diubah setelah dibuat)?",
        options: ["List", "Dictionary", "Tuple", "Set"],
        answer: 2
      },
      {
        question: "Method khusus manakah di dalam Class Python yang berfungsi sebagai konstruktor saat instansiasi objek?",
        options: ["__init__()", "__construct__()", "__main__()", "__new__()"],
        answer: 0
      },
      {
        question: "Statement apakah yang digunakan untuk mengimpor modul atau pustaka eksternal ke dalam skrip Python?",
        options: ["include", "import", "require", "using"],
        answer: 1
      }
    ]
  }
};

const screens = {
  start: document.getElementById('start-screen'),
  quiz: document.getElementById('quiz-screen'),
  result: document.getElementById('result-screen')
};

const startForm = document.getElementById('start-form');
const usernameInput = document.getElementById('username-input');
const categorySelect = document.getElementById('category-select');
const restartBtn = document.getElementById('restart-btn');
const nextBtn = document.getElementById('next-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

const questionTracker = document.getElementById('question-tracker');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const resName = document.getElementById('res-name');
const resMateri = document.getElementById('res-materi');
const resCorrect = document.getElementById('res-correct');
const resWrong = document.getElementById('res-wrong');
const resScore = document.getElementById('res-score');
const startHighScoreEl = document.getElementById('start-high-score');
const highScoreMsg = document.getElementById('high-score-msg');

let currentUser = "";
let currentCategoryKey = "js";
let currentQuestions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let selectedOptionIndex = null;

const showScreen = (screenName) => {
  Object.keys(screens).forEach((key) => {
    screens[key].classList.toggle('active', key === screenName);
  });
};

const getHighScore = () => parseInt(localStorage.getItem('quiz_high_score')) || 0;

const updateHighScoreDisplay = () => {
  startHighScoreEl.textContent = getHighScore();
};

const startQuiz = (e) => {
  e.preventDefault();

  currentUser = usernameInput.value.trim();
  currentCategoryKey = categorySelect.value;
  currentQuestions = quizData[currentCategoryKey].questions;

  if (!currentUser) return;

  currentQuestionIndex = 0;
  correctCount = 0;
  wrongCount = 0;

  showScreen('quiz');
  loadQuestion();
};

const loadQuestion = () => {
  selectedOptionIndex = null;
  nextBtn.classList.add('hidden');

  const currentQ = currentQuestions[currentQuestionIndex];

  questionTracker.textContent = `Soal ${currentQuestionIndex + 1} dari ${currentQuestions.length}`;
  const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;

  questionText.textContent = currentQ.question;

  optionsContainer.textContent = '';
  currentQ.options.forEach((optionText, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = optionText;
    btn.dataset.index = index;
    optionsContainer.appendChild(btn);
  });
};

const handleOptionSelect = (event) => {
  const clickedBtn = event.target.closest('.option-btn');
  if (!clickedBtn || selectedOptionIndex !== null) return;

  selectedOptionIndex = parseInt(clickedBtn.dataset.index);
  const currentQ = currentQuestions[currentQuestionIndex];
  const allOptionBtns = optionsContainer.querySelectorAll('.option-btn');

  allOptionBtns.forEach((btn, index) => {
    btn.disabled = true;
    if (index === currentQ.answer) {
      btn.classList.add('correct');
    }
  });

  if (selectedOptionIndex === currentQ.answer) {
    correctCount++;
  } else {
    clickedBtn.classList.add('wrong');
    wrongCount++;
  }

  nextBtn.classList.remove('hidden');
};

const handleNextQuestion = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

const showResult = () => {
  showScreen('result');

  const totalQuestions = currentQuestions.length;
  const finalScore = Math.round((correctCount / totalQuestions) * 100);

  resName.textContent = currentUser;
  resMateri.textContent = quizData[currentCategoryKey].title;
  resCorrect.textContent = correctCount;
  resWrong.textContent = wrongCount;
  resScore.textContent = finalScore;

  const currentHighScore = getHighScore();
  if (finalScore > currentHighScore) {
    localStorage.setItem('quiz_high_score', finalScore);
    highScoreMsg.textContent = 'Selamat! Anda mencetak Rekor Skor Tertinggi baru!';
  } else {
    highScoreMsg.textContent = `Skor Tertinggi saat ini: ${currentHighScore}`;
  }
};

const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
  themeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? '🪼' : '🐟';
};

startForm.addEventListener('submit', startQuiz);
restartBtn.addEventListener('click', () => {
  updateHighScoreDisplay();
  showScreen('start');
});
nextBtn.addEventListener('click', handleNextQuestion);
optionsContainer.addEventListener('click', handleOptionSelect);
themeToggleBtn.addEventListener('click', toggleDarkMode);

updateHighScoreDisplay();