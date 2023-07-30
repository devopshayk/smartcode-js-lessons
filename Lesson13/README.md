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

    <button id="btn">Sum</button>

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

<br>

### Վարժություն 2. Ունեք երեք տեքստ:Յուրաքանչյուրը տարբեր պարունակություններով որոնք կլինենք ցանկացած բառ: Սեղմելով կոճակի վրա թող հայտնվի չորրորդ տեքստը որի մեջ կնկարվի այդ երեք տեքստերը միասին:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Combine Texts</title>
</head>
<body>
    <input type="text" id="text1" placeholder="Enter text 1">
    <input type="text" id="text2" placeholder="Enter text 2">
    <input type="text" id="text3" placeholder="Enter text 3">
    <button onclick="miavorum()">Combine Texts</button>
    <p id="textiMiavorum"></p>
    <script src="script.js"></script>
</body>
</html>
```

```js
function miavorum() {

    let text1 = document.getElementById('text1').value;
    let text2 = document.getElementById('text2').value;
    let text3 = document.getElementById('text3').value;

    let textiMiavorum = `${text1} ${text2} ${text3}`;

    document.getElementById('textiMiavorum').textContent = textiMiavorum;
}
```