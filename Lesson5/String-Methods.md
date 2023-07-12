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
const str1 = 'Հայկ';
const str2 = 'Պողոսյան';

console.log(str1.concat(' ', str2));
console.log(str2.concat(' ', str1));
```

<br>

## String.endsWith()

### Օրինակ

```js
let str = 'Իմ անունը Հայկ է';

console.log(str.endsWith('Հայկ'));  // false
console.log(str.endsWith('է'));    // true
```

<br>

## String.startsWith()

### Օրինակ
```js
let str = 'Быть или не быть, вот в чём вопрос.';

console.log(str.startsWith('Быть или'));   // true
console.log(str.startsWith('не быть'));   // false
```

<br>

## String.includes()

### Օրինակ

```js
let str = 'Իմ անունը Հայկ է:';

console.log(str.includes('Իմ'));   // true
console.log(str.includes('Հայկ')); // true
console.log(str.includes('է', 2)); // true
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
let str = 'Հայկ Պողոսյան';
let result = str.replace('Հայկ', 'Մհեր');

console.log(str);
console.log(result);
```

<br>

## String.split()

### Օրինակ
```js
let str = 'Բարև երկիր, ոնց ես';
let splits = str.split(' ', 2);

console.log(splits);
```