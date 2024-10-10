//votre code ici
function pairNumbers(number1, number2) {
    let result = [];
    const num1 = Number.parseInt(number1);
    const num2 = Number.parseInt(number2);
    if (num2 < num1) return result.join();
    else {
        let currentElement;
        for (let index = 0; index < num2 - num1 + 1; index++) {
            currentElement = (num1 + index) % 2;
            if (currentElement === 0) {
                result.push(num1 + index);
            }
        }
    }
    return result.join();
}
pairNumbers(1, 10);
pairNumbers(1, 1);
export default pairNumbers;
