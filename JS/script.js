


// Interective elements 
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const countdownBoard = document.querySelector('.countdown');
const startButton = document.querySelector('.startButton');

//Audio

//const audio = document.getElementById("background-music");

// Music setup
audio.volume = 0.03;


// Setting the variables 
let lastHole;
let timeUp = false;
let timeLimit = 20000;
let score = 0;
let countdown;

function play() {
    let audio = document.getElementById("audio");
    audio.play();
  }

//Toggle function to change State

function toggle() {
    let x = document.getElementById("main");
    if(x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

// Custom function to pick a random hole - No mole should pick up twice from the same hole.

function pickRandomHole(holes) {
    const randomHole = Math.floor(Math.random() * holes.length);
    const hole = holes[randomHole];
    if (hole === lastHole){
        return pickRandomHole(holes);
    }
    lastHole = hole;
    return hole;
}

// Function to pop up the mole and set the time out of mole picking out

function popOut(){
    const time = Math.random() * 1300 + 400;
    const hole = pickRandomHole(holes);
    hole.classList.add('up');     // adding class
    setTimeout(function(){
        hole.classList.remove('up');  // removing
        if (!timeUp) popOut();
    }, time);
}


function startGame(){
    countdown = timeLimit/1000;
    scoreBoard.textContent = 0;
    scoreBoard.style.display = 'block';
    countdownBoard.textContent = countdown;
    timeUp = false;
    score = 0;
    popOut();
    setTimeout(function(){
        timeUp = true;
    }, timeLimit);

    let startCountdown = setInterval(function(){
        countdown -= 1;
        countdownBoard.textContent = countdown;
        if (countdown < 0) {
            countdown = 0;
            clearInterval(startCountdown);
            countdownBoard.textContent = 'Times UP!';

        }
    }, 1000);
}


//Start game Button 

startButton.onclick = function () {
    startGame();
}




function whack(e){   // Every time click mole, increase score variable by 1. 
    score++;
    this.style.backgroundImage = 'url("assets/images/hit.png")';  
    this.style.pointerEvents = 'none';                               // "this" refer element clicked 
    setTimeout(() => {
        this.style.backgroundImage = 'url("assets/images/mole.png")';
        this.style.pointerEvents = 'all';

    }, 800);
    scoreBoard.textContent = score;
    

}
moles.forEach(mole => mole.addEventListener('click', whack));  


