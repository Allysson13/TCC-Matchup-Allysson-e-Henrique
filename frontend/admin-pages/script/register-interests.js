function registerInterest(){
    document.getElementById("register-interest").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o comportamento padrão de enviar o formulário
    
        var formData = new FormData(document.getElementById("register-interest"));
    
        var jsonObject = {};
        formData.forEach(function (value, key) {
            jsonObject[key] = value;
        });
    
        // Realiza uma requisição AJAX para o backend em outro servidor
        fetch("http://localhost:8080/api/admin/register-interest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonObject),
            credentials: "include" // ou "same-origin", ou "omit"
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao enviar dados");
                }
                return response.json();
            })
            .then(data => {
                // Lógica de sucesso, se necessário
            })
            .catch(error => {
                // Lógica de tratamento de erro, se necessário
            });
    });
}

