
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
    
    let {day, hour, minute, seconde} = myTimer(difference--);
    if (seconde < 0) {
        days.innerText = "00";
        hours.innerText = "00";
        minutes.innerText = "00";
        secondes.innerText = "00";
        clearInterval(id);
    } else {
        days.innerText = String(day);
        hours.innerText = hour;
        minutes.innerText = minute;
        secondes.innerText = seconde;
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
      let {day, hour, minute, seconde} = timerObject;
    day = Math.floor(totalSeconds / (24 * 3600)); 
    totalSeconds = totalSeconds % (24 * 3600); 
    hour = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    minute = Math.floor(totalSeconds / 60);
    seconde = totalSeconds % 60;
    
    // If you want strings with leading zeroes:
    day  = String(day ).padStart(2, "0");
    hour = String(hour).padStart(2, "0");
    minute = String(minute).padStart(2, "0");
    seconde = String(seconde).padStart(2, "0");
    
    timerObject.day = day;
    timerObject.hour = hour;
    timerObject.minute = minute;
    timerObject.seconde = seconde;
    return timerObject;
}
