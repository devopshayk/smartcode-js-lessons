# Դաս 10

### Վարժություն 1. `Student` կլասի մեջ գրեք նրա անունը և ազգանունը փոքրատառով: Կազմեք  մեթոդ, որը կվերցնի տողերի առաջին նիշը և կդարձնի այն մեծատառով: Ստեղծեք մեթոդ, որը կցուցադրի աշխատողի աշխատավարձը:
```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName.toLowerCase(); 
    this.lastName = lastName.toLowerCase();   
  }


  capitalizeFirstCharacter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  getFullName() {
    const firstName = this.capitalizeFirstCharacter(this.firstName);
    const lastName = this.capitalizeFirstCharacter(this.lastName);
    return `${firstName} ${lastName}`;
  }
}


const student1 = new Student("hayk", "poghosyan");
const student2 = new Student("gayane", "petrosyan");

console.log(student1.getFullName()); // Output: "John Doe"
console.log(student2.getFullName()); // Output: "Alice Smith"
```

