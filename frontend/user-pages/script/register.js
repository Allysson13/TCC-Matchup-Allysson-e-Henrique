//const USER_DEPENDENCIES = ['address', 'friendship', 'interest', 'message'];
const USER_DEPENDENCIES = ['interest'];

var form = document.getElementById("register");

var txtName = document.getElementById("txt-name");
var txtUsername = document.getElementById("txt-username");
var txtEmail = document.getElementById("txt-email");
var txtPassword = document.getElementById("txt-password");
var txtConfirmedPassword = document.getElementById("txt-confirmed-password");

var dateBirthDate = document.getElementById('date-birth-date');
var ddInterest = document.getElementById('dd-interest');
var fileProfilePicture = document.getElementById('file-profile-picture');

var txtZipcode = document.getElementById('txt-zipcode');
var txtState = document.getElementById('txt-state');
var txtNeighborhood = document.getElementById('txt-neighborhood');
var txtStreet = document.getElementById('txt-street');
var txtNumber = document.getElementById('number-number');


var validEmail = false;
var validUsername = false;
var validPassword = false;
var bothPasswordsEqual = false;

$('#dd-interest').multi({
    non_selected_header: 'Jogos',
    selected_header: 'Jogos Selecionados',

});

document.addEventListener("DOMContentLoaded", function () {
    dateConfig();
    USER_DEPENDENCIES.forEach(type => {
        loadDropDowns(type);
    })
});


form.addEventListener("submit", function (event) {
    event.preventDefault();
    registerUser();
});


txtUsername.addEventListener("input", function (event) {
    validUsername = validateUsername(this.value);
    changeInputBorder(validUsername, this);
});
txtUsername.addEventListener("blur", function (event) {
    console.log("verificar disponibilidade de username");
});


txtEmail.addEventListener("input", function (event) {
    validEmail = validator.isEmail(this.value);
    changeInputBorder(validEmail, this);
});


txtPassword.addEventListener("input", function (event) {
    validPassword = validatePassword(this.value);
    changeInputBorder(validPassword, this);
});


txtConfirmedPassword.addEventListener("input", function (event) {
    bothPasswordsEqual = (txtPassword.value == txtConfirmedPassword.value);
    changeInputBorder(bothPasswordsEqual, this);
});



function changeInputBorder(validValue, element) {
    if (!validValue) {
        element.classList.add('is-invalid');
    } else {
        element.classList.remove('is-invalid');
    }
}



async function getAll(type) {
    const response = await fetch(`http://localhost:8080/api/register/get/${type}/all`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

async function loadDropDowns(type) {
    if (type == 'interest') {
        loadInterestDropDown();
        return;
    }
    try {
        const json = await getAll(type);
        populateDropDown(json, document.getElementById('dd-' + type));
    } catch (error) {
        alert(`Deu errado! (loadDropDowns) -> ${error}`);
    }
}

async function loadInterestDropDown() {
    try {
        const json = interests;
        populateDropDown(json, ddInterest);
    } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
        throw error;
    }
}

function populateDropDown(json, dropdown) {
    json.forEach(function (item) {
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
    return fetch(`http://localhost:8080/api/register/get/${type}/all`)
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


function register(type, jsonObject) {

    fetch(`http://localhost:8080/api/register/${type}`, {
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

async function registerUser() {
    if(!(await validateFields())) return;

    /* let interests = [];
    for (let option of $("#dd-interest option:selected")) {
        var interest = { id: option.value };
        interests.push(interest);
    } */

    let user = {
        "name": txtName.value,
        "username": txtUsername.value,
        "email": txtEmail.value,
        "birthDate": dateBirthDate.value,
        "rawPassword": txtPassword.value,
        "cellphoneNumber": cellphoneNumber,
        //"profilePicture": profilePicture,
        //"interests": interests,
        //address
        "addressStreet": txtStreet.value,
        "addressNumber": txtNumber.value,
        "addressNeighborhood": txtNeighborhood.value,
        "addressState": txtState.value,
        "addressZipcode": txtZipcode.value
    }


    register('user', user);
}

function validateFields(){
    if (!validEmail || !validUsername || !validPassword) {
        alert("Todos os campos precisam ser preenchidos corretamente!");
        return false;
    }

    if (!bothPasswordsEqual) {
        alert("A senha precisa ser a mesma em ambos os campos");
        return false;
    }

    return true;
}

function validateUsername(username) {
    return (validator.matches(username, /^(?!.*[-_.]{2})[a-zA-Z0-9][a-zA-Z0-9-_.]*[a-zA-Z0-9]{5,20}$/));
}

function validatePassword(password) {
    return (validator.matches(password, /^(?=.*[A-Z])(?=.*[!@#$%^&*_])(?=.*[0-9])[A-Za-z0-9!@#$%^&*_\d]{8,255}$/));
}

function checkAvailability(type, data){
    ///email/check-availability/{email}
    fetch(`http://localhost:8080/api/validate/${type}/check-availability/${data}`)
        .then(async response => {
            return response;
        })
        .catch(error => {
            alert("Deu errado! -> (register())" + error);
        });
}




function dateConfig() {
    var today = new Date();
    var minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
    var maxDate = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());

    var input = document.querySelector('input[type="date"]');
    input.min = minDate.toISOString().split('T')[0];
    input.max = maxDate.toISOString().split('T')[0];
}