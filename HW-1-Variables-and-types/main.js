"use strict"

const BREAD = 15.678
const MEAT = 123.965
const MILK = 90.2345

//Максимальна ціна
const MAX_PRICE = Math.max(BREAD, MEAT, MILK)
console.log(`Максимальна ціна: ${MAX_PRICE}`)
document.writeln(`Максимальна ціна: ${MAX_PRICE}<br>`)

//Мінімальна ціна
const MIN_PRICE = Math.min(BREAD, MEAT, MILK)
console.log(`Мінімальна ціна: ${MIN_PRICE}`)
document.writeln(`Мінімальна ціна: ${MIN_PRICE}<br>`)

//Вартість усіх товарів
const SUM_PRICE = BREAD + MEAT + MILK
console.log(`Вартість усіх товарів: ${SUM_PRICE}`)
document.writeln(`Вартість усіх товарів: ${SUM_PRICE}<br>`)

//Округлена вартість усіх товарів
const ROUNDING_PRICE_ALL =
    Math.floor(BREAD) +
    Math.floor(MEAT) +
    Math.floor(MILK)
console.log(`Округлена вартість усіх товарів: ${ROUNDING_PRICE_ALL}`)
document.writeln(`Округлена вартість усіх товарів: ${ROUNDING_PRICE_ALL}<br>`)

//Сума товарів округлена до сотень
const HUND_ROU_PRICE = Math.round(SUM_PRICE / 100) * 100
console.log(`Сума товарів округлена до сотень: ${HUND_ROU_PRICE}`)
document.writeln(`Сума товарів округлена до сотень: ${HUND_ROU_PRICE}<br>`)

//Перевірка парності суми товарів
const PARSITY_PRICE = ROUNDING_PRICE_ALL % 2 === 0
console.log(`Чи парне число? ${PARSITY_PRICE}`)
document.writeln(`Чи парне число? ${PARSITY_PRICE}<br>`)

//Решта з 500
const REST = 500 - SUM_PRICE
console.log(`Решта з 500: ${REST}`)
document.writeln(`Решта з 500: ${REST}<br>`)

//Середнє значення цін
const AVARAGE_PRICE = (SUM_PRICE / 3).toFixed(2)
console.log(`Середнє значення цін: ${AVARAGE_PRICE}`)
document.writeln(`Середнє значення цін: ${AVARAGE_PRICE}<br>`)

//Випадкова знижка 5-30%
const RANDOM_DISCOUNT = Math.round(Math.random() * (30 - 5) + 5)
console.log(`Випадкова знижка 5-30%: ${RANDOM_DISCOUNT}`)
document.writeln(`Випадкова знижка 5-30%: ${RANDOM_DISCOUNT}<br>`)

//Ціна товару із знижкою
const PRICE_WITH_DISCOUNT = (SUM_PRICE - SUM_PRICE * RANDOM_DISCOUNT / 100).toFixed(2)
console.log(`Ціна товару із знижкою: ${PRICE_WITH_DISCOUNT}`)
document.writeln(`Ціна товару із знижкою: ${PRICE_WITH_DISCOUNT}<br>`)

//Чистий прибуток з урахуванням знижки
const NET_PROFIT = (SUM_PRICE / 2 - SUM_PRICE * RANDOM_DISCOUNT / 100).toFixed(2)
console.log(`Чистий прибуток з урахуванням знижки: ${NET_PROFIT}`)
document.writeln(`Чистий прибуток з урахуванням знижки: ${NET_PROFIT}`)