let count = parseInt(prompt("How many times dp ypu want to print series?"));
let num = 2;

for(let i = 1; i <=count; i++){
    console.log(num);
    num = (num * num) - 1;
}