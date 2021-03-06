async function login() {
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

    document.getElementById('form1').addEventListener("submit",function(e) {
        e.preventDefault(); // stop submission
    })

    await fetch('http://localhost:3000/login', {
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

    if(localStorage.getItem('access_token') == undefined)
        document.getElementById('demo').innerHTML = "email ou senha incorretos"

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

    if (role == '' | role == null)
        document.getElementById('demo').innerHTML = "email ou senha incorretos"
    else if (role == 'OWNER')
        window.location.pathname = "plf-es-2022-1-ti2-0940100-su-casa/stacks/SuCasa_web/src/paginicial/paginaInicialVisaoAdm.html"
    else if (role == 'STAFF')
        window.location.pathname = "plf-es-2022-1-ti2-0940100-su-casa/stacks/SuCasa_web/src/paginicial/paginaInicialVisaoStaff.html"
    else if (role == 'STAFF')
        window.location.pathname = "plf-es-2022-1-ti2-0940100-su-casa/stacks/SuCasa_web/src/paginicial/paginaInicialVisaoPromotor.html"
}