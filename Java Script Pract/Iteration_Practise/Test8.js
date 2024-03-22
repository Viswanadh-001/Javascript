function test(a,b,c){
    let greatest;

    if(a>b){
        greatest = a;
    }else{
        greatest = b;
    }
    if(c > greatest){
        greatest = c;
    }

    console.log("Greatest among "+ a +","+ b +"," +c+" is ",greatest);
}
test(10,40,1);

