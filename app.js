import { add, subtract, multiply, divide } from './utilities.js';

const addendOne = document.getElementById('addend-one');
const addendTwo = document.getElementById('addend-two');
const addButton = document.getElementById('add-button');
const sumDisplay = document.getElementById('sum-display');

const minuend = document.getElementById('minuend');
const subtrahend = document.getElementById('subtrahend');
const subtractButton = document.getElementById('subtract-button');
const differenceDisplay = document.getElementById('difference-display');

const multiplicand = document.getElementById('multiplicand');
const multiplier = document.getElementById('multiplier');
const multiplyButton = document.getElementById('multiply-button');
const productDisplay = document.getElementById('product-display');

const dividend = document.getElementById('dividend');
const divisor = document.getElementById('divisor');
const divideButton = document.getElementById('divide-button');
const quotientDisplay = document.getElementById('quotient-display');

addButton.addEventListener('click', () => {
    const sum = add(Number(addendOne.value), Number(addendTwo.value));
    sumDisplay.value = sum;
});

subtractButton.addEventListener('click', () => {
    const difference = subtract(Number(minuend.value), Number(subtrahend.value));
    differenceDisplay.value = difference;
});

multiplyButton.addEventListener('click', () => {
    const product = multiply(Number(multiplicand.value), Number(multiplier.value));
    productDisplay.value = product;
});

divideButton.addEventListener('click', () => {
    const quotient = divide(Number(dividend.value), Number(divisor.value));
    quotientDisplay.value = quotient;
});
