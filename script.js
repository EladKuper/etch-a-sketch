let container = document.getElementById('container');

function makeGrid(x) {
    for (i=0; i<x; i++) {
        const row = document.createElement('div');
        for (j=0; j<x; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

makeGrid(16);