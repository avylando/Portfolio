'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var upArrow = document.querySelector('.up-arrow');
  var advantagesSection = document.querySelector('.advantages__wrapper');
  var sliderSection = document.querySelector('.portfolio__wrapper');
  var aboutMeSection = document.querySelector('.about-me__wrapper');

  window.addEventListener('load', function () {
    window.addEventListener('scroll', function () {
      var scrollValue = window.scrollY;
      console.log(scrollValue);
      if (scrollValue > 100) {
        header.classList.add('page-header__mini');
        upArrow.classList.add('up-arrow--show');
      } else if (header.classList.contains('page-header__mini')) {
        header.classList.remove('page-header__mini');
        upArrow.classList.remove('up-arrow--show');
      }

      if (scrollValue > 300) {
        window.debounce(advantagesSection.classList.add('advantages__wrapper--show'), 100);
      }

      if (scrollValue > 900) {
        window.debounce(sliderSection.classList.add('portfolio__wrapper--show'), 100);
      }

      if (scrollValue > 1700) {
        window.debounce(aboutMeSection.classList.add('about-me--show'), 100);
      }
    })
  })

  // Up arrow scroll to top

  var timeout;
  function scrollUp() {
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
      window.scrollBy(0, -100);
      timeout = setTimeout(scrollUp, 20);
    } else clearTimeout(timeout);
    return false;
  }

  upArrow.addEventListener('click', scrollUp);

  // Menu items scroll

  var cooperation = document.querySelector('.menu__link--cooperation');
  var portfolio = document.querySelector('.menu__link--portfolio');
  var aboutMe = document.querySelector('.menu__link--me');
  var contacts = document.querySelector('.menu__link--contacts');

  function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

  cooperation.addEventListener('click', function (evt) {
    evt.preventDefault();
    scrollTo(document.documentElement, 700, 300);
  })

  portfolio.addEventListener('click', function (evt) {
    evt.preventDefault();
    scrollTo(document.documentElement, 1550, 300);
  })

  aboutMe.addEventListener('click', function (evt) {
    evt.preventDefault();
    scrollTo(document.documentElement, 2200, 300);
  })

  contacts.addEventListener('click', function (evt) {
    evt.preventDefault();
    scrollTo(document.documentElement, 3000, 300);
  })

})();
