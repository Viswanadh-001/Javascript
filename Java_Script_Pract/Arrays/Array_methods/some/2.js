function checkMinor(age) {
    return age < 18;
  }
  
  const ageArray = [34, 23, 20, 26, 12];
  
  let check = ageArray.some(checkMinor);
  
  console.log(check);