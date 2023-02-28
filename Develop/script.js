// Declaring each confirmation statement
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
// Declaring the length of the password the user chooses
var userLength;
// Declaring the users choice from prompted comfirmations
var userPick;

// All of the uppercase, lowercase, numbers, and symbols that can be used in a password
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "(", ")", "?", "&"];

// Function for generating criteria for the password
function generatePassword() {
  userLength = window.prompt("Please select a password length of at least 8 characters and no more than 128 characters:");

  // If no input entered then it will alert to require a value
  if (!userLength) {
    alert("Requires a Value");

  // If the number isn't between 8 and 128 then it will prompt to enter a number in the range
  } else if (userLength < 8 || userLength > 128) {
    userLength = prompt("You must choose a number between 8 and 128");

  // Will ask user to confirm which characters to include in password
  } else { 
    confirmLower = confirm("Will you like to include lower case letters?");
    confirmUpper = confirm("Will you like to include upper case letters?");
    confirmNumber = confirm("Will you like to include numbers?");
    confirmSpecial = confirm("Will you like to include special characters?");
  }


  // If user chooses none of the criteria then it will alert to choose criteria
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userPick = alert("You must choose a criteria");
  // All 4 true options for confirmations
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userPick = lowerCaseChar.concat(upperCaseChar, numChar, specialChar);
  }
  // 3 possible true options for confirmations
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userPick = lowerCaseChar.concat(numChar, specialChar);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userPick = upperCaseChar.concat(numChar, specialChar);
  }
  else if (confirmLower && confirmUpper && confirmNumber) {
    userPick = lowerCaseChar.concat(upperCaseChar, numChar);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userPick = lowerCaseChar.concat(upperCaseChar, specialChar);
  }
  // 2 possible true options for confirmations
  else if (confirmUpper && confirmNumber) {
    userPick = upperCaseChar.concat(numChar);
  }
  else if (confirmUpper && confirmSpecial) {
    userPick = upperCaseChar.concat(specialChar);
  }
  else if (confirmNumber && confirmSpecial) {
    userPick = numChar.concat(specialChar);
  }
  else if (confirmLower && confirmUpper) {
    userPick = lowerCaseChar.concat(upperCaseChar);
  }
  else if (confirmLower && confirmNumber) {
    userPick = lowerCaseChar.concat(numChar);
  }
  else if (confirmLower && confirmSpecial) {
    userPick = lowerCaseChar.concat(specialChar);
  }
  // 1 possible true option for confirmations
  else if (confirmNumber) {
    userPick = numChar;
  }
  else if (confirmLower) {
    userPick = lowerCaseChar;
  }
  else if (confirmUpper) {
    userPick = blankUpper.concat(upperCaseChar);
  }
  else if (confirmSpecial) {
    userPick = specialChar;
  }

// Empty variable for the password length
var passwordBlank = [];
  
// For loop for random selection of password
for (var i = 0; i < userLength; i++) {
  var randomChoices = userPick[Math.floor(Math.random() * userPick.length)];
  passwordBlank.push(randomChoices);
}

// Join and return the password 
var password = passwordBlank.join("");
console.log("Your Pasword is: " + password);
return password;

}


function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
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
