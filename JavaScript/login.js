
function showAlert() {
    alert(
        "Keep me signed in reduces the number of times you're asked to Sign-In on this device. To keep your account secure, use this option only on your personal devices."
    );
}

document.getElementById("sign-in").addEventListener("click", function () {
    let email = document.getElementById("e-mail").value; // Get the value of the email input
    let password = document.getElementById("password").value; // Get the value of the password input

    let regex_for_email = /\S+@\S+\.\S+/;
    let regex_for_password = /\d+/;

    let Email_Error = document.getElementById("Email");
    let password_error = document.getElementById("Password");
    let box = document.querySelector(".box");

    if (email === "" || !regex_for_email.test(email)) {
        Email_Error.innerHTML = "Enter your email or mobile phone number";
        Email_Error.style.color = "#c71f0a";
        Email_Error.style.fontWeight = "300";
        Email_Error.style.marginTop = "3px";
        box.style.height = "390px";
    } else {
        Email_Error.innerHTML = "";
    }
    if (password === "" || !regex_for_password.test(password)) {
        password_error.innerHTML = "Enter your password";
        password_error.style.color = "#c71f0a";
        password_error.style.fontWeight = "300";
        password_error.style.marginTop = "3px";
        box.style.height = "390px";
    } else {
        password_error.innerHTML = "";
    }

    let EmailjsonVariable = JSON.stringify(email);
    let PasswordjsonVarible = JSON.stringify(password);

    console.log(EmailjsonVariable);
    console.log(PasswordjsonVarible);
});