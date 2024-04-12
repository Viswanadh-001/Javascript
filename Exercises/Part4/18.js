const number = 70;

console.log("Numbers by which 70 is divisible:");

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}
