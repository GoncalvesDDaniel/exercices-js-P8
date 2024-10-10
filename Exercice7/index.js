const decimalEl = document.querySelector("#decimalInput");
const resultEl = document.querySelector("#binaryResult");
function convertToBinary() {
    debugger;
    if (isNaN(decimalEl.value)) return;
    else {
        let resutlArray = [];
        const number = decimalEl.value;
        let reste;
        while (reste <= 0) {
            reste = number % 2;
            resutlArray.unshift(reste);
        }
        resultEl.textContent = resutlArray.join();
        console.log(resutlArray);
    }
    return;
}
