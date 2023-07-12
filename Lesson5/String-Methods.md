# String Methods 

## String.length()

### Օրինակ

```js
let name = 'Հայկ';

console.log(name  + ' բառը մեջ կա ' + name.length + ' սիմվոլ');
```

<br>

## String.concat()

### Օրինակ

```js
const str1 = 'Hayk';
const str2 = 'Poghosyan';

console.log(str1.concat(' ', str2));
console.log(str2.concat(' ', str1));
```

<br>

## String.endsWith()

### Օրինակ

```js
let str = 'My name is Hayk';

console.log(str.endsWith('Hayk'));  // true
console.log(str.endsWith('name')); // false
```

<br>

## String.includes()

### Օրինակ

```js
let str = 'My name is Hayk.';

console.log(str.includes('My'));   // true
console.log(str.includes('Hayk')); // true
console.log(str.includes('is' 2)); // true

```

<br>

## String.indexOf()

### Օրինակ

```js
let x = 'Синий кит'.indexOf('кит');   
let y = 'Синий кит'.indexOf('Голубой');

console.log(x);
console.log(y);
```

<br>

## String.lastIndexOf()

### Օրինակ

```js
let x = 'канал'.lastIndexOf('а');     // return 3
let y = 'канал'.lastIndexOf('а', 2);  // return 1

console.log(x);
console.log(y);
```

<br>

## String.lastIndexOf()

### Օրինակ
```js
let x = 'канал'.lastIndexOf('а');     // return 3
let y = 'канал'.lastIndexOf('а', 2);  // return 1

console.log(x);
console.log(y);
```

<br>

## String.repeat()

### Օրինակ
```js
let a = 'abcd'.repeat(0);  // ''
let b = 'abcd'.repeat(1);  // 'abcd'
let c = 'abcd'.repeat(2);  // 'abcdabcd'

console.log(a);
console.log(b);
console.log(c);
```

<br>

## String.replace()

### Օրինակ
```js
let str = 'Hayk Poghosyan';
let result = str.replace('Hayk', 'Mher');

console.log(str);
console.log(result);
```