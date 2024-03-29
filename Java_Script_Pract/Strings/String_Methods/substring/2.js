let string = "Hello Good Morning!";

substr1 = string.substring(0, 1);
console.log(substr1); 

substr2 = string.substring(1, 0);
console.log(substr2); 

substr3 = string.substring(11);
console.log(substr3); 

substr4 = string.substring(-44, 90);
console.log(substr4); 

substr5 = string.substring(0, string.length - 1);
console.log(substr5); 