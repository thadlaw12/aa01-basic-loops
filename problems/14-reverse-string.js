/*
Write a function reverseString(str) that takes in a string. The function should
return a new string where the order of the characters is reversed.
*/

function reverseString(str){
    let revStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        revStr += str[i]
    } return revStr;
}

// console.log(reverseString('fish')); // 'hsif'
// console.log(reverseString('marathon')); // 'nohtaram'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverseString;
