function avg(a){
    if(a.length === 0){
        return 0;
    }

    let sum = 0 ;
    for(let i = 0; i < a.length; i++){
        sum += a[i];
    }

    return sum/a.length;
}

let num = [1,2,3,4,5];
console.log(avg(num));