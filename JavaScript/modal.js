/*---------- EDIT OF NAV ----------*/
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}


/*----------  DOM ELEMENTS ----------*/
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");


/*---------- LAUNCHING OF MODAL ----------*/
/*****Launch modal event *****/
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/***** Form sumit *****/
reserve.addEventListener('submit', (e) => {
    e.preventDefault();
  
    validate();
  
    if (_firstName === true && 
        _lastName === true && 
        _email === true && 
        _birthdate === true && 
        _quantity === true && 
        _location === true && 
        _condition === true) {
      sendForm();
      sendFormMessage();
    }
})

/***** Close modal event *****/
closeBtn.addEventListener("click", closeModal);


/*---------- MODAL DISPLAY AND VALIDATION OF FIELD ----------*/
/***** Launch modal form *****/
function launchModal() {
  modalbg.style.display = "block";
}

let _firstName = checkFirstName();
let _lastName = checkLastName();
let _email = checkEmail();
let _birthdate = checkBirthdate();
let _quantity = checkQuantity();
let _location = checkLocation();
let _condition = checkCondition();

/***** All fields are validate *****/
function validate() {
    _firstName;
    _lastName;
    _email;
    _birthdate;
    _quantity;
    _location;
    _condition
}

// Definition of Regular Expression
let regex = /^[A-Z][a-z]+([\-'\s][a-z]+)*$/;

/*****  First name validation *****/
function checkFirstName() {
    const firstName = document.forms["reserve"].first;
    if (firstName.value.trim().length < 2) {
        setErreur(firstName, "Veuillez entrer 2 caractères ou plus pour le champ du prenom.");
        return false;
    } else if (!regex.test(firstName.value)) {
        setErreur(firstName, "Veuillez entrer un prénom valide.");
        return false;
    } else {
        setValid(firstName);
        return true;
    }
}

/***** Last Name validation *****/
function checkLastName() {
    const lastName = document.forms["reserve"].last;
    if (lastName.value.trim().length < 2) {
        setErreur(lastName, "Veuillez entrer 2 caractères ou plus pour le champ du prenom.");
        return false;
    } else if (!regex.test(lastName.value)) {
        setErreur(lastName, "Veuillez entrer un prénom valide.");
        return false;
    } else {
        setValid(lastName);
        return true;
    }
}
 
/***** Email validation *****/
function checkEmail() {
    let emailRegExp = new RegExp(/^[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/);
    const email = document.forms["reserve"].email;
    if (emailRegExp.test(email.value)) {
        setValid(email);
        return true;
    } else {
        setErreur(email, "Veuillez renseigner un e-mail valide.");
        return false;
    }
}

/***** Birthdate validation *****/
function checkBirthdate() {
    const birthdate = document.forms["reserve"].birthdate;

    /* user must be an adult to validate the form */
    let d = new Date(birthdate.value);
    let birthyear = d.getFullYear();
    let now = new Date();

    if (birthdate.value.trim().length === "") {
        setErreur(birthdate, "Veuillez renseigner une date de naissance.");
        return false;
    } else if ((now.getFullYear() - birthyear) < 18) {
        setErreur(birthdate, "Vous devez être majeur");
        return false;
    } else {
        setValid(birthdate);
        return true;
    }
}

/***** Quantity validation *****/
function checkQuantity() {
    const quantity = document.forms["reserve"].quantity;
    const q = parseInt(quantity.value);
    if (isNaN(q) || (q < 0) || (q > 99)) {
        setErreur(quantity, "Veuillez renseigner a combien de tournois vous avez participé.");
        return false;
    } else {
        setValid(quantity);
        return true;
    }
}

/***** Radio Boutton validation *****/
function checkLocation() {
    const location = document.forms["reserve"].location.value;
    if(location === "") {
        setErreurCheckbox(location, "Veuillez renseigner une localisation.");
        return false;
    }
    else {
        setValidCheckbox(location);
        return true;
    }
}

/***** Checkbox1 validation *****/
function checkCondition() {
    const condition = document.forms["reserve"].condition.value;
    if (condition.checked) {
        setValidCheckbox(condition);
        return true;
    } else {
        setErreurCheckbox(condition, "Veuillez accepter les conditions d'utilisateur.");
        return false;
    }
}


/*---------- DEFINITION OF FONCTION ERROR AND VALIDATION ----------*/
function setErreur(input, message) {
    const formDataInput = input.parentElement; // Select input
    const small = formDataInput.querySelector('small'); // Select div for error message
  
    small.innerText = message; // The message will be writing later
    input.className = 'text-control input-error';
}

function setValid(input) {
    const formDataInput = input.parentElement; // Select input
    const small = formDataInput.querySelector('small'); // Select div for error message
  
    small.innerText = " "; // Reset error message
    input.className = 'text-control input-valid';
}

// SetErreur validation for checkbox
function setErreurCheckbox(input, message) {
    const formDataInput = input.parentElement; // Select input
    const small = formDataInput.querySelector('small'); // Select div for error message
  
    small.innerText = message; // The message will be writing later
}
function setValidCheckbox(input) {
    const formDataInput = input.parentElement; // Select input
    const small = formDataInput.querySelector('small'); // Select div for error message
  
    small.innerText = " "; // Reset error message
}


/****** FORM SENDED AND COMPLETED *****/
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

// Close modal
function closeModal () {
    modalbg.style.display = "none";
}
  
function closeModalReload() {
    modalbg.style.display = "none";
    window.location.reload();
}
// onsubmit = return validate()
// il faut que validate renvoie false
// validate() doit savoir s'il y a un problème de validation