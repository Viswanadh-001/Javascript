function rev(a){
    if(a === 0){
        return [];
    }

    let rev = [];
    for (let i = a.length-1; i >= 0; i--){
        rev.push(a[i]);
    }
    return rev;
}
let arr = [1,2,3,4,5];
let reversed = rev(arr);
console.log(reversed);