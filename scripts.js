let [milliseconds, seconds] = [0, 0];
let timeRef = document.querySelector(".timer");
let int = null;
var count = 0;
var counter;
var timer;

let hands = document.querySelectorAll(".buttons");
let s = document.getElementById("start");


var counter;
var count = 0;

function start() {
    hands.forEach(x => x.classList.add('red'));
    counter = setInterval(
        function() {
            count++;
            if (count > 1) {
                hands.forEach(x => x.classList.add('green'));
            }
        }, 200);
}
function end() {
    clearInterval(counter);
    hands.forEach(x => x.classList.remove('red'));
    hands.forEach(x => x.classList.remove('green'));
    if (count > 1) {
        timer = setInterval(displayTimer, 10);
        document.addEventListener('keyup', event => {
            if (event.code === 'Space') {
              clearInterval(timer)
            }
    })
    count = 0;
}
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
