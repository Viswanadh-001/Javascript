let a = [2,4,6,1,4,3];

let max = 0;

for(var i=0;i<a.length;i++){
    if(max < a[i]){
        max = a[i];
    }
}

console.log(max);