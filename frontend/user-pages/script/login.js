var form = document.getElementById("login");

var txtEmailOrUsername = document.getElementById("txt-email-or-username");
var errorEmailOrUsername = document.getElementById("email-or-username-error");
var txtPassword = document.getElementById("txt-password");

var validEmailOrUsername = false;
var isEmail = false;
var isUsername = false;
var validPassword = false;



// document.addEventListener("DOMContentLoaded", function () {

// });

form.addEventListener("submit", function (event) {
    event.preventDefault();
    login();
});


function validateFields() {
    validateEmailOrUsername(txtEmailOrUsername.value);
    validEmailOrUsername = isEmail || isUsername;
    changeInputBorder(validEmailOrUsername, txtEmailOrUsername);
    if (!validEmailOrUsername) {
        errorEmailOrUsername.textContent = "Email ou nome de usuário inválido!";
        return false;
    } else {
        errorEmailOrUsername.textContent = "";
        return true;
    }
};

async function checkUnavailability(type, data) {
    response = await fetch(`http://localhost:8080/api/data-verification/${type}/exists/${data}`)
        .catch(error => {
            alert("Deu errado! -> (checkAvailability)" + error);
        });
    return response;
}

txtPassword.addEventListener("input", function (event) {
    validPassword = validatePassword(this.value);
    changeInputBorder(validPassword, this);
});

function changeInputBorder(validValue, element) {
    if (!validValue) {
        element.classList.add('is-invalid');
    } else {
        element.classList.remove('is-invalid');
    }
}


async function login() {
    if (!(await validateFields())) return;
    let user = {};

    let exists;
    user.email = txtEmailOrUsername.value;
    if (isEmail) {
        console.log("email");
        exists = checkUnavailability('email', txtEmailOrUsername.value);
        user.email = txtEmailOrUsername.value;
    } else if (isUsername) {
        exists = exists('username', txtEmailOrUsername.value);
        user.username = txtEmailOrUsername.value;
    }

    // if(!exists){
    //     return;
    // }

    user.rawPassword = txtPassword.value;
    console.log(user);
    loginRequisition(user);

}

function loginRequisition(jsonObject) {
    console.log("loginRequest");
    fetch('http://localhost:8080/api/login/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonObject)
    })
        .then(async response => {
            if (!response.ok) {
                throw new Error("Informações incompatíveis com qualquer usuário cadastrado! " + response);
            } else {
                Session.setLoggedUser(await response.json());  
                window.location.href = 'home.html';
            }
        })
        .catch(error => {
            alert("Deu errado! -> (login())" + error);
        });
}


function validateEmailOrUsername(emailOrUsername) {
    isEmail = validator.isEmail(emailOrUsername);
    console.log(isEmail);
    if (isEmail) return;
    isUsername = (emailOrUsername.length >= 5 && emailOrUsername.length <= 20) && (validator.matches(emailOrUsername, "^(?!.*[-_.]{2})[a-zA-Z0-9][a-zA-Z0-9-_.]*[a-zA-Z0-9]$"));
}

function validatePassword(password) {
    return (validator.matches(password, /^(?=.*[A-Z])(?=.*[!@#$%^&*_])(?=.*[0-9])[A-Za-z0-9!@#$%^&*_\d]{8,255}$/));
}
