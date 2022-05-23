// Assignment code here
function generatePassword() {
  var isSpecial = window.confirm("Would you like to use special characters in your password?")
  var passwordLength = parseInt(window.prompt("How long would you like your password to be?  Choose between 8 and 128"))
  var char = Array.from("abcdefghijklmnopqrstuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  password = []

  if (isSpecial) {
    charSpecial = Array.from("!@#$%&")
    char = char.concat(charSpecial)
  }

  if (passwordLength >= 8 && passwordLength <= 128) {
    for (var i = 0; i < passwordLength; i++) {
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
