// Assignment code here
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// function to gather user options 
function getPasswordOptions () {

// get password length
var length = parseInt(
  prompt("How many characters do you want in your password?")
);

// check to see if what they entered was a number 
if (Number.isNaN(length)) {
  alert("Password length must be a number");
  return null;
}

// check if its at least 8 characters long
if (length < 8) {
  alert("Password length must be at least 8 characters");
  return null;
}

// less than 128
if (length > 128) {
  alert("Password length must be less than 128 characters");
  return null;
}

// ask user for their options 
var hasSpecialCharacters = confirm("Click OK to confirm including special characters");
var hasNumericCharacters = confirm("Click OK to confirm including numeric characters");
var hasLowerCase = confirm("Click OK to confirm including lower case characters");
var hasUpperCase = confirm("Click OK to confirm including upper case characters");

// ensure they choose something 
if (
  hasSpecialCharacters === false &&
  hasNumericCharacters === false &&
  hasLowerCase === false &&
  hasUpperCase === false
) {
  alert("Please choose something");
  return null;
}

// store user selections in an object and return it 
var passwordOptions = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasLowerCase: hasLowerCase,
  hasUpperCase: hasUpperCase
};

return passwordOptions

}

// function got getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// function to generate the pasword 
function generatePassword() {

// grab the user options 
var options = getPasswordOptions();


// array to store the result 
var result = [];

// array to store possible characters 
var possibleCharacters = [];

// array to store guaranteed characters 
var guaranteedCharacters = [];

// check if the options exist 
if (!options) return null;

// add selected characters to an array of possible characters 
if (options.hasSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
  guaranteedCharacters.push(getRandom(specialCharacters));
}

if (options.hasNumericCharacters) {
  possibleCharacters = possibleCharacters.concat(numericCharacters);
  guaranteedCharacters.push(getRandom(numericCharacters));
}

if (options.hasLowerCase) {
  possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  guaranteedCharacters.push(getRandom(lowerCasedCharacters));
}

if (options.hasUpperCase) {
  possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  guaranteedCharacters.push(getRandom(upperCasedCharacters));
}


// loop over the password length, selecting random indicies from the possible characters and adding them to the result array 
for (var i = 0; i < options.length; i++) {
  var possibleCharacter = getRandom(possibleCharacters);
  result.push(possibleCharacter)
}

// mix in at least one of the guaranteed characters in the result 
for (var i=0; i < guaranteedCharacters.length; i++) {
  result[i] = guaranteedCharacters[i];
}

//  transform the result into a string and pass it into writePassword 
return result.join('');

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
