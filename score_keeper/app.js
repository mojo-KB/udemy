const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2')

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;



p1Button.addEventListener('click', function() {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
        }
        player1.textContent = p1Score;
    }
})


p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
        }
        player2.textContent = p2Score;
    }
})