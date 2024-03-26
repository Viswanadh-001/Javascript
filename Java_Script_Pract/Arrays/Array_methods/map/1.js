let numbers = [2, 4, 6, 8, 10];

function square(number) {
  return number * number;
}

let square_numbers = numbers.map(square);
console.log(square_numbers);