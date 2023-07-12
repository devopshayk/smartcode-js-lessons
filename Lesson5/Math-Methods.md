# Math Methods

## Math.abs()

### Օրինակ

```js
let a = Math.abs(-Infinity); // Infinity
let b = Math.abs(-1); // 1
let c = Math.abs(-0); // 0

console.log(a);
console.log(b);
console.log(c);
```

<br>

## Math.acos()

### Օրինակ

```js
let a = Math.acos(-2);  // NaN
let b = Math.acos(-1);  // 3.141592653589793
let c = Math.acos(0);   // 1.5707963267948966
let s = Math.acos(0.5); // 1.0471975511965979

console.log(a);
console.log(b);
console.log(c);
console.log(d);
```

<br>

## Math.acosh()

### Օրինակ

```js
let a = Math.acosh(0.5) // NaN
let b = Math.acosh(1);  // 0
let c = Math.acosh(2);  // 1.3169578969248166

console.log(a);
console.log(b);
console.log(c);
```

<br>

## Math.asin()

### Օրինակ

```js
let a = Math.asin(-2);  // NaN
let b = Math.asin(-1);  // -1.5707963267948966 (-pi/2)
let c = Math.asin(0);   // 0
let d = Math.asin(0.5); // 0.5235987755982989

console.log(a);
console.log(b);
console.log(c);
console.log(d);
```

<br>

## Math.atan()

### Օրինակ

```js
let a = Math.atan(1);  // 0.7853981633974483
let b = Math.atan(0);  // 0

console.log(a);
console.log(b);
```

<br>

## Math.atan2()

### Օրինակ

```js
let a = Math.atan2(90, 15); // 1.4056476493802699
let b = Math.atan2(15, 90); // 0.16514867741462683

console.log(a);
console.log(b);
```

<br>

## Math.atanh()

### Օրինակ

```js
let a = Math.atanh(-2);  // NaN
let b = Math.atanh(-1);  // -Infinity
let c = Math.atanh(0);   // 0

console.log(a);
console.log(b);
console.log(c);
```

<br>

## Math.cbrt()

### Օրինակ

```js
let a = Math.cbrt(-1); // -1
let b = Math.cbrt(0);  // 0
let c = Math.cbrt(1);  // 1

console.log(a);
console.log(b);
console.log(c);
```

<br>

## Math.ceil()

### Օրինակ

```js
let = a Math.ceil(.95);   // 1
let = b Math.ceil(4);     // 4
let = c Math.ceil(7.004); // 8

console.log(a);
console.log(b);
console.log(c);
```

<br>

## Math.clz32()

### Օրինակ

```js
let a = Math.clz32(1);    // 31
let b = Math.clz32(1000); // 22
let c = Math.clz32();     // 32

console.log(a);
console.log(b);
console.log(c);
```

<br>

## Math.cos()

### Օրինակ

```js
let a = Math.cos(0);  // 1
let b = Math.cos(1);  // 0.5403023058681398

console.log(a);
console.log(b);
```

<br>

## Math.cosh()

### Օրինակ

```js
let a = Math.cosh(0);  // 1
let b = Math.cosh(1);  // 1.5430806348152437
let c = Math.cosh(-1); // 1.5430806348152437

console.log(a);
console.log(b);
console.log(c);
```

<br>

## Math.exp()

### Օրինակ

```js
let a = Math.exp(-1); // 0.36787944117144233
let b = Math.exp(0);  // 1
let c = Math.exp(1);  // 2.718281828459045

console.log(a);
console.log(b);
console.log(c);
```

<br>

## Math.exp1()

### Օրինակ

```js
let a = Math.expm1(-1); // -0.6321205588285577
let b = Math.expm1(0);  // 0
let c = Math.expm1(1);  // 1.718281828459045

console.log(a);
console.log(b);
console.log(c);
```

<br>

## Math.floor()

### Օրինակ

```js
let a = Math.floor( 45.95); //  45
let b = Math.floor(-45.95); // -46

console.log(a);
console.log(b);
```

