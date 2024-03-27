function maxi(x){          // with using function
    let max = x[0];

    for(let i = 1; i < x.length; i++){
        if(max < x[i]){
            max = x[i];
        }
    }
    return max;
}
let num = [1,4,3,6,10,2];
console.log(maxi(num));


let max = 0;               // without using function

for(let i = 0; i < num.length; i++){
    if(max < num[i]){
        max = num[i];
    }
}
console.log(max);