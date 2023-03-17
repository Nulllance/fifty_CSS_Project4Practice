const btn = document.getElementById("btn");
const boxesContainer = document.getElementById("boxes");

btn.addEventListener("click", () => boxesContainer.classList.toggle("big"));

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const singleBox = document.createElement("div");
      singleBox.classList.add("box");
      singleBox.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(singleBox);
    }
  }
}

createBoxes();
