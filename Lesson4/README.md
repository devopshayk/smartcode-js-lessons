# Դաս 4

### Վաժություն 1. Ստեղծել `func` անունով ֆունկցիա, որը  ինչ-որ տող կվերադարձնի:
```js
function func() {
	return 'Hayk';
};
console.log(func());
```

<br>

### Վաժություն 2. Ստեղծել `func1` անունով ֆունկցիա, որը կվերադարձնի `3` թիվը ։
```js
function func1() {
	return 3;
};
console.log(func1());
```

<br>

### Վաժություն 3.  Ստեղծել ֆունկցիա, 3 պարամետրով՝ անուն, ազգանուն, հայրանուն։ Արդյունքը կվերադարձնի կոնսոլում։
```js
function fullName(firstName, lastName, patronymic) {
  let fullName = firstName + " " + lastName + " " + patronymic;
  console.log(fullName);
}

fullName("Hayk", "Poghosyan", "Mheri");
```

<br>

### Վաժություն 4. Ունեք ֆունկցիա 4 պարամետրով՝թվեր։ Ֆունկցիայի միջոցով գրել մի կոդ,որը կվերադարձնի ֆունկցիայի պարամետրերի թվերի գումարը։
```js
function sumNumbers(num1, num2, num3, num4) {
  let sum = num1 + num2 + num3 + num4;
  return sum;
}

console.log(sumNumbers(1, 2, 3, 4));
```