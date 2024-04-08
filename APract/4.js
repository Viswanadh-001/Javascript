let score = prompt("Enter Student score: ");
let grade;

if(score > 100){
    console.log("Error Bro!, enter Lessthan or equal to 100.")
}else if(score >= 90 && score <= 100){
    grade ="A";
}else if (score >= 80 && score <= 89){
    grade ="B";
}else if(score >= 70 && score <=79){
    grade ="C";
}else if(score >= 60 && score <=69){
    grade ="D";
}else if(score >= 50 && score <= 59){
    grade ="E";
}else {
    grade ="F";
}
console.log("According to your marks, your garde is: "+ grade)