let candyCount = 0;
let autoClickerCost = 10;
let doubleCandyCost = 50;
let megaClickerCost = 200;
let bonusMultiplierCost = 500;
let goldenCandyCost = 1000;
let candyRainCost = 2500;


let isAutoClickerActive = false;
let isDoubleCandyActive = false;
let isMegaClickerActive = false;
let isBonusMultiplierActive = false;
let isGoldenCandyActive = false;
let isCandyRainActive = false;

const candyCountElement = document.getElementById('candy-count');
const candyButton = document.getElementById('candy-button');
const autoClickerButton = document.getElementById('auto-clicker');
const doubleCandyButton = document.getElementById('double-candy');
const megaClickerButton = document.getElementById('mega-clicker');
const bonusMultiplierButton = document.getElementById('bonus-multiplier');
const goldenCandyButton = document.getElementById('golden-candy');
const candyRainButton = document.getElementById('candy-rain');

// Function to update the candy count display
function updateCandyCount() {
    candyCountElement.textContent = candyCount;
    autoClickerButton.disabled = candyCount < autoClickerCost;
    doubleCandyButton.disabled = candyCount < doubleCandyCost;
    megaClickerButton.disabled = candyCount < megaClickerCost;
    bonusMultiplierButton.disabled = candyCount < bonusMultiplierCost;
    goldenCandyButton.disabled = candyCount < goldenCandyCost;
    candyRainButton.disabled = candyCount < candyRainCost;
}

// Candy click button logic
candyButton.addEventListener('click', () => {
    let increment = 1;
    if (isDoubleCandyActive) increment *= 2;
    if (isBonusMultiplierActive) increment *= 3;
    if (isGoldenCandyActive) increment *= 5;
    candyCount += increment;
    updateCandyCount();
});

// Auto Clicker Upgrade logic
autoClickerButton.addEventListener('click', () => {
    if (candyCount >= autoClickerCost && !isAutoClickerActive) {
        candyCount -= autoClickerCost;
        isAutoClickerActive = true;
        setInterval(() => {
            let increment = 1;
            if (isDoubleCandyActive) increment *= 2;
            if (isBonusMultiplierActive) increment *= 3;
            if (isGoldenCandyActive) increment *= 5;
            candyCount += increment;
            updateCandyCount();
        }, 1000);
        updateCandyCount();
    }
});

// Double Candy Upgrade logic
doubleCandyButton.addEventListener('click', () => {
    if (candyCount >= doubleCandyCost && !isDoubleCandyActive) {
        candyCount -= doubleCandyCost;
        isDoubleCandyActive = true;
        updateCandyCount();
    }
});

// Mega Clicker Upgrade logic
megaClickerButton.addEventListener('click', () => {
    if (candyCount >= megaClickerCost && !isMegaClickerActive) {
        candyCount -= megaClickerCost;
        isMegaClickerActive = true;
        setInterval(() => {
            let increment = 5;
            if (isDoubleCandyActive) increment *= 2;
            if (isBonusMultiplierActive) increment *= 3;
            if (isGoldenCandyActive) increment *= 5;
            candyCount += increment;
            updateCandyCount();
        }, 2000);
        updateCandyCount();
    }
});

// Bonus Multiplier Upgrade logic
bonusMultiplierButton.addEventListener('click', () => {
    if (candyCount >= bonusMultiplierCost && !isBonusMultiplierActive) {
        candyCount -= bonusMultiplierCost;
        isBonusMultiplierActive = true;
        updateCandyCount();
    }
});

// Golden Candy Upgrade logic
goldenCandyButton.addEventListener('click', () => {
    if (candyCount >= goldenCandyCost && !isGoldenCandyActive) {
        candyCount -= goldenCandyCost;
        isGoldenCandyActive = true;
        updateCandyCount();
    }
});

// Candy Rain Upgrade logic
candyRainButton.addEventListener('click', () => {
    if (candyCount >= candyRainCost && !isCandyRainActive) {
        candyCount -= candyRainCost;
        isCandyRainActive = true;
        const rainInterval = setInterval(() => {
            candyCount += 50;
            updateCandyCount();
        }, 500);
        setTimeout(() => {
            clearInterval(rainInterval);
            isCandyRainActive = false;
        }, 10000);
        updateCandyCount();
    }
});
