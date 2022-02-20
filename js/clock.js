const clock = document.querySelector("#clock");
function getClock() {
    const date= new Date();
    const mm = String(date.getMinutes()).padStart(2,"0");
    const hh = String(date.getHours()).padStart(2,"0");
    clock.innerText=`${hh}:${mm}`;
}

//세로고침 즉시 시간이 호출되고, 1초 후부터 갱신
getClock();
setInterval(getClock,1000);