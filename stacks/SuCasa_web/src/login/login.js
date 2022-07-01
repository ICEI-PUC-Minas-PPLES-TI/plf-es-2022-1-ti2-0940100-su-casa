async function login() {
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

    fetch('http://localhost:3000/login', {
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
            localStorage.setItem('access_token', data.access_token);
            return data;
        })

    const role = await fetch("http://localhost:3000/me", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        }, method: 'Get',
    })
        .then(res => {
            return res.json();
        })
        .then(data => {
            return data.role
        })

    if (role == 'OWNER') {
        window.location.assign('https://icei-puc-minas-pples-ti.github.io/plf-es-2022-1-ti2-0940100-su-casa/stacks/SuCasa_web/src/paginicial/paginaInicialVisaoAdm.html');
    } else if (role == 'PROMOTER') {
        window.location.assign('https://icei-puc-minas-pples-ti.github.io/plf-es-2022-1-ti2-0940100-su-casa/stacks/SuCasa_web/src/paginicial/paginaInicialVisaoPromoter.html');
    } else if (role == 'STAFF') {
        window.location.assign('https://icei-puc-minas-pples-ti.github.io/plf-es-2022-1-ti2-0940100-su-casa/stacks/SuCasa_web/src/paginicial/paginaInicialVisaoPromoter.html');
    }
}