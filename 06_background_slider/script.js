const silders = document.querySelectorAll(".slide");
const left_arrow = document.querySelector("#left-arrow");
const right_arrow = document.querySelector("#right-arrow");

document.body.style.backgroundImage =
  "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')";

let imgIndex = 0;

left_arrow.addEventListener("click", () => {
  --imgIndex;
  changeBackgroundImg();
});
right_arrow.addEventListener("click", () => {
  ++imgIndex;
  changeBackgroundImg();
});

function changeBackgroundImg() {
  if (imgIndex <= -1) {
    imgIndex = 4;
  } else if (imgIndex >= 5) {
    imgIndex = 0;
  }
  console.log(silders);
  silders.forEach((silder) => {
    silder.classList.remove("active");
  });
  silders[imgIndex].classList.add("active");
  const imgUrl = silders[imgIndex].style.backgroundImage;
  document.body.style.backgroundImage = imgUrl;
}
