const timeDisplay = document.getElementById("time");
const datePicker = document.getElementById("datePicker");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime;
let elapsedTime = 0;
let timerInterval;

document.addEventListener("DOMContentLoaded", function () {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  var day = ("0" + currentDate.getDate()).slice(-2);
  var today = year + "-" + month + "-" + day;

  document.getElementById("date").value = today;
});

function updateTime() {
  const totalSeconds = Math.floor(elapsedTime / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  timeDisplay.textContent = formattedTime;
}

async function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateTime();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateTime();
}

startBtn.addEventListener("click", async () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
  await startTimer();
});

stopBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
  stopTimer();
});

resetBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
  resetTimer();
});

const today = new Date().toISOString().split("T")[0];
datePicker.min = today;
datePicker.value = today;

datePicker.disabled = false;

updateTime();
