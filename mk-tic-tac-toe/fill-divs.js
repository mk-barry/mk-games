const cells = document.querySelectorAll(".cell");
const signes = ['O', 'X'];
let choix = Math.floor(Math.random()*signes.length);

const equal = document.getElementById("equal");
const win = document.getElementById("win");


const comb1 = document.querySelectorAll("#cell1,  #cell2, #cell3");
const comb2 = document.querySelectorAll("#cell4,  #cell5, #cell6");
const comb3 = document.querySelectorAll("#cell7,  #cell8, #cell9");
const comb4 = document.querySelectorAll("#cell7,  #cell5, #cell3");
const comb5 = document.querySelectorAll("#cell1,  #cell5, #cell9");
const comb6 = document.querySelectorAll("#cell1,  #cell4, #cell7");
const comb7 = document.querySelectorAll("#cell2,  #cell5, #cell8");
const comb8 = document.querySelectorAll("#cell3,  #cell6, #cell9");
console.log(choix);

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.textContent === "") {
            cell.textContent = signes[choix];

            choix = (choix + 1) % signes.length;
        }

        if (Array.from(comb1).every(comb => comb.textContent === "X") || Array.from(comb2).every(comb => comb.textContent === "X") || Array.from(comb3).every(comb => comb.textContent === "X") || Array.from(comb4).every(comb => comb.textContent === "X") || Array.from(comb5).every(comb => comb.textContent === "X") || Array.from(comb6).every(comb => comb.textContent === "X") || Array.from(comb7).every(comb => comb.textContent === "X") || Array.from(comb8).every(comb => comb.textContent === "X")) {
            // alert ("ok");
            container.classList.add('disable');
            win.textContent = "Le joueur X a gagné... 🙂";
        }else if (Array.from(comb1).every(comb => comb.textContent === "O") || Array.from(comb2).every(comb => comb.textContent === "O") || Array.from(comb3).every(comb => comb.textContent === "O") || Array.from(comb4).every(comb => comb.textContent === "O") || Array.from(comb5).every(comb => comb.textContent === "O") || Array.from(comb6).every(comb => comb.textContent === "O") || Array.from(comb7).every(comb => comb.textContent === "O") || Array.from(comb8).every(comb => comb.textContent === "O")) {
            // alert ("noo");
            container.classList.add("disable");
            win.textContent = "Le joueur O a gagné... 🙂";
        }else{
            if (Array.from(cells).every(cell => cell.textContent !== "")) {
                container.classList.add('disable');
                equal.textContent = "C'est une egalité...";
            }
        }
    })
})