let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#computer-score");

const generateComputerchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIndex = Math.floor(Math.random() * 3);
  return options[randIndex];
};

const drawGame = () => {
  console.log("Game was Draw");
  msg.innerText = "Game Draw! Play Again";
  msg.style.backgroundColor = "#c5d86d";
};

const showWinner = (userWin,userChoice,computerChoice) => {
  if (userWin) {
    msg.innerText = `You Win! Yours ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "#52B788";
    userScore++;
    uScore.innerText = userScore;
  } else {
    msg.innerText = `You Win! Yours ${userChoice} is beated by ${computerChoice}`;
    msg.style.backgroundColor = "#592941";
    computerScore++;
    cScore.innerText = computerScore;
  }
};

const playGame = (userChoice) => {
  console.log("User choice ", userChoice);
  //Generate computer choice
  const computerChoice = generateComputerchoice();
  console.log("Computer choice = ", computerChoice);

  if (userChoice === computerChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "rock" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,computerChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
