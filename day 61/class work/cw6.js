let count = 0;

function updateCounterDisplay() {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = count;

    if (count < 0) {
        counterElement.classList.add('negative');
        counterElement.classList.remove('positive');
    } else if (count > 0) {
        counterElement.classList.add('positive');
        counterElement.classList.remove('negative');
    } else {
        counterElement.classList.remove('negative', 'positive');
    }
}

function increment() {
    count++;
    updateCounterDisplay();
}

function decrement() {
    count--;
    updateCounterDisplay();
}

function reset() {
    count = 0;
    updateCounterDisplay();
}
