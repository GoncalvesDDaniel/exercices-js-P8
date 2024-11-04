const decimalEl = document.querySelector("#decimalInput");
const resultEl = document.querySelector("#binaryResult");
function convertToBinary() {
    // debugger;
    resultEl.textContent = "";
    let resutlArray = [];
    if (isNaN(decimalEl.value)) return;
    else {
        let number = decimalEl.value;
        let reste = number;
        do {
            reste = number % 2;
            resutlArray.unshift(reste);
            number = (number - reste) / 2;
        } while (number !== 0);
    }

    return (resultEl.textContent = resutlArray.join(""));
}
