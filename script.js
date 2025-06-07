const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("error-msg");

// Dummy login credentials
const validEmail = "soumya@example.com";
const validPassword = "password123";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email === validEmail && password === validPassword) {
    alert("Login successful!");
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Invalid email or password!";
  }
});
