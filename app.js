let signUpBtn = document.getElementById("signUpBtn");
let signInBtn = document.getElementById("signInBtn");
let field = document.getElementById("field");
let nameField = document.getElementById("nameField");
let emailField = document.getElementById("emailField");
let passwordField = document.getElementById("passwordField");
let title = document.getElementById("title");

signInBtn.onclick = function () {
    if (!signInBtn.classList.contains("disable")) {
        if (emailField.value && emailField.value != "" &&
            passwordField.value && passwordField.value != "") {
            if (ValidateEmail(emailField.value) && validatePassword(passwordField.value)) {
                console.log("done")
            }
        } else {
            alert("Field must not be empty");
        }
    } else {
        field.style.maxHeight = 0;
        nameField.value = "";
        title.innerHTML = "Sign In"
        signUpBtn.classList.add("disable")
        signInBtn.classList.remove("disable")
    }
}
signUpBtn.onclick = function () {
    if (!signUpBtn.classList.contains("disable")) {
        if (nameField.value && nameField.value != "" && emailField.value && emailField.value != "" &&
            passwordField.value && passwordField.value != "") {
            if (validateName(nameField.value) && ValidateEmail(emailField.value) && validatePassword(passwordField.value)) {
                console.log(" done")
            }
        } else {
            alert("Field must not be empty");
        }
    } else {
        field.style.maxHeight = "60px";
        title.innerHTML = "Sign Up"
        signInBtn.classList.add("disable")
        signUpBtn.classList.remove("disable")
    }
}
function validateName(name) {
    var nameFormat = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (name.length < 2 || name.match(nameFormat)) {
        alert("Invalid name!");
        document.getElementById('nameField').focus();
        return false;
    } else {
        return true;
    }
}
function ValidateEmail(mail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!mail.match(mailformat)) {
        alert("You have entered an invalid email address!");
        document.getElementById('emailField').focus();
        return false;
    } else {
        return true;
    }
}

function validatePassword(password) {
    if (password.length > 5) {
        return true
    } else {
        alert("Your password must have atleast 5 characters!");
        document.getElementById('passwordField').focus();
        return false
    }
}