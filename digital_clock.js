
let d;
let date;
let time;
let hours;
let minutes;
let seconds;

setInterval(() => {

    d = new Date();

    date = d.toLocaleDateString();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    time = hours + ':' + minutes + ':' + seconds;

    document.getElementById('time').innerHTML = time + " on " + date;

}, 1000);