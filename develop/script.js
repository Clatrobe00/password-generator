// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passLength = howLong()
  var charArr = charSelect()
  console.log(charArr);
  console.log(passLength);
}

function howLong() {
  var passLength = prompt("How many characters does your password need to have?");
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

function charSelect() {
  var passCharArr = [];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCase = lowerCase.map(lowerCase => lowerCase.toUpperCase());
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '<', '?', '>', ';', ':'];
  lowerConfirm = confirm("Press okay to allow lower case letters in your password");
  if (lowerConfirm === true) {
    passCharArr = passCharArr.concat(lowerCase);
  }
  
  upperConfirm = confirm("Press okay to allow upper case letters in your password");
  if (upperConfirm === true) {
    passCharArr = passCharArr.concat(upperCase);
  }
  
  numbersConfirm = confirm("Press okay to allow numbers in your password");
  if (numbersConfirm === true) {
    passCharArr = passCharArr.concat(numbers);
  }

  specialCharConfirm = confirm("Press okay to allow special characters in your password");
  if (specialCharConfirm === true) {
    passCharArr = passCharArr.concat(specialChar);
  }

  return passCharArr;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
