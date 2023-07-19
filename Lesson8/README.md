# Դաս 8

### Վարժություն . Ստեղծել զանգված որտեղ կլինեն մի քանի օբյեկտներ օրինակ՝ `let arr = [{ id:12345567,firstname: 'Ann',lastname: 'Poghosyan', email: 'harutyunyan.a@mail.ru',gender: 'female', age: 99, country: 'Armenia', sallary: 2000000,} ],`սա մեկ օբյեկտի տվյալի օրինակ է,մնացածը կունենան ուրիշ տվյալներ։

### Վարժություն 1. Տպել բոլոր user-ներին:
```js
let arr = [
   	{ id:12345567,
      firstName: 'Ann',
      lastName: 'Poghosyan',
      email: 'harutyunyan.a@mail.ru',
      gender: 'female',
      age: 54,
      country: 'America',
      sallary: 99,
  	},
    {
    	id:12345567,
      firstName: 'Hayk',
      lastName: 'Poghosyan',
      email: 'haykp55.@gmail.ru',
      gender: 'male',
      age: 14,
      country: 'China',
      sallary: 546,
    },
    {
    	id:12345567,
      firstName: 'Sargis',
      lastName: 'Davtyan',
      email: 'sargis123.a@mail.com',
      gender: 'male',
      age: 21,
      country: 'Armenia',
      sallary: 20,
    }
];


console.log("Տպել բոլոր անձանց:");
arr.forEach(user => {
  console.log(user.firstName);
}); 
```

<br>

### Վարժություն 2. Տպել user-ներին,որոնք ապրում են Հայաստանում:
```js
let arr = [
   	{ id:12345567,
      firstName: 'Ann',
      lastName: 'Poghosyan',
      email: 'harutyunyan.a@mail.ru',
      gender: 'female',
      age: 54,
      country: 'America',
      sallary: 99,
  	},
    {
    	id:12345567,
      firstName: 'Hayk',
      lastName: 'Poghosyan',
      email: 'haykp55.@gmail.ru',
      gender: 'male',
      age: 14,
      country: 'China',
      sallary: 546,
    },
    {
    	id:12345567,
      firstName: 'Sargis',
      lastName: 'Davtyan',
      email: 'sargis123.a@mail.com',
      gender: 'male',
      age: 21,
      country: 'Armenia',
      sallary: 20,
    }
];


let livedInArmenia = arr.filter(user => user.country === 'Armenia').map(user => user.firstName);

console.log("Այն մարդիկ որոնք ապրում են Հայաստանում:");
console.log(livedInArmenia); 
```

<br>

### Վարժություն 3. Տպել չափահաս  user-ներին:
```js
let arr = [
   	{ id:12345567,
      firstName: 'Ann',
      lastName: 'Poghosyan',
      email: 'harutyunyan.a@mail.ru',
      gender: 'female',
      age: 54,
      country: 'America',
      sallary: 99,
  	},
    {
    	id:12345567,
      firstName: 'Hayk',
      lastName: 'Poghosyan',
      email: 'haykp55.@gmail.ru',
      gender: 'male',
      age: 14,
      country: 'China',
      sallary: 546,
    },
    {
    	id:12345567,
      firstName: 'Sargis',
      lastName: 'Davtyan',
      email: 'sargis123.a@mail.com',
      gender: 'male',
      age: 21,
      country: 'Armenia',
      sallary: 20,
    }
];


let bigHumans = arr.filter(user => user.age > 18).map(user => user.firstName);

console.log("Տպել բոլոր չափահաս անձանց:");
console.log(bigHumans); 
```

<br>

### Վարժություն 4. Տպել այն `տղա user`-ներին,որոնց աշխատավարձը մեծ է 100-ից:
```js
let arr = [
   	{ id:12345567,
      firstName: 'Ann',
      lastName: 'Poghosyan',
      email: 'harutyunyan.a@mail.ru',
      gender: 'female',
      age: 54,
      country: 'America',
      sallary: 99,
  	},
    {
    	id:12345567,
      firstName: 'Hayk',
      lastName: 'Poghosyan',
      email: 'haykp55.@gmail.ru',
      gender: 'male',
      age: 14,
      country: 'China',
      sallary: 546,
    },
    {
    	id:12345567,
      firstName: 'Sargis',
      lastName: 'Davtyan',
      email: 'sargis123.a@mail.com',
      gender: 'male',
      age: 21,
      country: 'Armenia',
      sallary: 20,
    }
];


let boySallary = arr.filter(user => user.gender === 'male' && user.sallary > 100).map(user => user.firstName);

console.log("Տպել այն ՛տղա՛  user-ներին,որոնց աշխատավարձը մեծ է 100-ից:");
console.log(boySallary); 
```

<br>

### Վարժություն 5. Վերադասավորել  user-ներին ըստ տարիքի փոքրից մեծ։
```js
let arr = [
   	{ id:12345567,
      firstName: 'Ann',
      lastName: 'Poghosyan',
      email: 'harutyunyan.a@mail.ru',
      gender: 'female',
      age: 54,
      country: 'America',
      sallary: 99,
  	},
    {
    	id:12345567,
      firstName: 'Hayk',
      lastName: 'Poghosyan',
      email: 'haykp55.@gmail.ru',
      gender: 'male',
      age: 14,
      country: 'China',
      sallary: 546,
    },
    {
    	id:12345567,
      firstName: 'Sargis',
      lastName: 'Davtyan',
      email: 'sargis123.a@mail.com',
      gender: 'male',
      age: 21,
      country: 'Armenia',
      sallary: 20,
    }
];


arr.sort((a, b) => a.age - b.age);

let sortedFirstNames = arr.map(user => user.firstName);

console.log(sortedFirstNames);
```