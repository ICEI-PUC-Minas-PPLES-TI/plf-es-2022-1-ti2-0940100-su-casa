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

    const endereco = await fetch('http://viacep.com.br/ws/' + CEP.value + '/json/', {
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

    fetch('http://localhost:3000/residence', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        },
        method: 'POST',
        body: JSON.stringify({
            ownerId: '',
            cep: CEP.value,
            estado: endereco.uf,
            cidade: endereco.localidade,
            rua: endereco.logradouro,
            numero: numero.value,
            bairro: endereco.bairro,
            numCapacity: +capacidade.value,
            tamLocal: +tamanho.value,
            numToilet: +banheiros.value,
            availability: availability
        })
    })
}