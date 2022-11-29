let gridSize = 100;
const sketchGrid = document.querySelector('.workspace');

//Builds the grid based on the gridSize number
sketchGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
for(let i = 0; i < gridSize ** 2; i++) {
    let cell = document.createElement('div');
    cell.setAttribute('id', `cell${i}`);
    cell.setAttribute('class', 'cell');
    sketchGrid.appendChild(cell);
}

//Colors cells when the mouse hovers over them
const cells = document.querySelectorAll('.cell');
cells.forEach(brick => brick.addEventListener('mouseover', () => {
    brick.style.backgroundColor = 'grey';
}));