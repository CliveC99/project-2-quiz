let startButton = document.getElementById("start-btn");
let question = document.getElementById("question-area");
let rules = document.getElementById("rules-info");
let rulesButton = document.getElementById("rules-btn");
let nextButton = document.getElementById("next-btn")


startButton.addEventListener("click", startQuiz);
rulesButton.addEventListener("click", rulesInfo);
nextButton.addEventListener("click", nextQuestion);



function startQuiz() {
    startButton.classList.add("hide");
    question.classList.remove("hide");
    rules.classList.add("hide");
    rulesButton.classList.add("hide");
    nextButton.classList.remove("hide");
}

function rulesInfo() {
  rulesButton.classList.add("hide");
  rules.classList.remove("hide");
}

function nextQuestion() {
}

function selectAnswer() {

}