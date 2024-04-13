let str = "aabaa";
let str2 = "";

for(let i = str.length-1; i >= 0; i--){
    str2 += str[i];
}
if(str == str2){
    console.log(str + " is a palindrome");
}else{
    console.log(str + " is not a palindrome");
}