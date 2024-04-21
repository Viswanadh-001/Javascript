function Evenum(num){
    return num.filter(num => num % 2 === 0);
}

const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(Evenum(arr));