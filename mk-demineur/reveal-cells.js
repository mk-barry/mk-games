const cells = document.querySelectorAll('.cell');
const decompte = document.getElementById("decompteur");
const lose = document.getElementById("lose");
const win = document.getElementById("win");
let revealgood = 0;

decompte.textContent = "Vous avez encore " + (ids.length-10) + " 😎 à découvrir";
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        cell.classList.add("reveal");
        if(cell.textContent === "💣"){
            lose.textContent = "Vous avez perdu !!! 😌";
            decompte.textContent = ""
            container.classList.add("disable");
        }else{
            revealgood++;
            decompte.textContent = "Vous avez encore " + ((ids.length - 10) - revealgood) + " 😎 à découvrir";
            if (revealgood === 71) {
                win.textContent = "Vous avez gagné !! 😆";
            }
        }
    })
})