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

## String.indexOf()

### Օրինակ
```js
let a = 'Синий кит'.indexOf('Синий');   // вернёт  0
let b = 'Синий кит'.indexOf('Голубой');  // вернёт -1
let c = 'Синий кит'.indexOf('кит', 0);    // вернёт  6

console.log(a);
console.log(b);
console.log(c);
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

<br>

## String.padEnd()

### Օրինակ
```js
let a = 'abc'.padEnd(10);         // "abc       "
let b = 'abc'.padEnd(10, "foo");  // "abcfoofoof"
let c = 'abc'.padEnd(6,"123456"); // "abc123"

console.log(a);
console.log(b);
console.log(c);
```

<br>

## String.padStart()

### Օրինակ
```js
let a = 'abc'.padStart(10);         // "       abc"
let b = 'abc'.padStart(10, "foo");  // "foofoofabc"
let c = 'abc'.padStart(6,"123465"); // "123abc"

console.log(a);
console.log(b);
console.log(c);
```

<br>

## String.trim()

### Օրինակ
```js
let orig = '   foo  ';
console.log(orig.trim());  // 'foo'
```

<br>

## String.trimEnd()

### Օրինակ
```js
let str = '   foo  ';

console.log(str.length); // 8

str = str.trimRight();
console.log(str.length); // 5
console.log(str); 
```

<br>

## String.toLocaleLowerCase()

### Օրինակ
```js
console.log('ԱՅԲՈՒԲԵՆ'.toLocaleLowerCase());
```

<br>

## String.toLocaleUpperCase()

### Օրինակ
```js
console.log('ԱՅԲՈՒԲԵՆ'.toLocaleUpperCase());
```