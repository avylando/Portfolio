(function () {
  let fbActivateButton = document.querySelector('.about-me__button');
  let feedback = document.querySelector('.feedback');
  let fbCloseButton = feedback.querySelector('.feedback__close');

  let sendSuccess = document.querySelector('.send-success');
  let ssCloseButton = sendSuccess.querySelector('.send-success__button');

  // window.addEventListener('load', function () {
  //     setTimeout(function () {
  //         feedback.style.display = 'block';
  //     }, 3000)
  // })

  let modalShowClickHandler = function (modal, handlerEsc, handlerEnter) {
    if (modal.classList.contains('modal--close')) {
      modal.classList.remove('modal--close');
      modal.classList.add('modal--show');
    } else {
      modal.classList.add('modal--show');
    }

    window.addEventListener('keydown', handlerEsc);
    closeButton.addEventListener('keydown', handlerEnter);
  }

  let modalCloseClickHandler = function (modal, handlerEsc, handlerEnter) {
    if (modal.classList.contains('modal--show')) {
      modal.classList.remove('modal--show');
      modal.classList.add('modal--close');

      window.removeEventListener('keydown', handlerEsc);
      closeButton.removeEventListener('keydown', handlerEnter);
    }
  }

  let feedbackShowClickHandler = function () {
    modalShowClickHandler(feedback, feedbackCloseEscHandler, feedbackCloseEnterHandler);
  }

  let feedbackCloseClickHandler = function () {
    modalCloseClickHandler(feedback, feedbackCloseEscHandler, feedbackCloseEnterHandler);
  }

  let feedbackCloseEscHandler = function (evt) {
    if (evt.keyCode === 27) {
      feedbackCloseClickHandler();
    }
  }

  let feedbackCloseEnterHandler = function (evt) {
    if (evt.keyCode === 13) {
      feedbackCloseClickHandler();
    }
  }

  fbActivateButton.addEventListener('click', feedbackShowClickHandler);
  fbCloseButton.addEventListener('click', feedbackCloseClickHandler);

  let successCloseClickHandler = function () {
    modalCloseClickHandler(sendSuccess, successCloseEscHandler, successCloseEnterHandler);
  }

  let successCloseEscHandler = function (evt) {
    if (evt.keyCode === 27) {
      successCloseClickHandler();
    }
  }

  let successCloseEnterHandler = function (evt) {
    if (evt.keyCode === 13) {
      successCloseClickHandler();
    }
  }

  ssCloseButton.addEventListener('click', successCloseClickHandler);
})();
