document
    .getElementById("CreateAccount")?.addEventListener("click", function () {

        let name = document.getElementById("text").value;
        let email = document.getElementById("e-mail").value;
        let password = document.getElementById("password").value;
        let re_password = document.getElementById("Re-password").value;

        let regex_for_name = /^[a-zA-Z]+ [a-zA-Z]+$/;
        let regex_for_email = /\S+@\S+\.\S+/;
        let regex_for_password = /[0-9a-zA-Z]{6,}/;


        // =================== If Name, Email and Password all are  empty  ================ //

        if (
            (email === "" || !regex_for_email.test(email)) &&
            (name === "" || !regex_for_name.test(name)) &&
            (password === "" || password !== re_password.value)
        ) {
            let errorBox = document.getElementsByClassName("errorMessage")[0];
            errorBox.style.display = "block";

            let listItems = errorBox.querySelectorAll("ul li");

            listItems.forEach(item => {
                item.style.display = "list-item";
            });
        }

        // // =================== If Email and password  are empty OR not correct ================ //

        else if ((email === "" || !regex_for_email.test(email)) && (password === "" || password !== re_password.value)) {
            let errorBox = document.getElementsByClassName("errorMessage")[0];
            errorBox.style.display = "block";

            let listItems = errorBox.querySelectorAll("ul li");

            listItems.forEach(item => {
                const itemText = item.textContent.trim();
                if (itemText === "Enter your email") {
                    item.style.marginTop = "12px";
                    if (email === "") {
                        item.style.display = "list-item";
                    } else {
                        item.textContent = "Enter a valid email address";
                        item.style.display = "list-item";
                    }
                } else if (itemText === "Enter your password") {
                    if (password === "") {
                        item.style.margin-top == "20px";
                        item.style.display = "list-item";
                    } else {
                        item.textContent = "Passwords must match";
                        item.style.display = "list-item";
                    }
                } else {
                    item.style.display = "none";
                }
            });
        }


        // ===================== If Name and password are empty OR not correct =================== //

        else if (name === "" && (password === "" || password !== re_password.value)) {
            let errorBox = document.getElementsByClassName("errorMessage")[0];
            errorBox.style.display = "block";

            let listItems = errorBox.querySelectorAll("ul li");

            listItems.forEach(item => {
                const itemText = item.textContent.trim();
                if (itemText == "Enter your name") {
                    item.style.display = "list-item";
                }
                else if (itemText == "Enter your password") {
                    if (password === "") {
                        item.style.display = "list-item";
                    } else {
                        item.textContent = "Passwords must match";
                        item.style.display = "list-item";
                    }
                }
                else {
                    item.style.display = "none";
                }
            });
        }


        // =================== If only Name  is empty or not equal to regex  ================ //

        else if (name === "" || !regex_for_name.test(name)) {
            let errorBox = document.getElementsByClassName("errorMessage")[0];
            errorBox.style.display = "block";

            let listItems = errorBox.querySelectorAll("ul li");

            listItems.forEach(item => {
                if (item.textContent.trim() !== "Enter your name") {
                    item.style.display = "none";
                }
            });
        }

        // =================== If only Email  is empty or not equal to regex  ================ //

        else if (email === "" || !regex_for_email.test(email)) {
            let errorBox = document.getElementsByClassName("errorMessage")[0];
            errorBox.style.display = "block";

            let listItems = errorBox.querySelectorAll("ul li");

            listItems.forEach(item => {
                if (item.textContent.trim() === "Enter your email") {
                    if (email === "") {
                        item.style.display = "list-item";
                    } else {
                        item.textContent = "Enter a valid email address";
                        item.style.display = "list-item";
                    }
                } else {
                    item.style.display = "none";
                }
            });
        }

        // =================== If only Password  is empty or not equal to re-entered password  ================ //

        else if (password === "" || password !== re_password) {
            let errorBox = document.getElementsByClassName("errorMessage")[0];
            errorBox.style.display = "block";

            let listItems = errorBox.querySelectorAll("ul li");

            listItems.forEach(item => {
                if (item.textContent.trim() === "Enter your password") {
                    if (password === "") {
                        item.style.display = "list-item";
                    } else {
                        item.style.marginTop = "10px";
                        item.textContent = "Passwords must match";
                        item.style.display = "list-item";
                    }
                } else {
                    item.style.display = "none";
                }
            });
        }
    });