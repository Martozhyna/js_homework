// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// let i = 0;
// while (i < nums.length) {
//     console.log(nums[i]);
//     i++;
// }
// console.log('*******')
//     2. перебрати його циклом for

// for (const num of nums) {
//     console.log(num);
// }
// console.log('*******')
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i < nums.length) {
//     if (i % 2 === 1) {
//         console.log(nums[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести числа тільки з непарним індексом

// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (i % 2 === 1) {
//         console.log(num);
//     }
// }
// 5. перебрати циклом while та вивести числа тільки парні значення

// let i = 0;
// while (i < nums.length) {
//     if (i % 2 === 0) {
//         console.log(nums[i]);
//     }
//     i++;
// }
// 6. перебрати циклом for та вивести числа тільки парні значення

// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (i % 2 === 0) {
//         console.log(num);
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (num % 3 === 0) {
//         console.log('okten');
//     } else {
//         console.log(num);
//     }
// }

// 8. вивести масив в зворотньому порядку.

// for (let i = nums.length - 1; i >= 0; i--) {
//     const num = nums[i];
//     console.log(num);
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let i = nums.length - 1;
// while (i >= 0) {
//     console.log(nums[i]);
//     i--;
// }

// let i = nums.length - 1;
// while (i >= 0) {
//     if (i % 2 === 1) {
//         console.log(nums[i]);
//     }
//     i--;
// }

// for (let i = nums.length - 1; i >= 0; i--) {
//     const num = nums[i];
//     if (i % 2 === 1) {
//         console.log(num);
//     }
// }

// let i = nums.length - 1;
// while (i >= 0) {
//     if (nums[i] % 2 === 0) {
//         console.log(nums[i]);
//     }
//     i--;
// }

// for (let i = nums.length - 1; i >= 0; i--) {
//     const num = nums[i];
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// }

// for (let i = nums.length - 1; i >= 0; i--) {
//     const num = nums[i];
//     if (num % 3 === 0) {
//         console.log('okten');
//     } else {
//         console.log(num);
//     }
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let ages = [13, 13, 21, 16, 65, 65, 13, 10, 16, 101010101010];
// for (const age of ages) {
//     console.log(age);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let characters = ['Mabel', 'Dipper', 'Soos', 'Wendy', 'Stan', 'Stanly', 'Bill', 'Candy', 'Pacifica', 'Grenda'];
// for (const character of characters) {
//     console.log(character);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = ['Mabel', 13, true, 'Dipper', 14, false, 'Soos', 22, false, 'Wendy'];
// for (const arrElement of arr) {
//     console.log(arrElement);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// for (const arrElement of arr) {
//     if (typeof (arrElement) === "boolean" ) {
//         console.log(arrElement);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// for (const arrElement of arr) {
//     if (typeof (arrElement) === "number") {
//         console.log(arrElement);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// for (const arrElement of arr) {
//     if (typeof (arrElement) === "string") {
//         console.log(arrElement);
//     }
// }

//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 'Mabel';
// arr[1] = 13;
// arr [2] = true;
//
// for (const arrElement of arr) {
//     console.log(arrElement);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 11; i++) {
//     console.log(`${i}`);
//     document.write(`<div>${i}</div>`);
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 101; i++) {
//     console.log(`${i}`);
//     document.write(`<div>${i}</div>`);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 101; i+=2) {
//     console.log(`${i}`);
//     document.write(`<div>${i}</div>`);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 101; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i}`);
//         document.write(`<div>${i}</div>`);
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 0; i < 101; i++) {
//     if (i % 2 === 1) {
//         console.log(`${i}`);
//         document.write(`<div>${i}</div>`);
//     }
// }
//
//
// створити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        name: 'Harry Potter',
        pages: 213,
        authors: ['J.K.Rolling'],
        genre: ['fantasy']
    },
    {
        name: 'Sherlock Holmes',
        pages: 123,
        authors: ['Arthur Conan Doyle'],
        genre: ['detective', 'adventure']
    },
    {
        name: 'The name of the wild',
        pages: 156,
        authors: ['Patrick'],
        genre:  ['adventure']
    },
    {
        name: 'Sandman',
        pages: 65,
        authors: ['Arthur','Gaiman'],
        genre: ['detective', 'adventure']
    }
]

// -знайти наібльшу книжку.

let maxPage = books[0];
for (const book of books) {
    if (book.pages > maxPage.pages) {
        maxPage = book;
    }
}
console.log(maxPage.name);

// - знайти книжку/ки з найбільшою кількістю жанрів
let maxGenge = books[0];
for (const book of books) {
    if (book.genre.length > maxGenge.genre.length) {
        maxGenge = book;
    }
}
console.log(maxGenge.name);

// - знайти книжку/ки з найдовшою назвою

let maxTitle = books[0];
for (const book of books) {
    if (book.name.length > maxGenge.name.length) {
        maxTitle = book;
    }
}
console.log(maxTitle.name);

// - знайти книжку/ки які писали 2 автори

let twoAuthors = books[0];
for (const book of books) {
    if (book.authors.length === 2) {
        twoAuthors = book;
    }
}
console.log(twoAuthors.name);

// - знайти книжку/ки які писав 1 автор
let oneAuthor = books[0];
for (const book of books) {
    if (book.authors.length === 1) {
        console.log(book);
    }
}
