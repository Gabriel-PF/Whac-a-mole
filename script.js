// Interective elements  
const holes = document.querySelectorAll('.hole'); 
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const countdownBoard = document.querySelector('.countdown');
const startButton = document.querySelector('.startButton')

// Setting the variables 
let lastHole; 
let timeUp = false; 
let timeLimit = 20000; 
let score = 0;
let countdown; 


// Custom function to pick a random hole - No mole should pick up twice from the same hole.

function pickRandomHole(holes) {
    const randomHole = Math.floor
}