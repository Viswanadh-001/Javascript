console.log("ABCDEF".split("")); 
const text = "Java is awesome. Java is fun.";

let pattern = ".";
let newText = text.split(pattern);
console.log(newText); 
let pattern1 = ".";
let newText1 = text.split(pattern1, 2);
console.log(newText1); 
const text2 = "JavaScript ;  Python ;C;C++";
let pattern2 = ";";
let newText2 = text2.split(pattern2);
console.log(newText2);
let pattern3 = /\s*(?:;|$)\s*/;
let newText3 = text2.split(pattern3);
console.log(newText3); 