# Դաս 2

### Վաժություն 1. Գրեք 1.5-ը `a` փոփոխականի մեջ, իսկ 0.75-ը՝ `b` փոփոխականի մեջ: Գտեք այս փոփոխականների արժեքների գումարը և ցուցադրեք այն էկրանին:
```js
let a = 1.5;
let b = 0.75;
let sum = a + b;

alert(sum);
```
<br>

### Վաժություն 2. Տրվում է որոշ տող պարունակող փոփոխական: Ստուգեք, որ այս տողը սկսվում է `a` նիշով։Եթե սկսվում է `a` նիշով, արեք ինչ-որ գրառում,որ սկսում է դրանով ,կամ չի սկսվում։
```js
let word = 'abc';

if (word[0] == 'a') {
	alert('Առաջի տառը "a" է։');
} else {
	alert('Առաջի տառը "a" չէ։');
}
```

<br>

### Վաժություն 3. Թող `num` փոփոխականը պահի թիվ: Որոշիր՝ թիվը զույգ է, թե ոչ։ Թիվը կլինի զույգ, եթե վերջին նիշը լինի 0, 2, 4, 6 կամ 8, իսկ հակառակ դեպքում՝ կենտ: 

```js
let num = 12;

if (num % 2 == 0) {
	alert('Թիվը զույգ է։');
} else {
	alert('Թիվը զույգ չէ։');
}
```

<br>

### Վաժություն 4. Ստուգեք, որ թիվը զրոյից մեծ է և 5-ից փոքր:

```js
let num = 2;

if (num > 0 && num < 5) {
	alert('Թիվը զրոյից մեծ է և 5-ից փոքր:');
} else {
	alert('Թիվը 1-4 չէ։');
}
```