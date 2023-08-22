//const form = document.querySelector(".formData");

// Definition of Regular Expression
let regex = /^[A-Z][a-z]+([\-'\s][a-z]+)*$/;
let emailRegExp = new RegExp(/^[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/);


/*****  First name validation *****/
function checkFirstName() {
    const firstName = document.forms["reserve"].first;
    if (firstName.value.trim().length < 2 || regex.test(firstName.value)) {
        setErreur(firstName, "Veuillez entrer 2 caractères ou plus pour le champ du prenom.");
        firstName.style.border = "3px solid #E8071E";
        return false;
    } else {
        firstName.parentElement.setAttribute("data-error-visible", "false");
        firstName.style.border = "3px solid #279E7A";
        return true;
    }
}

/***** Last Name validation *****/
function checkLastName() {
    const lastName = document.forms["reserve"].last;
    if (lastName.value.trim().length < 2 || regex.test(lastName.value)) {
        setErreur(lastName, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
        lastName.style.border = "3px solid #E8071E";
        return false;
    } else {
        lastName.parentElement.setAttribute("data-error-visible", "false");
        lastName.style.border = "3px solid #279E7A";
        return true;
    }
}
 
/***** Email validation *****/
function checkEmail() {
    const email = document.forms["reserve"].email;
    if (emailRegExp.test(email.value)) {
        setErreur(email, "Veuillez renseigner un e-mail valide.");
        email.style.border = "3px solid #E8071E";
        return false;
    } else {
        email.parentElement.setAttribute("data-error-visible", "false");
        email.style.border = "3px solid #279E7A";
        return true;
    }
}

/***** Birthdate validation *****/

function checkBirthdate() {
    const birthdate = document.forms["reserve"].birthdate;

    /* user must be an adult to validate the form */
    let d = new Date(birthdate.value);
    let birthyear = d.getFullYear();
    let now = new Date();

    if (birthdate.value.trim().length === "" || (now.getFullYear() - birthyear) < 18) {
        setErreur(birthdate, "Veuillez renseigner une date de naissance.");
        birthdate.style.border = "3px solid #E8071E";
        return false;
    } else {
        birthdate.parentElement.setAttribute("data-error-visible", "false");
        birthdate.style.border = "3px solid #279E7A";
        return true;
    }
}

/***** Quantity validation *****/
function checkQuantity() {
    const quantity = document.forms["reserve"].quantity;
    const q = parseInt(quantity.value);
    if (isNaN(q) || (q < 0) || (q > 99)) {
        setErreur(quantity, "Veuillez renseigner a combien de tournois GameOn avez-vous déjà participé.");
        quantity.style.border = "3px solid #E8071E";
        return false;
    } else {
        quantity.parentElement.setAttribute("data-error-visible", "false");
        quantity.style.border = "3px solid #279E7A";
        return true;
    }
}

/***** Radio Boutton validation *****/
function checkLocation() {
    const location = document.forms["reserve"].location.value;
    if(location === "")
    {
      listBtnRadio.setAttribute("data-error-visible", "true");
      return false;
    }
    else
    {
      listBtnRadio.setAttribute("data-error-visible", "false")
      return true;
    }
}

/***** Checkbox1 validation *****/
function checkCondition() {
    const condition = document.forms["reserve"].condition.value;
    if (condition.checked === false) {
        setErreur(condition, "Veuillez renseigner une localisation.");
        return false;
    } else {
        condition.parentElement.setAttribute("data-error-visible", "false");
        return true;
    }
}

/***** All fields are validate *****/
function validate() {
    debugger;
    let _firstName = checkFirstName();
    let _lastName = checkLastName();
    let _email = checkEmail();
    let _birthdate = checkBirthdate();
    let _quantity = checkQuantity();
    let _location = checkLocation();
    let _condition = checkCondition();

    if (_firstName &&
        _lastName &&
        _email &&
        _birthdate &&
        _quantity &&
        _location &&
        _condition) {
            return true;
        } else {
            return false
    }
}

/***** Form sumit *****/
reserve.addEventListener('submit', (e) => {
    e.preventDefault();
  
    validate();
  
    if (validFirstName() == true && 
        validLastName() == true && 
        validEmail() == true && 
        validBirthdate() == true && 
        validQuantity() == true && 
        validLocation() == true && 
        validCGV() == true) {
      sendForm();
      sendFormMessage();
    }
})

/***** Form sent *****/
function sendForm() {
    modalBody.classList.add('not-active');
}

/***** Message form sent *****/
function sendFormMessage() {
    const checkMessage = document.querySelector(".message-valid");
    checkMessage.innerHTML = "<p>Merci d'avoir soumis vos informations d'inscription</p>" + '<button class="btn-close" onclick="closeModalReload()" class="button">Fermer</button>';
    form.reset();
}

// onsubmit = return validate()
// il faut que validate renvoie false
// validate() doit savoir s'il y a un problème de validation