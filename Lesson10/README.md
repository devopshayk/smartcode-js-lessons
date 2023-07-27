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

console.log(student1.getFullName()); 
console.log(student2.getFullName()); 
```

<br>

### Վարժություն 2. Ստեղծեք Ուսանող (`Student`) <b>class,</b> որը ժառանգելու է `User` <b>class</b>-ից: Այս դասը պետք է ունենա հետևյալ հատկությունները՝ `անուն` (անուն, ժառանգած Օգտատերից), `ազգանուն` (ազգանուն, ժառանգած Օգտատերից), `տարի` (բուհ ընդունվելու տարի): Կլասը պետք է ունենա `getFullName()` մեթոդ (ժառանգված է User-ից), որը կարող է օգտագործվել աշակերտի անունն ու ազգանունը միաժամանակ ցուցադրելու համար։ Կլասը պետք է ունենա նաև `getCourse()` մեթոդ, որը կցուցադրի ուսանողի ընթացիկ դասընթացը (1-ից մինչև 5): Դասընթացը հաշվարկվում է հետևյալ կերպ՝ ընթացիկ տարվանից պետք է հանել բուհ ընդունվելու տարին։ Ձեռք բերեք ընթացիկ տարին ինքներդ:

```js
class User {
  constructor(name, lastName, year, lesson, date) {
    this.name = name;
    this.lastName = lastName;
    this.year = year;
    this.lesson = lesson;
    this.date = date;
  }
  
  getFullName() {
    let name = this.name;
    let lastName = this.lastName;
    return `${name} ${lastName}`;
  }
  
  getCours() {
    let date = this.date;
    let year = this.year;
    return date - year;
  }
}

class Student extends User {
  constructor(name, lastName, year, lesson, date) {
    super(name, lastName, year, lesson, date);
  }
}

let Hayk = new User('Hayk', 'Poghosyan', 2012, '', 2023);
let myStudent = new Student('Robert', 'Chalyan', 2019, '', 2023);
console.log(myStudent.getCours()); 
console.log(myStudent.getFullName()); 
```

<br>

### Վարժություն 3. Ինքնուրույն ստեղծել մի կլաս,իր ժառանգվող կլասներով, օգտագործել `Prototypical Inheritanse`, `Polymorphism`, `Encapsulation`.
```js
function Animal(name, sound) {
  this._name = name;
  this._sound = sound;
}

Animal.prototype.makeSound = function() {
  return this._name + " makes a " + this._sound + " sound.";
};


function Dog(name) {
  Animal.call(this, name, "bark");
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.makeSound = function() {
  return this._name + " says " + this._sound + ".";
};

function Cat(name) {
  Animal.call(this, name, "meow");
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.makeSound = function() {
  return this._name + " says " + this._sound + ".";
};

let dog = new Dog("Buddy");
let cat = new Cat("Whiskers");

console.log(dog.makeSound()); 
console.log(cat.makeSound()); 
```