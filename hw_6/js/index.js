// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let helloWorld = 'hello world';
console.log(helloWorld.length);

let loremIpsum = 'lorem ipsum';
console.log(loremIpsum.length);

let javascriptIsCool = 'javascript is cool';
console.log(javascriptIsCool.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(helloWorld.toUpperCase());

console.log(loremIpsum.toUpperCase());

console.log(javascriptIsCool.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let helloWorldUpper = 'HELLO WORLD';
console.log(helloWorldUpper.toLowerCase());

let loremIpsumUpper = 'LOREM IPSUM';
console.log(loremIpsumUpper.toLowerCase());

let javascriptIsCoolUpper = 'JAVASCRIPT IS COOL';
console.log(javascriptIsCoolUpper.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let str = ' dirty string   '
console.log(str.length);
let strNew = str.trim();
console.log(strNew.length);
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
let string = 'Ревуть воли як ясла повні';

function stringToarray(str) {
    return str.split(' ');

}
let arr = stringToarray(string);
console.log(arr);

// - є масив чисел. за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let result = nums.map(value => value.toString());
console.log(result);

// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
let numbers = [11,21,3];

function sortNums(nums,direction) {
    if (direction === 'ascending') {
        console.log(nums.sort((a, b) => a - b));
    } else if (direction === 'descending') {
        console.log(nums.sort((a, b) => b - a));
    }

}

sortNums(numbers, 'ascending');
sortNums(numbers, 'descending');

//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sort);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);
//
// описати колоду карт
let cards = [
    {cardSuit: 'clubs', value: 'Ace', color:'black'},
    {cardSuit: 'clubs', value: 2, color:'black'},
    {cardSuit: 'clubs', value: 3, color:'black'},
    {cardSuit: 'clubs', value: 4, color:'black'},
    {cardSuit: 'clubs', value: 5, color:'black'},
    {cardSuit: 'clubs', value: 6, color:'black'},
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 'Jack', color:'black'},
    {cardSuit: 'clubs', value: 'Queen', color:'black'},
    {cardSuit: 'clubs', value: 'King', color:'black'},

    {cardSuit: 'diamonds', value: 'Ace', color:'red'},
    {cardSuit: 'diamonds', value: 2, color:'red'},
    {cardSuit: 'diamonds', value: 3, color:'red'},
    {cardSuit: 'diamonds', value: 4, color:'red'},
    {cardSuit: 'diamonds', value: 5, color:'red'},
    {cardSuit: 'diamonds', value: 6, color:'red'},
    {cardSuit: 'diamonds', value: 7, color:'red'},
    {cardSuit: 'diamonds', value: 8, color:'red'},
    {cardSuit: 'diamonds', value: 9, color:'red'},
    {cardSuit: 'diamonds', value: 10, color:'red'},
    {cardSuit: 'diamonds', value: 'Jack', color:'red'},
    {cardSuit: 'diamonds', value: 'Queen', color:'red'},
    {cardSuit: 'diamonds', value: 'King', color:'red'},

    {cardSuit: 'hearts', value: 'Ace', color:'red'},
    {cardSuit: 'hearts', value: 2, color:'red'},
    {cardSuit: 'hearts', value: 3, color:'red'},
    {cardSuit: 'hearts', value: 4, color:'red'},
    {cardSuit: 'hearts', value: 5, color:'red'},
    {cardSuit: 'hearts', value: 6, color:'red'},
    {cardSuit: 'hearts', value: 7, color:'red'},
    {cardSuit: 'hearts', value: 8, color:'red'},
    {cardSuit: 'hearts', value: 9, color:'red'},
    {cardSuit: 'hearts', value: 10, color:'red'},
    {cardSuit: 'hearts', value: 'Jack', color:'red'},
    {cardSuit: 'hearts', value: 'Queen', color:'red'},
    {cardSuit: 'hearts', value: 'King', color:'red'},
    {value: 'Joker', color:'red'},

    {cardSuit: 'spades', value: 'Ace', color:'black'},
    {cardSuit: 'spades', value: 2, color:'black'},
    {cardSuit: 'spades', value: 3, color:'black'},
    {cardSuit: 'spades', value: 4, color:'black'},
    {cardSuit: 'spades', value: 5, color:'black'},
    {cardSuit: 'spades', value: 6, color:'black'},
    {cardSuit: 'spades', value: 7, color:'black'},
    {cardSuit: 'spades', value: 8, color:'black'},
    {cardSuit: 'spades', value: 9, color:'black'},
    {cardSuit: 'spades', value: 10, color:'black'},
    {cardSuit: 'spades', value: 'Jack', color:'black'},
    {cardSuit: 'spades', value: 'Queen', color:'black'},
    {cardSuit: 'spades', value: 'King', color:'black'},
    {value: 'Joker', color:'black'},

];
// - знайти піковий туз

let findSpadesAce = cards.filter(value => value.cardSuit === 'spades' && value.value === 'Ace');
console.log(findSpadesAce);

// - всі шістки

let findSix = cards.filter(value => value.value === 6);
console.log(findSix);

// - всі червоні карти

let findRedCards = cards.filter(value => value.color === 'red');
console.log(findRedCards);

// - всі буби

let findClubs = cards.filter(value => value.cardSuit === 'clubs');
console.log(findClubs);

// - всі трефи від 9 та більше

let findDiamondsOlderNine = cards.filter(value => value.cardSuit === 'diamonds' && value.value >= 9 + " ");
console.log(findDiamondsOlderNine);


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт


let value = cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spades') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamonds') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'hearts') {
        accumulator.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;

}, {spades: [], diamonds: [], hearts: [], clubs: []});

console.log(value);