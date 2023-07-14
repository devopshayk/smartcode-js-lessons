# Array Methods

## Array.at()

### Օրինակ

```js
let array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// Expected output: "Using an index of 2 the item returned is 8"
```

<br>

## Array.concat()

### Օրինակ

```js
let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
let array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
```

<br>

## Array.entries()

### Օրինակ

```js
let arr = ['a', 'b', 'c'];
let eArr = arr.entries();

console.log(eArr.next().value); // [0, 'a']
console.log(eArr.next().value); // [1, 'b']
console.log(eArr.next().value); // [2, 'c']
```

<br>

## Array.every()

### Օրինակ

```js
let isBelowThreshold = (currentValue) => currentValue < 40;

let array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
```

<br>

## Array.fill()

### Օրինակ

```js
let array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
```

<br>

## Array.filter()

### Օրինակ

```js
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let result = words.filter(word => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

<br>

## Array.find()

### Օրինակ

```js
let array1 = [5, 12, 8, 130, 44];

let found = array1.find(element => element > 10);

console.log(found);
// Expected output: 12
```

<br>

## Array.findIndex()

### Օրինակ

```js
let array1 = [5, 12, 8, 130, 44];

let isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
```

<br>

## Array.findLast()

### Օրինակ

```js
let array1 = [5, 12, 50, 130, 44];

let found = array1.findLast((element) => element > 45);

console.log(found);
// Expected output: 130
```

<br>

## Array.findLastIndex()

### Օրինակ

```js
let array1 = [5, 12, 50, 130, 44];

let isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130
```

<br>

## Array.flat()

### Օրինակ

```js
let arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

let arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]
```

<br>

## Array.flatMap()

### Օրինակ

```js
let arr1 = [1, 2, 1];

let result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]
```

<br>

## Array.forEach()

### Օրինակ

```js
let array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
```

<br>

## Array.from()

### Օրինակ

```js
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]
```

<br>

## Array.includes()

### Օրինակ

```js
let array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true
```

<br>

## Array.indexOf()

### Օրինակ

```js
let beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1
```

<br>

## Array.isArray()

### Օրինակ

```js
console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray('[]'));
// Expected output: false
```

<br>

## Array.join()

### Օրինակ

```js
let elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"
```

<br>

## Array.keys()

### Օրինակ

```js
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2
```

<br>

## Array.map()

### Օրինակ

```js
let array1 = [1, 4, 9, 16];

// Pass a function to map
let map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

<br>

## Array.pop()

### Օրինակ

```js
let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"
```

<br>

## Array.push()

### Օրինակ

```js
let animals = ['pigs', 'goats', 'sheep'];

let count = animals.push('cows');
console.log(count);
// Expected output: 4
```

<br>

## Array.reduce()

### Օրինակ

```js
let array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
let initialValue = 0;
let sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
```