# Դաս 11

### Վարժություն 1. Ունենք զանգված, տպել զանգվածոի մեջ կրկնվող թիվը:
```js
function findDuplicates(arr) {
  let duplicates = {};
  let result = [];

  arr.forEach((num) => {
    if (duplicates[num]) {
      duplicates[num]++;
    } else {
      duplicates[num] = 1;
    }
  });

  for (let num in duplicates) {
    if (duplicates[num] > 1) {
      result.push(num);
    }
  }

  return result;
}


let myArray = [1, 2, 3, 4, 4, 5, 6, 6, 6, 7];
let duplicatesArray = findDuplicates(myArray);
console.log(duplicatesArray);
```

<br>

### Վարժություն 2. Տպել թե քնի անգամ են կրկնվում:
```js
 function findDuplicatesWithCount(arr) {
  let duplicates = {};
  let result = {};

  arr.forEach((num) => {
    if (duplicates[num]) {
      duplicates[num]++;
    } else {
      duplicates[num] = 1;
    }
  });

  for (let num in duplicates) {
    if (duplicates[num] > 1) {
      result[num] = duplicates[num];
    }
  }

  return result;
}


const myArray = [1, 2, 3, 4, 4, 5, 6, 6, 6, 7];
const duplicatesWithCount = findDuplicatesWithCount(myArray);

for (let num in duplicatesWithCount) {
  console.log(`${num} թիվը կրկնվում է ${duplicatesWithCount[num]} անգամ.`)
}
```