function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => displayUser(json));
}



function displayUser(data) {
    const ul = document.getElementById('users');

    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name}  email: ${user.email}`;
        ul.appendChild(li);
    }
}

