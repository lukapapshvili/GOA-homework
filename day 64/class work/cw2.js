function calculateScore(strength, speed, intelligence) {
    // ქულების გამოთვლა
    const baseScore = strength * 1 + speed * 2; // ძალა = 1 ქულა, სისწრაფე = 2 ქულა
    return baseScore + (baseScore * intelligence) / 10; // ინტელექტის წვლილი
}

function determineWinner() {
    // მოთამაშე 1-ის მონაცემები
    const p1Strength = parseFloat(document.getElementById('p1-strength').value) || 0;
    const p1Speed = parseFloat(document.getElementById('p1-speed').value) || 0;
    const p1Intelligence = parseFloat(document.getElementById('p1-intelligence').value) || 0;

    // მოთამაშე 2-ის მონაცემები
    const p2Strength = parseFloat(document.getElementById('p2-strength').value) || 0;
    const p2Speed = parseFloat(document.getElementById('p2-speed').value) || 0;
    const p2Intelligence = parseFloat(document.getElementById('p2-intelligence').value) || 0;

    // ქულების გამოთვლა
    const player1Score = calculateScore(p1Strength, p1Speed, p1Intelligence);
    const player2Score = calculateScore(p2Strength, p2Speed, p2Intelligence);

    // შედეგის განსაზღვრა
    let resultMessage = "";
    if (player1Score > player2Score) {
        resultMessage = `🏆 Player 1 Wins! (Score: ${player1Score.toFixed(2)} vs ${player2Score.toFixed(2)})`;
    } else if (player2Score > player1Score) {
        resultMessage = `🏆 Player 2 Wins! (Score: ${player2Score.toFixed(2)} vs ${player1Score.toFixed(2)})`;
    } else {
        resultMessage = `🤝 It's a Tie! (Score: ${player1Score.toFixed(2)} vs ${player2Score.toFixed(2)})`;
    }

    // შედეგის გამოტანა
    document.getElementById('result').innerHTML = resultMessage;
}
