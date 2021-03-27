// Upon clicking the start game button, it begins the game
// begins timer
// it displays a series of underscores based on the length of the program chosen word
// upon detecting corresponding keyboard inputs, will reveal the letters and positions on the word (the underscores will be replaced with the correct letters)
// Upon running out of time or completing the word, the game ends
// records result win if word is guessed lose if timer runs out. Score saved on Local storage.

// Upon clicking the start game button, it begins the game we need a begin game button and an event listener attached to it to begin game function
// The game will be timed by a timer we create. It will count down from 10 seconds going down by 1 per second until it reaches 0.
// The game begins by displaying a series of underscores based on the length of a chosen word. We will create an array of random solution words and iterate through the length of those words in order to determine how many underscores will be displayed onto the screen for each word.
// Upon detecting keyboard inputs, the underscores on the page will turn into letters if the correct letters in the word are pressed down upon. We will add an event listener to make the program detect the value of the key being pressed and pass that data down a function that will determine if the letter pressed down correlates to the word. If it does, replace the underscore on the screen with the correct letter.
// Upon running out of time or completing the word, the game ends
// records result win if word is guessed lose if timer runs out. Score saved on Local storage. we will use 2 variables, wins and losses to count wins and losses.
var timer = document.querySelector("#timer");
var app = document.querySelector("#app");
var button = document.querySelector("button");

function setTime() {
  var secondsLeft = 11;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

button.addEventListener("click", function() {
  gameStart();
  setTime();
});

var words =['javascript', 'coding', 'berkeley', 'pizza'];

function gameStart() {
  var answer = words[Math.floor(Math.random() * words.length)];
  var unanswered = '';
  for (var i = 0; i < answer.length; i++) {
    unanswered = unanswered + "_";
  }
  app.textContent = unanswered;
}

document.addEventListener("keydown", keydownAction);

function keydownAction(event) {
  var key = event.key;
  guess(key);
}

function guess(char) {
  var answer = app.getAttribute("data-answer");
  var unanswered = app.getAttribute("data-guessed");
  var lettersleft = unanswered.split('');
  for (var i = 0; i < answer.length; i++) {
    if (char === answer[i]) {
      lettersleft = lettersleft + answer[i];
    } else {
      lettersleft = lettersleft + '_';
    }
  }
  app.textContent = lettersleft;
  app.setAttribute("data-guess", lettersleft);
}

