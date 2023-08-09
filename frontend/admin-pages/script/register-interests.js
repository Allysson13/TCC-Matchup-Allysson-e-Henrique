function loadDropDowns(){
    
}

function registerInterest(){
    document.getElementById("register-interest").addEventListener("submit", function (event) {
        event.preventDefault(); 
    
        var formData = new FormData(document.getElementById("register-interest"));
    
        var jsonObject = {};
        formData.forEach(function (value, key) {
            jsonObject[key] = value;
        });

        console.log(jsonObject)
        
        
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
                    throw new Error("Erro ao enviar dados " + response);
                }
                return response.json();
            })
            .then(data => {
                alert("Deu certo!");
            })
            .catch(error => {
                alert("Deu errado!");
            });
    });
}


