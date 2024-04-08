let Name = "ChAran";

const vowel = () => {
    let count = 0;
    for(let i = 0 ;i < Name.length; i++){
        let vow = Name[i].toLowerCase();
        if(vow === 'a' || vow === 'e' || vow === 'i' || vow === 'o' || vow === 'u'){
            count++;
        }
    }return count;
}
console.log("Number of vowels :" + vowel() );