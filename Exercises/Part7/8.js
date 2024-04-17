let word = "Ajith Kumar";
let guess = prompt("What is the character you are guessing?");
let index = prompt("What is the index?");

if(word.charAt(index) === guess){
    console.log("Congratulations!");
}else{
    console.log("Sorry");
}