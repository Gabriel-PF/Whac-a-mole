


// Interective elements 
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const countdownBoard = document.querySelector('.countdown');
const startButton = document.querySelector('.startButton');
const cursor = document.querySelector('.hammer');

//Audio
let ouch = new Audio("assets/sound/ouch.mp3")
let hammersound = new Audio("assets/sound/whoosh.flac");

// Music setup
audio.volume = 0.05;
hammersound.volume = 0.00;

// Setting the variables 
let lastHole;
let timeUp = false;
let timeLimit = 20000;
let score = 0;
let countdown;

// Audio function

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

// Start Game function and custom score board message 

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
        if (countdown <= 20) {
            hammersound.volume = 0.06;
        } if  (countdown < 0) {
            countdown = 0;
            clearInterval(startCountdown);
            if (countdown === 0 && score <= 6) {
            countdownBoard.textContent = `How am I suppose to take you seriously? You're a JOKE! GET OUT OF HERE!`;
        } else if (countdown === 0 && score <= 11) {
            countdownBoard.textContent = 'Oh what a loser! Step up your game son! PLAY IT AGAIN!';
        } else if (countdown === 0 && score <= 15) {
            countdownBoard.textContent = `Should I be impressed by that? Mehhhh average Joe, Fool take a hike! `;
        } else if (countdown === 0 && score <= 16) { 
            countdownBoard.textContent = `DAMN SON! Now we are talking, you had my curiosity, now you have my attention.`; 
        } else if (countdown === 0 && score <= 17) {
            countdownBoard.textContent = `Reflexes of a wild TIGER! Sky is the limit for you!!!`;
        } else if (countdown === 0 && score >= 18) {
            countdownBoard.textContent = `SAVAGE, GOD AMONGST MEN, please click the images of mountains to prove you're human!`;
        } 

        }
    }, 1000);
}


//Start game Button 

startButton.onclick = function () {
    startGame();
}

// cursor and cursor animation 

window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX - 200 + "px"; 
    cursor.style.top = e.pageY - 230 + "px";
});

window.addEventListener("click", (e) => {
cursor.style.transform = "rotateZ(-50deg) rotateY(-180deg)";
    hammersound.play();
    hammersound.currentTime = 0;
setTimeout(() => {
    cursor.style.transform = "rotateZ(0deg) rotateY(-180deg)"
}, 90);
});


// not working 
function func(){
    document.getElementById("wackButton").addEventListener('click', function(){
          this.textContent = "Restart";
    });
}


// whack funtion and animation when mole is hit

function whack(e){   // Every time mole is clicked, increase score variable by 1. 
    score++;
    this.style.backgroundImage = 'url("assets/images/hit.png")';  
    this.style.pointerEvents = 'none';                               // "this" refer element clicked 
    setTimeout(() => {
        this.style.backgroundImage = 'url("assets/images/mole.png")';
        this.style.pointerEvents = 'all';

    }, 800);
    scoreBoard.textContent = score;
}



moles.forEach(mole => mole.addEventListener('click', whack, ouch.play()));  
 

