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


//Extra

axios.get("https://dog.ceo/api/breeds/list/all")
    .then(res => {
        console.log(JSON.stringify(res.data.message))
        for (const dog in res.data.message) {
            console.log(dog);
        }
    })
    .catch(err => {
        console.log(err)
    })

axios.get("https://dog.ceo/api/breeds/image/random")
    .then(res => {
        console.log("Imagen random" + res.data.message);
    })
    .catch(err => {
        console.log(err)
    })

axios.get("https://dog.ceo/api/breed/hound/images")
    .then(res => {
        (res.data.message).forEach(dogImage => {
            console.log("Imagen de raza Hound " + dogImage);
        });
    })
    .catch(err => {
        console.log(err)
    })



let breed = "akita";

axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(res => {
        console.log(res.data.message);
    })
    .catch(err => {
        console.log(err)
    })
