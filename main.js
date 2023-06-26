const container = document.getElementById("container");
const gridItem = document.getElementsByClassName('grid-item');

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    cell.className = "grid-item";
    container.appendChild(cell);
  }
}

makeRows(16, 16);

gridItem.addEventListener('hover', )