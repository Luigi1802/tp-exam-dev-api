const isOdd = require('is-odd');

const number1 = 18;
const number2 = 5;

console.log(isOdd(number1) ? `Le nombre ${number1} est impair` : `Le nombre ${number1} est pair`);
console.log(isOdd(number2) ? `Le nombre ${number2} est impair` : `Le nombre ${number2} est pair`);