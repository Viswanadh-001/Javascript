function intersec(arr1, arr2){
    let intersection = [];

    for(let i = 0; i < arr1.length; i++){
        if(arr2.includes(arr1[i])){
            intersection.push(arr1[i])
        }
    }
    return intersection;
}

let arr1 = [1,2,3,4,5];
let arr2 = [3,4,5,6,7];
console.log(intersec(arr1,arr2));