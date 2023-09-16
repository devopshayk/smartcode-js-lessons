const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const pressButton = document.getElementById("pressButton");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");

pressButton.addEventListener("click", function () {
  const text1 = input1.value;
  const text2 = input2.value;

  if (text1.trim() !== "") {
    const p1 = document.createElement("p");
    p1.textContent = text1;

    const deleteButton1 = document.createElement("button");
    deleteButton1.textContent = "Delete";
    deleteButton1.className = "delete-button"; 
    deleteButton1.addEventListener("click", function () {
      p1.remove();
    });

    p1.appendChild(deleteButton1);
    output1.appendChild(p1);
    input1.value = "";
  }

  if (text2.trim() !== "") {
    const p2 = document.createElement("p");
    p2.textContent = text2;

    const deleteButton2 = document.createElement("button");
    deleteButton2.textContent = "Delete";
    deleteButton2.className = "delete-button"; 
    deleteButton2.addEventListener("click", function () {
      p2.remove();
    });

    p2.appendChild(deleteButton2);
    output2.appendChild(p2);
    input2.value = "";
  }
});