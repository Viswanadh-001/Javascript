let text = 'Java is awesome. Java is fun';
console.log(text);

let pattern = 'Java';
let new_Text = text.replace(pattern,"JavaScript");

console.log(new_Text);

pattern = /Java/;
new_Text = text.replace(pattern,"JavaScript");
console.log(new_Text);