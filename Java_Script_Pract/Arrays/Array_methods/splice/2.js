let languages = ["JavaScript", "Python", "Java", "Lua"];

let removed = languages.splice(2, 2, "C", "C++");
console.log(removed); 
console.log(languages);
let removed1 = languages.splice(1, 0, "Java", "Lua");
console.log(removed1); 
console.log(languages); 

let removed2 = languages.splice(2, 3);
console.log(removed2); 
console.log(languages); 