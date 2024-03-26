const prices = [1800, 2000, 3000, 5000, 500, 8000];

let newPrices = prices.map(Math.sqrt);
console.log(newPrices);

const string = "JavaScript";
const stringArr = string.split(''); 
let asciiArr = stringArr.map(x => x.charCodeAt(0));

console.log(stringArr); 

console.log(asciiArr); 