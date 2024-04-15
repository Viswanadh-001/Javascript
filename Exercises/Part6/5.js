let num = parseInt(prompt("Enter a number: "));
let num2 = 19;

let diff = Math.abs(num - num2);

if(diff > 19){
    console.log(diff * 3);
}else{
    console.log(diff * 2);
}