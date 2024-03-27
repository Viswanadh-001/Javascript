function inter(a,b){
    let x = [];
    for(let i = 0; i < a.length; i++){
    if(b.includes(a[i])){
        x.push(a[i]);
    }
    }
    return x;
}

let a1 = [1,2,3,4,5];
let b1 = [2,8,3,6,1];
console.log(inter(a1,b1));