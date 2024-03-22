function test(a,b,c){
    let least;

    if(a<b){
        least = a;
    }else{
        least = b;
    }
    if(c < least){
        least = c;
    }
    console.log("Least among "+ a +","+ b +"," +c+" is ",least);
}
test(10,40,1)