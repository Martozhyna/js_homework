// 1. Створити пустий масив та :
// let numbers = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         numbers.push(i);
//     }
//
// }
// console.log(numbers);

//     b. заповнити його 50 непарними числами за допомоги циклу.

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         numbers.push(i);
//     }
//
// }
// console.log(numbers);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//     numbers.push(Math.random());
// }
// console.log(numbers);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//
//     numbers.push( Math.random() * (732-8)+8);
// }
//
// console.log(numbers);

// 2. Вивести за допомогою console.log кожен третій елемен
let nums = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (i % 3 === 0) {
        console.log(num);
    }
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (i % 3 === 0 && num % 2 === 0) {
        console.log(num);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let newNums = [];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (i % 3 === 0 && num % 2 === 0) {
        newNums.push(num);
        console.log(newNums);
    }
}
// 5. Вивести кожен елемент масиву, сусід справа якого є парним

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        console.log(nums[i - 1]);
    }

}
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let numbers = [100, 250, 50, 168, 120, 345, 188];
let average = 0;
for (const number of numbers) {
    average += number;
}
console.log(average/numbers.length);

//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arr = [];
let newArr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Math.random());

}
for (const arrElement of arr) {
    newArr.push(arrElement*5);
}
console.log(newArr);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
let characters = ['Mabel', 13, true, 'Dipper', 14, false, 'Soos', 22, false, 'Wendy'];
let numberss = [];
for (const character of characters) {
    if (typeof character === 'number') {
        numberss.push(character);
    }
}
console.log(numberss);
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
let usersWithCities = [];

for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id) {

           let a =  {user, address: city}
            usersWithCities.push(a);



        }
    }
}
console.log(usersWithCities);

//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let n = [1, 34, 2345, 9273, 27, 3, 58, 235, 54, 23];
for (const number of n) {
    if (number % 2 === 0) {
        console.log(number);
    }
}
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//

let nu = [];
for (const nuElement of n) {

    nu.push(nuElement);

}
console.log(nu);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let abc = ['a', 'b', 'c'];
let string = '';
for (let i = 0; i < abc.length; i++) {
    const abcElement = abc[i];
    string += abcElement;
}
console.log(string);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let s = '';
let i = 0;
while (i < abc.length) {
    s += abc[i];
    i++;
}

console.log(s);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let str = '';
for (const string of abc) {
    str = str + string;
}
console.log(str);