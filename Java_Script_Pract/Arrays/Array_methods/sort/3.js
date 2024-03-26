var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

function len_compare(a, b){
    return a.length - b.length;
}

names.sort(len_compare);

console.log(names);