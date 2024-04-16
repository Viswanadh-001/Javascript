let num1 = Number(prompt("Enter a number: "));
let num2 = Number(prompt("Enter a number: "));
let num3 = Number(prompt("Enter a number: "));
let num4 = Number(prompt("Enter a number: "));

if(num1 === num2 || num1 === num3 || num1 === num4 || num2 === num3 || num2 === num4 || num3 === num4){
    console.log("Yes, there are two numbers that are the same.");
}else{
    console.log("No, there are no two numbers that are the same.");
}