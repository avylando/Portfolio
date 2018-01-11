'use strict';

(function () {

  let form = document.querySelector('.feedback__form');
  let inputName = form.querySelector('#username');
  let inputMail = form.querySelector('#email');
  let feedbackWindow = document.querySelector('.feedback');


  let successWindow = function () {
    let modalSuccess = document.querySelector('.send-success');
    modalSuccess.classList.add('modal--show');
  }

  let errorWindow = function (errorMessage) {
    console.log(errorMessage);
  }

  form.addEventListener('invalid', function (evt) {
    if (inputName.validityState.valueMissing) {
      inputName.setCustomValidity('Пожалуйста, заполните имя');
    }
  })

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    let formData = new FormData(form);
    window.sendRequest(formData, successWindow, errorWindow);
    feedbackWindow.classList.remove('modal--show');
    feedbackWindow.classList.add('modal--close');
  })


})();
