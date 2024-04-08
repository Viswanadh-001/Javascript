let English = Number(prompt("What is your English marks in 10th?"));
let Science = Number(prompt("What is your Science marks in 10th?"));
let Maths = Number(prompt("What is your Math marks in 10th?"));
let Hindi = Number(prompt("What is your Hindi marks in 10th?"));
let sst = Number(prompt("What is your SST marks in 10th?"));

let total = English + Science + Maths + Hindi + sst;
let percentage = (total/500) * 100;
console.log(percentage);