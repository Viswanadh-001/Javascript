let str = "HeLlO, wOrLd!";
let con_str = "";

for(let i = 0; i < str.length;i++){
    let char = str[i];

    if(char ==  char.toUpperCase() ){
        con_str += char.toLowerCase();
    } else{
        con_str += char.toUpperCase();
    }
}
console.log(con_str);