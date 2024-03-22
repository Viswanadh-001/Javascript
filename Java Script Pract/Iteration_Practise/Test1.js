function Test(n){
    return n % 3 === 0;
}

const num = 15;
if(Test(num)){
    console.log(num + " is a multiple of 3")
}else{
    console.log(num +" is not a multiple of 3")
}