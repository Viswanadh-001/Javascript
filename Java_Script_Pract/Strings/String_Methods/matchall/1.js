const sentence = "JavaScript1JavaScript2";

const regex = /JavaScript\d/g;

let results = sentence.matchAll(regex);

for (let result of results) {
  console.log(result);
}

