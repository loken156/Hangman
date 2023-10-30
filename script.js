const words = ['svamp', 'snögubbe', 'bergsklättring', 'datorspelare']
let hiddenword = words[Math.floor(Math.random() * words.length)] 
let guessedletters = []
let attempts = 7

//'bahamas', 'programmering', 'segelbåt', 'månen', 

function playHangman() {

  sayWelcome()
  displayWord()
  
  

  
}


function sayWelcome() {

  alert("Welcome! Let's play! Click OK to start.")

}


function displayWord (){
    let showText = ''
    for (let letter of hiddenword){
      if (guessedletters.includes(letter)){
        showText += letter + ' '
      }else{
        showText += '_ '
    }
  }
  document.getElementById('showWord').textContent = showText

}

function attemptsDisplay() {
  document.getElementById('tries').textContent = `Försök kvar: ${attempts}`
}

function checkGuess() {
  let guess = document.getElementById('userInput').value.toLowerCase()
  document.getElementById('userInput').value = ''

  guessedletters.push(guess)
  if (!hiddenword.includes(guess)) {
    attempts --
    attemptsDisplay()
    if (attempts === 0) {
      alert(`Game Over! Du har slut på försök. Ordet var "${hiddenword}"`)
      resetGame()
    }
    
  }
  if (!hiddenword.split('').some(letter => !guessedletters.includes(letter))) {
    alert(`Du har hittat ordet "${hiddenword}" Grattis!`);
    resetGame();
  }
  displayWord()
}
function resetGame() {
  hiddenword = words[Math.floor(Math.random() * words.length)]
  guessedletters = []
  attempts = 7
  displayWord()
  attemptsDisplay()
}

playHangman()