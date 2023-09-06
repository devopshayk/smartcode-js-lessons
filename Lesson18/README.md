# Դաս 18

### Վաժություն. `html` ֆայլի մեջ ունենալ մի հատ `div`, JavaScript-ի օգնությամբ այդ `div`-ի մեջ ավելացնել նկարներ, և ամեն `reload` անելուց նկարները պետք է տեղերով փոխվեն։

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Document</title>
</head>

<body>
    <div></div>
    <script src="./js/script.js"></script>
</body>

</html>
```

<br>


```css
div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
```

<br>


```js
const imageContainer = document.querySelector('div');
const imageUrls = [
    'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960',
    'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg',
    'https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/819061b6-7d77-4e3b-96af-1075fb2de5cb/Bugatti%20Chiron%20Super%20Sport%20300%2B.jpeg?width=800&fm=jpg&auto=format',
    'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/99-best-luxury-cars-2023-bmw-i7-lead.jpg'
];

for (let i = 0; i < 4; i++) {
    let img = document.createElement('img');
    const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)] 
    img.style.cssText = `
    background-image: url(${randomImageUrl});
    width: 300px;
    height: 150px;
    background-size:cover;
    background-position: center;
    `;

    imageContainer.append(img);
}

console.log(imageContainer);
```