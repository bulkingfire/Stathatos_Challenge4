var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var answerButton1 = document.querySelector(".correct");
var answerButton2 = document.querySelector(".correct2");
var answerButton3 = document.querySelector(".correct3");
var answerButton4 = document.querySelector(".correct4");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// Array of words the user will guess
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];
var Q1 = ["Commonly used data types DO Not Include:"];
var Q2 = ["The condition in an if/else statement is enclosed with_____."];
var Q3 = ["Arrays in JavaScript can be used to store ______."];
var Q4 = ["String values must be enclosed within ____ when being assigned to variables"];
var Q5 = ['A very useful took used during development and debuggin for printing content to the debugger is'];

// The init function is called when the page loads 
function init() {
  getWins();
  getlosses();
}

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 76;
  
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  questionstart()
  startTimer()
  //Hides the Intro Texsts ------------------------------------------
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
  showQ1()
}

// The winGame function is called when the win condition is met
function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}


//function to show the first answers -----------------------
function showQ1(){
  var showing = document.getElementById('Question1')
  showing.style.display = "inline"; 
}

function showQ2(){
  var showing = document.getElementById('Question2')
  showing.style.display = "inline"; 
}

function showQ3(){
  var showing = document.getElementById('Question3')
  showing.style.display = "inline"; 
}

function showQ4(){
  var showing = document.getElementById('Question4')
  showing.style.display = "inline"; 
}

function showQ5(){
  var showing = document.getElementById('Question5')
  showing.style.display = "inline"; 
}

 //function to get rid of first answers--------------------
function showQdisappear1(){
  var showing = document.getElementById('Question1')
  showing.style.display = "none"; 
}

//function to get rid of second answers--------------------
function showQdisappear2(){
  var showing = document.getElementById('Question2')
  showing.style.display = "none"; 
}

function showQdisappear3(){
  var showing = document.getElementById('Question3')
  showing.style.display = "none"; 
}

function showQdisappear4(){
  var showing = document.getElementById('Question4')
  showing.style.display = "none"; 
}

// Updates win count on screen and sets win count to client storage
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}

// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}

function getlosses() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}

function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (chosenWord === blanksLetters.join("")) {
    // This value is used in the timer function to test if win condition is met
    isWin = true;
  }
}

// Start of the game First Question----------------------------------
function questionstart() {
  blanksLetters = [Q1];
  // writes question to the screen
  wordBlank.textContent = blanksLetters;
  
}

// Second Question-----------------------------------------------------
answerButton1.addEventListener("click", function(event) {
  blanksLetters = [Q2];
  showQdisappear1();
  showQ2();
  timerCount = timerCount -10;
  // writes question to the screen
  wordBlank.textContent = blanksLetters;
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
});
//----------------------------------------------------------------------

// Third Question-----------------------------------------------------
answerButton2.addEventListener("click", function(event) {
  blanksLetters = [Q3];
  showQdisappear2();
  showQ3();
  timerCount = timerCount -10;
  // writes question to the screen
  wordBlank.textContent = blanksLetters;
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
});
//----------------------------------------------------------------------

// fourth Question-----------------------------------------------------
answerButton3.addEventListener("click", function(event) {
  blanksLetters = [Q4];
  showQdisappear3();
  showQ4();
  timerCount = timerCount -10;
  // writes question to the screen
  wordBlank.textContent = blanksLetters;
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
});

// fifth Question-----------------------------------------------------
answerButton4.addEventListener("click", function(event) {
  blanksLetters = [Q5];
  showQdisappear4();
  showQ5();
  timerCount = timerCount -10;
  // writes question to the screen
  wordBlank.textContent = blanksLetters;
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
});



// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
