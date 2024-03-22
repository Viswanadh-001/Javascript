let num = 123;
let rev = 0;

while(num > 0){
    let digit = num % 10;
    rev = (rev*10) + digit;
    num = (num - digit) / 10; 
}
console.log("Reversed digit is: "+rev);