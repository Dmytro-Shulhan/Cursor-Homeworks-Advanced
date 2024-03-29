"use strict"

class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.status = false;
    };

    getInfo() {
        return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}.`
    };

    get getMarks() {
        if (this.status) return null
        return this.marks;
    };

    set newMarks(student) {
        if (this.status) return null
        this.marks.push(student);
    };

    getAverageMark() {
        if (this.status) return null
        return this.marks.reduce((acc, el) => acc + el) / this.marks.length;
    };

    dismiss() {
        this.status = true;
    };

    recover() {
        this.status = false;
    };
}

const student = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський Бендер", [5, 4, 4, 5]);
console.log(student.getInfo());
console.log(student.getMarks);
student.newMarks = 5;
console.log(student.getMarks);
console.log(student.getAverageMark());
student.dismiss();
console.log(student.getMarks);
student.recover();
console.log(student.getMarks);

// Advanced

class BudgetStudent extends Student {
    constructor(university, course, fullName, marks) {
        super(university, course, fullName, marks);
        setInterval(() => this.getScholarship(), 30000);
    };

    getScholarship() {
        if(!this.status && this.getAverageMark() >= 4) {
            console.log(`${this.fullName}, ви отримали 1400 грн. стипендії!`);
        }
        if(this.getAverageMark() < 4) {
            console.log(`${this.fullName}, ви втратили стипендію!`);
        } 
    }
}

const budgetStudent1 = new BudgetStudent("Гарвардського коледжу", 1, "Білл Гейтс", [5, 5, 5, 5])
console.log(budgetStudent1.getInfo());
console.log(budgetStudent1.getMarks);
console.log(budgetStudent1.getAverageMark());

const budgetStudent2 = new BudgetStudent("Рід-Коледжу", 1, "Стів Джобс", [3, 3, 3, 3])
console.log(budgetStudent2.getInfo());
console.log(budgetStudent2.getMarks);
console.log(budgetStudent2.getAverageMark());


//46           ------   2021 (10) / 2022 (13) / 2023 (0)
    // 22.02-new
    // 23.02-duplicate
    // 24.02-duplicate
    // 25.02-duplicate
    // 26.02-duplicate
    // 27.02-duplicate
    // 28.02-new
    // 29.02-duplicate
    // 01.03-new
    // 02.03-duplicate
    // 03.03-duplicate
    // 04.03-duplicate
    // 05.03-duplicate
    // 06.03-duplicate - 42
    // 07.03-duplicate - 43
    // 08.03-duplicate - 44
    // 09.03-duplicate - 45
    // 10.03-duplicate - 46
    // 11.03-duplicate - 47
    // 12.03-duplicate - 48
    // 13.03-duplicate - 49
    // 14.03-duplicate - 50
    // 15.03-duplicate - 51
    // 16.03-duplicate - 52
    // 17.03-duplicate - 53
    // 18.03-duplicate - 54
    // 19.03-duplicate - 55
    // 20.03-duplicate - 56
    // 21.03-duplicate - 57
    // 22.03-duplicate - 58
    // 23.03-duplicate - 59
    // 24.03-duplicate - 60
    // 25.03-new - 61
    // 26.03-duplicate - 62
    // 27.03-duplicate - 63
    // 28.03-duplicate - 64
