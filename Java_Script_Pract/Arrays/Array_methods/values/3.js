let arrayWithHole = ["A", "B", , "C"];

let iteratorObject = arrayWithHole.values();

for (let value of iteratorObject) {
  console.log(value);
}