// DOM Element for validation
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const listBtnRadio = document.querySelectorAll("input[type=radio]");
//const form = document.querySelector(".formData");

// First name validation
function checkFirstName() {
    if (firstName.value.trim().length < 2 && firstName.value.trim() === "") {
        firstName.parentElement.style.border = '2px solid #E8071E';
        return false;
    } else {
        firstName.parentElement.style.border = '2px solid #279E7A';
        return true;
    }
}

firstName.addEventListener("change", () => {
    console.log(firstName.value);
})


// Last Name validation
function checkLastName() {
    if (lastName.value.trim().length < 2 && lastName.value.trim() === "") {
        lastName.parentElement.style.border = "2px solid #E8071E";
        return false;
    } else {
        lastName.parentElement.style.border = "2px solid #279E7A";
        return true;
    }
}

lastName.addEventListener("change", () => {
    console.log(lastName.value);
})

// Email validation
function checkEmail(balise) {
    let emailRegExp = new RegExp("[a-z._-]+@+[a-z._-]\\.+[a-z._-]+")
    if (emailRegExp.test(balise.value)) {
        email.parentElement.style.border = "2px solid #E8071E";
        return false;
    } else {
        email.parentElement.style.border = "2px solid #279E7A";
        return true;
    }
}

email.addEventListener("change", () => {
    checkEmail(email);
})

// Birthdate validation
function checkBirthdate() {

}

// Quantity validation
function checkQuantity() {

}

// Radio Boutton validation
function checkBtnRadio() {
   
}

for (let i = 0; i < listBtnRadio.length; i++) {
    if (listBtnRadio[i].checked) {
        console.log(listBtnRadio[i].value);
    }
}

// All fields are validate
function allValidate() {
    checkFirstName()
    checkLastName()
    checkEmail()
    checkBirthdate()
    checkQuantity()
    checkBtnRadio()
}