"use strict"

// 1. Створити функцію, яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.

function getMaxDigit(num) {
    const maxDigit = ('' + num).split('.').join('');
    return Math.max.apply(null, maxDigit.split(''));
}

// 2. Створити функцію, яка визначає ступінь числа.

function powNumber(a, b) {
    if (b === 0) return 1
    let result = a;
    for (let i = 1; i < Math.abs(b); i++) {
        result *= a;
    }
    return result
}

// 3. Створити функцію, яка форматує ім'я, роблячи першу букву великою.

function firstLetterCaps(string) {
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

// 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.

function sumWithoutTax(num, tax = 18 + 1.5) {
    return num - (num / 100 * tax)
}

// 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.

function getRandomNumber(N, M) {
    return Math.round(Math.random() * (M - N) + N)
}

// 6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові.

function countLetter(letter, word) {
    return (word.toLowerCase().match(RegExp(letter.toLowerCase(), "g"))||[]).length
}

// 7-8. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.

function convertCurrency(money) {
    const RATE = 25;
    if (money.includes('$') || money.toLowerCase().includes('usd')) {
        return parseInt(money) * RATE + " UAH";
    }
    if (money.toLowerCase().includes('uah')) {
    return parseInt(money) / RATE + " USD";
    }
    return 'Для конвертації використовуйте гривні та долари.'
}

// 9-10. Створіть функцію генерації випадкового паролю (тільки числа).

function getRandomPassword(res) {
    var length = 8,
	charset = "0123456789";
	res = '';
	for (var i = 0, n = charset.length; i < length; ++i) {
		res += charset.charAt(Math.floor(Math.random() * n));
	}
	return res;
}

// 11. Створіть функцію, яка видаляє всі букви з речення.

function deleteLetters(letter, string) {
    return string.replaceAll(letter, '')
}

// 12. Створіть функцію, яка перевіряє, чи є слово паліндромом.

function isPalyndrom(string) {
    const lowRegStr = string.toLowerCase().replaceAll(" ", "");
    const reverseStr = lowRegStr.split("").reverse().join("");
    if (lowRegStr === reverseStr) {
       return "Так!"
    } 
    else {
       return "Ні!"
    }
}

// 13. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.

function deleteDuplicateLetter(string) {
    let str = string.toLowerCase().split('').join('')
    for (let i = 0; i < string.length; i++) {
        if (countLetter(string[i], str) > 1) {
            str = deleteLetters(string[i], str)
            }
        }
    return str   
}

console.log(`1. Найбільша цифра в заданому числі: ${getMaxDigit(12345.87)}`)
console.log(`2. Піднесене число до стерпеня: ${powNumber(-3, -3)}`)
console.log(`3. Ім'я з великої літери: ${firstLetterCaps('дмИтро')}`)
console.log(`4. Сума після оплати податків: ${sumWithoutTax(7000)}`)
console.log(`5. Випадкове ціле число від 1 до 10: ${getRandomNumber(1, 10)}`)
console.log(`6. Кількість повторюваних літер: ${countLetter('П', 'Паралелепіпед')}`)
console.log(`7-8.1. Конвертація доларів в гривні: ${convertCurrency('100 uSd')}`)
console.log(`7-8.2. Конвертація гривень в долари: ${convertCurrency('2500 uaH')}`)
console.log(`7-8.3. Конвертація інших валют: ${convertCurrency('100 eur')}`)
console.log(`9-10. Генерація 8-значного паролю: ${getRandomPassword()}`)
console.log(`11. Видалення вказаної літери у рядку: ${deleteLetters('a', 'blablabla')}`)
console.log(`12.1. Чи є паліндромом слово "мадам"? ${isPalyndrom('мадам')}`)
console.log(`12.2. Чи є паліндромом слово "кокос"? ${isPalyndrom('кокос')}`)
console.log(`12.3. Чи є паліндромом вислів "Я несу гусеня"? ${isPalyndrom('Я несу гусеня')}`)
console.log(`13. Видалення однакових букв у рядку: ${deleteDuplicateLetter('Бісквіт був дуже ніжним')}`)

document.writeln(`1. Найбільша цифра в заданому числі: ${getMaxDigit(12345.87)}<br>`)
document.writeln(`2. Піднесене число до стерпеня: ${powNumber(-3, -3)}<br>`)
document.writeln(`3. Ім'я з великої літери: ${firstLetterCaps('дмИтро')}<br>`)
document.writeln(`4. Сума після оплати податків: ${sumWithoutTax(7000)}<br>`)
document.writeln(`5. Випадкове ціле число від 1 до 10: ${getRandomNumber(1, 10)}<br>`)
document.writeln(`6. Кількість повторюваних літер: ${countLetter('П', 'Паралелепіпед')}<br>`)
document.writeln(`7-8.1. Конвертація доларів в гривні: ${convertCurrency('100 uSd')}<br>`)
document.writeln(`7-8.2. Конвертація гривень в долари: ${convertCurrency('2500 uaH')}<br>`)
document.writeln(`7-8.3. Конвертація інших валют: ${convertCurrency('100 eur')}<br>`)
document.writeln(`9-10. Генерація 8-значного паролю: ${getRandomPassword()}<br>`)
document.writeln(`11. Видалення вказаної літери у рядку: ${deleteLetters('a', 'blablabla')}<br>`)
document.writeln(`12.1. Чи є паліндромом слово "мадам"? ${isPalyndrom('мадам')}<br>`)
document.writeln(`12.2. Чи є паліндромом слово "кокос"? ${isPalyndrom('кокос')}<br>`)
document.writeln(`12.3. Чи є паліндромом вислів "Я несу гусеня"? ${isPalyndrom('Я несу гусеня')}<br>`)
document.writeln(`13. Видалення однакових букв у рядку: ${deleteDuplicateLetter('Бісквіт був дуже ніжним')}<br>`)