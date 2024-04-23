function getUniqueNumbers(arr) {
    return arr.reduce(function(result, current) {
      if (result.indexOf(current) === -1) {
        result.push(current);
      }
      return result;
    }, []);
  }

  let num = [1,1,3,5,6,6,7,8,8];
  console.log(getUniqueNumbers(num));