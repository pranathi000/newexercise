let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let successMessage = "Congratulations! You got it right.";
let tryAgainMessage = "Please Try Again!";

function restart() {

    let firstRanNumber = (Math.random() * 100);
    let secondRanNumber = (Math.random() * 100);
    firstNumberElement.textContent = Math.ceil(firstRanNumber);
    secondNumberElement.textContent = Math.ceil(secondRanNumber);
    userInputElement.value = "";
    gameResultElement.textContent = "";

}
restart();

function check() {
    let firstRanNumber = parseInt(firstNumberElement.textContent);
    let secondRanNumber = parseInt(secondNumberElement.textContent);
    let userEnteredSum = parseInt(userInputElement.value);

    let sumOfRanNumbers = firstRanNumber + secondRanNumber;

    if (userEnteredSum === sumOfRanNumbers) {
        gameResultElement.textContent = successMessage;
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = tryAgainMessage;
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}