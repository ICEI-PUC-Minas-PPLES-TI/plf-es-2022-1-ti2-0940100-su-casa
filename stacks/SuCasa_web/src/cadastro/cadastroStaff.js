function cadastroStaff() {
    const whatsapp = document.getElementById('whatsapp');
    const numero = document.getElementById('numero');
    const capacidade = document.getElementById('capacidade');
    const tamanho = document.getElementById('tamanho');
    const banheiros = document.getElementById('banheiros');

    fetch('http://localhost:3000/staff', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        },
        method: 'POST',
        body: JSON.stringify({
            whatsapp: "test",
            minConvidados: "sathmory@gmail.com",
            minConvidados: "31 9 9548-4328",
            price: "123@Sm",
            description: "PROMOTER"
        })
    })
        .then(res => {
            return res.json();
        })
        .then(data => console.log(data))
}
