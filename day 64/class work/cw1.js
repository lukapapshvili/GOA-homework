function playGame(playerMove) {
    const moves = ['rock', 'paper', 'scissors'];
    const computerMove = moves[Math.floor(Math.random() * moves.length)];
    let winnerMessage = '';

    // გამარჯვების წესები
    if (playerMove === computerMove) {
        winnerMessage = "It's a tie!";
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'scissors' && computerMove === 'paper') ||
        (playerMove === 'paper' && computerMove === 'rock')
    ) {
        winnerMessage = "You Win! 🎉";
    } else {
        winnerMessage = "Computer Wins! 😞";
    }

    // შედეგის გამოტანა
    document.getElementById('player-choice').innerHTML = `You chose: <strong>${capitalize(playerMove)}</strong>`;
    document.getElementById('computer-choice').innerHTML = `Computer chose: <strong>${capitalize(computerMove)}</strong>`;
    document.getElementById('winner').innerHTML = winnerMessage;
}

// Helper function for capitalizing the first letter
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
