const text = "Java is awesome. Java is fun.";

let pattern = "Java";
let new_text = text.replaceAll(pattern, "JavaScript");
console.log(new_text);

pattern = /Java/g;
new_text = text.replaceAll(pattern, "JavaScript");
console.log(new_text);