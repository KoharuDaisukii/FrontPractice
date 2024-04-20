let date = new Date();

function createTimer() {
    setTimeout("createTimer()", 1000);
    showClock();
}

function showClock() {
    let clockContainer = document.getElementById("clock-container");
    if (document.getElementById("clock") != null)
        clockContainer.removeChild(document.getElementById("clock"));

    let clock = document.createElement("div");
    clock.setAttribute("id", "clock");
    clock.innerHTML = new Date();
    clockContainer.appendChild(clock);
}
