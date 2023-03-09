
let startButton = document.getElementById("start-btn");
let questionArea = document.getElementById("question-area");
let questionSpace = document.getElementById("question");
let answerShow = document.getElementById("answer-buttons");
let rules = document.getElementById("rules-info");
let rulesButton = document.getElementById("rules-btn");
let nextButton = document.getElementById("next-btn");
let viewResults = document.getElementById("results-btn");
let resultsInfo = document.getElementById("view-results");
let restartQuiz = document.getElementById("restart-quiz");
let results = document.getElementById("view-results");
let finalScore = 0;
let enterUsername = document.getElementById("username-text");
let textUsername = document.getElementById("text-input");
let submitUsername = document.getElementById("submit-button");



let shuffleQuestions, currentQuestion;
// Start Quiz event listener
startButton.addEventListener("click", startQuiz);
//Rules Info event listener
rulesButton.addEventListener("click", rulesInfo);
// Next Button event listener
nextButton.addEventListener('click', () => {
  currentQuestion++;
  nextQuestion();
});
// Results info event listener
viewResults.addEventListener("click", viewResultsInfo);
// Restart quiz event listener (Restart the quiz to the home page)
// Help from here: https://stackoverflow.com/questions/13158786/how-to-return-to-home-page-using-javascript
restartQuiz.addEventListener("click", () => {
  window.location="./index.html";
});





/**
 * Runs when the Start button is clicked.
 * Shows the questions.
 * Shuffles the question.
 * Adds/Hides the buttons required for the quiz.
 */
function startQuiz() {
    startButton.classList.add("hide");
    questionArea.classList.remove("hide");
    shuffleQuestions = listOfQuestions.sort(() => Math.random() - '.5');
    currentQuestion = 0;
    rules.classList.add("hide");
    rulesButton.classList.add("hide");
    nextButton.classList.remove("hide");
    nextQuestion();
    resultsInfo.classList.add("hide");
    viewResults.classList.add("hide");
    enterUsername.classList.add("hide");
    textUsername.classList.add("hide");
    submitUsername.classList.add("hide");
}

/**
 * Adds/Hides the buttons required for the quiz.
 * Shows the rules info section.
 */
function rulesInfo() {
  rulesButton.classList.add("hide");
  rules.classList.remove("hide");
  enterUsername.classList.add("hide");
  textUsername.classList.add("hide");
  submitUsername.classList.add("hide");
}


/**
 * Shows the information for the results section.
 * Adds/Hides the buttons required for the quiz.
 */
function viewResultsInfo() {
  resultsInfo.classList.remove("hide");
  restartQuiz.classList.remove("hide");
  questionArea.classList.add("hide");
  viewResults.classList.add("hide");
  enterUsername.classList.add("hide");
  textUsername.classList.add("hide");
  submitUsername.classList.add("hide");
  results.innerText = `Well done! You scored: 
  ${finalScore}/10 
  
  Hit the restart button to take the quiz again.`;
}

/**
 * Adds a question counter to the quiz.
 * Removes the standared buttons from the quiz.
 */
function nextQuestion() {
  resetArea();
  showQuestion(shuffleQuestions[currentQuestion]);
  let previousQuestionNo = parseInt(document.getElementById("question-number").innerText);
  document.getElementById("question-number").innerHTML =  ++previousQuestionNo;
}

/**
 * Shows the question.
 * Allows the user to select an answer.
 * Adds/Hides the buttons required for the quiz.
 */
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
  });
} 

/**
 * Clears the previous answered question.
 * Adds/Hides the buttons required for the quiz.
 * Removes the standared buttons from the quiz.
 */
function resetArea() {
  clearStatus(document.body);
  nextButton.classList.add("hide");
  while (answerShow.firstChild) {
    answerShow.removeChild(answerShow.firstChild);
  }
}

/**
 * Check if the correct answer was selected.
 * Add a point if the user got the question right for the results section.
 * Adds/Hides the buttons required for the quiz.
 */
function selectAnswer(event) {
  let selectButton = event.target;
  let correct = selectButton.dataset.correct;
  if (correct) {
    finalScore++;
  }
  setStatusClass(document.body, correct);
  Array.from(answerShow.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });

  if (shuffleQuestions.length > currentQuestion + 1) {
    nextButton.classList.remove("hide");
  } else {
    viewResults.classList.remove("hide");
  }
}

/**
 * Turns the buttons and background colours depending on the answer selected.
 * Adds/Hides the buttons required for the quiz.
 */
function setStatusClass(element, correct) {
  clearStatus(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

/**
 * Resets the colour of the button and background for the next question.
 */
function clearStatus(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

/**
 * List of questions for the quiz.
 */
let listOfQuestions = [
  {
    question: "What county was Michael D Higgins born in?",
    answers: [
      {text: "Limerick", correct: true},
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
  },
  {
    question: "What is the capital of Ireland?",
    answers: [
      {text: "Limerick", correct: false},
      {text: "Galway", correct: false},
      {text: "Kerry", correct: false},
      {text: "Dublin", correct: true}
    ]
  },
  {
    question: "How many provinces does Ireland have?",
    answers: [
      {text: "One", correct: false},
      {text: "Two", correct: false},
      {text: "Three", correct: false},
      {text: "Four", correct: true}
    ]
  },
  {
    question: "What is the longest river in Ireland?",
    answers: [
      {text: "River Shannon", correct: true},
      {text: "River Barrow", correct: false},
      {text: "River Nore", correct: false},
      {text: "River Bann", correct: false}
    ]
  },
  {
    question: "What is Irelands tallest mountain?",
    answers: [
      {text: "Croagh Patrick", correct: false},
      {text: "Knocknapeasta", correct: false},
      {text: "Mangerton", correct: false},
      {text: "Carrauntoohil", correct: true}
    ]
  },
  {
    question: "How long is the term of an Irish President?",
    answers: [
      {text: "One Year", correct: false},
      {text: "Three Years", correct: false},
      {text: "Five Years", correct: false},
      {text: "Seven Years", correct: true}
    ]
  },
  {
    question: "The Cliffs of Mohor are in which county?",
    answers: [
      {text: "Galway", correct: false},
      {text: "Kerry", correct: false},
      {text: "Tipperary", correct: false},
      {text: "Clare", correct: true}
    ]
  },
  {
    question: "What street is The Spire on in Dublin?",
    answers: [
      {text: "Grafton Strret", correct: false},
      {text: "O'Connell Street", correct: true},
      {text: "Moore Street", correct: false},
      {text: "Dame Street", correct: false}
    ]
  }
];