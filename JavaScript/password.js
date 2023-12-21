function changeText() {
    document.getElementById("submit").value = "";
    let uniquechar = "";
    const randomchar =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Generate captcha for a length of 5 with random characters
    for (let i = 0; i < 6; i++) {
        uniquechar += randomchar.charAt(
            Math.floor(Math.random() * randomchar.length)
        );
    }

    // Store generated input
    document.getElementById("submit").value = uniquechar;
}

// Continue..........
document.getElementById("continue_page").addEventListener("click", function () {
    let email = document.getElementById("e-mail").value;
    let characters = document.getElementById("char").value;
    let random_char = document.getElementById("submit").value;

    let regex_for_email = /\S+@\S+\.\S+/;

    let errorBox = document.querySelector(".errorMessage");
    errorBox.style.display = "block";

    let enterEmail = document.getElementById("enter_email");
    let enterCharacters = document.getElementById("enter_characters");

    if (email === "" || !regex_for_email.test(email)) {
        enterEmail.style.display = "list-item";
        enterEmail.style.marginTop = "5px"
        enterEmail.textContent = email === "" ? "Enter an email address" : "Enter a valid email address";
    } else {
        enterEmail.style.display = "none";
    }

    if (characters === "" || characters !== random_char) {
        enterCharacters.style.display = "list-item";
        enterCharacters.style.marginTop = "3px"
        enterCharacters.textContent = characters === "" ? "Enter characters" : "Characters must match";
    } else {
        enterCharacters.style.display = "none";
    }

    if (email !== "" && regex_for_email.test(email) && characters !== "" && characters === random_char) {
        errorBox.style.display = "none";
    }
});
