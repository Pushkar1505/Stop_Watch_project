let [second, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("watchTime");
let timer = null;

function stopwatch(){
    second++;
    if(second == 60){
        second = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
let hrs = hours<10 ? "0" + hours: hours;
let min = minutes<10 ? "0" + minutes: minutes;
let sec = second< 10 ? "0" + second: second;


    displayTime.innerHTML = hrs+":"+ min+":"+ sec;
}
function watchsStart(){
    if(timer!= null){
        clearInterval(timer)
    }
    timer =  setInterval(stopwatch,1000);

}
function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [second, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}