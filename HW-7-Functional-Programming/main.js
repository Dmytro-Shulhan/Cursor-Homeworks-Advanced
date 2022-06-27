"use strict"

const UKRAINE = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const LATVIA = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const LITVA = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Створіть функцію, яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.

function getMyTaxes(salary) {
    return (this.tax * salary).toFixed(2);
};

console.log(`1.1. Розрахунок податків для IT-спеціаліста в Україні:`, getMyTaxes.call(UKRAINE, 1500));
console.log(`1.2. Розрахунок податків для IT-спеціаліста в Латвії:`, getMyTaxes.call(LATVIA, 1500));
console.log(`1.3. Розрахунок податків для IT-спеціаліста в Литві:`, getMyTaxes.call(LITVA, 1500));

// 2. Створіть функцію, яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні.

function getMiddleTaxes() {
    return (this.tax * this.middleSalary).toFixed(2);
};

console.log(`2.1. Середній податок для IT-спеціалістів в Україні:`, getMiddleTaxes.call(UKRAINE));
console.log(`2.2. Середній податок для IT-спеціалістів в Латвії:`, getMiddleTaxes.call(LATVIA));
console.log(`2.3. Середній податок для IT-спеціалістів в Литві:`, getMiddleTaxes.call(LITVA));

// 3. Створіть функцію, яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні.

function getTotalTaxes() {
    return (this.tax * this.middleSalary * this.vacancies).toFixed(2);
};

console.log(`3.1. Загальний податок для усіх IT-спеціалістів в Україні:`, getTotalTaxes.call(UKRAINE));
console.log(`3.2. Загальний податок для усіх IT-спеціалістів в Латвії:`, getTotalTaxes.call(LATVIA));
console.log(`3.3. Загальний податок для усіх IT-спеціалістів в Литві:`, getTotalTaxes.call(LITVA));

// 4. Створіть функцію, яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.

function getMySalary() {
    setInterval(() => {
        const salary = Math.round(Math.random() * 500 + 1500);
        const taxes = Number (getMyTaxes.call(this, salary));
        console.log({
            salary: salary,
            taxes: taxes,
            profit: salary - taxes
        });
    }, 10000);
};

getMySalary.call(UKRAINE);