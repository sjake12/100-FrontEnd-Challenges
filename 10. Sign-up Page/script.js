const passwordField = document.getElementById("password");
const eye = document.getElementById("eyecon");

eye.addEventListener("click", () => {
  passwordField.type === "password"
    ? (passwordField.type = "text")
    : (passwordField.type = "password");
});
