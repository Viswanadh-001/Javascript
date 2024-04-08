let age = Number(prompt("Enter your age"));

if(age >=18 ){
    let choice = confirm("Do you want to open an account?");
    if(choice){
        let name = prompt("What is your name ?");
        let aadhar_num = prompt("What is your aaadhar number ?");
        let address = prompt("What is your address?");
        let mobile_num = prompt("What is your mobile number?");
        console.log(name,aadhar_num,address,mobile_num);
    }
}else{
    console.log("Your not Eligible");

}