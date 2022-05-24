// Assignment code here
function generatePassword() {

  var isSpecial = window.confirm("Would you like to use special characters in your password?")
  var isLowercase = window.confirm("Would you like lowercase letters in your password?")
  var isUppercase = window.confirm("Would you like uppercase letters in your password?")
  var isNumeric = window.confirm("Would you like numeric values in your password?")


  var passwordLength = parseInt(window.prompt("How long would you like your password to be?  Choose between 8 and 128"))
  var char = Array.from("")
  var charSpecial = Array.from("!@#$%&")
  var charLowerCase = Array.from("abcdefghijklmnopqrstuvwxyz")
  var charUpperCase = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  var charNumeric = Array.from("123456789")
  password = []

  if (isSpecial) {
    char = char.concat(charSpecial)
  }

  if (isLowercase) {
    char = char.concat(charLowerCase)
  }

  if (isUppercase) {
    char = char.concat(charUpperCase)
  }

  if (isNumeric) {
    char = char.concat(charNumeric)
  }

  if (passwordLength >= 8 && passwordLength <= 128) {
    for (var i = 0; i <= passwordLength; i++) {
      password += char[Math.floor(Math.random() * char.length)]
    }
    return password

  }else {
    passwordLength = parseInt(window.prompt("How long would you like your password to be?  Choose between 8 and 128"))
  }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
