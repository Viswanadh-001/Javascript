let person = {
    Name : "Rajni",
    Age : 68,
    Gender : "Male"
};

for(let prop in person){
    console.log(prop +":"+person[prop]);
}