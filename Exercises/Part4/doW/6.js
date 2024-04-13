let i = 1;
let sum = 0;

do{
    if(i % 2 !== 0){
        sum += i;
    }
    i++;
}while (i <= 100);
console.log(sum); 
