async function cadastrarResidencia() {
    const CEP = document.getElementById('CEP');
    const numero = document.getElementById('numero');
    const capacidade = document.getElementById('capacidade');
    const tamanho = document.getElementById('tamanho');
    const banheiros = document.getElementById('banheiros');
    const valor = document.getElementById('valor');
    const domingo = document.getElementById('domingo');
    const segunda = document.getElementById('segunda');
    const terca = document.getElementById('terca');
    const quarta = document.getElementById('quarta');
    const quinta = document.getElementById('quinta');
    const sexta = document.getElementById('sexta');
    const sabado = document.getElementById('sabado');

    document.getElementById('form1').addEventListener("submit",function(e) {
        e.preventDefault(); // stop submission
    })

    var availability = '';

    if (domingo.checked)
        availability = availability + 'domingo,';
    if (segunda.checked)
        availability = availability + 'segunda,';
    if (terca.checked)
        availability = availability + 'terca,';
    if (quarta.checked)
        availability = availability + 'quarta,';
    if (quinta.checked)
        availability = availability + 'quinta,';
    if (sexta.checked)
        availability = availability + 'sexta,';
    if (sabado.checked)
        availability = availability + 'sabado,';

    const address = await fetch('https://ws.apicep.com/cep/' + CEP.value + '.json', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })
        .then(res => {
            return res.json();
        })
        .then(data => {
            return data
        })
    let rua = address.address.split(' - ');


    await fetch('http://localhost:3000/residence', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        },
        method: 'POST',
        body: JSON.stringify({
            ownerId: '',
            cep: CEP.value,
            estado: address.state,
            cidade: 'belo horizonte',
            rua: rua[0],
            numero: numero.value,
            bairro: 'sagrada familia',
            numCapacity: +capacidade.value,
            tamLocal: +tamanho.value,
            numToilet: +banheiros.value,
            availability: availability
        })
    })
    window.location.pathname = "plf-es-2022-1-ti2-0940100-su-casa/stacks/SuCasa_web/src/paginicial/paginaInicialVisaoAdm.html"
}