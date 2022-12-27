// - Нам дано масив друзів. Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому 3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//
//
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
 if (friends.length >= 3){
     document.write('It is a big array');
 } else {
     document.write('It is a small array');
 }

//
// - Маємо 3 числа і між ними нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

let firstNumber = 98635;
let secondNumber = 76468;
let thirdNumber = 38479;

if (firstNumber > secondNumber && firstNumber < thirdNumber || firstNumber < secondNumber && firstNumber > thirdNumber) {
    document.write(firstNumber);
} else if (secondNumber > firstNumber && secondNumber < thirdNumber || secondNumber < firstNumber && secondNumber > thirdNumber) {
    document.write(secondNumber);
} else if (thirdNumber > firstNumber && thirdNumber < secondNumber || thirdNumber < firstNumber && thirdNumber > secondNumber) {
    document.write(thirdNumber);
} else {
    document.write('Write three different numbers');
}

//
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//
let a = 3;
let b = 0;
let result = (a + b > 4) ? 'Many' : 'Not many';
console.log(result);

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
//
let num = -44;
let check = num > 0 ? 'Positive number' : num < 0 ? 'Negative number' : 'It is 0';
console.log(check);

//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = false;

if (test) {
    console.log('It is true');
} else {
    console.log('It is false');
}

let results = test ? 'It is true' : 'It is false';
console.log(results);

//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//
// let answer = prompt('What is the "official" name of JavaScript');
//
// if (answer === 'ECMAScript') {
//     document.write('Right!');
// } else {
//     document.write('ECMAScript')
// }
//
//
//
//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
// let numbersFlat = prompt('What is your flats number?');

// if (numbersFlat >= 1 && numbersFlat <= 20){
//     console.log(1);
// } else if (numbersFlat >= 21 && numbersFlat <= 48) {
//     console.log(2);
// } else if (numbersFlat >= 49 && numbersFlat <= 90) {
//     console.log(3);
// } else {
//     console.log('???');
// }

//
// - Ми маємо змінну number в яку користувач задає числове значення, якщо змінна дорівнює 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let number = 10;
let checkNumber = number === 10 ? 'Right' : 'Not right';
console.log(checkNumber);
//
//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ.
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temperature = -20;

if (temperature >= 10 && temperature <= 22) {
    console.log('Go');
} else {
    console.log('Stay at home');
}
//
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді вивести Повідомлення - що число не вірне ... .
let numBer = 3;
switch (numBer) {
    case 1:
        console.log('Car');
        break;
    case  2:
        console.log('Motorbike');
        break;
    case  3:
        console.log('Phone');
        break;
    case 4:
        console.log('Flat');
        break;
    case 5:
        console.log('Candy');
        break;
    default:
        console.log('No prize');

}
