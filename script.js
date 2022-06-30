let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget() {
  return Math.floor(Math.random() * 10)
}

function compareGuesses(humanGuess, computerGuess, targetGuess) { 
let computerGuess = generateTarget();


return Math.abs (targetGuess - humanGuess);
return Math.abs(targetGuess - computerGuess);

if (computer >= human) {
  return true;
} else if (computer < human) {
  return false;

  }
}

const updateScore(winner) {
  if (winner = 'human') {
    humanScore = humanScore + 1;
  } else {
    computerScore = computerScore + 1;
  }
}

const advancedRound () {
  currentRoundNumber + 1
}



 const getAbsoluterDist () {
   return compareGuesses 
 }

