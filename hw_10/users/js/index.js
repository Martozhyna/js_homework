// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів

let item = JSON.parse(localStorage.getItem('favs')) || [];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let divOfUsers = document.createElement('div');
        document.body.appendChild(divOfUsers);
        for (const user of users) {
            let divOfUser = document.createElement('div');
            divOfUser.innerText = `${user.id}. ${user.name}`;
            divOfUsers.appendChild(divOfUser);

            let a = document.createElement('a');
            a.innerText = 'User Details';
            a.href = '../users_details/users_details.html?id=' + user.id;

            let btn = document.createElement('button');
            btn.innerText = 'add to fav';
            btn.onclick = function () {
                item.push(user);
                localStorage.setItem('favs', JSON.stringify(item));
            };

            divOfUser.append(a,btn);
        }
    })
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
