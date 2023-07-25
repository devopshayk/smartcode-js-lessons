# Դաս 9

### Վարժություն 1. Ունենք   օբյեկտ, որտեղ `key`-երը մարդկանց անուններն են, իսկ `value`-ները նրանց տարիքները։ Գրել ֆունկցիա, որը կգտնի ու կտպի ամենամեծ և ամենափոքր տարիքներ ունեցող մարդկանց։
```js
function findOldestAndYoungest(ages) {
let oldestPerson = null;
let youngestPerson = null;
let oldestAge = Number.MIN_VALUE;
let youngestAge = Number.MAX_VALUE;

  for (const person in ages) {
    const age = ages[person];

    if (age > oldestAge) {
      oldestAge = age;
      oldestPerson = person;
    }

    if (age < youngestAge) {
      youngestAge = age;
      youngestPerson = person;
    }
  }

  if (oldestPerson !== null) {
    console.log(`Ամենա մեծ մարդը ${oldestPerson} է, նա ${oldestAge} տարեկան է.`);
  }

  if (youngestPerson !== null) {
    console.log(`Ամենա փոքր մարդը ${youngestPerson} է, նա ${youngestAge} տարեկան է.`);
  }
}


let peopleAges = {
  "Hayk": 14,
  "Tigran": 9,
  "Mariam": 16,
  "Gayane": 38,
  "Mher": 39,
};

findOldestAndYoungest(peopleAges);

```

<br>


### Վարժություն 2. Ստեղծել մեքենաների տվյալներով օբյեկտներ,որոնք կունենան `արագություն` և `ճանապարհ`,հաշվել թե որ մեքենան տեղ կհասնի ամեաարագը։
```js
const cars = [
  { name: "Mercedes", speed: 100, road: 300 },
  { name: "Bmw", speed: 120, road: 250 },
  { name: "Niva", speed: 80, road: 400 },
];


function calculateTimeTaken(car) {
  return car.road / car.speed; 
}

function findFastestCar(cars) {
  let fastestCar = null;
  let fastestTime = Number.MAX_VALUE;

  for (const car of cars) {
    const timeTaken = calculateTimeTaken(car);
    if (timeTaken < fastestTime) {
      fastestTime = timeTaken;
      fastestCar = car;
    }
  }

  return fastestCar;
}


const fastestCar = findFastestCar(cars);


if (fastestCar) {
  console.log(`Ամենա արագ մեքենան ${fastestCar.name} է, նրա արագությունը  ${fastestCar.speed} km/h է.`);
} else {
  console.log("No cars provided.");
}

```