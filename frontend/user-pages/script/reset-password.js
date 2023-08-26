var form = document.getElementById("register");

var txtPassword = document.getElementById("txt-password");
var txtConfirmedPassword = document.getElementById("txt-confirmed-password");

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

function resetPassowrdRequisition(jsonObject, jsonObject2) {

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

async function resetPassowrd() {
    if (!(await validateFields())) return;
    console.log(txtEmailOrUsername.value);
    resetPassowrdRequisition(txtPassword.value, txtConfirmedPassword.value);
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
