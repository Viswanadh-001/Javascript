let randomList = [1,2,3];
let rNestedList = [[4,5],[6,7]];

let combined = randomList.concat(rNestedList);
console.log(combined);

randomList[0] = 0;
console.log(randomList);

console.log(combined);

rNestedList[0].push(6);
console.log(rNestedList);

console.log(combined);
