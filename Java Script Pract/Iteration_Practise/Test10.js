function test(a,b,c){
    if(a>b){
       let temp = a;
        a = b;
        b = temp;
    }if(b>c){
       let temp = b;
        b = c;
        c = temp;
    }
    console.log("Numbers in Ascending order: "+ a +","+ b + "," + c);
}

test(20,5,10);