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



// ensure they choose something 

// store user selections in an object and return it 

// function got getting a random element from an array

// function to generate the pasword 
function generatePassword()

// grab the user options 

// array to store teh result 

// array to store possible characters 

// array to store guaranteed characters 

// check if the options exist 

// add selected characters to an array of possible characters 

// loop over the password length, selecting random indicies from the possible characters and adding them to the result array 

// mix in at least one of the guaranteed characters in the result 

//  transform the result into a string and pass it into writePassword 

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
