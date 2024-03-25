//fill method with invalid indexes

var rank = [8,9,3,7];

rank.fill(15,-2);
console.log(rank);

rank.fill(15,7,8);//invalid
console.log(rank);

rank.fill(15,NaN,NaN);//invalid
console.log(rank);