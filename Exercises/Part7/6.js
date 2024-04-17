let Name = prompt("What is your name?");
let birthYear = prompt("What is your birth year?");
let address = prompt("What is your address ?");
let country_Code = prompt("What is your country code?");
let mobile_number = prompt("What is your mobile number?");

let Cyear = new Date().getFullYear();
let age = Cyear - birthYear;

console.log(`My name is ${Name}. I was born in ${birthYear} and my current age is ${age} years. My address is ${address} and my mobile number is ${country_Code}${mobile_number}.`);