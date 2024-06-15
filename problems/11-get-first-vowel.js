/*
Define a function getFirstVowel that takes in a string parameter and returns the
first vowel that appears sequentially in the string. If the string does not
contain a vowel, return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function getFirstVowel(str){
    for(let i = 0; i <= str.length - 1; i++){
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
console.log(getFirstVowel('battery'));      // 'a'
// console.log(getFirstVowel('tunnel'));       // 'u'
// console.log(getFirstVowel('dog'));          // 'o'
// console.log(getFirstVowel('conventional')); // 'o'
// console.log(getFirstVowel('rhythm'));       // null
// console.log(getFirstVowel('try'));          // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = getFirstVowel;
