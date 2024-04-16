function CO(mainStr, subStr){
    var count = 0;

    for(let i = 0; i < mainStr.length; i++){
        if(mainStr.substring(i, i + subStr.length) === subStr){
            count++;
        }
}  
return count;  
}
let mainString = "My name is Rajinikanth and my friend name is Ajith Kumar.";
let subString = "is";
let occurrences = CO(mainString,subString);
console.log("Count of '" + subString + "' in the string is: " + occurrences);