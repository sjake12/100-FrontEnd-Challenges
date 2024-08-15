const generatedPassword = document.querySelector(".generated-password");
const rangeSlider = document.querySelector("input[type=range]");
const charLength = document.querySelector(".length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const btn = document.querySelector("button");

let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
let numbers = "0123456789".split("");
let symbols = "!@#$%^&*()-_=+[]{}|;:,.<>?".split("");

let length = 12;

rangeSlider.addEventListener("input", (e) => {
  length = e.target.value;
  charLength.textContent = length;
});

function generatePassword() {
  let password = "";
  let characters = [];

  if (uppercaseCheckbox.checked) characters.push(...uppercaseLetters);
  if (lowercaseCheckbox.checked) characters.push(...lowercaseLetters);
  if (numbersCheckbox.checked) characters.push(...numbers);
  if (symbolsCheckbox.checked) characters.push(...symbols);

  for (let i = 0; i < length; i++) {
    let idx = Math.floor(Math.random() * characters.length);
    let char = characters[idx];
    password += char;
  }
  generatedPassword.textContent = password;
}

btn.addEventListener("click", generatePassword);
