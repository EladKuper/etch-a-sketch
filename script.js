let container = document.getElementById('container');

function makeGrid(x) {
    for (i=0; i<x; i++) {
        for (j=0; j<x; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.textContent = i+', '+j;
            container.appendChild(box);
        }
    }
}

makeGrid(4);