function capitalize(stringToBeCapitalized) {
    if (typeof stringToBeCapitalized !== 'string' || stringToBeCapitalized.length === 0) {
        return ''; // Handle non-string inputs and empty strings
    }
    return stringToBeCapitalized[0].toUpperCase() + stringToBeCapitalized.slice(1);
}

function reverseString(stringToBeReversed) {
    return stringToBeReversed.split('').reverse().join('');
}

function resizer(key) {
    if (key >= 0 && key < 26) return key; // Base case for valid range
    if (key > 25) return resizer(key - 26); // Handle wrapping for large keys
    if (key < 0) return resizer(26 + key); // Handle wrapping for negative keys
}

function caesarCipher(stringOnShift, key) {
    if (typeof stringOnShift !== 'string') throw new Error('Input must be a string.');

    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetsArray = [...alphabets];
    let stringsArray = stringOnShift.split('');
    let cipheredText = '';

    for (const letter of stringsArray) {
        // Preserve non-alphabetic characters
        if (!alphabetsArray.includes(letter.toLowerCase())) {
            cipheredText += letter;
            continue;
        }

        let isUpperCase = letter === letter.toUpperCase();
        let originalIndex = alphabetsArray.indexOf(letter.toLowerCase());
        let newIndex = resizer(originalIndex + key); // Use custom resizer logic
        cipheredText += isUpperCase
            ? alphabetsArray[newIndex].toUpperCase()
            : alphabetsArray[newIndex];
    }

    return cipheredText;
}

// Tests
console.log(caesarCipher('xyz', 3)); // Expected: 'abc'
console.log(caesarCipher('abc', -3)); // Expected: 'xyz'
console.log(caesarCipher('Hello, --- World!', 5)); // Expected: 'Mjqqt, Btwqi!'
console.log(caesarCipher('Mjqqt, Btwqi!', -5)); // Expected: 'Hello, World!'

function analyzeArray(array) {
    if (!Array.isArray(array)) throw new Error('I need an array');

    const average = (array) => {
        let sumOfArray = array.reduce((prev, curr) => prev + curr, 0);
        return sumOfArray / array.length;
    };

    const min = (array) => {
        return array.sort((a, b) => a - b)[0];
    };

    const max = (array) => {
        return array.sort((a, b) => a - b)[array.length - 1];
    };

    return {
        average: average(array), 
        min: min(array),         
        max: max(array),         
        length: array.length,  
    };
}

class Calculator {
    add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    subtract(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }

    divide(firstNumber, secondNumber) {
        if (secondNumber === 0) {
            throw new Error('Cannot divide by zero');
        }
        return firstNumber / secondNumber;
    }    

    multiply(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }
}

const calculator = new Calculator();

export { 
    capitalize,
    reverseString,
    caesarCipher,
    analyzeArray,
    calculator,
    };