let num = prompt("Enter a number: ");
let numStr = num.toString();
let revstr = "";

for(let i = numStr.length - 1; i >= 0; i--){
    revstr += numStr[i];
}

if(numStr === revstr){
    console.log("Yes, it is a palindrome.");
}else{
    console.log("No, its not a palindrome");
}