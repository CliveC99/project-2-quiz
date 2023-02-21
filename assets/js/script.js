let startButton = document.getElementById("start-btn");
let question = document.getElementById("question-area");
let rules = document.getElementById("rules-info");
let rulesButton = document.getElementById("rules-btn");


startButton.addEventListener("click", startQuiz);
rulesButton.addEventListener("click", rulesInfo);



function startQuiz() {
    startButton.classList.add("hide");
    question.classList.remove("hide");
    rules.classList.add("hide");
    rulesButton.classList.add("hide");
}

function rulesInfo() {
  rulesButton.classList.add("hide");
  rules.classList.remove("hide");
  console.log("test");
}

function nextQuestion() {

}

function selectAnswer() {

}