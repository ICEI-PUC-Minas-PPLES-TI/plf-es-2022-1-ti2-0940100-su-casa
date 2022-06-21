async function login() {
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');


    const accessToken = await fetch('http://localhost:3000/login', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            email: email.value,
            password: senha.value
        })
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            return data
        })

    localStorage.setItem('access_token', accessToken.access_token);
}