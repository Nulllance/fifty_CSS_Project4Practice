const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

runAnimation();

function resetDOM() {
  nums.forEach((num) => {
    num.classList.value = "";
  });
  nums[0].classList.value = "in";
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");
}

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1;

    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== nextToLast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        finalShow();
      }
    });
  });
}

function finalShow() {
  finalMessage.classList.add("show");
  counter.classList.add("hide");
}
replay.addEventListener("click", () => {
  resetDOM();
});
