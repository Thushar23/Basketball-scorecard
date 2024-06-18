let timerInterval;
let totalSeconds = 0;
let timerRunning = false;

function pad(val) {
    return val > 9 ? val : "0" + val;
}

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerInterval = setInterval(function() {
            totalSeconds++;
            let minutes = pad(Math.floor(totalSeconds / 60));
            let seconds = pad(totalSeconds % 60);
            document.getElementById("timer").innerText = minutes + ":" + seconds;
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    totalSeconds = 0;
    document.getElementById("timer").innerText = "00:00";
}

function resetPoints() {
    document.getElementById("hcount").innerText = "0";
    document.getElementById("gcount").innerText = "0";
}

function inch1() {
    let hcount = parseInt(document.getElementById("hcount").textContent);
    document.getElementById("hcount").textContent = hcount + 1;
}

function inch2() {
    let hcount = parseInt(document.getElementById("hcount").textContent);
    document.getElementById("hcount").textContent = hcount + 2;
}

function inch3() {
    let hcount = parseInt(document.getElementById("hcount").textContent);
    document.getElementById("hcount").textContent = hcount + 3;
}

function incg1() {
    let gcount = parseInt(document.getElementById("gcount").textContent);
    document.getElementById("gcount").textContent = gcount + 1;
}

function incg2() {
    let gcount = parseInt(document.getElementById("gcount").textContent);
    document.getElementById("gcount").textContent = gcount + 2;
}

function incg3() {
    let gcount = parseInt(document.getElementById("gcount").textContent);
    document.getElementById("gcount").textContent = gcount + 3;
}
