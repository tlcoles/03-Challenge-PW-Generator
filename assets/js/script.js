// Assignment code here: Module 3 Challenge

// Capture password length choice and change object type to number type 
let passwordLength = 8; // default value

function getNewPWLength(getNewPWLength) {
  let x = Number.parseInt(getNewPWLength.value);
  console.log (x);
  console.log(typeof x);
}


// Capture click on input fields that include the word "option"

document.getElementById("option-numbers").addEventListener("click", setLabelColor);
document.getElementById("option-lowercase").addEventListener("click", setLabelColor);
document.getElementById("option-uppercase").addEventListener("click", setLabelColor);
document.getElementById("option-special").addEventListener("click", setLabelColor);

// Verify that current input (this.id) is checked  by changing its label style color to green and return to default black when unchecked
function setLabelColor() {
  let selector = `[for=${this.id}]`
  console.log(selector);
  let label = document.querySelector(selector);

  if (this.checked) {
    label.style.color = "green";

  } else {
    label.style.color = "black";
  };
};

// Set values for letters, numbers, characters for generic password generation

let randomNumbers = "^[A-Za-z][A-Za-z0-9!@#$%^&*]*$";
let alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphaLower = "abcdefghijklmnopqrstuvwxyz";
let choiceNumbers = "0123456789";
let characters = "[~!@#$%^&*()_+-=[]\{}|;:\'\",./<>?\]";

// TODO if just alphaUpper
// ? set chars equal to alphaUpper
// ? set string_length to getPasswordLength.value
// ! Just try some borrowed code in the meantime

// Create random strings per https://www.mediacollege.com/internet/javascript/number/random.html

function generatePassword() {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var stringLength = 40;
	var randomString = '';
	for (var i=0; i<stringLength; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomString += chars.substring(rnum,rnum+1);
	}
	document.randform.randomfield.value = randomString;
console.log(randomString);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}

/*
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("passwordText");
}
let passwordText = document.querySelector("#password");
console.log(passwordText.value);
*/