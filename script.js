const container = document.querySelector(".container");
let numberOfSquares = 256;

for (let i=0; i< numberOfSquares; i++) {
    const div = document.createElement("div");
    div.classList.add("pxl");
    container.appendChild(div);
}

function changeColor (e) {
    if(e.target.classList.value === 'pxl') {
        e.target.classList.add('trail')
    }
}

container.addEventListener("mouseover",changeColor);