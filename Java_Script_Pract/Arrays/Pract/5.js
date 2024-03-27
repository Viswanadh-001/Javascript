function index(a){
    let indices = [];
    for(let i = 0; i < a.length; i++){
        let indexed = a.indexOf(a[i]);
        indices.push(indexed);
    }
    return indices;
}

let num = [1,2,3,4,5];
console.log(index(num));