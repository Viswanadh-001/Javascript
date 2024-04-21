function longestString(ar){
    let longest = "";

    for(let i = 0; i < ar.length; i++){
        if(ar[i].length > longest.length){
            longest = ar[i];
        }
    }
    return longest; 
}

const arr = ["Ajith","Rajnikanth","Pawan Kalyan"];
console.log(longestString(arr));