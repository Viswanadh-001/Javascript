let game_num = 20;
let x = prompt("Guess the game number: ");

while(x != game_num){
    x = prompt("You entered wrong number,guess again : ");
}

console.log("Congratulations you entered right number");