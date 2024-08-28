const images = document.querySelector(".images");
const imgButton = document.querySelectorAll(".button");
const stars = document.querySelectorAll(".star");
const heart = document.querySelector(".fa-heart");

imgButton.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    images.style.transform = `translate(-${index * 100}%)`;
  });
});

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});

heart.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-regular")) {
    e.target.classList.remove("fa-regular");
    e.target.classList.add("fa-solid");
  } else if (e.target.classList.contains("fa-solid")) {
    e.target.classList.remove("fa-solid");
    e.target.classList.add("fa-regular");
  }
});
