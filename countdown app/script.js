
const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minE1 = document.getElementById('min');
const secE1 = document.getElementById('sec');


const newYears = '30 november 2022'

function Countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds =(newYearsDate - currentDate)/ 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours;
    minE1.innerHTML =  minutes;
    secE1.innerHTML = seconds;
    
}

// function  forTime (time){
//     return time < 10 ? '0$(time)' : time;
// }

//initial call
Countdown();


setInterval(Countdown, 1000);
