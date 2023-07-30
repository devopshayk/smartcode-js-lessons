function miavorum() {

    let text1 = document.getElementById('text1').value;
    let text2 = document.getElementById('text2').value;
    let text3 = document.getElementById('text3').value;

    let textiMiavorum = `${text1} ${text2} ${text3}`;

    document.getElementById('textiMiavorum').textContent = textiMiavorum;
}