
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var uppercase = ["A", "B", "C"];
  var lowercase = ["a", "b", "c"];
  var numeric = ["1", "2", "3"];
  var special = ["!", "#", "%"];
  var choices = [];
  var finalPassword = ""
  var length = prompt("How long would you like your password to be? (Max. 128 characters)");
 

  if (length > 128){
    generatePassword()
  } else{
    var useUpper = confirm("Would you like to include uppercase characters?");
    var useLower = confirm("Would you like to include lowercase characters?");
    var useNumeric = confirm("Would you like to include numeric characters?");
    var useSpecial = confirm("Would you like to include special characters?");

    if (useUpper === true) {
      choices.push(...uppercase)
    }

    if (useLower === true) {
      choices.push(...lowercase)
    }

    if (useNumeric === true) {
      choices.push(...numeric)
    }

    if (useSpecial === true) {
      choices.push(...special)
    }
  
   for (var i= 0; i < length; i++){
  
    
   finalPassword = finalPassword + choices[Math.floor(Math.random() * choices.length)]
  
   }
  
   return(finalPassword)

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);