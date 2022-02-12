// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numeric = "0123456789"
var characters = "!@#$%^&*"
var possibleCharacters = ""

// Get references to the #generate element
var generateBtn = document.getElementById("generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");
  passwordText.value = password;
};

function generatePassword() {
  //Welcome Visitors and prompt for upper case letters
  upperCaseQuestion = window.confirm("Welcome to Password Craze. Would you like upper case letters in your password?")
  if (upperCaseQuestion) {
    window.alert("You have chosen to include upper case letters in your password.")
    possibleCharacters +=upperCase
  }
  //lowerCase confirm
  lowerCaseQuestion = window.confirm("Would you like lower case letters in your password?")
    if (lowerCaseQuestion) {
      window.alert("You have chosen to include lower case letters in your password.")
      possibleCharacters +=lowerCase
    }
  //numeric confirm
  numbericQuestion = window.confirm("Would you like numbers in your password?")
  if (numbericQuestion) {
    window.alert("You have chosen to include numbers in your password.")
    possibleCharacters +=numeric
  }
  //specialCharacter confirm
  specialCharacter = window.confirm("Would you like special characters (@#$%^&*) in  your password?")
  if (specialCharacter) {
    window.alert("You have chosen to include special characters in your password.")
    possibleCharacters += characters
  }

  //if they pick nothing
  if(possibleCharacters === "") {
    window.alert("Please select character options for your password.")
    writePassword();
  }

  //length of password prompt
  passwordLength = window.prompt("How long would you like your password to be? Enter any number between 8 and 128")
  
  //is password length between 8-128
  if(passwordLength >7 && passwordLength <129) {
  var newPassword = ""

    for (let i = 0; i < passwordLength; i++) {
      var randomNumb = Math.floor(Math.random() * possibleCharacters.length);
      newPassword += possibleCharacters.charAt(randomNumb);
    }
    return newPassword; // the important thing is the value going to writePassword
  };
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);