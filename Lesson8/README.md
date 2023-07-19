# Դաս 8

### Վարժություն . Ստեղծել զանգված որտեղ կլինեն մի քանի օբյեկտներ օրինակ՝ `let arr = [{ id:12345567,firstname: 'Ann',lastname: 'Poghosyan', email: 'harutyunyan.a@mail.ru',gender: 'female', age: 99, country: 'Armenia', sallary: 2000000,} ],`սա մեկ օբյեկտի տվյալի օրինակ է,մնացածը կունենան ուրիշ տվյալներ։ 1. Տպել բոլոր user-ներին:   2. Տպել user-ներին,որոնք ապրում են Հայաստանում:   3․Տպել չափահաս  user-ներին:   4 Տպել այն ՛տղա՛  user-ներին,որոնց աշխատավարձը մեծ է 100-ից:   5Վերադասավորել  user-ներին ըստ տարիքի փոքրից մեծ։
```js
// 1. Տպել բոլոր անձանց
console.log("Տպել բոլոր անձանց forEach մեթոդը օգտագործելով:");
arr.forEach(user => {
  console.log(user.firstName);
}); 
```

<br>

### Վարժություն 2.
```js
//  Տպել user-ներին, որոնք ապրում են Հայաստանում:
let livedInArmenia = arr.filter(user => user.country === 'Armenia').map(user => user.firstName);

console.log("Այն մարդիկ որոնք ապրում են Հայաստանում:");
console.log(livedInArmenia); 
```

<br>

### Վարժություն 3.
```js
// 3. Տպել բոլոր չափահաս անձանց:
let bigHumans = arr.filter(user => user.age > 18).map(user => user.firstName);

console.log("Տպել բոլոր չափահաս անձանց:");
console.log(bigHumans); 
```

<br>

### Վարժություն 4.
```js
// 4. Տպել այն ՛տղա՛  user-ներին,որոնց աշխատավարձը մեծ է 100-ից:
let boySallary = arr.filter(user => user.gender === 'male' && user.sallary > 100).map(user => user.firstName);

console.log("Տպել այն ՛տղա՛  user-ներին,որոնց աշխատավարձը մեծ է 100-ից:");
console.log(boySallary); 
```