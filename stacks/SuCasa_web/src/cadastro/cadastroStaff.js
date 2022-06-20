function singup() {
    fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: { 'conContent-Type': 'application/json' },
        body: JSON.stringify({
            name: "test",
            email: "sathmory@gmail.com",
            phone: "31 9 9548-4328",
            password: "123@Sm",
            role: "PROMOTER"
        })
    })
        .then(res => {
            return res.json();
        })
        .then(data => console.log(data))
}
