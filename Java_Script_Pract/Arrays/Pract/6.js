function dupli(a){
    let uniqueArray = [];
    let encountered = {};

    for(let i = 0; i < a.length; i++){
        if(!encountered[a[i]]){
            uniqueArray.push(a[i]);
            encountered[a[i]] = true;
        }
    }
    return uniqueArray;
}

let arr = [1,2,2,3,4,4,5];
console.log(dupli(arr));