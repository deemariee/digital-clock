function displayTime() {
    let today = new Date();
    let timePeriod = "AM"

        if (today.getHours() >= 12) {
            timePeriod = "PM"
        }

    let hours = today.getHours()
        if (hours < 10) {
            hours = "0" + hours
        }

    let minutes = today.getMinutes()
        if (minutes < 10) {
            minutes = "0" + minutes
        }

    let seconds = today.getSeconds()
        if (seconds < 10) {
            seconds = "0" + seconds
        }

    let currentTime = hours + " : " + minutes + " : " + seconds + " " + timePeriod;

    document.getElementById("time").innerHTML = currentTime;
}

let ticker = setInterval(function(){
    displayTime();
}, 1000);