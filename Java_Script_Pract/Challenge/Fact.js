function fact(n){
    let result = 1;
    for(var i = 2;i <= n; i++){
        result *= i; 
    }
    return result;
}
console.log(fact(5));