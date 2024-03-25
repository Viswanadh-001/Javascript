function Checkeven(num){
    return num%2 === 0;
}
//const numbers = [2,4,6,7,8];
const numbers = [2,4,6,8,10];

let check = numbers.every(Checkeven);
console.log(check);