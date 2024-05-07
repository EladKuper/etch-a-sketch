let container = document.querySelector('.container');

function makeGrid(x) {
    for (i=0; i<x; i++) {
        for (j=0; j<x; j++) {
            const box = document.createElement('div');
            box.textContent = i+', '+j;
            container.appendChild(box);
        }
    }
}