const slides = document.querySelectorAll(".slide");

const clearActiveClasses = () => {
  slides.forEach((el) => {
    el.classList.remove("active");
  });
};

const addClassActive = (slide) => {
  clearActiveClasses();
  slide.classList.add("active");
};

for (const slide of slides) {
  slide.addEventListener("click", () => addClassActive(slide));
}
