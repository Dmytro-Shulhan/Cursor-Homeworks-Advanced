"use strict"

const STUDENTS = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const THEMES = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const MARKS = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.

function getPairs() {
    const arrPairs = [];
    let copyArr = [...STUDENTS];
    copyArr.splice (1, 2, "Олена", "Ігор");
    for (let i = 0; i < copyArr.length; i += 2) {
        arrPairs.push([copyArr[i], copyArr[i + 1]]);
    }
    return arrPairs;
};

// // 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.

function getProjectForPair() {
    const arrProjects = [];
    for (let i = 0; i < pairs.length; i++) {
        arrProjects.push([pairs[i][0] + ' та ' + pairs[i][1], THEMES[i]]);
    }
    return arrProjects;
};

// // 3. Зіставте оцінки(marks) зі студентом(students).

function markForStudent() {
    const arrMarks = [];
    for (let i = 0; i < STUDENTS.length; i++) {
        arrMarks.push([STUDENTS[i], MARKS[i]]);
    }
    return arrMarks;
};

// // 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт.

function randomMarkForPair() {
    const arrRandomMarks = [];
    for (let i = 0; i < projects.length; i++) {
        // arrRandomMarks.push([pairs[i][0] + ' та ' + pairs[i][1], themes[i], Math.round(Math.random() * 4 + 1)]);
        arrRandomMarks.push([projects[i].join(", "), Math.round(Math.random() * 4 + 1)]);
    }
    return arrRandomMarks;
};

const pairs = getPairs();
console.log(pairs);

const projects = getProjectForPair();
console.log(projects);

const studentsMarks = markForStudent();
console.log(studentsMarks);

const randomMarks = randomMarkForPair();
console.log(randomMarks);