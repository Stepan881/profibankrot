function openPopup() {
  const btnOpenPopup = document.querySelectorAll(`.js-open-popup`);
  const popup = document.querySelector(`.popup`);

  btnOpenPopup.forEach(el => {
    el.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      popup.classList.add(`popup__active`);
    })
  });

  popup.addEventListener(`click`, evt => {
    if (evt.target.matches(`.popup__active`)) {
      evt.preventDefault();
      popup.classList.remove(`popup__active`);
    }
  });
}
openPopup();


function openServicesPopup () {
  const servicesContentWrapper = document.querySelector(`.services__content-wrapper`);
  const servicesPopup = document.querySelector(`.services-popup`);

  servicesContentWrapper.addEventListener(`click`, evt => {
    if (evt.target.matches(`.js-open-services-popup`)) {
      console.log(evt.target);
      let headerWrapper = evt.target.closest(`.services__article-wrapper`);
      let headerText = headerWrapper.querySelector(`.services__article-text`).innerText;
      let headerPrice = headerWrapper.querySelector(`.services__article-price`).innerText;
      
      evt.preventDefault();
      servicesPopup.classList.add(`popup-active`);
      servicesPopup.querySelector(`.services-popup__header`).textContent = headerText;
      servicesPopup.querySelector(`.services-popup__price-number`).textContent = headerPrice;
    }
  });

  servicesPopup.addEventListener(`click`, evt => {
    if (evt.target.matches(`.popup-active`)) {
      evt.preventDefault();
      servicesPopup.classList.remove(`popup-active`);
    }
  })
}
openServicesPopup ();

function escClosePopup () {
  document.addEventListener(`keyup`, (evt) => {
    let servicesPopup = document.querySelector(`.services__popup`);
    let popup = document.querySelector(`.popup`);
    if (evt.keyCode === 27) {
      if (servicesPopup.matches(`.popup-active`)) {
        servicesPopup.classList.remove(`popup-active`);
      }
      if (popup.matches(`.popup__active`)) {
        popup.classList.remove(`popup__active`);
      }
    }
  })
}
escClosePopup ();
