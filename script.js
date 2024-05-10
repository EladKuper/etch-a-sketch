let container = document.getElementById('container');

//Change the color of a cell
function changeColor() {
    this.style.backgroundColor = "black";
}

//Create a grid
function makeGrid(squaresPerSide) {
    for (i=0; i<squaresPerSide; i++) {
        const row = document.createElement('div');
        for (j=0; j<squaresPerSide; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);

            box.addEventListener("mouseover", changeColor);
        }
        container.appendChild(row);
    }
    
}

//Get input for new grid size
function getGridSize() {
    let inputGridSize = prompt("Choose a number of squers per side (maximum 100):", "16");
    if (inputGridSize > 100) {
        alert("The number must be not bigger than 100");
        getGridSize();
    }
    return inputGridSize;
}

//Remove the existing grid
function removeGridCells() {
    container.replaceChildren();
}

//Create a new grid by input
function makeGridByInput() {
    let gridSize = getGridSize();
    removeGridCells();
    makeGrid(gridSize);
}

makeGrid(16);
    
