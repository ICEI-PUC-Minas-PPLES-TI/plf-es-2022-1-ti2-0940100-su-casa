function login() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;


    fetch('http://localhost:3000/login', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            email: 'owner@gmail.com',
            password: '123@Sm'
        })
    })
        .then(res => {
            console.log(res)
        })
}