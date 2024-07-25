const viewOption = document.querySelectorAll(".view-option");
let largeView = document.querySelector("#large-view");
const sizes = document.querySelectorAll("li");

viewOption.forEach((view) => {
  view.addEventListener("click", () => {
    const imgSrc = view.querySelector("img").src;

    viewOption.forEach((view) => {
      view.classList.remove("active-view");
    });

    largeView.src = imgSrc;
    view.classList.add("active-view");
  });
});

sizes.forEach((size) => {
  size.addEventListener("click", () => {
    sizes.forEach((size) => {
      size.classList.remove("active-size");
    });
    size.classList.add("active-size");
  });
});
