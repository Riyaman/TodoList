let startTime = 0;
let updatedTime = 0;
let difference = 0;
let tInterval;
let running = false;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const display = document.getElementById('display');

function startStop() {
    if (!running) {
        startTime = new Date().getTime() - difference;
        tInterval = setInterval(getShowTime, 10); // Adjusted interval to 10ms for better accuracy
        running = true;
        startStopBtn.innerHTML = 'Stop';
        startStopBtn.style.backgroundColor = '#dc3545';
    } else {
        clearInterval(tInterval);
        running = false;
        startStopBtn.innerHTML = 'Start';
        startStopBtn.style.backgroundColor = '#28a745';
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    startStopBtn.innerHTML = 'Start';
    startStopBtn.style.backgroundColor = '#28a745';
    difference = 0;
    display.innerHTML = '00:00:00:00';
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    milliseconds = (milliseconds < 10) ? '0' + milliseconds : milliseconds;

    display.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
