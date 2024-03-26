let human = {
    name: "Sai",
    age: 23,
  };
  
  let arr = [human, "Nellore", "Manager"];
  let new_arr = arr.slice();
  
  console.log(arr[0]); 
  
  new_arr[0].name = "Viswanadh";
  
  console.log(arr[0]); 