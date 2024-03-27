function add(a){
    let sum = a[0];

    for(let i = 1; i < a.length; i++){
        sum += a[i];
    }
    return sum;
}
let a = [1,2,3,4,5];

console.log(add(a));