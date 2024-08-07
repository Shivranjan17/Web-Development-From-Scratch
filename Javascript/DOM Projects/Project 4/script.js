let randomNumber = parseInt(Math.random()*100 +1);
const submit =document.querySelector('#subt')
const userInput =document.querySelector('#guessField')
const guessSlot =document.querySelector('.guesses')
const remaining =document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver =document.querySelector('.resultParas')
const p =document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true;
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(guess < 1 || guess > 100 || guess === null || guess === undefined ){
        alert('Please enter a number between 1 and 100')
        }
        else if(isNaN(guess)){
            alert('Please enter a valid number!')
        }
        else{
            prevGuess.push(guess)
            if(numGuess ===11){
                displayGuess(guess)
                displayMessage(`Game Over, Random number was ${randomNumber}`)
                endGame()

            }
            else{
                displayGuess(guess)
                checkGuess(guess)
            }
        }
   

}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You won! The number was ${randomNumber}`)
        endGame()
    }
    else if(guess <randomNumber){
        displayMessage('Too low')
    }
    else if(guess >randomNumber){
        displayMessage('Too Highh')
    }

}
function displayGuess(guess){
    userInput.value = ''//cleanup method
    guessSlot.innerHTML+=`${guess} , `
    numGuess++
    remaining.innerHTML = `${11 -numGuess}`

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}
function endGame(){
userInput.value = ''//cleanup method
userInput.setAttribute('disabled','')
// p.classList.add('button')
// p.innerHTML =`<h2 id = "newGame">Start New Game<h2>`
//startOver.appendChild(p)
const newGameButton = document.createElement('button');
    newGameButton.id = 'newGame';
    newGameButton.textContent = 'Start New Game';
    newGameButton.classList.add('button'); // Add class for styling

    // Append the new button to the DOM
    startOver.appendChild(newGameButton);
    
playGame =false;
newGame();
    
}
function newGame(){
    const newGameButton =document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100 +1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML=''
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);

        playGame = true;
    })

}
