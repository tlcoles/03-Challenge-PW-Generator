// Assignment code here: Module 3 Challenge

// Set values for letters, numbers, characters for generic password generation
let randomAll = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789[~!@#$%^&*()_+-=[]\{}|;:\'\",./<>?\]";
let alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphaLower = "abcdefghijklmnopqrstuvwxyz";
let choiceNumbers = "0123456789";
let characters = "[~!@#$%^&*()_+-=[]\{}|;:\'\",./<>?\]";
let include = false;
let chars = [alphaUpper, alphaLower, choiceNumbers, characters];
let randomString = randomAll;
let passwordLength = 8; // default value

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

// Capture password length choice and change object type to number type 
function getNewPWLength(getNewPWLength) {
  passwordLength = Number.parseInt(getNewPWLength.value);
  console.log(passwordLength);
}

// Listen for button click and then generate random string
function generatePassword() {
	chars = randomAll;
	let stringLength = passwordLength;
	randomString = '';
	for (var i=0; i<stringLength; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomString += chars.substring(rnum,rnum+1);
	}

    // Place value of string in the text area
    document.getElementById("password").value = randomString;

    // Get references to the #generate element
    var generateBtn = document.querySelector("#generate");

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
}

// Write random string to the #password input
function writePassword() {
    let password = randomString;
    let passwordText = document.querySelector("#password");
      passwordText.value = password;
  }
  let passwordText = document.querySelector("#password");
  console.log(passwordText.value);

// Capture click on input fields that include the word "option"
document.getElementById("option-numbers").addEventListener("click", setLabelColor);
document.getElementById("option-lowercase").addEventListener("click", setLabelColor);
document.getElementById("option-uppercase").addEventListener("click", setLabelColor);
document.getElementById("option-special").addEventListener("click", setLabelColor);