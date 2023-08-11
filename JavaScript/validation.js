/***** DOM Element for validation *****/
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const listBtnRadio = document.querySelectorAll("input[type=radio]");
const checkbox1 = document.getElementById("checkbox1");
//const form = document.querySelector(".formData");

// Definition of Regular Expression
let regex = /^[A-Z][a-z]+([\-'\s][a-z]+)*$/;
let emailRegExp = new RegExp(/^[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/);


/*****  First name validation *****/
function checkFirstName(balise) {
    if (firstName.value.trim().length < 2) {
        firstName.parentElement.setAttribute("data-error-visible", "true");
        firstName.style.border = "3px solid #E8071E";
        return false;
    } else {
        firstName.parentElement.setAttribute("data-error-visible", "false");
        firstName.style.border = "3px solid #279E7A";
        return true;
    }

    if(regex.test(balise.value)) {
        regex.parentElement.setAttribute("data-error-visible", "true");
        regex.style.border = "3px solid #E8071E";
        return false;
    } else {
        regex.parentElement.setAttribute("data-error-visible", "false");
        regex.style.border = "3px solid #279E7A";
        return true;
    }
}

firstName.addEventListener("change", () => {
    checkFirstName(firstName.value);
})


/***** Last Name validation *****/
function checkLastName() {
    if (lastName.value.trim().length < 2 || regex.test()) {
        lastName.parentElement.setAttribute("data-error-visible", "true");
        lastName.style.border = "3px solid #E8071E";
        return false;
    } else {
        lastName.parentElement.setAttribute("data-error-visible", "false");
        lastName.style.border = "3px solid #279E7A";
        return true;
    }

    if(regex.test(balise.value)) {
        regex.parentElement.setAttribute("data-error-visible", "true");
        regex.style.border = "3px solid #E8071E";
        return false;
    } else {
        regex.parentElement.setAttribute("data-error-visible", "false");
        regex.style.border = "3px solid #279E7A";
        return true;
    }
}

lastName.addEventListener("change", () => {
    checkLastName(lastName.value);
})
 
/***** Email validation *****/
function checkEmail(balise) {
    if (emailRegExp.test(balise.value)) {
        email.parentElement.setAttribute("data-error-visible", "true");
        email.style.border = "3px solid #E8071E";
        return false;
    } else {
        email.parentElement.setAttribute("data-error-visible", "false");
        email.style.border = "3px solid #279E7A";
        return true;
    }
}

email.addEventListener("change", () => {
    checkEmail(email.value);
})

/***** Birthdate validation *****/
/* Ajouter une condition pour que 01<jj<31, 01<mm<12, 1900<aaaa<2023 */
let d = new Date(birthdate);
let birthyear = d.getFullYear();
let now = new Date();

function checkBirthdate() {
    if (birthdate.value.trim().length === "" || (now.getFullYear() - birthyear) < 18) {
        birthdate.parentElement.setAttribute("data-error-visible", "true");
        birthdate.style.border = "3px solid #E8071E";
        return false;
    } else {
        birthdate.parentElement.setAttribute("data-error-visible", "false");
        birthdate.style.border = "3px solid #279E7A";
        return true;
    }
/*    if((now.getFullYear() - birthyear) < 18) {
    }*/
}

/***** Quantity validation *****/
function checkQuantity() {
    if (quantity.value.trim().length === 0 || quantity.value.trim() < 0) {
        quantity.parentElement.setAttribute("data-error-visible", "true");
        quantity.style.border = "3px solid #E8071E";
        return false;
    } else {
        quantity.parentElement.setAttribute("data-error-visible", "false");
        quantity.style.border = "3px solid #279E7A";
        return true;
    }
}

/***** Radio Boutton validation *****/
/* A faire sans boucle for */
function checkBtnRadio() {
    listBtnRadio.setAttribute("data-error-visible", "true")
    for (let i = 0; i < listBtnRadio.length; i++) {
        if (listBtnRadio[i].checked) {
            console.log(listBtnRadio[i].value);
            listBtnRadio.setAttribute("data-error-visible", "false")
        } 
    }
}

/***** Checkbox1 validation *****/
function checkCheckBox() {
    if (checkbox1.checked === false) {
        checkbox1.parentElement.setAttribute("data-error-visible", "true");
        return false;
    } else {
        checkbox1.parentElement.setAttribute("data-error-visible", "false");
        return true;
    }
}

/***** All fields are validate *****/
function validate() {
    debugger;
    if (checkFirstName() === true &&
        checkLastName() === true &&
        checkEmail() === true &&
        checkBirthdate() === true &&
        checkQuantity() === true &&
        checkBtnRadio() === true &&
        checkCheckBox() === true) {
            return true;
        } else {
            return false
    }
}
// onsubmit = return validate()
// il faut que validate renvoie false
// validate() doit savoir s'il y a un problème de validation