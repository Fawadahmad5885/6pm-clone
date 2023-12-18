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
document
    .getElementById("continue_page")
    .addEventListener("click", function () {
        let email = document.getElementById("e-mail").value;
        let characters = document.getElementById("char").value;

        let regex_for_email = /\S+@\S+\.\S+/;
        let random_char = document.getElementById("submit").value;

        // If Both email and characters are empty or not corect

        if ((email === "" || !regex_for_email.test(email)) && characters !== random_char.value) {
            let errorBox = document.getElementsByClassName("errorMessage")[0];
            errorBox.style.display = "block";

            let listItems = errorBox.querySelectorAll("ul li");

            listItems.forEach((item) => {
                item.style.display = "list-item";
            });
        }

        else if (characters === "" || (characters !== random_char.value)) {
            let errorBox = document.getElementsByClassName("errorMessage")[0];
            errorBox.style.display = "block";

            let listItems = errorBox.querySelectorAll("ul li");
            listItems.forEach(item => {
                if (item.textContent.trim() === "Enter your characters as they are given in the challenge.") {
                    if (characters === "") {
                        item.style.display = "list-item";
                    } else {
                        item.style.marginTop = "10px";
                        item.textContent = "Characters must match";
                        item.style.display = "list-item";
                    }
                } else {
                    item.style.display = "none";
                }
            });
        }
    });