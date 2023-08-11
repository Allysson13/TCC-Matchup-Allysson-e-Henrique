const INTEREST_DEPENDENCIES = ['company', 'language', 'age-rating', 'genre', 'subgenre', 'platform'];

$('#dd-dubbed-languages').multi({ 
    non_selected_header: 'Languages',
    selected_header: 'Selected Languages'
});

$('#dd-subtitled-languages').multi({ 
    non_selected_header: 'Languages',
    selected_header: 'Selected Languages'
});

document.addEventListener("DOMContentLoaded", function() {
    INTEREST_DEPENDENCIES.forEach(type => {
        loadDropDowns(type);
    })
});

document.getElementById("register-interest").addEventListener("submit", function (event) {
    event.preventDefault();
    registerInterest();
});


async function getAll(type) {
    const response = await fetch(`http://localhost:8080/api/admin/get/${type}/all`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

async function loadDropDowns(type) {
    if(type=='language'){
        loadLanguagesDropDowns();
        return;
    }
    try {
        const json = await getAll(type);
        populateDropDown(json, document.getElementById('dd-' + type));
    } catch (error) {
        alert(`Deu errado! (loadDropDowns) -> ${error}`);
    }
}

async function loadLanguagesDropDowns() {
    try {
        const response = await fetch('/admin-pages/script/languages.json');
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const json = await response.json();
        populateDropDown(json, document.getElementById('dd-dubbed-languages'));
        populateDropDown(json, document.getElementById('dd-subtitled-languages'));
    } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
        throw error;
    }
}

function populateDropDown(json, dropdown) {
    json.forEach(function(item) {
        let option = document.createElement('option');
        option.value = item.id;
        option.text = item.name;
        dropdown.appendChild(option);
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
    return fetch(`http://localhost:8080/api/admin/get/${type}/all`)
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
    let name = prompt('Inform the name of the ' + (type).toUpperCase() + ':');
    if(name == null || name =='') return;
    jsonObject['name'] = name;

    console.log(jsonObject);

    fetch("http://localhost:8080/api/admin/register/" + type, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonObject)
    })
        .then(async response => {
            if (!response.ok) {
                throw new Error("Erro ao enviar dados " + response);
            }
            addOptionToDropDown(type, await response.json());
        })
        .catch(error => {
            alert("Deu errado! -> (register())" + error);
        });
}



function registerInterest() {
    var formData = new FormData(document.getElementById("register-interest"));

    var interest = {};
    formData.forEach(function (value, key) {
        interest[key] = value;
    });
    
    
    console.log(interest);

    fetch("http://localhost:8080/api/admin/register/interest", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(interest)
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
    
}




// function searchLanguageDropDown(){
//     $(document).ready(function() {
//         $("#dd-dubbed-languages").select2();
//         $("#dd-subtitled-languages").select2();
        
//         $("#register-interest").submit(function(event) {
//             event.preventDefault();

//             const formArray = $("#register-interest").serializeArray();
//             const interest = {};
        
//             formArray.forEach(function(input) {
//                 interest[input.name] = input.value;
//             });

//             interest.dubbedLanguages = $("#dd-dubbed-languages").val();
//             interest.subtitledLanguages = $("#dd-subtitled-languages").val();
//             console.log(selectedDubbed);
//             console.log(selectedSubtitles);

//             registerInterest(interest);
//         });
//     });
// }
     
//     $("#idiomasForm").submit(function(event) {
//         event.preventDefault();

//         const formArray = $("#idiomasForm").serializeArray();
//         const formData = {};
        
//         formArray.forEach(function(input) {
//             formData[input.name] = input.value;
//         });
        
//         formData.legendas = $("#legendas").val();
//         formData.dublagem = $("#dublagem").val();

//         enviarDadosParaAPI(formData);
//     });
// }


// function addDropDown(divId, selectId){
//     let div = document.getElementById(divId);
//     let select = document.getElementById(selectId);
//     div.innerHTML() += document.get

    
    
// }