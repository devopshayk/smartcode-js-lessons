# Դաս 4

### Վարժություն 1. Փոփոխականին վերագրված այս տեքստից 'I learn javascript!' կտրեք «learn» և «javascript» բառերը երեք տարբեր եղանակներով (substr, substring, slice-ի միջոցով):
```js
let text = 'I learn javascript';
let result = text.substr(0, 1);

console.log(result); // Variant 1



let text = 'I learn javascript';
let result = text.substring(0, 1);

console.log(result); // Variant 2



let text = 'I learn javascript';
let result = text.slice(0, 1);

console.log(result); // Variant 3
```

<br>

### Վարժություն 2. Տրված է «abcde» տողը: Որոշեք «c» տառի դիրքը (index) այս տողում:
```js
let str = 'abcd';
let result = str.indexOf('c');

console.log(result);
```

<br>

### Վարժություն 3. `london` տողի առաջին տառը փոխարկենք մեծատառի արդյունքւմ տպեք `London`:
```js
let str = "london";
let result = str.charAt(0).toUpperCase() + str.slice(1);

console.log(result);
```

<br>

### Վարժություն 4. .Տրված է `str` փոփոխականը, որը պահպանում է որոշ տեքստ- my name is John։ Իրականացրեք երկար տեքստի կրճատումը հետևյալ սկզբունքով. եթե այս տեքստի նիշերի թիվն ավելի մեծ է, քան n փոփոխականում նշված թիվը, ապա արդյունքի փոփոխականում մենք գրում ենք `str` տողի առաջին n-ի քանակի նիշերը և ավելացնում ենք բազմակետերը․..' Հակառակ դեպքում `str` փոփոխականի բովանդակությունը կգրենք result փոփոխականի մեջ։
```js
let str = "my name is John";
let n = 10; 

let result;

if (str.length > n) {
  result = str.substring(0, n) + "..."; 
} else {
  result = str; 
}

console.log(result); 
```