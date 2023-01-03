// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

function User(id,name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

let users = [];
users.push(new User(1, 'Mabel', 'Pines', 'mabelpines@gmail.com', '0127845367'));
users.push(new User(2, 'Dipper', 'Pines', 'dipperpines@gmail.com', '063392036'));
users.push(new User(3, 'Soos', 'Ramirez', 'sooooooos@gmail.com', '0183729207'));
users.push(new User(4, 'Wendy', 'Corduroy', 'wendycorduroy@gmail.com', '0126281946'));
users.push(new User(5, 'Ford', 'Pines', 'fordpines@gmail.com', '0127637204'));
users.push(new User(6, 'Stan', 'Pines', 'stanpines@gmail.com', '0127872518'));
users.push(new User(7, 'Pacifica', 'Northwest', 'richgirl@gmail.com', '0127846291'));
users.push(new User(8, 'Candy', 'Chiu', 'candy@gmail.com', '0127845390'));
users.push(new User(9, 'Gideon', 'Gleeful', 'gideon@gmail.com', '0127845376'));
users.push(new User(10, 'Bill', 'Cipher', 'iiiiiiiiiiiiio@gmail.com', '0101011101'));
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
let usersFilter = users.filter(value => value.id % 2 === 0);
console.log(usersFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let usersSort = users.sort((a, b) => b.id - a.id);

console.log(usersSort);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [];

clients.push(new Client(1, 'Mabel', 'Pines', 'mabelpines@gmail.com', '0127845367', ['cucumber', 'carrot']));
clients.push(new Client(2, 'Dipper', 'Pines', 'dipperpines@gmail.com', '063392036', ['eggplant', 'eggs', 'elder']));
clients.push(new Client(3, 'Soos', 'Ramirez', 'sooooooos@gmail.com', '0183729207', ['apples', 'apricot', 'avocado']));
clients.push(new Client(4, 'Wendy', 'Corduroy', 'wendycorduroy@gmail.com', '0126281946', ['berry']));
clients.push(new Client(5, 'Ford', 'Pines', 'fordpines@gmail.com', '0127637204', ['dragon fruit']));
clients.push(new Client(6, 'Stan', 'Pines', 'stanpines@gmail.com', '0127872518', ['fish', 'feta']));
clients.push(new Client(7, 'Pacifica', 'Northwest', 'richgirl@gmail.com', '0127846291', ['grapes', 'garlic']));
clients.push(new Client(8, 'Candy', 'Chiu', 'candy@gmail.com', '0127845390', ['ice']));
clients.push(new Client(9, 'Gideon', 'Gleeful', 'gideon@gmail.com', '0127845376', ['jelly']));
clients.push(new Client(10, 'Bill', 'Cipher', 'iiiiiiiiiiiiio@gmail.com', '0101011101', ['milk', 'tomatoes', 'beef', 'chicken']));

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
let clientsSort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(clientsSort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// function Cars(model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`we are going with speed ${this.maxSpeed}`)
//     };
//     this.info = () => console.log(`Model: ${this.model}. Producer: ${this.producer}. Year: ${this.year}. Max Speed: ${this.maxSpeed}. Volume: ${this.volume}`);
//     this.increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed;
//     this.changeYear = (newValue) => this.year = newValue;
//     this.addDriver = (driver) => this.driver = driver;
// }
//
// let car = new Cars('asd', 'AAA', 2012, 180, 5);
// console.log(car);

// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2009);
// car.addDriver({name: 'Soos', surname: 'Ramirez'})
// console.log(car);


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class Cars {

    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
    drive = function () {
        console.log(`we are going with speed ${this.maxSpeed}`)
    };
    info = () => console.log(`Model: ${this.model}. Producer: ${this.producer}. Year: ${this.year}. Max Speed: ${this.maxSpeed}. Volume: ${this.volume}`);
    increaseMaxSpeed = (newSpeed) => console.log(this.maxSpeed += newSpeed);
    changeYear = (newValue) => console.log(this.year = newValue);
    addDriver = (driver) => console.log(this.driver = driver);
}

let car = new Cars('aaa', 'AAA', 2000, 180, 8);
car.drive();
car.info();
car.increaseMaxSpeed(30);
car.changeYear(2008);
car.addDriver({name:'Wendy',surname:'Ramirez', year: 11})

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, year, shoos) {
        this.name = name;
        this.year = year;
        this.shoos = shoos;
    }

}

let Cinderellas = [];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку