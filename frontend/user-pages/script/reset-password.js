var form = document.getElementById("register");

var txtPassword = document.getElementById("txt-password");
var txtConfirmedPassword = document.getElementById("txt-confirmed-password");

var validPassword = false;
var bothPasswordsEqual = false;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    resetPassword();
});

async function checkAvailability(type, data) {
    response = await fetch(`http://localhost:8080/api/data-verification/${type}/check-availability/${data}`)
        .catch(error => {
            alert("Deu errado! -> (checkAvailability)" + error);
        });
    return response;
}

//perhaps we should change validation to input as well
txtPassword.addEventListener("input", function (event) {
    validPassword = validatePassword(this.value);
    changeInputBorder(validPassword, this);
});

//perhaps we should change validation to input as well
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

function resetPassowrdRequest(jsonObject, jsonObject2) {

    fetch('http://localhost:8080/api/login/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonObject + "/" + jsonObject2)
    })
        .then(async response => {
            if (!response.ok) {
                throw new Error("Senhas incompatíveis! " + response);
            }else{
                window.location.href = 'login.html';
            }
            addOptionToDropDown(type, await response.json());
        })
        .catch(error => {
            alert("Deu errado! -> (reset-password())" + error);
        });
}

async function resetPassword() {
    if (!(await validateFields())) return;
    console.log(txtEmailOrUsername.value);
    //perhaps we could send the user instead of the passwords
    resetPassowrdRequest(txtPassword.value, txtConfirmedPassword.value);
}

/* function resetPassowrd() {

    let password = document.getElementById('txt-password').value;
    let confirmedPassword = document.getElementById('txt-confirmed-password').value;

    if (password != confirmedPassword) {

        //fazer uma mensagem de erro melhor e criar um laço que impeça que o usuário
        //prossiga sem informar duas senhas iguais
        alert('As senhas devem ser iguais!')

    }

    fetch("http://localhost:8080/api/login/${password}/${confirmedPassword}", {
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
            alert("Deu erro! -> " + error);
        });

} */

function validateFields() {
    console.log(validPassword);

    if (!validPassword) {
        alert("As senhas precisam ser preenchidas corretamente!");
        return false;
    }

    if (!bothPasswordsEqual) {
        alert("A senha precisa ser a mesma em ambos os campos");
        return false;
    }

    return true;
}

function validatePassword(password) {
    return (validator.matches(password, /^(?=.*[A-Z])(?=.*[!@#$%^&*_])(?=.*[0-9])[A-Za-z0-9!@#$%^&*_\d]{8,255}$/));
}
