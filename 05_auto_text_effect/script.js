const textEl = document.querySelector("#text");
const speedEl = document.querySelector("#speed");
let speed = 1.0;
let text = "We Love Programming!";
let idx = 1;
speedEl.addEventListener("input", (e) => (speed = e.target.value));

function writeText() {
  textEl.innerHTML = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }
  let stopTime = 300 / speed;
  setTimeout(writeText, stopTime);
}

writeText();
