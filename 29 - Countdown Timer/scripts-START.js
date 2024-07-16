const timerButtons = document.querySelectorAll('.timer__button')
const timeLeft = document.querySelector('.display__time-left')

const countDown = (time) => {
	
}

const startTimer = (b) => {
	button = b.target;
	console.log(button)
	const time = button.dataset.time;

	timeLeft.textContent = time;
	countDown(time);
}

timerButtons.forEach(button => {
	button.addEventListener('click', (b) => startTimer(b));
});