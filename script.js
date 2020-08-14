var correctCount = 0;
var wrongCount = 0;
var t = 0;

var userInformation = { userName: "", userScore: "" };

var questionArray = [
  {
    question:
      "Where is an acceptable place to insert the <script> for JavaScript?",
    answerA: "in the <head> section",
    answerB: "in the <body> section",
    answerC: "in the <body> or the <head> sections",
    answerD: "none of the above",
    correctAnswer: "C",
  },
  {
    question: "what does window.close() function do in Javascript?",
    answerA: "It closes the function",
    answerB: "It closes the window",
    answerC: "It closes window inside the ()",
    answerD: "none of the above",
    correctAnswer: "B",
  },
  {
    question: "What is the difference between let and var?",
    answerA: "var is function scoped and let is block scoped",
    answerB: "let is function scoped and var is block scoped",
    answerC: "var cannot be used inside functions, let can be",
    answerD: "none of the above",
    correctAnswer: "A",
  },
  {
    question: "What is const used for in JavaScript?",
    answerA: "It is no different than let and var",
    answerB: "It can be used and is mutable",
    answerC: "It can only be used in the <body>",
    answerD: "It is used to create ummutable variable.",
    correctAnswer: "D",
  },
  {
    question: "What is a good description of event bubbling?",
    answerA: "It is the part of the code with the most code",
    answerB: "It is the part of the code with the least code",
    answerC:
      "It is when an event gets handled by the innermost element and the propagated to the outer.",
    answerD: "none of the above",
    correctAnswer: "C",
  },
  {
    question: "What is NOT an acceptable comparison operator in JavaScript",
    answerA: "==",
    answerB: "===",
    answerC: "!=",
    answerD: "none of the above",
    correctAnswer: "D",
  },
];

document
  .querySelector("#quizStarter")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("quiz starter is clicked");
    window.open("beginQuiz.html");
    beginQuiz();
  });

function beginQuiz() {
  console.log("test is beginning in the begin quiz function");
  displayQuestion();
  timeLeft();
}

console.log("number of questions: " + questionArray.length);

function displayQuestion() {
  var answerSelected = "";
  console.log("answerSelected before selection is: " + answerSelected);
  console.log("t is: " + t);
  console.log("display question function entered");
  if (t === questionArray.length) {
    finishQuiz();
  } else {
    document.querySelector("#q1").textContent = questionArray[t].question;
    document.querySelector("#a1").textContent = questionArray[t].answerA;
    document.querySelector("#a2").textContent = questionArray[t].answerB;
    document.querySelector("#a3").textContent = questionArray[t].answerC;
    document.querySelector("#a4").textContent = questionArray[t].answerD;
  }
}

document.querySelector("#a1").addEventListener("click", function (event) {
  console.log("clicked a1");
  answerSelected = "A";
  checkAnswer(answerSelected);
});
document.querySelector("#a2").addEventListener("click", function (event) {
  console.log("clicked a2");
  answerSelected = "B";
  checkAnswer(answerSelected);
});
document.querySelector("#a3").addEventListener("click", function (event) {
  console.log("clicked a3");
  answerSelected = "C";
  checkAnswer(answerSelected);
});
document.querySelector("#a4").addEventListener("click", function (event) {
  console.log("clicked a4");
  answerSelected = "D";
  checkAnswer(answerSelected);
});

function checkAnswer(x) {
  console.log("answer " + x + " is being checked");
  console.log("the correct answer is " + questionArray[t].correctAnswer);
  if (x === questionArray[t].correctAnswer) {
    console.log("answer is correct");
    correctCount++;
    console.log("Correct count is: " + correctCount);
  } else {
    console.log("answer is wrong");
    wrongCount++;
    console.log("Wrong count is: " + wrongCount);
  }
  nextQuestion();
}

function nextQuestion() {
  t++;
  document.querySelector;
  console.log("t is now: " + t);
  displayQuestion();
  updateProgressBar(t);
}

function updateProgressBar(x) {
  if (x === 1) {
    console.log("t in the update progress bar is: " + x);
    document
      .querySelector(".progress-bar")
      .setAttribute("style", "width:16.7%;");
    document.querySelector(".progress-bar").textContent = "1/6";
  }
  if (x === 2) {
    console.log("t in the update progress bar is: " + x);
    document.querySelector(".progress-bar").setAttribute("style", "width:33%;");
    document.querySelector(".progress-bar").textContent = "2/6";
  }
  if (x === 3) {
    console.log("t in the update progress bar is: " + x);
    document.querySelector(".progress-bar").setAttribute("style", "width:50%;");
    document.querySelector(".progress-bar").textContent = "3/6";
  }
  if (x === 4) {
    console.log("t in the update progress bar is: " + x);
    document.querySelector(".progress-bar").setAttribute("style", "width:67%;");
    document.querySelector(".progress-bar").textContent = "4/6";
  }
  if (x === 5) {
    console.log("t in the update progress bar is: " + x);
    document
      .querySelector(".progress-bar")
      .setAttribute("style", "width:83.7%;");
    document.querySelector(".progress-bar").textContent = "5/6";
  }
  if (x === 6) {
    console.log("t in the update progress bar is: " + x);
    document
      .querySelector(".progress-bar")
      .setAttribute("style", "width:100%;");
    document.querySelector(".progress-bar").textContent = "6/6";
  }
}

function timeLeft() {
  var timeLeft = 30;
  var timeInterval = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      document.querySelector("#time").innerHTML = "Time Expired";
      updateProgressBar(6);
      finishQuiz();
      return;
    }
    document.querySelector("#time").innerHTML = timeLeft + " secs";
    timeLeft--;
  }, 1000);
}

//   setTimeout(myTimeout1, 1000)
// function myTimeout1() {
//   document.querySelector("#time").innerHTML = "00:01";
// }

function finishQuiz() {
  let score = parseInt((correctCount / 6) * 100);
  // userInformation.userScore = score + "%";
  // alert("something");
  // document.querySelector("#testScore").innerHTML = userInformation.userScore;
  // document.querySelector("#testTaker").innerHTML = userInformation.userName;
  document.querySelector("#time").innerHTML = "All done :)";
  alert(score);
  console.log("Well Done, you are all finished");
  window.close();
  window.open("index.html");
}
