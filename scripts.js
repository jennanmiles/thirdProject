// Random Password Generator


// validate user input number range and give custom error message

function notValid () {
  var userInput = document.getElementById('pswdlength').value;
  if ( userInput < 8 || userInput > 128 ) {
    alert('Your password must be between 8 - 128 characters');
  } else {
    
  }
}

// generate a password based on user input

var upperStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerStr = 'abcdefghijklmnopqrstuvwxyz';
var numbersStr = '1234567890'; 
var specialCharsStr = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~"';
var blankSpaceStr = ' '; 
 


// generate a password 
function generator () {

  var upper = document.getElementById('checkUppercase').checked;
  var lower = document.getElementById('checkLowercase').checked;
  var numbers = document.getElementById('checkNumbers').checked;
  var specialChars = document.getElementById('checkSpecial').checked;
  var blankSpace = document.getElementById('checkSpace').checked;

    // input password length
    var userLength = document.getElementById('pswdlength').value;
    // possible values
    //var values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~"';

    var password = '';

    // create for loop to choose password characters
    for (var i = 0; i <= userLength; i++ ) {
      console.log(userLength);
      console.log(upper);
      console.log(lower);
      if (upper) {
        password += upperStr.charAt(Math.floor(Math.random() * Math.floor(upperStr.length - 1)));
        i++
      } 
      if ( i <= userLength ) {
        if (lower) {
          password += lowerStr.charAt(Math.floor(Math.random() * Math.floor(lowerStr.length - 1)));
          i++ 
        }
      } else {
        break;
      }

      if ( i <= userLength ) {
        if (numbers) {
          password += numbersStr.charAt(Math.floor(Math.random() * Math.floor(numbersStr.length - 1)));
          i++ 
        }
      } else {
        break;
      }  
      
      if ( i <= userLength ) {
        if (specialChars) {
          password += specialCharsStr.charAt(Math.floor(Math.random() * Math.floor(specialCharsStr.length - 1)));
          i++ 
        }
      } else {
        break;
      } 
      
      if ( i <= userLength ) {
        if (blankSpace) {
          password += ' '
          i++ 
        }
      } else {
        break;
      }       
    }
   
    // add password to textbox/display area
    document.getElementById('passwordArea').value = password;
    console.log('orange');
}

  // click button to copy password
function copyPassword () {
  document.getElementById('passwordArea').select();
  document.execCommand("Copy");
  alert('Password is copied!');
}



///////////////
// all the code i tried below - rip
///////////////


// set custom validity to user number input

// var passwordLength = document.querySelector('input[name="pswdlength"]');
// passwordLength.setCustomValidity('Your password must be between 8 - 128 characters');

// passwordLength.addEventListener('blur', function () {
//   if (this.value.trim() === '' ) {
//     this.setCustomValidity('Your password must be between 8 - 128 characters');
//   }
//   else {
//     this.setCustomValidity('');
//   }
// }, false);

// passwordLength.addEventListener('invalid', function () {
//   if (this.value.trim() !== '') {
//     this.setCustomValidity("your password must be between 8 - 128 characters");
//   }
// }, false);


/////////////////


// intake user selection - create variables
// var upper = document.getElementById('checkUppercase').checked;
// var lower = document.getElementById('checkLowercase').checked;
// var numbers = document.getElementById('checkNumbers').checked;
// var specialChars = document.getElementById('checkSpecial').checked;
// var blankSpace = document.getElementById('checkSpace').checked;

// function createString () {
//   if (upper == true) {
//     console.log( 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') ;
//   } else {
//     console.log('nope');
//     return '' ;
//   }
// }