"use strict"

// 1. Створіть функцію, яка повертає масив випадкових цілих чисел.

function getRandomArray(length, min, max) {
    const randomNumbers = [];
    for (let i = 0; i < length; i++) {
        randomNumbers.push(Math.round(Math.random() * (max - min) + min));
    }
    return randomNumbers;
}

console.log(`1. 15 рандомних чисел від 1 до 100:`, getRandomArray(15, 1, 100));

// 2. Створіть функцію, яка вираховує моду всіх переданих в неї аргументів.

function getModa(...numbers) {
    const integerNum = numbers.filter((item) => Number.isInteger(item));
    const moda = {};
    let max = 0, count = 0;
    for (let i = 0; i < integerNum.length; i++) {
       const num = integerNum[i];
       moda[num] = (moda[num] || 0) + 1;
       if (count < moda[num]) {
          max = num;
          count = moda[num];
       }
    }
    return max;
 }

console.log(`2. Визначення моди даних чисел (не враховуючи нецілі числа):`, getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1));

// 3. Створіть функцію, яка рахує середнє арифметичне всіх переданих в неї аргументів.

function getAverage(...numbers) {
    const integerNum = numbers.filter(item => Number.isInteger(item));
    return integerNum.reduce((a, b) => a + b, 0) / integerNum.length;
}

console.log(`3. Визначення середнього арифметичного значення даних чисел (не враховуючи нецілі числа):`, getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 0.1));

// 4. Створіть функцію, яка рахує медіану всіх переданих в неї аргументів.

function getMedian(...numbers) {
    const integerNum = numbers.filter(item => Number.isInteger(item));
    integerNum.sort((a, b) => a - b);
    if (integerNum.length % 2 === 0) {
        return (integerNum[integerNum.length / 2 - 1] + integerNum[integerNum.length / 2]) / 2;
    } else {
        return integerNum[Math.floor(integerNum.length / 2)];
    }
}

console.log(`4.1. Визначення медіани даних чисел (не враховуючи нецілі числа):`, getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 0.1));
console.log(`4.2. Визначення медіани даних чисел (не враховуючи нецілі числа):`, getMedian(1, 2, 3, 4, 5, 0.1));
console.log(`4.3. Визначення медіани даних чисел (не враховуючи нецілі числа):`, getMedian(1, 2, 3, 4, 0.1));

// 5. Створіть функцію, яка фільтрує парні числа передані як аргументи функції.

function filterEvenNumbers(...numbers) {
    return numbers.filter((item) => item % 2 !== 0);
}

console.log(`5. Фільтрування парних чисел:`, filterEvenNumbers(1, 2, 3, 4, 5, 6));

// 6. Створіть функцію, яка порахує кількість чисел більших 0.

function countPositiveNumbers(...numbers) {
    return numbers.filter((item) => item > 0).length;
}

console.log(`6. Визначення кількості чисел більших '0':`, countPositiveNumbers(1, -2, 3, -4, -5, 6));

// 7. Створіть функцію, яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5.

function getDividedByFive(...numbers) {
    return numbers.filter((item) => item % 5 === 0);
}

console.log(`7. Фільтрування даних чисел, які не діляться на '5':`, getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 8. Створіть функцію, яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).

function replaceBadWords(string) {
    const badWords = ["fuck", "shit"];
    const blurWords = badWords.reduce((str, badWord) => {
        return str.split(badWord).join('*'.repeat(badWord.length))
    }, string);
    return blurWords;
}

console.log(`8.1. Заміна поганих слів на '*':`, replaceBadWords("Are you fucking kidding?"));
console.log(`8.2. Заміна поганих слів на '*':`, replaceBadWords("Holy shit!"));
console.log(`8.3. Заміна поганих слів на '*':`, replaceBadWords("It's bullshit!"));

// 9. Створіть функцію, яка розбиває кожне слово на умовні склади по 3 букви.

function divideByThree(word) {
    const divideArr = [];
    const letter = word.toLowerCase().split('');
    for (let i = 0; i < letter.length; i += 3) {
        divideArr.push(letter.slice(i, i + 3).join(''));
    }
    return divideArr;
}

console.log(`9.1. Поділ слів на умовні склади по три літери:`, divideByThree("Commander"));
console.log(`9.2. Поділ слів на умовні склади по три літери:`, divideByThree("live"));

// 10. Створіть функцію, яка видасть всі можливі перестановки (унікальні, без повторень) букв в слові.

function generateCombinations(word) {
    const sortArr = [];
    for (let i = 0; i < word.length; i++) {
        let combLetters = generateCombinations(word.slice(0, i) + word.slice(i + 1, word.length));
        for (let j = 0; j < combLetters.length; j++) {
            sortArr.push(word[i] + combLetters[j]);
        }
        if (word.length < 2) return [word];
    }
    return sortArr;
}

console.log(`10.1. Визначення усіх можливих (унікальних) перестановок літер у слові:`, generateCombinations("man"));
console.log(`10.2. Визначення усіх можливих (унікальних) перестановок літер у слові:`, generateCombinations("ol"));