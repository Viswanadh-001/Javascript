function largestnum(num){
    let largest = num[0];

    for(let i = 0; i < num.length; i++){
        if(num[i] > largest){
            largest = num[i];
        }
    }
    return largest;
}

let arr = [11,32,22,31,3];
console.log(largestnum(arr));