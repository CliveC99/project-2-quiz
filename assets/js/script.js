let startButton = document.getElementById("start-btn");
let questionArea = document.getElementById("question-area");
let questionSpace = document.getElementById("question");
let answer = document.getElementById("answer-buttons");
let rules = document.getElementById("rules-info");
let rulesButton = document.getElementById("rules-btn");
let nextButton = document.getElementById("next-btn");


let shuffleQuestions, currentQuestion;

startButton.addEventListener("click", startQuiz);
rulesButton.addEventListener("click", rulesInfo);
nextButton.addEventListener("click", nextQuestion);



function startQuiz() {
    startButton.classList.add("hide");
    questionArea.classList.remove("hide");
    shuffleQuestions = listOfQuestions.sort(() => Math.random() - ".5");
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
  showQuestion(shuffleQuestions[currentQuestion]);
}

function showQuestion(question) {
  questionSpace.innerText = question.question;
}

function selectAnswer() {

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
  }
]
