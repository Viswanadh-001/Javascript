let num = [1,3,4,9,8];

function isEven(element){
    return element % 2 == 0;
}

let eveNum = num.find(isEven);
console.log(eveNum);