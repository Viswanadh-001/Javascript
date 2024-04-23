function flattenStrings(strings) {
    return strings
      .map(str => str.split('')) 
      .reduce((acc, arr) => acc.concat(arr), []);
  }
  
  let strings = ['hello', 'world', 'how', 'are', 'you'];
  let flattened = flattenStrings(strings);
  console.log(flattened); 