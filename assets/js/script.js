var wordBlank = document.querySelector(".word-blanks");
var finalword = document.querySelector(".adding");
var highscore = document.querySelector(".score");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var answerButton1 = document.querySelector(".Q1");
var answerButton2 = document.querySelector(".Q2");
var answerButton3 = document.querySelector(".Q3");
var answerButton4 = document.querySelector(".Q4");
var answerButton5 = document.querySelector(".Q5");

var correctans = document.querySelector(".right1");
var correctans2 = document.querySelector(".right2");
var correctans3 = document.querySelector(".right3");
var correctans4 = document.querySelector(".right4");
var correctans5 = document.querySelector(".right5");

var reset115 = document.querySelector(".reset");
var sub = document.querySelector(".submit");

var timer;
var timerCount;
var score = 0;

// Arrays used to create blanks and letters on screen
var topstatement = [];

// Array of words the user will guess
var old = ["Quiz questions will appear here"];
var Q1 = ["Commonly used data types DO Not Include:"];
var Q2 = ["The condition in an if/else statement is enclosed with_____."];
var Q3 = ["Arrays in JavaScript can be used to store ______."];
var Q4 = [
  "String values must be enclosed within ____ when being assigned to variables",
];
var Q5 = [
  "A very useful tool used during development and debuggin for printing content to the debugger is",
];
var empty = [];
var End = ["Thanks for Playing !"];

// The startGame function is called when the start button is clicked
function startGame() {
  
  timerCount = 76;
  questionstart();
  startTimer();
  //Hides the Intro Texts ------------------------------------------
  var hide = document.getElementById("hide");
  if (hide.style.display === "none") {
    hide.style.display = "block";
  } else {
    hide.style.display = "none";
  }
  //Hides Start Button------------------------------------------------
  var hide2 = document.getElementById("hide2");
  if (hide2.style.display === "none") {
    hide2.style.display = "block";
  } else {
    hide2.style.display = "none";
  }
  //Shows the first set of answers--------------------------------------
  showQ1();
}

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
    
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
    }
  }, 1000);
}

//function to show the answers -----------------------
function showQ1() {
  var showing = document.getElementById("Question1");
  showing.style.display = "inline";
}

function showQ2() {
  var showing = document.getElementById("Question2");
  showing.style.display = "inline";
}

function showQ3() {
  var showing = document.getElementById("Question3");
  showing.style.display = "inline";
}

function showQ4() {
  var showing = document.getElementById("Question4");
  showing.style.display = "inline";
}

function showQ5() {
  var showing = document.getElementById("Question5");
  showing.style.display = "inline";
}

function showQ6() {
  var showing = document.getElementById("Ending");
  showing.style.display = "inline";
}

//function to get rid of the answers--------------------
function showQdisappear1() {
  var showing = document.getElementById("Question1");
  showing.style.display = "none";
}

function showQdisappear2() {
  var showing = document.getElementById("Question2");
  showing.style.display = "none";
}

function showQdisappear3() {
  var showing = document.getElementById("Question3");
  showing.style.display = "none";
}

function showQdisappear4() {
  var showing = document.getElementById("Question4");
  showing.style.display = "none";
}

function showQdisappear5() {
  var showing = document.getElementById("Question5");
  showing.style.display = "none";
}

function showQdisappear6() {
  var showing = document.getElementById("Ending");
  showing.style.display = "none";
}

// Start of the game First Question----------------------------------
function questionstart() {
  topstatement = [Q1];
  // writes question to the screen
  wordBlank.textContent = topstatement;
}

// Second Question-----------------------------------------------------
answerButton1.addEventListener("click", function (event) {
  topstatement = [Q2];
  showQdisappear1();
  showQ2();

  timerCount = timerCount - 10;
  // writes question to the screen
  wordBlank.textContent = topstatement;
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
});
//----------------------------------------------------------------------
// Third Question-----------------------------------------------------
answerButton2.addEventListener("click", function (event) {
  topstatement = [Q3];
  showQdisappear2();
  showQ3();
  timerCount = timerCount - 10;
  // writes question to the screen
  wordBlank.textContent = topstatement;
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
});
//----------------------------------------------------------------------

// fourth Question-----------------------------------------------------
answerButton3.addEventListener("click", function (event) {
  topstatement = [Q4];
  showQdisappear3();
  showQ4();
  timerCount = timerCount - 10;
  // writes question to the screen
  wordBlank.textContent = topstatement;
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
});

// fifth Question-----------------------------------------------------
answerButton4.addEventListener("click", function (event) {
  topstatement = [Q5];
  showQdisappear4();
  showQ5();
  timerCount = timerCount - 10;
  // writes question to the screen
  wordBlank.textContent = topstatement;
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
});

// Ending Question-----------------------------------------------------
answerButton5.addEventListener("click", function (event) {
  finalscore = score * 20;
  topstatement = [empty];
  showQdisappear5();
  showQ6();
  timerCount = timerCount - 10;
  // writes question to the screen
  wordBlank.textContent = topstatement;
  finalword.textContent = "Your final score is " + [finalscore];
  // If the count is zero, exit function
  clearInterval(timer);
  timerCount = 0;
  timerElement.textContent = timerCount;
});

//Checking the score----------------------------------------------------
correctans.addEventListener("click", function (event) {
  score++;
  timerCount = timerCount + 10;
});

correctans2.addEventListener("click", function (event) {
  score++;
  timerCount = timerCount + 10;
});

correctans3.addEventListener("click", function (event) {
  score++;
  timerCount = timerCount + 10;
});

correctans4.addEventListener("click", function (event) {
  score++;
  timerCount = timerCount + 10;
});

correctans5.addEventListener("click", function (event) {
  score++;
  timerCount = timerCount + 10;
});
//--------------------------------------------------------------------------

reset115.addEventListener("click", function (event) {
  topstatement = [old];
  wordBlank.textContent = topstatement;
  showQdisappear6();
  //Hides Start Button------------------------------------------------
  var hide2 = document.getElementById("hide2");
  if (hide2.style.display === "none") {
    hide2.style.display = "inline";
  } else {
    hide2.style.display = "none";
  }

  //Hides the Intro Texts ------------------------------------------
  var hide = document.getElementById("hide");
  if (hide.style.display === "none") {
    hide.style.display = "block";
  } else {
    hide.style.display = "none";
  }

  score = 0;
});
//--------------------------------------------------------------------


var initials = document.querySelector("#userInput");

sub.addEventListener("click", function (event) {
  var user = {
    initials : initials.value,
    finalscore
  }
  highscore.textContent = JSON.stringify(user);
  localStorage.setItem("person", JSON.stringify(user));
});


// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  localStorage.clear;
  highscore.textContent = 'None';
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
