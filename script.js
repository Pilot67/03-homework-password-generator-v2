// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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
  
    // Check at least 1 set of chareters has been selected
    if (!(pwdParameters.useLowercase || pwdParameters.useUppercase || pwdParameters.useNumbers || pwdParameters.useSpecial)) {
      alert("Nothing selected\nYou must choose at least 1 set of charaters");
      return null;
    }

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

//code to return the slider value to html - courtesy w3schools.com
var slider = document.getElementById("lengthSlider");
var output = document.getElementById("sliderValue");

slider.oninput = function() {
  output.innerHTML = "Password length = " + this.value;
}