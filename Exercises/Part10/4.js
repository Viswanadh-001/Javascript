let personalDetails = {
    firstName: "Ajith",
    lastName: "Kumar",
    age: 30,
    city: "New York",
    occupation: "Web Developer"
  };
  
  let keys = Object.keys(personalDetails).sort();
  
  for(let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
  }