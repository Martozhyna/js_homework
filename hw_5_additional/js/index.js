// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let max = (a,b,c) => {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else if (c < a && c < b) {
        console.log(c);
    }
}

max(123, 0, -234);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let min = (a,b,c) => {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else if (c > a && c > b) {
        console.log(c);
    }
}

min(1, 0, -3);


// - створити функцію яка повертає найбільше число з масиву

let n = [2, 4, 5, 123, 0, -76];

let maxArr = (arr) => {
    console.log(Math.max(...arr));

}

maxArr(n);
// - створити функцію яка повертає найменьше число з масиву

let minArr = (arr) => {
    console.log(Math.min(...arr));
}

minArr(n);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sum = 0;

let sumNums = (arr) => {
    for (const number of n) {
        sum += number;
    }
    return sum;
}

console.log(sumNums(n));
//
//
//
//
// - Дано натуральное число n. Выведите все числа от 1 до n.

// function naturalNumber(n) {
//     return n <= 1? 1 : naturalNumber(n - 1) + ' ' + n;
// }
// console.log(naturalNumber(11)); ?????

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
// let a = 3;
// let b = 5;
// let empty = [];

// let numbers = (a,b) => {
//    return a < b ? a + ' ' + numbers((a + 1), b) : a > b ? a + ' ' + numbers((a-1),b): a;
// }
//
// console.log(numbers(3, 1));  // тернарний оператор

let numbers = (a,b) => {
    if (a < b) {
        return a + ' ' + numbers((a + 1), b);
    } else if (a > b) {
        return a + ' ' + numbers((a - 1), b);
    } else {
        return a;
    }
}

console.log(numbers(4, 1));

//
// - функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let foo = (arr,i) => {
    for (let j = 0; j < arr.length; j++) {
        const arrElement = arr[j];

    }

}

//????????????


//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//????????????