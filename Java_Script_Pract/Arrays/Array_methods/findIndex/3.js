let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function day(Day){
return Day === "Wednesday";
}

let index = days.findIndex(day);
console.log(index)