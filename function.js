let size = 4;
const sketchGrid = document.querySelector('.workspace');
sketchGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

for(let i = 0; i < size ** 2; i++) {
    let brick = document.createElement('div');
    brick.setAttribute('id', `brick${i}`);
    brick.setAttribute('class', 'brick');
    sketchGrid.appendChild(brick);
}