function filterStringsContainingA(arr) {
    return arr.filter((str) => str.includes("a"));
  }

  let str = ["bat","note","cat","pen"];
  console.log(filterStringsContainingA(str));