function InsertStr(Ostr, strtI, Index){
    return Ostr.slice(0,Index) + strtI + Ostr.slice(Index);
}
Ostr = "We are learning exercises."
strtI = "Javascript ";
Index = 16;

console.log(InsertStr(Ostr, strtI, Index));