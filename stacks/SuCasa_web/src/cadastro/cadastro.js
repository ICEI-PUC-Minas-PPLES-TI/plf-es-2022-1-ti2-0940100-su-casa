async function signup() {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const senha = document.getElementById('senha');
    const conf = document.getElementById('conf');
    const owner = document.getElementById('radio-dono');
    const staff = document.getElementById('radio-staff');
    const promoter = document.getElementById('radio-promoter');

    document.getElementById('form1').addEventListener("submit",function(e) {
        e.preventDefault(); // stop submission
    })

    if (conf.value == senha.value) {
        if (owner.checked) {
             await fetch('http://localhost:3000/user', {
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
            await login(email.value, senha.value, 'OWNER');
            window.location.pathname = "plf-es-2022-1-ti2-0940100-su-casa/stacks/SuCasa_web/src/paginicial/paginaInicialVisaoAdm.html"

        } else if (staff.checked) {
            await fetch('http://localhost:3000/user', {
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
            window.location.pathname = "plf-es-2022-1-ti2-0940100-su-casa/stacks/SuCasa_web/src/cadastro/cadastroStaff.html"
        } else if (promoter.checked) {
            await fetch('http://localhost:3000/user', {
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
            await login(email.value, senha.value, 'PROMOTER');
            window.location.pathname = "plf-es-2022-1-ti2-0940100-su-casa/stacks/SuCasa_web/src/paginicial/paginaInicialVisaoPromoter.html"

        } else {
            throw new Error('Role not checked');
        }
    } else {
        document.getElementById('demo').innerHTML = 'senha são diferentes';
    }
}

async function login(email, senha, role) {

    fetch('http://localhost:3000/login', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: senha
        })
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            localStorage.setItem('access_token', data.access_token);
            return data;
        })
}