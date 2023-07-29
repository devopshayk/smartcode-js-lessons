# Դաս 13

### Վարժություն 1. Ունեք երկու մուտքագրման դաշտ և կոճակ: Սեղմելով կոճակի վրա կոնսոլի դաշտում թող ցուցադրվի մուտքագրման դաշտերի թվերի գումարը:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Sum</title>
</head>
<body>
    <label for="input1">Number 1:</label>
    <input type="number" id="input1" />

    <label for="input2">Number 2:</label>
    <input type="number" id="input2" />

    <button id="btn">Calculate Sum</button>

    <script src="script.js"></script>
</body>
</html>

```

```js
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);

    let sum = num1 + num2;

    console.log('Sum:', sum);
});

```