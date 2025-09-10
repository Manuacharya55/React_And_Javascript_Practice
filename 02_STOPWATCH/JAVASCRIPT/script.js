const timer = document.querySelector("h1");
const button = document.querySelectorAll("button");

let hour = 0;
let minute = 0;
let second = 0;
let stopwatch;

// function to set the timer
const displayTimer = (hour, minute, second) => {
  hour = hour > 9 ? hour : `0${hour}`;
  minute = minute > 9 ? minute : `0${minute}`;
  second = second > 9 ? second : `0${second}`;
  timer.textContent = `${hour} : ${minute} : ${second}`;
};

// adding events to button
button.forEach((curele) => {
  curele.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "start":
        start();
        return;

      case "pause":
        pause("pause");
        return;

      case "reset":
        pause("reset");
        return;

      default:
        pause("reset");
    }
  });
});

// start
const start = () => {
  stopwatch = setInterval(() => {
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }

    displayTimer(hour, minute, second);
  }, 1000);
};

// pause / reset
const pause = (action) => {
  clearInterval(stopwatch);
  if (action === "reset") {
    hour = 0;
    minute = 0;
    second = 0;
  }
  displayTimer(hour, minute, second);
};

// initial render
displayTimer(hour, minute, second);