const num = "8441816760";

const result1 = num.slice(0, 5).padEnd(10, "*");
const result2 = num.slice(5).padStart(10,"*");
const result3 = num.slice(0,3) + "**" + num.slice(7,10) + "**";

console.log(result1);
console.log(result2);
console.log(result3);