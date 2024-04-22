function sqrA(arr){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i] ** 2);
    }
    return result;
}

let arr = [2,4,6,8,10];
console.log(sqrA(arr));