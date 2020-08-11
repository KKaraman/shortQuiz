var startQuiz = document.querySelector("#quizStarter");

startQuiz.addEventListener("click", function(){
    alert("quiz begins");
});

document.querySelector("#scoreViewer").addEventListener("click", function(){
    alert("view score");
});


function beginQuiz(){
    console.log("now in the begin quiz function");
}