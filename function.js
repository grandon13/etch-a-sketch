let gridSize = 16;
const sketchGrid = document.querySelector('.workspace');

buildGrid(gridSize);
colorGrid();

//RGB seemed the easiest way to randomize a color
function getRandomRGB() {
    let red, green, blue;
    let rgbColor;

    red = Math.floor(Math.random() * 255 );
    green = Math.floor(Math.random() * 255 );
    blue = Math.floor(Math.random() * 255 );

    rgbColor = `rgb(${red}, ${green}, ${blue})`;
    return rgbColor;
}

function setGridSize() {
    gridSize = prompt('Choose a grid size between 1 and 100');

    while (gridSize < 1 || gridSize > 100) {
        gridSize = prompt('Invalid number! Please choose a grid size between 1 and 100');
    }
    removeGrid();
    buildGrid(gridSize);
    colorGrid();
}

//Builds the grid based on the gridSize number
function buildGrid(gridSize) {
    sketchGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for(let i = 0; i < gridSize ** 2; i++) {
        let cell = document.createElement('div');
        cell.setAttribute('id', `cell${i}`);
        cell.setAttribute('class', 'cell');
        sketchGrid.appendChild(cell);
    }
}

function removeGrid() {
    sketchGrid.replaceChildren();
}

//Colors cells when the mouse hovers over them
function colorGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(brick => brick.addEventListener('mouseover', () => {
        brick.style.backgroundColor = getRandomRGB();
    }));
}

const gridBtn = document.querySelector('.setGrid');
gridBtn.addEventListener('click', () => {
    setGridSize();
});