const displayEl = document.querySelector("#display");
function appendToDisplay(input) {
    // screen.push(input);
    displayEl.value += input;
}

function clearDisplay() {
    displayEl.value = "";
}

function calculateResult() {
    debugger;
    if (displayEl.value.includes("/0")) {
        displayEl.value = "Division by zero is not allowed";
    } else {
        displayEl.value = eval(displayEl.value);
    }
}
