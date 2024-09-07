let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userChoicePara = document.querySelector("#user-score");
const compChoicePara = document.querySelector("#comp-score");

const gencompchoice = () => {
  // rock papaer scissors
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const drawGame = () => {
  msg.innerText = "game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userChoicePara.innerText = userScore;
    msg.innerText = "You win!! your " + userChoice + " beats " + compChoice;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compChoicePara.innerText = compScore;
    msg.innerText = "You lose " + compChoice + " beats your " + userChoice;
    msg.style.backgroundColor = "red";
  }
};

const plyaGame = (userChoice) => {
  // Generate Computer choice
  const compChoice = gencompchoice();

  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper , scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock , scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    plyaGame(userChoice);
  });
});
