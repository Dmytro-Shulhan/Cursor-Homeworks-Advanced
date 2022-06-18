"use strict"

const STUDENTS = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

// 1. Створіть функцію, яка повертає список предметів для конкретного студента.

function getSubject(student) {
    const subj = [];
    for (const obj of Object.keys(student.subjects)) {
        subj.push((obj[0].toUpperCase() + obj.slice(1)).replace('_', ' '));
    }
    return subj;
}

console.log(`1.1. Список предметів для студента ${(STUDENTS[0].name)}:`, getSubject(STUDENTS[0]));
console.log(`1.2. Список предметів для студента ${(STUDENTS[1].name)}:`, getSubject(STUDENTS[1]));
console.log(`1.3. Список предметів для студента ${(STUDENTS[2].name)}:`, getSubject(STUDENTS[2]));

// 2. Створіть функцію, яка поверне середню оцінку по усіх предметах для переданого студента.

function getAverageMark(student) {
    const averageMark = Object.values(student.subjects).flat();
    return (averageMark.reduce((a, b) => a + b, 0) / averageMark.length).toFixed(2);
}

console.log(`2.1. Середня оцінка з усіх предметів для студента ${(STUDENTS[0].name)}:`, getAverageMark(STUDENTS[0]));
console.log(`2.2. Середня оцінка з усіх предметів для студента ${(STUDENTS[1].name)}:`, getAverageMark(STUDENTS[1]));
console.log(`2.3. Середня оцінка з усіх предметів для студента ${(STUDENTS[2].name)}:`, getAverageMark(STUDENTS[2]));

// 3. Створіть функцію, яка повертає інформацію загального виду по переданому студенту.

function getStudentInfo(student) {
  return {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student)
  };
}

console.log(`3.1. Загальна інформація про студента ${(STUDENTS[0].name)}:`, getStudentInfo(STUDENTS[0]));
console.log(`3.2. Загальна інформація про студента ${(STUDENTS[1].name)}:`, getStudentInfo(STUDENTS[1]));
console.log(`3.3. Загальна інформація про студента ${(STUDENTS[2].name)}:`, getStudentInfo(STUDENTS[2]));

// 4. Ствроіть функцію, яка повертає імена студентів у алфавітному порядку.

function getStudentsNames(students) {
  return students.map((stud) => stud.name).sort();
}

console.log(`4. Імена студентів у алфавітному порядку:`, getStudentsNames(STUDENTS));

// 5. Створіть функцію, яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students) {
  return students.map(averMark =>
    getStudentInfo(averMark)).reduce((a, b) =>
    a.averageMark > b.averageMark ? a : b).name;
}

console.log(`5. Кращий студент по показнику середньої оцінки:`, getBestStudent(STUDENTS));

// 6. Створіть функцію, яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

function calculateWordLetters(word) {
  const obj = {};
  word.split("").forEach(i => obj[i] = (obj[i] || 0) + 1);
  return obj;
}

console.log(`6. Обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень:`, calculateWordLetters("тест"));