const timerButtons = document.querySelectorAll(".timer__button");
const timeLeft = document.querySelector(".display__time-left");
let timer;

const countDown = (time) => {
  timeLeft.textContent = time;
  console.log(time);
};

const stopTimer = () => {
  while (timer--) {
    window.clearTimeout(timer); // will do nothing if no timeout with id is present
  }
};

const startTimer = (b) => {
  stopTimer();
  button = b.target;
  const startTime = button.dataset.time;

  for (let i = startTime; i >= 0; i--) {
    timer = setTimeout(() => countDown(i), (startTime - i) * 1000);
  }
};

timerButtons.forEach((button) => {
  button.addEventListener("click", (b) => startTimer(b));
});
