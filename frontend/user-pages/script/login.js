var form = document.getElementById("login");

var txtEmailOrUsername = document.getElementById("txt-email-or-username");
var errorEmailOrUsername = document.getElementById("email-or-username-error");
var txtPassword = document.getElementById("txt-password");
var txtConfirmedPassword = document.getElementById("txt-confirmed-password");

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


//var lastEmailOrUsernameTyped;
txtEmailOrUsername.addEventListener("blur", async function (event) {
    validateEmailOrUsername(this.value);
    validEmailOrUsername = isEmail || isUsername;
    changeInputBorder(validEmailOrUsername, txtEmailOrUsername);
    if (!validEmailOrUsername) {
        errorEmailOrUsername.textContent = "Email ou nome de usuário inválido!";
    } else {
        errorEmailOrUsername.textContent = "";
    }
    //if (lastEmailOrUsernameTyped == this.value) return;
    //lastEmailOrUsernameTyped = this.value;

    /*     response = await checkAvailability('emailOrUsername', this.value);
        console.log(response.status);
        console.log(response.text());
    
        if (response.status == 409) {
            validEmailOrUsername = false;
            changeInputBorder(validEmailOrUsername, txtEmailOrUsername);
            validEmailOrUsername.textContent = await response.text();
        } else {
            errorUsername.textContent = '';
        } */
});

async function checkAvailability(type, data) {
    response = await fetch(`http://localhost:8080/api/data-verification/${type}/check-availability/${data}`)
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

function loginRequisition(jsonObject) {

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
                window.location.href = 'home.html';
            }
            addOptionToDropDown(type, await response.json());
        })
        .catch(error => {
            alert("Deu errado! -> (login())" + error);
        });
}

async function login() {
    if (!(await validateFields())) return;

    let exists;
    if (isEmail) {
        exists = !checkAvailability('email', txtEmailOrUsername.value);
    } else if (isUsername) {
        exists = !checkAvailability('username', txtEmailOrUsername.value);
    }



    console.log(txtEmailOrUsername.value);
    loginRequisition(txtEmailOrUsername.value);

}



/* function login() {

    let email = document.getElementById('txt-email').value;
    //requires verification regarding the password format
    let password = document.getElementById('txt-password').value;

    let user = {
        "email": email,
        //requires verification
        "hashedPassword": password,
    }

    fetch("http://localhost:8080/api/login/${email}/${password}", {
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
            console.log("Deu certo!");
        })
        .catch(error => {
            alert("Deu errado! -> " + error);
        });

} */

function validateFields() {
    console.log(validEmailOrUsername);

    if (!validEmailOrUsername && !validPassword) {
        alert("Todos os campos precisam ser preenchidos corretamente!");
        return false;
    }

    return true;
}

function validateEmailOrUsername(emailOrUsername) {
    isEmail = validator.isEmail(emailOrUsername);
    if (isEmail) return;
    isUsername = (emailOrUsername.length >= 5 && emailOrUsername.length <= 20) && (validator.matches(emailOrUsername, "^(?!.*[-_.]{2})[a-zA-Z0-9][a-zA-Z0-9-_.]*[a-zA-Z0-9]$"));
}

function validatePassword(password) {
    return (validator.matches(password, /^(?=.*[A-Z])(?=.*[!@#$%^&*_])(?=.*[0-9])[A-Za-z0-9!@#$%^&*_\d]{8,255}$/));
}
