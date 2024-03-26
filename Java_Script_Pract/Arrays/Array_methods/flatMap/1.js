let num = [1,2,3,4,5];

function square (x){
    return [x ** 2];
}

let flatmap = num.flatMap(square);
console.log(flatmap);