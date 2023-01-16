//password show hide
let input = document.querySelector('input');
let button = document.querySelector('button');

button.onmousedown = function () {
    input.type = 'text';

}

button.onmouseup = function () {
    input.type = 'password';

}

//local storage
let ul = document.querySelector('ul');

let visits = localStorage.getItem('visits');


if (!visits) {
    visits = [];
    localStorage.setItem('visits', JSON.stringify(visits))
}

let arrayOfVisits = JSON.parse(localStorage.getItem('visits'));
arrayOfVisits.push(new Date());

let string = JSON.stringify(arrayOfVisits);
localStorage.setItem('visits', string);

for (const arrayOfVisit of arrayOfVisits) {
    let li = document.createElement('li');
    li.innerText = arrayOfVisit;
    ul.append(li);
}

function explorer(htmlElement) {
    console.log(htmlElement);
    let children = htmlElement.children;
    if (children.length != 0) {
        for (const child of children) {
            explorer(child);
        }
    }
}

explorer(document.body);

let tree = {
    name: 'Mabel',
    age: 12,
    brother: {
        name: 'Dipper',
        age: 12
    }
}

function treeBuilder(obj) {
    for (const objKey in obj) {
        if (typeof obj[objKey] !== 'object') {
            let div = document.createElement('div');
            div.innerText = obj[objKey];
            document.body.append(div);
        }

        if (typeof obj[objKey] === 'object') {
            treeBuilder(obj[objKey]);
        }
    }
}

treeBuilder(tree);

//як проітерувати масив за допомогою рекурсії?

function asd(index = 0,arr) {
    console.log(arr[index])
    index++;
    if (index < arr.length) {
        asd(index,arr);
    }

}

asd(0, [11, 45, 333, 456, -98]);