let arr = [1,4,7,8,10];
let ans = arr.filter(test);

function test(num){
    return num % 2 === 0;
}

console.log(ans);