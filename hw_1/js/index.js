// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let one = 1;
let ten = 10;
let minusNineHundredNinetyNine = -999;
let oneHundredTwentyThree = 123;
let pi = 3.14;
let twoAndSeven = 2.7;
let sixteen = 16;
let truth = true;
let lie = false;

//     Вивести кожну змінну за допомогою: console.log

console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(one);
console.log(ten);
console.log(minusNineHundredNinetyNine);
console.log(oneHundredTwentyThree);
console.log(pi);
console.log(twoAndSeven);
console.log(sixteen);
console.log(truth);
console.log(lie);

//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName;
let middleName;
let lastName;

firstName = 'Bida';
middleName = 'Marta';
lastName = 'Serhiivna';

let personOne = firstName + ' ' + middleName + ' ' + lastName;
console.log(personOne);

let personTwo = `${firstName} ${middleName} ${lastName}`;
console.log(personTwo);

//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100;
    let b = '100';
    let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name = prompt('What is your name?');
console.log(name);

let surname = prompt('What is your surname?');
console.log(surname);

let age = +prompt('How old are you?');
console.log(age);
