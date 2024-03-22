let Eveodd = (n, isEve) =>{
    let sum  = 0;
    for(var i = 1; i <= n; i++){
        if((isEve && i % 2 === 0) || (!isEve && i % 2 !== 0)){
            sum += i ;
        }
    }
    return sum;
}
console.log("Even Sum " + Eveodd(20, true));
console.log("Odd Sum " + Eveodd(20, false))