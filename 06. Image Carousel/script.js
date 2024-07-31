const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const mainDisplay = document.querySelector(".main-display");
const imgContainers = document.querySelectorAll(".img-container");

let currentIndex = 0;

function updateDisplay(index) {
  imgContainers.forEach((image, idx) => {
    image.classList.toggle("active", idx === index);
  });
  mainDisplay.style.opacity = 0;
  setTimeout(() => {
    const nextImage = imgContainers[index].querySelector("img").src;
    mainDisplay.src = nextImage;
    mainDisplay.style.opacity = 1;
  }, 500);
}

leftBtn.addEventListener("click", () => {
  currentIndex =
    currentIndex === 0 ? imgContainers.length - 1 : currentIndex - 1;
  updateDisplay(currentIndex);
});

rightBtn.addEventListener("click", () => {
  currentIndex =
    currentIndex === imgContainers.length - 1 ? 0 : currentIndex + 1;
  updateDisplay(currentIndex);
});

imgContainers.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentIndex = index;
    updateDisplay(currentIndex);
  });
});
