'use strict';

(function () {

  var mobileWidth = 320;
  var tabletWidth = 680;
  var desktopWidth = 1090;
  var currentWidth = document.body.clientWidth;

  var header = document.querySelector('.page-header');
  var upArrow = document.querySelector('.up-arrow');
  var advantagesSection = document.querySelector('.advantages__wrapper');
  var sliderSection = document.querySelector('.portfolio__main-wrapper');
  var aboutMeSection = document.querySelector('.about-me__wrapper');

  window.addEventListener('load', function () {
    window.addEventListener('scroll', function () {
      var scrollValue = window.scrollY;
      // console.log(scrollValue);
      if (scrollValue > 100) {
        header.classList.add('page-header__mini');
        upArrow.classList.add('up-arrow--show');
      } else if (header.classList.contains('page-header__mini')) {
        header.classList.remove('page-header__mini');
        upArrow.classList.remove('up-arrow--show');
      }

      if (currentWidth < tabletWidth) {
        if (scrollValue > 50) {
          window.debounce(advantagesSection.classList.add('advantages__wrapper--show'), 100);
        }

        if (scrollValue > 1200) {
          window.debounce(sliderSection.classList.add('portfolio__main-wrapper--show'), 100);
        }

        if (scrollValue > 2300) {
          window.debounce(aboutMeSection.classList.add('about-me--show'), 100);
        }
      }

      if (currentWidth >= tabletWidth && currentWidth < desktopWidth) {

        if (scrollValue > 100) {
          window.debounce(advantagesSection.classList.add('advantages__wrapper--show'), 100);
        }

        if (scrollValue > 1050) {
          window.debounce(sliderSection.classList.add('portfolio__main-wrapper--show'), 100);
        }

        if (scrollValue > 2300) {
          window.debounce(aboutMeSection.classList.add('about-me--show'), 100);
        }

      }

      if (currentWidth >= desktopWidth) {

        if (scrollValue > 300) {
          window.debounce(advantagesSection.classList.add('advantages__wrapper--show'), 100);
        }

        if (scrollValue > 950) {
          window.debounce(sliderSection.classList.add('portfolio__main-wrapper--show'), 100);
        }

        if (scrollValue > 1550) {
          window.debounce(aboutMeSection.classList.add('about-me--show'), 100);
        }
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

    setTimeout(function () {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
    }, 10);
  }

  var widthScrollComparator = function (mobileScroll, tabletScroll, desktopScroll) {
    if (currentWidth < tabletWidth) {
      scrollTo(document.documentElement, mobileScroll, 300);
    }

    if (currentWidth >= tabletWidth && currentWidth < desktopWidth) {
      scrollTo(document.documentElement, tabletScroll, 300);
    }

    if (currentWidth >= desktopWidth) {
      scrollTo(document.documentElement, desktopScroll, 300);
    }
  }

  cooperation.addEventListener('click', function (evt) {
    evt.preventDefault();
    widthScrollComparator(90, 540, 700);
  })

  portfolio.addEventListener('click', function (evt) {
    evt.preventDefault();
    widthScrollComparator(1505, 1535, 1640);
  })

  aboutMe.addEventListener('click', function (evt) {
    evt.preventDefault();
    widthScrollComparator(2630, 2735, 2370);
  })

  contacts.addEventListener('click', function (evt) {
    evt.preventDefault();
    scrollTo(document.documentElement, 4000, 300);
  })

})();
