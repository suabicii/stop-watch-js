let time = document.querySelector('.time div');
let seconds = 0;
let clickStart = false;
const btnStart = document.querySelector('.main');
const btnReset = document.querySelector('.reset');



btnStart.addEventListener('click', () => {
    clickStart = !clickStart;
    const start = setInterval(() => {
        if (clickStart === true) {
            btnStart.textContent = "Pauza";
            seconds++;
            time.textContent = (seconds / 100).toFixed(2);
        } else {
            btnStart.textContent = "Start";
            clearInterval(start);
        }
    }, 10);
});

btnReset.addEventListener('click', () => {
    clickStart = false;
    seconds = 0;
    btnStart.textContent = "Start";
    time.textContent = "---";
});