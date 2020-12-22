class SliderAffairs {
  constructor(param) {
    this.slider = document.querySelector(param.slider); 
    this.container = this.slider.querySelector(param.container);
    this.slides = this.slider.querySelectorAll(param.slides);
    this.btnPrev = this.slider.querySelector(param.prev);
    this.BtnNext = this.slider.querySelector(param.next);
    this.slideCountAll = this.slides.length;
    this.slideActive = 0;
  }

  start() {
    this.evenrListener();
    this.render();
  }

  evenrListener() {
    this.btnPrev.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      --this.slideActive;
      if (this.slideActive < 0) {
        this.slideActive = this.slideCountAll - 1;
      }
      this.render();
    });

    this.BtnNext.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      ++this.slideActive;
      if (this.slideActive > this.slideCountAll - 1) {
        this.slideActive = 0;
      }
      this.render();
    });
    window.addEventListener(`resize`, () => {
      this.render();
    });
  }

  render() {    
    let innerWidth = window.innerWidth;
    if (innerWidth <= 720 ) {
      this.slides.forEach((slide) => {
        slide.style.display = "flex";
      });    
      this.slides[0].style.order = '0';
      return;
    }

    this.slides.forEach((slide) => {
      slide.style.display = "none";
    });    
    this.slides[this.slideActive].style.display = "flex";

    if (innerWidth > 1170) {
      if ((this.slideActive + 1) === this.slideCountAll) {
        this.slides[0].style.display = "flex";
        this.slides[0].style.order = '1';
      } else {
        this.slides[this.slideActive + 1].style.display = "flex";
        this.slides[0].style.order = '0';
      }
    }
  }
}

const affairsSlider = new SliderAffairs({
  slider: ".js-slider-affairs",
  container: ".js-container",
  slides: ".js-slide",
  prev: ".js-prev",
  next: ".js-next",
});

affairsSlider.start();