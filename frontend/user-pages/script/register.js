//const USER_DEPENDENCIES = ['address', 'friendship', 'interest', 'message'];
const USER_DEPENDENCIES = ['interest'];

var form = document.getElementById("register");

var txtName = document.getElementById("txt-name");
var txtUsername = document.getElementById("txt-username");
var errorUsername = document.getElementById("usernameError");
var txtEmail = document.getElementById("txt-email");
var errorEmail = document.getElementById("emailError");
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


form.addEventListener("submit", function(event) {
    event.preventDefault();
    registerUser();
});


txtUsername.addEventListener("input", function(event) {
    validUsername = validateUsername(this.value);
    changeInputBorder(validUsername, this);
});
var lastUsernameTyped;
txtUsername.addEventListener("blur", async function(event) {
    if(lastUsernameTyped == this.value) return;
    lastUsernameTyped = this.value;

    response = await checkAvailability('username', this.value);
    console.log(response.status);
    console.log(response.text());

    if(response.status == 409){
        validUsername = false;
        changeInputBorder(validUsername, txtUsername);
        errorUsername.textContent = await response.text();
    }else{
        errorUsername.textContent = '';
    }
}); 


txtEmail.addEventListener("input", function(event) {
    validEmail = validator.isEmail(this.value);
    changeInputBorder(validEmail, this);
});
var lastEmailTyped;
txtEmail.addEventListener("blur", async function(event) {
    if(lastEmailTyped == this.value) return;
    lastEmailTyped = this.value;

    response = await checkAvailability('email', this.value);
    console.log(response.status);

    if(response.status == 409){
        validEmail = false;
        changeInputBorder(validEmail, txtEmail);
        errorEmail.textContent = await response.text();
    }else{
        errorEmail.textContent = '';
    }
}); 


async function checkAvailability(type, data){
    response = await fetch(`http://localhost:8080/api/data-verification/${type}/check-availability/${data}`)
        .catch(error => {
            alert("Deu errado! -> (checkAvailability)" + error);
        });
    return response;
}



txtPassword.addEventListener("input", function(event) {
    validPassword = validatePassword(this.value);
    changeInputBorder(validPassword, this);
});


txtConfirmedPassword.addEventListener("input", function(event) {
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

txtZipcode.addEventListener("blur", async function(event) {
    configureAddressByCep(this.value);
    
}); 

async function configureAddressByCep(cep){
    let address = (await fetch(`https://viacep.com.br/ws/${cep}/json/`));
    address = await address.json();
    txtState.value = address.uf;
    txtState.disabled = true;
    //txtCity.value = address.localidade
    txtNeighborhood.value = address.bairro;
    txtNeighborhood.disabled = true;
    txtStreet.value = address.logradouro;
    txtStreet.disabled = true;
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
        //"birthDate": dateBirthDate.value,
        "rawPassword": txtPassword.value,
        //"cellphoneNumber": cellphoneNumber,
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
    console.log(validEmail);
    console.log(validUsername);
    console.log(validPassword);

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
    console.log(validator.matches(username, "^(?!.*[-_.]{2})[a-zA-Z0-9][a-zA-Z0-9-_.]*[a-zA-Z0-9]{5,20}$"));
    return (username.length >= 5 && username.length <= 20) || (validator.matches(username, "^(?!.*[-_.]{2})[a-zA-Z0-9][a-zA-Z0-9-_.]*[a-zA-Z0-9]$"));
}

function validatePassword(password) {
    return (validator.matches(password, /^(?=.*[A-Z])(?=.*[!@#$%^&*_])(?=.*[0-9])[A-Za-z0-9!@#$%^&*_\d]{8,255}$/));
}




function dateConfig() {
    var today = new Date();
    var minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
    var maxDate = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());

    var input = document.querySelector('input[type="date"]');
    input.min = minDate.toISOString().split('T')[0];
    input.max = maxDate.toISOString().split('T')[0];
}