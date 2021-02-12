import { add, subtract, multiply, divide } from './calculations.js';

function getNumber(input) {
    return Number(input.value);
}

function initOperator(firstInputId, secondInputId, buttonId, resultsId, calculation) {
    const input1 = document.getElementById(firstInputId);
    const input2 = document.getElementById(secondInputId);
    const button = document.getElementById(buttonId);
    const display = document.getElementById(resultsId);

    button.addEventListener('click', () => {
        // my calculator using a readonly input to display the result,
        // if you're using an element, you want to set the .textContent property!
        display.value = calculation(getNumber(input1), getNumber(input2));
    });
}

initOperator('addend-one', 'addend-two', 'add-button', 'sum-display', add);
initOperator('minuend', 'subtrahend', 'subtract-button', 'difference-display', subtract);
initOperator('multiplicand', 'multiplier', 'multiply-button', 'product-display', multiply);
initOperator('dividend', 'divisor', 'divide-button', 'quotient-display', divide);


