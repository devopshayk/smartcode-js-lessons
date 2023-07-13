# New Date()

## getDate()

### Օրինակ

```js
let birthday = new Date('Jule 13, 2023 11:04:30');
let date1 = birthday.getDate();

console.log(date1); // 13
```

<br>

## getDay()

### Օրինակ

```js
let birthday = new Date('Jule 13, 2023 11:04:30');
let day1 = birthday.getDay();

console.log(day1); // 4
```

<br>

## getFullYear()

### Օրինակ

```js
let moonLanding = new Date('July 20, 23 00:20:18');

console.log(moonLanding.getFullYear()); // 23
```

<br>

## getHours()

### Օրինակ

```js
let birthday = new Date('March 25, 08 04:20');

console.log(birthday.getHours()) // 4
```

<br>

## getMilliseconds()

### Օրինակ

```js
let moonLanding = new Date('July 20, 69 00:20:18');
moonLanding.setMilliseconds(123);

console.log(moonLanding.getMilliseconds()); // 123
```

<br>

## getMinutes()

### Օրինակ

```js
let birthday = new Date('March 13, 08 04:20');

console.log(birthday.getMinutes()); // 20
```

<br>

## getMonth()

### Օրինակ

```js
let moonLanding = new Date('July 20, 69 00:20:18');

console.log(moonLanding.getMonth()+1); // 7
```

<br>

## getSeconds()

### Օրինակ

```js
let moonLanding = new Date('July 20, 69 00:20:18');

console.log(moonLanding.getSeconds()); // 18
```

<br>

## setDate()

### Օրինակ

```js
const event = new Date('August 19, 1975 23:15:30');

event.setDate(24);

console.log(event.getDate()); // 24
```

<br>

## setFullYear()

### Օրինակ

```js
const event = new Date('November 19, 1975 23:15:30');

event.setFullYear(1969);

console.log(event.getFullYear()); // 1969
```

<br>

## toDateString()

### Օրինակ

```js
let event = new Date(1993, 6, 28, 14, 39, 7);

console.log(event.toString()); // Expected output: "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)" 
```

<br>

## toJSON()

### Օրինակ

```js
let event = new Date('August 19, 1975 23:15:30 UTC');
let jsonDate = event.toJSON(); // Expected output: "1975-08-19T23:15:30.000Z"
```