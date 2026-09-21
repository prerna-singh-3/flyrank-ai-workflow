const form = document.getElementById("settingsForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const message = document.getElementById("message");


function clearErrors() {
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    message.textContent = "";

    nameInput.removeAttribute("aria-invalid");
    emailInput.removeAttribute("aria-invalid");
    passwordInput.removeAttribute("aria-invalid");
}


function validateForm() {

    clearErrors();

    let isValid = true;


    // Full Name validation
    if (nameInput.value.trim() === "") {

        nameError.textContent = "Full name is required.";

        nameInput.setAttribute("aria-invalid", "true");

        isValid = false;
    }


    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const email = emailInput.value.trim();

    if (email === "") {

        emailError.textContent = "Email is required.";

        emailInput.setAttribute("aria-invalid", "true");

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        emailInput.setAttribute("aria-invalid", "true");

        isValid = false;
    }


    // Password validation
    const password = passwordInput.value;

    if (password !== "" && password.length < 8) {

        passwordError.textContent =
            "Password must be at least 8 characters.";

        passwordInput.setAttribute("aria-invalid", "true");

        isValid = false;
    }


    return isValid;
}


form.addEventListener("submit", function(event) {

    event.preventDefault();


    if (!validateForm()) {

        message.textContent =
            "Please correct the errors above.";

        return;
    }


    message.textContent =
        "Settings saved successfully.";

});