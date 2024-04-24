let obj = {
    name: "Rajni",
    age: 30,
    address: "123 Main St",
    city: "Anytown"
  };
  
  let values = Object.values(obj);
  
  values.sort(function(a, b) {
    return b - a;
  });
  
  console.log(values);