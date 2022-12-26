// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//
let hello = 'hello';
console.log(hello);
// alert(hello);
document.write(hello);

let owu = 'owu';
console.log(owu);
// alert(owu);
document.write(owu);

let com = 'com';
console.log(com);
// alert(com);
document.write(com);

let ua = 'ua';
console.log(ua);
// alert(ua);
document.write(ua);

let one = 1;
console.log(one);
// alert(one);
document.write(one);

let ten = 10;
console.log(ten);
// alert(ten);
document.write(ten);

let minusNineHundredNinetyNine = -999;
console.log(minusNineHundredNinetyNine);
// alert(minusNineHundredNinetyNine);
document.write(minusNineHundredNinetyNine);

let oneHundredTwentyThree = 123;
console.log(oneHundredTwentyThree);
// alert(oneHundredTwentyThree);
document.write(oneHundredTwentyThree);

let pi = 3.14;
console.log(pi);
// alert(pi);
document.write(pi);

let twoAndSeven = 2.7;
console.log(twoAndSeven);
// alert(twoAndSeven);
document.write(twoAndSeven);

let sixteen = 16;
console.log(sixteen);
// alert(sixteen);
document.write(sixteen);

let truth = true;
console.log(truth);
// alert(truth);
document.write(truth);

let lie = false;
console.log(lie);
// alert(lie);
document.write(lie);
//
//
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Bida';
let middleName = 'Marta';
let lastName = 'Serhiivna';

let person1 = firstName + ' ' + middleName + ' ' + lastName;
console.log(person1);

let person2 = `${firstName} ${middleName} ${lastName}`;
console.log(person2);

//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100;
console.log(typeof a);

 let b = '100';
console.log(typeof b);

    let c = true;
console.log(typeof c);

//
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
// ******yes
//
// let name = prompt('What is your name?');
// console.log(name);
//
// let secondName = prompt('What is your second name?');
// console.log(secondName);
//
// let age = +prompt('How old are you?');
// console.log(age);
//
//
// *******no
//
// - Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let books = [
    {
        name: 'I',
        pages: 123,
        genre: 'fantasy',
        author: 'Martha'
    },
    {
        name: 'Love',
        pages: 234,
        genre: 'adventures',
        author: 'Marta'
    },
    {
        name: 'You',
        pages: 345,
        genre: 'drama',
        author: 'Maruta'
    }

]
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);
//
// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)

book = {
    name: 'I lie you',
    pages: 456,
    genre: 'melodrama'
}
console.log(book);
//
// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)

let anotherBook = {
    name: 'I am joke',
    pages: 567,
    genre: 'comedy',
    authors: ['Mis', 'Marta', 'Kratkovska']
}
console.log(anotherBook);