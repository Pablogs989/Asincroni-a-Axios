const btn = document.getElementById('btn');
const info = document.getElementById('info');

axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        console.log(JSON.stringify(res.data))
    })
    .catch(err => {
        console.log(err)
    })

axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        res.data.forEach(user => {
            console.log(user.name)
        });
    })
    .catch(err => {
        console.log(err)
    })


let users = [];

axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        users = res.data;
    })
    .catch(err => {
        console.log(err)
    })



const showUsers = () => {
    console.log(JSON.stringify(users))
    users.forEach(user => {
        info.innerHTML += `<p>${user.name}</p>`
    });
}

btn.addEventListener('click', showUsers);
