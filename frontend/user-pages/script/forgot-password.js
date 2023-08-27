var form = document.getElementById("forgot-password");
var txtEmail = document.getElementById("txt-email");
var errorEmail = document.getElementById("email-error");

var validEmail = false;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    forgotPassword();
});


txtEmail.addEventListener("blur", function (event) {
    event.preventDefault();
    isEmailInputEmpty();
});

async function checkUnavailability(type, data) {
    //requires chnge to new method
    response = await fetch(`http://localhost:8080/api/${type}/exists/${data}`)
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
            } else {
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

    let exists = {};
    exists = await checkUnavailability('email', txtEmail.value);

    console.log(exists.status);
    if (exists.status == 409) {
        return;
    }

    console.log(txtEmail.value);
    //perhaps we could send the user instead of the email
    
    forgotPasswordRequisition(txtEmail.value);
}



function isEmailInputEmpty(){
    if(txtEmail.value == ""){
        errorEmail.textContent = "Informe um email!";
        changeInputBorder(false, txtEmail);
    }else{
        errorEmail.textContent = "";
        changeInputBorder(true, txtEmail);
    }

    return (txtEmail.value == "");
}

function validateFields() {
    if(isEmailInputEmpty()) return;
    validEmail = validator.isEmail(txtEmail.value);
    changeInputBorder(validEmail, txtEmail);
    console.log(validEmail);

    if (!validEmail) {
        errorEmail.textContent = "Informe um email válido!";
        return false;
    }

    return true;
}
