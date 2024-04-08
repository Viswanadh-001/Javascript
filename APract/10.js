let companies = ["Blomberg","Microsoft","Uber","Google","IBM","Netflix"]
console.log("Before :");
console.log(companies);
console.log("------------------------------------------------------------------------------------");

console.log("After removing first element of Array:");
console.log(companies.shift());
console.log(companies);
console.log("------------------------------------------------------------------------------------");

console.log("After Repalcing Uber with ola: ");
console.log(companies.splice(1,1,"Ola"));
console.log(companies);
console.log("------------------------------------------------------------------------------------");

console.log("After Adding Amazon at the end: ");
console.log(companies.push("Amazon"));
console.log(companies);
