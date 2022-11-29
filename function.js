let gridSize = 16;
const sketchGrid = document.querySelector('.workspace');

buildGrid(gridSize);
colorGrid();

//RGB seemed the easiest way to randomize a color
function getRandomRGB() {
    let red, green, blue;
    let rgbColor;

    red = Math.random() * 255;
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

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', () => {
            if (! cells[i].classList.contains('colored')) {
                cells[i].style.backgroundColor = getRandomRGB();
                cells[i].classList.toggle('colored');
            }
            else {
                dimColor(cells[i].style.backgroundColor);
            }
        });
    }
}

function dimColor(rgb) {
    rgb = rgb.slice(4, -1);
    let rgbArray = rgb.split(', ').map(str => {
        return Number(str);
    });
    console.log(rgbArray);
}

const gridBtn = document.querySelector('.setGrid');
gridBtn.addEventListener('click', () => {
    setGridSize();
});

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    removeGrid();
    buildGrid(gridSize);
    colorGrid();
});