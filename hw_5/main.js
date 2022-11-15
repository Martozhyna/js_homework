// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function ploscha(a,b) {
    let result = a * b;
    return result;
}

let result = ploscha(2, 5);
console.log(result);


// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaOfCircle(p,r) {
    let resultOfTheAreaOfTheCircle = p * Math.pow(r, 2);
    return resultOfTheAreaOfTheCircle;
}

let resultOfTheAreaOfTheCircle = areaOfCircle(3.14, 2);
console.log(resultOfTheAreaOfTheCircle);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaOfCylinder(p, r, h) {
    return 2*p*r*h;
}

let resultOfTheAreaOfTheCylinder = areaOfCylinder(3.14,2,6);
console.log(resultOfTheAreaOfTheCylinder);

// - створити функцію яка приймає масив та виводить кожен його елемент


let characters = ['Mabel', 'Dipper', 'Stanley', 'Soos', 'Wendy', 'Stanford', 'Bill', 'Candy', 'Gideon', 'Robbie'];
function array(arr) {
    for (const character of arr) {
        console.log(character);
    }
}

array(characters);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(tag,text) {
    document.write(`<${tag}>${text}</${tag}>`)
}

paragraph('h1','hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list(text) {
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li> 
</ul>`);
}

list('Mabel');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list2(text,number) {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

list2('Dipper', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayOfCharacters = [13, "Mabel", true, 15, "Dipper", 17];
function arrayCharacter(arr) {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`)

}

arrayCharacter(arrayOfCharacters);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id:1, name: 'Mabel',age: 14},
    {id:2, name: 'Dipper',age: 14},
    {id:3, name: 'Stanley',age: 65},
    {id:4, name: 'Soos',age: 25},
    {id:5, name: 'Wendy',age: 16}
]

function listOfUsers(list) {
    for (const listElement of list) {
        document.write(`<div>id.${listElement.id}. name.${listElement.name}. age.${listElement.age}</div>`);

    }

}

listOfUsers(users);


// - створити функцію яка повертає найменьше число з масиву

let numbers = [1, 8, 65, 445, 34, 23];
let minNumber = numbers[0];
function min(numbers) {
    for (const number of numbers) {
        if (number < minNumber){
            minNumber = number;
        }
    } return minNumber

}
min(numbers);
console.log(minNumber);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let nums = [5, 7, 3];
let sumOfnums = 0;

function sum(numbers) {
    for (const number of numbers) {
        sumOfnums += number;
    }
    return sumOfnums;
}

sum(nums);
console.log(sumOfnums);