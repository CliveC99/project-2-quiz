let startButton = document.getElementById("start-btn");
let questionArea = document.getElementById("question-area");
let questionSpace = document.getElementById("question");
let answerShow = document.getElementById("answer-buttons");
let rules = document.getElementById("rules-info");
let rulesButton = document.getElementById("rules-btn");
let nextButton = document.getElementById("next-btn");
let viewResults = document.getElementById("results-btn");


let shuffleQuestions, currentQuestion;

startButton.addEventListener("click", startQuiz);
rulesButton.addEventListener("click", rulesInfo);
nextButton.addEventListener('click', () => {
  currentQuestion++
  nextQuestion()
})




function startQuiz() {
    startButton.classList.add("hide");
    questionArea.classList.remove("hide");
    shuffleQuestions = listOfQuestions.sort(() => Math.random() - '.5');
    currentQuestion = 0;
    rules.classList.add("hide");
    rulesButton.classList.add("hide");
    nextButton.classList.remove("hide");
    nextQuestion();
}

function rulesInfo() {
  rulesButton.classList.add("hide");
  rules.classList.remove("hide");
}

function nextQuestion() {
  resetArea();
  showQuestion(shuffleQuestions[currentQuestion]);
}

function showQuestion(question) {
  questionSpace.innerText = question.question;
  question.answers.forEach(answer => {
    let button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerShow.appendChild(button);
  })
} 

function resetArea() {
  nextButton.classList.add("hide");
  while (answerShow.firstChild) {
    answerShow.removeChild(answerShow.firstChild);
  }
}

function selectAnswer(event) {
  let selectButton = event.target;
  let correct = selectButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerShow.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  })
  if (shuffleQuestions.length > currentQuestion + 1) {
    nextButton.classList.remove("hide");
  } else {
    viewResults.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatus(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatus(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}


let listOfQuestions = [
  {
    question: "What county was Michael D Higgins born in?",
    answers: [
      {text: "Limrick", correct: true},
      {text: "Galway", correct: false},
      {text: "Clare", correct: false},
      {text: "Sligo", correct: false}
    ]
  },
  {
    question: "What is the smallest county in Ireland?",
    answers: [
      {text: "Roscommon", correct: false},
      {text: "Offaly", correct: false},
      {text: "Meath", correct: false},
      {text: "Louth", correct: true}
    ]
  },
  {
    question: "What currency is used in Ireland?",
    answers: [
      {text: "Dollar", correct: false},
      {text: "Krone", correct: false},
      {text: "Euro", correct: true},
      {text: "Pound", correct: false}
    ]
  }
]
