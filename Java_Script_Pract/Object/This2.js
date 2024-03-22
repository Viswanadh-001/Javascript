let person = {
    name : 'Sai',
    age : 23,
    greet : function(){
        let surname = 'Kuppachi';
        console.log('The name is '+ this.name+ ' ' + surname)
    }
};
person.greet();