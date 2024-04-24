function getFullName(person) {
    return person.firstName + " " + person.lastName;
  }
  
  let person = { firstName: "Super Star", lastName: "Rajnikanth" };
  console.log(getFullName(person));