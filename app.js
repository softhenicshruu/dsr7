document.addEventListener("DOMContentLoaded", () => {
  const resultDiv = document.getElementById("result");
  const choiceButtons = document.querySelectorAll(".choice-btn");

  // Game logic
  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerChoice = button.getAttribute("data-choice");
      const choices = ["rock", "paper", "scissors"];
      const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];
      let result;

      if (playerChoice === computerChoice) {
        result = "It's a draw!";
      } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        result = "You win!";
      } else {
        result = "You lose!";
      }

      resultDiv.textContent = `You chose ${playerChoice},computer chose ${computerChoice}. ${result}`;
    });
  });

  // Marketplace button logic

  // Profile button logic
  document.getElementById("profile-btn").addEventListener("click", () => {
    alert("I Me Msyself...");
  });
});
