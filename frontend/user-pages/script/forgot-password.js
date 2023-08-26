var form = document.getElementById("forgot-password");
var txtEmail = document.getElementById("txt-email");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    forgotPassword();
});

txtEmail.addEventListener("input", function (event) {
    validEmail = validator.isEmail(this.value);
    changeInputBorder(validEmail, this);
});
var lastEmailTyped;
txtEmail.addEventListener("blur", async function (event) {
    if (lastEmailTyped == this.value) return;
    lastEmailTyped = this.value;

    response = await checkAvailability('email', this.value);
    console.log(response.status);

    if (response.status == 409) {
        validEmail = false;
        changeInputBorder(validEmail, txtEmail);
        errorEmail.textContent = await response.text();
    } else {
        errorEmail.textContent = '';
    }
});

function changeInputBorder(validValue, element) {
    if (!validValue) {
        element.classList.add('is-invalid');
    } else {
        element.classList.remove('is-invalid');
    }
}

async function checkAvailability(type, data) {
    response = await fetch(`http://localhost:8080/api/data-verification/${type}/check-availability/${data}`)
        .catch(error => {
            alert("Deu errado! -> (checkAvailability)" + error);
        });
    return response;
}

function forgotPasswordRequisition(jsonObject) {

    fetch("http://localhost:8080/api/admin/login/", {
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

async function forgotPassword() {
    console.log(txtEmail);
    forgotPasswordRequisition(txtEmail);
}

/* function forgotPassword() {

    //requires verification regarding the email format
    let email = document.getElementById('txt-email').value;

    fetch("http://localhost:8080/api/login/${email}", {
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
            console.log("Email já cadastrado, prossiga!");
        })
        .catch(error => {
            alert("Email não cadastrado, cadastre-se primeiro! -> " + error);
        }); 

} */
