// Assignment code here: Module 3 Challenge

// Set default value for generic password generation
let passwordLength = 8; 

// Verify that current input (this.id) is checked  by changing its label style color to green and return to default black when unchecked
function setLabelColor() {
    let selector = `[for=${this.id}]`
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

// Create 
function getAlphabet() {
  let Alphabet = ""  //! start with empty alphabet so last result is cleared away
  let alphaLower = "abcdefghijklmnopqrstuvwxyz"
  let alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let choiceNumbers = "0123456789"
  let characters = "[~!@#$%^&*()_+-=[]\{}|;:\'\",./<>?\]"
  let randomAll = alphaLower + alphaUpper + choiceNumbers + characters
  if (!document.getElementById("option-lowercase").checked 
  && !document.getElementById("option-uppercase").checked
  && !document.getElementById("option-numbers").checked
  && !document.getElementById("option-special").checked) {
    return randomAll
  }
 if (document.getElementById("option-numbers").checked) {
  Alphabet += choiceNumbers
 }
 if (document.getElementById("option-lowercase").checked) {
  Alphabet += alphaLower
 }
 if (document.getElementById("option-uppercase").checked) {
  Alphabet += alphaUpper
 }
 if (document.getElementById("option-special").checked) {
  Alphabet += characters
 }
 return Alphabet //* pass value out of function to generatePassword function
}

// Listen for button click and then generate random string
function generatePassword() {
	chars = getAlphabet();
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

// Listen for click on input fields that include the word "option"
document.querySelector('[id^="option-"]').addEventListener("click", setLabelColor);