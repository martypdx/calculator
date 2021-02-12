// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, subtract, multiply, divide } from '../calculations.js';

const test = QUnit.test;

test('add', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 5;
    const expected = 9;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract', (expect) => {
    //Arrange
    const x = 10;
    const y = 2;
    const expected = 8;
    
    //Act 
    const actual = subtract(x, y);

    //Expect
    expect.equal(actual, expected);
});

test('multiply', (expect) => {
    //Arrange
    const x = 3;
    const y = 4;
    const expected = 12;
    
    //Act 
    const actual = multiply(x, y);

    //Expect
    expect.equal(actual, expected);
});

test('divide', (expect) => {
    //Arrange
    const x = 12;
    const y = 4;
    const expected = 3;
    
    //Act 
    const actual = divide(x, y);

    //Expect
    expect.equal(actual, expected);
});
