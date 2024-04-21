function unqele(arr1,arr2){
    const set = new Set([...arr1,...arr2]);
    return [...set];
}

const arr1 = [1,2,3,4];
const arr2 = [3,4,5,6];

console.log(unqele(arr1, arr2));