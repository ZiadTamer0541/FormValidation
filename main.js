const form = document.querySelector(".registration");

const first_name = document.getElementById("First-Name");
const last_name = document.getElementById("Last-Name");
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");

const span_text_f = document.querySelector(".text-error-f");
const img_error_f = document.querySelector(".img-error-f");

const span_text_l = document.querySelector(".text-error-l");
const img_error_l = document.querySelector(".img-error-l");

const span_text_e = document.querySelector(".text-error-e");
const img_error_e = document.querySelector(".img-error-e");

const span_text_p = document.querySelector(".text-error-p");
const img_error_p = document.querySelector(".img-error-p");

form.addEventListener("submit", (e) => {
  let firstName_Boolean = false;
  let lastName_Boolean = false;
  let emailBoolean = false;
  let passBoolean = false;

  if (first_name.value === "") {
    first_name.classList.add("error");

    span_text_f.style.display = "block";
    span_text_f.classList.add("wrong");
    span_text_f.textContent = `${first_name.getAttribute(
      "constant"
    )} cannot be empty`;

    first_name.placeholder = "";

    img_error_f.style.display = "block";
    img_error_f.classList.add("icon");
  } else {
    first_name.classList.remove("error");
    span_text_f.style.display = "none";
    img_error_f.style.display = "none";
    firstName_Boolean = true;
  }
  // Last Name ****************************************************************
  if (last_name.value === "") {
    last_name.classList.add("error");

    span_text_l.style.display = "block";
    span_text_l.classList.add("wrong");
    span_text_l.textContent = `${last_name.getAttribute(
      "constant"
    )} cannot be empty`;

    last_name.placeholder = "";

    img_error_l.style.display = "block";
    img_error_l.classList.add("icon");
  } else {
    last_name.classList.remove("error");
    span_text_l.style.display = "none";
    img_error_l.style.display = "none";
    lastName_Boolean = true;
  }
  // Email *********************************************************************************
  if (Email.value === "") {
    Email.classList.add("error");

    span_text_e.style.display = "block";
    span_text_e.classList.add("wrong");
    span_text_e.textContent = "Looks like this is not an email";

    Email.classList.add("example");
    Email.placeholder = "email@example/com";

    img_error_e.style.display = "block";
    img_error_e.classList.add("icon");
  } else {
    Email.classList.remove("error");
    span_text_e.style.display = "none";
    img_error_e.style.display = "none";
    emailBoolean = true;
  }
  // Pass ************************************************************************
  if (Password.value === "") {
    Password.classList.add("error");

    span_text_p.style.display = "block";
    span_text_p.classList.add("wrong");
    span_text_p.textContent = `${Password.getAttribute(
      "constant"
    )} cannot be empty`;

    Password.placeholder = "";

    img_error_p.style.display = "block";
    img_error_p.classList.add("icon");
  } else {
    Password.classList.remove("error");
    span_text_p.style.display = "none";
    img_error_p.style.display = "none";
    passBoolean = true;
  }
  if (
    firstName_Boolean === false ||
    lastName_Boolean === false ||
    emailBoolean === false ||
    passBoolean === false
  ) {
    e.preventDefault();
  }
});
