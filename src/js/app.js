// гоблин рандомно появляется в рандомной клетке
const cells = document.querySelectorAll(".cell");

const randomCell = Math.floor(Math.random() * cells.length);
cells[randomCell].classList.add("goblin");

setInterval(() => {
  const goblinCell = document.querySelector(".goblin");

  // найти индекс клетки гоблина в массиве cells
  const goblinCellIndex = Array.from(cells).indexOf(goblinCell);
  
  goblinCell.classList.remove("goblin");
  
  // рандомно выбрать индекс клетки куда переместить гоблина чтобы он не оказался в той же клетке
  let randomCell = Math.floor(Math.random() * cells.length);
  while (randomCell === goblinCellIndex) {
    randomCell = Math.floor(Math.random() * cells.length);
  }

  cells[randomCell].classList.add("goblin");
}, 1000);
