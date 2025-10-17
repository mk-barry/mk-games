const container = document.getElementById("container");

const ids = [];

for (let i = 1; i<=9; i++){
    const div = document.createElement("div");

    div.id = "cell" + i;
    div.classList.add("cell");

    container.appendChild(div);
    ids.push(i);
}