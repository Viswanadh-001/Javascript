function isEven(Element){
    return Element % 2 == 0;
}
let num = [1,3,2,5,4];
console.log(num.some(isEven));