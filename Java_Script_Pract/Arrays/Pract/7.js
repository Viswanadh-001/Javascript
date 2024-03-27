function isSorted(a){
    for(let i = 0; i< a.length - 1; i++){
        if(a[i] > a[i + 1]){
            return false;
        }
    }
    return true;
}

let sortedA = [1,2,3,4,5];
let unsortedA = [1,3,2,5,4];

console.log(isSorted(sortedA));
console.log(isSorted(unsortedA));