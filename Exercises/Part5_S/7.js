let str = "hello world";
let words = str.split(" ");
let a = [];

for(let i = 0; i < words.length; i++){
    let word = words[i];
    let b = word.charAt(0).toUpperCase() + word.slice(1);
    a.push(b);
}

let c = a.join("");

console.log(c);