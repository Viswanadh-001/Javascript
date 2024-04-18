let arr = [90, 60, 120, 1, 160, 30];

let sortfn = (num1, num2) => {
    return num1 - num2;
};

arr.sort(sortfn);

console.log(arr);
