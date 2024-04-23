function getSecondHighestNumber(numbers) {
    const sortedArray = numbers.sort((a, b) => b - a);
    return sortedArray[1];
  }
  
  const numbers = [10, 5, 20, 15];
  console.log(getSecondHighestNumber(numbers)); 