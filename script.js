let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        console.log("Choice was clicked");
    })
})