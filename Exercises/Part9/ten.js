function avrg(num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }
    return sum / num.length;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(avrg(arr));