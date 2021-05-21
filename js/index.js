
const startDate = new Date("May 25, 2021 02:20:00").getTime();
const todayDate = Date.now();
let difference = startDate - todayDate;
difference = Math.floor(difference / 1000);

// selectors
const days = document.querySelector(".days"),
    hours = document.querySelector(".hours"),
    minutes = document.querySelector(".minutes"),
    secondes = document.querySelector(".secondes");

let id = setInterval(() => {
    
    let timer = myTimer(difference--);
    if (timer.seconde < 0) {
        days.innerText = "00";
        hours.innerText = "00";
        minutes.innerText = "00";
        secondes.innerText = "00";
        clearInterval(id);
    } else {
        days.innerText = String(timer.day);
        hours.innerText = timer.hour;
        minutes.innerText = timer.minute;
        secondes.innerText = timer.seconde;
    }
    
}, 1000

)

function myTimer(totalSeconds) {

    var timerObject = {
        day: 0,
        hour: 0,
        minute: 0,
        seconde: 0
      };

    timerObject.day = Math.floor(totalSeconds / (24 * 3600)); 
    totalSeconds = totalSeconds % (24 * 3600); 
    timerObject.hour = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    timerObject.minute = Math.floor(totalSeconds / 60);
    timerObject.seconde = totalSeconds % 60;
    
    // If you want strings with leading zeroes:
    timerObject.day  = String(timerObject.day ).padStart(2, "0");
    timerObject.hour = String(timerObject.hour).padStart(2, "0");
    timerObject.minute = String(timerObject.minute).padStart(2, "0");
    timerObject.seconde = String(timerObject.seconde).padStart(2, "0");

    return timerObject;
}
