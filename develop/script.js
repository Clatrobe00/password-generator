// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  passLength = howLong()

  console.log(passLength);
}

function howLong() {
  passLength = prompt("How many characters does your password need to have?");
  while (passLength < 8 || passLength > 128) {
    if (passLength < 8) {
      alert("Your password must have at least 8 characters.")
      passLength = prompt("How many characters does your password need to have?");
      } else if (passLength > 128) {
        alert("Your password must have fewer than 128 characters.")
        passLength = prompt("How many characters does your password need to have?");
        }
    }
  return passLength      
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
