# Դաս 6

### Վարժություն 1.Ունեք զանգված թվերով,ստուգեք արդյոք կա `4` թիվ զանգվածում,եթե այո տպեք `այո`,եթե ոչ դուրս եկեք բլոկից։
```js
let arr = [1, 8, 4, 12];

for(let i = 0; i <= arr.length; i++) {
	if(arr[i] == 4) {
		alert('այո');
	} 
}
```

<br>

### Վարժություն 2. Տրվում է թվերի զանգված, օրինակ՝ `[10, 20, 30, 50, 235, 3000]`: Ցուցադրել զանգվածից միայն այն թվերը, որոնք սկսվում են `1`, `2` կամ `5` թվերով:
```js
let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
  let num = String(arr[i]);
  let sum = num[0];
  if (sum == 1 || sum == 2 || sum == 5) {
   alert(num);
  }
}
```

<br>

### Վարժություն 3. Հաջորդ վարժությունը հետևյալն է՝ պետք է տպել այն,ինչը կլրացնեմ մուտքագրման դաշտում,այսինքն հարցման մեջ կլինի `գրիր մի նշան`, դրանից հետո նորից հարցում կհղվի` գրիր մի թիվ`,ու արդյունքում կտպի օրինակ `9` հատ `*` նշանից, ու ամեն անգամ լրիվ տարբեր նշաններ տարբեր քանակների,կախված տվյալ պատասխանից։ `function declaration`:
```js
function declaration() {
  let sign = prompt("Գրեք մի նշան");
  let number = prompt("Գրեք մի թիվ");
  let result = sign.repeat(number);
	
  alert(result);
 }
 declaration();
```

<br>

### Վարժություն 4. Գտնել զանգավածի ամենամեծ թիվը։
```js
function findLargestNumber(numbers) {
  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}
alert(findLargestNumber([1, 4, 23, 8]));
```