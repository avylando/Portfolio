'use strict';

(function () {
  var advantagesSection = $('.advantages__wrapper');
  var sliderSection = $('.portfolio__wrapper');
  var aboutMeSection = $('.about-me__wrapper');
  console.log(sliderSection);
  $(document).ready(function () {
    $(window).scroll(function () {
      var scrollValue = $(document).scrollTop();
      console.log(scrollValue);
      if (scrollValue > 150) {
        window.debounce(advantagesSection.animate({ 'opacity': '1' }, 1000), 500);
      }

      if (scrollValue > 700) {
        window.debounce(sliderSection.addClass('portfolio--show'), 500);
      }

      if (scrollValue > 1300) {
        window.debounce(aboutMeSection.addClass('about-me--show'), 500);
      }
    })
  })

})();
