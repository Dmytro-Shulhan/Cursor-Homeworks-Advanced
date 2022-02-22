"use strict"

let numberN
do {
    numberN = +prompt('Введіть ціле число N:')
} while (!Number.isInteger(numberN))
console.log(`Число N: ${numberN}`)
document.writeln(`Число N: ${numberN}<br>`)

let numberM
do {
    numberM = +prompt('Введіть ціле число M:')
} while (!Number.isInteger(numberM))
console.log(`Число M: ${numberM}`)
document.writeln(`Число M: ${numberM}<br>`)

const evenNumbers = confirm('Не враховувати парні числа?')
console.log(`Не враховувати парні числа? ${evenNumbers}`)
document.writeln(`Не враховувати парні числа? ${evenNumbers}<br>`)

let sumNum = 0
for (let i = numberN; i <= numberM; i++) {
    if (evenNumbers && i % 2 === 0) continue
    sumNum += i
}
console.log(`Сума складених чисел: ${sumNum}`)
document.writeln(`Сума складених чисел: ${sumNum}`)