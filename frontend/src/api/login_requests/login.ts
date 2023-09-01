const form: HTMLElement = document.getElementById("login");

const txtEmailOrUsername: HTMLElement = document.getElementById("txt-email-or-username");
const txtPassword: HTMLElement = document.getElementById("txt-password");

async function login(): Promise<void> {
    let user: any = {};

    let exists: any = {};
    user.email = txtEmailOrUsername.value;

    user.rawPassword = txtPassword.value;
    loginRequest(user);

}

function loginRequest(jsonObject: any): void {
    console.log("loginRequest");
    fetch('http://localhost:8080/api/login/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonObject)
    })
        .then(async (response: Response) => {
            if (!response.ok) {
                alert('aaaa')
            } else {
                //Session.setLoggedUser(await response.json());
                window.location.href = 'home.html';
            }
        })
        .catch((error: any) => {
            alert("Deu errado! -> (login())" + error);
        });
}
