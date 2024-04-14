let input = prompt("Enter a sentence:");
let word = prompt("Enter a word to search for:");

let output = "";
let index = -1;

while ((index = input.indexOf(word, index + 1)) !== -1) {
    output += input.substring(index + word.length);
}

console.log(output);
