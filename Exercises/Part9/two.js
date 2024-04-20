function sEve(num){
    let sum = 0;

    for(let i = 0; i < num.length;i++){
        if(num[i] % 2 === 0){
            sum += num[i];
        }
    }
    return sum;
}
let numbers = [5,10,15,20,25,30];
console.log(sEve(numbers));