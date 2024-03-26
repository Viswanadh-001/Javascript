function isOdd(element){
    return element % 2 !== 0;
}

let number = [2,8,1,3,4];

let firstOdd = number.findIndex(isOdd);
console.log(firstOdd);