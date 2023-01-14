// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let num = [2, 4, -6, 7];

let empty = 0;

let average = (numbers) => {
    for (const number of numbers) {
        empty += number;
    }
    return empty / numbers.length;
}

console.log(average(num));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let min = (numbers) => {
    let min = numbers[0];
    let max = numbers[0];

    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }


    }console.log(max);
    return min;
}
console.log(min(num));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.



let random = () => {
    let randomNums = [];
    for (let i = 0; i < 10; i++) {
        randomNums.push(Math.round(Math.random() * 100));
    }

    console.log(randomNums);

}

random();


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let randomWithLimit = (limit) => {
    let randomNums = [];
    for (let i = 0; i < limit; i++) {
        randomNums.push(Math.round(Math.random() * 100));

    }
    console.log(randomNums);
}

randomWithLimit(9);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let revers = (array) => {
    let newArray = [];
    for (let i = array.length-1; i >= 0; i--) {
        const arrayElement = array[i];
        newArray.push(arrayElement);
    }
    console.log(newArray);
}

revers(num);

//
//
//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let theAreaOfTheRectangle = (a, b) => a * b;

console.log(theAreaOfTheRectangle(2, 7));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let areaOfACircle = (p,r) => p * Math.pow(r, 2);

console.log(areaOfACircle(3.14, 8));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let areaOfTheCylinder = (p,r,h) => 2 * p * r * h;

console.log(areaOfTheCylinder(3.14, 3, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент

let characters = ['Mabel', 'Dipper', 'Soos', 'Wendy', 'Stan', 'Stanly', 'Bill', 'Candy', 'Pacifica', 'Grenda'];

let characterArray = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

characterArray(characters);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraph = (teg,text) => {
    document.write(`<${teg}>${text}</${teg}>`);

}

paragraph('h2','Mabel is the best of the best!');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let list = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li><li>${text}</li><li>${text}</li>`);
    document.write(`</ul>`);

}

list('Dipper is older than Mabel');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ulka = (num,text) => {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);

}

ulka(4, 'Dipper');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr = ['Mabel', 13, true, 'Dipper', 14, false, 'Soos', 22, false, 'Wendy'];
let listOfArr = (arr) => {
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`);
}

listOfArr(arr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

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

let listOfUsers = (usersInform) => {
    for (const usersInformElement of usersInform) {
        document.write(`<div>${usersInformElement.id}. ${usersInformElement.name}. Age: ${usersInformElement.age}</div>`);
    }

}

listOfUsers(users);
// - створити функцію яка повертає найменьше число з масиву

let numbers = [100000000, 93735, 2984537, -88, 0, -2833748484, 283];

let minNum = numbers[0];
let search = (numsArray) => {
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

let zero = 0;
let sum = (numbers) => {
    for (const number of numbers) {
        zero += number;
    }
    return zero;
}

console.log(sum(nums));
//
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.

let array = [
    {name: 'Mabel'},
    {name: 'Dipper'}

]

let arrayMix = (arr) => {
    arr[2] = arr[0];
    arr[0] = arr[1];
    arr[1] = arr[2];
    arr.pop();
    console.log(arr);
}

arrayMix(array);