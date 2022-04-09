# Whac-a-mole

Description: 

"Whac-A-Mole is an arcade game, originally known as Mogura Taiji (モグラ退治, "Mole Buster") or Mogura Tataki (モグラたたき, "Mole Smash") in Japan. A typical Whac-A-Mole machine consists of a waist-level cabinet with a play area and display screen, and a large, soft, black mallet. Five holes in the play area top are filled with small, plastic, cartoonish moles, which pop up at random. Points are scored by whacking each mole as it appears. The faster the reaction, the higher the score."

In this version I tried to emulate the functionalities of the game, using the powers of the JavaScript to create the logic behind it. 

MVP 
Game has six holes in which the moles pop up randomly, each time they appear, player should move the mouse and try to hit it, this game test your hand-eye coordination. You are your own adversary try to beat your previously score.
Depending on your score a different message will appear when the time is up.


Backlog
add scoreboard
Ability to start the game on increased dificulty lvl
Build "Game Over" screen
Fix some bugs 
Improve the design
More sound effects 
Option to change your mallet (hammer)


function play() // Audio.

function toggle() // Switch game states.

function pickRandomHole() // Randomize where the moles will pop.

Function popOut() // Randomize the time moles will be up. 

function startGame() // Make the game start, call back the popOut function, initiate the timer (countdown) and provided the custom messages in the end based on the player score.

function whack(): Increse the score, every time a mole is clicked, and set the animation of the mole when whacked in the head. 


Task:

main - buildMainScreen
main - addEventListener
main - buildGameOverScreen (incomplete)
main - StartGameButton
main - ToggleStates

game - buildGameScreen
game - SetAudio
game - addEventListener
game - randomizeHoles
game - setPopUpinterval
game - IncreaseScore
game - decreaseTimer


Links: 

Trello

https://trello.com/b/1fVGisTL/whac-a-mole-project

GitHub

https://gabriel-pf.github.io/Whac-a-mole/


Slides 

https://docs.google.com/presentation/d/1_ZdMw8otRCJpxxwB7-qmpCMBKhm2qh99UTX-7gT8qFo/edit?usp=sharing
