const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const symbols = "@#$%^&*()~+_{}[]<>/-=";

const allChars = upperCase + lowerCase + nums + symbols;

function generatePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += nums[Math.floor(Math.random() * nums.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

const generateBtn = document.querySelector(".generate");

generateBtn.addEventListener("click", generatePassword);

function copyPass() {
    passwordBox.select();
    document.execCommand("copy");
}

const copy = document.getElementById("copy");

copy.addEventListener("click", copyPass);