//Put grid div inside container

const game = document.querySelector("#container");
//let number = prompt("Enter size of grid: ");
const grid = document.createElement('div');
grid.classList.add('grid');
game.appendChild(grid);
widthSize = 400;

grid.addEventListener("mouseover",mouseOver);

function mouseOver() {
    grid.style.backgroundColor = "black";
}


var clearButton = {
    clearGrid : function() {

    }
}

function numberOfBoxes(number) {
    var gridSize = widthSize/number;
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(" +number+ "," + gridSize + "px)";
    container.style.gridTemplateRows = "repeat(" +number+ "," + gridSize + "px)";
}
