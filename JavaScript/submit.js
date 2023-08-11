/***** DOM ELEMENTS SUBMITTED CONFIRMATION *****/
const modalSubmit = document.getElementsByClassName("confirmationSubmit");
const closeModalSubmit = document.getElementsByClassName("closeModalSubmit");
const closeBtnConfirmation = document.getElementById("closeBtnConfirmation");

/***** SUBMITTED CONFIRMATION *****/

/***** Open succes modal form *****/
function displayModalSubmit() {
    modalbg.style.display = "none";;
    modalSubmit[0].style.display = "block";
}

/*****  Close submit form *****/
function closeSubmit() {
    modalSubmit[0].style.display = "none";
    firstName.style.border = "none";
    lastName.style.border = "none";
    email.style.border = "none";
    birthdate.style.border = "none";
    quantity.style.border = "none";
    listBtnRadio.style.border = "none";
    checkbox1.style.border = "none";
}

/*****  Eent close modal submit *****/
closeModalSubmit[0].addEventListener("click", closeSubmit);
closeBtnConfirmation.addEventListener("click", closeSubmit);