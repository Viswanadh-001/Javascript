const employee = new Object({//Creating instance of object directly.
    name : 'Viswanadh',
    salary : 45000,
    locations : ['Bengaluru','Nellore','Chennai'],
    greet : function(){
        console.log("Hello! Good Morning");
    }
});
console.log(typeof employee);
console.log(employee.name);
console.log(employee.locations[0]);
employee.greet();
