let num = [1,33,659,2,99];

function eve(elements){
    return elements % 2 == 0;
}

let evenum = num.find(eve);
console.log(evenum);

function odd(elements){
    return elements % 2 !== 0 ;
}

let oddnum = num.find(odd);
console.log(oddnum);