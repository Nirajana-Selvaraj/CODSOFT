function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function calculate() {
    let currentDisplay = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(currentDisplay);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
