let numbers = [1, 2, 3, 4];

function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

let sum = numbers.reduceRight(sum_reducer);

console.log(sum);

