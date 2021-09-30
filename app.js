const slidesPlugin = (num = 2) => {
  const slides = document.querySelectorAll(".slide");
  slides[num].classList.add("active");

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
};
slidesPlugin();
