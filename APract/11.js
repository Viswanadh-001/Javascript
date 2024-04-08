function sqr(arr) {
    arr.forEach(function(num){
        let square = num * num;
        console.log(square);
    })
}

let num = [2,3,5,7,8]
sqr(num);