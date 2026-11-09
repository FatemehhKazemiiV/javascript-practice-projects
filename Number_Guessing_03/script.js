
let guessInput = document.getElementById("guessInput");
let guessBtn = document.getElementById("guessBtn");
let message = document.getElementById("message");
let restartBtn = document.getElementById("restartBtn");

let randomNumber;
let attempts;

function startNewGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    guessInput.value = "";
    message.innerHTML = "";

    guessBtn.disabled = false;
    restartBtn.hidden = true;
}

startNewGame();

guessBtn.addEventListener("click", function () {

    let guess = Number(guessInput.value);

    if (guessInput.value === "" || guess < 1 || guess > 100 || !Number.isInteger(guess)) {
        message.innerHTML = "Enter a number between 1 and 100!";
    }

    else {
        attempts++;

        if (guess < randomNumber) {
            message.innerHTML = "Too low! Try a higher number.";
        }

        else if (guess > randomNumber) {
            message.innerHTML = "Too high! Try a lower number.";
        }

        else {
            message.innerHTML = "Congratulations! You guessed it! Attempts: " + attempts;

            guessBtn.disabled = true;
            restartBtn.hidden = false;
        }
    }

});

restartBtn.addEventListener("click", function () {
    startNewGame();
});
