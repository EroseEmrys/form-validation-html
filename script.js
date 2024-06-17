const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", (e) => {
  let valid = true;

  if (name.value.trim() === "") {
    valid = false;
    nameError.textContent = "Name is required";
    nameError.style.display = "block";
  } else {
    nameError.textContent = "";
    nameError.style.display = "none";
  }

  if (email.value.trim() === "") {
    valid = false;
    emailError.textContent = "Email is required";
    emailError.style.display = "block";
  } else if (!validateEmail(email.value.trim())) {
    valid = false;
    emailError.textContent = "Invalid email format";
    emailError.style.display = "block";
  } else {
    emailError.textContent = "";
    emailError.style.display = "none";
  }

  if (password.value.trim() === "") {
    valid = false;
    passwordError.textContent = "Password is required";
    passwordError.style.display = "block";
  } else if (password.value.length < 6) {
    valid = false;
    passwordError.textContent = "Password must be at least 6 characters";
    passwordError.style.display = "block";
  } else {
    passwordError.textContent = "";
    passwordError.style.display = "none";
  }

  if (!valid) {
    e.preventDefault();
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}
