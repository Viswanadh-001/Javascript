function cChar(arr){
    return arr.reduce((total, str) => total + str.length, 0);
}

const arr = ['Hello', 'World', 'how','are','you'];
console.log(cChar(arr));