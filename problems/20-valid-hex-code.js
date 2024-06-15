/*
Define a function called `validHexCode` that returns `true` if its string
parameter is a valid hex code.

A valid hex code must begin with a pound key `#` followed by 6 characters.
Each character must be a digit from 0-9 or an alphabetic character from A-F.
All alphabetic characters may be uppercase or lowercase.
*/

function validHexCode(str){
  if(str[0] === '#'){
    str = str.slice(1);
    if(str.length === 6){
      let hexChar = '0123456789abcdef'
      for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase()
        if(!hexChar.includes(char)){
          return false;
        }
      } return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// console.log(validHexCode("#123456"));  // true
// console.log(validHexCode("!123456"));  // false
// console.log(validHexCode("#123"));     // false
// console.log(validHexCode("#1234567")); // false
// console.log(validHexCode("1234567"));  // false
// console.log(validHexCode("123456"));   // false
// console.log(validHexCode("#ABCDEF"));  // true
// console.log(validHexCode("#abcDEF"));  // true
// console.log(validHexCode("#88ef29"));  // true
// console.log(validHexCode("#222!E4"));  // false


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
try {
  module.exports = validHexCode;
} catch {}
