const container = document.getElementById("container");
const gridItem = document.getElementsByClassName('grid-item');
const btn = document.getElementById('popupbtn');

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

// makeRows(16, 16);

btn.addEventListener('click', callback);

function callback() {
  const gridSize = prompt("Enter the number of grids per side: ");
  const gridSizeNum = parseInt(gridSize);

  if (Number.isNaN(gridSizeNum) || gridSizeNum <= 0) {
    alert("Invalid input. Please enter a valid positive number.");
    return;
}
  makeRows(gridSizeNum, gridSizeNum);
}