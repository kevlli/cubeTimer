let [milliseconds, seconds] = [0, 0];
let timeRef = document.querySelector(".timer");
let int = null;
var count = 0;
var counter;

let hands = document.querySelectorAll(".buttons");

function start() {
    counter = setInterval(count++, 10);
}

function end() {
    setInterval(displayTimer(), 10);
    if (counter > 0) {
        setInterval(displayTimer(), 10);
    }
    clearInterval(counter)
}

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
    }
 
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    timeRef.innerHTML = `${s} : ${ms}`;

}