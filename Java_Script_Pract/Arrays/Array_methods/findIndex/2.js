function isEven(element) {
    return element % 2 == 0;
  }
  
  let numbers = [1, 45, 8, 98, 7];
  
  let firstEven = numbers.findIndex(isEven);
  
  console.log(firstEven); 