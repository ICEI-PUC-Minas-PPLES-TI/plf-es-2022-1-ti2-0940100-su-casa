function cadastroStaff() {
    const buteco = document.getElementById('comida_buteco');
    const sushi = document.getElementById('sushi');
    const churrasco = document.getElementById('churrasco');
    const bar = document.getElementById('bar');
    const whatsapp = document.getElementById('whatsapp');
    const maxConvidados = document.getElementById('max_convidados');
    const minConvidados = document.getElementById('min_convidados');
    const descricao = document.getElementById('descricao');

    if (buteco.checked) {
        fetch('http://localhost:3000/staff', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            },
            method: 'POST',
            body: JSON.stringify({
                whatsapp: whatsapp.value,
                maxConvidados: +maxConvidados.value,
                minConvidados: +minConvidados.value,
                description: descricao.value,
                tipoBuffet: 'BUTECO'
            })
        })
            .then(res => {
                return res.json();
            })
            .then(data => console.log(data))
    } else if (sushi.checked) {
        fetch('http://localhost:3000/staff', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            },
            method: 'POST',
            body: JSON.stringify({
                whatsapp: whatsapp.value,
                maxConvidados: +maxConvidados.value,
                minConvidados: +minConvidados.value,
                description: descricao.value,
                tipoBuffet: 'SUSHI'
            })
        })
            .then(res => {
                return res.json();
            })
            .then(data => console.log(data))
    } else if (churrasco.checked) {
        fetch('http://localhost:3000/staff', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            },
            method: 'POST',
            body: JSON.stringify({
                whatsapp: whatsapp.value,
                maxConvidados: +maxConvidados.value,
                minConvidados: +minConvidados.value,
                description: descricao.value,
                tipoBuffet: 'CHURRASCO'
            })
        })
            .then(res => {
                return res.json();
            })
            .then(data => console.log(data))
    } else if (bar.checked) {
        fetch('http://localhost:3000/staff', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            },
            method: 'POST',
            body: JSON.stringify({
                whatsapp: whatsapp.value,
                maxConvidados: +maxConvidados.value,
                minConvidados: +minConvidados.value,
                description: descricao.value,
                tipoBuffet: 'BAR'
            })
        })
            .then(res => {
                return res.json();
            })
            .then(data => console.log(data))
    } else {
        throw new Error('Tipo de comida não selecionado')
    }
}
