let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const resultMessage = document.getElementById('resultMessage');
const previousGuesses = document.getElementById('previousGuesses');
const restartGame = document.getElementById('restartGame');

submitGuess.addEventListener('click', checkGuess);
restartGame.addEventListener('click', resetGame);

function checkGuess() {
    const userGuess = Number(guessInput.value);
    if (userGuess < 1 || userGuess > 100) {
        resultMessage.textContent = 'Vui lòng nhập một số từ 1 đến 100.';
        return;
    }

    guesses.push(userGuess);
    if (userGuess === randomNumber) {
        resultMessage.textContent = `Chúc mừng! Bạn đã đoán đúng số ${randomNumber}!`;
        endGame();
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Số bạn đoán nhỏ hơn số cần đoán.';
    } else {
        resultMessage.textContent = 'Số bạn đoán lớn hơn số cần đoán.';
    }

    previousGuesses.textContent = `Các số đã đoán: ${guesses.join(', ')}`;
    guessInput.value = '';
}

function endGame() {
    guessInput.disabled = true;
    submitGuess.disabled = true;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guesses = [];
    resultMessage.textContent = '';
    previousGuesses.textContent = '';
    guessInput.disabled = false;
    submitGuess.disabled = false;
    guessInput.value = '';
}
