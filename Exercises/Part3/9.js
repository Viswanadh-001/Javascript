let ans = prompt ("What do you want to perform? (+, -, /, *)");
let n1 = Number(prompt("Enter number 1 "));
let n2 = Number(prompt("Enter number 2 "));

if(ans === "+"){
    console.log(n1 + n2);
}else if(ans === "-"){
    console.log(n1 - n2);
}else if(ans === "*"){
    console.log(n1 * n2);
}else if(ans  === "/"){
    console.log(n1 / n2);
}else {
    console.log(" Can't Perform Wrong Choice");
}