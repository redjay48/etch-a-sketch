const gridButton = document.querySelector('.gridSize');
const resetButton = document.querySelector('.reset');
const container = document.querySelector('#container');
const blocks = document.getElementsByClassName('grid');

window.addEventListener('DOMContentLoaded', reset);

gridButton.addEventListener('click', gridSize);



function removeGrid() {
    let child = container.lastChild;
    while (child) {
        container.removeChild(child);
        child = container.lastChild;
    }
}

function addGrid() {
    for (let j = 0; j < 100; j++) {
        const grid = document.createElement('div');
        container.appendChild(grid);
        for (let i = 0; i < 100; i++) {
            const gridBlock = document.createElement('div');
            grid.appendChild(gridBlock);
            gridBlock.className = "grid";
        }
    }
    hover()
}

function reset() {
    removeGrid();
    addGrid();
}


function gridSize() {
    removeGrid();
    let gridNumber = prompt('Enter grid size between 40 and 150:', 0);
    if (gridNumber >= 40 && gridNumber <= 150) {
        for (let j = 0; j < gridNumber; j++) {
            const grid = document.createElement('div');
            container.appendChild(grid);
            for (let i = 0; i < gridNumber; i++) {
                const gridBlock = document.createElement('div');
                grid.appendChild(gridBlock);
                gridBlock.className = "grid";
            }
        }
    } else { reset(); }

    if (gridNumber) {
        hover();
    }
}

resetButton.addEventListener('click', reset);


function hover() {
    for (block of blocks) {
        block.addEventListener('mousemove', sketch);
    }
}


function sketch(e) {
    if (e.buttons == 1) {
        let num1 = Math.floor(Math.random() * 255);
        let num2 = Math.floor(Math.random() * 255);
        let num3 = Math.floor(Math.random() * 255);
        e.target.style.backgroundColor = `rgb(${num1},${num2},${num3})`;
    }

}
