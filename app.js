const addendOne = document.getElementById('addend-one');
const addendTwo = document.getElementById('addend-two');
const addButton = document.getElementById('add-button');
const sumDisplay = document.getElementById('sum-display');

const minuend = document.getElementById('minuend');
const subtrahend = document.getElementById('subtrahend');
const subtractButton = document.getElementById('subtract-button');
const differenceDisplay = document.getElementById('difference-display');

addButton.addEventListener('click', () => {
    const sum = Number(addendOne.value) + Number(addendTwo.value);
    sumDisplay.value = sum;
});

subtractButton.addEventListener('click', () => {
    const difference = Number(minuend.value) - Number(subtrahend.value);
    differenceDisplay.value = difference;
});
