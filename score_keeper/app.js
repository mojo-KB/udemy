const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;



p1Button.addEventListener('click', function() {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score - winningScore === 0) {
            player1.classList.add('winner');
            player2.classList.add('loser');
            isGameOver = true;
            p1Button.classList.add('is-light');
            p2Button.classList.add('is-light');
            p1Button.disabled = true;
            p2Button.disabled = true;
            //p1Button.setAttribute("disabled");
            //p2Button.setAttribute("disabled");

        }
        player1.textContent = p1Score;
    }
})


p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score - winningScore === 0) {
            player2.classList.add('winner');
            player1.classList.add('loser');
            isGameOver = true;

            p1Button.classList.add('is-light');
            p2Button.classList.add('is-light');
            p1Button.disabled = true;
            p2Button.disabled = true;
            //p1Button.setAttribute("disabled");
            // p2Button.setAttribute("disabled");

        }
        player2.textContent = p2Score;
    }
})


resetButton.addEventListener('click', reset);


winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})


function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    player1.textContent = p1Score;
    player2.textContent = p2Score;
    player1.classList.remove('winner', 'loser');
    player2.classList.remove('winner', 'loser');
    p1Button.classList.remove('is-light');
    p2Button.classList.remove('is-light');
    p1Button.disabled = false;
    p2Button.disabled = false;
}