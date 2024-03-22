function test(n){
    if(n >= 100 && n<=999){
        console.log(n +" is a 3 digit number");
    }else{
        console.log(n + " is not a 3 digit number ");
    }
}
test(100);
test(999);
test(46);
test(1000);