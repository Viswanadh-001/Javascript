class Account{
    min_balance=500
    open_account(){
        console.log("Account Opened Successfully")
    }
    deposite_amount(){
        console.log("1 CR-Deposited Successfully");
    }
    withdrawal(){
        console.log("Insuficient Balance");
    }
    get_balance(){
        console.log("Server busy");
    }
    get_statement(){
        console.log('Chargeble bro');
    }
    close_account(){
        console.log('Account Closed Successfully');
    }
}

let a1=new Account()

console.log(a1.min_balance);
a1.open_account()
a1.deposite_amount()
a1.withdrawal()
a1.get_balance()
a1.get_statement()
a1.close_account()