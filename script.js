function playGame() {
    let userScore = 0;
    let computerScore = 0;
  
    for (let i = 1; i <= 5; i++) {
      // get user choice
      let userChoice = prompt(`Round ${i}: Enter your choice: rock, paper, or scissors`);
  
      // validate user choice
      if (
        userChoice !== "rock" &&
        userChoice !== "paper" &&
        userChoice !== "scissors"
      ) {
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
        return;
      }
  
      // computer makes a choice
      let computerChoice = Math.random();
      if (computerChoice < 0.33) {
        computerChoice = "rock";
      } else if (computerChoice < 0.66) {
        computerChoice = "paper";
      } else {
        computerChoice = "scissors";
      }
  
      // compare choices
      if (userChoice === computerChoice) {
        console.log("It's a tie!");
      } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        console.log("You win this round!");
        userScore++;
      } else {
        console.log("Computer wins this round!");
        computerScore++;
      }
    }
  
    // determine the overall winner
    if (userScore > computerScore) {
      console.log(`You win the game! Final score: ${userScore} - ${computerScore}`);
    } else if (userScore < computerScore) {
      console.log(`Computer wins the game! Final score: ${userScore} - ${computerScore}`);
    } else {
      console.log(`It's a tie! Final score: ${userScore} - ${computerScore}`);
    }
  }
  
  // call the function to play the game
  playGame();
  
