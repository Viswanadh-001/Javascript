//To access Elements

// "Selecting with id" : document.getElementById("id name")
let heading = document.getElementById("heading");
console.dir(heading);

//"Selecting with class" : document.getElementsByClassName("class name")
let headings = document.getElementsByClassName("my Class");
console.dir(headings);
console.log(headings);

let button = document.getElementById("my id");
console.dir(button);
console.log(button);

//"Selecting with tag" : document.getElementsByTagName("tag name")
let paras = document.getElementsByTagName("p");
console.dir(paras);
console.log(paras);

//
let elements = document.querySelector("p");
console.dir(elements);

let elements1 = document.querySelectorAll("p");
console.dir(elements1)


