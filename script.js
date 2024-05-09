let container = document.getElementById('container');

function changeColor() {
    this.style.backgroundColor = "black";
}

function makeGrid(x) {
    for (i=0; i<x; i++) {
        const row = document.createElement('div');
        for (j=0; j<x; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);

            box.addEventListener("mouseover", changeColor);
        }
        container.appendChild(row);
    }
    
}

makeGrid(16);
    
