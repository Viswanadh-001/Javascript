function test(a, b, c) {
    let largest;

    if (a > b) {
        largest = a;
    } else {
        largest = b;
    }

    if (c > largest) {
        largest = c;
    }

    console.log("The largest number among " + a + ", " + b + ", and " + c + " is: " + largest);
}
test(10, 20, 30); 
