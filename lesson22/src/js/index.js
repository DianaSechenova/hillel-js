import "../scss/style.scss";

document.addEventListener("DOMContentLoaded", function () {
  class Slider {
    constructor(slideWidth, sliderTime) {
      this.slideWidth = slideWidth;
      this.sliderTime = sliderTime;
      this.sliderTimerId = null;
      this.currentSlide = 0;
      this.slider = document.querySelector(".slider");
      this.sliderItems = document.querySelectorAll(".slider__item");
      this.visible = document.querySelector(".visible");
      this.init();
    }

    init() {
      this.slider.style.width =
        this.sliderItems.length * this.slideWidth + "px";
      this.slider.dataset.current = this.currentSlide;
      this.startSlider();
      this.addHoverEvents();
    }

    nextSlide() {
      this.currentSlide++;
      if (this.currentSlide >= this.sliderItems.length) {
        this.currentSlide = 0;
      }
      this.slider.style.transition = "left 0.5s";
      this.slider.style.left = -this.currentSlide * this.slideWidth + "px";
      this.slider.dataset.current = this.currentSlide;
    }

    startSlider() {
      this.sliderTimerId = setInterval(() => this.nextSlide(), this.sliderTime);
    }

    stopSlider() {
      clearInterval(this.sliderTimerId);
    }

    addHoverEvents() {
      this.visible.addEventListener("mouseenter", () => this.stopSlider());
      this.visible.addEventListener("mouseleave", () => {
        this.sliderTimerId = setInterval(
          () => this.nextSlide(),
          this.sliderTime
        );
      });
    }
  }

  new Slider(300, 2000);
});
// $(document).ready(function () {
//   const slide = {
//     slideWidth: 300,
//     sliderTime: 2000,
//     sliderTimerId: null,
//     nextSlide() {
//       const $slider = $(".slider");
//       let currentSlide = parseInt($slider.data("current"));
//       currentSlide++;
//       if (currentSlide >= $(".slider__item").length) {
//         currentSlide = 0;
//       }
//       $slider.animate({ left: -currentSlide * slide.slideWidth }, 500);
//       $slider.data("current", currentSlide);
//     },
//     startSlider() {
//       const $slider = $(".slider");
//       $slider.width($(".slider__item").length * slide.sliderTime);
//       slide.sliderTimerId = setInterval(slide.nextSlide, slide.sliderTime);
//     },
//     stopOnHover() {
//       $(".visible").hover(
//         () => clearInterval(slide.sliderTimerId),
//         () =>
//           (slide.sliderTimerId = setInterval(slide.nextSlide, slide.sliderTime))
//       );
//     },
//   };
//   slide.startSlider();
//   slide.stopOnHover();
// });
