var form = document.getElementById("confirm-email");

var code;

var validCode = false;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    for (var i = 1; i <= 6; i++) {
        code += document.getElementById("code" + i).textContent;
    }
    console.log("Código: " + code)
    validCode = validateCode(code);
    confirmEmail();
});

function changeInputBorder(validValue) {
    let codeInputDiv = document.querySelector('.code-input');
    let inputs = codeInputDiv.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (!validValue) {
            inputs[i].classList.add('is-invalid');
        } else {
            inputs[i].classList.remove('is-invalid');
        }
    }
}

function confirmEmailRequest(jsonObject) {

    //checks if the code is valid and if its equivalent to the one in the backend thread
    fetch("http://localhost:8080/api/data-verification/code/", {
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
            window.location.href = 'reset-password.html';
            return response.json();
        })
        .then(data => {
            console.log("Código válido e equivalente!");
        })
        .catch(error => {
            alert("Código inválido! -> " + error);
        });

}

//use diferent requests to verify de code?
/* function verifyCodeRequest(jsonObject) {

    fetch("http://localhost:8080/api/data-verification/code/", {
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
            console.log("Código válido!");
        })
        .catch(error => {
            alert("Código inválido! -> " + error);
        });

} */

async function confirmEmail() {
    if (!(await validateFields())) return;
    console.log(code);
    confirmEmailRequest(code);
}

function validateFields() {
    console.log(validCode);

    if (!validCode) {
        alert("O código precisa ser preenchido corretamente!");
        return false;
    }

    //use direrent requests to verify de code?
    //verifyCodeRequest(code);

    return true;
}

function validateCode(code) {
    if (code.length !== 6) {
        changeInputBorder(validCode)
        return false;
    }
    for (let i = 0; i < code.length; i++) {
        if (isNaN(parseInt(code[i]))) {
            return false;
        }
    }
    return true;
}
