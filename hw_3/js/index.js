// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3;

if (x){
    console.log('Right!');
} else {
    console.log('False(');
}
//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 27;

if (time >= 0 && time <= 15){
    console.log('it is a first quarter');
} else if (time >= 16 && time <= 30){
    console.log('it is a second quarter');
} else if (time >= 31 && time <= 45){
    console.log('it is a third quarter');
} else if (time >= 46 && time <= 59) {
    console.log('it is a forth quarter');
} else {
    console.log('are you seriously right now?');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 8;

if (day >= 1 && day <= 10){
    console.log('it is a first');
} else if (day >= 11 && day <= 20){
    console.log('it is a second');
} else if (day >= 21 && day <= 31){
    console.log('it is a third');
} else {
    console.log('are you seriously right now?');
}

//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weekday = +prompt('What day is today?');

switch (weekday) {
    case 1:
        document.write('Monday');
        break;
    case 2:
        document.write('Tuesday');
        break;
    case 3:
        document.write('Wednesday');
        break;
    case 4:
        document.write('Thursday');
        break;
    case 5:
        document.write('Friday');
        break;
    case 6:
        document.write('Saturday');
        break;
    case 7:
        document.write('Sunday');
        break;
    default:
        document.write('Oh? duh...')
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let firstNumber = 8;
let secondNumber = 5;

if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else if (firstNumber < secondNumber) {
    console.log(secondNumber);
} else {
    console.log('equally')
}

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let y = 34 || 'default';
console.log(y);
