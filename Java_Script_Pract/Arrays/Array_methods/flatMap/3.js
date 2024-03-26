let num = [1,2,3,4,5];

function add(x){
    return [x+2];
}

let result = num.flatMap(add);
console.log(result);