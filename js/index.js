
// timer
let time = 7200;
var y = Date.now();

// let i = 0;
// setTimeout(function() {
//     let id = document.querySelector("p");
//     id.innerText = "Time: " + i++;
// }, 1000);



let id = setInterval(() => {
    document.getElementById("me").innerText = "Il est : " + myTimer(time--);
   
}, 1000

)

function myTimer(timer) {
    timer += 1621379441;
    let totalSeconds = timer - Math.floor(y / 1000) ;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    
    // If you want strings with leading zeroes:
    minutes = String(minutes).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    return hours + ":" + minutes + ":" + seconds;
}
