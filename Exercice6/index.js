const displayEl = document.querySelector("#display");
let screen = [];
function appendToDisplay(input) {
    screen.push(input);
    displayEl.value += input;
    console.log(screen);
}

function clearDisplay() {
    displayEl.value = "";
    screen = [];
}

function calculateResult() {}
