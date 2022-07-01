async function signup() {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const senha = document.getElementById('senha');
    const conf = document.getElementById('conf');
    const owner = document.getElementById('radio-dono');
    const staff = document.getElementById('radio-staff');
    const promoter = document.getElementById('radio-promoter');

    document.getElementById('submit').addEventListener("submit", function(event) {
        event.preventDefault();
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
            return window.open('http://localhost:63342/plf-es-2022-1-ti2-0940100-su-casa/stacks/SuCasa_web/src/cadastro/cadastroStaff.html?_ijt=p2tlo80srvoguc9h32820vq1os&_ij_reload=RELOAD_ON_SAVE')
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
        } else {
            throw new Error('Role not checked');
        }
    } else {
        throw new Error('Password does not match');
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

    // window.location = '';
    //
    // if (role == 'OWNER') {
    //     window.location = 'http://localhost:63342/plf-es-2022-1-ti2-0940100-su-casa/stacks/SuCasa_web/src/paginicial/paginaInicialVisaoAdm.html?_ijt=ea2ltatmjn7trcmf3h91bq1koc&_ij_reload=RELOAD_ON_SAVE';
    // } else if (role == 'PROMOTER') {
    //     window.location = 'http://localhost:63342/plf-es-2022-1-ti2-0940100-su-casa/stacks/SuCasa_web/src/paginicial/paginaInicialVisaoPromoter.html?_ijt=4k349tdjb2ddr77h2bac5m88tr&_ij_reload=RELOAD_ON_SAVE';
    // } else if (role == 'STAFF') {
    //     window.location = 'http://localhost:63342/plf-es-2022-1-ti2-0940100-su-casa/stacks/SuCasa_web/src/cadastro/cadastroStaff.html?_ijt=shp2usuadg4ab1313u3m97jgp6&_ij_reload=RELOAD_ON_SAVE';
    // }
}