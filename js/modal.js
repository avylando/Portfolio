(function () {
    var activateButton = document.querySelector('.about-me__button');
    var modal = document.querySelector('.modal');
    var closeButton = modal.querySelector('.feedback__close');

    // window.addEventListener('load', function () {
    //     setTimeout(function () {
    //         modal.style.display = 'block';
    //     }, 3000)
    // })

    var modalShowClickHandler = function () {
        if (modal.classList.contains('modal--close')) {
            modal.classList.remove('modal--close');
            modal.classList.add('modal--show');
        } else {
            modal.classList.add('modal--show');
        }

        window.addEventListener('keydown', modalCloseEscHandler);
        closeButton.addEventListener('keydown', modalCloseEnterHandler);
    }

    var modalCloseClickHandler = function () {
        if (modal.classList.contains('modal--show')) {
            modal.classList.remove('modal--show');
            modal.classList.add('modal--close');

            window.removeEventListener('keydown', modalCloseEscHandler);
            closeButton.removeEventListener('keydown', modalCloseEnterHandler);
        }
    }

    var modalCloseEscHandler = function (evt) {
        if (evt.keyCode === 27) {
            modalCloseClickHandler();
        }
    }

    var modalCloseEnterHandler = function (evt) {
        if (evt.keyCode === 13) {
            modalCloseClickHandler();
        }
    }

    activateButton.addEventListener('click', modalShowClickHandler);
    closeButton.addEventListener('click', modalCloseClickHandler);
})();