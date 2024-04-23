function sortStringsByLength(strings) {
    strings.sort((a, b) => a.length - b.length);
    return strings;
  }
  
  let strings = ["apple", "banana", "cherry", "date"];
  console.log(sortStringsByLength(strings)); 