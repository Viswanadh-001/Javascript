const num = 70;

console.log("Numbers by which 70 is divisible:");

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        console.log(i);
    }
}
