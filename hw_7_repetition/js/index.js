let user =
    {
        name: 'kokos',
        age: 31,
        wife: {
            name: 'olya',
            age: 32,
        }
    };

// let {age, name} = user;
// console.log(age, name);
//
// let age1 = user.age;
// console.log(age1);

let {name, age, wife, wife: {name: wName, age: wAge}, status} = user;
console.log(name, age, wife, wAge, wName);
console.log(status);

//замикання

function userBuilder(name, age) {
    let user = {name, age}
    return {
        setAge: function (age) {
            if (typeof age === 'string') {
                throw new Error('age must be a number type');
            } else {
                user.age = age
            }

        },
        user: function () {
            return {...user};
        }
    }

}

let builder = userBuilder('Mabel', 13);
builder.setAge(100); //якщо ввести стрінгу, вийде помилка
console.log(builder.user());
