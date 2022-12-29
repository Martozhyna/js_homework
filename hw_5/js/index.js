// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function theAreaOfTheRectangle(a,b) {
    return a * b;
}

console.log(theAreaOfTheRectangle(3, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaOfACircle(p,r) {
    return p * Math.pow(r, 2);
    
}

console.log(areaOfACircle(3.14, 3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaOfTheCylinder(p,r,h) {
    let res = 2 * p * r * h;
    return res.toFixed(1);

}

console.log(areaOfTheCylinder(3.14, 5, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

let characters = ['Mabel', 'Dipper', 'Soos', 'Wendy', 'Stan', 'Stanly', 'Bill', 'Candy', 'Pacifica', 'Grenda'];
function characterArray(item) {
    for (const itemElement of item) {
        console.log(itemElement);
    }

}

characterArray(characters);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text) {
//     document.write(`<p>${text}</p>`);
//
// }
//
// paragraph('Mabel is the best of the best!');

function paragraph(teg,text) {
    document.write(`<${teg}>${text}</${teg}>`);

}

paragraph('h2','Mabel is the best of the best!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li><li>${text}</li><li>${text}</li>`);
    document.write(`</ul>`);

}

list('Dipper is older than Mabel');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulka(num,text) {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);

}

ulka(4, 'Dipper');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr = ['Mabel', 13, true, 'Dipper', 14, false, 'Soos', 22, false, 'Wendy'];
function listOfArr(arr) {
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`);
}

listOfArr(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {
        id: 1,
        name: 'Mabel',
        age: 13
    },
    {
        id: 2,
        name: 'Dipper',
        age: 13
    },
    {
        id: 3,
        name: 'Soos',
        age: 23
    }

]

function listOfUsers(usersInform) {
    for (const usersInformElement of usersInform) {
        document.write(`<div>${usersInformElement.id}. ${usersInformElement.name}. Age: ${usersInformElement.age}</div>`);
    }

}

listOfUsers(users);

// - створити функцію яка повертає найменьше число з масиву

let numbers = [100000000, 93735, 2984537, -88, 0, -2833748484, 283];

let minNum = numbers[0];
function search(numsArray) {
    for (const numsArrayElement of numsArray) {
        if (numsArrayElement < minNum) {
            minNum = numsArrayElement;
        }
    }
    return minNum;
}

console.log(search(numbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let nums = [12, -86, 102];

let empty = 0;
function sum(numbers) {
    for (const number of numbers) {
        empty += number;
    }
    return empty;
}

console.log(sum(nums));