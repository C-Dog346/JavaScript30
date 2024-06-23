const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progressBar = player.querySelector(".progress");
const progress = player.querySelector(".progress__filled");
const pauseToggle = player.querySelector(".toggle");
const playbackSlider = document.getElementsByName("playbackRate")[0];
const volumeSlider = document.getElementsByName("volume")[0];
const skips = player.querySelectorAll("[data-skip");

function updateProgress() {
	progress.style.flexBasis = `${(video.currentTime/video.duration)*100}%`
}

function scrub() {

}

function togglePlay() {
	const videoState = video.paused ? 'play': 'pause';
	video[videoState]();
}

function togglePauseToggleIcon() {
	const buttonState = video.paused ? '►' : '▐▐';
	pauseToggle.textContent = buttonState;
}

function changeSpeed() {
	video[this.name] = this.value;
}

function changeVolume() {
	video[this.name] = this.value;
}

function skip() {
	//console.log(this);
	video.currentTime += parseFloat(this.dataset.skip);
}

video.addEventListener('timeupdate', updateProgress)

progressBar.addEventListener('click', scrub);

pauseToggle.addEventListener('click', togglePlay);
pauseToggle.addEventListener('click', togglePauseToggleIcon);

playbackSlider.addEventListener('change', changeSpeed);
volumeSlider.addEventListener('change', changeVolume);

skips.forEach((button) => {
	button.addEventListener('click', skip)
});

