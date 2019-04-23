// create global variables
let score = 0;
let scoreDisplay = document.getElementById("score");
let scoreBoard = document.getElementById("scoreBoard");
let clicky = document.getElementById("clickMe"); 

function respondToClick(evt) {
    score += 1;
    scoreDisplay.innerText = score;
}


clicky.addEventListener('click', respondToClick);