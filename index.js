import colors from './colors.js';

const max = colors.length;
const min = 0;

const refs = {
    bodyEl: document.querySelector('.body-color'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]')
}

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick)


const colorSwitch = {
    intervalId: null,
    isActive: false,
}

function onStartBtnClick(event) {
    if (colorSwitch.isActive) {
        return
    }

    colorSwitch.isActive = true;

    colorSwitch.intervalId = setInterval(() => {
        changeBodyColor(colors)
    }, 1000);
}



function onStopBtnClick(event) {
    clearInterval(colorSwitch.intervalId);
    colorSwitch.isActive = false;
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
    
function changeBodyColor(colors) {
    refs.bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
}