<br>

## Math.fround()

### Օրինակ

```js
let a = Math.fround(0);     // 0
let b = Math.fround(1);     // 1
let c = Math.fround(1.337); // 1.3370000123977661

console.log(a);
console.log(b);
console.log(c);
```

<br>

## Math.hypot()

### Օրինակ

```js
let a = Math.hypot(3, 4);    // 5
let b = Math.hypot(3, 4, 5); // 7.0710678118654755
let c = Math.hypot();        // 0

console.log(a);
console.log(b);
console.log(c);
```

<br>

## Math.imul()

### Օրինակ

```js
let a = Math.imul(2, 4);    // 8
let b = Math.imul(-1, 8);   // -8
let c = Math.imul(-2, -2);  // 4

console.log(a);
console.log(b);
console.log(c);
```

<br>

## Math.log()

### Օրինակ

```js
let a = Math.log(-1); // NaN, выход за пределы диапазона
let b = Math.log(0);  // -Infinity

console.log(a);
console.log(b);
```

<br>

## Math.log10()

### Օրինակ

```js
let a = Math.log10(2);  // 0.3010299956639812
let b = Math.log10(1);  // 0
let c = Math.log10(0);  // -Infinity

console.log(a);
console.log(b);
console.log(c);
```

<br>

## Math.log1p()

### Օրինակ

```js
let a = Math.log1p(1);  // 0.6931471805599453
let b = Math.log1p(0);  // 0
let c = Math.log1p(-1); // -Infinity

console.log(a);
console.log(b);
console.log(c);
```

<br>

## Math.log2()

### Օրինակ

```js
let a = Math.log2(3);    // 1.584962500721156
let b = Math.log2(2);    // 1
let c = Math.log2(1);    // 0

console.log(a);
console.log(b);
console.log(c);
```

<br>

## Math.max()

### Օրինակ

```js
let a = Math.max(10, 20);   //  20
let b = Math.max(-10, -20); // -10

console.log(a);
console.log(b);
```

<br>

## Math.min()

### Օրինակ

```js
let a = 10, y = -20;
let b = Math.min(x, y);

console.log(a);
console.log(b);
```

<br>

## Math.pow()

### Օրինակ

```js
let a = Math.pow(7, 2); // 49

console.log(a)
```

<br>

## Math.random()

### Օրինակ

```js
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

console.log(getRandomIntInclusive(2, 12))
```

<br>

## Math.round()

### Օրինակ

```js
// Вернёт значение 20
let a = Math.round(20.49);
console.log(a);
// Вернёт значение 21
let b = Math.round(20.5);
console.log(b);
```

<br>

## Math.sign()

### Օրինակ

```js
let a = Math.sign(3);     //  1
let b = Math.sign(-3);    // -1
let c = Math.sign('-3');  // -1

console.log(a);
console.log(b);
console.log(c);
```

<br>

## Math.sin()

### Օրինակ

```js
let a = Math.sin(0);  // 0
let b = Math.sin(1);  // 0.8414709848078965

console.log(a);
console.log(b);
```

<br>

## Math.sinh()

### Օրինակ

```js
let a = Math.sinh(0); // 0
let b = Math.sinh(1); // 1.1752011936438014

console.log(a);
console.log(b);
```

<br>

## Math.sqrt()

### Օրինակ

```js
let a = Math.sqrt(9); // 3
let b = Math.sqrt(2); // 1.414213562373095

console.log(a);
console.log(b);
```

<br>

## Math.tan()

### Օրինակ

```js
let a = Math.tan(1); // 1.5574077246549023
console.log(a);
```

<br>

## Math.tanh()

### Օրինակ

```js
let a = Math.tanh(0);        // 0
let b = Math.tanh(Infinity); // 1

console.log(a);
console.log(b);
```

<br>

## Math.trunc()

### Օրինակ

```js
let a = Math.trunc(13.37);    // 13
let b = Math.trunc(42.84);    // 42

console.log(a);
console.log(b);
```