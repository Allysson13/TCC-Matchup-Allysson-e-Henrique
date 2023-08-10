const INTEREST_DEPENDENCIES = ['company', 'language', 'age-rating', 'genre', 'subgenre', 'platform'];

function onLoad() {
    // INTEREST_DEPENDENCIES.forEach(function(element) {
    //     loadDropDowns(element);
    // });
    loadDropDowns('company');
    loadDropDowns('language');

    registerInterest();
}

function loadDropDowns(type) {
    getAll(type)
        .then(json => {
            console.log(json);
            var dropdown = document.getElementById('dd-' + type);
            json.forEach(function (item) {
                let option = document.createElement('option');
                option.value = item.id;
                option.text = item.name;
                dropdown.appendChild(option);
            });
        })
        .catch(error => {
            alert("Deu errado! (loadDropDowns) -> " + error);
        });
}

function addOptionToDropDown(type, item) {
    console.log(item);
    let option = document.createElement('option');
    option.value = item.id;
    option.text = item.name;
    document.getElementById('dd-' + type).appendChild(option);
}

function getAll(type) {
    return fetch(`http://localhost:8080/api/admin/get/${type}/all`, {
        method: "GET",
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .catch(error => {
            alert("Deu errado! (getAll) -> " + error);
            throw error;
        });
}


function register(type) {

    var jsonObject = {};
    jsonObject['name'] = prompt("Inform the name of the " + (type + '').toUpperCase() + ":");

    console.log(jsonObject);

    fetch("http://localhost:8080/api/admin/register/" + type, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonObject)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao enviar dados " + response);
            }
            addOptionToDropDown(type, response.json());
        })
        .catch(error => {
            alert("Deu errado! -> (register())" + error);
        });
}






function registerInterest() {
    document.getElementById("register-interest").addEventListener("submit", function (event) {
        event.preventDefault();

        var formData = new FormData(document.getElementById("register-interest"));

        var jsonObject = {};
        formData.forEach(function (value, key) {
            jsonObject[key] = value;
        });

        console.log(jsonObject);

        fetch("http://localhost:8080/api/admin/register/interest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonObject)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao enviar dados " + response);
                }
                return response.json();
            })
            .then(data => {
                console.log("Deu certo!");
            })
            .catch(error => {
                alert("Deu errado! -> " + error);
            });
    });
}


function searchLanguageDropDown(){
    $(document).ready(function() {
        $("#dd-dubbed-languages").select2();
        $("#dd-subtitled-languages").select2();
        
        $("#register-interest").submit(function(event) {
            event.preventDefault();

            const legendasSelecionadas = $("#dd-dubbed-languages").val();
            const dublagemSelecionada = $("#dd-subtitled-languages").val();

            // Aqui você pode enviar os dados para o servidor ou fazer qualquer outra ação necessária
        });
    });
}


// function addDropDown(divId, selectId){
//     let div = document.getElementById(divId);
//     let select = document.getElementById(selectId);
//     div.innerHTML() += document.get

    
    
// }