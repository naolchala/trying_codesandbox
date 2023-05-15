const display = document.getElementById("countdown");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let count = 0;
let counter;

startBtn.addEventListener("click", (event) => {
  counter = setInterval(() => {
    count++;
    display.innerHTML = count;
  }, 10);
});

stopBtn.addEventListener("click", (event) => {
  clearInterval(counter);
});
