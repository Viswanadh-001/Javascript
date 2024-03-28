sentence = "Java is to JavaScript what Car is to Carpet.";

let check = sentence.startsWith("Java");
console.log(check); 

let check1 = sentence.startsWith("Java is");
console.log(check1); 

let check2 = sentence.startsWith("JavaScript");//case sensitive
console.log(check2); 

let check3 = sentence.startsWith("JavaScript", 11);
console.log(check3); 