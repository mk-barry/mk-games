const divzero = ids.sort(() => Math.random() - 0.5).slice(0, 10);

ids.forEach(id => {
    const div = document.getElementById(id);
    
    if (divzero.includes(id)) {
        div.textContent = "💣";
    }else{
        div.textContent = "😎";
    }
})