// Assignment Code
var generateBtn = document.querySelector("#generate");

// ckBox to interrogate checkboxes
var ckBox = document.querySelectorAll(".charCheckboxes");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// make the event for checkboxes and maake dynamic
for (var i=0; i < ckBox.length; i++) {
  ckBox[i].addEventListener("click",checkboxSelected);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
  // declare some local variables
  //initialise pwdParameters = all of the required user input parameters
    var pwdParameters = {};

  //usableChars = array of usable characters and initialise the useSet
    var usableChars = {
      usableCharArray: [],
      lowerCaseChars: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
      upperCaseChars: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      numericalChars: ['0','1','2','3','4','5','6','7','8','9'],
      specialChars: ['@','%','+',"\\",'/',"\'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.']
    }

    //declare generatedPassword 
    var generatedPassword = '';
    
    //Get length and checkbox information from html  
    pwdParameters.length = document.getElementById("lengthSlider").value;
    pwdParameters.useLowercase = document.getElementById("useLowerCase").checked;
    pwdParameters.useUppercase = document.getElementById("useUpperCase").checked;
    pwdParameters.useNumbers = document.getElementById("UseNumberChars").checked;
    pwdParameters.useSpecial = document.getElementById("useSpecialChars").checked;
  
    //Generate the usabelChar array based on checkbox informtion
    if (pwdParameters.useLowercase) {
        usableChars.usableCharArray = usableChars.usableCharArray.concat(usableChars.lowerCaseChars);
    }
    if (pwdParameters.useUppercase) {
        usableChars.usableCharArray = usableChars.usableCharArray.concat(usableChars.upperCaseChars);
    }
    if (pwdParameters.useNumbers) {
        usableChars.usableCharArray = usableChars.usableCharArray.concat(usableChars.numericalChars);
    }
    if (pwdParameters.useSpecial) {
        usableChars.usableCharArray = usableChars.usableCharArray.concat(usableChars.specialChars);
    }
    
    //for loop to generate the password
    for (i=0; i<pwdParameters.length; i++) {
      char = Math.floor(Math.random()*usableChars.usableCharArray.length);
      generatedPassword += usableChars.usableCharArray[char];
    }

    //Return the final generated password
    return generatedPassword;

  }// End of function

  
//code to return the slider value to html
var slider = document.querySelector("#lengthSlider");
var output = document.querySelector("#sliderValue");

slider.oninput = function() {
  output.textContent = "Password length = " + this.value;
}

// function to check if only 1 checkbox is checked and disable it.
// re-enable all checkboxes if more than 1 is checked
function checkboxSelected(){
  var ckTrue=0;
  for (var i=0; i < ckBox.length; i++) {
    ckTrue += ckBox[i].checked;
  }
  if (ckTrue > 1) {
    for (var i = 0; i < ckBox.length; i++){
      // set enabled here
      ckBox[i].disabled=false;
    }
  }else {
    for (var i = 0; i < ckBox.length; i++){
      // set Disabled here
      if (ckBox[i].checked){
        ckBox[i].disabled=true;
      }
    }
  }
} //End of function