function test(n) {
    let factorial = 1; 

    for (let i = 1; i <= n; i++) {
        factorial *= i; 
    }

    console.log("Factorial of " + n + " is: " + factorial); 
}

test(5);
