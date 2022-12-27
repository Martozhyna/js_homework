// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

let strings = ['Mabel', 'Dipper', 'Soos', 'Wendy', 'Stan'];
console.log(strings);

let arr = ['Mabel', 13, true, 'Dipper', 13, false, 'Soos', 21, false, 'Wendy', 16, true, 'Stan',65,false];
console.log(arr);


//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let emptyArr = [];
console.log(emptyArr);

emptyArr[0] = 14;
console.log(emptyArr);

emptyArr[emptyArr.length] = 'Queue';
console.log(emptyArr);

emptyArr[3] = true;
console.log(emptyArr);