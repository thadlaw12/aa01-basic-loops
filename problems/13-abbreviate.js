/*
Write a function abbreviate(word) that takes in a string arg. The function
should return a new string where all of its vowels are removed.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function abbreviate(str){
    let abbRev ='';
    for(let i = 0; i <= str.length - 1; i++){
        if(!'aeiouAEIOU'.includes(str[i])){
            abbRev += str[i]
        }
    } return abbRev;   
}
    
/*
       if (str[i] !== 'a'){
            abbRev += str[i]
        } else if (str[i] !== 'e'){
            abbRev += str[i]
        } else if (str[i] !== 'i'){
            abbRev += str[i]
        } else if (str[i] !== 'o'){
            abbRev += str[i]
        } else if (str[i] !== 'u'){
            abbRev += str[i]
        }
*/
// console.log(abbreviate('wonderful')); // 'wndrfl'
// console.log(abbreviate('mystery')); // 'mystry'
// console.log(abbreviate('Accordian')); // 'ccrdn'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = abbreviate;
