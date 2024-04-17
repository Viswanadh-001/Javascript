function maskS(str, num){
    return str.slice(num).padStart(str.length, '*');
}

function maskE(str, num){
    return str.slice(0,-num).padEnd(str.length,'*');
}

let name = prompt("What is your Name?");
let mobnum = prompt("What is your Mobile number?");
let accnum = prompt("What is your Account number?");
let atmnum = prompt("What is your Atm card number?");
let aadharnum = prompt("What is your Aadhar number?");

let maskmobnum = maskE(mobnum,3);
let maskaccnum = maskS(maskE(accnum, 3),5);
let maskatmnum = maskE(atmnum,5);
let maskaadharnum = maskS(maskE(aadharnum, 4),4)

console.log("Name: ",name);
console.log("Mobile Number: ", maskmobnum);
console.log("Account Number: ",maskaccnum);
console.log("Atm Card Number: ",maskatmnum);
console.log("AAdhaar Number: ", maskaadharnum);