const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');
const number3 = document.querySelector('.number3');
const number4 = document.querySelector('.number4');
const number5 = document.querySelector('.number5');
const number6 = document.querySelector('.number6');
const number7 = document.querySelector('.number7');
const number8 = document.querySelector('.number8');
const number9 = document.querySelector('.number9');
const number10 = document.querySelector('.number10');
const number11 = document.querySelector('.number11');
const number12 = document.querySelector('.number12');

const HOUR_ARROW = document.getElementById('hour_arrow');
const MINUTE_ARROW = document.getElementById('minute_arrow');
const SECOND_ARROW = document.getElementById('second_arrow');


function clock(){
    const currentDate = new Date();
    const GET_SECONDS = currentDate.getSeconds() / 60;
    const GET_MINUTES = (GET_SECONDS + currentDate.getMinutes()) / 60;
    const GET_HOURS = (GET_MINUTES + currentDate.getHours()) / 12;

    getRotation(SECOND_ARROW, GET_SECONDS);
    getRotation(MINUTE_ARROW, GET_MINUTES);
    getRotation(HOUR_ARROW, GET_HOURS);
}

function getRotation(element, rotation){
    element.style.setProperty('--arrow', rotation * 360);
}

setInterval(clock, 1000);
clock();