function cadastroEvento() {
    const nome =document.getElementById("Nome");
    const whatsapp = document.getElementById("whatsapp");
    const numero = document.getElementById("num_convidado");
    const duracao = document.getElementById("duracao");
    const servico = document.getElementById("staff_select");
    const churrasco = document.getElementById("churrasco");
    const buteco = document.getElementById("comida_buteco");
    const sushi = document.getElementById("sushi");
    
    var availability = '';

    if (churrasco.checked)
        availability = availability + 'churrasco,';
    if (sushi.checked)
        availability = availability + 'sushi,';
    if (buteco.checked)
        availability = availability + 'comida_buteco,';

    fetch("http://localhost:3000/Event", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        }, method: 'Get',
        body: JSON.stringify({
          promoterId: '',
          nome: nome.value,
          whatsapp: whatsapp.value,
          numero: numero.value,
          duracao: duracao.value,
          servico: servico.value,
          availability: availability,
        })  .then(res => {
            return res.json();
        })
        .then(data => console.log(data))
    })
}