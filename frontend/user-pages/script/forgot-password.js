var form = document.getElementById("forgot-password");
var txtEmail = document.getElementById("txt-email");
var errorEmail = document.getElementById("email-error");
var errorEmailDoesntExist = document.getElementById("email-doesnt-exist-error");

var btnCloseErrorMessage = document.getElementById("close-message-error");
var validEmail = false;


document.addEventListener("DOMContentLoaded", function () {
    showEmailDoesntExistMessage(false);
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    forgotPassword();
});


txtEmail.addEventListener("input", function (event) {
    event.preventDefault();
    isEmailInputEmpty();
});

btnCloseErrorMessage.addEventListener("click", function (event) {
    showEmailDoesntExistMessage(false);
});

async function checkUnavailability(type, data) {
    response = await fetch(`http://localhost:8080/api/data-verification/${type}/exists/${data}`)
        .catch(error => {
            alert("Deu errado! -> (checkUnavailability)" + error);
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

function showEmailDoesntExistMessage(boolean){
    if(boolean){
        errorEmailDoesntExist.style.display = "flex";
        changeInputBorder(false, txtEmail);
    }else{
        errorEmailDoesntExist.style.display = "none";
        changeInputBorder(true, txtEmail);
    }
}

function configureTxtEmail(value, text){
    changeInputBorder(value, txtEmail);
    errorEmail.textContent = text;
}

async function forgotPassword() {
    if (!(await validateFields())) return;

    let exists = {};
    exists = await checkUnavailability('email', txtEmail.value);

    console.log(exists.status);
    if (exists.status == 409) {
        showEmailDoesntExistMessage(true);
        return;
    }else if(exists.status == 200){
        showEmailDoesntExistMessage(false);
    }

    console.log(txtEmail.value);
    //perhaps we could send the user instead of the email
    
    forgotPasswordRequisition(txtEmail.value);
}



function forgotPasswordRequisition(email) {
    fetch("http://localhost:8080/api/login/forgot-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( email )
    })
        .then(async response => {
            if (!response.ok) {
                throw new Error("Email não cadastrado! " + response);
            } else {
                response = await response.json();
                alert(response);
                window.location.href = 'confirm-email.html';
            }
        })
        .catch(error => {
            alert(`Deu errado! -> (forgot-password(${email}))` + error);
            //Deu errado! -> (forgot-password(assuncaoallyssonbruno@gmail.com))SyntaxError: Unexpected token 'E', "Email não "... is not valid JSON
            console.log(error);
        });
}


function isEmailInputEmpty(){
    if(txtEmail.value == ""){
        configureTxtEmail(false, "Informe um email!");
    }else{
        configureTxtEmail(true, "");
    }
    return (txtEmail.value == "");
}

function validateFields() {
    if(isEmailInputEmpty()) return;
    validEmail = validator.isEmail(txtEmail.value);
    if (!validEmail) {
        configureTxtEmail(false, "Informe um emai válido!");
    }
    return validEmail;
}
