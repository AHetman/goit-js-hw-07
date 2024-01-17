const formElem = document.querySelector(".login-form");
formElem.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();

  const userEmail = formElem.elements.email.value;
  const userPassword = formElem.elements.password.value;

  const obj = {
    email: userEmail,
    password: userPassword,
  };
  if (userEmail === "" || userPassword === "")
    alert("All form fields must be filled in");
  else {
    console.log(obj);
  }
  formElem.reset();
}
