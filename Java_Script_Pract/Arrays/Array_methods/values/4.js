let fruits = ["Apple", "Banana", "Grapes"];

let iteratorObject = fruits.values();

console.log(iteratorObject.next().value); 

fruits[1] = "Cherry";

console.log(iteratorObject.next().value); 