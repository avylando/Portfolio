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
  var cooperation = document.querySelector('.menu__link--cooperation');
  var portfolio = document.querySelector('.menu__link--portfolio');
  var aboutMe = document.querySelector('.menu__link--me');
  var contacts = document.querySelector('.menu__link--contacts');
  var menuItems = document.querySelectorAll('.menu__link');
  var timeout;

  var checkActiveItems = function (element) {

    menuItems.forEach(function (item) {
      if (timeout) {
        clearTimeout(timeout);
      }

      if (element) {
        if (item.classList.contains('menu__link--active') && item !== element) {
          item.classList.remove('menu__link--active');
        }
        timeout = setTimeout(function () { element.classList.add('menu__link--active') }, 300);
      } else {
        item.classList.remove('menu__link--active');
      }
    });

  }

  var scrollValueComparator = function (scrollValue, advBpoint, portBpoint, aboutBpoint, contBpoint) {
    if (scrollValue <= advBpoint) {
      checkActiveItems();
    }
    if (scrollValue > advBpoint && scrollValue <= portBpoint) {
      advantagesSection.classList.add('advantages__wrapper--show');
      checkActiveItems(cooperation);
    }
    if (scrollValue > portBpoint && scrollValue <= aboutBpoint) {
      sliderSection.classList.add('portfolio__main-wrapper--show');
      checkActiveItems(portfolio);
    }
    if (scrollValue > aboutBpoint && scrollValue <= contBpoint) {
      aboutMeSection.classList.add('about-me--show');
      checkActiveItems(aboutMe);
    }
    if (scrollValue > contBpoint) {

      checkActiveItems(contacts);
    }
  }

  window.addEventListener('load', function () {
    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      console.log(scrollTop);
      if (scrollTop > 100) {
        header.classList.add('page-header__mini');
        upArrow.classList.add('up-arrow--show');
      } else if (header.classList.contains('page-header__mini')) {
        header.classList.remove('page-header__mini');
        upArrow.classList.remove('up-arrow--show');
      }

      if (currentWidth < tabletWidth) {
        scrollValueComparator(scrollTop, 50, 1200, 2300, 3000);
      }

      if (currentWidth >= tabletWidth && currentWidth < desktopWidth) {
        scrollValueComparator(scrollTop, 100, 1050, 2400, 2800);
      }

      if (currentWidth >= desktopWidth) {
        scrollValueComparator(scrollTop, 500, 1200, 2000, 2500);
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
    widthScrollComparator(400, 600, 700);

  })

  portfolio.addEventListener('click', function (evt) {
    evt.preventDefault();
    widthScrollComparator(1955, 1500, 1515);
    checkActiveItems(portfolio);
  })

  aboutMe.addEventListener('click', function (evt) {
    evt.preventDefault();
    widthScrollComparator(2695, 2735, 2275);
    checkActiveItems(aboutMe);
  })

  contacts.addEventListener('click', function (evt) {
    evt.preventDefault();
    scrollTo(document.documentElement, 3500, 300);
    checkActiveItems(contacts);
  })

})();
