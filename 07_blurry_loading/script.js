const bg = document.querySelector("#bg");
const text = document.querySelector(".text");

let num = 0;
let int = setInterval(blurring, 30);
function blurring() {
  num++;

  if (num > 99) {
    clearInterval(int);
  }

  bg.style.filter = `blur(${scope(num, 0, 100, 30, 0)}px)`;
  text.innerHTML = `${num}%`;
  text.style.opacity = scope(num, 0, 100, 1, 0);
}

function scope(num, InMin, InMax, OutMin, OutMax) {
  return ((num - InMin) * (OutMax - OutMin)) / (InMax - InMin) + OutMin;
}
