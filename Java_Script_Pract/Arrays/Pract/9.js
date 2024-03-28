function rotateArrayRight(arr, k) {
    if (arr.length === 0 || k === 0) {
        return arr;
    }
    
    k = k % arr.length;
    
    let rotatedPart = arr.slice(-k);
    let remainingPart = arr.slice(0, arr.length - k);
    
    return rotatedPart.concat(remainingPart);
}

let array = [1, 2, 3, 4, 5];
let k = 2;
console.log(rotateArrayRight(array, k)); 