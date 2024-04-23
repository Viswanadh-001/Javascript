//Write a function that takes an array of strings and returns the total number of characters in all the strings using reduce.

function cChar(arr){
    return arr.reduce((total, str) => total + str.length, 0);
}

const arr = ['Hello', 'World', 'how','are','you'];
console.log(cChar(arr));