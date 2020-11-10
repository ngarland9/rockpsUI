
    
    let options = ["rock", "paper", "scissors"]
    let playerScore = 0
    let computerScore = 0

    function score(n) {
      if (n == "player") {
       
        playerScore += 1;
      }
      else {
        
        computerScore += 1;
      }
    }
  
    function computerPlay() {
      return options[(Math.floor(Math.random() * 3))]
    }

  
    function choice() {
      const playerChoice = prompt("Rock paper or scissors friend? Shhh I won't tell. ").toLocaleLowerCase();
      return playerChoice
    }

    function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return "It's a tie!! Play again! "
      }
      if (playerSelection == "rock") {
        if (computerSelection == "paper") {
          score();
          return "You lose! Paper beats Rock! ";
        }
        else {
          score("player");
          return "You win! Rock beats Scissors! ";
        }
      }
      if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
          score();
          return "You lose! Scissors beats Paper! ";
        }
        else {
          score("player");
          return "You win! Paper beats Rock! ";
        }
      }
        if (playerSelection == "scissors") {
          if (computerSelection == "rock") {
            score();
            return "You lose! Rock beats Scissors! ";
          }
          else {
            score("player");
            return "You win! Scissors beats paper! ";
          }
        }
    }
    function game() {
      for (i = 0; i < 5; i++) {
        alert(playRound(choice(), computerPlay()))
      }
      if (playerScore > computerScore) {
        alert(`You win the game! Woohoo! Player Score: ${playerScore} Computer Score: ${computerScore}`);
      }
      else {
        alert(`You lose the game! Bummer! Player Score: ${playerScore} Computer Score: ${computerScore}`)
      }
    }


document.getElementById("rock").addEventListener("click", function() {
 const para = document.getElementById('score');
 const txt = document.createTextNode(playRound("rock", computerPlay()));
 para.appendChild(txt);
 document.getElementById('display').innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
});
document.getElementById("paper").addEventListener("click", function() {
const para = document.getElementById('score');
 const txt = document.createTextNode(playRound("paper", computerPlay()));
 para.appendChild(txt);
 document.getElementById('display').innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
});
document.getElementById("scissors").addEventListener("click", function() {
  const para = document.getElementById('score');
  const txt = document.createTextNode(playRound("scissors", computerPlay()));
  para.appendChild(txt);
  document.getElementById('display').innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
});
