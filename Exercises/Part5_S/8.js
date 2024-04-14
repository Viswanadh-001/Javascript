let str = "Hello world! How are you?";
let count = 0;

for(let i = 0; i < str.length; i++){
    if(str[i] === " "){
        count++;
    }
}
console.log(count);