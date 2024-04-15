let birthyear = prompt("What is your birth year ?");
let currentyear = new Date().getFullYear();
let age = currentyear - birthyear;

if(age > 18){
    let haslicense = confirm("Do you have license number?");
    if(haslicense){
        let license_num = prompt("Enter your license number");
        alert(`User with license number ${license_num} is ready to drive.`);
    } 
}else if(age < 18){
    let hasGaurdian = confirm("Do you have gaurdians?");
    if(hasGaurdian){
        let gaurdianName = prompt("Enter your gaurdian name:")
        alert(`you are ready to drive with your ${gaurdianName}.`);
    }else{
        alert("Sorry, visit again please.");
    }
}