let str = prompt("Enter a string:");
let newStr = "";

for (let i = 0; i < str.length; i++) {
  let char = str.charAt(i);
  if ((char >= 'a' && char <= 'z') ||
      (char >= 'A' && char <= 'Z') ||
      (char >= '0' && char <= '9') ||
      char === '$' || char === '_' ) {
    newStr += char;
  }
}

console.log(newStr);