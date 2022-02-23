const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#player1')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#player2')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;


function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score - winningScore === 0) {
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            isGameOver = true;
            player.button.classList.add('is-light');
            opponent.button.classList.add('is-light');
            player.button.classList.remove('is-primary');
            opponent.button.classList.remove('is-primary');
            player.button.disabled = true;
            opponent.button.disabled = true;

            //p1Button.setAttribute("disabled");
            //p2Button.setAttribute("disabled");

        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function() {
    updateScores(p1, p2);
})


p2.button.addEventListener('click', () => {
    updateScores(p2, p1);
})


resetButton.addEventListener('click', reset);


winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})


function reset() {
    isGameOver = false;
    for (let i of[p1, p2]) {
        i.score = 0;
        i.display.textContent = 0;
        i.display.classList.remove('winner', 'loser');
        i.button.disabled = false;
        i.button.classList.remove('is-light');
        i.button.classList.add('is-primary');
    }
}