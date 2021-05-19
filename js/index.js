
// timer
let time = 7200;
var y = Date.now();
let todayDate = Math.floor(y / 1000);
let startDate = 1621581601;
// let i = 0;
// setTimeout(function() {
//     let id = document.querySelector("p");
//     id.innerText = "Time: " + i++;
// }, 1000);



let id = setInterval(() => {
    document.getElementById("me").innerHTML =  myTimer(time--);
    if ( (time + startDate) <= todayDate) {
        document.getElementById("me").innerText = "Il est : 00:00:00:00";
        clearInterval(id);
    }
}, 1000

)

function myTimer(timer) {
    timer += startDate;
    let totalSeconds = timer - Math.floor(y / 1000) ;
    let day = Math.floor(totalSeconds / (24 * 3600)); 
    totalSeconds = totalSeconds % (24 * 3600); 
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    
    // If you want strings with leading zeroes:
    day = String(day).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    return "<span>" + day + "</span>" + ":" + "<span>" + hours + "</span>" + ":" + "<span>" + minutes + "</span>" + ":" + "<span>" + seconds + "</span>" ;
}
