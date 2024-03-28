let sentence = "Java is to JavaScript what Car is to Carpet.";

let check = sentence.includes("Java");
console.log(check); 

let check1 = sentence.includes("java");
console.log(check1); 

let check2 = sentence.includes("Java", 20);
console.log(check2); 

let check3 = sentence.includes("whose");
console.log(check3); 

let check4 = sentence.includes("");
console.log(check4); 