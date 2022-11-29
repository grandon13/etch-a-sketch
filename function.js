let gridSize = 16;
let colorCellInfo;
const sketchGrid = document.querySelector('.workspace');

buildGrid(gridSize);
colorGrid();

//RGB seemed the easiest way to randomize a color
function getRandomRGB() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255 );
    let blue = Math.floor(Math.random() * 255 );

    let rgbColor = [red, green, blue];
    return rgbColor;
}

//Receives input from user and sets a new grid
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
    colorCellInfo = new Array(gridSize**2);

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
                let rgb = getRandomRGB();
                colorCellInfo[i] = [rgb[0], rgb[1], rgb[2], 0];
                cells[i].style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
                cells[i].classList.toggle('colored');
            }
            else {
                dimColor(colorCellInfo[i], i);
            }
        });
    }
}

function dimColor(colorArray, index) {
    const cells = document.querySelectorAll('.cell');

    if (colorArray[3] < 10) {
        colorCellInfo[index][0] = Math.floor(colorArray[0] - colorArray[0] / (10 - colorArray[3]));
        colorCellInfo[index][1] = Math.floor(colorArray[1] - colorArray[1] / (10 - colorArray[3]));
        colorCellInfo[index][2] = Math.floor(colorArray[2] - colorArray[2] / (10 - colorArray[3]));
        colorCellInfo[index][3]++;

        cells[index].style.backgroundColor = `rgb(${colorCellInfo[index][0]},
             ${colorCellInfo[index][1]},
              ${colorCellInfo[index][2]})`;
    }
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