# Դաս 7

### Վարժություն 1. Տրվում է թվերի զանգված: Պարզեք, թե զանգվածի սկզբից քանի տարր պետք է իրար գումարվի, որպեսզի ընդհանուրը գումարը 10-ից ավելի լինի:
```js
let numbers = [1, 3, 5, 2, 4];
let sum = 0;
let el = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  el++;

  if (sum > 10) {
    break;
  }
}

console.log(el);
```

<br>

### Վարժություն 2. Ունեք բազմաչափ զանգված, `[[[1,2],[3,4]],[[5,6],[7,8]]]` Տպել բոլոր թվերի գումարը առանց մեթոդի։
```js
let arr = [[[1,2],[3,4]],[[5,6],[7,8]]];
let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            for (let q = 0; q < arr[i][j].length; q++) {
                 sum += arr[i][j][q];
        }       
    }
}
console.log(sum);
```

<br>


### Վարժություն 3. Ունեք զանգված գտեք զանգվածի միջի կենտ թվերի արտադրյալի խորանարդը։
```js
let numbers = [1, 6, 3, 4, 5, 7, 20];
let sum = 1;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    sum *= numbers[i];
  }
}

let result = sum ** 3; 
console.log(result);
```

<br>


### Վարժություն 4. Ունեք զանգված խառը թվերով։ Այնպես արեք որ զանգվածի միջի թվերը դասավորվեն աճման կարգով։
```js
let arr = [2, 25, 4, 11, 6, 8];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
}
console.log(arr);
```