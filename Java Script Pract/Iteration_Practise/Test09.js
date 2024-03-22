let number = 24;
let i = 1;

console.log("Factors of " + number + ":");

while (i <= number) {
    if (number % i == 0) {
        console.log(i);
    }
    i++;
}
