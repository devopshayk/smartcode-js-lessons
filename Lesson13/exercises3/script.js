function squareNumber(number) {
    return number * number;
}

document.getElementById('paragraph').addEventListener('click', function() {
   
let paragraphText = this.textContent;

let number = parseFloat(paragraphText.match(/\d+/));

let squaredNumber = squareNumber(number);

this.textContent = paragraphText.replace(number, squaredNumber);
});