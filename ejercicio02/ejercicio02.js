
const filSel = document.querySelector('select[name="filter"]');
const filterButton = document.querySelector('input[value="Filtrar"]');

const imagenesMiniatura = document.querySelectorAll('img.miniatura');

for (let i = 0; i < imagenesMiniatura.length; i++) {
    imagenesMiniatura[i].addEventListener('mouseover', function () {

        const newI = document.createElement('img');
        newI.setAttribute('src', this.getAttribute('src'));
        newI.classList.add('mini');
        document.body.appendChild(newI);
        const rect = this.getBoundingClientRect();
        newI.style.top = rect.top + 'px';
        newI.style.left = rect.right + '10px';
        newI.style.width = this.offsetWidth * 1.2 + 'px';
        newI.style.height = this.offsetHeight * 1.2 + 'px';
    });
    imagenesMiniatura[i].addEventListener('mouseout', function () {
        const mini = document.querySelector('img.mini');
        if (mini) {
            mini.remove();
        }
    });
}



function filterTable() {
    const seleGen = filSel.value;
    console.log(seleGen)
    const rows = document.querySelectorAll('#art tbody tr');
    rows.forEach(row => {
        if (row.classList.contains(seleGen) || seleGen === '0') {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

filterButton.addEventListener('click', filterTable);
document.addEventListener('DOMContentLoaded', filterTable);
var editButtons = document.querySelectorAll("table button");

editButtons.forEach(function(button) {
button.addEventListener("click", function() {

    const row = this.parentNode.parentNode;
    const imag= row.querySelector("img").getAttribute("src");
    const titu = row.querySelector("td:nth-of-type(3)").textContent;
    const artista = row.querySelector("td:nth-of-type(4)").textContent;
    const fecha= row.querySelector("td:nth-of-type(5)").textContent;
    const genero = row.querySelector("td:nth-of-type(6)").textContent;

    const modal = document.createElement("div");
    modal.classList.add("mo");
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const imedit = document.createElement("div");
    imedit.classList.add("imedit");

    const nuevoEl = document.createElement("div");
    nuevoEl.classList.add("nuev")
    const nuevogenero = document.createElement("input");

    const nuevotitu = document.createElement("h3");
    const nuevim = document.createElement("img");
    const titleInput = document.createElement("input");
    const nuevoartista= document.createElement("input");
    const fechanueva = document.createElement("input");
    const closeButton = document.createElement("button");

    nuevotitu.textContent = "Editar";
    
    nuevim.setAttribute("src", imag);
    
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Título");
    titleInput.setAttribute("value", titu);
    
    nuevoartista.setAttribute("type", "text");
    nuevoartista.setAttribute("placeholder", "Artista");
    nuevoartista.setAttribute("value", artista);
    
    fechanueva.setAttribute("type", "text");
    fechanueva.setAttribute("placeholder", "Año");
    fechanueva.setAttribute("value", fecha);
    
    nuevogenero.setAttribute("type", "text");
    nuevogenero.setAttribute("placeholder", "Género");
    nuevogenero.setAttribute("value", genero);
    
    closeButton.textContent = "x";
    closeButton.classList.add("close-button");
    imedit.appendChild(nuevotitu);
    imedit.appendChild(closeButton);
    nuevoEl.appendChild(titleInput);
    nuevoEl.appendChild(nuevoartista);
    nuevoEl.appendChild(fechanueva);
    nuevoEl.appendChild(nuevogenero);   
    modalContent.appendChild(imedit);
    modalContent.appendChild(nuevim);
    modalContent.appendChild(nuevoEl);    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    modal.style.display = "block";
    closeButton.addEventListener("click", function() {
    row.querySelector("img").setAttribute("src", nuevim.getAttribute("src"));
    row.querySelector("td:nth-of-type(3)").textContent = titleInput.value;
    row.querySelector("td:nth-of-type(4)").textContent = nuevoartista.value;
    row.querySelector("td:nth-of-type(5)").textContent = fechanueva.value;
    row.querySelector("td:nth-of-type(6)").textContent = nuevogenero.value;
    modal.style.display = "none";
    });
    });
});