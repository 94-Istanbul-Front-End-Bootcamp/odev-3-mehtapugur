const form1DOM = document.getElementById("form1");
const nameDOM = document.getElementById("userName");
const passwordDOM = document.getElementById("password");
const emailDOM = document.getElementById("eMail");
const checkboxDOM = document.getElementById("checkbox");

let nameError = document.getElementById("nameError");
let passwordError = document.getElementById("passwordError");
let emailError = document.getElementById("emailError");
let checkboxError = document.getElementById("checkboxError");

function clearError(param){
  param.innerHTML = "";
}

form1DOM.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs(){

  if (nameDOM.value === "" || nameDOM.value === null) {
    nameError.innerHTML = "Lütfen Bu Alanı Doldurun.";
  } else {
    nameError.innerHTML = "";
  }

  if ( passwordDOM.value === "" || passwordDOM.value === null) {
    passwordError.innerHTML = "Lütfen Bu Alanı Doldurun.";
  } else {
    passwordError.innerHTML = "";
  }

  if (emailDOM.value === "" || emailDOM.value === null) {
    emailError.innerHTML = "Lütfen Bu Alanı Doldurun.";
  } else {
    emailError.innerHTML = "";
  }

  if (!checkboxDOM.checked) {
    checkboxError.innerHTML = "Lütfen Bu Alanı Doldurun.";
  } else {
    checkboxError.innerHTML = "";
  }
}

