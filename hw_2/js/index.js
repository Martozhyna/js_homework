// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let characters = ['Mabel', 14, true, 'Dipper', 14, false, 'Soos', 21, false, 'Wendy'];
console.log(characters[0]);
console.log(characters[1]);
console.log(characters[2]);
console.log(characters[3]);
console.log(characters[4]);
console.log(characters[5]);
console.log(characters[6]);
console.log(characters[7]);
console.log(characters[8]);
console.log(characters[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let books = [
    {
        title: 'Harry Potter',
        pageCount: 123,
        genre: 'adventure'
    },
    {
        title: 'Nom Nom',
        pageCount: 234,
        genre: 'comedy'
    },
    {
        title: 'It',
        pageCount: 345,
        genre: 'horror'
    },
]

console.log(books);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let anotherBooks = [
    {
        title: 'Harry Potter',
        pageCount: 123,
        genre: 'adventure',
        authors: [
            {name: 'Joan',
            age: 45}
        ]
    },
    {
        title: 'Nom Nom',
        pageCount: 234,
        genre: 'comedy',
        authors: [
            {
                name: 'Nim',
                age: 23
            },
            {
                name: 'Nam',
                age: 24
            }
        ]
    },
    {
        title: 'It',
        pageCount: 345,
        genre: 'horror',
        authors: [
            {
                name: 'Steven',
                age: 65
            }
        ]
    },
]

console.log(anotherBooks);
console.log(anotherBooks[1]);
console.log(anotherBooks[1].authors);
console.log(anotherBooks[1].authors[0]);
console.log(anotherBooks[1].authors[0].name);



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: 'Mabel',
        username: 'Pines',
        password: 1
    },
    {
        name: 'Dipper',
        username: 'Pines',
        password: 2
    },
    {
        name: 'Ford',
        username: 'Pines',
        password: 3
    },
    {
        name: 'Stan',
        username: 'Pines',
        password: 4
    },
    {
        name: 'Soos',
        username: 'Ramirez',
        password: 5
    },
    {
        name: 'Abuelita',
        username: 'Ramirez',
        password: 6
    },
    {
        name: 'Reggie',
        username: 'Ramirez',
        password: 7
    },
    {
        name: 'Wendy',
        username: 'Corduroy',
        password: 8
    },
    {
        name: 'Bill',
        username: 'Cipher',
        password: 101010101010100101010
    },
    {
        name: 'Candy',
        username: 'Chiu',
        password: 9
    },
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);