let numbers = [1,2,3,4,5,6,7,8,9,10];

function checkEven(numbers){
    if(numbers % 2 == 0){
        return true;
     } else{
        return false
     }
}

let evenNum = numbers.filter(checkEven);
console.log(evenNum);