const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const pressButton = document.getElementById("pressButton");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");



function getRandomColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}


function createParagraph(text, output, input) {
    if (text.trim() !== "") {
        const p = document.createElement("p");
        p.textContent = text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", function () {
            changeButtonColor(deleteButton);
            setTimeout(function () {
                p.remove();
            }, 2000);
        });

        p.appendChild(deleteButton);
        output.appendChild(p);
        input.value = "";
    }
}



function changeButtonColor(button) {
    let duration = 1000;
    let startTime = null;
    let originalColor = window.getComputedStyle(button).backgroundColor;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;

        const progress = timestamp - startTime;
        const percentComplete = Math.min(progress / duration, 1);

        button.style.backgroundColor = interpolateColors(originalColor, getRandomColor(), percentComplete);

        if (progress < duration) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}


function interpolateColors(color1, color2, percent) {
    const r1 = parseInt(color1.slice(4, 7));
    const g1 = parseInt(color1.slice(9, 12));
    const b1 = parseInt(color1.slice(14, 17));

    const r2 = parseInt(color2.slice(4, 7));
    const g2 = parseInt(color2.slice(9, 12));
    const b2 = parseInt(color2.slice(14, 17));

    const r = Math.round(r1 + (r2 - r1) * percent);
    const g = Math.round(g1 + (g2 - g1) * percent);
    const b = Math.round(b1 + (b2 - b1) * percent);

    return `rgb(${r}, ${g}, ${b})`;
}

pressButton.addEventListener("click", function () {
    createParagraph(input1.value, output1, input1);
    createParagraph(input2.value, output2, input2);
});

