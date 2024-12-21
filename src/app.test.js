import { 
    capitalize,
    reverseString,
    caesarCipher,
    calculator,
    analyzeArray,
} from "./app";

test('Take a string and return it with the first letter capitalized', () => {
    let input = capitalize('papa');
    let expected = 'Papa';
    expect(input).toBe(expected);
});

test('Takes a string and returns it reversed', () => {
    let input = reverseString('daddy');
    let expected = 'yddad';
    expect(input).toEqual(expected); 
});

describe('Caesar Cipher', () => {
    test('Takes a string and a shift factor and returns it with each character shifted', () => {
        let input = caesarCipher('xyz', 3);
        let expected = 'abc';
        expect(input).toEqual(expected);
        expect(() => caesarCipher(1)).toThrow('Input must be a string');
    })
});

describe('Analyze Array', () => {
    test('Takes an array of numbers and returns an object with: average, min, max, and length', () => {
        let input = analyzeArray([1,8,3,4,2,6]);
        let expected = {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        };
        expect(input).toStrictEqual(expected);
    });
});

describe('Calculator', () => {
    // Define test inputs.
    let firstNumber = 10;
    let secondNumber = 2;

    test('Addition', () => {
        let input = calculator.add(firstNumber, secondNumber);
        let expected = 12;
        expect(input).toEqual(expected);
    });

    test('Subtraction', () => {
        let input = calculator.subtract(firstNumber, secondNumber);
        let expected = 8;
        expect(input).toEqual(expected);
    });

    test('Division', () => {
        let input = calculator.divide(firstNumber, secondNumber);
        let expected = 5;
        expect(input).toEqual(expected);
    });

    test('Division by zero', () => {
        let input = () => calculator.divide(firstNumber, 0);
        expect(input).toThrow('Cannot divide by zero');
    });

    test('Multiplication', () => {
        let input = calculator.multiply(firstNumber, secondNumber);
        let expected = 20;
        expect(input).toEqual(expected);
    });
});
