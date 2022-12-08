//создаем переменную для хранения количества очков
const cells = document.querySelectorAll(".cell");
let score = 0;
let goblinPosition = Math.floor(Math.random() * cells.length);


cells[goblinPosition].classList.add("goblin");

setInterval(() => {
  const goblinCell = document.querySelector(".goblin");
  
  if (goblinCell) {
    goblinPosition = Array.from(cells).indexOf(goblinCell);
    goblinCell.classList.remove("goblin");
  }

  // рандомно выбрать индекс клетки куда переместить гоблина чтобы он не оказался в той же клетке
  let randomCell = Math.floor(Math.random() * cells.length);
  while (randomCell === goblinPosition) {
    randomCell = Math.floor(Math.random() * cells.length);
  }

  cells[randomCell].classList.add("goblin");
}, 1000);

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    console.log(score);
    if (cell.classList.contains("goblin")) {
      score++;
      cell.classList.remove("goblin");
    }
  });
});
