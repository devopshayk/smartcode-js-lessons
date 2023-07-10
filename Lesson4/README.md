# Դաս 4

### Վարժություն 1. Ստեղծել `func` անունով ֆունկցիա, որը  ինչ-որ տող կվերադարձնի:
```js
function func() {
	return 'Hayk';
};
console.log(func());
```

<br>

### Վարժություն 2. Ստեղծել `func1` անունով ֆունկցիա, որը կվերադարձնի `3` թիվը ։
```js
function func1() {
	return 3;
};
console.log(func1());
```

<br>

### Վարժություն 3.  Ստեղծել ֆունկցիա, 3 պարամետրով՝ անուն, ազգանուն, հայրանուն։ Արդյունքը կվերադարձնի կոնսոլում։
```js
function fullName(firstName, lastName, patronymic) {
  let fullName = firstName + " " + lastName + " " + patronymic;
  console.log(fullName);
}

fullName("Hayk", "Poghosyan", "Mheri");
```

<br>

### Վարժություն 4. Ունեք ֆունկցիա 4 պարամետրով՝թվեր։ Ֆունկցիայի միջոցով գրել մի կոդ,որը կվերադարձնի ֆունկցիայի պարամետրերի թվերի գումարը։
```js
function sumNumbers(num1, num2, num3, num4) {
  let sum = num1 + num2 + num3 + num4;
  return sum;
}

console.log(sumNumbers(1, 2, 3, 4));
```

<br>

### Վարժություն 5. Ունեք ֆունկցիա 4 պարամետրով՝թվեր։ Ֆունկցիայի միջոցով գրել մի կոդ,որը կվերադարձնի ֆունկցիայի պարամետրերի արտադրյալը։
```js
function multiplication(num1, num2, num3, num4) {
  let mult = num1 * num2 * num3 * num4;
  return mult;
}

console.log(multiplication(1, 2, 3, 4));
```

<br>

### Վարժություն 6. Function declaration -Տրված են a և b փոփոխականները: Ստուգեք, որ `a`-ն  բաժանվում է `b`-ի առանց մնացորդի: Եթե ​​այո, տպեք  բաժանման արդյունքը, հակառակ դեպքում տպեք  բաժանման մնացորդի արդյունքը։
```js
function checkDivisibility(a, b) {
    if (a % b === 0) {
        return `${a} - ն առանց մնացորդի բաժանվում է ${b} - ի`;
    } else {
        return `${a} - ն առանց մնացորդի չի բաժանվում ${b} - ի.`;
    }
}

console.log(checkDivisibility(10, 5));
```

<br>

### Վարժություն 7. Տպել թվերի հաջորդականությունը մի տողի վրա  `'123456789'`  օգտագործելով for  loop և գրեք այն `str` փոփոխականի մեջ :
```js
let str = '';

for (i = 1; i < 10; i++) {
	str += i;
}
console.log(str);
```

<br>

### Վարժություն 8. Տպել թվերի հաջորդականությունը մի տողի վրա `'987456321'` օգտագործելով for loop և գրեք այն `str` փոփոխականի մեջ :
```js
let str = '';

for (i = 9; i > 0; i--) {
	str += i;
}
console.log(str);
```

<br>

### Վարժություն 9. Տպել թվերի հաջորդականությունը մի տողի վրա `'-1-2-3-4-5-6-7-8-9-'` օգտագործելով for loop և գրեք այն `str` փոփոխականի մեջ :
```js
let str = '-';
for (var i = 1; i < 10; i ++) {
  str  = str + i + "-";
}
console.log(str);
```

<br>

### Վարժություն 10. Տպել `256` թվի բոլոր բաժանարարները։
```js
let num = 256;

for(i = 1; i <= num; i++) {
  if(num % i == 0) {
 			console.log(i);
  }	
}
```

<br>

## Հավելյալ վարժություններ։
### Վարժություն 1. Գրեք `printNumbers` կոչվող ֆունկցիան, որն ընդունում է ամբողջ թվի պարամետրը և տպում է 1-ից մինչև այդ ամբողջ թվերը՝ օգտագործելով <b>for loop</b>-ը:
```js
 function printNumbers(num) {
 	if (num < 1) {
			console.log('Ֆունկցիաի արժեքը փոքր է 1-ից');
  } else if (num % 1 != 0) {
		  console.log('Ամբողջ թիվ չէ');
	} else {
    for (i = 1; i <= num; i++) {
      console.log(i);
    }
  }
};

printNumbers(10);
```