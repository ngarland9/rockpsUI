
    
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
    function rockPic() {
      let elem = document.createElement("img");
        elem.src = 'images/rock.png';
        document.getElementById('playerIcon').innerHTML = ""
        document.getElementById("playerIcon").appendChild(elem);
    }
    function paperPic() {
      let elem = document.createElement("img");
        elem.src = 'images/paper.png';
        document.getElementById('playerIcon').innerHTML = ""
        document.getElementById("playerIcon").appendChild(elem);
    }
    function scissorsPic() {
      let elem = document.createElement("img");
          elem.src = 'images/scissors.png';
          document.getElementById('playerIcon').innerHTML = ""
          document.getElementById("playerIcon").appendChild(elem);
    }
    function rockPicComp() {
      let elem = document.createElement("img");
        elem.src = 'images/rock.png';
        document.getElementById('computerIcon').innerHTML = ""
        document.getElementById("computerIcon").appendChild(elem);
    }
    function paperPicComp() {
      let elem = document.createElement("img");
        elem.src = 'images/paper.png';
        document.getElementById('computerIcon').innerHTML = ""
        document.getElementById("computerIcon").appendChild(elem);
    }
    function scissorsPicComp() {
      let elem = document.createElement("img");
          elem.src = 'images/scissors.png';
          document.getElementById('computerIcon').innerHTML = ""
          document.getElementById("computerIcon").appendChild(elem);
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
       if (playerSelection == "rock") {
         rockPic();
         rockPicComp();
       }
       else if (playerSelection == "paper") {
         paperPic();
         paperPicComp();
       }
       else if (playerSelection == "scissors") {
         scissorsPic();
         scissorsPicComp();
       }
      return "It's a tie!! Play again! ";
      }
      if (playerSelection == "rock") {
          rockPic();
        if (computerSelection == "paper") {
          score();
          paperPicComp();
          return "You lose! Paper beats Rock! ";
        }
        else {
          score("player");
          scissorsPicComp();
          return "You win! Rock beats Scissors! ";
        }
      }
      if (playerSelection == "paper") {
        paperPic();
        if (computerSelection == "scissors") {
          score();
          scissorsPicComp();
          return "You lose! Scissors beats Paper! ";
        }
        else {
          score("player");
          rockPicComp();
          return "You win! Paper beats Rock! ";
        }
      }
        if (playerSelection == "scissors") {
          scissorsPic();
          if (computerSelection == "rock") {
            score();
            rockPicComp();
            return "You lose! Rock beats Scissors! ";
          }
          else {
            score("player");
            paperPicComp();
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
 document.getElementById('score').innerHTML = ""
 para.appendChild(txt);
 document.getElementById('display').innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
});
document.getElementById("paper").addEventListener("click", function() {
const para = document.getElementById('score');
 const txt = document.createTextNode(playRound("paper", computerPlay()));
 document.getElementById('score').innerHTML = ""
 para.appendChild(txt);
 document.getElementById('display').innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
});
document.getElementById("scissors").addEventListener("click", function() {
  const para = document.getElementById('score');
  const txt = document.createTextNode(playRound("scissors", computerPlay()));
  document.getElementById('score').innerHTML = ""
  para.appendChild(txt);
  document.getElementById('display').innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
});

