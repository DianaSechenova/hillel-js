(function slider() {
  const prev = document.querySelector(".js--slider__prev");
  const next = document.querySelector(".js--slider__next");
  const list = document.querySelector(".js--list");
  const liCount = list.getElementsByTagName("li");
  const dotsContainer = document.querySelector(".js--slider__dots");

  let currentSlideIndex = 0;

  updateButtons();

  function updateButtons() {
    if (currentSlideIndex === 0) {
      prev.style.display = "none";
    } else {
      prev.style.display = "flex";
    }

    if (currentSlideIndex === liCount.length - 1) {
      next.style.display = "none";
    } else {
      next.style.display = "flex";
    }

    const dots = dotsContainer.querySelectorAll(".slider__dot");
    dots.forEach((dot, index) => {
      if (index === currentSlideIndex) {
        dot.classList.add("active__dot");
      } else {
        dot.classList.remove("active__dot");
      }
    });
  }

  for (let i = 0; i < liCount.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("slider__dot");
    dotsContainer.appendChild(dot);
    dot.addEventListener("click", function () {
      const prevSlideIndex = currentSlideIndex;
      currentSlideIndex = i;
      updateButtons();
      if (currentSlideIndex !== prevSlideIndex) {
        changeSlide();
      }
    });
  }

  next.addEventListener("click", function () {
    const activeClassName = "active";
    const activeElement = list.querySelector(".active");
    const nextElement = activeElement.nextElementSibling;
    if (nextElement) {
      activeElement.classList.remove(activeClassName);
      nextElement.classList.add(activeClassName);
      currentSlideIndex++;
      updateButtons();
    }
  });

  prev.addEventListener("click", function () {
    const activeClassName = "active";
    const activeElement = list.querySelector(".active");
    const prevElement = activeElement.previousElementSibling;

    if (prevElement) {
      activeElement.classList.remove(activeClassName);
      prevElement.classList.add(activeClassName);
      currentSlideIndex--;
      updateButtons();
    }
  });

  function changeSlide() {
    const activeClassName = "active";
    const activeElement = list.querySelector(".active");
    const newActiveElement = list.getElementsByTagName("li")[currentSlideIndex];
    activeElement.classList.remove(activeClassName);
    newActiveElement.classList.add(activeClassName);
  }
})();
