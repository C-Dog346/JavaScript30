const timerButtons = document.querySelectorAll(".timer__button");
const timeLeft = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const custom = document.querySelector("#custom");

let timer;

const countDown = (time) => {
  const minutes = Math.floor(time / 60);
  const remainingSeconds = time % 60;
  formattedTime = `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
  timeLeft.textContent = formattedTime;
  document.title = formattedTime;
};

const stopTimer = () => {
  while (timer--) {
    window.clearTimeout(timer); // will do nothing if no timeout with id is present
  }
};

const showEndTime = (startTime) => {
  const date = new Date();
  date.setSeconds(parseInt(date.getSeconds()) + parseInt(startTime));
  const minutes = date.getMinutes();
  return `Be Back At ${date.getHours()}: ${minutes < 10 ? "0" : ""}${minutes}`;
};

const startTimer = (b) => {
  stopTimer();
  button = b.target;
  const startTime = button.dataset.time;
  endTime.textContent = showEndTime(startTime);
  for (let i = startTime; i >= 0; i--) {
    timer = setTimeout(() => countDown(i), (startTime - i) * 1000);
  }
};

const startTimerCustom = (mins) => {
  stopTimer();
  const startTime = mins * 60;
  endTime.textContent = showEndTime(startTime);
  console.log(startTime)
  for (let i = startTime; i >= 0; i--) {
    timer = setTimeout(() => countDown(i), (startTime - i) * 1000);
  }
};

timerButtons.forEach((button) => {
  button.addEventListener("click", (b) => startTimer(b));
});

custom.addEventListener("submit", (mins) => {
  mins.preventDefault();
  startTimerCustom(mins.originalTarget[0].value);
});
