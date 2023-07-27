# Դաս 11

### Վարժություն 1. Ունենք զանգված, տպել զանգվածոի մեջ կրկնվող թիվը:
```js
function findDuplicates(arr) {
  let duplicates = {};
  let result = [];

  arr.forEach((num) => {
    if (duplicates[num]) {
      duplicates[num]++;
    } else {
      duplicates[num] = 1;
    }
  });

  for (let num in duplicates) {
    if (duplicates[num] > 1) {
      result.push(num);
    }
  }

  return result;
}


let myArray = [1, 2, 3, 4, 4, 5, 6, 6, 6, 7];
let duplicatesArray = findDuplicates(myArray);
console.log(duplicatesArray);
```

<br>

### Վարժություն 2. Տպել թե քանի անգամ են կրկնվում այդ թվերը:
```js
 function findDuplicatesWithCount(arr) {
  let duplicates = {};
  let result = {};

  arr.forEach((num) => {
    if (duplicates[num]) {
      duplicates[num]++;
    } else {
      duplicates[num] = 1;
    }
  });

  for (let num in duplicates) {
    if (duplicates[num] > 1) {
      result[num] = duplicates[num];
    }
  }

  return result;
}


const myArray = [1, 2, 3, 4, 4, 5, 6, 6, 6, 7];
const duplicatesWithCount = findDuplicatesWithCount(myArray);

for (let num in duplicatesWithCount) {
  console.log(`${num} թիվը կրկնվում է ${duplicatesWithCount[num]} անգամ.`)
}
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