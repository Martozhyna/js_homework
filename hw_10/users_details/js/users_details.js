let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/users/' + id)
.then(response => response.json())
.then(value => {
    let div = document.createElement('div');
    document.body.appendChild(div);

    let h1 = document.createElement('h1');
    h1.innerText = `${value.id}. ${value.name}. Username: ${value.username}. Email: ${value.email}`;

    let p = document.createElement('p');
    p.innerHTML = `<b>Address</b>: City: ${value.address.city}. Street: ${value.address.street}. Suite: ${value.address.suite}. Zipcode:${value.address.zipcode}`;

    let phoneAndWebsite = document.createElement('p');
    phoneAndWebsite.innerHTML = `<b>Phone:</b> ${value.phone}. <b>Website:</b> ${value.website}`;

    let companyName = document.createElement('p');
    companyName.innerHTML = `<b>Company name:</b> ${value.company.name}`;

    div.append(h1, p, phoneAndWebsite, companyName);
})