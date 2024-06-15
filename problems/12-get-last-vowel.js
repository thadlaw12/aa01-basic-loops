/*
Define a function getLastVowel that takes in a string parameter and returns the
last vowel that appears sequentially in the string. If the string does not
contain a vowel, return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function getLastVowel(str){
    for(let i = str.length - 1; i >= 0; i--){
        if (str[i] === 'a'){
            return 'a';
        } else if (str[i] === 'e'){
            return 'e';
        } else if (str[i] === 'i'){
            return 'i';
        } else if (str[i] === 'o'){
            return 'o';
        } else if (str[i] === 'u'){
            return 'u';
        }
    } return null;
}


// console.log(getLastVowel('battery'));      // 'e'
// console.log(getLastVowel('tunnel'));       // 'e'
// console.log(getLastVowel('dog'));          // 'o'
// console.log(getLastVowel('conventional')); // 'a'
// console.log(getLastVowel('rhythm'));       // null
// console.log(getLastVowel('try'));          // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = getLastVowel;
