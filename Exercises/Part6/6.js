//Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

//If yes then print sum of both the numbers Else print multiplication of both numbers

let num = Number(prompt("Enter a number: "));
let num2 = Number(prompt("Enter another number: "));

if(num < 0 && num2 < 0 || num > 0 && num2 > 0){
    console.log("sum of both the numbers: ",num + num2 );
}else{
    console.log("multiplication of both numbers: ",num * num2);
}