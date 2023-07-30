# Դաս 13

### [Վարժություն 1] (https://devopshayk.github.io/smartcode-js-lessons/Lesson13/exercises1//index.html). Ունեք երկու մուտքագրման դաշտ և կոճակ: Սեղմելով կոճակի վրա կոնսոլի դաշտում թող ցուցադրվի մուտքագրման դաշտերի թվերի գումարը:

`exercises1/index.html`
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

`exercises1/script.js`
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

### [Վարժություն 2] (https://devopshayk.github.io/smartcode-js-lessons/Lesson13/exercises2//index.html): Սեղմելով կոճակի վրա թող հայտնվի չորրորդ տեքստը որի մեջ կնկարվի այդ երեք տեքստերը միասին:
`exercises2/index.html`
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

`exercises2/script.js`
```js
function miavorum() {

    let text1 = document.getElementById('text1').value;
    let text2 = document.getElementById('text2').value;
    let text3 = document.getElementById('text3').value;

    let textiMiavorum = `${text1} ${text2} ${text3}`;

    document.getElementById('textiMiavorum').textContent = textiMiavorum;
}
```

<br>

### [Վարժություն 3] (https://devopshayk.github.io/smartcode-js-lessons/Lesson13/exercises3//index.html): Ունեք տեքստ՝ պարբերություն,որի մեջ կա թիվ: Սեղմելով այդ պարբերության վրա, թող այդ թիվը փոխվի իր քառակուսիով:
`exercises3/index.html`
```html
<!DOCTYPE html>
<html>
<head>
    <title>Number Squaring</title>
</head>
<body>
    <p id="paragraph" style='cursor:pointer'>The number is: 5</p>
    
    <script src='script.js'></script>
</body>
</html>

```

`exercises3/script.js`
```js
function squareNumber(number) {
    return number * number;
}

document.getElementById('paragraph').addEventListener('click', function() {
   
let paragraphText = this.textContent;

let number = parseFloat(paragraphText.match(/\d+/));

let squaredNumber = squareNumber(number);

this.textContent = paragraphText.replace(number, squaredNumber);
});
```