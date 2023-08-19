/* function confirmEmail() {

    var code;

    for (var i = 1; i <= 6; i++) {

        code += document.getElementById("code" + i).textContent;

    }

    //verificar o formato do código, txt...

    fetch("http://localhost:8080/api/login/${code}", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao enviar dados " + response);
            }
            return response.json();
        })
        .then(data => {
            console.log("Código válido e equivalente!");
        })
        .catch(error => {
            alert("Erro com o código! -> " + error);
        });

} */