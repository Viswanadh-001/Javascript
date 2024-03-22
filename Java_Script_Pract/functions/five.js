function add(a,b){
    return a; // Execute and the execution stops after returning  the value of a 

    var c = a+b;//this doesnt execute.
    return c;
}
console.log(add(5,10));//5