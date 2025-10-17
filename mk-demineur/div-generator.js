const container = document.getElementById("container");

const ids = [];

for (let i = 1; i<=81; i++){
    const div = document.createElement("div");

    div.id = i;
    div.classList.add("cell")
    // div.textContent = i;

    container.appendChild(div);
    ids.push(i);
}

