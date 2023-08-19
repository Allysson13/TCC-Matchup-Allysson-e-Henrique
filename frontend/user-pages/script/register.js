//const USER_DEPENDENCIES = ['address', 'friendship', 'interest', 'message'];
const USER_DEPENDENCIES = ['interest'];

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


document.getElementById("register").addEventListener("submit", function (event) {
    event.preventDefault();
    registerUser();
});


document.getElementById("txt-username").addEventListener("input", function (event) {
    validUsername = validateUsername(this.value);
    changeInputBorder(validUsername, this);  
});

document.getElementById("txt-email").addEventListener("input", function (event) {
    validEmail = validator.isEmail(this.value);
    changeInputBorder(validEmail, this);  
});

document.getElementById("txt-password").addEventListener("input", function (event) {
    validPassword = validatePassword(this.value);
    changeInputBorder(validPassword, this);  
});

document.getElementById("txt-confirmed-password").addEventListener("input", function (event) {
    bothPasswordsEqual = (document.getElementById("txt-password").value == document.getElementById("txt-confirmed-password").value);
    changeInputBorder(bothPasswordsEqual, this); 
});



function changeInputBorder(validValue, element){
    if(!validValue){
        element.classList.add('is-invalid');
    }else{
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
        populateDropDown(json, document.getElementById('dd-interest'));
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


function register(type, jsonObject){

    fetch("http://localhost:8080/api/register/" + type, {
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
    if(!validEmail || !validUsername || !validPassword){
        alert("Todos os campos precisam ser preenchidos corretamente!");
        return;
    }

    if(!bothPasswordsEqual){
        alert("A senha precisa ser a mesma em ambos os campos");
        return;
    }
    //let name = document.getElementById('txt-name').value;
    let username = document.getElementById('txt-username').value;
    let email = document.getElementById('txt-email').value;
    /* let password = document.getElementById('txt-password').value;
    let confirmedPassword = document.getElementById('txt-confirmed-password').value;
    let birthDate = document.getElementById('date-birth-date').value;
    //let profilePicture = document.getElementById('file-profile-picture').value;
    let street = document.getElementById('txt-street').value;
    let number = document.getElementById('number-number').value;
    let neighborhood = document.getElementById('txt-neighborhood').value;
    let state = document.getElementById('txt-state').value;
    let zipcode = document.getElementById('txt-zipcode').value;

    let interests = [];
    for(let option of $("#dd-interest option:selected")){
        //requires change
        var interest = { id: option.value, name: option.text}; 
        interests.push(interest);
    } */

/*     if(!(await validateUsername(username))){ // invalid Username
        document.getElementById('txt-username').classList.add('is-invalid');
    }
    if(!(await validator.isEmail(email))){
        console.log("EMAIL INVÁLIDO!!");
    } */
    

/*     let user = {
        "name": name,
        "username" : username,
        "email": email,
        "birthDate": birthDate,
        //requires verification
        "hashedPassword": password,
        //requires verification
        "cellphoneNumber": cellphoneNumber,
        //"profilePicture": profilePicture,
        //address
        //interest
        "addressStreet": street,
        "addressNumber": number,
        "addressNeighborhood": neighborhood,
        "addressState": state,
        "addressZipcode": zipcode
    } 


    register('user', user);
    */
}

function validateUsername(username){
    return (validator.matches(username, /^(?!.*[-_.]{2})[a-zA-Z0-9][a-zA-Z0-9-_.]*[a-zA-Z0-9]{5,20}$/));
}

function validatePassword(password){
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
