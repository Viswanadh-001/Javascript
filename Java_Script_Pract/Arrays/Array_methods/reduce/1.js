const message = ["JavaScript ","is ","fun."];

function Jstring(accumulator , currentvalue){
    return accumulator + currentvalue;
}

let joinedString = message.reduce(Jstring);
console.log(joinedString);