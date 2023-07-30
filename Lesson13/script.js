let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);

    let sum = num1 + num2;

    console.log('Sum:', sum);
});