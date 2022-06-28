async function singup() {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const senha = document.getElementById('senha');
    const conf = document.getElementById('conf');
    const owner = document.getElementById('radio-dono');
    const staff = document.getElementById('radio-staff');
    const promoter = document.getElementById('radio-promoter');

    if (conf.value == senha.value) {
        if (owner.checked == true) {
            fetch('http://localhost:3000/user', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    name: nome.value,
                    email: email.value,
                    phone: telefone.value,
                    password: senha.value,
                    role: 'OWNER'
                })
            })
                .then(res => {
                    return res.json();
                })
                .then(data => console.log(data))
        } else if (staff.checked == true) {
            fetch('http://localhost:3000/user', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    name: nome.value,
                    email: email.value,
                    phone: telefone.value,
                    password: senha.value,
                    role: 'STAFF'
                })
            })
                .then(res => {
                    return res.json();
                })
                .then(data => console.log(data))
        } else if (promoter.checked == true) {
            fetch('http://localhost:3000/user', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    name: nome.value,
                    email: email.value,
                    phone: telefone.value,
                    password: senha.value,
                    role: 'PROMOTER'
                })
            })
                .then(res => {
                    return res.json();
                })
                .then(data => console.log(data))
        } else {
            throw new Error('Senha diferente');
        }
    } else {
        throw new Error('Senha diferente');
    }

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
