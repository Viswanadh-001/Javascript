let str = "Rajnikanth,";
let parts = str.split(" ");
let leftPart = "World " + parts[0];
let rightPart = parts.slice(1).join(" ") + "Hello";
let result = leftPart + " " + rightPart;

console.log(result);
