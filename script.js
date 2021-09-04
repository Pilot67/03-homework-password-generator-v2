// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var useLowercase = document.getElementById("useLowerCase");
  var pwdLength = document.getElementById("lengthSlider");
  console.log(useLowercase);
  console.log(useLowercase.checked);
  console.log(pwdLength.value);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




var slider = document.getElementById("lengthSlider");
var output = document.getElementById("sliderValue");



output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}