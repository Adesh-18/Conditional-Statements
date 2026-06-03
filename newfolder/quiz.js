// Questions Array
const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks Text Machine Language", correct: false },
      { text: "Hyper Tool Multi Language", correct: false },
    ],
  },
  {
    question: "Which language is used for styling web pages?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "Python", correct: false },
      { text: "Java", correct: false },
    ],
  },
  {
    question: "Which language makes websites interactive?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C++", correct: false },
    ],
  },
  {
    question: "What does CPU stand for?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Computer Processing Unit", correct: false },
      { text: "Central Program Unit", correct: false },
      { text: "Control Processing Unit", correct: false },
    ],
  },
  {
    question: "Which company created JavaScript?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Google", correct: false },
      { text: "Netscape", correct: true },
      { text: "Apple", correct: false },
    ],
  },
];

// Get HTML Elements
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");

const currentQuestion = document.getElementById("current-question");
const scoreText = document.getElementById("score");

const finalScore = document.getElementById("final-score");
const maxScore = document.getElementById("max-score");

const progress = document.getElementById("progress");

// Variables
let questionIndex = 0;
let score = 0;

// Start Quiz
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  questionIndex = 0;
  score = 0;

  startScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

// Show Question
function showQuestion() {
  resetAnswers();

  let currentQuiz = questions[questionIndex];

  questionText.innerText = currentQuiz.question;
  currentQuestion.innerText = questionIndex + 1;
  scoreText.innerText = score;

  // Progress Bar
  let progressPercent = (questionIndex / questions.length) * 100;

  progress.style.width = progressPercent + "%";

  // Create Answer Buttons
  currentQuiz.answers.forEach((answer) => {
    const button = document.createElement("button");

    button.innerText = answer.text;

    button.addEventListener("click", () => {
      selectAnswer(answer.correct);
    });

    answersContainer.appendChild(button);
  });
}

// Remove old answers
function resetAnswers() {
  answersContainer.innerHTML = "";
}

// Check Answer
function selectAnswer(correct) {
  if (correct) {
    score++;
  }

  questionIndex++;

  if (questionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Show Result
function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScore.innerText = score;
  maxScore.innerText = questions.length;

  progress.style.width = "100%";
}

// Restart Quiz
restartBtn.addEventListener("click", startQuiz);
