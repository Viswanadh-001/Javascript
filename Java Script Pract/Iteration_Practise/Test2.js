function test(n){
    if(n > 0){
        console.log(n + " is a Positive number");
    }else if(n < 0){
        console.log(n + " is a Negaitive number")
    }else{
        console.log(n + " is neither a positive nor a Negative number(it is zero)")
    }
}
test(1);
test(0);
test(-1);