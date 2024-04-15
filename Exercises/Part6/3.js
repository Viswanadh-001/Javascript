function fun(number) {
    switch (number) {
        case 100:
            console.log(100);
            break;
        default:
            if (number % 2 === 0) {
                console.log("Even");
            } else if (number % 2 !== 0) {
                console.log("Odd");
            }
    }
    if (number !== 100 && number % 2 === 1){
        console.log(10000);
    }
}

//fun(3); 
fun(4); 
//fun(100); 
fun(101);
