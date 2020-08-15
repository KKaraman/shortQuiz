window.onload = function () {
  var correctCount = 0;
  var wrongCount = 0;
  var t = 0;
  var duration = 0;
  var testTakers = [
    {
      username: "",
      userScore: 0,
      testDuration: 0,
    },
  ];
  testTakers = JSON.parse(localStorage.getItem("topTenScores"));
  var quizDone = false;
  // var topTenScores= [];
  // testTakers = JSON.parse(localStorage.getItem("topTenScores"));
  // console.log(testTakers);
  
  var userInformation = { userName: "", userScore: 0, testDuration: 0 };

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

  beginQuiz();

  function beginQuiz() {
    document.querySelector(".hideNow").setAttribute("style", "display:none;");
    // console.log("test is beginning in the begin quiz function");
    displayQuestion();
    timeLeft();
  }

  function calculateDuration(x) {
    duration = 60 - x;
    if (quizDone != true) {
      // console.log("test duration is: " + duration);
    }
  }

  // console.log("number of questions: " + questionArray.length);

  function displayQuestion() {
    var answerSelected = "";
    // console.log("answerSelected before selection is: " + answerSelected);
    // console.log("t is: " + t);
    // console.log("display question function entered");
    if (t === questionArray.length || quizDone) {
      updateScoreBoard();
      // console.log(duration + " when the finishQuiz function is called");
      quizDone = true;
      finishQuiz(duration);
    } else {
      document.querySelector("#q1").textContent = questionArray[t].question;
      document.querySelector("#a1").textContent = questionArray[t].answerA;
      document.querySelector("#a2").textContent = questionArray[t].answerB;
      document.querySelector("#a3").textContent = questionArray[t].answerC;
      document.querySelector("#a4").textContent = questionArray[t].answerD;
    }
  }

  document.querySelector("#a1").addEventListener("click", function (event) {
    // console.log("clicked a1");
    answerSelected = "A";
    checkAnswer(answerSelected);
  });
  document.querySelector("#a2").addEventListener("click", function (event) {
    // console.log("clicked a2");
    answerSelected = "B";
    checkAnswer(answerSelected);
  });
  document.querySelector("#a3").addEventListener("click", function (event) {
    // console.log("clicked a3");
    answerSelected = "C";
    checkAnswer(answerSelected);
  });
  document.querySelector("#a4").addEventListener("click", function (event) {
    // console.log("clicked a4");
    answerSelected = "D";
    checkAnswer(answerSelected);
  });

  function checkAnswer(x) {
    // console.log("answer " + x + " is being checked");
    // console.log("the correct answer is " + questionArray[t].correctAnswer);
    if (x === questionArray[t].correctAnswer) {
      // console.log("answer is correct");
      correctCount++;
      // console.log("Correct count is: " + correctCount);
    } else {
      // console.log("answer is wrong");
      wrongCount++;
      // console.log("Wrong count is: " + wrongCount);
    }
    nextQuestion();
  }

  function nextQuestion() {
    t++;
    document.querySelector;
    // console.log("t is now: " + t);
    displayQuestion();
    updateProgressBar(t);
    updateScoreBoard();
  }

  function updateProgressBar(x) {
    if (x === 1) {
      // console.log("t in the update progress bar is: " + x);
      document
        .querySelector(".progress-bar")
        .setAttribute("style", "width:16.7%;");
      document.querySelector(".progress-bar").textContent = "1/6";
    }
    if (x === 2) {
      // console.log("t in the update progress bar is: " + x);
      document
        .querySelector(".progress-bar")
        .setAttribute("style", "width:33%;");
      document.querySelector(".progress-bar").textContent = "2/6";
    }
    if (x === 3) {
      // console.log("t in the update progress bar is: " + x);
      document
        .querySelector(".progress-bar")
        .setAttribute("style", "width:50%;");
      document.querySelector(".progress-bar").textContent = "3/6";
    }
    if (x === 4) {
      // console.log("t in the update progress bar is: " + x);
      document
        .querySelector(".progress-bar")
        .setAttribute("style", "width:67%;");
      document.querySelector(".progress-bar").textContent = "4/6";
    }
    if (x === 5) {
      // console.log("t in the update progress bar is: " + x);
      document
        .querySelector(".progress-bar")
        .setAttribute("style", "width:83.7%;");
      document.querySelector(".progress-bar").textContent = "5/6";
    }
    if (x === 6) {
      // console.log("t in the update progress bar is: " + x);
      document
        .querySelector(".progress-bar")
        .setAttribute("style", "width:100%;");
      document.querySelector(".progress-bar").textContent = "6/6";
    }
  }

  function timeLeft() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
      calculateDuration(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(timeInterval);
        document.querySelector("#time").innerHTML = "Test Finished";
        quizDone = true;
        if (quizDone != true) {
          // console.log("quiz is done from the timer");
          updateProgressBar(6);
          finishQuiz(duration);
        }
        return;
      }
      if (quizDone) {
        document.querySelector("#time").innerHTML = "Test Finished";
      } else {
        document.querySelector("#time").innerHTML = timeLeft + " secs";
      }
      timeLeft--;
    }, 1000);
  }

  //   setTimeout(myTimeout1, 1000)
  // function myTimeout1() {
  //   document.querySelector("#time").innerHTML = "00:01";
  // }

  function finishQuiz(x) {
    event.preventDefault();
    userInformation.userName = prompt("please enter your initials");
    userInformation.testDuration = x;
    userInformation.userScore = parseInt((correctCount / 6) * 100);
    document.querySelector("#testScore").innerHTML = userInformation.userScore;
    document.querySelector("#testTaker").innerHTML = userInformation.userName;
    document.querySelector("#testTime").innerHTML =
      userInformation.testDuration;
    document.querySelector(".hideLater").setAttribute("style", "display:none;");
    document
      .querySelector(".hideLater2")
      .setAttribute("style", "display:none;");
    document
      .querySelector(".hideLater3")
      .setAttribute("style", "display:none;");
    document
      .querySelector(".hideLater4")
      .setAttribute("style", "display:none;");
    document
      .querySelector(".hideLater5")
      .setAttribute("style", "display:none;");
    document
      .querySelector(".showLater")
      .setAttribute("style", "display:table;");
    testTakers.push(userInformation);
    // console.log(testTakers);
    // console.log(testTakers[0].userName);
    sortArray();
  }

  function updateScoreBoard() {
    userInformation.userScore = parseInt((correctCount / 6) * 100);
    document.querySelector("#testScore").innerHTML = userInformation.userScore;
  }

  function sortArray() {
    event.preventDefault();
    // console.log(testTakers);
    var filtered = [
      {
        username: "",
        userScore: 0,
        testDuration: 0,
      },
    ];
    //eliminate all null objects from the testTakers array
    filtered = testTakers.filter(function (el) {
      return el != null;
    });
    //sort the filtered array using in descending order
    filtered.sort(compare);
    function compare(a, b) {
      let comparison = 0;
      if (a.userScore > b.userScore) {
        comparison = 1;
      } else {
        comparison = -1;
      }
      return comparison * -1;
    }
    // console.log(filtered);
    topTenList(filtered);
  }

  function topTenList(filtered) {
    let topTenScores = [
      {
        username: "",
        userScore: 0,
        testDuration: 0,
      },
    ];

    console.log(filtered);
    console.log(topTenScores);
    for (let i = 0; i < 10; i++) {
      topTenScores[i] = filtered[i];
      // console.log(topTenScores[i]);
    }
    console.log(filtered);
    localStorage.setItem("topTenScores", JSON.stringify(topTenScores));
    // console.log(topTenScores);
    displayTopTen(topTenScores);
  }

  function displayTopTen(topTenScores) {
    document.querySelector("#top1userScore").innerHTML = topTenScores[0].userScore;
    document.querySelector("#top1userName").innerHTML = topTenScores[0].userName;
    document.querySelector("#top2userScore").innerHTML = topTenScores[1].userScore;
    document.querySelector("#top2userName").innerHTML = topTenScores[1].userName;
    document.querySelector("#top3userScore").innerHTML = topTenScores[2].userScore;
    document.querySelector("#top3userName").innerHTML = topTenScores[2].userName;
    document.querySelector("#top4userScore").innerHTML = topTenScores[3].userScore;
    document.querySelector("#top4userName").innerHTML = topTenScores[3].userName;
    document.querySelector("#top5userScore").innerHTML = topTenScores[4].userScore;
    document.querySelector("#top5userName").innerHTML = topTenScores[4].userName;
    document.querySelector("#top6userScore").innerHTML = topTenScores[5].userScore;
    document.querySelector("#top6userName").innerHTML = topTenScores[5].userName;
    document.querySelector("#top7userScore").innerHTML = topTenScores[6].userScore;
    document.querySelector("#top7userName").innerHTML = topTenScores[6].userName;
    document.querySelector("#top8userScore").innerHTML = topTenScores[7].userScore;
    document.querySelector("#top8userName").innerHTML = topTenScores[7].userName;
    document.querySelector("#top9userScore").innerHTML = topTenScores[8].userScore;
    document.querySelector("#top9userName").innerHTML = topTenScores[8].userName;
    document.querySelector("#top10userScore").innerHTML = topTenScores[9].userScore;
    document.querySelector("#top10userName").innerHTML = topTenScores[9].userName;
  }
}

