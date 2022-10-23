var tone2=new Audio('assets/tone2.mp3');
var hour=document.getElementById('hour');
var mint=document.getElementById('mint');
var seco=document.getElementById('seco');
var am=document.getElementById('am');
var week=document.getElementById('week');
var mon=document.getElementById('mon');
var date=document.getElementById('date');
var years=document.getElementById('years');
var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var currentTime,month,day,year,hours,minutes,seconds,weekd;

function clockTick()
{
    currentTime = new Date(),
    month = currentTime.getMonth() + 1,
    day = currentTime.getDate(),
    year = currentTime.getFullYear(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes(),
    seconds = currentTime.getSeconds(),
    weekd=currentTime.getDay();
    if(hours<10){hours=`0${hours}`}
    if(minutes<10){minutes=`0${minutes}`}
    hour.innerHTML=`${hours}:`;
    mint.innerHTML=`${minutes}:`;
    seco.innerHTML=`${seconds}`;
    mon.innerHTML=`- ${months[month-1]}`;
    date.innerHTML=`${day}`;
    years.innerHTML=`${year}`;
    week.innerHTML=`${days[weekd]}`;
}

setInterval(clockTick, 1000);

function ringBell(){
    tone2.play();
}

const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();
    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now")
            ringBell();
        }, timeToAlarm);
    }
}


// var now=new Date();
// var set=new Date('2022-10-03 17:10:00');
// document.getElementById('demo').innerHTML=set-now;
