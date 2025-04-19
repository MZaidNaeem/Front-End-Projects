// ? step 1:  defining quiz data
const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyper Text Markup",
      "Hyper Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following tags is used to create a hyperlink in HTML?",
    options: ["<p>", "<a>", "<h1>", "<div>"],
    correct: 1,
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    options: ["<head>", "<h6>", "<heading>", "<h1>"],
    correct: 3,
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["text-style", "font-style", "font-size", "text-size"],
    correct: 2,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correct: 1,
  },
];

// ? step 2 :
const quiz = document.querySelector(".quiz-container");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll("#queston,#option_1,#option_2,#option_3,#option_4");
const submitbtn = document.getElementById("submit-btn");
let currentQuiz = 0;
let score = 0;

// step 4 : Load Quiz Function

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];
  questionElm.innerText = question;
  options.forEach((curOpt, index) => {
    window[`option_${index + 1}`].innerText = curOpt;
  });
};

loadQuiz();

// step 4 : Get Selected Answer Function on Button click

const getSelectedOption = () => {
  let ans_index;
  answerElm.forEach((curopt, index) => {
    if (curopt.checked) {
      ans_index = index;
    }
  });
  return ans_index;
};

const deselectAnswer = () => {
  answerElm.forEach((curElm) => (curElm.checked = false));
};

submitbtn.addEventListener("click", () => {
  const SelectedOptionIndex = getSelectedOption();
  if (SelectedOptionIndex === quizData[currentQuiz].correct) {
    score += 1;
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    deselectAnswer();
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <div class="result">
    <h2> Your Score: ${score}/${quizData.length} Correct Answers </h2>
    <p> Congratulations on completing the quiz! </p>
    <button class="reload-button" onclick = "location.reload()"> play Again </button>
    </div>    
    `;
  }
});
