class Slider {
  constructor(param) {
    this.slider = document.querySelector(param.slider); 
    this.container = this.slider.querySelector(param.container);
    this.slides = this.slider.querySelectorAll(param.slides);
    this.jsSlideNames = this.slider.querySelectorAll(param.jsSlideNames);
    this.btnPrev = this.slider.querySelector(param.prev);
    this.BtnNext = this.slider.querySelector(param.next);
    this.jsActiveSlide = this.slider.querySelector(param.jsActiveSlide);
    this.jsActiveSlideAll = this.slider.querySelector(param.jsActiveSlideAll);
    this.slideCountAll = this.slides.length;
    this.slideActive = 0;
    this.jsActiveSlideAll.textContent = this.slideCountAll;
  }

  start() {
    this.slides.forEach(element => {
      element.style.width = "100%";
    });
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
  }

  render() {
    this.slides.forEach((slide) => {
      slide.style.display = "none";
    });    
    this.slides[this.slideActive].style.display = "flex";
    this.jsActiveSlide.textContent = this.slideActive + 1;

    this.jsSlideNames.forEach((name) => {
      name.style.display = "none";
    });   
    this.jsSlideNames[this.slideActive].style.display = "flex";
  }
}

const sliderAbout = new Slider({
  slider: ".js-slider",
  container: ".js-container",
  slides: ".js-slide",
  prev: ".js-prev",
  next: ".js-next",
  jsActiveSlide: ".js-active-slide",
  jsActiveSlideAll: ".js-active-slide-all",
  jsSlideNames: ".js-slide-names",
});

sliderAbout.start();