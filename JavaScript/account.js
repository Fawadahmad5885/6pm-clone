document.getElementById("CreateAccount")?.addEventListener("click", function () {
    let name = document.getElementById("text").value;
    let email = document.getElementById("e-mail").value;
    let password = document.getElementById("password").value;
    let re_password = document.getElementById("Re-password").value;

    let regex_for_name = /^[a-zA-Z]+\s[a-zA-Z]+$/;
    let regex_for_email = /\S+@\S+\.\S+/;
    let regex_for_password = /[0-9a-zA-Z]{6,}/;

    let errorBox = document.querySelector(".errorMessage");
    errorBox.style.display = "block";

    let enterName = document.getElementById("enter_name");
    let enterEmail = document.getElementById("enter_email");
    let enterPassword = document.getElementById("enter_password");

    if (name === "" || !regex_for_name.test(name)) {
        enterName.style.display = "list-item";
    } else {
        enterName.style.display = "none";
    }

    if (email === "" || !regex_for_email.test(email)) {
        enterEmail.style.display = "list-item";
        if (email !== "" && !regex_for_email.test(email)) {
            enterEmail.textContent = "Enter a valid email address";
            enterEmail.style.paddingLeft = "4px"
        }
    } else {
        enterEmail.style.display = "none";
    }

    if (password === "" || password !== re_password) {
        enterPassword.style.display = "list-item";
        if (password !== re_password) {
            enterPassword.style.paddingLeft = "4px";
            enterPassword.style.marginTop = "4px";
            enterPassword.textContent = "Passwords must match";
        }
    } else {
        enterPassword.style.display = "none";
    }

    if (name !== "" && regex_for_name.test(name) && email !== "" && regex_for_email.test(email) && password !== "" && password === re_password) {
        errorBox.style.display = "none";
    }
});