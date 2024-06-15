/*
Define a function called `secondHalf` that takes in a string
parameter. The function should return a new string containing only the second
half of characters in the string parameter.
*/
// math.floor =====> rounds down 
function secondHalf(str) {
  let newStr = '';
  let revStr = '';
  for(let i = str.length - 1; i >= Math.ceil(str.length / 2); i--){
    newStr += str[i];
  } revStr = newStr.split('').reverse().join('');
  console.log(revStr);
  return revStr;
}

// console.log(secondHalf('academy')); // 'emy'
// console.log(secondHalf('planet'));  // 'net'
// console.log(secondHalf('sport'));   // 'rt'
// console.log(secondHalf('Buttfarts'));

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = secondHalf;
