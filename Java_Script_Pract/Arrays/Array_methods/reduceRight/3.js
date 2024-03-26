let expense = [50, 300, 20, 100, 1800];

function add(accumulator, currentValue) {
  return accumulator + currentValue;
}

let result = expense.reduceRight(add, 0);

console.log(result);