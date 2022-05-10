const bodyElem = document.getElementById("html-body");

function simulateTime(time) {
    bodyElem.classList = "body-transition";
    bodyElem.classList.remove("dawn", "day", "night");
    
    if (time === "day") {
        bodyElem.classList.add("day");
    } else if (time == "night") {
        bodyElem.classList.add("night");
    } else if (time == "dawn") {
        bodyElem.classList.add("dawn") ;
    }
}

function renderClock() {
    let clock = document.getElementById("clock");
    let currentDate = new Date();

    let h = currentDate.getHours();
    let m = currentDate.getMinutes();
    let s = currentDate.getSeconds();

    if (m < 10) {
        m = "0"+m;
    }
    
    if (s < 10) {
        s = "0"+m;
    }

    clock.innerText = h +  " : " + m + " : " + s;
    setInterval(renderClock, 1000); // refresh every 1 second
}

function renderUTCTime() {
    let clock = document.getElementById("clock-utc");

    // get date in local time
    let currentDate = new Date(); 

    // convert to UTC time
    currentDate = new Date(
        currentDate.getUTCFullYear(), 
        currentDate.getUTCMonth(), 
        currentDate.getUTCDay(), 
        currentDate.getUTCHours(), 
        currentDate.getUTCMinutes(), 
        currentDate.getUTCSeconds()
    );

    let h = currentDate.getHours();
    let m = currentDate.getMinutes();
    let s = currentDate.getSeconds();

    if (m < 10) {
        m = "0"+m;
    }
    
    if (s < 10) {
        s = "0"+m;
    }


    clock.innerText = h +  " : " + m + " : " + s + " UTC";

    setInterval(renderUTCTime, 1000); // refresh every 1 second
}

function renderBackground() {
    let hours = (new Date()).getHours();

    // if time between 06:00 and 17:00 its day
    if (hours > 6 && hours < 17) {
        simulateTime("day");
    } else if (hours > 17 && hours < 20) {
        // if time between 17:00 and 20:00 its dawn
        simulateTime("dawn");
    } else {
        // between 20:00 and 06:00 night
        simulateTime("night");
    }
}

function app() {
    renderUTCTime();
    renderClock();
    renderBackground();

}

app();