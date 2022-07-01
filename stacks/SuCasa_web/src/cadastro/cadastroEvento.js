function cadastroEvento() {
    const nome = document.getElementById("Nome");
    const whatsapp = document.getElementById("whatsapp");
    const numero = document.getElementById("num_convidado");
    const duracao = document.getElementById("duracao");
    const servico = document.getElementById("staff_select");
    const churrasco = document.getElementById("churrasco");
    const buteco = document.getElementById("comida_buteco");
    const sushi = document.getElementById("sushi");
    const dateOfEvent = document.getElementById('date');

    fetch("http://localhost:3000/Event", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        }, method: 'Post',
        body: JSON.stringify({
          numGuests: numero.value,
          duration: duracao.value,
          staffName: nome.value,
          availability: dateOfEvent.value,
          status: 'agendado'
        })
    }) .then(res => {
        return res.json();
    })
        .then(data => console.log(data))
}
