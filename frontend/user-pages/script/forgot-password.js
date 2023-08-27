var form = document.getElementById("forgot-password");
var txtEmail = document.getElementById("txt-email");
var errorEmail = document.getElementById("email-error");

var validEmail = false;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    forgotPassword();
});

//perhaps we should change validation to input as well
/* txtEmail.addEventListener("input", function (event) {
    validEmail = validator.isEmail(this.value);
    changeInputBorder(validEmail, this);
}); */
/* var lastEmailTyped;
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
}); */

async function checkAvailability(type, data) {
    //requires chnge to new method
    response = await fetch(`http://localhost:8080/api/${type}/exists/${data}`)
        .catch(error => {
            alert("Deu errado! -> (checkAvailability)" + error);
        });
    return response;
}

function changeInputBorder(validValue, element) {
    if (!validValue) {
        element.classList.add('is-invalid');
    } else {
        element.classList.remove('is-invalid');
    }
}

function forgotPasswordRequisition(jsonObject) {

    fetch('http://localhost:8080/api/login/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonObject)
    })
        .then(async response => {
            if (!response.ok) {
                throw new Error("Email não cadastrado! " + response);
            }else{
                window.location.href = 'confirm-email.html';
            }
            addOptionToDropDown(type, await response.json());
        })
        .catch(error => {
            alert("Deu errado! -> (forgot-password())" + error);
        });
}

async function forgotPassword() {
    if (!(await validateFields())) return;
    console.log(txtEmail.value);
    //perhaps we could send the user instead of the email
    forgotPasswordRequisition(txtEmail.value);
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

function validateFields() {
    validEmail = validator.isEmail(this.value);
    changeInputBorder(validEmail, this);
    console.log(validEmail);

    if (!validEmail) {
        alert("O campo de email precisa ser preenchido corretamente!");
        return false;
    }

    return true;
}
